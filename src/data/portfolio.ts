export interface Project {
  id: number;
  title: string;
  category: "Backend" | "Web" | "Desktop";
  context: string;
  visual: "gateway" | "city" | "database" | "market" | "shop" | "language" | "bettergit";
  description: string;
  problem: string;
  details: string[];
  architecture: string;
  stack: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "BetterGit",
    category: "Desktop",
    context: "Stage · CHU Oujda · 2026",
    visual: "bettergit",
    description:
      "Un outil desktop de gestion Git développé en stage, pour rendre l’historique et les flux de travail plus lisibles.",
    problem:
      "Aider les développeurs à explorer les branches, l’historique et les preuves de commits dans une interface claire.",
    details: [
      "Interface desktop avec graphe interactif des branches et de l’historique.",
      "Visualiseur de preuves de commits, pipelines configurables et documentation assistée par IA.",
      "Contribution au moteur Java : quality gate SonarQube, diagrammes de classes et suivi de durée des tests.",
    ],
    architecture:
      "Le projet relie une interface desktop TypeScript / React au moteur Java. La qualité est intégrée au flux de développement avec des contrôles SonarQube, des tests et une documentation de l’architecture.",
    stack: [
      "Java 21",
      "JGit",
      "Maven",
      "JUnit",
      "JavaFX",
      "TypeScript",
      "React",
      "Tauri",
      "Tailwind CSS",
      "SonarQube",
    ],
    url: "https://github.com/fahchouchsm/betterGit-desktop",
  },
  {
    id: 2,
    title: "AuthGateway",
    category: "Backend",
    context: "Projet de 4e année",
    visual: "gateway",
    description:
      "Une passerelle d’authentification pour centraliser la sécurité d’une architecture microservices.",
    problem:
      "Gérer l’identité et les autorisations à l’entrée d’un système composé de plusieurs services.",
    details: [
      "Validation des jetons JWT signés en RS256.",
      "Contrôle d’accès par rôles (RBAC) et rotation des clés via JWKS.",
      "Injection de claims vers les services et déploiement avec Docker.",
    ],
    architecture:
      "La passerelle porte les préoccupations transversales d’authentification. Les services restent centrés sur leur métier. Ce découpage illustre la séparation des responsabilités ; la frontière de confiance entre passerelle et services doit être explicite.",
    stack: [
      "Java",
      "Spring Boot",
      "JWT / JWKS",
      "Docker",
      "RBAC",
      "Microservices",
    ],
    url: "https://github.com/fahchouchsm/authGetway-PFA-4year",
  },
  {
    id: 3,
    title: "FixMyCity",
    category: "Backend",
    context: "Projet de 4e année",
    visual: "city",
    description:
      "Une API de signalement urbain qui relie les problèmes du quotidien aux autorités concernées.",
    problem:
      "Structurer les signalements urbains et les orienter vers les autorités compétentes à travers une API dédiée.",
    details: [
      "API REST développée avec ASP.NET Core et C#.",
      "Routage des signalements vers les autorités concernées.",
      "Intégration avec AuthGateway et déploiement Dockerisé.",
    ],
    architecture:
      "Un service métier distinct de la passerelle d’authentification. L’API expose les opérations de signalement et s’intègre dans une architecture distribuée par des contrats HTTP explicites.",
    stack: ["C#", "ASP.NET Core", "REST", "Docker", "AuthGateway"],
    url: "https://github.com/fahchouchsm/fixMyCity-ASP-RestAPI-4year",
  },
  {
    id: 4,
    title: "Skillz Hire",
    category: "Web",
    context: "Projet personnel",
    visual: "market",
    description:
      "Une marketplace freelance avec profils, services et échanges en temps réel.",
    problem:
      "Réunir la présentation des compétences, la publication de services et les échanges entre utilisateurs dans une même application.",
    details: [
      "Authentification JWT, profils utilisateurs et inscription vendeur.",
      "Création de services et organisation par catégories.",
      "Communication temps réel avec WebSockets / Socket.IO.",
    ],
    architecture:
      "Une interface Next.js, une API Express et une persistance MongoDB. La communication temps réel complète les échanges HTTP pour les interactions qui nécessitent des mises à jour immédiates.",
    stack: ["Next.js", "TypeScript", "Express", "MongoDB", "JWT", "Socket.IO"],
    url: "https://github.com/fahchouchsm/Skillz_Hire",
  },
  {
    id: 5,
    title: "MySQL Compass",
    category: "Desktop",
    context: "Stage · Société Régionale Multiservices de l’Oriental · 2024",
    visual: "database",
    description:
      "Un client bureau pour explorer les schémas MySQL, écrire du SQL et exporter les résultats.",
    problem:
      "Faciliter l’exploration et l’interrogation de bases MySQL depuis une interface de bureau dédiée.",
    details: [
      "Exploration des schémas de bases de données.",
      "Éditeur de requêtes SQL et pont API Node.js / MySQL embarqué.",
      "Export des données aux formats CSV et JSON.",
    ],
    architecture:
      "Electron héberge l’application ; React et Tailwind composent l’interface. Le pont Node.js / MySQL isole l’accès aux données de la présentation.",
    stack: [
      "Electron",
      "React",
      "TypeScript",
      "MySQL",
      "Node.js",
      "Tailwind CSS",
    ],
  },
];

