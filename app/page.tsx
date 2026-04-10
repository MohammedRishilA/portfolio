"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mail,
  ExternalLink,
  BarChart2,
  Database,
  TrendingUp,
  ArrowDown,
  Send,
  ChevronRight,
  Code2,
  Layers,
  BrainCircuit,
  CheckCircle,
} from "lucide-react";


/* ─── Utility: simple intersection-observer hook for scroll animations ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─── Reusable animated section wrapper ─── */
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── DATA ─── */
const skills = [
  {
    category: "Languages",
    icon: <Code2 size={20} />,
    accent: "#3b82f6",
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "SQL", "PostgreSQL", "MySQL"],
  },
  {
    category: "BI & Visualisation",
    icon: <BarChart2 size={20} />,
    accent: "#10b981",
    items: ["Power BI", "Tableau", "Excel (Advanced)", "Matplotlib", "Seaborn"],
  },
  {
    category: "Statistics",
    icon: <BrainCircuit size={20} />,
    accent: "#f59e0b",
    items: ["Hypothesis Testing", "Regression Analysis", "EDA", "A/B Testing", "Time-Series"],
  },
  {
    category: "Data Engineering",
    icon: <Database size={20} />,
    accent: "#8b5cf6",
    items: ["ETL Pipelines", "Data Cleaning", "Feature Engineering", "Git", "Jupyter Notebooks"],
  },
];

const projects = [
  {
    title: "Retail Sales Intelligence Dashboard",
    description:
      "Built an end-to-end Power BI dashboard ingesting 500K+ transactions to surface KPIs, seasonal trends, and regional performance gaps. Reduced manual reporting time by 60% through automated data refresh pipelines.",
    tags: ["Python", "Power BI", "SQL", "DAX"],
    github: "#",
    live: "#",
    accent: "#3b82f6",
  },
  {
    title: "Customer Churn Prediction Model",
    description:
      "Developed a Scikit-learn classification model (XGBoost) achieving 88% accuracy on a telecom dataset with 70K records. Delivered actionable retention strategies via an interactive Tableau story board.",
    tags: ["Python", "Scikit-learn", "Tableau", "EDA"],
    github: "#",
    live: "#",
    accent: "#10b981",
  },
  {
    title: "COVID-19 Socioeconomic Impact Analysis",
    description:
      "Performed multi-variate regression and hypothesis testing on WHO & World Bank datasets to quantify economic impacts across 50 countries. Published findings with reproducible Jupyter notebooks.",
    tags: ["Python", "NumPy", "Pandas", "Statistics"],
    github: "#",
    live: "#",
    accent: "#f59e0b",
  },
  {
    title: "E-Commerce Funnel & Cohort Analysis",
    description:
      "Designed a PostgreSQL analytical data mart tracking user journeys from acquisition to repeat purchase. Built cohort retention heatmaps revealing a 23% improvement opportunity in the checkout flow.",
    tags: ["SQL", "PostgreSQL", "Excel", "Python"],
    github: "#",
    live: "#",
    accent: "#8b5cf6",
  },
];

const timeline = [
  {
    year: "2024 – Present",
    title: "B.Tech in Computer Science & Engineering",
    org: "Sri Eshwar College of Engineering, Coimbatore",
    detail: "Specialisation in Data Science • CGPA 8.4 / 10",
    type: "education",
  },
  {
    year: "Jun 2024",
    title: "Data Analytics Intern",
    org: "TechBridge Solutions (Remote)",
    detail: "Automated weekly reporting dashboards in Power BI, saving 8 hrs/week of manual effort.",
    type: "experience",
  },
  {
    year: "Mar 2024",
    title: "Google Data Analytics Certificate",
    org: "Google / Coursera",
    detail: "Completed 8-course professional certificate covering R, SQL, Tableau, and data storytelling.",
    type: "cert",
  },
  {
    year: "Jan 2024",
    title: "Python for Data Science Bootcamp",
    org: "Udemy",
    detail: "300+ hours covering Pandas, NumPy, Matplotlib, Seaborn, and ML fundamentals.",
    type: "cert",
  },
];

