import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ArrowLeftRight,
  ChevronDown,
  Check,
  Code2,
  Copy,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Plug,
  Puzzle,
  Split,
  Target,
  ShieldCheck,
  Terminal,
  X,
} from "lucide-react";
import {
  projects,
  skillGroups,
  principles,
  experiences,
  type Project,
} from "./data/portfolio.ts";

const github = "https://github.com/fahchouchsm";
const email = "fahchouchmd@gmail.com";
const principleIcons = [Target, Puzzle, ArrowLeftRight, Split, Plug];
const nav = [
  ["projets", "Projets"],
  ["approche", "Approche"],
  ["parcours", "Parcours"],
  ["contact", "Contact"],
];

function ProjectVisual({ kind }: { kind: Project["visual"] }) {
  if (kind === "gateway")
    return (
      <div className="project-visual gateway-visual" aria-hidden="true">
        <div className="visual-caption">
          AUTHENTICATION FLOW <span>RS256</span>
        </div>
        <div className="gateway-flow">
          <div className="flow-node">
            <Code2 size={20} />
            <span>Client</span>
          </div>
          <span className="flow-line" />
          <div className="flow-node main-node">
            <ShieldCheck size={25} />
            <span>AuthGateway</span>
            <small>JWT · RBAC · JWKS</small>
          </div>
          <span className="flow-line" />
          <div className="services">
            <span>Service A</span>
            <span>Service B</span>
          </div>
        </div>
        <div className="visual-foot">
          <span className="tiny-dot" /> Une identité. Des services indépendants.
        </div>
      </div>
    );
  if (kind === "city")
    return (
      <div className="project-visual city-visual" aria-hidden="true">
        <div className="visual-caption">
          URBAN REPORTING <span>REST API</span>
        </div>
        <div className="city-map">
          <span className="road road-one" />
          <span className="road road-two" />
          <span className="road road-three" />
          <span className="map-pin pin-one">
            <MapPin size={22} />
          </span>
          <span className="map-pin pin-two">
            <MapPin size={18} />
          </span>
          <div className="report-chip">
            <span className="tiny-dot" />
            <span>Signalement → Autorité</span>
            <ArrowUpRight size={17} />
          </div>
        </div>
      </div>
    );
  if (kind === "database")
    return (
      <div className="project-visual database-visual" aria-hidden="true">
        <div className="visual-caption">
          <span>MYSQL COMPASS</span>
          <span>DESKTOP</span>
        </div>
        <div className="sql-window">
          <aside>
            ▦ schemas
            <br />
            <br />⌄ database
            <br />
            <span>▤ tables</span>
            <br />
            <span>▤ columns</span>
          </aside>
          <div>
            <code>
              <b>SELECT</b> *<br />
              <b>FROM</b> information_schema.tables;
            </code>
            <div className="fake-table">
              <span>TABLE_NAME</span>
              <span>ENGINE</span>
              <span>users</span>
              <span>InnoDB</span>
              <span>projects</span>
              <span>InnoDB</span>
            </div>
          </div>
        </div>
      </div>
    );
  if (kind === "bettergit")
    return (
      <div className="project-visual bettergit-visual" aria-hidden="true">
        <div className="visual-caption">
          BETTERGIT <span>DESKTOP</span>
        </div>
        <div className="git-graph">
          <span className="graph-line graph-main" />
          <span className="graph-line graph-branch" />
          <span className="graph-line graph-merge" />
          <i className="graph-commit commit-one" />
          <i className="graph-commit commit-two" />
          <i className="graph-commit commit-three" />
          <i className="graph-commit commit-four" />
          <div className="git-proof">✓ quality gate · SonarQube</div>
        </div>
      </div>
    );
  return (
    <div className={`project-visual type-visual ${kind}`} aria-hidden="true">
      <div className="visual-caption">
        {kind === "market"
          ? "FREELANCE MARKETPLACE"
          : kind === "shop"
            ? "E-COMMERCE EXPERIENCE"
            : "LEARNING, OFFLINE"}
        <span>↗</span>
      </div>
      <div className="type-visual-title">
        {kind === "market" ? (
          <>
            skillz<span>hire.</span>
          </>
        ) : kind === "shop" ? (
          <>
            MONARK<span className="shop-sub">EVERYDAY, CONSIDERED.</span>
          </>
        ) : (
          <>
            Le Défi<span>Français.</span>
          </>
        )}
      </div>
      <div className="visual-foot">
        {kind === "market"
          ? "Les compétences rencontrent les projets."
          : kind === "shop"
            ? "Découvrir. Choisir. Commander."
            : "Apprendre à son rythme, sans connexion."}
      </div>
    </div>
  );
}

