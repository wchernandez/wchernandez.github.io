import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummyKey');

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Please enter a valid email address' });
        }

        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'wchernandez2006@gmail.com',
            subject: `Portfolio Contact: ${name}`,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong><br />${message.replace(/\n/g, '<br/>')}</p>`,
        });

        if (error) {
            console.error('Resend API Error:', error);
            return res.status(500).json({ 
                error: error.message || 'Failed to send email', 
                details: error,
                hint: 'Check your RESEND_API_KEY environment variable on Vercel.'
            });
        }

        return res.status(200).json({ success: true, message: 'Message sent successfully!', data });
    } catch (error) {
        console.error('Server Internal Error:', error);
        return res.status(500).json({ 
            error: 'Internal Server Error', 
            details: error.message,
            stack: error.stack
        });
    }
}
