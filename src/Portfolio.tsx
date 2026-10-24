import { useEffect, useRef, useState } from "react";
import {
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
  ArrowRight,
  Layers,
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

function ProjectVisual({ project, lang }: { project: Project; lang: "fr" | "en" }) {
  if (project.visual === "bettergit") {
    return (
      <div className="preview-card" aria-label="Visualisation Git et analyse AST">
        <div className="preview-badge-row">
          <span className="visual-tag tag-accent">Quality Gate A</span>
          <span className="visual-tag">Java 21 · JGit</span>
          <span className="visual-tag">Tauri Desktop</span>
        </div>
        <div className="preview-content-box">
          <div className="branch-flow">
            <div className="branch-node branch-master">
              <span className="node-dot dot-accent" />
              <span className="node-text">main : commit 5ac40df · Quality Gate SonarQube score A</span>
            </div>
            <div className="branch-node branch-feature">
              <span className="node-dot" />
              <span className="node-text">feat/ast : analyse AST JavaParser → export PlantUML</span>
            </div>
            <div className="branch-node branch-sub">
              <span className="node-dot" />
              <span className="node-text">core/dag : index de staging et calcul de graphe DAG</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.visual === "gateway") {
    return (
      <div className="preview-card" aria-label="Architecture AuthGateway">
        <div className="preview-badge-row">
          <span className="visual-tag tag-accent">Tokens JWT (RS256)</span>
          <span className="visual-tag">Rotation JWKS</span>
          <span className="visual-tag">Cache Redis</span>
        </div>
        <div className="preview-content-box">
          <div className="service-pipeline">
            <div className="pipeline-step step-accent">
              <ShieldCheck size={18} />
              <div className="step-desc">
                <strong>AuthGateway</strong>
                <span>Spring Security & JWKS</span>
              </div>
            </div>
            <ArrowRight size={14} className="pipeline-arrow" />
            <div className="pipeline-step">
              <Database size={18} />
              <div className="step-desc">
                <strong>Redis</strong>
                <span>Refresh tokens HttpOnly</span>
              </div>
            </div>
            <ArrowRight size={14} className="pipeline-arrow" />
            <div className="pipeline-step">
              <Server size={18} />
              <div className="step-desc">
                <strong>Services</strong>
                <span>BusWay GIS & FixMyCity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.visual === "city") {
    return (
      <div className="preview-card" aria-label="Routage de signalements FixMyCity">
        <div className="preview-badge-row">
          <span className="visual-tag tag-accent">C# / .NET 10</span>
          <span className="visual-tag">Clean Architecture</span>
          <span className="visual-tag">SQL Server</span>
        </div>
        <div className="preview-content-box">
          <div className="api-preview-row">
            <span className="http-method">POST</span>
            <span className="api-route">/api/v1/incidents/route</span>
            <span className="http-status">201 Created</span>
          </div>
          <p className="api-note">
            {lang === "fr"
              ? "Routage dynamique vers les services municipaux compétents avec Entity Framework Core."
              : "Dynamic incident routing to municipal departments powered by Entity Framework Core."}
          </p>
        </div>
      </div>
    );
  }

  if (project.visual === "database") {
    return (
      <div className="preview-card" aria-label="Exploration SGBD MySQL Compass">
        <div className="preview-badge-row">
          <span className="visual-tag tag-accent">Multi-SGBD</span>
          <span className="visual-tag">Générateur volumique</span>
          <span className="visual-tag">Electron</span>
        </div>
        <div className="preview-content-box">
          <div className="db-dataset-preview">
            <div className="db-schema-row">
              <Database size={14} />
              <span>MySQL 8.0, PostgreSQL 16 et SQLite</span>
            </div>
            <div className="db-stats-row">
              <span className="db-stat-highlight">50 000+</span>
              <span>{lang === "fr" ? "tuples synthétiques avec contraintes FK vérifiées" : "synthetic tuples with foreign keys validated"}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="preview-card" aria-label="Plateforme web réactive">
      <div className="preview-badge-row">
        <span className="visual-tag tag-accent">Next.js</span>
        <span className="visual-tag">WebSockets</span>
        <span className="visual-tag">MongoDB</span>
      </div>
      <div className="preview-content-box">
        <div className="realtime-stream">
          <div className="stream-badge">
            <span className="stream-live-indicator" />
            <span>WebSockets active stream</span>
          </div>
          <span className="stream-desc">
            {lang === "fr"
              ? "Canaux de messagerie instantanée bidirectionnelle et mise à jour de catalogue en temps réel."
              : "Bidirectional instant messaging channels and real-time catalog state updates."}
          </span>
        </div>
      </div>
    </div>
  );
}

function ProjectDialog({
  project,
  lang,
  onClose,
}: {
  project: Project | null;
  lang: "fr" | "en";
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
              <span className="pill-badge pill-accent">{project.category}</span>
              <span className="modal-context">
                {lang === "fr" ? project.context : project.contextEn}
              </span>
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

          <p className="modal-lead">
            {lang === "fr" ? project.description : project.descriptionEn}
          </p>

          <div className="modal-section">
            <h4>{lang === "fr" ? "Problématique traitée" : "Problem Addressed"}</h4>
            <p>{lang === "fr" ? project.problem : project.problemEn}</p>
          </div>

          <div className="modal-section">
            <h4>{lang === "fr" ? "Réalisations clés" : "Key Engineering Highlights"}</h4>
            <ul className="modal-bullets">
              {(lang === "fr" ? project.details : project.detailsEn).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h4>Le regard architecture</h4>
            <p>{lang === "fr" ? project.architecture : project.architectureEn}</p>
          </div>

          <div className="modal-section">
            <h4>{lang === "fr" ? "Technologies utilisées" : "Technologies Used"}</h4>
            <div className="stack-wrap">
              {project.stack.map((item) => (
                <span key={item} className="stack-pill">
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
              {lang === "fr" ? "Fermer" : "Close"}
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}

export default function Portfolio() {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [lastTriggerButton, setLastTriggerButton] = useState<HTMLButtonElement | null>(null);
  const [selectedCv, setSelectedCv] = useState<CvVariant>(cvVariants[0]);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [githubChartFailed, setGithubChartFailed] = useState(false);

  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

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

  const navLinks = [
    { href: "#projets", label: lang === "fr" ? "Projets" : "Projects" },
    { href: "#cv-variantes", label: lang === "fr" ? "Variantes CV" : "CV Variants" },
    { href: "#approche", label: lang === "fr" ? "Approche" : "Approach" },
    { href: "#competences", label: lang === "fr" ? "Compétences" : "Skills" },
    { href: "#parcours", label: lang === "fr" ? "Parcours" : "Journey" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="site-canvas" id="top">
      {/* HEADER */}
      <header className="site-header">
        <div className="container header-inner">
          <a
            href="#top"
            className="brand-link"
            aria-label="Mohammed Fahchouch, accueil"
          >
            <span className="brand-avatar-badge">MF</span>
            <div className="brand-text-col">
              <span className="brand-name">
                Mohammed <strong>Fahchouch</strong>
              </span>
              <span className="brand-role">
                {lang === "fr" ? "Génie Informatique" : "Software Engineering"}
              </span>
            </div>
          </a>

          <nav
            className={`site-nav ${mobileMenuOpen ? "nav-open" : ""}`}
            aria-label="Navigation principale"
          >
            {navLinks.map((link) => (
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
            {/* Language Switcher */}
            <div className="lang-switcher" role="group" aria-label="Langue / Language">
              <button
                type="button"
                className={`lang-btn ${lang === "fr" ? "lang-active" : ""}`}
                onClick={() => setLang("fr")}
                aria-label="Français"
              >
                FR
              </button>
              <span className="lang-sep" aria-hidden="true">|</span>
              <button
                type="button"
                className={`lang-btn ${lang === "en" ? "lang-active" : ""}`}
                onClick={() => setLang("en")}
                aria-label="English"
              >
                EN
              </button>
            </div>

            <a
              href="#cv-variantes"
              className="btn btn-secondary btn-sm header-cv-btn"
            >
              <FileText size={14} />
              {lang === "fr" ? "Variantes CV" : "CV Variants"}
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
                <span className="status-badge">
                  {lang === "fr"
                    ? "Élève ingénieur 5e année · EHEIM Oujda"
                    : "5th Year Engineering Student · EHEIM Oujda"}
                </span>
                <span className="status-badge status-accent">
                  {lang === "fr" ? "Stage PFE (2026/2027)" : "PFE Internship (2026/2027)"}
                </span>
              </div>

              <h1 id="hero-title" className="hero-title">
                Mohammed Fahchouch
              </h1>

              <p className="hero-summary">
                {lang === "fr"
                  ? "Élève ingénieur logiciel orienté architectures distribuées, moteurs Git et conception résiliente."
                  : "Software engineering student focused on distributed architectures, Git engines, and resilient system design."}
              </p>

              <div className="hero-cta-row">
                <a href="#projets" className="btn btn-primary">
                  <Layers size={16} />
                  <span>{lang === "fr" ? "Consulter les projets" : "Explore projects"}</span>
                </a>
                <a href="#cv-variantes" className="btn btn-secondary">
                  <Download size={16} />
                  <span>
                    {lang === "fr" ? "Télécharger un CV (6 variantes)" : "Download CV (6 variants)"}
                  </span>
                </a>
              </div>

              <div className="hero-metrics-grid">
                <div className="metric-cell">
                  <span className="metric-val">CHU Oujda</span>
                  <span className="metric-label">
                    {lang === "fr"
                      ? "Stage · BetterGit & AST JavaParser"
                      : "Internship · BetterGit & AST JavaParser"}
                  </span>
                </div>
                <div className="metric-cell">
                  <span className="metric-val">Score A</span>
                  <span className="metric-label">
                    {lang === "fr"
                      ? "SonarQube · 0 vulnérabilité critique"
                      : "SonarQube · 0 critical vulnerabilities"}
                  </span>
                </div>
                <div className="metric-cell">
                  <span className="metric-val">11 conteneurs</span>
                  <span className="metric-label">
                    {lang === "fr"
                      ? "Écosystème microservices Docker"
                      : "Docker microservices ecosystem"}
                  </span>
                </div>
              </div>
            </div>

            {/* Profile coordinates card */}
            <div className="hero-card-col">
              <div className="profile-spec-card">
                <div className="spec-card-header">
                  <span className="spec-header-title">
                    {lang === "fr" ? "Fiche de profil ingénieur" : "Engineering Profile Coordinates"}
                  </span>
                  <span className="spec-online-chip">
                    <span className="online-dot" />
                    <span>{lang === "fr" ? "Disponible PFE" : "Available for PFE"}</span>
                  </span>
                </div>

                <div className="spec-card-body">
                  <div className="spec-row">
                    <span className="spec-key">{lang === "fr" ? "diplôme visé" : "degree"}</span>
                    <span className="spec-val">
                      {lang === "fr"
                        ? "Ingénieur d'État en Génie Informatique (EHEIM)"
                        : "State Software Engineering Degree (EHEIM)"}
                    </span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">{lang === "fr" ? "recherche" : "seeking"}</span>
                    <span className="spec-val highlight-val">
                      {lang === "fr"
                        ? "Stage PFE 4 à 6 mois (Février à Juillet 2027)"
                        : "PFE Internship 4 to 6 months (Feb to July 2027)"}
                    </span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">{lang === "fr" ? "mobilité" : "location"}</span>
                    <span className="spec-val">
                      {lang === "fr" ? "Oujda, Casablanca, Rabat, Remote" : "Oujda, Casablanca, Rabat, Remote"}
                    </span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">{lang === "fr" ? "langages" : "languages"}</span>
                    <span className="spec-val font-code">Java 21, TypeScript, C#, SQL, Python, C/C++</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">{lang === "fr" ? "frameworks" : "frameworks"}</span>
                    <span className="spec-val font-code">Spring Boot 3, ASP.NET Core, React, Docker</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">{lang === "fr" ? "qualité" : "standards"}</span>
                    <span className="spec-val">SOLID, Clean Architecture, SonarQube score A</span>
                  </div>
                  <div className="spec-row spec-footer-row">
                    <span className="spec-key">{lang === "fr" ? "contacts" : "contact"}</span>
                    <span className="spec-val font-code">fahchouchmd@gmail.com · +212 600 242 374</span>
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
                {lang === "fr" ? "Activité GitHub" : "GitHub Activity"}
              </h2>
              <p className="section-subtitle">
                {lang === "fr"
                  ? "Régularité des contributions et versioning continu sur GitHub."
                  : "Consistent contributions and ongoing versioning on GitHub."}
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
                  <span>{lang === "fr" ? "Profil GitHub" : "GitHub Profile"}</span>
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
                    <p>
                      {lang === "fr"
                        ? "Visualisation des contributions disponible directement sur GitHub :"
                        : "Contribution visualization available directly on GitHub:"}
                    </p>
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <Github size={16} />
                      <span>
                        {lang === "fr"
                          ? "Accéder au dépôt GitHub de Mohammed Fahchouch"
                          : "Access Mohammed Fahchouch's GitHub profile"}
                      </span>
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
                  {lang === "fr" ? "Projets d’ingénierie" : "Engineering Projects"}
                </h2>
                <p className="section-subtitle">
                  {lang === "fr"
                    ? "Sélection de travaux réalisés en stage et en cycle d’ingénieur."
                    : "Selected work from professional internships and engineering curriculum."}
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
                      <span className="pill-badge">{project.category}</span>
                      <span className="project-context-label">
                        {lang === "fr" ? project.context : project.contextEn}
                      </span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-short-desc">
                      {lang === "fr" ? project.description : project.descriptionEn}
                    </p>
                  </div>

                  <div className="project-card-visual">
                    <ProjectVisual project={project} lang={lang} />
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
                        {lang === "fr"
                          ? `Découvrir le projet ${project.title}`
                          : `Découvrir le projet ${project.title}`}
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
                {lang === "fr" ? "Curriculum Vitae ciblés" : "Targeted Resumes & CVs"}
              </h2>
              <p className="section-subtitle">
                {lang === "fr"
                  ? "Six variantes adaptées aux besoins de recrutement pour le stage PFE (2026/2027)."
                  : "Six variants tailored to recruitment needs for the 2026/2027 PFE internship."}
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
                      <strong className="cv-tab-title">
                        {lang === "fr" ? variant.title : variant.titleEn}
                      </strong>
                      <span className="cv-tab-subtitle">
                        {lang === "fr" ? variant.roleSubtitle : variant.roleSubtitleEn}
                      </span>
                    </div>
                    <FileText size={18} className="cv-tab-icon" />
                  </button>
                ))}
              </div>

              <div className="cv-preview-panel" role="tabpanel">
                <div className="cv-preview-body">
                  <div className="cv-preview-header">
                    <div>
                      <h3 className="cv-preview-title">
                        {lang === "fr" ? selectedCv.title : selectedCv.titleEn}
                      </h3>
                      <p className="cv-preview-subtitle">
                        {lang === "fr" ? selectedCv.roleSubtitle : selectedCv.roleSubtitleEn}
                      </p>
                    </div>
                    <a
                      href={selectedCv.path}
                      download
                      className="btn btn-primary"
                    >
                      <Download size={16} />
                      <span>{lang === "fr" ? "Télécharger ce CV PDF" : "Download this PDF CV"}</span>
                    </a>
                  </div>

                  <div className="cv-highlights-box">
                    <h4>{lang === "fr" ? "Points d’ancrage du profil" : "Profile Focus Points"}</h4>
                    <ul className="cv-points-list">
                      {(lang === "fr" ? selectedCv.highlights : selectedCv.highlightsEn).map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="cv-tech-row">
                    <h4>{lang === "fr" ? "Technologies prioritaires" : "Key Technologies"}</h4>
                    <div className="stack-wrap">
                      {selectedCv.primaryTech.map((item) => (
                        <span key={item} className="stack-pill">
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
                      <span>{lang === "fr" ? "Ouvrir le PDF dans un nouvel onglet" : "Open PDF in new tab"}</span>
                    </a>
                    <a
                      href="/cv/CV_Fahchouch_Mohammed.pdf"
                      download
                      className="btn btn-secondary btn-sm"
                    >
                      <Download size={14} />
                      <span>{lang === "fr" ? "Version généraliste standard" : "Standard generalist version"}</span>
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
                {lang === "fr" ? "Approche & principes de conception" : "Design Principles & Architecture"}
              </h2>
              <p className="section-subtitle">
                {lang === "fr"
                  ? "Application concrète des principes SOLID et de l’architecture logicielle."
                  : "Concrete application of SOLID principles and clean software architecture."}
              </p>
            </div>

            <div className="principles-list">
              {principles.map((principle) => (
                <details key={principle.letter} className="principle-item">
                  <summary className="principle-summary">
                    <div className="principle-lead">
                      <span className="principle-letter">{principle.letter}</span>
                      <div className="principle-head-text">
                        <span className="principle-title-fr">
                          {lang === "fr" ? principle.title : principle.titleEn}
                        </span>
                        <span className="principle-title-en">{principle.english}</span>
                      </div>
                    </div>
                    <span className="principle-toggle-indicator" aria-hidden="true">+</span>
                  </summary>
                  <div className="principle-body">
                    <p>{lang === "fr" ? principle.description : principle.descriptionEn}</p>
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
                {lang === "fr" ? "Compétences techniques" : "Technical Skills"}
              </h2>
              <p className="section-subtitle">
                {lang === "fr"
                  ? "Outils, frameworks et langages maîtrisés au fil des projets et stages."
                  : "Tools, frameworks, and languages mastered across projects and internships."}
              </p>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <div key={group.title} className="skill-card">
                  <h3 className="skill-group-title">
                    {lang === "fr" ? group.title : group.titleEn}
                  </h3>
                  <p className="skill-group-desc">
                    {lang === "fr" ? group.description : group.descriptionEn}
                  </p>
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
                {lang === "fr" ? "Parcours & formations" : "Experience & Education"}
              </h2>
              <p className="section-subtitle">
                {lang === "fr"
                  ? "Expériences professionnelles en entreprise et cursus académique."
                  : "Professional internships and state engineering academic curriculum."}
              </p>
            </div>

            <div className="journey-dual-grid">
              <div className="journey-col">
                <h3 className="journey-subhead">
                  <Building2 size={18} />
                  <span>{lang === "fr" ? "Expériences professionnelles" : "Professional Experience"}</span>
                </h3>
                <div className="journey-cards-list">
                  {experiences.map((exp) => (
                    <div key={exp.company} className="journey-card">
                      <div className="journey-card-top">
                        <span className="journey-date">{lang === "fr" ? exp.date : exp.dateEn}</span>
                        <span className="journey-company">{exp.company}</span>
                      </div>
                      <h4 className="journey-role">{lang === "fr" ? exp.role : exp.roleEn}</h4>
                      <p className="journey-desc">{lang === "fr" ? exp.description : exp.descriptionEn}</p>
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
                  <span>{lang === "fr" ? "Formation académique" : "Academic Education"}</span>
                </h3>
                <div className="journey-cards-list">
                  {educations.map((edu) => (
                    <div key={edu.degree} className="journey-card">
                      <div className="journey-card-top">
                        <span className="journey-date">{edu.period}</span>
                        <span className="journey-company">{edu.institution}</span>
                      </div>
                      <h4 className="journey-role">{lang === "fr" ? edu.degree : edu.degreeEn}</h4>
                      <p className="journey-desc">{lang === "fr" ? edu.description : edu.descriptionEn}</p>
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
                <div className="portrait-frame">
                  <img
                    src="/pfp.png"
                    alt="Portrait de Mohammed Fahchouch"
                    className="portrait-img"
                    width={400}
                    height={480}
                  />
                  <div className="portrait-caption-bar">
                    <span>Mohammed Fahchouch · Oujda, Maroc</span>
                  </div>
                </div>
              </div>

              <div className="profile-story-wrap">
                <h2 id="profile-title" className="section-title">
                  {lang === "fr" ? "Derrière le code" : "Behind the Code"}
                </h2>
                <div className="profile-paragraphs">
                  {lang === "fr" ? (
                    <>
                      <p>
                        Passionné par les entrailles du logiciel : ce qui fait qu’un système tient
                        la charge, qu’une architecture reste compréhensible deux ans plus tard et
                        qu’un contrat d’API protège ses consommateurs sans rigidité inutile.
                      </p>
                      <p>
                        Mon parcours mêle l'exploration bas niveau des structures de données (moteur Git
                        en Java, parcours d'arbres syntaxiques AST) et la mise en œuvre de systèmes
                        distribués résilients (sécurité JWT/JWKS, cache Redis, pipelines Docker et
                        services ASP.NET Core).
                      </p>
                      <p>
                        Disponible pour un <strong>Stage PFE (2026/2027)</strong> de 4 à 6 mois.
                        Ouvert aux opportunités à Casablanca, Rabat, Tanger, Oujda ou en travail hybride / distant.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        Driven by software internals: what keeps a system scalable under load, how an
                        architecture remains clear two years later, and how explicit API contracts protect
                        consumers without unnecessary friction.
                      </p>
                      <p>
                        My background combines low-level data structures (Git engine in Java, AST syntax
                        tree traversal) with distributed systems design (JWT/JWKS security, Redis caching,
                        Docker pipelines, and ASP.NET Core services).
                      </p>
                      <p>
                        Available for a 4 to 6 months <strong>Graduation Internship (PFE 2026/2027)</strong>.
                        Open to opportunities in Casablanca, Rabat, Tangier, Oujda, or hybrid/remote setups.
                      </p>
                    </>
                  )}
                </div>

                <div className="profile-direct-links">
                  <a
                    href="mailto:fahchouchmd@gmail.com"
                    className="btn btn-primary"
                  >
                    <Mail size={16} />
                    <span>{lang === "fr" ? "Contacter par email" : "Contact via email"}</span>
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
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
                {lang === "fr" ? "Coordonnées & échanges" : "Contact & Information"}
              </h2>
              <p className="section-subtitle">
                {lang === "fr"
                  ? "Contact direct pour opportunités de stage PFE ou échanges techniques."
                  : "Direct contact for PFE internship opportunities and technical exchanges."}
              </p>
            </div>

            <div className="contact-box">
              <div className="contact-grid">
                <div className="contact-channel">
                  <Mail size={22} className="contact-icon" />
                  <div className="contact-details">
                    <span className="contact-type">
                      {lang === "fr" ? "Courrier électronique" : "Email Address"}
                    </span>
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
                        <span>{lang === "fr" ? "Copié !" : "Copied!"}</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>{lang === "fr" ? "Copier l’adresse email" : "Copy email address"}</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="contact-channel">
                  <Phone size={22} className="contact-icon" />
                  <div className="contact-details">
                    <span className="contact-type">
                      {lang === "fr" ? "Téléphone direct" : "Direct Phone"}
                    </span>
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
                    <span className="contact-type">
                      {lang === "fr" ? "Réseau professionnel" : "Professional Network"}
                    </span>
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
                    <span className="contact-type">
                      {lang === "fr" ? "Code & dépôts" : "Code & Repositories"}
                    </span>
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
                    <span className="contact-type">
                      {lang === "fr" ? "Localisation" : "Location"}
                    </span>
                    <span className="contact-value-static">
                      {lang === "fr"
                        ? "Oujda, Maroc (mobilité nationale & internationale)"
                        : "Oujda, Morocco (national & international mobility)"}
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
            <span className="footer-role">
              {lang === "fr"
                ? "Élève ingénieur en Génie Informatique (EHEIM)"
                : "Software Engineering Student (EHEIM)"}
            </span>
          </div>

          <div className="footer-links">
            <a href="#projets">{lang === "fr" ? "Projets" : "Projects"}</a>
            <a href="#cv-variantes">{lang === "fr" ? "CV" : "Resumes"}</a>
            <a href="#parcours">{lang === "fr" ? "Parcours" : "Journey"}</a>
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
        lang={lang}
        onClose={closeProjectModal}
      />
    </div>
  );
}
