import React, { useRef, useEffect } from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight, Download, Menu, X } from 'lucide-react';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function utils_cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 md:px-12 lg:px-16 py-4 md:py-6 flex items-center justify-between bg-background/80 backdrop-blur-md border-b border-white/5">
      {/* Logo */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border-2 border-background" />
          </div>
          <span className="font-sans font-bold text-lg tracking-tight">wchernandez</span>
        </div>
        <a
          href="https://github.com/wchernandez"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] text-secondary mt-1 ml-11 hover:text-white transition-colors flex items-center gap-1"
        >
          <ArrowUpRight size={10} /> Visit my GitHub!
        </a>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-4 items-center">
        {['Home', 'About', 'Projects'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="px-4 py-2 rounded-lg text-sm font-medium text-secondary hover:text-white hover:bg-white/5 transition-all"
          >
            {item}
          </a>
        ))}
        <a
          href="#contact"
          className="ml-4 px-6 py-2 rounded-full bg-white text-background text-sm font-bold hover:bg-gray-200 transition-all active:scale-95"
        >
          Contact
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden p-2 text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={utils_cn(
        "fixed inset-0 bg-background/95 backdrop-blur-xl z-50 md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-300",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <button
          className="absolute top-6 right-6 p-2 text-white"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={32} />
        </button>
        {['Home', 'About', 'Projects'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl font-serif text-white hover:text-accent transition-colors"
          >
            {item}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
          className="mt-4 px-10 py-4 rounded-full bg-white text-background text-xl font-bold"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};


function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-32 pb-20 overflow-hidden bg-hero-gradient">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] hero-glow rounded-full pointer-events-none" />

      {/* Bottom fade to black */}
      <div className="absolute bottom-0 left-0 w-full h-40 md:h-80 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-20">

        {/* Left Column: Title */}
        <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
          <p className="font-sans text-secondary text-lg mb-2 animate-fade-in">William Hernandez</p>
          <h1 className="font-sans font-bold text-5xl md:text-7xl xl:text-8xl leading-[1.1] tracking-tight mb-6 text-white">
            Software<br className="hidden md:block" /> Engineer
          </h1>
          <p className="font-sans text-secondary text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
            Second year student studying a <span className="text-white font-semibold">Bachelor of Engineering<br className="hidden sm:block" /> with Honours in Software</span> at the University of Waikato.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#projects" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-background text-sm font-bold hover:bg-white/90 hover:scale-105 transition-all active:scale-95 shadow-lg shadow-white/10">
              VIEW MY PROJECTS
            </a>
            <a href="/public/william_hernandez_cv.pdf" download className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-bold hover:bg-white/10 transition-all active:scale-95">
              <Download size={18} />
              DOWNLOAD MY CV
            </a>
          </div>
        </div>

        {/* Center: Headshot image */}
        <div className="lg:col-span-3 flex justify-center order-first lg:order-none relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-auto lg:h-[70vh] flex items-end">
            <img
              src="/profile.png"
              alt="William Hernandez"
              className="w-full h-full lg:w-auto lg:h-[70vh] max-w-none object-contain object-bottom drop-shadow-[0_20px_50px_rgba(255,255,255,0.15)] opacity-90 transition-opacity duration-700"
              style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
              onLoad={(e) => e.target.style.opacity = '1'}
            />
          </div>
        </div>

        {/* Right Column: About Box */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="bg-surface/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 max-w-sm shadow-2xl relative overflow-hidden group hover:border-white/20 transition-colors">
            {/* Inner top glow */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50" />

            <h3 className="font-serif font-semibold italic text-2xl lg:text-3xl mb-4 text-white leading-tight">
              Ambitious, enthusiastic, well-rounded.
            </h3>
            <p className="font-sans text-sm md:text-base text-secondary leading-relaxed">
              I am a software engineering student who builds secure, intelligent systems with a focus on cybersecurity, AI, and deep learning. I enjoy turning complex problems into clean, scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


const projectData = [
  {
    title: "VioTrace Systems",
    role: "Solo Developer",
    description: "A professional security dashboard that provides log monitoring, CISA/IP forensic vulnerability scanning, and AI-driven threat detection.\n\nCreated as a personal passion project.",
    tags: ["Python", "FastAPI", "vue.js", "OWASP Top 10", "RESTful API", "asyncio", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "The Hollow Masquerade",
    role: "Co-Developer",
    description: "First-person 3D horror game where you place masks on mannequins scattered around the map to escape. Be careful, as one of the mannequins may be a monster looking to hunt you. Developed on Godot Engine using GDScript and models created on Blender.\n\nCreated for Global GameJam 2024.",
    tags: ["GDScript", "3D Modelling", "Texturing"],
    image: "https://images.unsplash.com/photo-1614031679004-9efc86b2fa98?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "VioTrace Systems",
    role: "Solo Developer",
    description: "A professional security dashboard that provides log monitoring, CISA/IP forensic vulnerability scanning, and AI-driven threat detection.",
    tags: ["Python", "FastAPI", "vue.js", "OWASP Top 10", "RESTful API", "asyncio", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "VioTrace Systems",
    role: "Solo Developer",
    description: "A professional security dashboard that provides log monitoring, CISA/IP forensic vulnerability scanning, and AI-driven threat detection.",
    tags: ["Python", "FastAPI", "vue.js", "OWASP Top 10", "RESTful API", "asyncio", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
  }
];

function ProjectCard({ project }) {
  return (
    <div className="group min-w-[300px] md:min-w-[380px] w-[300px] md:w-[380px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col shrink-0 transition-all duration-500 hover:border-white/30 hover:bg-white/[0.08] hover:-translate-y-2 snap-center">
      <div className="h-48 md:h-56 w-full bg-black/40 relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <h4 className="font-sans font-bold text-white text-xl md:text-2xl mb-1 group-hover:text-accent transition-colors">{project.title}</h4>
        <p className="font-sans font-medium text-xs text-secondary/60 mb-4">{project.role}</p>
        <p className="font-sans text-sm text-secondary leading-relaxed mb-6 line-clamp-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="bg-white/5 border border-white/10 text-white/50 text-[10px] px-2.5 py-1 rounded-md font-sans group-hover:border-white/20 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const scrollContainerRef = useRef(null);
  const extendedProjects = [...projectData, ...projectData, ...projectData];

  // Adjusted for responsive card sizes
  const getCardWidth = () => window.innerWidth < 768 ? 300 + 24 : 380 + 24;

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    // Center the scroll initially
    const setWidth = projectData.length * getCardWidth();
    el.scrollLeft = setWidth;

    const handleScroll = () => {
      if (el.scrollLeft < setWidth / 2) {
        el.scrollLeft += setWidth;
      } else if (el.scrollLeft >= setWidth * 1.5) {
        el.scrollLeft -= setWidth;
      }
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = getCardWidth();
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="relative flex flex-col justify-center px-6 md:px-12 lg:px-16 overflow-hidden bg-background py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-8 px-4">
          <div className="space-y-4">
            <h2 className="font-serif text-5xl md:text-7xl tracking-tight text-white m-0">Project Portfolio</h2>
            <div className="w-24 h-1 bg-accent rounded-full" />
          </div>
          <p className="font-sans text-secondary text-base md:text-lg max-w-xl leading-relaxed m-0 opacity-80">
            A selection of software engineering projects demonstrating my <span className="text-white font-medium italic">technical capabilities</span>, problem-solving approach, and growing expertise in cybersecurity and AI.
          </p>
        </div>

        <div className="relative w-full group">
          {/* Navigation Buttons - Hidden on small mobile */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full border border-white/10 bg-background/60 backdrop-blur-md items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 shadow-xl"
            aria-label="Scroll Left"
          >
            <ArrowLeft size={24} />
          </button>

          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute -right-4 lg:-right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full border border-white/10 bg-background/60 backdrop-blur-md items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 shadow-xl"
            aria-label="Scroll Right"
          >
            <ArrowRight size={24} />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto w-full pb-12 pt-4 no-scrollbar items-stretch snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          >
            {extendedProjects.map((proj, idx) => (
              <ProjectCard key={idx} project={proj} />
            ))}
          </div>

          {/* Mobile Scroll Indicator */}
          <div className="md:hidden flex justify-center gap-2 mt-4">
            <div className="w-8 h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-accent" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}


const stackIcons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Roblox_player_icon_black.svg/1200px-Roblox_player_icon_black.svg.png",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg"
];



function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-16 py-24 md:py-32 overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-16 md:gap-24">

        {/* Tech Stack Banner */}
        <div className="w-full flex flex-col items-center gap-8">
          <p className="text-secondary text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase font-bold text-center opacity-60">My Creative Stack</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-center">
            {stackIcons.map((icon, i) => (
              <img
                key={i}
                src={icon}
                alt={`Tech Icon ${i}`}
                className="w-8 h-8 md:w-10 md:h-10 object-contain hover:scale-125 transition-all duration-300 filter grayscale hover:grayscale-0 brightness-150"
              />
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left: Info */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="space-y-4">
              <h2 className="font-serif text-5xl md:text-6xl text-white tracking-tight leading-none mb-2">About Me</h2>
              <div className="w-16 h-1 bg-accent rounded-full" />
            </div>

            <div className="space-y-8">
              {/* Education */}
              <div className="group">
                <h3 className="font-sans font-bold text-accent tracking-widest uppercase text-[10px] mb-2 px-3 py-1 bg-accent/10 w-fit rounded-full">Education</h3>
                <p className="font-sans font-bold text-white text-lg">University of Waikato</p>
                <p className="font-sans text-secondary text-sm">Bachelor of Engineering with Honours in Software</p>
              </div>

              {/* Qualifications */}
              <div className="group">
                <h3 className="font-sans font-bold text-accent tracking-widest uppercase text-[10px] mb-2 px-3 py-1 bg-accent/10 w-fit rounded-full">Qualifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-sans font-bold text-white text-sm">FreeCodeCamp</p>
                    <p className="font-sans text-secondary text-xs">7x Dev Certifications</p>
                  </div>
                  <div>
                    <p className="font-sans font-bold text-white text-sm">AWS</p>
                    <p className="font-sans text-secondary text-xs">Cloud Practitioner</p>
                  </div>
                </div>
              </div>

              {/* Programming */}
              <div className="group">
                <h3 className="font-sans font-bold text-accent tracking-widest uppercase text-[10px] mb-2 px-3 py-1 bg-accent/10 w-fit rounded-full">Stack & Skills</h3>
                <p className="font-sans text-secondary text-sm leading-relaxed">Python, C#, Java, Verilog, MIPS, C++, Lua</p>
              </div>
            </div>
          </div>

          {/* Right: Contact */}
          <div id="contact" className="lg:col-span-7 bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl">
            <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-2 italic">Get in touch</h2>
            <p className="font-sans text-secondary text-sm md:text-base mb-8 opacity-80">
              I'm always open to new opportunities, collaborations, or just a chat about technology.
            </p>

            <form className="space-y-4 mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white/10 transition-all placeholder:text-white/20 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-white text-background font-bold text-sm hover:bg-gray-200 transition-all active:scale-95 shadow-xl shadow-white/5 flex items-center justify-center gap-2"
              >
                Send Message <ArrowUpRight size={18} />
              </button>
            </form>

            <div className="flex flex-wrap gap-6 pt-6 border-t border-white/5">
              <a href="https://github.com/wchernandez" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-white transition-all text-xs font-sans group">
                <span className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-lg group-hover:bg-accent group-hover:text-white transition-all">🐙</span> wchernandez
              </a>
              <a href="https://linkedin.com/in/wchernandez" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-white transition-all text-xs font-sans group">
                <span className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-lg group-hover:bg-accent group-hover:text-white transition-all">💼</span> wchernandez
              </a>
              <a href="mailto:wchernandez2006@gmail.com" className="flex items-center gap-2 text-secondary hover:text-white transition-all text-xs font-sans group">
                <span className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-lg group-hover:bg-accent group-hover:text-white transition-all">✉️</span> Email Me
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 md:py-20 px-6 md:px-12 lg:px-16 border-t border-white/5 bg-background overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-background" />
            </div>
            <span className="font-sans font-bold text-lg tracking-tight text-white uppercase">wchernandez</span>
          </div>
          <p className="text-secondary text-sm font-sans max-w-[280px] text-center md:text-left">
            Building secure, intelligent systems with intentional design and high-fidelity implementation.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6 w-full md:w-auto">
          <div className="flex gap-10 md:gap-8">
            <a href="#home" className="text-secondary hover:text-accent font-sans text-sm font-medium transition-all hover:-translate-y-1">Home</a>
            <a href="#projects" className="text-secondary hover:text-accent font-sans text-sm font-medium transition-all hover:-translate-y-1">Projects</a>
            <a href="#about" className="text-secondary hover:text-accent font-sans text-sm font-medium transition-all hover:-translate-y-1">About</a>
            <a href="#contact" className="text-secondary hover:text-accent font-sans text-sm font-medium transition-all hover:-translate-y-1">Contact</a>
          </div>

          <div className="flex items-center gap-4 text-secondary/30 text-[10px] md:text-xs font-sans tracking-widest uppercase font-bold">
            <span className="w-8 h-px bg-white/5" />
            © {currentYear} William Hernandez
            <span className="w-8 h-px bg-white/5" />
          </div>
        </div>
      </div>

      {/* Back to top floating indicator - visible on desktop */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 group flex-col items-center gap-2 text-secondary/40 hover:text-accent transition-all cursor-pointer"
      >
        <div className="w-px h-10 bg-white/10 group-hover:bg-accent/40 transition-all" />
        <span className="text-[10px] tracking-widest uppercase font-bold">Back to Top</span>
      </button>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-accent selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