/* ─── MAIN PAGE ─── */
export default function Portfolio() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main
      style={{ backgroundColor: "#080b10", color: "#e2e8f0", fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen overflow-x-hidden"
    >
      {/* ── Google Font ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,300&family=DM+Mono:wght@400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #080b10; }
        ::-webkit-scrollbar-thumb { background: #3b82f6; border-radius: 99px; }

        .grid-bg {
          background-image:
            linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        .tag {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          padding: 2px 8px;
          border-radius: 4px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: #94a3b8;
          letter-spacing: 0.03em;
        }

        .glow-blue { box-shadow: 0 0 40px rgba(59,130,246,0.18); }
        .glow-green { box-shadow: 0 0 40px rgba(16,185,129,0.15); }

        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          border-radius: 8px;
          background: #3b82f6;
          color: #fff;
          font-weight: 500;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          text-decoration: none;
        }
        .btn-primary:hover { background: #2563eb; transform: translateY(-1px); }

        .btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 24px;
          border-radius: 8px;
          background: transparent;
          color: #e2e8f0;
          font-weight: 500;
          font-size: 15px;
          border: 1px solid rgba(255,255,255,0.15);
          cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
          text-decoration: none;
        }
        .btn-ghost:hover { border-color: #3b82f6; background: rgba(59,130,246,0.08); }

        .input-field {
          width: 100%;
          padding: 12px 16px;
          border-radius: 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: #e2e8f0;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s;
        }
        .input-field:focus { border-color: #3b82f6; }
        .input-field::placeholder { color: #475569; }
      `}</style>

      {/* ──────────────── NAV ──────────────── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(8,11,16,0.85)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 24px",
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 14, color: "#3b82f6" }}>
            mr<span style={{ color: "#10b981" }}>.dev</span>
          </span>
          <div style={{ display: "flex", gap: 28, fontSize: 14, color: "#94a3b8" }}>
            {["About", "Skills", "Projects", "Timeline", "Contact"].map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                style={{ textDecoration: "none", color: "inherit", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#e2e8f0")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#94a3b8")}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ──────────────── HERO ──────────────── */}
      <section
        id="hero"
        className="grid-bg"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 24px 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 780, textAlign: "center", position: "relative" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "5px 14px",
              borderRadius: 99,
              border: "1px solid rgba(16,185,129,0.35)",
              background: "rgba(16,185,129,0.08)",
              color: "#10b981",
              fontSize: 12,
              fontFamily: "'DM Mono', monospace",
              marginBottom: 28,
              letterSpacing: "0.05em",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#10b981",
                boxShadow: "0 0 8px #10b981",
                animation: "pulse 2s infinite",
              }}
            />
            OPEN TO OPPORTUNITIES
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 7vw, 76px)",
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              marginBottom: 20,
              color: "#f1f5f9",
            }}
          >
            Hi, I'm{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #10b981 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Mohammed Rishil
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 2.5vw, 22px)",
              color: "#64748b",
              marginBottom: 12,
              fontWeight: 300,
              letterSpacing: "0.01em",
            }}
          >
            Data Analyst
          </p>
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "#475569",
              marginBottom: 44,
              maxWidth: 540,
              margin: "0 auto 44px",
              lineHeight: 1.6,
            }}
          >
            Transforming raw data into actionable insights — one query, one dashboard, one story at a time.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#projects" className="btn-primary">
              View My Work <ChevronRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              Get In Touch
            </a>
          </div>

          {/* Scroll indicator */}
          <div
            style={{
              marginTop: 72,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
              color: "#334155",
              fontSize: 12,
              fontFamily: "'DM Mono', monospace",
            }}
          >
            <span>scroll</span>
            <ArrowDown size={14} style={{ animation: "bounce 2s infinite" }} />
          </div>
        </div>

        <style>{`
          @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
          @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        `}</style>
      </section>

      {/* ──────────────── ABOUT ──────────────── */}
      <section id="about" style={{ padding: "96px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            {/* Left – text */}
            <div>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 12,
                  color: "#3b82f6",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                About Me
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  color: "#f1f5f9",
                  marginBottom: 24,
                  lineHeight: 1.15,
                }}
              >
                I speak fluent{" "}
                <span style={{ color: "#10b981" }}>data</span>.
              </h2>
              <p style={{ color: "#64748b", lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
                I'm a Computer Science undergraduate with a deep passion for making sense of messy, complex data. What excites me isn't just the numbers — it's the story they tell when you ask the right questions.
              </p>
              <p style={{ color: "#64748b", lineHeight: 1.8, marginBottom: 16, fontSize: 16 }}>
                From building predictive models in Python to crafting executive-level Power BI dashboards, I bridge the gap between raw information and strategic decision-making. Every dataset is a puzzle, and I'm here for it.
              </p>
              <p style={{ color: "#64748b", lineHeight: 1.8, fontSize: 16 }}>
                Currently seeking full-time opportunities where I can contribute as a Data Analyst and grow alongside a forward-thinking team.
              </p>
            </div>

            {/* Right – stat cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { label: "Projects Completed", value: "10+", accent: "#3b82f6" },
                { label: "Datasets Analysed", value: "50+", accent: "#10b981" },
                { label: "Certifications", value: "5", accent: "#f59e0b" },
                { label: "Hours of Learning", value: "800+", accent: "#8b5cf6" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    padding: "28px 20px",
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.07)",
                    background: "rgba(255,255,255,0.025)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 36,
                      fontWeight: 700,
                      color: s.accent,
                      letterSpacing: "-0.03em",
                      marginBottom: 6,
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: 13, color: "#475569" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <style>{`
          @media(max-width:768px){
            #about > div > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* ──────────────── SKILLS ──────────────── */}
      <section
        id="skills"
        style={{
          padding: "96px 24px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          background: "rgba(255,255,255,0.01)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 12,
                  color: "#3b82f6",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Technical Skills
              </p>
              <h2
                style={{
                  fontSize: "clamp(26px, 4vw, 40px)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  color: "#f1f5f9",
                }}
              >
                My Toolkit
              </h2>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {skills.map((skill, i) => (
              <Reveal key={skill.category} delay={i * 100}>
                <div
                  className="card-hover"
                  style={{
                    padding: "28px 24px",
                    borderRadius: 14,
                    border: `1px solid rgba(255,255,255,0.07)`,
                    background: "rgba(255,255,255,0.025)",
                    height: "100%",
                    borderTop: `2px solid ${skill.accent}`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 20,
                      color: skill.accent,
                    }}
                  >
                    {skill.icon}
                    <span style={{ fontWeight: 600, fontSize: 15, color: "#e2e8f0" }}>
                      {skill.category}
                    </span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {skill.items.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── PROJECTS ──────────────── */}
      <section id="projects" style={{ padding: "96px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 12,
                color: "#3b82f6",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Selected Work
            </p>
            <h2
              style={{
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                color: "#f1f5f9",
              }}
            >
              Projects
            </h2>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div
                className="card-hover"
                style={{
                  padding: "28px 24px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.025)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Subtle accent line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 24,
                    right: 24,
                    height: 2,
                    background: p.accent,
                    borderRadius: "0 0 4px 4px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 12,
                    marginTop: 8,
                  }}
                >
                  <TrendingUp size={16} style={{ color: p.accent }} />
                  <h3 style={{ fontWeight: 600, fontSize: 16, color: "#f1f5f9" }}>{p.title}</h3>
                </div>
                <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7, marginBottom: 20, flexGrow: 1 }}>
                  {p.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="tag"
                      style={{ color: p.accent, borderColor: `${p.accent}40` }}
                    >
                      #{t}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <a
                    href={p.github}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      fontSize: 13,
                      color: "#64748b",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#e2e8f0")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#64748b")}
                  >
                    <TrendingUp size={14} /> GitHub
                  </a>
                  <a
                    href={p.live}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      fontSize: 13,
                      color: "#64748b",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = p.accent)}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#64748b")}
                  >
                    <ExternalLink size={14} /> Live Dashboard
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ──────────────── TIMELINE ──────────────── */}
      <section
        id="timeline"
        style={{
          padding: "96px 24px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          background: "rgba(255,255,255,0.01)",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 12,
                  color: "#3b82f6",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Education & Experience
              </p>
              <h2
                style={{
                  fontSize: "clamp(26px, 4vw, 40px)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  color: "#f1f5f9",
                }}
              >
                My Journey
              </h2>
            </div>
          </Reveal>

          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div
              style={{
                position: "absolute",
                left: 24,
                top: 0,
                bottom: 0,
                width: 1,
                background: "rgba(255,255,255,0.08)",
              }}
            />

            {timeline.map((item, i) => {
              const accent =
                item.type === "education"
                  ? "#3b82f6"
                  : item.type === "experience"
                  ? "#10b981"
                  : "#f59e0b";
              const Icon =
                item.type === "education"
                  ? Layers
                  : item.type === "experience"
                  ? TrendingUp
                  : CheckCircle;
              return (
                <Reveal key={i} delay={i * 100}>
                  <div
                    style={{
                      display: "flex",
                      gap: 24,
                      marginBottom: 36,
                      paddingLeft: 0,
                      position: "relative",
                    }}
                  >
                    {/* Dot */}
                    <div
                      style={{
                        flexShrink: 0,
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        background: `${accent}18`,
                        border: `1px solid ${accent}40`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: accent,
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      <Icon size={18} />
                    </div>

                    <div
                      style={{
                        padding: "16px 20px",
                        borderRadius: 12,
                        border: "1px solid rgba(255,255,255,0.07)",
                        background: "rgba(255,255,255,0.025)",
                        flex: 1,
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 11,
                          color: accent,
                          marginBottom: 6,
                          letterSpacing: "0.05em",
                        }}
                      >
                        {item.year}
                      </p>
                      <h3 style={{ fontWeight: 600, fontSize: 15, color: "#f1f5f9", marginBottom: 4 }}>
                        {item.title}
                      </h3>
                      <p style={{ fontSize: 13, color: "#64748b", marginBottom: 8 }}>{item.org}</p>
                      <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.6 }}>{item.detail}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────── CONTACT ──────────────── */}
      <section id="contact" style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 12,
                  color: "#3b82f6",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Let's Connect
              </p>
              <h2
                style={{
                  fontSize: "clamp(26px, 4vw, 40px)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  color: "#f1f5f9",
                  marginBottom: 14,
                }}
              >
                Get In Touch
              </h2>
              <p style={{ color: "#64748b", lineHeight: 1.7 }}>
                Open to data analyst roles, freelance projects, or just a good conversation about data. Drop me a message!
              </p>
            </div>
          </Reveal>

          {/* Social links */}
          <Reveal delay={100}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 16,
                marginBottom: 48,
                flexWrap: "wrap",
              }}
            >
              {[
                { icon: <TrendingUp size={18} />, label: "LinkedIn", href: "#", accent: "#3b82f6" },
                { icon: <TrendingUp size={18} />, label: "GitHub", href: "#", accent: "#e2e8f0" },
                { icon: <Mail size={18} />, label: "Email", href: "mailto:rishil@example.com", accent: "#10b981" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 20px",
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.03)",
                    color: "#94a3b8",
                    textDecoration: "none",
                    fontSize: 14,
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = link.accent;
                    (e.currentTarget as HTMLElement).style.borderColor = link.accent + "60";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={200}>
            <div
              style={{
                padding: "36px",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.025)",
              }}
            >
              {sent ? (
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                  <CheckCircle size={40} style={{ color: "#10b981", margin: "0 auto 16px" }} />
                  <h3 style={{ color: "#f1f5f9", fontWeight: 600, marginBottom: 8 }}>
                    Message sent!
                  </h3>
                  <p style={{ color: "#64748b", fontSize: 14 }}>
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 13, color: "#64748b", marginBottom: 6 }}>
                        Name
                      </label>
                      <input
                        className="input-field"
                        type="text"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 13, color: "#64748b", marginBottom: 6 }}>
                        Email
                      </label>
                      <input
                        className="input-field"
                        type="email"
                        placeholder="john@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, color: "#64748b", marginBottom: 6 }}>
                      Message
                    </label>
                    <textarea
                      className="input-field"
                      rows={5}
                      placeholder="Hi Rishil, I'd love to discuss an opportunity..."
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      required
                      style={{ resize: "vertical" }}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ alignSelf: "flex-end" }}>
                    Send Message <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──────────────── FOOTER ──────────────── */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "28px 24px",
          textAlign: "center",
          color: "#334155",
          fontSize: 13,
          fontFamily: "'DM Mono', monospace",
        }}
      >
        © {new Date().getFullYear()} Mohammed Rishil · Built with Next.js & Tailwind CSS
      </footer>
    </main>
  );
}