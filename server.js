import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import validator from 'validator';
import xss from 'xss';
import morgan from 'morgan';
import hpp from 'hpp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3001;

// --- Security Middleware ---

// 1. Logging (using morgan for detailed error/access logs)
app.use(morgan('combined'));

// 2. Helmet for secure HTTP headers
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"], // Add specific scripts as needed
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            imgSrc: ["'self'", "data:", "https://upload.wikimedia.org", "https://cdn.jsdelivr.net", "https://images.unsplash.com"],
            connectSrc: ["'self'"], // Restrict API calls to self
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            objectSrc: ["'none'"],
            upgradeInsecureRequests: [],
        },
    },
    // Explicitly set X-Frame-Options to deny embedding
    frameguard: { action: 'deny' },
    // Strict-Transport-Security (1 year)
    hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
    // Prevent MIME-type sniffing
    noSniff: true,
    // Referrer-Policy
    referrerPolicy: { policy: 'no-referrer' },
}));

// 3. Rate Limiting (Prevent Spam/DoS)
const contactLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 5, // Limit each IP to 5 requests per windowMs
    message: { error: 'Too many submissions, please try again later.' },
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use('/api/contact', contactLimiter);

// 4. Restricted Body Size (Prevent massive payloads)
app.use(express.json({ limit: '10kb' }));

// 5. Parameter Pollution Protection
app.use(hpp());

// 6. Restrictive CORS
const allowedOrigins = process.env.NODE_ENV === 'production' 
    ? ['https://wchernandez.github.io', 'https://yourportfolio.com'] // Update with real production URL
    : ['http://localhost:5173']; // Local Vite dev server

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or curl)
        if (!origin || allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV !== 'production') {
            callback(null, true);
        } else {
            console.warn(`Blocked suspicious request from origin: ${origin}`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['POST', 'OPTIONS'], // Restrict to POST for form submission
    allowedHeaders: ['Content-Type'],
    credentials: false // No cookies needed for this simple API
}));

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummyKey');

// --- Routes ---

// Health Check
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
    try {
        // Log basic request info (IP, timestamp, etc handles by morgan)
        const { name, email, message, _honeypot } = req.body;

        // 1. Honeypot check (Bots often fill every field)
        if (_honeypot) {
            console.warn('Bot detected: Honeypot field filled.');
            // Silent block: return success but do nothing to confuse the bot
            return res.status(200).json({ success: true, message: 'Message sent successfully!' });
        }

        // 2. Input Presence & Character Validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Please provide all required fields.' });
        }

        // Validate Name (prevent command injection / malicious symbols)
        if (!validator.isLength(name, { min: 2, max: 100 })) {
            return res.status(400).json({ error: 'Name must be between 2 and 100 characters.' });
        }
        // Allow letters, spaces, and hyphens (sanitize name)
        const cleanName = validator.trim(name);

        // 3. Email Validation
        if (!validator.isEmail(email)) {
            console.error(`Invalid email attempt: ${email}`);
            return res.status(400).json({ error: 'Please enter a valid email address.' });
        }
        const cleanEmail = validator.normalizeEmail(email);

        // 4. Message Sanitization & Length Check
        if (!validator.isLength(message, { min: 1, max: 2000 })) {
            return res.status(400).json({ error: 'Message must be under 2000 characters.' });
        }
        // Strip/Escape HTML/JS to prevent XSS
        const sanitizedMessage = xss(message);

        // Final payload check for suspicious patterns (basic)
        const suspiciousPatterns = [/<script/i, /javascript:/i, /onclick=/i, /DROP TABLE/i];
        if (suspiciousPatterns.some(p => p.test(message))) {
            console.warn(`Suspicious activity detected in message from ${cleanEmail}`);
            return res.status(400).json({ error: 'Suspicious content detected.' });
        }

        // 5. Send Email Securely
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: process.env.CONTACT_EMAIL || 'wchernandez2006@gmail.com',
            subject: `Secure Portfolio Contact: ${cleanName}`,
            replyTo: cleanEmail, // Safely handle reply-to
            html: `<h3>New Contact Message</h3>
                   <p><strong>Name:</strong> ${cleanName}</p>
                   <p><strong>Email:</strong> ${cleanEmail}</p>
                   <p><strong>Message:</strong></p>
                   <div style="background: #f5f5f5; padding: 10px; border-radius: 5px;">
                     ${sanitizedMessage.replace(/\n/g, '<br/>')}
                   </div>
                   <p><small>Submitted via Secure Portfolio Contact Form</small></p>`,
        });

        if (error) {
            console.error('Email service error:', error);
            // Return generic error to user
            return res.status(500).json({ error: 'Something went wrong. Please try again later.' });
        }

        res.status(200).json({ success: true, message: 'Message sent successfully!' });

    } catch (error) {
        console.error('SERVER ERROR:', error.message);
        // Do not expose stack trace or details
        res.status(500).json({ error: 'Something went wrong. Please try again later.' });
    }
});

// Error handling middleware for unexpected server crashes
app.use((err, req, res, next) => {
    console.error('CRITICAL ERROR:', err);
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
    console.log(`Backend server running securely on port ${PORT}`);
});
