import { useEffect, useRef, useState } from "react";
import {
  Terminal,
  ShieldCheck,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Copy,
  Check,
  FileText,
  Download,
  ExternalLink,
  Calendar,
  Building2,
  Server,
  Database,
} from "lucide-react";
import {
  projects,
  cvVariants,
  principles,
  skillGroups,
  experiences,
  educations,
  type Project,
  type CvVariant,
} from "./data/portfolio.ts";

const GITHUB_URL = "https://github.com/fahchouchsm";
const LINKEDIN_URL = "https://www.linkedin.com/in/fahchchouch-mohammed/";
const EMAIL_ADDRESS = "fahchouchmd@gmail.com";
const PHONE_NUMBER = "+212 600 242 374";

const NAV_LINKS = [
  { href: "#projets", label: "Projets" },
  { href: "#cv-variantes", label: "Variantes CV" },
  { href: "#approche", label: "Approche" },
  { href: "#competences", label: "Compétences" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === "bettergit") {
    return (
      <div className="terminal-panel" aria-label="Visualisation Git et analyse AST">
        <div className="terminal-bar">
          <span className="terminal-prompt">$</span>
          <code>bettergit graph --inspect</code>
        </div>
        <div className="terminal-body">
          <div className="git-dag">
            <span className="git-line git-line-main">● main [5ac40df] Quality Gate SonarQube: Score A (0 bugs)</span>
            <span className="git-line git-line-branch">├── ● feat/ast [c194f82] JavaParser AST → UML PlantUML</span>
            <span className="git-line git-line-sub">└── ● core/dag [71d61dd] JGit staging index & commit tree</span>
          </div>
          <div className="code-pill-row">
            <span className="code-pill">SonarQube: A</span>
            <span className="code-pill">AST JavaParser</span>
            <span className="code-pill">Tauri / React</span>
          </div>
        </div>
      </div>
    );
  }

  if (project.visual === "gateway") {
    return (
      <div className="terminal-panel" aria-label="Architecture AuthGateway">
        <div className="terminal-bar">
          <span className="terminal-prompt">$</span>
          <code>auth-gateway --jwks-rotation --redis-cache</code>
        </div>
        <div className="terminal-body">
          <div className="diagram-grid">
            <div className="diagram-node node-accent">
              <ShieldCheck size={18} />
              <span>AuthGateway</span>
              <small>jwt rs256 / jwks</small>
            </div>
            <span className="diagram-arrow">→</span>
            <div className="diagram-node">
              <Database size={18} />
              <span>Redis</span>
              <small>Refresh tokens HttpOnly</small>
            </div>
            <span className="diagram-arrow">→</span>
            <div className="diagram-node">
              <Server size={18} />
              <span>Microservices</span>
              <small>BusWay GIS + FixMyCity</small>
            </div>
          </div>
          <div className="code-pill-row">
            <span className="code-pill">11 conteneurs</span>
            <span className="code-pill">Docker Compose</span>
            <span className="code-pill">RBAC strict</span>
          </div>
        </div>
      </div>
    );
  }

  if (project.visual === "city") {
    return (
      <div className="terminal-panel" aria-label="Routage de signalements FixMyCity">
        <div className="terminal-bar">
          <span className="terminal-prompt">$</span>
          <code>curl -X POST /api/v1/incidents/route</code>
        </div>
        <div className="terminal-body">
          <div className="code-block">
            <span className="code-comment">// ASP.NET Core · Architecture Clean</span>
            <span className="code-kw">POST</span> /api/incidents <span className="code-num">201 Created</span>
            <br />
            Payload: IncidentDto &#123; Category: Voirie, Lat: 34.68, Lon: -1.91 &#125;
            <br />
            Persistence: Entity Framework Core → SQL Server
          </div>
          <div className="code-pill-row">
            <span className="code-pill">C# / .NET 10</span>
            <span className="code-pill">EF Core</span>
            <span className="code-pill">Clean Architecture</span>
          </div>
        </div>
      </div>
    );
  }

  if (project.visual === "database") {
    return (
      <div className="terminal-panel" aria-label="Exploration SGBD MySQL Compass">
        <div className="terminal-bar">
          <span className="terminal-prompt">$</span>
          <code>mysql-compass --generate-dataset --rows=50000</code>
        </div>
        <div className="terminal-body">
          <div className="code-block">
            <span className="code-comment">// Moteur synthétique multi-SGBD</span>
            TARGET: MySQL 8.0 & PostgreSQL 16
            <br />
            STATUS: 50,000 tuples insérés avec contraintes FK vérifiées
            <br />
            EXPORT: CSV, JSON & SQL dumps générés
          </div>
          <div className="code-pill-row">
            <span className="code-pill">Electron</span>
            <span className="code-pill">React / TypeScript</span>
            <span className="code-pill">Node.js IPC</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="terminal-panel" aria-label="Plateforme web réactive">
      <div className="terminal-bar">
        <span className="terminal-prompt">$</span>
        <code>next start -p 3000 --websockets</code>
      </div>
      <div className="terminal-body">
        <div className="code-block">
          <span className="code-comment">// Connexion temps réel bidirectionnelle</span>
          SOCKET_READY: ws://gateway:8080/channels/jobs
          <br />
          EVENTS: profile.update, message.received, catalog.sync
        </div>
        <div className="code-pill-row">
          <span className="code-pill">Next.js</span>
          <span className="code-pill">TypeScript</span>
          <span className="code-pill">Socket.IO</span>
        </div>
      </div>
    </div>
  );
}

function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project) {
      if (!dialog.open) {
        dialog.showModal();
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = previous;
        };
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [project]);

  return (
    <dialog
      ref={dialogRef}
      className="project-modal"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          dialogRef.current?.close();
        }
      }}
      aria-labelledby="modal-project-title"
    >
      {project && (
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-tag-group">
              <span className="code-pill">{project.category}</span>
              <span className="modal-context">{project.context}</span>
            </div>
            <button
              type="button"
              className="btn-icon"
              autoFocus
              onClick={() => dialogRef.current?.close()}
              aria-label="Fermer le projet"
            >
              <X size={18} />
            </button>
          </div>

          <h3 id="modal-project-title" className="modal-title">
            {project.title}
          </h3>

          <p className="modal-lead">{project.description}</p>

          <div className="modal-section">
            <h4>Problématique traitée</h4>
            <p>{project.problem}</p>
          </div>

          <div className="modal-section">
            <h4>Réalisations clés</h4>
            <ul className="modal-bullets">
              {project.details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h4>Le regard architecture</h4>
            <p>{project.architecture}</p>
          </div>

          <div className="modal-section">
            <h4>Technologies utilisées</h4>
            <div className="stack-wrap">
              {project.stack.map((item) => (
                <span key={item} className="code-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-footer">
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Github size={16} />
                Explorer le code
              </a>
            ) : (
              <p className="source-note">code source non publié (propriété d’entreprise)</p>
            )}

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => dialogRef.current?.close()}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [lastTriggerButton, setLastTriggerButton] = useState<HTMLButtonElement | null>(null);
  const [selectedCv, setSelectedCv] = useState<CvVariant>(cvVariants[0]);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [githubChartFailed, setGithubChartFailed] = useState(false);

  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopiedEmail(true);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(() => {
        setCopiedEmail(false);
      }, 2500);
    } catch {
      // Fallback
    }
  };

  const openProjectModal = (project: Project, buttonElement: HTMLButtonElement) => {
    setLastTriggerButton(buttonElement);
    setActiveModalProject(project);
  };

  const closeProjectModal = () => {
    setActiveModalProject(null);
    if (lastTriggerButton) {
      lastTriggerButton.focus();
    }
  };

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "Tous") return true;
    return project.category === activeCategory;
  });

  return (
    <div className="site-canvas" id="top">
      <header className="site-header">
        <div className="container header-inner">
          <a
            href="#top"
            className="brand-link"
            aria-label="Mohammed Fahchouch, accueil"
          >
            <span className="brand-prompt">$</span>
            <span className="brand-name">
              Mohammed <strong>Fahchouch</strong>
            </span>
            <span className="brand-role">Génie Informatique</span>
          </a>

          <nav
            className={`site-nav ${mobileMenuOpen ? "nav-open" : ""}`}
            aria-label="Navigation principale"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a
              href="#cv-variantes"
              className="btn btn-secondary btn-sm header-cv-btn"
            >
              <FileText size={14} />
              Variantes CV
            </a>

            <button
              type="button"
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* HERO SECTION */}
        <section className="hero-section container" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-lead-col">
              <div className="hero-badge-row">
                <span className="status-badge">Élève ingénieur 5e année · EHEIM Oujda</span>
                <span className="status-badge status-accent">Stage PFE 2026/2027</span>
              </div>

              <h1 id="hero-title" className="hero-title">
                Mohammed Fahchouch
              </h1>

              <p className="hero-summary">
                Élève ingénieur logiciel orienté architectures distribuées, moteurs Git et conception résiliente.
              </p>

              <div className="hero-cta-row">
                <a href="#projets" className="btn btn-primary">
                  <Terminal size={16} />
                  Consulter les projets
                </a>
                <a href="#cv-variantes" className="btn btn-secondary">
                  <Download size={16} />
                  Télécharger un CV (6 variantes)
                </a>
              </div>

              <div className="hero-metrics-grid">
                <div className="metric-cell">
                  <span className="metric-val">CHU Oujda</span>
                  <span className="metric-label">Stage · BetterGit & AST JavaParser</span>
                </div>
                <div className="metric-cell">
                  <span className="metric-val">Score A</span>
                  <span className="metric-label">SonarQube · 0 vulnérabilité critique</span>
                </div>
                <div className="metric-cell">
                  <span className="metric-val">11 conteneurs</span>
                  <span className="metric-label">Écosystème microservices Docker</span>
                </div>
              </div>
            </div>

            <div className="hero-terminal-col">
              <div className="system-spec-box">
                <div className="terminal-bar">
                  <span className="terminal-prompt">simo@oujda:~$</span>
                  <code>cat profile.spec</code>
                </div>
                <div className="system-spec-content">
                  <div className="spec-row">
                    <span className="spec-key">profil</span>
                    <span className="spec-val">Élève ingénieur d'État en Génie Informatique</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">recherche</span>
                    <span className="spec-val highlight-val">Stage PFE 4 à 6 mois (2026/2027)</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">localisation</span>
                    <span className="spec-val">Oujda, Maroc (mobile & remote)</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">langages</span>
                    <span className="spec-val">Java 21, TypeScript, C#, SQL, Python, C/C++</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">écosystème</span>
                    <span className="spec-val">Spring Boot 3, ASP.NET Core, Docker, React</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">qualité</span>
                    <span className="spec-val">SOLID, Clean Arch, SonarQube score A</span>
                  </div>
                  <div className="spec-row spec-footer-row">
                    <span className="spec-key">contacts</span>
                    <span className="spec-val">fahchouchmd@gmail.com · +212 600 242 374</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GITHUB ACTIVITY SECTION */}
        <section className="section github-section" aria-labelledby="github-title">
          <div className="container">
            <div className="section-head">
              <h2 id="github-title" className="section-title">
                Activité GitHub
              </h2>
              <p className="section-subtitle">
                Régularité des contributions et versioning continu sur GitHub.
              </p>
            </div>

            <div className="github-card">
              <div className="github-card-header">
                <div className="github-user-info">
                  <Github size={20} />
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-username-link"
                  >
                    github.com/fahchouchsm
                  </a>
                </div>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <ExternalLink size={14} />
                  Profil GitHub
                </a>
              </div>

              <div className="github-chart-wrap">
                {!githubChartFailed ? (
                  <img
                    src="https://ghchart.rshah.org/57ab5a/fahchouchsm"
                    alt="Graphique des contributions GitHub de Mohammed Fahchouch"
                    className="github-chart-img"
                    onError={() => setGithubChartFailed(true)}
                    loading="lazy"
                  />
                ) : (
                  <div className="chart-fallback">
                    <p>Visualisation des contributions disponible directement sur GitHub :</p>
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <Github size={16} />
                      Accéder au dépôt GitHub de Mohammed Fahchouch
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="section projects-section" id="projets" aria-labelledby="projects-title">
          <div className="container">
            <div className="section-head-row">
              <div>
                <h2 id="projects-title" className="section-title">
                  Projets d’ingénierie
                </h2>
                <p className="section-subtitle">
                  Sélection de travaux réalisés en stage et en cycle d’ingénieur.
                </p>
              </div>

              <div className="category-filters" role="group" aria-label="Filtrer les projets">
                {["Tous", "Backend", "Desktop", "Web"].map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={`filter-btn ${activeCategory === category ? "active" : ""}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <article key={project.id} className="project-card">
                  <div className="project-card-header">
                    <div className="project-meta-row">
                      <span className="code-pill">{project.category}</span>
                      <span className="project-context-label">{project.context}</span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-short-desc">{project.description}</p>
                  </div>

                  <div className="project-card-visual">
                    <ProjectVisual project={project} />
                  </div>

                  <div className="project-card-footer">
                    <div className="stack-wrap">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="tech-badge-more">
                          +{project.stack.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="project-actions">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={(e) => openProjectModal(project, e.currentTarget)}
                        aria-label={`Découvrir le projet ${project.title}`}
                      >
                        Découvrir le projet {project.title}
                      </button>

                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-icon"
                          aria-label={`Code source ${project.title}`}
                        >
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CV VARIANTS HUB SECTION */}
        <section
          className="section cv-hub-section"
          id="cv-variantes"
          aria-labelledby="cv-hub-title"
        >
          <div className="container">
            <div className="section-head">
              <h2 id="cv-hub-title" className="section-title">
                Curriculum Vitae ciblés
              </h2>
              <p className="section-subtitle">
                Six variantes adaptées aux besoins de recrutement pour le stage PFE (2026/2027).
              </p>
            </div>

            <div className="cv-hub-grid">
              <div className="cv-selector-list" role="tablist" aria-label="Variantes de CV">
                {cvVariants.map((variant) => (
                  <button
                    key={variant.id}
                    type="button"
                    role="tab"
                    aria-selected={selectedCv.id === variant.id}
                    className={`cv-tab-item ${selectedCv.id === variant.id ? "cv-tab-active" : ""}`}
                    onClick={() => setSelectedCv(variant)}
                  >
                    <div className="cv-tab-text">
                      <strong className="cv-tab-title">{variant.title}</strong>
                      <span className="cv-tab-subtitle">{variant.roleSubtitle}</span>
                    </div>
                    <FileText size={18} className="cv-tab-icon" />
                  </button>
                ))}
              </div>

              <div className="cv-preview-panel" role="tabpanel">
                <div className="terminal-bar">
                  <span className="terminal-prompt">$</span>
                  <code>render --cv="{selectedCv.title}"</code>
                </div>

                <div className="cv-preview-body">
                  <div className="cv-preview-header">
                    <div>
                      <h3 className="cv-preview-title">{selectedCv.title}</h3>
                      <p className="cv-preview-subtitle">{selectedCv.roleSubtitle}</p>
                    </div>
                    <a
                      href={selectedCv.path}
                      download
                      className="btn btn-primary"
                    >
                      <Download size={16} />
                      Télécharger ce CV PDF
                    </a>
                  </div>

                  <div className="cv-highlights-box">
                    <h4>Points d’ancrage du profil</h4>
                    <ul className="cv-points-list">
                      {selectedCv.highlights.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="cv-tech-row">
                    <h4>Technologies prioritaires</h4>
                    <div className="stack-wrap">
                      {selectedCv.primaryTech.map((item) => (
                        <span key={item} className="code-pill">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="cv-direct-actions">
                    <a
                      href={selectedCv.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <ExternalLink size={14} />
                      Ouvrir le PDF dans un nouvel onglet
                    </a>
                    <a
                      href="/cv/CV_Fahchouch_Mohammed.pdf"
                      download
                      className="btn btn-secondary btn-sm"
                    >
                      <Download size={14} />
                      Version généraliste standard
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPROACH & SOLID PRINCIPLES */}
        <section className="section approach-section" id="approche" aria-labelledby="approach-title">
          <div className="container">
            <div className="section-head">
              <h2 id="approach-title" className="section-title">
                Approche & principes de conception
              </h2>
              <p className="section-subtitle">
                Application concrète des principes SOLID et de l’architecture logicielle.
              </p>
            </div>

            <div className="principles-list">
              {principles.map((principle) => (
                <details key={principle.letter} className="principle-item">
                  <summary className="principle-summary">
                    <div className="principle-lead">
                      <span className="principle-letter">{principle.letter}</span>
                      <div className="principle-head-text">
                        <span className="principle-title-fr">{principle.title}</span>
                        <span className="principle-title-en">{principle.english}</span>
                      </div>
                    </div>
                    <span className="principle-toggle-indicator" aria-hidden="true">+</span>
                  </summary>
                  <div className="principle-body">
                    <p>{principle.description}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS */}
        <section className="section skills-section" id="competences" aria-labelledby="skills-title">
          <div className="container">
            <div className="section-head">
              <h2 id="skills-title" className="section-title">
                Compétences techniques
              </h2>
              <p className="section-subtitle">
                Outils, frameworks et langages maîtrisés au fil des projets et stages.
              </p>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <div key={group.title} className="skill-card">
                  <h3 className="skill-group-title">{group.title}</h3>
                  <p className="skill-group-desc">{group.description}</p>
                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JOURNEY & EDUCATION */}
        <section className="section journey-section" id="parcours" aria-labelledby="journey-title">
          <div className="container">
            <div className="section-head">
              <h2 id="journey-title" className="section-title">
                Parcours & formations
              </h2>
              <p className="section-subtitle">
                Expériences professionnelles en entreprise et cursus académique.
              </p>
            </div>

            <div className="journey-dual-grid">
              <div className="journey-col">
                <h3 className="journey-subhead">
                  <Building2 size={18} />
                  Expériences professionnelles
                </h3>
                <div className="journey-cards-list">
                  {experiences.map((exp) => (
                    <div key={exp.company} className="journey-card">
                      <div className="journey-card-top">
                        <span className="journey-date">{exp.date}</span>
                        <span className="journey-company">{exp.company}</span>
                      </div>
                      <h4 className="journey-role">{exp.role}</h4>
                      <p className="journey-desc">{exp.description}</p>
                      <div className="stack-wrap">
                        {exp.tags.map((t) => (
                          <span key={t} className="tech-badge">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="journey-col">
                <h3 className="journey-subhead">
                  <Calendar size={18} />
                  Formation académique
                </h3>
                <div className="journey-cards-list">
                  {educations.map((edu) => (
                    <div key={edu.degree} className="journey-card">
                      <div className="journey-card-top">
                        <span className="journey-date">{edu.period}</span>
                        <span className="journey-company">{edu.institution}</span>
                      </div>
                      <h4 className="journey-role">{edu.degree}</h4>
                      <p className="journey-desc">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BEHIND THE CODE / PROFILE PHOTO */}
        <section className="section profile-photo-section" aria-labelledby="profile-title">
          <div className="container">
            <div className="profile-photo-grid">
              <div className="profile-portrait-wrap">
                <div className="portrait-terminal-frame">
                  <img
                    src="/pfp.png"
                    alt="Portrait de Mohammed Fahchouch"
                    className="portrait-img"
                    width={400}
                    height={480}
                  />
                  <div className="portrait-caption-bar">
                    <code>mohammed.jpg · Oujda, Maroc</code>
                  </div>
                </div>
              </div>

              <div className="profile-story-wrap">
                <h2 id="profile-title" className="section-title">
                  Derrière le code
                </h2>
                <div className="profile-paragraphs">
                  <p>
                    Passionné par les entrailles du logiciel : ce qui fait qu’un système tient
                    la charge, qu’une architecture reste compréhensible deux ans plus tard et
                    qu’un contrat d’API protège ses consommateurs sans rigidité inutile.
                  </p>
                  <p>
                    Mon parcours mêle l’exploration bas niveau des structures de données (moteur Git
                    en Java, parcours d'arbres syntaxiques AST) et la mise en œuvre de systèmes
                    distribués résilients (sécurité JWT/JWKS, cache Redis, pipelines Docker et
                    services ASP.NET Core).
                  </p>
                  <p>
                    Disponible pour un <strong>Stage PFE (2026/2027)</strong> de 4 à 6 mois.
                    Ouvert aux opportunités à Casablanca, Rabat, Tanger, Oujda ou en travail hybride / distant.
                  </p>
                </div>

                <div className="profile-direct-links">
                  <a
                    href="mailto:fahchouchmd@gmail.com"
                    className="btn btn-primary"
                  >
                    <Mail size={16} />
                    Contacter par email
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container">
            <div className="section-head">
              <h2 id="contact-title" className="section-title">
                Coordonnées & échanges
              </h2>
              <p className="section-subtitle">
                Contact direct pour opportunités de stage PFE ou échanges techniques.
              </p>
            </div>

            <div className="contact-box">
              <div className="contact-grid">
                <div className="contact-channel">
                  <Mail size={22} className="contact-icon" />
                  <div className="contact-details">
                    <span className="contact-type">Courrier électronique</span>
                    <a
                      href={`mailto:${EMAIL_ADDRESS}`}
                      className="contact-value-link"
                    >
                      {EMAIL_ADDRESS}
                    </a>
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={handleCopyEmail}
                    aria-label="Copier l’adresse email"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={14} />
                        <span>Copié !</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copier l’adresse email</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="contact-channel">
                  <Phone size={22} className="contact-icon" />
                  <div className="contact-details">
                    <span className="contact-type">Téléphone direct</span>
                    <a
                      href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                      className="contact-value-link"
                    >
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="contact-channel">
                  <Linkedin size={22} className="contact-icon" />
                  <div className="contact-details">
                    <span className="contact-type">Réseau professionnel</span>
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-value-link"
                    >
                      linkedin.com/in/fahchchouch-mohammed
                    </a>
                  </div>
                </div>

                <div className="contact-channel">
                  <Github size={22} className="contact-icon" />
                  <div className="contact-details">
                    <span className="contact-type">Code & dépôts</span>
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-value-link"
                    >
                      github.com/fahchouchsm
                    </a>
                  </div>
                </div>

                <div className="contact-channel">
                  <MapPin size={22} className="contact-icon" />
                  <div className="contact-details">
                    <span className="contact-type">Localisation</span>
                    <span className="contact-value-static">
                      Oujda, Maroc (mobilité nationale & internationale)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-left">
            <span className="footer-name">Mohammed Fahchouch</span>
            <span className="footer-role">Élève ingénieur en Génie Informatique (EHEIM)</span>
          </div>

          <div className="footer-links">
            <a href="#projets">Projets</a>
            <a href="#cv-variantes">CV</a>
            <a href="#parcours">Parcours</a>
            <a href="#contact">Contact</a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>

          <div className="footer-right">
            <span>Stage PFE (2026/2027)</span>
          </div>
        </div>
      </footer>

      {/* PROJECT DETAILS DIALOG */}
      <ProjectDialog
        project={activeModalProject}
        onClose={closeProjectModal}
      />
    </div>
  );
}
