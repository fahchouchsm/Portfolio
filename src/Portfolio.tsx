import { useEffect, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Copy,
  Check,
  Download,
  ExternalLink,
  Calendar,
  Building2,
  ArrowRight,
} from "lucide-react";
import {
  projects,
  principles,
  skillGroups,
  experiences,
  educations,
  type Project,
} from "./data/portfolio.ts";

const CV_PATH = "/cv/CV_Fahchouch_Mohammed.pdf";
const GITHUB_URL = "https://github.com/fahchouchsm";
const LINKEDIN_URL = "https://www.linkedin.com/in/fahchchouch-mohammed/";
const EMAIL_ADDRESS = "fahchouchmd@gmail.com";
const PHONE_NUMBER = "+212 600 242 374";

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
              className="btn-close"
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
    { href: "#cv", label: lang === "fr" ? "CV" : "Resume" },
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
            <div className="brand-text-col">
              <span className="brand-name">
                Mohammed <strong>Fahchouch</strong>
              </span>
              <span className="brand-role">
                {lang === "fr" ? "Élève Ingénieur en Génie Informatique" : "Software Engineering Student"}
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
              href={CV_PATH}
              download
              className="btn btn-secondary btn-sm header-cv-btn"
            >
              <Download size={14} />
              {lang === "fr" ? "Télécharger CV" : "Download CV"}
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
              <div className="hero-status-pill">
                <span>
                  {lang === "fr"
                    ? "Recherche de stage PFE : Février à Juillet 2027"
                    : "Seeking PFE Internship: February to July 2027"}
                </span>
              </div>

              <h1 id="hero-title" className="hero-title">
                Mohammed Fahchouch
              </h1>

              <p className="hero-summary">
                {lang === "fr"
                  ? "Élève ingénieur en Génie Informatique à l’EHEIM d’Oujda (5e année). Spécialisé dans les architectures logicielles distribuées, les moteurs de code et la conception résiliente avec Java 21, Spring Boot et C# .NET."
                  : "Software engineering student at EHEIM Oujda (5th year). Specializing in distributed software architecture, code analysis engines, and resilient systems with Java 21, Spring Boot, and C# .NET."}
              </p>

              <div className="hero-cta-row">
                <a href="#projets" className="btn btn-primary">
                  <span>{lang === "fr" ? "Consulter les projets" : "Explore projects"}</span>
                  <ArrowRight size={16} />
                </a>
                <a href={CV_PATH} download className="btn btn-secondary">
                  <Download size={16} />
                  <span>{lang === "fr" ? "Télécharger mon CV (PDF)" : "Download resume (PDF)"}</span>
                </a>
              </div>
            </div>

            {/* Profile summary spec card */}
            <div className="hero-card-col">
              <div className="profile-spec-card">
                <div className="spec-card-header">
                  <h2 className="spec-header-title">
                    {lang === "fr" ? "Profil d'ingénierie" : "Engineering Profile"}
                  </h2>
                </div>

                <div className="spec-card-body">
                  <div className="spec-row">
                    <span className="spec-key">{lang === "fr" ? "Formation" : "Education"}</span>
                    <span className="spec-val">
                      {lang === "fr"
                        ? "Ingénieur d'État en Génie Informatique (EHEIM Oujda, 5e année)"
                        : "State Software Engineering Degree (EHEIM Oujda, 5th Year)"}
                    </span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">{lang === "fr" ? "Objectif" : "Target"}</span>
                    <span className="spec-val highlight-val">
                      {lang === "fr"
                        ? "Stage PFE de 4 à 6 mois (Février – Juillet 2027)"
                        : "PFE Internship 4 to 6 months (Feb – July 2027)"}
                    </span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">{lang === "fr" ? "Mobilité" : "Mobility"}</span>
                    <span className="spec-val">
                      {lang === "fr" ? "Casablanca, Rabat, Tanger, Oujda, Remote" : "Casablanca, Rabat, Tangier, Oujda, Remote"}
                    </span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">{lang === "fr" ? "Langages" : "Languages"}</span>
                    <span className="spec-val font-code">Java 21, C#, TypeScript, SQL, Python, C/C++</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">{lang === "fr" ? "Frameworks" : "Frameworks"}</span>
                    <span className="spec-val font-code">Spring Boot 3, ASP.NET Core, React, Docker</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-key">{lang === "fr" ? "Standards" : "Standards"}</span>
                    <span className="spec-val">Clean Architecture, Principes SOLID, SonarQube score A</span>
                  </div>
                  <div className="spec-row spec-footer-row">
                    <span className="spec-key">{lang === "fr" ? "Contact" : "Contact"}</span>
                    <span className="spec-val font-code">fahchouchmd@gmail.com</span>
                  </div>
                </div>
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
                    ? "Travaux d'architecture logicielle réalisés en stage en entreprise et en cycle d'ingénieur."
                    : "Software architecture and systems work delivered during corporate internships and engineering curriculum."}
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
                      <span className="project-category-badge">{project.category}</span>
                      <span className="project-context">
                        {lang === "fr" ? project.context : project.contextEn}
                      </span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                  </div>

                  <p className="project-desc">
                    {lang === "fr" ? project.description : project.descriptionEn}
                  </p>

                  <div className="project-highlights">
                    <span className="highlights-label">
                      {lang === "fr" ? "Points clés d'ingénierie :" : "Key highlights:"}
                    </span>
                    <ul className="highlights-list">
                      {(lang === "fr" ? project.details : project.detailsEn).slice(0, 2).map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-stack-wrap">
                    {project.stack.slice(0, 6).map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 6 && (
                      <span className="tech-tag tech-more">
                        +{project.stack.length - 6}
                      </span>
                    )}
                  </div>

                  <div className="project-card-footer">
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={(e) => openProjectModal(project, e.currentTarget)}
                      aria-label={`Découvrir le projet ${project.title}`}
                    >
                      <span>{lang === "fr" ? "Découvrir le projet" : "Explore project"}</span>
                      <ArrowRight size={14} />
                    </button>

                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-code-link"
                        aria-label={`Code source ${project.title}`}
                      >
                        <Github size={15} />
                        <span>{lang === "fr" ? "Code source" : "Source code"}</span>
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <span className="project-code-private">
                        {lang === "fr" ? "Code source privé (propriété CHU)" : "Private source (CHU property)"}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CV SECTION - SINGLE DOCUMENT DOWNLOAD */}
        <section className="section cv-section" id="cv" aria-labelledby="cv-title">
          <div className="container">
            <div className="cv-banner-card">
              <div className="cv-banner-content">
                <h2 id="cv-title" className="cv-banner-title">
                  {lang === "fr" ? "Curriculum Vitae officiel" : "Official Resume"}
                </h2>
                <p className="cv-banner-desc">
                  {lang === "fr"
                    ? "Document synthétique d'une page détaillant ma formation d'ingénieur d'État (EHEIM Oujda), mes expériences en développement logiciel (CHU Oujda, SRM Oriental) et mes compétences en backend distribué."
                    : "Comprehensive one-page document presenting my state engineering education (EHEIM Oujda), software engineering internships (CHU Oujda, SRM Oriental), and distributed backend skills."}
                </p>
                <div className="cv-meta-chips">
                  <span className="cv-chip">Format PDF standard</span>
                  <span className="cv-chip">1 page synthétique</span>
                  <span className="cv-chip">Recherche Stage PFE 2027</span>
                </div>
              </div>

              <div className="cv-banner-action">
                <a
                  href={CV_PATH}
                  download
                  className="btn btn-primary cv-download-btn"
                  aria-label="Télécharger le CV officiel de Mohammed Fahchouch"
                >
                  <Download size={18} />
                  <span>{lang === "fr" ? "Télécharger le CV (PDF)" : "Download Resume (PDF)"}</span>
                </a>
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
                  ? "Conception orientée maintenabilité : application concrète des principes SOLID et de la Clean Architecture."
                  : "Maintainability-first design: practical application of SOLID principles and clean software architecture."}
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
                  ? "Technologies, frameworks et langages maîtrisés au fil des projets et stages professionnels."
                  : "Technologies, frameworks, and programming languages mastered across engineering projects and internships."}
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
                  ? "Missions en entreprise et cursus académique en école d'ingénieurs."
                  : "Corporate software development internships and state engineering academic curriculum."}
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
                    src="https://ghchart.rshah.org/38bdf8/fahchouchsm"
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
                        en Java, manipulation des graphes DAG et parcours d'arbres syntaxiques AST) et
                        la mise en œuvre de systèmes distribués résilients (sécurité JWT/JWKS, cache Redis,
                        pipelines Docker et services ASP.NET Core).
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
                        My background combines low-level data structures (Git engine in Java, DAG graphs,
                        and AST syntax tree traversal) with distributed systems design (JWT/JWKS security,
                        Redis caching, Docker pipelines, and ASP.NET Core services).
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
                  <div className="channel-header">
                    <Mail size={20} className="contact-icon" />
                    <span className="contact-type">
                      {lang === "fr" ? "Courrier électronique" : "Email Address"}
                    </span>
                  </div>
                  <div className="contact-details">
                    <a
                      href={`mailto:${EMAIL_ADDRESS}`}
                      className="contact-value-link"
                    >
                      {EMAIL_ADDRESS}
                    </a>
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm copy-btn"
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
                  <div className="channel-header">
                    <Phone size={20} className="contact-icon" />
                    <span className="contact-type">
                      {lang === "fr" ? "Téléphone direct" : "Direct Phone"}
                    </span>
                  </div>
                  <div className="contact-details">
                    <a
                      href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                      className="contact-value-link"
                    >
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="contact-channel">
                  <div className="channel-header">
                    <Linkedin size={20} className="contact-icon" />
                    <span className="contact-type">
                      {lang === "fr" ? "Réseau professionnel" : "Professional Network"}
                    </span>
                  </div>
                  <div className="contact-details">
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
                  <div className="channel-header">
                    <Github size={20} className="contact-icon" />
                    <span className="contact-type">
                      {lang === "fr" ? "Dépôts & code" : "Repositories & Code"}
                    </span>
                  </div>
                  <div className="contact-details">
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
                  <div className="channel-header">
                    <MapPin size={20} className="contact-icon" />
                    <span className="contact-type">
                      {lang === "fr" ? "Localisation & Mobilité" : "Location & Mobility"}
                    </span>
                  </div>
                  <div className="contact-details">
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
                ? "Élève Ingénieur d'État en Génie Informatique (EHEIM Oujda)"
                : "Software Engineering Student (EHEIM Oujda)"}
            </span>
          </div>

          <div className="footer-links">
            <a href="#projets">{lang === "fr" ? "Projets" : "Projects"}</a>
            <a href={CV_PATH} download>{lang === "fr" ? "CV" : "Resume"}</a>
            <a href="#approche">{lang === "fr" ? "Approche" : "Approach"}</a>
            <a href="#competences">{lang === "fr" ? "Compétences" : "Skills"}</a>
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
