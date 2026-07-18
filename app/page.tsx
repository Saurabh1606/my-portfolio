"use client";

import { useState, useEffect ,useRef} from "react";
import {
  ArrowRight,
  Github,
  Mail,
  ExternalLink,
  FileText,
  ChevronDown,
  ChevronUp,

  BookOpen,
  User,
  Rocket,

  Target,
  TrendingUp,

} from "lucide-react";
import { ReactNode } from "react";
// CONTACT INFO
const CONTACTS = {
  email: "saurabhshinde825@gmail.com",
  phone: "+918888525971",
  github: "https://github.com/Saurabh1606",
  resume: "/Saurabh_Shinde_Resume.pdf",
  linkedin: "https://www.linkedin.com/in/saurabh-16-shinde/",
};

// NAVIGATION
const nav = [
  { id: "home", label: "Home" },
  { id: "impact", label: "Impact" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
];

// FAANG-STYLE IMPACT METRICS
const IMPACT_METRICS = [
  {
    value: "1.2M+",
    label: "Daily Transactions",
    desc: "Architected microservices platforms supporting $45M annual cargo operations",
    icon: "🚀",
    color: "from-blue-500 to-cyan-500"
  },
  {
    value: "99.9%",
    label: "System Uptime",
    desc: "Mission-critical, fault-tolerant systems with zero data loss",
    icon: "⚡",
    color: "from-green-500 to-emerald-500"
  },
  {
    value: "2.5x",
    label: "Throughput Improvement",
    desc: "Boosted identity & consent platform throughput via Redis caching and async processing",
    icon: "📈",
    color: "from-purple-500 to-pink-500"
  },
  {
    value: "<100ms",
    label: "Authorization Latency",
    desc: "Sub-100ms auth for millions of telecom subscribers and partner apps",
    icon: "🔐",
    color: "from-orange-500 to-red-500"
  }
];

// SYSTEM DESIGN SKILLS - WHAT FAANG LOOKS FOR
const SYSTEM_DESIGN_SKILLS = [
{ skill: "Java & Spring Boot", level: 95, icon: "☕" },
{ skill: "TypeScript, NestJS & Vue.js", level: 88, icon: "🟦" },
{ skill: "API Design (REST/GraphQL)", level: 90, icon: "🔌" },
{ skill: "Microservices Architecture", level: 95, icon: "🏗️" },
{ skill: "Distributed Systems", level: 90, icon: "🌐" },
{ skill: "High Availability & Fault Tolerance", level: 92, icon: "🛡️" },
{ skill: "Scalability Engineering", level: 94, icon: "📈" },
{ skill: "Performance Optimization", level: 88, icon: "⚡" },
{ skill: "Event-Driven Design (Kafka/RabbitMQ)", level: 91, icon: "🔄" },
{ skill: "SQL & NoSQL Databases (Oracle/PostgreSQL/Cassandra)", level: 89, icon: "🗄️" },
{ skill: "Caching & In-Memory Stores (Redis)", level: 90, icon: "⚙️" },
{ skill: "Cloud & Containerization (Docker/Kubernetes)", level: 92, icon: "☁️" },
{ skill: "CI/CD & Automation", level: 87, icon: "🚀" },
{ skill: "Identity & IAM (Keycloak, OAuth2/OIDC, JWT, CIBA, MFA)", level: 90, icon: "🔐" },
{ skill: "Monitoring & Observability", level: 83, icon: "📊" },

];


const TECH_STACK = [
  { 
    name: "Java", 
    color: "from-orange-500 to-red-600", 
    icon: "☕", 
    years: "4+",
    projects: "3+",
    expertise: "Expert"
  },
  { 
    name: "Spring Boot", 
    color: "from-green-500 to-emerald-600", 
    icon: "🍃", 
    years: "4+",
    projects: "3+",
    expertise: "Expert"
  },
  { 
    name: "Apache Kafka", 
    color: "from-purple-500 to-violet-600", 
    icon: "📡", 
    years: "3+",
    projects: "2+",
    expertise: "Advanced"
  },
  { 
    name: "RabbitMQ", 
    color: "from-orange-400 to-red-500", 
    icon: "📨", 
    years: "2+",
    projects: "2+",
    expertise: "Intermediate"
  },
  { 
    name: "Redis", 
    color: "from-red-500 to-pink-600", 
    icon: "⚡", 
    years: "3+",
    projects: "2+",
    expertise: "Expert"
  },
  { 
    name: "GANs (Generative AI)", 
    color: "from-pink-500 to-purple-600", 
    icon: "🎨", 
    years: "1+",
    projects: "1 Research Publication",
    expertise: "Research"
  },
  { 
    name: "Oracle DB", 
    color: "from-indigo-500 to-purple-600", 
    icon: "🐘", 
    years: "4+",
    projects: "3+",
    expertise: "Expert"
  },
  { 
    name: "Cassandra", 
    color: "from-teal-500 to-green-600", 
    icon: "📊", 
    years: "2+",
    projects: "1+",
    expertise: "Intermediate"
  },
  { 
    name: "AWS Cloud", 
    color: "from-yellow-500 to-orange-600", 
    icon: "☁️", 
    years: "3+",
    projects: "2+",
    expertise: "Advanced"
  },
  { 
    name: "Docker", 
    color: "from-blue-400 to-blue-600", 
    icon: "🐳", 
    years: "3+",
    projects: "3+",
    expertise: "Expert"
  },
  { 
    name: "Kubernetes", 
    color: "from-cyan-500 to-blue-600", 
    icon: "⚙️", 
    years: "3+",
    projects: "2+",
    expertise: "Advanced"
  },
  {
    name: "Keycloak & IAM (CIBA/OAuth2)",
    color: "from-pink-500 to-rose-600",
    icon: "🔐",
    years: "2+",
    projects: "2+",
    expertise: "Advanced"
  },
  {
    name: "TypeScript & NestJS",
    color: "from-blue-600 to-indigo-600",
    icon: "🟦",
    years: "1+",
    projects: "1+",
    expertise: "Advanced"
  },
  {
    name: "Vue.js",
    color: "from-emerald-500 to-teal-600",
    icon: "💚",
    years: "1+",
    projects: "1+",
    expertise: "Intermediate"
  },
  {
    name: "PostgreSQL",
    color: "from-sky-500 to-blue-700",
    icon: "🐘",
    years: "1+",
    projects: "1+",
    expertise: "Intermediate"
  },
  {
    name: "CI/CD (Jenkins, GitHub Actions)",
    color: "from-gray-500 to-slate-600",
    icon: "🚀",
    years: "3+",
    projects: "3+",
    expertise: "Advanced"
  },
  {
    name: "Monitoring (Prometheus, Grafana)",
    color: "from-lime-500 to-green-600",
    icon: "📈",
    years: "2+",
    projects: "2+",
    expertise: "Intermediate"
  },
];


// WORK EXPERIENCE TIMELINE
const EXPERIENCE = [
  {
    title: "FullStack Engineer",
    company: "LotusFlare",
    duration: "November 2025 – Present",
    badge: "Current Role",
    summary:
      "Building carrier-grade Identity, Consent Management, and Application Registry platforms serving millions of telecom subscribers and partner applications. Designing event-driven microservices with Java, TypeScript, Kafka, and Vue.js for real-time authorization and consent lifecycle management.",
    stats: [
      { value: "2.5x", label: "Throughput Gain" },
      { value: "<100ms", label: "Auth Latency" },
      { value: "Millions", label: "Telecom Subscribers" },
      { value: "CIBA", label: "& Non-CIBA Flows" },
    ],
    icon: "rocket",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Team Lead",
    company: "Accelya",
    duration: "December 2021 – November 2025",
    badge: "4 Years",
    summary:
      "Architected microservices platforms using Spring Boot & Kafka for global airline cargo operations. Led distributed systems design, security hardening, and CI/CD initiatives across a 7+ service ecosystem serving 50K+ concurrent users.",
    stats: [
      { value: "1.2M+", label: "Daily Transactions" },
      { value: "99.9%", label: "System Uptime" },
      { value: "7+", label: "Microservices" },
      { value: "85%", label: "Fewer Security Incidents" },
      { value: "$45M", label: "Annual Cargo Ops" },
      { value: "8 min", label: "Deploy Time (from 45)" },
    ],
    icon: "target",
    gradient: "from-blue-500 to-purple-500",
  },
];

// FAANG-STYLE PROJECTS WITH TECHNICAL DEPTH
const PROJECTS = [
  {
    title: "Identity, Consent & Application Registry Platform",
    company: "LotusFlare",
    desc: "Carrier-grade Identity, Consent Management, and Application Registry platform supporting telecom subscriber onboarding, partner integrations, and secure access to digital BSS services. Implemented CIBA and non-CIBA authorization flows for asynchronous, decoupled consent handling, SSO/RBAC via Keycloak, and centralized consent lifecycle management with full auditability.",
    techStack: ["Java 21", "TypeScript", "NestJS", "Kafka", "Cassandra", "PostgreSQL", "Redis", "Keycloak", "OAuth2/OIDC", "CIBA"],
    metrics: {
      throughput: "2.5x throughput gain",
      latency: "<100ms auth latency",
      reach: "Millions of subscribers",
      security: "MFA + token revocation"
    },
    challenges: [
      "Asynchronous CIBA / non-CIBA consent flows across partner integrations",
      "Sub-100ms token validation under high-volume subscriber traffic",
      "Scalable Cassandra/PostgreSQL data models for identity & consent workloads"
    ],
    impact: "Carrier-grade identity platform for millions of telecom subscribers",
    gradient: "from-green-600 to-emerald-600",
    category: "Identity & Security"
  },
  {
    title: "Offer & Order Management System",
    company: "Accelya Solutions",
    desc: "Scalable microservices-based platform modernizing airline retailing end-to-end — offers, pricing, bookings, and order fulfillment. Redesigned the multithreading architecture and tuned Oracle queries with Redis caching to cut latency, while a JUnit-based QA pipeline kept regressions in check across 8 microservices.",
    techStack: ["Java 11", "Spring Boot 2.7", "Oracle 19C", "Redis", "Kafka 2.8", "Docker", "AWS", "Angular"],
    metrics: {
      orders: "25K+ daily orders",
      services: "8 microservices",
      latency: "450ms → 135ms (70%↓)",
      coverage: "95%+ code coverage"
    },
    challenges: [
      "Multithreading redesign for 200% higher concurrent throughput",
      "Cross-service consistency across 20+ RESTful endpoints",
      "JVM tuning and query optimization under peak load"
    ],
    impact: "Shortened fulfillment workflow time by 45% with 99.8% API success rate",
    gradient: "from-blue-600 to-cyan-600",
    category: "Microservices"
  },
  {
    title: "Price Influencer",
    company: "Accelya Solutions",
    desc: "Rule-based pricing engine automating pricing decisions within the SAS airline network. Processed 15+ pricing variables across seasonal, route-based, and inventory-driven models, integrating with 6 external booking and inventory systems via asynchronous processing for peak-hour throughput.",
    techStack: ["Java 11", "Spring Boot 2.7", "Kafka", "Redis", "Oracle", "Docker", "AWS"],
    metrics: {
      volume: "8K+ daily flight offers",
      accuracy: "99.7% pricing accuracy",
      throughput: "180% throughput increase",
      coverage: "92% code coverage"
    },
    challenges: [
      "25+ complex business scenarios (seasonal, route-based, inventory-driven pricing)",
      "Integration with 6 external booking & inventory platforms",
      "Asynchronous processing for 3K+ concurrent pricing requests"
    ],
    impact: "Reduced manual pricing errors by 85% and production bugs by 70%",
    gradient: "from-purple-600 to-pink-600",
    category: "Distributed Systems"
  },
];

// FAANG-LEVEL ACHIEVEMENTS
const ACHIEVEMENTS = [
  { 
    title: "Top 1% CodeChef Global", 
    desc: "5⭐ rating, Rank 246/29,626 globally", 
    icon: "🏆",
    color: "from-yellow-500 to-orange-500",
    metric: "Global Rank 246"
  },
  { 
    title: "LeetCode Problem Solver", 
    desc: "Rank ~4974, 500+ problems solved", 
    icon: "💻",
    color: "from-green-500 to-emerald-500",
    metric: "500+ Problems"
  },
  { 
    title: "IEEE Research Publications", 
    desc: "2 papers in ML and Computer Vision", 
    icon: "📚",
    color: "from-blue-500 to-purple-500",
    metric: "2 Publications"
  },
  {
    title: "Best Performer 2024",
    desc: "Accelya Solutions — recognized for outstanding project contributions",
    icon: "🏅",
    color: "from-purple-500 to-pink-500",
    metric: "Accelya Solutions"
  },
];

// Define the Drop type
type Drop = {
  id: number;
  x: number;
  y: number;
  speed: number;
  opacity: number;
};



// ANIMATED PARTICLES
const MatrixRain = () => {
 const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    const newDrops = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * -100,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    setDrops(newDrops);
  }, []);

  useEffect(() => {
    const animate = () => {
      setDrops(prev => prev.map(drop => ({
        ...drop,
        y: drop.y > 100 ? -20 : drop.y + drop.speed,
      })));
    };
    const interval = setInterval(animate, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute w-px h-6 bg-gradient-to-b from-cyan-400 to-transparent"
          style={{
            left: `${drop.x}%`,
            top: `${drop.y}%`,
            opacity: drop.opacity,
          }}
        />
      ))}
    </div>
  );
};

