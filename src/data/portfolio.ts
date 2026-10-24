export interface Project {
  id: number;
  title: string;
  category: "Backend" | "Web" | "Desktop";
  context: string;
  contextEn: string;
  visual: "gateway" | "city" | "database" | "market" | "bettergit";
  description: string;
  descriptionEn: string;
  problem: string;
  problemEn: string;
  details: string[];
  detailsEn: string[];
  architecture: string;
  architectureEn: string;
  stack: string[];
  url?: string;
}

export interface CvVariant {
  id: string;
  title: string;
  titleEn: string;
  roleSubtitle: string;
  roleSubtitleEn: string;
  path: string;
  highlights: string[];
  highlightsEn: string[];
  primaryTech: string[];
}

export interface Principle {
  letter: string;
  title: string;
  titleEn: string;
  english: string;
  description: string;
  descriptionEn: string;
}

export interface Experience {
  company: string;
  date: string;
  dateEn: string;
  role: string;
  roleEn: string;
  description: string;
  descriptionEn: string;
  tags: string[];
}

export interface Education {
  degree: string;
  degreeEn: string;
  institution: string;
  period: string;
  description: string;
  descriptionEn: string;
}

export interface SkillGroup {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  skills: string[];
}

export const cvVariants: CvVariant[] = [
  {
    id: "general",
    title: "Génie logiciel",
    titleEn: "Software Engineering",
    roleSubtitle: "Profil polyvalent · Conception logicielle & architecture",
    roleSubtitleEn: "Generalist profile · Software design & architecture",
    path: "/cv/CV_Fahchouch_Mohammed.pdf",
    highlights: [
      "Architectures logicielles résilientes et conception modulaire",
      "Écosystème backend distribué (Java / Spring Boot & C# / ASP.NET Core)",
      "Interfaces desktop et web réactives (React, TypeScript, Tauri, Electron)",
      "Orchestration conteneurisée et environnement Linux au quotidien",
    ],
    highlightsEn: [
      "Resilient software architecture and modular systems design",
      "Distributed backend ecosystem (Java / Spring Boot & C# / ASP.NET Core)",
      "Reactive desktop & web interfaces (React, TypeScript, Tauri, Electron)",
      "Container orchestration and daily Linux environment practice",
    ],
    primaryTech: ["Java", "Spring Boot", "C#", ".NET", "React", "TypeScript", "Docker"],
  },
  {
    id: "backend-java",
    title: "Backend Java",
    titleEn: "Backend Java",
    roleSubtitle: "Spécialisation microservices & Spring Boot",
    roleSubtitleEn: "Microservices specialization & Spring Boot",
    path: "/cv/CV_Fahchouch_Mohammed_Backend_Java.pdf",
    highlights: [
      "Sécurisation des flux distribués avec Spring Security, JWT et rotation JWKS",
      "Mise en cache haute performance sous Redis et requêtes spatiales PostGIS",
      "Conception du moteur Git et analyse AST JavaParser (projet BetterGit)",
      "Quality Gate SonarQube strict avec score A et couverture de tests JUnit",
    ],
    highlightsEn: [
      "Securing distributed flows with Spring Security, JWT, and JWKS key rotation",
      "High performance Redis memory caching and PostGIS spatial queries",
      "Git engine core design and AST parsing with JavaParser (BetterGit)",
      "Strict SonarQube Quality Gate with Score A and JUnit test coverage",
    ],
    primaryTech: ["Java 17/21", "Spring Boot 3", "Spring Security", "Redis", "PostgreSQL", "SonarQube"],
  },
  {
    id: "devops-cloud",
    title: "DevOps & cloud",
    titleEn: "DevOps & Cloud",
    roleSubtitle: "Automatisation, conteneurisation & infrastructure",
    roleSubtitleEn: "Automation, containerization & infrastructure",
    path: "/cv/CV_Fahchouch_Mohammed_DevOps_Cloud.pdf",
    highlights: [
      "Déploiement et orchestration de grappes de conteneurs sous Docker et Kubernetes",
      "Pipelines CI/CD automatisés sous GitLab CI et Jenkins",
      "Supervision des métriques applicatives avec Prometheus et Grafana",
      "Gestion de configuration avec Ansible et automatisation de scripts bash Linux",
    ],
    highlightsEn: [
      "Deploying and orchestrating container workloads with Docker and Kubernetes",
      "Automated CI/CD delivery pipelines in GitLab CI and Jenkins",
      "Observability and application metrics with Prometheus and Grafana",
      "Configuration management using Ansible and automated Linux bash scripts",
    ],
    primaryTech: ["Docker", "Kubernetes", "GitLab CI", "Linux", "Ansible", "Nginx"],
  },
  {
    id: "fullstack",
    title: "Fullstack",
    titleEn: "Fullstack",
    roleSubtitle: "Applications web de bout en bout & temps réel",
    roleSubtitleEn: "End-to-end web applications & real-time streams",
    path: "/cv/CV_Fahchouch_Mohammed_Fullstack.pdf",
    highlights: [
      "Interfaces modernes sous React, Next.js et TypeScript avec gestion d'état",
      "Services backend modulaires RESTful et protocoles temps réel WebSockets",
      "Bases relationnelles et documentaires (PostgreSQL, MongoDB, SQL Server)",
      "Expérience utilisateur fluide sans compromis sur la rigueur d'ingénierie",
    ],
    highlightsEn: [
      "Modern interfaces using React, Next.js, and TypeScript with state management",
      "Modular RESTful backend services and real-time WebSocket protocols",
      "Relational and document storage (PostgreSQL, MongoDB, SQL Server)",
      "Polished user experience backed by solid engineering standards",
    ],
    primaryTech: ["React", "Next.js", "TypeScript", "Node.js", "Express", "Tailwind CSS"],
  },
  {
    id: "dotnet-csharp",
    title: "C# & .NET",
    titleEn: "C# & .NET",
    roleSubtitle: "Services métiers d'entreprise & architecture en couches",
    roleSubtitleEn: "Enterprise domain services & layered architecture",
    path: "/cv/CV_Fahchouch_Mohammed_DotNet_CSharp.pdf",
    highlights: [
      "APIs sous ASP.NET Core et Entity Framework Core",
      "Architecture Clean / en couches avec DTOs, AutoMapper et gestion globale d'erreurs",
      "Migrations de schémas automatisées et persistance sous SQL Server",
      "Interopérabilité dans un réseau de microservices conteneurisés",
    ],
    highlightsEn: [
      "Web APIs built on ASP.NET Core and Entity Framework Core",
      "Clean / Layered architecture with DTOs, AutoMapper, and global exception handling",
      "Automated database migrations on startup and SQL Server persistence",
      "Interoperability within an isolated containerized microservice network",
    ],
    primaryTech: ["C#", "ASP.NET Core", "EF Core", "SQL Server", "Clean Architecture", "Docker"],
  },
  {
    id: "data-ai",
    title: "Data & IA",
    titleEn: "Data & AI",
    roleSubtitle: "Pipelines de données, RAG & intégration de modèles",
    roleSubtitleEn: "Data pipelines, RAG & LLM integration",
    path: "/cv/CV_Fahchouch_Mohammed_Data_AI.pdf",
    highlights: [
      "Pipelines de recherche vectorielle RAG avec FAISS et bases documentaires",
      "Intégration d'APIs d'inférence sous Python et FastAPI",
      "Analyses de données volumiques et requêtes géospatiales sous PostGIS",
      "Expérimentations de fine-tuning et exploitation de modèles ouverts",
    ],
    highlightsEn: [
      "RAG vector search pipelines with FAISS and document stores",
      "Inference API integrations with Python and FastAPI",
      "High volume data analysis and PostGIS geospatial queries",
      "Fine-tuning experiments and open-weights model deployment",
    ],
    primaryTech: ["Python", "FastAPI", "PyTorch", "FAISS", "PostgreSQL/PostGIS", "Scikit-Learn"],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "BetterGit",
    category: "Desktop",
    context: "Stage · CHU Oujda · 2026",
    contextEn: "Internship · CHU Oujda · 2026",
    visual: "bettergit",
    description:
      "Outil desktop d'exploration Git et d'analyse de code conçu lors d'un stage au CHU Oujda pour rendre l'historique et les structures logicielles limpides.",
    descriptionEn:
      "Desktop Git exploration and code analysis tool developed during an internship at CHU Oujda to clarify commit history and code structure.",
    problem:
      "Comprendre visuellement des graphes de branches complexes, auditer les preuves de commits et extraire automatiquement des diagrammes d'architecture du code.",
    problemEn:
      "Visually understand complex branch graphs, audit commit proof records, and extract automated architecture diagrams directly from source code.",
    details: [
      "Moteur Git modulaire en Java (Eclipse JGit) manipulant l'index de staging et les graphes orientés acycliques (DAG).",
      "Outil CLI Java2Diagram : parsing syntaxique de l'AST avec JavaParser pour générer des diagrammes UML PlantUML.",
      "Interface desktop native sous Tauri, React et TypeScript communicant de façon asynchrone avec le moteur.",
      "Validation par Quality Gate SonarQube strict avec score A (0 vulnérabilité critique et respect des normes de maintenabilité).",
    ],
    detailsEn: [
      "Modular Git engine in Java (Eclipse JGit) manipulating staging index and DAG commit trees.",
      "Java2Diagram CLI tool: syntax parsing of Abstract Syntax Trees (JavaParser) generating PlantUML diagrams.",
      "Native desktop client built with Tauri, React, and TypeScript communicating asynchronously with the core.",
      "Strict SonarQube Quality Gate with Score A (0 critical vulnerabilities and solid maintainability index).",
    ],
    architecture:
      "Le pont Tauri / IPC découple la couche présentation réactive du moteur d'analyse Java. La modularité garantit que l'inspection Git et la génération de diagrammes AST restent des modules isolés et testables unitairement.",
    architectureEn:
      "The Tauri / IPC bridge decouples the reactive presentation layer from the Java analysis engine. Modularity ensures Git inspection and AST diagram generation remain isolated and unit-testable.",
    stack: [
      "Java 21",
      "Eclipse JGit",
      "JavaParser",
      "JUnit",
      "React",
      "TypeScript",
      "Tauri",
      "SonarQube",
    ],
    url: "https://github.com/fahchouchsm/betterGit-desktop",
  },
  {
    id: 2,
    title: "AuthGateway",
    category: "Backend",
    context: "Projet académique PFA · 4e année EHEIM",
    contextEn: "Academic PFA Project · 4th Year EHEIM",
    visual: "gateway",
    description:
      "Passerelle d'authentification et de routage centralisée assurant la sécurité périmétrique d'un écosystème de microservices.",
    descriptionEn:
      "Centralized authentication gateway and perimeter router protecting a distributed microservices ecosystem.",
    problem:
      "Fournir une source de vérité unique pour l'authentification et les autorisations sans surcharger les services métiers de logique cryptographique.",
    problemEn:
      "Provide a single source of truth for authentication and authorization without burdening domain services with crypto logic.",
    details: [
      "Validation de jetons JWT asymétriques signés en RS256 avec rotation des clés publiques exposées via endpoint JWKS.",
      "Contrôle d'accès granulaire basé sur les rôles (RBAC) et injection de claims fiables aux services avals.",
      "Gestion de refresh tokens révocables stockés dans un cache Redis en mémoire (cookies HttpOnly stricts).",
      "Orchestration d'une plateforme de 11 conteneurs avec BusWay GIS sous Docker Compose avec sondes de santé.",
    ],
    detailsEn: [
      "Validation of asymmetric RS256 JWT tokens with key rotation served through a public JWKS endpoint.",
      "Granular role-based access control (RBAC) injecting validated claims to downstream services.",
      "Revocable refresh tokens stored in an in-memory Redis cache with strict HttpOnly cookies.",
      "Complete orchestration of an 11-container platform with BusWay GIS via Docker Compose health probes.",
    ],
    architecture:
      "La passerelle isole la responsabilité transversale d'authentification. Les microservices applicatifs en aval font confiance aux en-têtes injectés par le réseau interne, éliminant la duplication de code de sécurité.",
    architectureEn:
      "The gateway isolates the cross-cutting security concern. Downstream microservices trust internal injected headers, eliminating duplicated security code across domain APIs.",
    stack: [
      "Java 21",
      "Spring Boot 3",
      "Spring Security",
      "JWT / JWKS",
      "Redis",
      "PostgreSQL",
      "Docker Compose",
    ],
    url: "https://github.com/fahchouchsm/authGetway-PFA-4year",
  },
  {
    id: 3,
    title: "FixMyCity",
    category: "Backend",
    context: "Projet académique PFA · 4e année EHEIM",
    contextEn: "Academic PFA Project · 4th Year EHEIM",
    visual: "city",
    description:
      "API REST pour la gestion et le routage des signalements urbains vers les services municipaux compétents.",
    descriptionEn:
      "REST API for routing and managing citizen incident reports to municipal departments.",
    problem:
      "Organiser le cycle de vie d'un incident urbain (dépôt, catégorisation, affectation et résolution) à travers des contrats HTTP stricts.",
    problemEn:
      "Structure the life cycle of urban reports (submission, categorization, routing, resolution) through clear HTTP contracts.",
    details: [
      "Développement sous C# et ASP.NET Core suivant une architecture en couches (Controllers, Services, Repositories).",
      "Persistance relationnelle avec Entity Framework Core, migrations automatiques au démarrage et base SQL Server.",
      "Gestion centralisée des erreurs via middleware global et validation rigoureuse des entrées DTO.",
      "Connexion sécurisée au réseau Docker d'AuthGateway.",
    ],
    detailsEn: [
      "Layered architecture in C# and ASP.NET Core (Controllers, Services, Repositories).",
      "Relational persistence using Entity Framework Core, automatic startup migrations, and SQL Server.",
      "Centralized error handling via global middleware and strong DTO input validation.",
      "Secure networking within AuthGateway's isolated Docker mesh.",
    ],
    architecture:
      "Service métier autonome appliquant le principe d'inversion des dépendances. Les contrôleurs ne connaissent que les abstractions de service, facilitant les tests unitaires et le remplacement de la couche persistance.",
    architectureEn:
      "Autonomous domain service applying Dependency Inversion. Controllers depend strictly on service abstractions, enabling test doubles and clean persistence layer replacement.",
    stack: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "REST",
      "Docker",
    ],
    url: "https://github.com/fahchouchsm/fixMyCity-ASP-RestAPI-4year",
  },
  {
    id: 4,
    title: "Skillz Hire",
    category: "Web",
    context: "Projet personnel",
    contextEn: "Personal Project",
    visual: "market",
    description:
      "Plateforme web collaborative avec gestion de compétences, catalogues de profils et messagerie instantanée en temps réel.",
    descriptionEn:
      "Collaborative web platform with skill directories, profiles, and real-time chat messaging.",
    problem:
      "Offrir une interface fluide et instantanée permettant aux utilisateurs de collaborer et d'échanger des messages sans rechargement de page.",
    problemEn:
      "Deliver a seamless, responsive interface allowing users to collaborate and exchange messages without page reloads.",
    details: [
      "Authentification par jetons et gestion des profils utilisateurs.",
      "Canaux de discussion bidirectionnels temps réel propulsés par WebSockets (Socket.IO).",
      "Catalogue dynamique avec filtres multicritères et requêtes optimisées sous MongoDB.",
      "Interface réactive sous Next.js et TypeScript avec composants stylisés.",
    ],
    detailsEn: [
      "Token authentication and user profile management.",
      "Bidirectional real-time messaging channels powered by WebSockets (Socket.IO).",
      "Dynamic catalog with multicriteria filters and indexed MongoDB queries.",
      "Responsive UI built with Next.js and TypeScript.",
    ],
    architecture:
      "Séparation entre le rendu applicatif Next.js et l'API Express Node.js. Les flux de données temps réel sont gérés sur un canal WebSocket persistant distinct des requêtes HTTP déclaratives.",
    architectureEn:
      "Decoupled Next.js client rendering from the Node.js Express API. Real-time data streams operate over persistent WebSocket connections distinct from declarative HTTP calls.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
    ],
    url: "https://github.com/fahchouchsm/Skillz_Hire",
  },
  {
    id: 5,
    title: "MySQL Compass",
    category: "Desktop",
    context: "Stage · Société Régionale Multiservices de l'Oriental · 2024",
    contextEn: "Internship · SRMO · 2024",
    visual: "database",
    description:
      "Client desktop d'exploration multi-bases et générateur volumique de jeux d'essais relationnels pour les équipes de développement.",
    descriptionEn:
      "Cross-platform desktop database client and synthetic relational test data generator for software engineers.",
    problem:
      "Permettre l'exploration de bases de données locales et la génération sécurisée de millions de lignes synthétiques respectant l'intégrité référentielle.",
    problemEn:
      "Enable local DBMS exploration and safe generation of large synthetic datasets while honoring foreign key integrity.",
    details: [
      "Interface d'exploration de schémas, tables, index et colonnes pour MySQL, PostgreSQL et SQLite.",
      "Générateur volumique automatisé respectant les contraintes de clés primaires et clés étrangères.",
      "Éditeur de requêtes SQL intégré avec exécution asynchrone et exports de données en CSV / JSON.",
      "Architecture desktop sous Electron et React avec pont IPC isolé vers le connecteur Node.js natif.",
    ],
    detailsEn: [
      "Schema, table, index, and column browser for MySQL, PostgreSQL, and SQLite.",
      "High volume automated generator respecting primary and foreign key constraints.",
      "Embedded asynchronous SQL query editor with CSV and JSON exports.",
      "Electron and React desktop architecture with safe IPC bridging to native Node.js drivers.",
    ],
    architecture:
      "Isolation stricte du processus de rendu vis-à-vis du moteur d'exécution SQL dans le processus principal Node.js. Cette séparation prévient tout blocage de l'interface lors d'opérations volumiques.",
    architectureEn:
      "Strict isolation between UI render threads and the SQL execution engine in Node.js main process, keeping the interface fluid during massive data operations.",
    stack: [
      "Electron",
      "React",
      "TypeScript",
      "MySQL",
      "PostgreSQL",
      "Node.js",
      "SQL",
    ],
  },
];

