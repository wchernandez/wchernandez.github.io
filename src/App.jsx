import React, { useRef, useEffect } from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight, Download } from 'lucide-react';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function utils_cn(...inputs) {
  return twMerge(clsx(inputs));
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-8 lg:px-16 py-6 flex items-start justify-between">
      {/* Logo */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            {/* simple icon placeholder */}
            <div className="w-4 h-4 rounded-full border-2 border-background" />
          </div>
          <span className="font-sans font-medium text-lg tracking-tight">wchernandez</span>
        </div>
        <a href="https://github.com" className="text-[10px] text-secondary mt-1 ml-11 hover:text-white transition-colors flex items-center gap-1">
          <ArrowUpRight size={10} /> Visit my GitHub Page!
        </a>
      </div>

      {/* Center Links */}
      <div className="hidden md:flex gap-3 mt-1">
        {['Home', 'About', 'Projects'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="px-5 py-1.5 rounded-sm border border-white/20 hover:bg-white/10 transition-colors text-sm font-medium">
            {item}
          </a>
        ))}
      </div>

      {/* Right Contact */}
      <div className="mt-1">
        <a href="#contact" className="px-5 py-1.5 rounded-full bg-white text-background text-sm font-semibold hover:bg-gray-200 transition-colors">
          Contact
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] lg:max-h-[1080px] w-full flex flex-col justify-center px-8 lg:px-16 overflow-hidden bg-hero-gradient">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] hero-glow rounded-full pointer-events-none" />

      {/* Bottom fade to black for seamless transition */}
      <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-background via-background/70 to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">

        {/* Left Column: Title */}
        <div className="lg:col-span-5 flex flex-col justify-center relative z-20">
          <p className="font-sans text-secondary text-lg mb-2">William Hernandez</p>
          <h1 className="font-sans font-bold text-6xl lg:text-7xl xl:text-8xl leading-[1.1] tracking-tight mb-6">
            Software<br />Engineer
          </h1>
          <p className="font-sans text-secondary text-sm md:text-base max-w-sm mb-8 leading-relaxed">
            Second year student studying a <span className="text-white font-semibold">Bachelor of Engineering<br />with Honours in Software</span> at the University of Waikato.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-sm font-semibold hover:bg-white hover:text-background transition-all">
              VIEW MY PROJECTS
            </a>
            <a href="/public/william_hernandez_cv.pdf" download className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-white/10 bg-white/5 text-sm font-semibold hover:bg-white hover:text-background transition-all">
              <Download size={16} />
              DOWNLOAD MY CV
            </a>
          </div>
        </div>

        {/* Center: Headshot image */}
        <div className="lg:col-span-3 flex justify-center relative lg:h-[70vh] items-end pointer-events-none z-0">
          <img
            src="/profile.png"
            alt="William Hernandez"
            className="w-auto h-[50vh] sm:h-[60vh] lg:h-[70vh] max-w-none object-contain object-bottom drop-shadow-2xl opacity-90"
            style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
          />
        </div>

        {/* Right Column: About Box */}
        <div className="lg:col-span-4 flex justify-end relative z-20">
          <div className="bg-[#130f26]/80 backdrop-blur-md rounded-3xl p-8 border border-white/5 max-w-sm shadow-2xl relative overflow-hidden">
            {/* Inner top glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-50" />

            <h3 className="font-serif font-semibold italic text-2xl lg:text-3xl mb-4 text-white">
              Ambitious, enthusiastic, well-rounded.
            </h3>
            <p className="font-sans text-sm text-secondary leading-relaxed">
              I am a software engineering student who builds secure, intelligent systems with a focus on cybersecurity, AI, and deep learning. I enjoy turning complex problems into clean, scalable solutions and developing software that makes a real impact.
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

function ProjectCard({ project, opacity = 1 }) {
  return (
    <div className={`min-w-[340px] max-w-[340px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col shrink-0 transition-opacity duration-300`} style={{ opacity }}>
      <div className="h-44 w-full bg-black/40 relative">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h4 className="font-sans font-bold text-white text-xl mb-1">{project.title}</h4>
        <p className="font-sans font-medium text-xs text-white/50 mb-4">{project.role}</p>
        <p className="font-sans text-xs text-secondary leading-relaxed mb-6 whitespace-pre-wrap flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="bg-white/10 border border-white/10 text-white/70 text-[10px] px-2 py-1 rounded-[4px] font-sans">
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

  // Create an extended array to allow for seamless infinite scrolling
  const extendedProjects = [...projectData, ...projectData, ...projectData, ...projectData];
  // 340px card + 24px gap = 364px per item
  const setWidth = projectData.length * 364;

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    // Start at the 2nd set so we can scroll left immediately
    el.scrollLeft = setWidth;

    const handleScroll = () => {
      // If we scroll back into the 1st set, jump forward to the 3rd set
      if (el.scrollLeft < setWidth / 2) {
        el.scrollLeft += setWidth * 2;
      }
      // If we scroll into the 4th set, jump back to the 2nd set
      else if (el.scrollLeft >= setWidth * 2.5) {
        el.scrollLeft -= setWidth * 2;
      }
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [setWidth]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -364, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 364, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="relative flex flex-col justify-center px-8 lg:px-16 overflow-hidden bg-background pt-16 lg:pt-24 pb-32">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 gap-8 px-4 lg:px-16">
          <h2 className="font-serif text-5xl lg:text-6xl tracking-tight text-white m-0">Project Portfolio</h2>
          <div className="hidden lg:block w-px h-16 bg-white/20"></div>
          <p className="font-sans text-secondary text-sm max-w-lg leading-relaxed m-0">
            This portfolio highlights a selection of software engineering projects that demonstrate my <span className="text-white font-medium">technical capabilities</span>, <span className="text-white font-medium">problem-solving</span> approach, and growing expertise in cybersecurity, artificial intelligence, and scalable system design.
          </p>
        </div>

        <div className="relative w-full flex items-center group">
          {/* Left Arrow Button */}
          <button onClick={scrollLeft} className="absolute left-4 lg:left-8 z-20 w-12 h-12 rounded-full border border-white/20 bg-background/80 backdrop-blur flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
            <ArrowLeft size={20} />
          </button>

          {/* Cards Container */}
          <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto w-full px-20 lg:px-28 pb-8 pt-4 no-scrollbar items-stretch snap-x snap-mandatory">
            {extendedProjects.map((proj, idx) => (
              <ProjectCard key={idx} project={proj} />
            ))}
          </div>

          {/* Right Arrow Button */}
          <button onClick={scrollRight} className="absolute right-4 lg:right-8 z-20 w-12 h-12 rounded-full border border-white/20 bg-background/80 backdrop-blur flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Hide scrollbar styles locally */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
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
    <section id="about" className="relative h-screen min-h-[700px] lg:max-h-[1080px] w-full flex flex-col justify-center px-8 lg:px-16 overflow-hidden bg-background">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col justify-center h-full gap-8">

        {/* Stack Integrated Top */}
        <div className="w-full mb-4">
          <p className="text-secondary text-[10px] font-sans mb-4 tracking-widest uppercase font-bold lg:text-center text-left">My Creative Stack</p>
          <div className="flex flex-wrap justify-start lg:justify-center gap-6 items-center">
            {stackIcons.map((icon, i) => (
              <img key={i} src={icon} alt={`Tech ${i}`} className="w-6 h-6 md:w-8 md:h-8 object-contain hover:scale-110 transition-transform invert dark:invert-0" />
            ))}
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 flex-1 content-center items-center pb-20">

          {/* Left Column: About & Resume Details */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-none mb-2">About Me</h2>

            {/* Education */}
            <div>
              <h3 className="font-sans font-bold text-white tracking-wide uppercase text-xs mb-2">Education</h3>
              <p className="font-sans font-bold text-white text-sm">University of Waikato</p>
              <p className="font-sans text-secondary text-xs">Bachelor of Engineering with Honours in Software</p>
            </div>

            {/* Certifications (Condensed) */}
            <div>
              <h3 className="font-sans font-bold text-white tracking-wide uppercase text-xs mb-2">Qualifications</h3>
              <div className="flex gap-4">
                <div>
                  <p className="font-sans font-bold text-white text-xs">FreeCodeCamp</p>
                  <p className="font-sans text-secondary text-xs">7x Dev Certifications</p>
                </div>
                <div>
                  <p className="font-sans font-bold text-white text-xs">AWS</p>
                  <p className="font-sans text-secondary text-xs">Cloud Practitioner</p>
                </div>
              </div>
            </div>

            {/* Languages & Programming */}
            <div>
              <h3 className="font-sans font-bold text-white tracking-wide uppercase text-xs mb-2">Stack & Skills</h3>
              <p className="font-sans text-secondary text-xs leading-relaxed">Python, C#, Java, Verilog, MIPS, C++, Lua</p>
            </div>

            {/* Interests */}
            <div>
              <h3 className="font-sans font-bold text-white tracking-wide uppercase text-xs mb-2">Interests</h3>
              <p className="font-sans text-secondary text-xs leading-relaxed">
                Robotics, Music Creation, Gym, Hiking, Badminton, UI Design
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form & Details */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <h2 className="font-serif text-3xl text-white tracking-tight mb-4">William C. Hernandez</h2>

            <p className="font-sans text-secondary text-sm mb-6">
              Feel free to reach out — I'm always open to new opportunities and collaborations.
            </p>

            {/* Form */}
            <form className="space-y-3 mb-8">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-1/2 bg-white text-black px-4 py-2 rounded-md font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-1/2 bg-white text-black px-4 py-2 rounded-md font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={3}
                className="w-full bg-white text-black px-4 py-2 rounded-md font-sans text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              ></textarea>
            </form>

            {/* Contact Details */}
            <div className="space-y-3 mb-6">
              <div className="flex flex-wrap gap-4">
                <a href="#" className="flex items-center gap-2 text-secondary hover:text-white transition-colors text-xs font-sans">
                  <span className="w-4 h-4 flex items-center justify-center">🐙</span> wchernandez
                </a>
                <a href="#" className="flex items-center gap-2 text-secondary hover:text-white transition-colors text-xs font-sans">
                  <span className="w-4 h-4 flex items-center justify-center">💼</span> wchernandez
                </a>
                <a href="mailto:wchernandez2006@gmail.com" className="flex items-center gap-2 text-secondary hover:text-white transition-colors text-xs font-sans">
                  <span className="w-4 h-4 flex items-center justify-center">✉️</span> wchernandez2006@gmail.com
                </a>
              </div>
            </div>

            {/* Download CV */}
            <div>
              <button className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-md font-sans font-bold text-xs hover:bg-gray-200 transition-colors">
                ➜ DOWNLOAD MY CV (.pdf)
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 pt-16 mt-12 px-8 lg:px-16 text-center border-t border-white/5 bg-background relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-6">
          <a href="#home" className="text-secondary hover:text-white text-xs font-sans transition-colors">Home</a>
          <a href="#projects" className="text-secondary hover:text-white text-xs font-sans transition-colors">Projects</a>
          <a href="#about" className="text-secondary hover:text-white text-xs font-sans transition-colors">About</a>
        </div>
        <p className="text-secondary/50 text-[10px] font-sans">
          © William Hernandez 2026
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