// TYPING ANIMATION HOOK
export const useTypewriter = (text: string, speed: number = 100): string => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    // Reset display text when text changes
    setDisplayText("");
    
    let currentIndex = 0;
    
    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeNextCharacter, speed);
      }
    };

    const initialDelay = setTimeout(typeNextCharacter, 100);
    
    // Cleanup function
    return () => {
      clearTimeout(initialDelay);
    };
  }, [text, speed]);

  return displayText;
};
// SECTION COMPONENT
type SectionProps = {
  id: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
};

const Section = ({ id, title, children, className = "" }: SectionProps) => (
  <section id={id} className={`py-24 px-6 md:px-12 relative ${className}`}>
    <div
      className="text-5xl md:text-6xl font-bold mb-16 text-center"
      style={{
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {title}
    </div>
    {children}
  </section>
);

export default function Page() {
const [expandedProject, setExpandedProject] = useState<number | null>(null);
const [activeSkill, setActiveSkill] = useState<number | null>(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const typewriterText = useTypewriter("Building Systems That Scale to Millions", 80);

useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleScroll = () => setScrollY(window.scrollY);

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <MatrixRain />
      
      {/* ADVANCED CURSOR GLOW */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-500"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(29, 78, 216, 0.15), 
            rgba(147, 51, 234, 0.1) 40%, 
            transparent 70%)`,
        }}
      />

      {/* FLOATING ACTION BUTTON */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href={CONTACTS.resume}
          download
          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-110 animate-pulse"
        >
          <FileText size={24} />
        </a>
      </div>

      {/* PREMIUM NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 backdrop-blur-2xl bg-slate-900/80 border-b border-white/20 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-lg font-bold animate-pulse">
              SS
            </div>
            <div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Saurabh Shinde
              </span>
              <div className="text-xs text-gray-400">Senior Backend Engineer @ LotusFlare</div>
            </div>
          </div>
          
          <ul className="hidden lg:flex gap-8 text-sm font-medium">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="relative group px-4 py-2 rounded-lg transition-all hover:bg-white/10"
                >
                  <span className="relative z-10 group-hover:text-blue-400 transition-colors">
                    {n.label}
                  </span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ul>
          
        </div>
      </nav>

      {/* HERO - FAANG LEVEL IMPACT */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        {/* DYNAMIC BACKGROUND */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          <div 
            className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s", transform: `translateY(${scrollY * -0.3}px)` }}
          />
          <div 
            className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "4s", transform: `translate(-50%, -50%) translateY(${scrollY * 0.2}px)` }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* STATUS BADGE */}
          
          {/* MAIN HEADLINE */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <div className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Senior Backend
            </div>
            <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Engineer
            </div>
          </h1>
          
          {/* TYPEWRITER EFFECT */}
          <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-12 flex items-center justify-center">
            <span className="font-mono">{typewriterText}</span>
            <span className="animate-pulse ml-1">|</span>
          </div>
          
          {/* KEY HIGHLIGHTS */}
          <div className="max-w-4xl mx-auto text-xl text-gray-300 mb-12 space-y-2">
            <div>✨ Engineering systems that process <span className="text-blue-400 font-bold">1.2M+ daily transactions</span> at 99.9% uptime</div>
            <div>🔐 Building carrier-grade <span className="text-green-400 font-bold">Identity & Consent platforms</span> for millions of telecom subscribers</div>
            <div>🏗️ Expert in <span className="text-purple-400 font-bold">Microservices, Event-Driven Architecture & Distributed Systems</span></div>
          </div>
          
          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href={CONTACTS.resume}
              download
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg flex items-center gap-3 shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-110"
            >
              <FileText size={24} />
              <span>Download Resume</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href={CONTACTS.github}
              target="_blank"
              className="group px-8 py-4 rounded-2xl border-2 border-white/30 backdrop-blur-sm flex items-center gap-3 hover:bg-white/10 transition-all transform hover:scale-110"
            >
              <Github size={24} />
              <span className="font-semibold text-lg">View GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* IMPACT METRICS - FAANG STYLE */}
      <Section id="impact" title="Impact & Scale" className="bg-gradient-to-r from-slate-800/50 to-purple-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {IMPACT_METRICS.map((metric, index) => (
              <div
                key={metric.label}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/20 p-8 text-center cursor-pointer transition-all duration-700 hover:scale-110"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-20 transition-all duration-500`} />
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4 animate-bounce">{metric.icon}</div>
                  <div className={`text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                    {metric.value}
                  </div>
                  <div className="text-xl font-bold text-white mb-3">{metric.label}</div>
                  <div className="text-sm text-gray-400 leading-relaxed">{metric.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* EXPERIENCE WITH SYSTEM DESIGN FOCUS */}
      <Section id="experience" title="Senior Engineering Experience">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full" />

            {EXPERIENCE.map((job, index) => (
              <div key={job.company} className={`relative pl-24 ${index < EXPERIENCE.length - 1 ? "mb-16" : ""}`}>
                <div className={`absolute left-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${job.gradient} flex items-center justify-center shadow-lg`}>
                  {job.icon === "rocket" ? <Rocket size={28} /> : <Target size={28} />}
                </div>

                <div className="bg-gradient-to-br from-slate-800/70 to-purple-800/40 rounded-3xl p-10 border border-white/20 hover:scale-105 transition-all duration-500">
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="md:col-span-2">
                      <h3 className="text-3xl font-bold text-white mb-2">{job.title}</h3>
                      <p className="text-2xl text-blue-400 font-semibold mb-4">{job.company}</p>
                      <p className="text-gray-300 leading-relaxed">{job.summary}</p>
                    </div>

                    <div className="text-center">
                      <span className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 text-base font-bold border border-green-500/30">
                        {job.duration}
                      </span>
                      <div className="mt-4 text-3xl font-bold text-purple-400">{job.badge}</div>
                    </div>
                  </div>

                  <div className={`grid grid-cols-2 gap-6 ${job.stats.length > 4 ? "md:grid-cols-6" : "md:grid-cols-4"}`}>
                    {job.stats.map((stat) => (
                      <div key={stat.label} className="bg-white/10 rounded-2xl p-4 text-center backdrop-blur-sm hover:bg-white/20 transition-all">
                        <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                        <div className="text-xs text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PROJECTS - FAANG INTERVIEW READY */}
      <Section id="projects" title="System Design Portfolio" className="bg-gradient-to-r from-purple-800/30 to-slate-800/50">
        <div className="max-w-7xl mx-auto space-y-8">
          {PROJECTS.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-white/20 transition-all duration-700 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`} />
              
              <div className="relative z-10 p-10">
                <div className="flex flex-wrap justify-between items-start mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">{project.desc}</p>
                    
                    <div className="mb-6">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r ${project.gradient} text-white font-bold text-lg`}>
                        <TrendingUp size={20} />
                        {project.impact}
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                    className="ml-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                  >
                    {expandedProject === index ? <ChevronUp size={24} className="text-blue-400" /> : <ChevronDown size={24} />}
                  </button>
                </div>
                
                {/* TECH STACK */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-4 py-2 rounded-xl bg-white/10 text-blue-300 text-sm font-semibold backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* METRICS */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="bg-white/5 rounded-xl p-3 text-center">
                      <div className="text-xl font-bold text-white">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>
                
                {expandedProject === index && (
                  <div className="space-y-6 animate-pulse">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <Target size={20} className="text-red-400" />
                        Technical Challenges Solved
                      </h4>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300">
                            <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SYSTEM DESIGN SKILLS */}
      <Section id="skills" title="System Design Expertise">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Core System Design Skills</h3>
              <div className="space-y-6">
                {SYSTEM_DESIGN_SKILLS.map((skill, index) => (
                  <div
                    key={skill.skill}
                    className="group cursor-pointer"
                    onMouseEnter={() => setActiveSkill(index)}
                    onMouseLeave={() => setActiveSkill(null)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {skill.skill}
                        </span>
                      </div>
                      <span className="text-lg font-bold text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: activeSkill === index ? `${skill.level}%` : '0%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Technology Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {TECH_STACK.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-white/10 p-6 cursor-pointer transition-all duration-500 hover:scale-105"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 transition-all duration-500`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl animate-bounce group-hover:animate-spin">{tech.icon}</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-white/20 text-white font-semibold">
                          {tech.expertise}
                        </span>
                      </div>
                      <h4 className="font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400">
                        {tech.name}
                      </h4>
                      <div className="text-xs text-gray-400">
                        <div>{tech.years} years • {tech.projects} projects</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ACHIEVEMENTS - COMPETITIVE PROGRAMMING FOCUS */}
      <Section id="achievements" title="Competitive Excellence" className="bg-gradient-to-r from-slate-800/40 to-purple-800/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {ACHIEVEMENTS.map((achievement, index) => (
              <div
                key={achievement.title}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/10 p-8 text-center transition-all duration-700 hover:scale-110"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-15 transition-all duration-500`} />
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4 animate-bounce">{achievement.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{achievement.desc}</p>
                  <div className={`text-2xl font-black bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                    {achievement.metric}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CODING PROFILES */}
          <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/30 rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-center text-white mb-8">Competitive Programming Profiles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="https://www.codechef.com/users/saurabh825" target="_blank" className="group bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all transform hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">🏆</div>
                  <div>
                    <div className="font-bold text-white text-lg">CodeChef</div>
                    <div className="text-orange-400 font-semibold">5⭐ | Global Rank 246</div>
                    <div className="text-gray-400 text-sm">Top 1% Globally</div>
                  </div>
                </div>
              </a>
              
              <a href="https://leetcode.com/saurabh825" target="_blank" className="group bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all transform hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">💻</div>
                  <div>
                    <div className="font-bold text-white text-lg">LeetCode</div>
                    <div className="text-green-400 font-semibold">Rank ~4974</div>
                    <div className="text-gray-400 text-sm">500+ Problems Solved</div>
                  </div>
                </div>
              </a>
              
              <div className="group bg-white/5 rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">🥈</div>
                  <div>
                    <div className="font-bold text-white text-lg">Competitions</div>
                    <div className="text-purple-400 font-semibold">Multiple Wins</div>
                    <div className="text-gray-400 text-sm">College & National Level</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* RESEARCH PUBLICATIONS */}
      <Section id="research" title="Research & Publications" className="bg-gradient-to-r from-purple-800/40 to-slate-800/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-8 border border-white/10 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <BookOpen className="text-blue-400 animate-pulse" size={32} />
                <div>
                  <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold">
                    IEEE SNPD 2022
                  </span>
                  <div className="text-xs text-gray-400 mt-1">Machine Learning • Control Flow</div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                Instructions with Complex Control-Flow Entailing Machine Learning
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Research on optimizing machine learning algorithms for complex control flow scenarios, 
                improving execution efficiency by 40% in distributed computing environments.
              </p>
              
              <div className="flex gap-4">
                <a
                  href="https://ieeexplore.ieee.org/document/10051797"
                  target="_blank"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-blue-500/25 transition-all transform hover:scale-105"
                >
                  <ExternalLink size={16}/> 
                  Read Paper
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-8 border border-white/10 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <BookOpen className="text-purple-400 animate-pulse" size={32} />
                <div>
                  <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-semibold">
                    IEEE SERA 2024
                  </span>
                  <div className="text-xs text-gray-400 mt-1">Computer Vision • GANs</div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                Leveraging Conditional GANs for Cosmic Microwave Background Separation
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Novel application of Conditional GANs for astrophysical data processing, achieving 
                95% accuracy in cosmic background separation with 3x faster processing times.
              </p>
              
              <div className="flex gap-4">
                <a
                  href="https://www.computer.org/csdl/proceedings-article/sera/2024/10685557/20ymejkXL7a"
                  target="_blank"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-purple-500/25 transition-all transform hover:scale-105"
                >
                  <ExternalLink size={16}/> 
                  Read Paper
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CALL TO ACTION - FAANG READY */}
<Section id="contact" title="Let’s Connect 🚀">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-16">
      <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
        I&apos;m actively seeking <span className="text-blue-400 font-bold">Senior Engineer</span> 
        opportunities at <span className="text-purple-400 font-bold">innovative tech companies</span>.  
        Let&apos;s collaborate and build impactful solutions together.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold animate-pulse">
          🎯 System Design Expert
        </span>
        <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-300 text-sm font-semibold animate-pulse">
          ⚡ High-Scale Architecture
        </span>
        <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-semibold animate-pulse">
          🏆 Competitive Programming
        </span>
        <span className="px-4 py-2 rounded-full bg-pink-500/20 text-pink-300 text-sm font-semibold animate-pulse">
          📚 Research Publications
        </span>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-8 mb-12">
      {/* Email Card */}
      <a
        href={`https://mail.google.com/mail/?view=cm&to=${CONTACTS.email}&su=Opportunity Discussion`}
        target="_blank"
        className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-10 text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10 flex items-center gap-6">
          <Mail size={48} className="animate-bounce" />
          <div>
            <h3 className="font-bold text-2xl mb-2">Let’s Talk!</h3>
            <p className="text-blue-100">I usually respond within a few hours</p>
            <p className="text-blue-200 font-semibold">{CONTACTS.email}</p>
          </div>
        </div>
      </a>

      {/* WhatsApp Card */}
      <a
        href={`https://wa.me/${CONTACTS.phone.replace("+", "")}?text=Hi Saurabh! I'd like to discuss an engineering opportunity with you.`}
        target="_blank"
        className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 to-emerald-600 p-10 text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10 flex items-center gap-6">
          <div className="text-5xl animate-bounce">💬</div>
          <div>
            <h3 className="font-bold text-2xl mb-2">WhatsApp Me</h3>
            <p className="text-green-100">Quick chat about opportunities</p>
            <p className="text-green-200 font-semibold">{CONTACTS.phone}</p>
          </div>
        </div>
      </a>
    </div>

    {/* ADDITIONAL LINKS */}
    <div className="flex flex-wrap justify-center gap-6">
      <a
        href={CONTACTS.github}
        target="_blank"
        className="group flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all transform hover:scale-110"
      >
        <Github size={24} />
        <div>
          <div className="font-semibold text-lg">GitHub Profile</div>
          <div className="text-gray-400 text-sm">20+ Repositories</div>
        </div>
      </a>

      <a
        href={CONTACTS.resume}
        download
        className="group flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all transform hover:scale-110"
      >
        <FileText size={24} />
        <div>
          <div className="font-semibold text-lg">Resume Download</div>
          <div className="text-gray-400 text-sm">ATS Optimized</div>
        </div>
      </a>
    </div>
  </div>
</Section>


      {/* PREMIUM FOOTER */}
      <footer className="relative py-16 text-center border-t border-white/20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Saurabh Shinde
            </div>
            <p className="text-gray-400 text-lg">
              Senior Backend Engineer • System Design Expert 
            </p>
          </div>
          
          <div className="flex justify-center gap-8 mb-8">
            <a href={CONTACTS.github} target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
<a 
  href={`https://mail.google.com/mail/?view=cm&to=${CONTACTS.email}?subject=Exciting%20Opportunity&body=Hi%20Saurabh,`} 
  className="text-gray-400 hover:text-green-400 transition-colors"
>
  <Mail size={24} />
</a>

            <a href="https://www.linkedin.com/in/saurabh-16-shinde/" target="_blank" className="text-gray-400 hover:text-purple-400 transition-colors">
              <User size={24} />
            </a>
          </div>
          
          <p className="text-gray-500 text-sm">
            &copy; 2025 Saurabh Shinde.  
            <span className="block mt-2">🚀 Ready to scale your systems to millions of users</span>
          </p>
        </div>
      </footer>
    </div>
  );
}