function ProjectDialog({
  project,
  close,
}: {
  project: Project | null;
  close: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!project) return;
    ref.current?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [project]);
  return (
    <dialog
      ref={ref}
      className="project-dialog"
      onClose={close}
      onClick={(event) => {
        if (event.target === event.currentTarget) ref.current?.close();
      }}
      aria-labelledby="dialog-title"
    >
      {project && (
        <>
          <div className="dialog-heading">
            <span className="eyebrow">DANS LE DÉTAIL / {project.category}</span>
            <button
              className="icon-button"
              autoFocus
              onClick={() => ref.current?.close()}
              aria-label="Fermer le projet"
            >
              <X />
            </button>
          </div>
          <h2 id="dialog-title">{project.title}</h2>
          <p className="dialog-intro">{project.description}</p>
          <ProjectVisual kind={project.visual} />
          <h3>Le besoin</h3>
          <p>{project.problem}</p>
          <h3>La réalisation</h3>
          <ul className="deliverables">
            {project.details.map((detail) => (
              <li key={detail}>
                <Check size={17} />
                {detail}
              </li>
            ))}
          </ul>
          <h3>Le regard architecture</h3>
          <p>{project.architecture}</p>
          <div className="tags">
            {project.stack.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          {project.url ? (
            <a
              className="button primary"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              Explorer le code <Github size={17} />
            </a>
          ) : (
            <p className="source-note">
              Projet réalisé en stage · code source non publié.
            </p>
          )}
        </>
      )}
    </dialog>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);
  const [chartFailed, setChartFailed] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  useEffect(() => {
    const aliases: Record<string, string> = {
      "/projects": "projets",
      "/about": "approche",
      "/contact": "contact",
    };
    const section = aliases[window.location.pathname];
    if (section) document.getElementById(section)?.scrollIntoView();
    return () => clearTimeout(copyTimer.current);
  }, []);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };
  const visibleProjects = projects.filter(
    (project) => filter === "Tous" || project.category === filter,
  );

  return (
    <>
      <a href="#main" className="skip-link">
        Aller au contenu
      </a>
      <header className="site-header">
        <div className="header-inner container">
          <a
            href="#"
            className="wordmark"
            aria-label="Mohammed Fahchouch, accueil"
          >
            <span className="wordmark-first">Mohammed</span>
            <span className="wordmark-last">
              Fahchouch
              <span className="wordmark-star" aria-hidden="true">
                ✳
              </span>
            </span>
          </a>
          <nav
            className={menuOpen ? "navigation open" : "navigation"}
            aria-label="Navigation principale"
          >
            {nav.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <a href={`mailto:${email}`} className="header-contact">
            Stage PFE 2026—2027 <ArrowUpRight size={16} />
          </a>
          <button
            className="menu-button icon-button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" /> Disponible pour un stage PFE
              2026—2027
            </div>
            <p className="eyebrow hero-name">
              GÉNIE INFORMATIQUE · RECHERCHE DE STAGE PFE
            </p>
            <h1 id="hero-title">
              Mohammed
              <br />
              <span>Fahchouch.</span>
            </h1>
            <p className="hero-description">
              Élève ingénieur en 5e année à l’EHEI Oujda. Je recherche un stage
              PFE en développement logiciel pour apprendre, contribuer et évoluer
              au sein d’une équipe.
            </p>
            <div className="hero-actions">
              <a href="#projets" className="button primary">
                Explorer mes projets <ArrowDown size={17} />
              </a>
              <a href="#contact" className="text-link">
                Faisons connaissance <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="hero-location">
              <MapPin size={14} /> Oujda, Maroc <span>•</span> API, desktop &
              architecture
            </div>
          </div>
          <div className="hero-art">
            <div className="profile-board" aria-label="Mon profil professionnel">
              <div className="profile-board-bar">
                <span>PROFIL / PFE 2026—2027</span>
                <span className="profile-board-ready"><i /> DISPONIBLE</span>
              </div>
              <div className="profile-board-main">
                <span className="profile-board-index">01</span>
                <p className="profile-board-kicker">CE QUI M’ANIME</p>
                <h2>
                  Comprendre.<br />
                  <em>Construire.</em><br />
                  Progresser.
                </h2>
                <p className="profile-board-copy">
                  Un profil analytique, curieux et à l’aise avec les défis qui
                  demandent de chercher, structurer et apprendre vite.
                </p>
                <div className="profile-traits">
                  <span>Esprit analytique</span>
                  <span>Apprentissage rapide</span>
                  <span>Travail en équipe</span>
                </div>
              </div>
              <div className="profile-board-footer">
                <span>JAVA · TYPESCRIPT · C#</span>
                <span>ARCHITECTURE LOGICIELLE</span>
              </div>
            </div>
            <p className="hero-visual-caption">Je cherche une équipe où la curiosité devient une contribution concrète.</p>
          </div>
          <div className="hero-footer">
            <span>5e ANNÉE · EHEI OUJDA</span>
            <p className="hero-statement">
              Génie informatique · Recherche d’un stage PFE
            </p>
            <a href="#projets" aria-label="Découvrir les projets">
              <ArrowDown size={17} />
            </a>
          </div>
        </section>

        <section
          className="github-section container"
          aria-labelledby="github-title"
        >
          <div className="github-heading">
            <div>
              <p className="eyebrow">AU FIL DES COMMITS</p>
              <h2 id="github-title">Construire, un jour après l’autre.</h2>
            </div>
            <a
              className="text-link"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={19} /> @fahchouchsm <ArrowUpRight size={16} />
            </a>
          </div>
          {chartFailed ? (
            <p className="chart-fallback" role="status">
              Le graphique est momentanément indisponible. Retrouvez mon
              activité directement sur{" "}
              <a href={github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              .
            </p>
          ) : (
            <div
              className="github-chart-scroll"
              tabIndex={0}
              role="region"
              aria-label="Calendrier de contributions GitHub, défilement horizontal"
            >
              <img
                src="https://ghchart.rshah.org/b4f272/fahchouchsm"
                alt="Calendrier des contributions GitHub de Mohammed Fahchouch sur les douze derniers mois"
                loading="lazy"
                width="722"
                height="112"
                onError={() => setChartFailed(true)}
              />
            </div>
          )}
          <p className="github-caption">
            Mon activité publique sur GitHub · graphique actualisé par GitHub
            Chart.
          </p>
        </section>

        <section className="section projects-section" id="projets">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">01 / PROJETS SÉLECTIONNÉS</p>
                <h2>
                  Des projets.
                  <br />
                  <span>Du code. Du concret.</span>
                </h2>
              </div>
              <p>
                Du backend distribué à l’interface utilisateur,
                <br />
                une sélection de projets qui racontent
                <br />
                ma façon de construire.
              </p>
            </div>
            <div className="projects-toolbar">
              <div
                className="filters"
                role="group"
                aria-label="Filtrer les projets"
              >
                {["Tous", "Backend", "Web", "Desktop"].map((item) => (
                  <button
                    className={filter === item ? "active filter" : "filter"}
                    key={item}
                    aria-pressed={filter === item}
                    onClick={() => setFilter(item)}
                  >
                    {item}
                    {item === "Tous" && (
                      <span>{projects.length.toString().padStart(2, "0")}</span>
                    )}
                  </button>
                ))}
              </div>
              <a
                className="text-link github-all"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                Tout mon GitHub <ArrowUpRight size={16} />
              </a>
            </div>
            <p className="sr-only" aria-live="polite">
              {visibleProjects.length} projets affichés
            </p>
            <div className="project-grid">
              {visibleProjects.map((project) => (
                <article className="project-card" key={project.id}>
                  <button
                    className="project-preview-button"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Découvrir le projet ${project.title}`}
                  >
                    <ProjectVisual kind={project.visual} />
                    <span className="preview-arrow">
                      <ArrowUpRight size={22} />
                    </span>
                  </button>
                  <div className="project-info">
                    <div className="project-meta">
                      <span>{project.category}</span>
                      <span>{project.context}</span>
                    </div>
                    <div className="project-title-row">
                      <h3>
                        <button onClick={() => setSelectedProject(project)}>
                          {project.title}
                        </button>
                      </h3>
                      <span className="project-number">
                        /{project.id.toString().padStart(2, "0")}
                      </span>
                    </div>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.stack.slice(0, 4).map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <button
                      className="text-link project-detail-link"
                      onClick={() => setSelectedProject(project)}
                    >
                      Voir le projet <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <div className="more-work">
              <Terminal size={20} />
              <p>J’explore aussi les outils développeur et la modélisation.</p>
              <a
                href={`${github}/Java2Diagram`}
                target="_blank"
                rel="noreferrer"
              >
                Java2Diagram <ArrowUpRight size={15} />
              </a>
              <a
                href={`${github}/betterGit-core`}
                target="_blank"
                rel="noreferrer"
              >
                BetterGit <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section className="approach-section section" id="approche">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / MA FAÇON DE CONSTRUIRE</p>
                <h2>
                  Ça fonctionne.
                  <br />
                  <span>Et ça se maintient.</span>
                </h2>
              </div>
              <div className="approach-intro">
                <Layers3 size={29} />
                <p>
                  Les frameworks évoluent. Les fondamentaux restent.
                  <br />
                  J’accorde une place centrale à l’architecture logicielle,
                  <br />à la lisibilité et aux principes SOLID.
                </p>
              </div>
            </div>
            <div className="approach-content">
              <div className="architecture-statement">
                <span className="eyebrow">ARCHITECTURE & BONNES PRATIQUES</span>
                <h3>
                  Chaque responsabilité
                  <br />à sa place.
                </h3>
                <p>
                  Découper les couches, expliciter les contrats et limiter le
                  couplage : une base pour faire évoluer un logiciel sans perdre
                  le fil.
                </p>
                <div className="practice-tags">
                  <span>Architecture en couches</span>
                  <span>MVC</span>
                  <span>Microservices</span>
                  <span>API REST</span>
                  <span>Injection de dépendances</span>
                  <span>Clean code</span>
                </div>
                <div className="code-note">
                  <span>// mon fil conducteur</span>
                  <code>lisibilité + cohésion − couplage</code>
                </div>
              </div>
              <div className="solid-list">
                {principles.map((principle, index) => {
                  const Icon = principleIcons[index];
                  return (
                    <details className="solid-item" key={principle.letter}>
                      <summary>
                        <span className="solid-letter" aria-hidden="true">
                          <Icon size={21} />
                        </span>
                        <div>
                          <strong>{principle.title}</strong>
                          <small>{principle.english}</small>
                        </div>
                        <ChevronDown
                          className="solid-toggle"
                          size={18}
                          aria-hidden="true"
                        />
                      </summary>
                      <p>{principle.description}</p>
                    </details>
                  );
                })}
              </div>
            </div>
            <div className="quality-strip">
              <span>
                <Check size={16} /> Conventions & revue de code
              </span>
              <span>
                <Check size={16} /> Tests & validation
              </span>
              <span>
                <Check size={16} /> Git & intégration continue
              </span>
              <span>
                <Check size={16} /> Documentation utile
              </span>
            </div>
          </div>
        </section>

        <section className="section skills-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">03 / COMPÉTENCES</p>
                <h2>
                  Une vision d’ensemble.
                  <br />
                  <span>Des outils adaptés.</span>
                </h2>
              </div>
              <p>
                Technologies pratiquées en projets et en formation.
                <br />
                Du développement à la mise en service.
              </p>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <article className="skill-group" key={group.title}>
                  <span className="skill-index">0{index + 1}</span>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <div className="skill-list">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <div className="learning-note">
              <span className="tiny-dot" />
              <strong>En 5e année</strong>
              <span>
                Approfondissement de React, Angular, React Native et Kubernetes.
              </span>
            </div>
          </div>
        </section>

        <section className="section journey-section" id="parcours">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">04 / PARCOURS</p>
                <h2>
                  Apprendre.
                  <br />
                  <span>Construire. Progresser.</span>
                </h2>
              </div>
              <p>
                Un parcours en informatique nourri par
                <br />
                la formation, les stages et les projets personnels.
              </p>
            </div>
            <div className="journey-grid">
              <div>
                <h3 className="column-heading">
                  Sur le terrain <span>EXPÉRIENCES</span>
                </h3>
                <div className="experience-list">
                  {experiences.map((experience) => (
                    <article className="experience" key={experience.company}>
                      <div className="timeline-dot" />
                      <p className="experience-date">{experience.date}</p>
                      <h4>{experience.company}</h4>
                      <p className="experience-role">{experience.role}</p>
                      {experience.description && (
                        <p className="experience-description">
                          {experience.description}
                        </p>
                      )}
                      {experience.tags && (
                        <div className="tags">
                          {experience.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="column-heading">
                  Les fondations <span>FORMATION</span>
                </h3>
                <article className="education-card">
                  <div className="education-header">
                    <span className="education-monogram">E</span>
                    <span className="education-date">2024 — 2027</span>
                  </div>
                  <h4>Cycle ingénieur en informatique</h4>
                  <p>EHEI · Oujda</p>
                  <span className="current-year">
                    5e année · recherche stage PFE 2026—2027
                  </span>
                  <div className="education-years">
                    <div>
                      <span>03</span>
                      <p>
                        <strong>Les fondamentaux</strong>Algorithmique, C++,
                        Java et commandes Linux.
                      </p>
                    </div>
                    <div>
                      <span>04</span>
                      <p>
                        <strong>Le génie logiciel & le déploiement</strong>Java,
                        Symfony, Spring Boot, Python, ASP.NET, Entity Framework
                        Core, Hibernate, Doctrine. Git, Docker, Ansible,
                        Jenkins, Grafana, Prometheus et Nginx.
                      </p>
                    </div>
                    <div className="active-year">
                      <span>05</span>
                      <p>
                        <strong>Les interfaces & l’orchestration</strong>React,
                        Angular, React Native et Kubernetes.
                      </p>
                    </div>
                  </div>
                </article>
                <article className="bts-card">
                  <span className="eyebrow">BTS · MAGHREB AL ARABI</span>
                  <h4>Technicien spécialisé</h4>
                  <p>
                    Java, HTML, CSS, bases de données et SQL.
                    <br />
                    Développement web, C et algorithmique.
                  </p>
                  <p className="education-extra">
                    Baccalauréat Sciences Physiques · 2020 — 2021
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section
          className="about-strip container"
          aria-label="Profil et langues"
        >
          <div className="about-person">
            <img
              src="/pfp.png"
              alt="Mohammed Fahchouch"
              width="72"
              height="72"
              loading="lazy"
            />
            <div>
              <p className="eyebrow">DERRIÈRE LE CODE</p>
              <p>
                Curieux de comprendre.
                <br />
                <strong>Ingénieur logiciel, prêt à contribuer.</strong>
              </p>
            </div>
          </div>
          <div className="languages" aria-label="Langues">
            <span>
              Arabe <strong>Natif</strong>
            </span>
            <span>
              Anglais <strong>C1</strong>
            </span>
            <span>
              Français <strong>B2</strong>
            </span>
            <span>
              Allemand <strong>A2</strong>
            </span>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container">
            <div className="contact-top">
              <span className="eyebrow">05 / RENCONTRONS-NOUS</span>
              <span className="availability">
                <span className="status-dot" /> À l’écoute d’opportunités de
                stage PFE 2026—2027
              </span>
            </div>
            <div className="contact-main">
              <h2>
                Disponible pour un stage PFE.
                <br />
                <span>Prêt à contribuer à votre équipe.</span>
              </h2>
              <a
                className="contact-arrow"
                href={`mailto:${email}`}
                aria-label="Envoyer un email à Mohammed"
              >
                <ArrowUpRight />
              </a>
            </div>
            <p className="contact-description">
              Je recherche un stage PFE en développement logiciel pour intégrer
              une équipe, contribuer à des produits concrets
              <br className="desktop-break" /> et consolider mon expérience en
              ingénierie logicielle.
            </p>
            <div className="contact-links">
              <a className="email-link" href={`mailto:${email}`}>
                {email}
              </a>
              <button
                className="copy-button"
                onClick={copyEmail}
                aria-label="Copier l’adresse email"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                <span aria-live="polite">{copied ? "Copié !" : "Copier"}</span>
              </button>
            </div>
            <div className="contact-bottom">
              <a href="tel:+212600242374">
                <Phone size={16} /> +212 600 242 374
              </a>
              <span>
                <MapPin size={16} /> Oujda, Maroc
              </span>
              <div className="social-links">
                <a href={github} target="_blank" rel="noreferrer">
                  <Github size={17} /> GitHub <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://www.linkedin.com/in/fahchchouch-mohammed/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} />
                </a>
                <a href={`mailto:${email}`}>
                  <Mail size={17} /> Email <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer container">
        <a href="#" className="wordmark" aria-label="Retour en haut">
          <span className="wordmark-first">Mohammed</span>
          <span className="wordmark-last">
            Fahchouch
            <span className="wordmark-star" aria-hidden="true">
              ✳
            </span>
          </span>
        </a>
        <p>© {new Date().getFullYear()} Mohammed Fahchouch</p>
        <span>Pensé avec soin. Construit avec intention.</span>
        <a href="#" className="text-link">
          Retour en haut ↑
        </a>
      </footer>
      <ProjectDialog
        project={selectedProject}
        close={() => setSelectedProject(null)}
      />
    </>
  );
}
