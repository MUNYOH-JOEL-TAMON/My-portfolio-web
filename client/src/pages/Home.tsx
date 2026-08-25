import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Network,
  Radar,
  Send,
  Sparkles,
  X,
} from "lucide-react";

const portrait = "/images/portfolio-img.png";
const luminary = "/manus-storage/luminary-ai_9789cf93.png";
const meeting = "/manus-storage/meeting-intelligence_a2d620f3.png";
const mark = "/manus-storage/joel-mark_46bee1bf.png";

const navItems = ["about", "skills", "projects", "experience", "contact"];

const projects = [
  {
    index: "01",
    title: "Luminary AI",
    type: "AI PRODUCT / 2025",
    description: "A signal-rich workspace that helps teams turn scattered ideas into validated product direction.",
    image: luminary,
    tags: ["React", "Python", "OpenAI"],
    artifact: "Artifact / validation workspace",
    accent: "orange",
  },
  {
    index: "02",
    title: "Meeting Intelligence",
    type: "MACHINE LEARNING / 2024",
    description: "An intelligent meeting layer that transforms conversations into searchable, actionable knowledge.",
    image: meeting,
    tags: ["Next.js", "FastAPI", "Postgres"],
    artifact: "Artifact / searchable insight layer",
    accent: "sage",
  },
  {
    index: "03",
    title: "InternSync",
    type: "FULL-STACK PLATFORM / 2024",
    description: "A focused platform connecting early-career talent with the systems and people that accelerate learning.",
    image: null,
    tags: ["Node.js", "Express", "AWS"],
    artifact: "Artifact / connection workflow",
    accent: "ink",
  },
];

const skills = [
  { name: "Python", category: "Programming", signal: "Model / data layer", evidence: "Used in AI prototypes", icon: Code2 },
  { name: "React / Next.js", category: "Frontend", signal: "Product surface", evidence: "Used in shipped interfaces", icon: Sparkles },
  { name: "Node / Express", category: "Backend", signal: "Service layer", evidence: "Used for reliable APIs", icon: Network },
  { name: "Machine Learning", category: "AI", signal: "Intelligence layer", evidence: "Used for useful predictions", icon: BrainCircuit },
  { name: "PostgreSQL", category: "Data", signal: "System memory", evidence: "Used for structured products", icon: Database },
  { name: "AWS / Docker", category: "Cloud", signal: "Runtime layer", evidence: "Used to move ideas live", icon: Cloud },
];

const services = [
  { number: "01", title: "AI Solutions", copy: "From an early model idea to a useful product surface, I build AI that earns its place in the workflow.", icon: BrainCircuit },
  { number: "02", title: "Web Development", copy: "Fast, accessible interfaces and thoughtful product systems that stay clear as they scale.", icon: Code2 },
  { number: "03", title: "Backend Engineering", copy: "Reliable APIs, data layers, and cloud foundations designed around the job they need to do.", icon: Cloud },
];

function SectionLabel({ number, children }: { number: string; children: string }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span></div>;
}

