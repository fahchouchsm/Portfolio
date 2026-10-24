export interface Project {
  id: number;
  title: string;
  category: "Backend" | "Web" | "Desktop";
  context: string;
  visual: "gateway" | "city" | "database" | "market" | "bettergit";
  description: string;
  problem: string;
  details: string[];
  architecture: string;
  stack: string[];
  url?: string;
  commandSnippet?: string;
}

export interface CvVariant {
  id: string;
  title: string;
  roleSubtitle: string;
  path: string;
  highlights: string[];
  primaryTech: string[];
}

export const cvVariants: CvVariant[] = [
  {
    id: "general",
    title: "Génie logiciel",
    roleSubtitle: "Profil polyvalent · Conception logicielle & architecture",
    path: "/cv/CV_Fahchouch_Mohammed.pdf",
    highlights: [
      "Architectures logicielles résilientes et conception modulaire",
      "Écosystème backend distribué (Java / Spring Boot & C# / ASP.NET Core)",
      "Interfaces desktop et web réactives (React, TypeScript, Tauri, Electron)",
      "Orchestration conteneurisée et environnement Linux au quotidien",
    ],
    primaryTech: ["Java", "Spring Boot", "C#", ".NET", "React", "TypeScript", "Docker"],
  },
  {
    id: "backend-java",
    title: "Backend Java",
    roleSubtitle: "Spécialisation microservices & Spring Boot",
    path: "/cv/CV_Fahchouch_Mohammed_Backend_Java.pdf",
    highlights: [
      "Sécurisation des flux distribués avec Spring Security, JWT et rotation JWKS",
      "Mise en cache haute performance sous Redis et requêtes spatiales PostGIS",
      "Conception du moteur Git et analyse AST JavaParser (projet BetterGit)",
      "Quality Gate SonarQube strict avec score A et couverture de tests JUnit",
    ],
    primaryTech: ["Java 17/21", "Spring Boot 3", "Spring Security", "Redis", "PostgreSQL", "SonarQube"],
  },
  {
    id: "devops-cloud",
    title: "DevOps & cloud",
    roleSubtitle: "Automatisation, conteneurisation & infrastructure",
    path: "/cv/CV_Fahchouch_Mohammed_DevOps_Cloud.pdf",
    highlights: [
      "Déploiement et orchestration de grappes de conteneurs sous Docker et Kubernetes",
      "Pipelines CI/CD automatisés sous GitLab CI et Jenkins",
      "Supervision des métriques applicatives avec Prometheus et Grafana",
      "Gestion de configuration avec Ansible et automatisation de scripts bash Linux",
    ],
    primaryTech: ["Docker", "Kubernetes", "GitLab CI", "Linux", "Ansible", "Nginx"],
  },
  {
    id: "fullstack",
    title: "Fullstack",
    roleSubtitle: "Applications web de bout en bout & temps réel",
    path: "/cv/CV_Fahchouch_Mohammed_Fullstack.pdf",
    highlights: [
      "Interfaces modernes sous React, Next.js et TypeScript avec gestion d'état",
      "Services backend modulaires RESTful et protocoles temps réel WebSockets",
      "Bases relationnelles et documentaires (PostgreSQL, MongoDB, SQL Server)",
      "Expérience utilisateur fluide sans compromis sur la rigueur d'ingénierie",
    ],
    primaryTech: ["React", "Next.js", "TypeScript", "Node.js", "Express", "Tailwind CSS"],
  },
  {
    id: "dotnet-csharp",
    title: "C# & .NET",
    roleSubtitle: "Services métiers d'entreprise & architecture en couches",
    path: "/cv/CV_Fahchouch_Mohammed_DotNet_CSharp.pdf",
    highlights: [
      "APIs sous ASP.NET Core et Entity Framework Core",
      "Architecture Clean / en couches avec DTOs, AutoMapper et gestion globale d'erreurs",
      "Migrations de schémas automatisées et persistance sous SQL Server",
      "Interopérabilité dans un réseau de microservices conteneurisés",
    ],
    primaryTech: ["C#", "ASP.NET Core", "EF Core", "SQL Server", "Clean Architecture", "Docker"],
  },
  {
    id: "data-ai",
    title: "Data & IA",
    roleSubtitle: "Pipelines de données, RAG & intégration de modèles",
    path: "/cv/CV_Fahchouch_Mohammed_Data_AI.pdf",
    highlights: [
      "Pipelines de recherche vectorielle RAG avec FAISS et bases documentaires",
      "Intégration d'APIs d'inférence sous Python et FastAPI",
      "Analyses de données volumiques et requêtes géospatiales sous PostGIS",
      "Expérimentations de fine-tuning et exploitation de modèles ouverts",
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
    visual: "bettergit",
    description:
      "Outil desktop d'exploration Git et d'analyse de code conçu lors d'un stage au CHU Oujda pour rendre l'historique et les structures logicielles limpides.",
    problem:
      "Comprendre visuellement des graphes de branches complexes, auditer les preuves de commits et extraire automatiquement des diagrammes d'architecture du code.",
    details: [
      "Moteur Git modulaire en Java (Eclipse JGit) manipulant l'index de staging et les graphes orientés acycliques (DAG).",
      "Outil CLI Java2Diagram : parsing syntaxique de l'AST avec JavaParser pour générer des diagrammes UML PlantUML.",
      "Interface desktop native sous Tauri, React et TypeScript communicant de façon asynchrone avec le moteur.",
      "Validation par Quality Gate SonarQube strict avec score A (0 vulnérabilité critique et respect des normes de maintenabilité).",
    ],
    architecture:
      "Le pont Tauri / IPC découple la couche présentation réactive du moteur d'analyse Java. La modularité garantit que l'inspection Git et la génération de diagrammes AST restent des modules isolés et testables unitairement.",
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
    commandSnippet: "bettergit graph --branch=main --ast-inspect",
  },
  {
    id: 2,
    title: "AuthGateway",
    category: "Backend",
    context: "Projet académique PFA · 4e année EHEIM",
    visual: "gateway",
    description:
      "Passerelle d'authentification et de routage centralisée assurant la sécurité périmétrique d'un écosystème de microservices.",
    problem:
      "Fournir une source de vérité unique pour l'authentification et les autorisations sans surcharger les services métiers de logique cryptographique.",
    details: [
      "Validation de jetons JWT asymétriques signés en RS256 avec rotation des clés publiques exposées via endpoint JWKS.",
      "Contrôle d'accès granulaire basé sur les rôles (RBAC) et injection de claims fiables aux services avals.",
      "Gestion de refresh tokens révocables stockés dans un cache Redis en mémoire (cookies HttpOnly stricts).",
      "Orchestration d'une plateforme de 11 conteneurs avec BusWay GIS sous Docker Compose avec sondes de santé.",
    ],
    architecture:
      "La passerelle isole la responsabilité transversale d'authentification. Les microservices applicatifs en aval font confiance aux en-têtes injectés par le réseau interne, éliminant la duplication de code de sécurité.",
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
    commandSnippet: "docker compose up -d auth-gateway redis-cache busway-gis",
  },
  {
    id: 3,
    title: "FixMyCity",
    category: "Backend",
    context: "Projet académique PFA · 4e année EHEIM",
    visual: "city",
    description:
      "API REST pour la gestion et le routage des signalements urbains vers les services municipaux compétents.",
    problem:
      "Organiser le cycle de vie d'un incident urbain (dépôt, catégorisation, affectation et résolution) à travers des contrats HTTP stricts.",
    details: [
      "Développement sous C# et ASP.NET Core suivant une architecture en couches (Controllers, Services, Repositories).",
      "Persistance relationnelle avec Entity Framework Core, migrations automatiques au démarrage et base SQL Server.",
      "Gestion centralisée des erreurs via middleware global et validation rigoureuse des entrées DTO.",
      "Connexion sécurisée au réseau Docker d'AuthGateway.",
    ],
    architecture:
      "Service métier autonome appliquant le principe d'inversion des dépendances. Les contrôleurs ne connaissent que les abstractions de service, facilitant les tests unitaires et le remplacement de la couche persistance.",
    stack: [
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "REST",
      "Docker",
    ],
    url: "https://github.com/fahchouchsm/fixMyCity-ASP-RestAPI-4year",
    commandSnippet: "dotnet run --project FixMyCity.Api",
  },
  {
    id: 4,
    title: "Skillz Hire",
    category: "Web",
    context: "Projet personnel",
    visual: "market",
    description:
      "Plateforme web collaborative avec gestion de compétences, catalogues de profils et messagerie instantanée en temps réel.",
    problem:
      "Offrir une interface fluide et instantanée permettant aux utilisateurs de collaborer et d'échanger des messages sans rechargement de page.",
    details: [
      "Authentification par jetons et gestion des profils utilisateurs.",
      "Canaux de discussion bidirectionnels temps réel propulsés par WebSockets (Socket.IO).",
      "Catalogue dynamique avec filtres multicritères et requêtes optimisées sous MongoDB.",
      "Interface réactive sous Next.js et TypeScript avec composants stylisés.",
    ],
    architecture:
      "Séparation entre le rendu applicatif Next.js et l'API Express Node.js. Les flux de données temps réel sont gérés sur un canal WebSocket persistant distinct des requêtes HTTP déclaratives.",
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
    commandSnippet: "npm run dev",
  },
  {
    id: 5,
    title: "MySQL Compass",
    category: "Desktop",
    context: "Stage · Société Régionale Multiservices de l'Oriental · 2024",
    visual: "database",
    description:
      "Client desktop d'exploration multi-bases et générateur volumique de jeux d'essais relationnels pour les équipes de développement.",
    problem:
      "Permettre l'exploration de bases de données locales et la génération sécurisée de millions de lignes synthétiques respectant l'intégrité référentielle.",
    details: [
      "Interface d'exploration de schémas, tables, index et colonnes pour MySQL, PostgreSQL et SQLite.",
      "Générateur volumique automatisé respectant les contraintes de clés primaires et clés étrangères.",
      "Éditeur de requêtes SQL intégré avec exécution asynchrone et exports de données en CSV / JSON.",
      "Architecture desktop sous Electron et React avec pont IPC isolé vers le connecteur Node.js natif.",
    ],
    architecture:
      "Isolation stricte du processus de rendu vis-à-vis du moteur d'exécution SQL dans le processus principal Node.js. Cette séparation prévient tout blocage de l'interface lors d'opérations volumiques.",
    stack: [
      "Electron",
      "React",
      "TypeScript",
      "MySQL",
      "PostgreSQL",
      "Node.js",
      "SQL",
    ],
    commandSnippet: "electron . --safe-ipc",
  },
];

export const principles = [
  {
    letter: "S",
    title: "Une responsabilité claire",
    english: "Single Responsibility",
    description:
      "Une classe ou un module ne doit avoir qu'une seule raison de changer. Dans BetterGit et AuthGateway, la validation des requêtes, la logique métier de sécurité et l'accès aux données résident dans des modules strictement indépendants.",
  },
  {
    letter: "O",
    title: "Étendre sans modifier le cœur",
    english: "Open / Closed",
    description:
      "Les composants logiciels doivent être ouverts à l'extension mais fermés à la modification. Dans l'analyseur Java2Diagram, de nouveaux formats d'export de diagrammes s'implémentent via une interface commune sans altérer le parser AST.",
  },
  {
    letter: "L",
    title: "Des contrats fiables et substituables",
    english: "Liskov Substitution",
    description:
      "Les sous-types doivent pouvoir remplacer leurs types de base sans altérer la cohérence du système. Dans FixMyCity et MySQL Compass, chaque connecteur de base de données respecte les mêmes garanties de contrat sans effets de bord inattendus.",
  },
  {
    letter: "I",
    title: "Des interfaces ciblées et modulaires",
    english: "Interface Segregation",
    description:
      "Un module ne doit jamais dépendre de méthodes qu'il n'utilise pas. Au lieu d'imposer de volumineuses interfaces génériques, chaque service microservice n'expose que les contrats HTTP et interfaces nécessaires à son consommateur.",
  },
  {
    letter: "D",
    title: "Dépendre des abstractions",
    english: "Dependency Inversion",
    description:
      "Les modules de haut niveau ne doivent pas dépendre des modules de bas niveau : tous deux doivent dépendre d'abstractions. Dans nos microservices Spring Boot et ASP.NET Core, les contrôleurs et cas d'usage dialoguent avec des interfaces de dépôt (repositories), permettant d'interchanger ou simuler la persistance sans réécrire la logique métier.",
  },
];

export const skillGroups = [
  {
    title: "Backend & microservices",
    description: "Architectures distribuées, APIs résilientes et sécurité.",
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
    description: "Modélisation relationnelle, volumétrie et requêtes spatiales.",
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
    description: "Conteneurisation, automatisation et exploitation système.",
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
    description: "Applications web et clients desktop multiplateformes.",
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
    description: "Méthodologie d'ingénierie et maintenabilité du code.",
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
    description: "Fondamentaux algorithmiques et programmation système.",
    skills: [
      "C / C++",
      "Python (FastAPI)",
      "Algorithmique & structures de données",
      "Shell Scripting Bash",
      "UML & PlantUML",
    ],
  },
];

export const experiences = [
  {
    company: "CHU Oujda · Projet BetterGit",
    date: "7 août au 7 septembre 2026",
    role: "Stagiaire développement logiciel",
    description:
      "Conception d'un moteur Git modulaire en Java (Eclipse JGit, gestion du staging et graphes DAG) et d'un client desktop Tauri / React. Développement de l'extension CLI Java2Diagram analysant l'arbre syntaxique abstrait (AST) pour générer des diagrammes UML. Intégration d'un Quality Gate SonarQube avec score A.",
    tags: ["Java 21", "Eclipse JGit", "JavaParser AST", "React", "Tauri", "SonarQube score A"],
  },
  {
    company: "Société Régionale Multiservices de l'Oriental",
    date: "Juin 2024",
    role: "Stagiaire développement d'un client multi-SGBD",
    description:
      "Conception et implémentation de MySQL Compass : client desktop sous Electron, React et Node.js permettant l'exploration multi-bases (MySQL, PostgreSQL, SQLite) et la génération volumique de jeux d'essais synthétiques respectant l'intégrité référentielle.",
    tags: ["Electron", "React", "TypeScript", "Node.js", "SQL", "Bases relationnelles"],
  },
  {
    company: "Conseil Régional de l'Oriental",
    date: "Juin 2023",
    role: "Stagiaire développement web MVC",
    description:
      "Déploiement d'une application web fullstack sous architecture MVC (Node.js, Express, MySQL) dédiée à la centralisation, au filtrage dynamique et au suivi administratif des dossiers de candidatures de stages.",
    tags: ["Node.js", "Express", "MySQL", "Architecture MVC", "Bootstrap"],
  },
];

export const educations = [
  {
    degree: "Cycle ingénieur d'État en Génie Informatique (5e année)",
    institution: "EHEIM Oujda",
    period: "2024 à 2027",
    description:
      "Admis sur concours directement en 3e année. Actuellement en 5e année. Recherche active d'un stage de fin d'études (PFE) de 4 à 6 mois (Février à Juillet 2027).",
  },
  {
    degree: "BTS Technicien Spécialisé en Développement Informatique",
    institution: "Maghreb Al Arabi",
    period: "2022 à 2024",
    description:
      "Formation approfondie en algorithmique, programmation orientée objet (Java, C++), conception de bases de données relationnelles et développement web.",
  },
  {
    degree: "Baccalauréat Sciences Physiques",
    institution: "Lycée",
    period: "2020 à 2021",
    description:
      "Série scientifique avec mention, base solide en raisonnement mathématique et modélisation physique.",
  },
];