export const principles: Principle[] = [
  {
    letter: "S",
    title: "Une responsabilité claire",
    titleEn: "Single Responsibility",
    english: "Single Responsibility",
    description:
      "Une classe ou un module ne doit avoir qu'une seule raison de changer. Dans BetterGit et AuthGateway, la validation des requêtes, la logique métier de sécurité et l'accès aux données résident dans des modules strictement indépendants.",
    descriptionEn:
      "A class or module should have one reason to change. In BetterGit and AuthGateway, request validation, security business logic, and data access live in strictly decoupled modules.",
  },
  {
    letter: "O",
    title: "Étendre sans modifier le cœur",
    titleEn: "Open / Closed Principle",
    english: "Open / Closed",
    description:
      "Les composants logiciels doivent être ouverts à l'extension mais fermés à la modification. Dans l'analyseur Java2Diagram, de nouveaux formats d'export de diagrammes s'implémentent via une interface commune sans altérer le parser AST.",
    descriptionEn:
      "Software entities should be open for extension but closed for modification. In the Java2Diagram parser, new diagram export formats implement a shared interface without touching the AST parsing engine.",
  },
  {
    letter: "L",
    title: "Des contrats fiables et substituables",
    titleEn: "Liskov Substitution",
    english: "Liskov Substitution",
    description:
      "Les sous-types doivent pouvoir remplacer leurs types de base sans altérer la cohérence du système. Dans FixMyCity et MySQL Compass, chaque connecteur de base de données respecte les mêmes garanties de contrat sans effets de bord inattendus.",
    descriptionEn:
      "Subtypes must be substitutable for their base types without altering system correctness. In FixMyCity and MySQL Compass, database drivers honor identical interface contracts with zero surprising side effects.",
  },
  {
    letter: "I",
    title: "Des interfaces ciblées et modulaires",
    titleEn: "Interface Segregation",
    english: "Interface Segregation",
    description:
      "Un module ne doit jamais dépendre de méthodes qu'il n'utilise pas. Au lieu d'imposer de volumineuses interfaces génériques, chaque service microservice n'expose que les contrats HTTP et interfaces nécessaires à son consommateur.",
    descriptionEn:
      "Clients should not be forced to depend upon interfaces that they do not use. Rather than bloated generic interfaces, microservices expose strictly scoped contracts tailored to consuming callers.",
  },
  {
    letter: "D",
    title: "Dépendre des abstractions",
    titleEn: "Dependency Inversion",
    english: "Dependency Inversion",
    description:
      "Les modules de haut niveau ne doivent pas dépendre des modules de bas niveau : tous deux doivent dépendre d'abstractions. Dans nos microservices Spring Boot et ASP.NET Core, les contrôleurs et cas d'usage dialoguent avec des interfaces de dépôt (repositories), permettant d'interchanger ou simuler la persistance sans réécrire la logique métier.",
    descriptionEn:
      "High-level modules should not depend on low-level modules; both should depend on abstractions. In our Spring Boot and ASP.NET Core microservices, controllers interact with repository interfaces, allowing painless test mocking and database swapping.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend & microservices",
    titleEn: "Backend & Microservices",
    description: "Architectures distribuées, APIs résilientes et sécurité.",
    descriptionEn: "Distributed architectures, resilient APIs, and security.",
    skills: [
      "Java (17 / 21)",
      "Spring Boot 3",
      "Spring Security",
      "Spring Data JPA",
      "C# / ASP.NET Core",
      "Node.js / Express",
      "PHP (Symfony)",
      "APIs RESTful",
      "JWT & JWKS",
      "Microservices",
    ],
  },
  {
    title: "Données & cache",
    titleEn: "Databases & Caching",
    description: "Modélisation relationnelle, volumétrie et requêtes spatiales.",
    descriptionEn: "Relational modeling, high volume data, and spatial queries.",
    skills: [
      "PostgreSQL",
      "PostGIS",
      "MySQL",
      "Redis (cache & tokens)",
      "SQL Server",
      "MongoDB",
      "SQLite",
      "Hibernate ORM",
      "Entity Framework Core",
    ],
  },
  {
    title: "Cloud, DevOps & Linux",
    titleEn: "Cloud, DevOps & Linux",
    description: "Conteneurisation, automatisation et exploitation système.",
    descriptionEn: "Containerization, pipeline automation, and system administration.",
    skills: [
      "Docker & Compose",
      "Kubernetes (notions)",
      "GitLab CI/CD",
      "Jenkins",
      "Linux (bash quotidien)",
      "Nginx",
      "Ansible (notions)",
      "SonarQube",
      "Git / GitHub",
    ],
  },
  {
    title: "Interfaces & applications",
    titleEn: "Frontends & Desktop Apps",
    description: "Applications web et clients desktop multiplateformes.",
    descriptionEn: "Modern web applications and cross-platform desktop clients.",
    skills: [
      "TypeScript",
      "JavaScript (ES6+)",
      "React",
      "Next.js",
      "Tauri",
      "Electron",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "WebSockets",
    ],
  },
  {
    title: "Conception & qualité",
    titleEn: "Software Quality & Architecture",
    description: "Méthodologie d'ingénierie et maintenabilité du code.",
    descriptionEn: "Engineering standards, clean code, and maintainability.",
    skills: [
      "SOLID",
      "Clean Architecture",
      "Design Patterns",
      "POO avancée",
      "AST (JavaParser)",
      "Tests JUnit & xUnit",
      "Quality Gate SonarQube (score A)",
      "Méthode Agile Scrum",
    ],
  },
  {
    title: "Système & langages complémentaires",
    titleEn: "Systems & Complementary Languages",
    description: "Fondamentaux algorithmiques et programmation système.",
    descriptionEn: "Algorithmic fundamentals and system programming.",
    skills: [
      "C / C++",
      "Python (FastAPI)",
      "Algorithmique & structures de données",
      "Shell Scripting Bash",
      "UML & PlantUML",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "CHU Oujda · Projet BetterGit",
    date: "7 août au 7 septembre 2026",
    dateEn: "August 7 to September 7, 2026",
    role: "Stagiaire développement logiciel",
    roleEn: "Software Development Intern",
    description:
      "Conception d'un moteur Git modulaire en Java (Eclipse JGit, gestion du staging et graphes DAG) et d'un client desktop Tauri / React. Développement de l'extension CLI Java2Diagram analysant l'arbre syntaxique abstrait (AST) pour générer des diagrammes UML. Intégration d'un Quality Gate SonarQube avec score A.",
    descriptionEn:
      "Built a modular Git engine in Java (Eclipse JGit, staging index management, DAG commit graphs) and a Tauri / React desktop client. Developed the Java2Diagram CLI extension analyzing AST syntax trees with JavaParser to generate PlantUML diagrams. Enforced SonarQube Quality Gate with Score A.",
    tags: ["Java 21", "Eclipse JGit", "JavaParser AST", "React", "Tauri", "SonarQube score A"],
  },
  {
    company: "Société Régionale Multiservices de l'Oriental",
    date: "Juin 2024",
    dateEn: "June 2024",
    role: "Stagiaire développement d'un client multi-SGBD",
    roleEn: "Multi-DBMS Desktop Client Intern",
    description:
      "Conception et implémentation de MySQL Compass : client desktop sous Electron, React et Node.js permettant l'exploration multi-bases (MySQL, PostgreSQL, SQLite) et la génération volumique de jeux d'essais synthétiques respectant l'intégrité référentielle.",
    descriptionEn:
      "Designed and implemented MySQL Compass: an Electron, React, and Node.js desktop tool for multi-database exploration (MySQL, PostgreSQL, SQLite) and automated volume synthetic test dataset generation honoring foreign key constraints.",
    tags: ["Electron", "React", "TypeScript", "Node.js", "SQL", "Bases relationnelles"],
  },
  {
    company: "Conseil Régional de l'Oriental",
    date: "Juin 2023",
    dateEn: "June 2023",
    role: "Stagiaire développement web MVC",
    roleEn: "Web Development Intern (MVC)",
    description:
      "Déploiement d'une application web fullstack sous architecture MVC (Node.js, Express, MySQL) dédiée à la centralisation, au filtrage dynamique et au suivi administratif des dossiers de candidatures de stages.",
    descriptionEn:
      "Deployed a fullstack MVC web platform (Node.js, Express, MySQL) for centralizing, filtering, and managing student internship applications for regional administration.",
    tags: ["Node.js", "Express", "MySQL", "Architecture MVC", "Bootstrap"],
  },
];

export const educations: Education[] = [
  {
    degree: "Cycle ingénieur d'État en Génie Informatique (5e année)",
    degreeEn: "State Software Engineering Degree (5th Year)",
    institution: "EHEIM Oujda",
    period: "2024 à 2027",
    description:
      "Admis sur concours directement en 3e année. Actuellement en 5e année. Recherche active d'un stage de fin d'études (PFE) de 4 à 6 mois (Février à Juillet 2027).",
    descriptionEn:
      "Admitted by competitive exam directly into year 3. Currently in final 5th year. Actively seeking a 4 to 6 months graduation internship (PFE, February to July 2027).",
  },
  {
    degree: "BTS Technicien Spécialisé en Développement Informatique",
    degreeEn: "Specialized Technical Degree in Software Development",
    institution: "Maghreb Al Arabi",
    period: "2022 à 2024",
    description:
      "Formation approfondie en algorithmique, programmation orientée objet (Java, C++), conception de bases de données relationnelles et développement web.",
    descriptionEn:
      "Intensive education in algorithms, object-oriented programming (Java, C++), relational database modeling, and web architectures.",
  },
  {
    degree: "Baccalauréat Sciences Physiques",
    degreeEn: "Baccalaureate in Physical Sciences",
    institution: "Lycée",
    period: "2020 à 2021",
    description:
      "Série scientifique avec mention, base solide en raisonnement mathématique et modélisation physique.",
    descriptionEn:
      "Scientific track with honors, establishing strong foundations in mathematical reasoning and physical modeling.",
  },
];