function Home({ scrolled = false }: { scrolled?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell">
      <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
        <a href="#home" className="wordmark" aria-label="Munyoh Joel Tamon home">
          <span className="mark-wrap"><img src={mark} alt="" /></span>
          <span>JOEL<span className="wordmark-dot">.</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <a key={item} href={`#${item}`}>{item}</a>)}
        </nav>
        <a href="#contact" className="nav-cta">Let’s talk <ArrowUpRight size={15} /></a>
        <button className="mobile-menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        {menuOpen && <nav className="mobile-nav">{navItems.map((item) => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}<ArrowUpRight size={15} /></a>)}</nav>}
      </header>

      <section id="home" className="hero section-frame">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse-dot" /> AI ENGINEER <i>•</i> SOFTWARE DEVELOPER</p>
          <h1>Building intelligent software <em>&</em> digital experiences that solve real problems.</h1>
          <p className="hero-intro">I design and develop modern web applications, AI-powered platforms, machine learning solutions, and scalable systems that create real-world impact.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View projects <ArrowUpRight size={16} /></a>
            <a className="text-link" href="#contact">Let’s talk <ArrowDownRight size={16} /></a>
          </div>
          <div className="hero-meta"><span>BASED IN BUEA, CAMEROON</span><span>AVAILABLE FOR SELECT PROJECTS <i className="green-dot" /></span></div>
        </div>

        <div className="hero-portrait-wrap">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="portrait-blob" />
          <img className="hero-portrait" src={portrait} alt="Portrait of Munyoh Joel Tamon" />
          <div className="portrait-stamp"><Radar size={17} /><span>BUILDING<br />USEFUL THINGS</span></div>
          <span className="hero-code">01 / 05</span>
        </div>

        <aside className="hero-rail">
          <p className="rail-title">AI<br /><strong>ENGINEERING</strong></p>
          <p className="rail-copy">Building scalable software with AI, data, and cloud technologies.</p>
          <ul className="capability-list">
            {["AI Engineering", "Full Stack Development", "Machine Learning", "Cloud Computing", "API Development", "Data Science"].map((item) => <li key={item}><Check size={14} />{item}</li>)}
          </ul>
          <div className="social-row"><a href="https://github.com" aria-label="GitHub"><Github size={17} /></a><a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="mailto:hello@joelmunyoh.dev" aria-label="Email"><Mail size={17} /></a></div>
        </aside>
      </section>

      <section className="stats-strip section-frame" aria-label="Portfolio statistics">
        {[{ value: "10+", label: "Projects built", note: "from idea to interface" }, { value: "3+", label: "Years learning", note: "always in motion" }, { value: "15+", label: "Technologies", note: "one useful stack" }, { value: "100%", label: "Curiosity", note: "the unfair advantage" }].map((stat, i) => <div className="stat-card" key={stat.label}><span className="stat-index">0{i + 1}</span><strong>{stat.value}</strong><span>{stat.label}</span><small>{stat.note}</small></div>)}
      </section>

      <section id="about" className="about section-frame content-section">
        <div className="section-intro"><SectionLabel number="01" >A LITTLE CONTEXT</SectionLabel><h2>Curious by default.<br /><span>Useful by design.</span></h2></div>
        <div className="about-content">
          <div className="about-card"><div className="about-card-top"><span>PROFILE / 2026</span><ArrowUpRight size={17} /></div><div className="about-monogram">J<span>/</span></div><div className="about-card-bottom"><span>MU NYOH<br />JOEL TAMON</span><span>AI / FULL-STACK<br />ENGINEERING</span></div></div>
          <div className="about-copy"><p className="large-copy">I’m a passionate AI Engineer, Software Engineer, Computer Engineering student, and Full Stack Developer who likes working where complex technology meets human clarity.</p><p>I’m interested in the full arc of a product: understanding a messy problem, shaping a clean interface, building the system behind it, and learning from what happens next. My toolkit spans React, Node.js, Express, PostgreSQL, Python, machine learning, cloud infrastructure, and generative AI.</p><div className="about-links"><a href="#experience">See my path <ArrowUpRight size={15} /></a><a href="#skills">Explore capabilities <ArrowUpRight size={15} /></a></div></div>
        </div>
      </section>

      <section id="skills" className="skills section-frame content-section">
        <div className="section-intro split-heading"><div><SectionLabel number="02">THE TOOLKIT</SectionLabel><h2>Tools for turning<br /><span>thought into motion.</span></h2></div><p>Not a list for its own sake. These are the tools I reach for when the work needs to be fast, clear, and built to last.</p></div>
        <div className="skill-grid">{skills.map(({ name, category, signal, evidence, icon: Icon }) => <article className="skill-card" key={name}><div className="skill-icon"><Icon size={20} /></div><span className="skill-category">{category}</span><h3>{name}</h3><div className="skill-evidence"><span>{signal}</span><span>↗</span></div><p className="skill-proof">{evidence}</p></article>)}</div>
        <div className="tech-marquee"><span>REACT</span><i>•</i><span>PYTHON</span><i>•</i><span>POSTGRESQL</span><i>•</i><span>OPENAI</span><i>•</i><span>AWS</span><i>•</i><span>DOCKER</span><i>•</i><span>REACT</span></div>
      </section>

      <section id="projects" className="projects section-frame content-section"><div className="section-intro split-heading"><div><SectionLabel number="03">SELECTED WORK</SectionLabel><h2>Small selection.<br /><span>Real intent.</span></h2></div><a className="text-link" href="#contact">Start a project <ArrowUpRight size={16} /></a></div><div className="project-list">{projects.map((project) => <article className={`project-card ${project.accent}`} key={project.title}><div className="project-visual">{project.image ? <img src={project.image} alt={`${project.title} project visual`} /> : <div className="project-placeholder"><span>INTERN</span><strong>SYNC</strong><div className="placeholder-lines"><i /><i /><i /></div></div>}<span className="project-number">{project.index}</span></div><div className="project-info"><div><span className="project-type">{project.type}</span><span className="project-proof">{project.artifact}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><a className="circle-arrow" href="#contact" aria-label={`View ${project.title}`}><ArrowUpRight size={19} /></a></div></article>)}</div></section>

      <section id="experience" className="experience section-frame content-section"><div className="section-intro"><SectionLabel number="04">THE PATH SO FAR</SectionLabel><h2>Learning in public,<br /><span>building with intent.</span></h2></div><div className="timeline"><div className="timeline-line" />{[{ year: "2025 — NOW", title: "AI Engineering & Product Building", copy: "Exploring intelligent products, full-stack systems, and the space between a prototype and something people can rely on." }, { year: "2023 — 2025", title: "Computer Engineering", copy: "Building foundations across software engineering, data structures, networks, systems, and the discipline of learning hard things." }, { year: "ALONG THE WAY", title: "Open Source, Experiments, Community", copy: "Shipping small ideas, asking better questions, and collecting the kind of experience that only comes from making the work real." }].map((item, i) => <div className="timeline-item" key={item.year}><div className="timeline-bullet">0{i + 1}</div><div className="timeline-year">{item.year}</div><div><h3>{item.title}</h3><p>{item.copy}</p></div></div>)}</div></section>

      <section className="services section-frame content-section"><div className="section-intro split-heading"><div><SectionLabel number="05">WHAT I CAN DO</SectionLabel><h2>Bring the hard<br /><span>part to the table.</span></h2></div><p>Good collaboration starts before the first line of code. Bring a rough idea, a stuck system, or a question worth exploring.</p></div><div className="service-grid">{services.map(({ number, title, copy, icon: Icon }) => <article className="service-card" key={title}><div className="service-top"><span>{number}</span><Icon size={20} /></div><h3>{title}</h3><p>{copy}</p><a href="#contact">Explore service <ChevronRight size={15} /></a></article>)}</div></section>

      <section id="contact" className="contact section-frame"><div className="contact-orb" /><SectionLabel number="06">A GOOD PLACE TO START</SectionLabel><h2>Have a hard problem?<br /><span>Let’s map the first move.</span></h2><p>Tell me what you’re working on, what feels unclear, or where the system is stuck. I’ll get back to you with a useful next step.</p><a className="contact-button" href="mailto:hello@joelmunyoh.dev">hello@joelmunyoh.dev <Send size={16} /></a><div className="contact-bottom"><span>MU NYOH JOEL TAMON / 2026</span><span>BUILT WITH CARE <i className="green-dot" /></span></div></section>
    </main>
  );
}

export default Home;