export const principles = [
  {
    letter: "S",
    title: "Une responsabilité claire",
    english: "Single Responsibility",
    description:
      "Une classe ou un module a une raison de changer. Exemple : séparer la validation d’une requête, la logique métier et l’accès à la base de données.",
  },
  {
    letter: "O",
    title: "Étendre sans tout modifier",
    english: "Open / Closed",
    description:
      "Prévoir des contrats stables pour ajouter un comportement. Exemple : une nouvelle stratégie de notification implémente une interface commune sans modifier le service métier.",
  },
  {
    letter: "L",
    title: "Des contrats fiables",
    english: "Liskov Substitution",
    description:
      "Une implémentation doit pouvoir en remplacer une autre sans casser les attentes du code appelant. Les préconditions, résultats et erreurs restent cohérents avec le contrat.",
  },
  {
    letter: "I",
    title: "Des interfaces ciblées",
    english: "Interface Segregation",
    description:
      "Un client ne dépend que des opérations dont il a besoin. Exemple : distinguer la lecture d’un catalogue de sa gestion plutôt qu’imposer une grande interface à tous les consommateurs.",
  },
  {
    letter: "D",
    title: "Dépendre des abstractions",
    english: "Dependency Inversion",
    description:
      "Le métier dépend de contrats, pas des détails techniques. Exemple : injecter une interface de repository pour pouvoir remplacer la persistance ou la simuler dans un test.",
  },
];

export const skillGroups = [
  {
    title: "Interfaces & applications",
    description: "Des interfaces web aux applications desktop et mobiles.",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "HTML / CSS",
      "Tailwind CSS",
      "Electron",
      "Tauri",
    ],
  },
  {
    title: "Backend & intégration",
    description: "Des API structurées et des échanges maîtrisés.",
    skills: [
      "Java",
      "Spring Boot",
      "C#",
      "ASP.NET Core",
      "Node.js",
      "Express",
      "PHP",
      "Symfony / Twig",
      "REST",
      "JWT",
      "WebSockets",
    ],
  },
  {
    title: "Données & persistance",
    description: "Modélisation, requêtes et accès aux données.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQLite",
      "JPA / Hibernate",
      "Doctrine",
      "Entity Framework Core",
    ],
  },
  {
    title: "Livraison & opérations",
    description: "Versionner, automatiser, déployer et observer.",
    skills: [
      "Git / GitHub",
      "Linux",
      "Docker / Compose",
      "Jenkins",
      "Nginx",
      "SonarQube",
      "Kubernetes (notions)",
      "Ansible (notions)",
      "Grafana / Prometheus (notions)",
    ],
  },
  {
    title: "Conception & qualité",
    description: "Une structure qui accompagne l’évolution du logiciel.",
    skills: [
      "SOLID",
      "POO",
      "UML",
      "Architecture en couches",
      "MVC",
      "Microservices",
      "Séparation des responsabilités",
      "Injection de dépendances",
      "Clean code",
    ],
  },
  {
    title: "Autres explorations",
    description: "Des fondamentaux et des technologies complémentaires.",
    skills: [
      "C / C++",
      "Python",
      "Algorithmique",
      "SQL",
    ],
  },
];

export const experiences = [
  {
    company: "CHU Oujda · BetterGit",
    date: "7 AOÛT — 7 SEPTEMBRE 2026",
    role: "Stage · Développement logiciel",
    description:
      "Développement de l’interface desktop et contribution au moteur Java : graphe Git, quality gate SonarQube, diagrammes de classes et suivi des tests.",
    tags: ["Java", "React", "Tauri", "SonarQube"],
  },
  {
    company: "Société Régionale Multiservices de l’Oriental",
    date: "JUIN 2024",
    role: "Stage · Développement d’un client MySQL",
    description:
      "Développement de MySQL Compass : exploration de schéma, éditeur SQL et export CSV / JSON dans une application Electron avec un pont Node.js / MySQL.",
    tags: ["Electron", "React", "Node.js", "MySQL"],
  },
  {
    company: "Conseil Régional de l’Oriental",
    date: "JUIN 2023",
    role: "Stage · Plateforme de gestion des stages",
    description:
      "Développement d’une plateforme MVC : authentification par middleware, upload de fichiers et conception du schéma MySQL.",
    tags: ["Express", "EJS", "MySQL", "MVC"],
  },
];
