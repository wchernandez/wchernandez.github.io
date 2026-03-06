import React, { useRef, useEffect } from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight, Download, Menu, X, ExternalLink, Github, Linkedin, Mail, Star } from 'lucide-react';

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
          <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/10/Codicons_%E2%80%93_github-inverted.svg"
              alt="Logo"
              className="w-full h-full object-contain invert"
            />
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

      {/* Centered Headshot image - Hidden on mobile/tablet, visible only from lg breakpoint (1024px+) */}
      <div className="hidden lg:flex absolute inset-x-0 bottom-[-6vh] top-0 items-end justify-center z-0 pointer-events-none overflow-hidden select-none">

        <img
          src="/profile.png"
          alt="William Hernandez"
          className="w-auto h-[70vh] md:h-[75vh] lg:h-[85vh] max-w-none object-contain object-bottom opacity-100 transition-all duration-1000"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)',
            maskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)'
          }}
        />
      </div>

      {/* Bottom fade to black - Z-index elevated to layer OVER the image */}
      <div className="absolute bottom-0 left-0 w-full h-60 md:h-[40rem] bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Title */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
            <p className="font-sans text-secondary text-lg mb-2 animate-fade-in">William Hernandez</p>
            <h1 className="font-sans font-bold text-5xl md:text-7xl xl:text-8xl leading-[1.1] tracking-tight mb-6 text-white drop-shadow-2xl">
              Software<br className="hidden md:block" /> Engineer
            </h1>
            <p className="font-sans text-secondary text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
              Second year student studying a <span className="text-white font-semibold">Bachelor of Engineering with Honours in Software</span> at the University of Waikato.
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

          {/* Right Column: About Box */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="bg-surface/30 backdrop-blur-xl rounded-3xl p-8 border border-white/10 max-w-md shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all">
              {/* Inner top glow */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50" />

              <h3 className="font-serif font-semibold italic text-xl lg:text-2xl mb-4 text-white leading-tight">
                Ambitious, enthusiastic, well-rounded.
              </h3>
              <p className="font-sans text-sm md:text-base text-secondary leading-relaxed">
                I am a software engineering student who builds secure, intelligent systems with a focus on cybersecurity, AI, and deep learning. I enjoy turning complex problems into clean, scalable solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



const projectData = [
  {
    title: "LabDemo",
    role: "Solo Developer",
    tier: "gold",
    description: "Learn to debug, not to copy. LabDemo helps you understand errors in the terminal and gives you tips on how to solve them, rather than directly giving you the solution.",
    tags: ["Typescript", "React.js", "Lucide", "Tailwind CSS", "Shadcn/ui", "eslint"],
    image: "src/assets/LabDemo.png",
    link: "https://labdemoai.vercel.app"
  },
  {
    title: "Citilyze",
    role: "Solo Developer",
    tier: "silver",
    description: "Gives cities a real-time 'governance health score' and predicts risks before they become crises.",
    tags: ["Typescript", "Leaflet.js", "Next.js", "Tailwind CSS"],
    image: "src/assets/Citilyze.png",
    link: "https://citilyze.vercel.app"
  },
  {
    title: "The Hollow Masquerade",
    role: "Co-Developer",
    tier: "bronze",
    description: "First-person 3D horror game where you place masks on mannequins scattered around the map to escape. Be careful, as one of the mannequins may be a monster looking to hunt you. Developed on Godot Engine using GDScript and models created on Blender.\n\nCreated for Global GameJam 2024.",
    tags: ["GDScript", "3D Modelling", "Texturing"],
    image: "src/assets/thehollowmasquerade.jpg",
    link: "https://willhaven.itch.io/the-hollow-masquerade"
  },
  {
    title: "SaveYourFood",
    role: "Solo Developer",
    description: "Find recipes with ingredients you have on hand!",
    tags: ["Mocha"],
    image: "src/assets/SaveYourFood.png",
    link: "https://luqkciwzpyawq.mocha.app/"
  }
];

function ProjectCard({ project, style }) {
  const CardWrapper = project.link ? 'a' : 'div';

  const tierStyles = {
    gold: {
      border: "border-[#FFC300]/40",
      hoverBorder: "hover:border-[#FFC300]/80",
      bg: "bg-[#FFC300]/10",
      star: "#FFC300",
      glow: "shadow-[0_0_25px_rgba(255,195,0,0.25)]"
    },
    silver: {
      border: "border-[#94A3B8]/40",
      hoverBorder: "hover:border-[#94A3B8]/80",
      bg: "bg-[#94A3B8]/10",
      star: "#94A3B8",
      glow: "shadow-[0_0_25px_rgba(148,163,184,0.2)]"
    },
    bronze: {
      border: "border-[#CD7F32]/40",
      hoverBorder: "hover:border-[#CD7F32]/80",
      bg: "bg-[#CD7F32]/10",
      star: "#CD7F32",
      glow: "shadow-[0_0_25px_rgba(205,127,50,0.2)]"
    }
  };

  const currentTier = tierStyles[project.tier] || {
    border: "border-[#2a2a35]",
    hoverBorder: "hover:border-white/30",
    bg: "bg-[#0a0a0f]",
    star: null,
    glow: ""
  };

  return (
    <CardWrapper
      href={project.link}
      target={project.link ? "_blank" : undefined}
      rel={project.link ? "noopener noreferrer" : undefined}
      className={utils_cn(
        "group/card rounded-xl overflow-hidden flex flex-col shrink-0 transition-all duration-500 hover:-translate-y-2 relative border",
        currentTier.bg,
        currentTier.border,
        currentTier.hoverBorder,
        currentTier.glow,
        project.link ? 'cursor-pointer' : ''
      )}
      style={{ ...style, display: 'flex' }}
    >
      <div className="aspect-video w-full bg-[#050508] relative overflow-hidden border-b border-[#2a2a35]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-90" />

        {/* Hover overlay for links */}
        {project.link && (
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 backdrop-blur-[2px]">
            <span className="font-sans font-bold text-white text-[11px] tracking-widest uppercase flex items-center gap-2 bg-black/60 px-4 py-2 rounded-full border border-white/20 shadow-xl hover:scale-110 hover:bg-black/80 transition-all duration-300">
              View Project <ExternalLink size={14} />
            </span>
          </div>
        )}
      </div>
      <div className="p-5 lg:p-6 flex flex-col flex-1 gap-1.5 relative">
        <div className="flex justify-between items-start gap-2">
          <div className="flex-1">
            <h4 className="group/title font-sans font-bold text-white text-lg tracking-tight leading-tight mb-0.5 hover:text-accent transition-colors flex items-center gap-2 w-fit">
              {project.tier && <Star size={16} fill={currentTier.star} color={currentTier.star} className="shrink-0" />}
              {project.title}
              {project.link && <ExternalLink size={14} className="text-white/50 group-hover/title:text-accent transition-colors" />}
            </h4>
            <p className="font-sans italic text-xs md:text-[13px] text-white/60 mb-2">{project.role}</p>
          </div>
        </div>
        <p className="font-sans text-xs md:text-[13px] text-white/70 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="bg-white/[0.08] border border-white/10 text-white/90 text-[9px] md:text-[11px] px-2 py-1 rounded font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </CardWrapper>
  );
}

function ProjectsSection() {
  const scrollContainerRef = useRef(null);
  const extendedProjects = [...projectData, ...projectData, ...projectData, ...projectData, ...projectData];
  const GAP = 24;

  const [cardWidth, setCardWidth] = React.useState(300);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1024) {
        setCardWidth(w * 0.20);
      } else if (w >= 768) {
        setCardWidth(w * 0.30); // Narrower cards for iPad/tablets to fit ~3 cards
      } else {
        setCardWidth(w * 0.82);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const initScroll = useRef(false);
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const blockWidth = projectData.length * (cardWidth + GAP);

    // Initial center on mount
    if (!initScroll.current) {
      el.scrollLeft = blockWidth * 2;
      initScroll.current = true;
    }

    let isScrollingTimer;
    const handleScroll = () => {
      clearTimeout(isScrollingTimer);
      isScrollingTimer = setTimeout(() => {
        const scrollPos = el.scrollLeft;
        if (scrollPos < blockWidth) {
          el.style.scrollBehavior = 'auto';
          el.scrollLeft = scrollPos + (blockWidth * 2);
        } else if (scrollPos > blockWidth * 3) {
          el.style.scrollBehavior = 'auto';
          el.scrollLeft = scrollPos - (blockWidth * 2);
        }
      }, 150);
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(isScrollingTimer);
      el.removeEventListener('scroll', handleScroll);
    };
  }, [cardWidth]);

  const isScrolling = useRef(false);
  const scroll = (direction) => {
    if (scrollContainerRef.current && !isScrolling.current) {
      isScrolling.current = true;
      const el = scrollContainerRef.current;
      const scrollAmount = cardWidth + GAP;
      const blockWidth = projectData.length * scrollAmount;

      // Handle transparent boundary jumping BEFORE we do the smooth scroll
      if (direction === 'left' && el.scrollLeft < blockWidth) {
        el.style.scrollBehavior = 'auto'; // Disable smooth scroll instantly
        el.scrollLeft += blockWidth * 2; // Jump forward 2 blocks seamlessly
        void el.offsetWidth; // Force CSS reflow so the jump happens BEFORE the next line
      } else if (direction === 'right' && el.scrollLeft > blockWidth * 3) {
        el.style.scrollBehavior = 'auto';
        el.scrollLeft -= blockWidth * 2; // Jump backward 2 blocks seamlessly
        void el.offsetWidth;
      }

      // Calculate exact rounded snap point to fix drift
      const currentSnap = Math.round(el.scrollLeft / scrollAmount) * scrollAmount;
      const targetPos = direction === 'left' ? currentSnap - scrollAmount : currentSnap + scrollAmount;

      el.style.scrollBehavior = 'smooth';
      el.scrollTo({ left: targetPos });

      setTimeout(() => {
        isScrolling.current = false;
      }, 500); // Wait for smooth scroll animation to finish
    }
  };

  return (
    <section id="projects" className="relative flex flex-col justify-center overflow-hidden bg-background py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto w-full px-6 md:px-12 lg:px-16 mb-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <h2 className="font-serif text-5xl md:text-6xl text-white tracking-tight whitespace-nowrap m-0 shrink-0 text-center lg:text-left">
            Project Portfolio
          </h2>
          <div className="hidden lg:block w-[1px] h-20 bg-white/20 shrink-0" />
          <p className="font-sans text-secondary text-base lg:text-lg leading-relaxed m-0 text-center lg:text-left max-w-2xl">
            This portfolio highlights a selection of software engineering projects that demonstrate my technical capabilities, problem-solving approach, and growing expertise in cybersecurity, artificial intelligence, and scalable system design
          </p>
        </div>
      </div>

      <div className="relative w-full group">
        <button
          onClick={() => scroll('left')}
          className="flex absolute left-2 md:left-4 lg:left-8 top-1/2 -translate-y-[60%] z-30 w-10 h-10 md:w-16 md:h-16 rounded-full border border-white/20 bg-black/60 backdrop-blur-md items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 shadow-2xl"
          aria-label="Scroll Left"
        >
          <ArrowLeft className="w-5 h-5 md:w-8 md:h-8" />
        </button>

        <button
          onClick={() => scroll('right')}
          className="flex absolute right-2 md:right-4 lg:right-8 top-1/2 -translate-y-[60%] z-30 w-10 h-10 md:w-16 md:h-16 rounded-full border border-white/20 bg-black/60 backdrop-blur-md items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 shadow-2xl"
          aria-label="Scroll Right"
        >
          <ArrowRight className="w-5 h-5 md:w-8 md:h-8" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto w-full pb-12 pt-4 items-stretch px-[5%] md:px-[10%] lg:px-[6%] scroll-smooth-disabled"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {extendedProjects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} style={{ minWidth: `${cardWidth}px`, width: `${cardWidth}px`, maxWidth: `${cardWidth}px` }} />
          ))}
        </div>
      </div>

      {/* My Creative Stack */}
      <div className="w-full flex flex-col items-center gap-8 mt-12 md:mt-20">
        <p className="text-secondary text-[11px] md:text-sm font-sans tracking-[0.2em] font-bold text-center opacity-70 uppercase">MY CREATIVE STACK</p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-center px-4">
          {[
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Visual_Studio_Icon_2026.svg/960px-Visual_Studio_Icon_2026.svg.png?_=20251118115713",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/960px-Notion-logo.svg.png?_=20220918151013",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg",
            "https://upload.wikimedia.org/wikipedia/commons/e/ee/Roblox_Studio_icon_2025.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg"
          ].map((icon, i) => (
            <img
              key={i}
              src={icon}
              alt={`Tech Icon ${i}`}
              className="w-8 h-8 md:w-12 md:h-12 object-contain hover:scale-125 transition-all duration-300"
            />
          ))}
        </div>
      </div>

      <style>{`
        .scroll-smooth-disabled::-webkit-scrollbar { display: none; }
        .scroll-smooth-disabled { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

    </section>
  );
}


function AboutSection() {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [status, setStatus] = React.useState('idle'); // idle, loading, success, error

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset success message after 15 seconds
        setTimeout(() => setStatus('idle'), 15000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="about" className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-16 py-24 md:py-32 overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-16 md:gap-24">

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

            <form onSubmit={handleSubmit} className="space-y-4 mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Name"
                  className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Email"
                  className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Message"
                rows={4}
                className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white/10 transition-all placeholder:text-white/20 resize-none"
              ></textarea>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 rounded-xl bg-white text-background font-bold text-sm hover:bg-gray-200 transition-all active:scale-95 shadow-xl shadow-white/5 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
                {status !== 'loading' && <ArrowUpRight size={18} />}
              </button>

              {status === 'success' && (
                <p className="text-green-400 font-sans text-sm text-center font-medium mt-4">
                  Success! Your message has been sent.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-400 font-sans text-sm text-center font-medium mt-4">
                  Sorry, something went wrong. Please try again.
                </p>
              )}
            </form>

            <div className="flex flex-wrap gap-6 pt-6 border-t border-white/5">
              <a href="https://github.com/wchernandez" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-white transition-all text-xs font-sans group">
                <span className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-lg group-hover:bg-accent group-hover:text-white transition-all">
                  <Github size={14} />
                </span> wchernandez
              </a>
              <a href="https://linkedin.com/in/wchernandez" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary hover:text-white transition-all text-xs font-sans group">
                <span className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-lg group-hover:bg-accent group-hover:text-white transition-all">
                  <Linkedin size={14} />
                </span> wchernandez
              </a>
              <a href="mailto:wchernandez2006@gmail.com" className="flex items-center gap-2 text-secondary hover:text-white transition-all text-xs font-sans group">
                <span className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-lg group-hover:bg-accent group-hover:text-white transition-all">
                  <Mail size={14} />
                </span> Email Me
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
            <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/10/Codicons_%E2%80%93_github-inverted.svg"
                alt="Logo"
                className="w-full h-full object-contain invert"
              />
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

