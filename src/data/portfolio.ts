export interface ProjectMetric {
  value: string;
  label: string;
  labelEn: string;
  caption: string;
  captionEn: string;
}

export interface ProjectTradeoff {
  title: string;
  titleEn: string;
  content: string;
  contentEn: string;
}

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
  metrics?: ProjectMetric[];
  tradeoffs?: ProjectTradeoff[];
  securityAndIntegrity?: string[];
  securityAndIntegrityEn?: string[];
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
  location?: string;
  locationEn?: string;
  date: string;
  dateEn: string;
  role: string;
  roleEn: string;
  description: string;
  descriptionEn: string;
  deliverables?: string[];
  deliverablesEn?: string[];
  impact?: string;
  impactEn?: string;
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
    metrics: [
      {
        value: "Grade A",
        label: "Qualité SonarQube",
        labelEn: "SonarQube Quality",
        caption: "0 vulnérabilité critique, règles de maintenabilité exemplaires",
        captionEn: "0 critical vulnerabilities, high clean-code standards",
      },
      {
        value: "< 200 ms",
        label: "Traversée de DAG",
        labelEn: "DAG Traversal",
        caption: "RevWalk Eclipse JGit optimisé jusqu'à 10k commits",
        captionEn: "Optimized Eclipse JGit RevWalk up to 10k commits",
      },
      {
        value: "100% AST",
        label: "Extraction de classes",
        labelEn: "AST Extraction",
        caption: "Génération automatique PlantUML depuis le code source Java",
        captionEn: "Automated PlantUML generation from Java source trees",
      },
    ],
    tradeoffs: [
      {
        title: "Pourquoi Tauri plutôt qu'un Electron classique ?",
        titleEn: "Why Tauri over standard Electron?",
        content:
          "Empreinte mémoire divisée par 4 et pont IPC Rust asynchrone sécurisé, sans embarquer un Chromium complet pour un outil d'inspection développeur.",
        contentEn:
          "4x lighter memory footprint and safe asynchronous Rust IPC bridge, avoiding embedding full Chromium overhead for a developer inspection utility.",
      },
      {
        title: "Découplage de la couche moteur Java",
        titleEn: "Java Core Engine Decoupling",
        content:
          "Le moteur JGit et le parseur AST s'exécutent dans un processus Java dédié, protégeant la fluidité de l'UI (60 FPS) même lors de calculs de diffs intensifs.",
        contentEn:
          "The JGit engine and AST parser run in a dedicated Java process, preserving 60 FPS UI fluidity during intensive diff computations.",
      },
    ],
    securityAndIntegrity: [
      "Audit systématique des dépendances Maven et Quality Gate bloquant en CI.",
      "Accès aux dépôts en mode 'read-only' par défaut pour garantir l'intégrité de l'index Git local.",
      "Isolation IPC limitant les accès système aux seuls dossiers explicitement ouverts par l'utilisateur.",
    ],
    securityAndIntegrityEn: [
      "Systematic Maven dependency auditing and strict blocking SonarQube CI Quality Gate.",
      "Read-only Git operations by default to safeguard index state and local commit tree integrity.",
      "Restricted IPC sandbox bounding system filesystem calls strictly to user-selected repositories.",
    ],
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
    metrics: [
      {
        value: "< 15 ms",
        label: "Latence périmètre",
        labelEn: "Perimeter Latency",
        caption: "Validation cryptographique en mémoire sans requête BD bloquante",
        captionEn: "In-memory cryptographic validation without blocking DB calls",
      },
      {
        value: "RS256",
        label: "Chiffrement asymétrique",
        labelEn: "Asymmetric Crypto",
        caption: "Paire de clés RSA 2048-bit avec endpoint JWKS pour rotation sans redémarrage",
        captionEn: "RSA 2048-bit keypair with JWKS endpoint for zero-downtime rotation",
      },
      {
        value: "11 conteneurs",
        label: "Écosystème Docker",
        labelEn: "Docker Ecosystem",
        caption: "Orchestration complète avec bus d'événements et microservices métiers",
        captionEn: "Complete orchestration with message bus and domain microservices",
      },
    ],
    tradeoffs: [
      {
        title: "RS256 vs HS256 symétrique",
        titleEn: "RS256 vs Symmetric HS256",
        content:
          "RS256 permet aux microservices en aval de vérifier l'authenticité des jetons avec la clé publique uniquement, sans jamais partager le secret de signature.",
        contentEn:
          "RS256 enables downstream microservices to verify token signatures using only the public key, eliminating the risk of shared secret exposure.",
      },
      {
        title: "Révocation de session par cache Redis",
        titleEn: "Redis In-Memory Session Revocation",
        content:
          "Les refresh tokens et la liste de révocation résident dans un cache Redis avec expiration TTL, assurant une invalidation immédiate en cas d'incident.",
        contentEn:
          "Refresh tokens and the revocation blacklist reside in an in-memory Redis cache with TTL, ensuring instant invalidation upon incident detection.",
      },
    ],
    securityAndIntegrity: [
      "Stockage des jetons sensibles dans des cookies HttpOnly, Secure et SameSite=Strict.",
      "Injection d'en-têtes signés X-User-Id et X-User-Role strictement réservée au réseau interne.",
      "Rate limiting et filtrage des requêtes au niveau de la passerelle pour bloquer les attaques par force brute.",
    ],
    securityAndIntegrityEn: [
      "Sensitive session tokens isolated in HttpOnly, Secure, and SameSite=Strict cookies.",
      "Internal claim injection (X-User-Id, X-User-Role) strictly bounded to the gateway perimeter.",
      "Perimeter rate-limiting and brute-force mitigation before reaching internal services.",
    ],
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
    metrics: [
      {
        value: "4 Couches",
        label: "Clean Architecture",
        labelEn: "Clean Architecture",
        caption: "Controllers → Application → Domaine → Infrastructure découplés",
        captionEn: "Decoupled Controllers → Application → Domain → Infrastructure",
      },
      {
        value: "< 50 ms",
        label: "Temps de routage",
        labelEn: "Routing Latency",
        caption: "Routage dynamique et indexation des signalements urbains",
        captionEn: "Dynamic incident routing and municipal category indexing",
      },
      {
        value: "100% ACID",
        label: "Garantie relationnelle",
        labelEn: "Relational Guarantee",
        caption: "Transactions SQL Server avec migrations automatiques au démarrage",
        captionEn: "SQL Server transactions with automatic startup migrations",
      },
    ],
    tradeoffs: [
      {
        title: "Inversion des dépendances (IoC)",
        titleEn: "Dependency Inversion (IoC)",
        content:
          "Les contrôleurs dépendent d'abstractions de services plutôt que d'implémentations concrètes, rendant la logique métier testable et indépendante de SQL Server.",
        contentEn:
          "Controllers depend on service abstractions rather than concrete classes, isolating business logic from database and infrastructure concerns.",
      },
      {
        title: "Validation stricte par DTOs",
        titleEn: "Strict DTO Contracts & Validation",
        content:
          "Chaque charge utile HTTP passe par des validateurs stricts avant d'atteindre le domaine, empêchant toute corruption de l'état de l'incident.",
        contentEn:
          "Every HTTP payload passes through strict validators before entering domain logic, preventing any corrupt municipal state transitions.",
      },
    ],
    securityAndIntegrity: [
      "Middleware global d'erreurs assurant des réponses RFC 7807 sans fuite d'informations système.",
      "Transactions atomiques sur les transitions de statut pour prévenir les mises à jour partielles.",
      "Requêtes 100% paramétrées via Entity Framework Core éliminant les injections SQL.",
    ],
    securityAndIntegrityEn: [
      "Global error middleware ensuring RFC 7807 responses without leaking internal stack traces.",
      "Atomic database transactions across incident status transitions to prevent partial updates.",
      "100% parameterized queries via EF Core eliminating SQL injection vectors.",
    ],
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
    metrics: [
      {
        value: "< 50 ms",
        label: "Latence messagerie",
        labelEn: "Chat Latency",
        caption: "Événements temps réel bidirectionnels propulsés par Socket.IO",
        captionEn: "Real-time bidirectional events powered by Socket.IO",
      },
      {
        value: "Full-Duplex",
        label: "Canal WebSocket",
        labelEn: "WebSocket Channel",
        caption: "Connexion persistante wss:// avec heartbeat et reconnexion automatique",
        captionEn: "Persistent wss:// connection with heartbeat and auto-reconnection",
      },
      {
        value: "Index NoSQL",
        label: "Catalogue MongoDB",
        labelEn: "MongoDB Catalog",
        caption: "Index composés pour recherche multicritères de talents instantanée",
        captionEn: "Compound indexes for instantaneous talent multicriteria search",
      },
    ],
    tradeoffs: [
      {
        title: "Séparation REST vs WebSockets",
        titleEn: "REST vs WebSockets Decoupling",
        content:
          "Les profils et catalogues transitent par des requêtes REST avec mise en cache, tandis que la messagerie dispose d'un canal socket dédié.",
        contentEn:
          "User directories flow through REST with HTTP caching, while messaging utilizes a dedicated low-latency WebSocket connection.",
      },
      {
        title: "Partitionnement par Rooms",
        titleEn: "Room-based Event Scoping",
        content:
          "Les messages sont partitionnés par identifiant de salon, évitant toute surcharge réseau vers les utilisateurs non concernés.",
        contentEn:
          "Events are scoped strictly to room identifiers, preventing broadcast overhead across non-participating clients.",
      },
    ],
    securityAndIntegrity: [
      "Vérification des jetons lors du handshake WebSocket avant d'autoriser la connexion.",
      "Filtrage et assainissement systématique des messages pour neutraliser les failles XSS.",
      "Limitation de fréquence d'envoi par socket pour se prémunir des attaques par inondation.",
    ],
    securityAndIntegrityEn: [
      "WebSocket handshake authentication verifying bearer tokens before establishing socket sessions.",
      "Payload sanitization on all incoming chat messages to eliminate cross-site scripting (XSS).",
      "Per-socket rate limiting protecting real-time rooms against messaging spam.",
    ],
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
    metrics: [
      {
        value: "50 000+",
        label: "Génération volumique",
        labelEn: "Synthetic Volume",
        caption: "Tuples synthétiques insérés par seconde par batch en mémoire",
        captionEn: "Synthetic tuples inserted per second via chunked batch streaming",
      },
      {
        value: "0 violation",
        label: "Intégrité relationnelle",
        labelEn: "Referential Integrity",
        caption: "Tri topologique résolvant le graphe des dépendances de clés étrangères",
        captionEn: "Topological sort resolving foreign key dependency DAG",
      },
      {
        value: "3 Moteurs",
        label: "Compatibilité SGBD",
        labelEn: "DBMS Compatibility",
        caption: "Pilote unifié pour MySQL 8.0, PostgreSQL 16 et SQLite",
        captionEn: "Unified driver abstraction for MySQL 8.0, PostgreSQL 16, and SQLite",
      },
    ],
    tradeoffs: [
      {
        title: "Tri topologique des dépendances FK",
        titleEn: "Topological Dependency Sorting",
        content:
          "L'algorithme de Kahn calcule l'ordre optimal d'insertion des tables parentes avant les tables enfants, éliminant les échecs de contraintes d'intégrité.",
        contentEn:
          "Kahn's topological sort algorithm resolves optimal table insertion order (parents before children), avoiding FK constraint rejections.",
      },
      {
        title: "Streaming asynchrone Node.js",
        titleEn: "Asynchronous Node.js Streaming",
        content:
          "L'écriture des données s'exécute par lots dans un thread worker séparé via des streams Node.js, préservant la fluidité de l'UI à 60 FPS.",
        contentEn:
          "Data generation runs in chunked streams within background Node.js worker threads, keeping the desktop UI responsive at 60 FPS.",
      },
    ],
    securityAndIntegrity: [
      "Exécution SQL sécurisée avec demande de confirmation explicite pour les requêtes destructives (DROP, TRUNCATE).",
      "Validation préalable des types et contraintes relationnelles avant l'insertion par lots.",
      "Isolation mémoire stricte via pont IPC entre le moteur de rendu et les pilotes de base de données natifs.",
    ],
    securityAndIntegrityEn: [
      "Sandboxed SQL execution with explicit confirmations for destructive DDL commands (DROP, TRUNCATE).",
      "Pre-validation of relational schema constraints and data types prior to bulk insertion.",
      "Strict memory isolation across the IPC bridge between renderer and native database drivers.",
    ],
  },
  {
    id: 6,
    title: "BusWay GIS & Spatial Engine",
    category: "Backend",
    context: "Projet académique PFA · Smart City · 4e année",
    contextEn: "Academic PFA Project · Smart City · 4th Year",
    visual: "city",
    description:
      "Microservice géospatial Java / Spring Boot exploitant PostgreSQL + PostGIS et Hibernate Spatial pour l'indexation spatiale et le calcul d'itinéraires urbains.",
    descriptionEn:
      "Geospatial Java / Spring Boot microservice using PostgreSQL + PostGIS and Hibernate Spatial for spatial indexing and urban transit routing.",
    problem:
      "Calculer des arrêts de proximité et des itinéraires urbains temps réel sur des données géographiques volumineuses sans saturer les bases relationnelles.",
    problemEn:
      "Compute nearby transit stops and real-time urban routes across large geospatial datasets without overloading relational databases.",
    details: [
      "Stockage et requêtage géométrique avancé via PostGIS (index GIST) et Hibernate Spatial.",
      "Sécurisation des endpoints par AuthGateway (JWT RS256) et mise en cache des sessions dans Redis.",
      "Orchestration multi-bases (PostgreSQL/PostGIS, MySQL, SQL Server, Redis) sous Docker Compose.",
      "Documentation OpenAPI / Swagger et tests d'intégration isolés par conteneur.",
    ],
    detailsEn: [
      "Advanced geometric storage and queries via PostGIS (GIST indexes) and Hibernate Spatial.",
      "Endpoints secured by AuthGateway (RS256 JWT) with Redis-backed session caching.",
      "Multi-database Docker Compose orchestration (PostgreSQL/PostGIS, MySQL, SQL Server, Redis).",
      "OpenAPI / Swagger documentation and container-isolated integration tests.",
    ],
    architecture:
      "Service géospatial découplé communiquant avec la passerelle AuthGateway sur un réseau Docker interne dédié.",
    architectureEn:
      "Decoupled geospatial microservice communicating with AuthGateway over an isolated internal Docker network.",
    stack: [
      "Java 21",
      "Spring Boot 3",
      "PostgreSQL",
      "PostGIS",
      "Hibernate Spatial",
      "Redis",
      "Docker Compose",
    ],
    url: "https://github.com/fahchouchsm/authGetway-PFA-4year",
    metrics: [
      {
        value: "PostGIS GIST",
        label: "Indexation spatiale",
        labelEn: "Spatial Indexing",
        caption: "Requêtes géographiques de proximité et trajets optimisés par index spatial",
        captionEn: "Proximity and route queries accelerated by PostGIS GIST spatial indexes",
      },
      {
        value: "< 20 ms",
        label: "Cache Redis",
        labelEn: "Redis Cache",
        caption: "Accès rapide aux sessions et métadonnées de lignes urbaines",
        captionEn: "Low-latency access for urban line metadata and auth sessions",
      },
      {
        value: "4 SGBD",
        label: "Stack multi-bases",
        labelEn: "Multi-DB Stack",
        caption: "PostgreSQL/PostGIS, MySQL, SQL Server et Redis orchestrés",
        captionEn: "Orchestrated PostgreSQL/PostGIS, MySQL, SQL Server, and Redis",
      },
    ],
  },
  {
    id: 7,
    title: "Data & ML Analytics Pipeline",
    category: "Web",
    context: "Projets Data Science & IA · Cycle Ingénieur",
    contextEn: "Data Science & AI Projects · Engineering Degree",
    visual: "database",
    description:
      "Pipelines de nettoyage, feature engineering et entraînement de modèles prédictifs (régression, KNN, clustering K-Means/DBSCAN) exposés via API REST Docker.",
    descriptionEn:
      "End-to-end data cleaning, feature engineering, and predictive ML pipelines (regression, KNN, K-Means/DBSCAN clustering) served via containerized REST APIs.",
    problem:
      "Transformer des jeux de données bruts hétérogènes en modèles prédictifs évalués et directement consommables par des applications web.",
    problemEn:
      "Transform raw heterogeneous datasets into evaluated predictive models ready for direct web consumption.",
    details: [
      "Prétraitement, imputation et feature engineering sous Python, Pandas et NumPy.",
      "Entraînement et validation croisée de modèles supervisés (régression, KNN) et non supervisés (K-Means, DBSCAN).",
      "Visualisation exploratoire sous Jupyter / Matplotlib et exposition des prédictions via FastAPI + Docker.",
    ],
    detailsEn: [
      "Data preprocessing, imputation, and feature engineering using Python, Pandas, and NumPy.",
      "Training and cross-validation of supervised (regression, KNN) and unsupervised (K-Means, DBSCAN) models.",
      "Exploratory visualization in Jupyter / Matplotlib and model serving via FastAPI + Docker.",
    ],
    architecture:
      "Séparation nette entre le pipeline d'entraînement reproductible et le conteneur d'inférence FastAPI.",
    architectureEn:
      "Clean separation between reproducible training pipelines and the FastAPI inference container.",
    stack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "FastAPI",
      "Jupyter",
      "Docker",
    ],
    metrics: [
      {
        value: "4 Algos ML",
        label: "Supervisé & Clustering",
        labelEn: "Supervised & Clustering",
        caption: "Régression, classification KNN, K-Means et détection de densité DBSCAN",
        captionEn: "Regression, KNN classification, K-Means, and DBSCAN density clustering",
      },
      {
        value: "REST + Docker",
        label: "Inférence conteneurisée",
        labelEn: "Containerized Serving",
        caption: "Modèles sérialisés et exposés via endpoints FastAPI reproductibles",
        captionEn: "Serialized models exposed through reproducible FastAPI endpoints",
      },
    ],
  },
  {
    id: 8,
    title: "CasaChores",
    category: "Web",
    context: "Projet collaboratif · WebSockets",
    contextEn: "Collaborative Project · WebSockets",
    visual: "market",
    description:
      "Application web collaborative full-stack de mise en relation géolocalisée par ville avec messagerie temps réel Socket.io et vérification OTP WhatsApp (Twilio).",
    descriptionEn:
      "Full-stack collaborative web app with city-based geolocation search, real-time Socket.io chat, and WhatsApp OTP verification via Twilio.",
    problem:
      "Permettre une mise en relation fiable et instantanée entre utilisateurs locaux avec vérification d'identité et messagerie temps réel.",
    problemEn:
      "Enable reliable, real-time local user matching with identity verification and instant messaging.",
    details: [
      "Interface React / TypeScript / Tailwind CSS & shadcn/ui avec recherche géolocalisée et filtres multicritères.",
      "Chat bidirectionnel temps réel propulsé par Socket.io, authentification JWT et persistance MongoDB/Mongoose.",
      "Vérification de compte par code OTP WhatsApp via l'API Twilio.",
    ],
    detailsEn: [
      "React / TypeScript / Tailwind CSS & shadcn/ui interface with geolocated search and multi-criteria filters.",
      "Bidirectional real-time chat powered by Socket.io, JWT authentication, and MongoDB/Mongoose persistence.",
      "Account verification via WhatsApp OTP codes using the Twilio API.",
    ],
    architecture:
      "Architecture client-serveur découplée combinant API REST Express, canaux WebSocket Socket.io et intégration Twilio.",
    architectureEn:
      "Decoupled client-server architecture combining Express REST APIs, Socket.io WebSocket channels, and Twilio integration.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Socket.IO",
      "MongoDB",
    ],
    url: "https://github.com/fahchouchsm/CasaChores",
    metrics: [
      {
        value: "OTP + Socket.IO",
        label: "Temps réel & Sécurité",
        labelEn: "Real-Time & Security",
        caption: "Messagerie instantanée et validation OTP WhatsApp Twilio",
        captionEn: "Instant messaging and Twilio WhatsApp OTP verification",
      },
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
    description: "Cloud, conteneurisation, CI/CD et exploitation système.",
    descriptionEn: "Cloud platforms, containerization, CI/CD, and system administration.",
    skills: [
      "Cloud (AWS, Azure)",
      "Docker & Compose",
      "Kubernetes",
      "GitLab CI/CD",
      "Jenkins",
      "Ansible",
      "Linux (bash quotidien)",
      "Nginx",
      "SonarQube",
      "Terraform / Grafana (notions)",
      "Git / GitHub",
    ],
  },
  {
    title: "Interfaces, Web & Mobile",
    titleEn: "Frontend, Web & Mobile",
    description: "Applications web réactives, mobile et clients desktop multiplateformes.",
    descriptionEn: "Modern web apps, mobile apps, and cross-platform desktop clients.",
    skills: [
      "TypeScript",
      "JavaScript (ES6+)",
      "React (18/19)",
      "Angular",
      "Next.js",
      "React Native / Expo",
      "Tauri & Electron",
      "Tailwind CSS & shadcn/ui",
      "HTML5 / CSS3",
      "WebSockets",
    ],
  },
  {
    title: "Data, IA & Automatisation",
    titleEn: "Data, AI & Automation",
    description: "Pipelines analytiques, Machine Learning et automatisation intelligente.",
    descriptionEn: "Analytical pipelines, Machine Learning, and AI automation.",
    skills: [
      "Python (FastAPI, Pandas, NumPy)",
      "Scikit-learn (Régression, KNN, Clustering)",
      "LLMs, RAG & Agents IA",
      "Data Cleaning & Feature Engineering",
      "Jupyter & Matplotlib",
      "Automatisation & Scraping",
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
      "C / C++ & UML / PlantUML",
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "CHU Mohammed VI d'Oujda · Projet BetterGit",
    location: "Oujda, Maroc · Présentiel",
    locationEn: "Oujda, Morocco · On-site",
    date: "7 août au 7 septembre 2026",
    dateEn: "August 7 to September 7, 2026",
    role: "Stagiaire Ingénieur Développement Logiciel",
    roleEn: "Software Engineering Intern",
    description:
      "Conception et livraison d'une suite modulaire en 3 dépôts (BetterGit Core, Desktop & Java2Diagram) pour auditer les historiques Git et générer des diagrammes UML.",
    descriptionEn:
      "Architected and delivered a 3-repository modular suite (BetterGit Core, Desktop & Java2Diagram) to inspect Git DAG history and generate UML diagrams.",
    deliverables: [
      "Moteur Java 21 / Eclipse JGit optimisé (< 200 ms sur 10 000 commits) manipulant index et graphes DAG.",
      "Client desktop natif Tauri / React / TypeScript communicant par IPC asynchrone à 60 FPS.",
      "CLI Java2Diagram (JavaParser AST) générant automatiquement des diagrammes de classes PlantUML.",
      "Mise en place de tests unitaires JUnit 5 et d'un Quality Gate SonarQube strict (Score A, 0 vulnérabilité).",
    ],
    deliverablesEn: [
      "Optimized Java 21 / Eclipse JGit engine (< 200 ms on 10k commits) manipulating staging & DAG graphs.",
      "Native Tauri / React / TypeScript desktop client communicating via async IPC at 60 FPS.",
      "Java2Diagram CLI (JavaParser AST) automatically generating PlantUML class diagrams from source.",
      "Enforced JUnit 5 unit tests and strict SonarQube Quality Gate (Grade A, 0 critical vulnerabilities).",
    ],
    impact: "Score SonarQube A · 3 dépôts livrés · < 200 ms traversal DAG",
    impactEn: "SonarQube Grade A · 3 repositories delivered · < 200 ms DAG traversal",
    tags: ["Java 21", "Eclipse JGit", "JavaParser AST", "React", "Tauri", "JUnit 5", "SonarQube A"],
  },
  {
    company: "Société Régionale Multiservices de l'Oriental",
    location: "Oujda, Maroc · Présentiel",
    locationEn: "Oujda, Morocco · On-site",
    date: "Juin 2024",
    dateEn: "June 2024",
    role: "Stagiaire Développement Client Multi-SGBD (MySQL Compass)",
    roleEn: "Multi-DBMS Desktop Client Intern (MySQL Compass)",
    description:
      "Développement de MySQL Compass, client desktop d'exploration de schémas et générateur volumique de données synthétiques cohérentes.",
    descriptionEn:
      "Built MySQL Compass, a cross-platform desktop schema explorer and high-volume synthetic test data generator.",
    deliverables: [
      "Explorateur unifié de tables, index et contraintes pour MySQL 8, PostgreSQL 16 et SQLite.",
      "Générateur volumique (50 000+ lignes/s) respectant l'ordre topologique des clés étrangères (algo de Kahn).",
      "Éditeur SQL asynchrone en Node.js worker threads avec export instantané CSV et JSON.",
    ],
    deliverablesEn: [
      "Unified schema, index, and constraint explorer for MySQL 8, PostgreSQL 16, and SQLite.",
      "High-volume generator (50,000+ rows/s) resolving FK dependency order via Kahn's topological sort.",
      "Asynchronous SQL editor in Node.js worker threads with instant CSV and JSON exports.",
    ],
    impact: "50 000+ lignes/s · 0 violation d'intégrité · 3 moteurs SGBD",
    impactEn: "50,000+ rows/s · 0 FK integrity violations · 3 DBMS engines",
    tags: ["Electron", "React", "TypeScript", "Node.js", "MySQL", "PostgreSQL", "SQLite"],
  },
  {
    company: "Conseil Régional de l'Oriental",
    location: "Oujda, Maroc · Présentiel",
    locationEn: "Oujda, Morocco · On-site",
    date: "Juin 2023",
    dateEn: "June 2023",
    role: "Stagiaire Développement Web Full-Stack (MVC)",
    roleEn: "Full-Stack Web Development Intern (MVC)",
    description:
      "Digitalisation complète du processus de gestion et de suivi administratif des dossiers de stages via une plateforme web MVC.",
    descriptionEn:
      "Digitized the end-to-end internship application tracking and administrative review workflow via an MVC web platform.",
    deliverables: [
      "Architecture MVC Node.js / Express / EJS avec authentification sécurisée par sessions et bcrypt.",
      "Base relationnelle MySQL dédiée au filtrage multicritères des candidats, conventions et CV.",
      "Interface responsive Bootstrap déployée en interne pour les responsables administratifs.",
    ],
    deliverablesEn: [
      "Node.js / Express / EJS MVC architecture with session-based authentication and bcrypt hashing.",
      "MySQL relational schema for multi-criteria candidate filtering, agreements, and CV uploads.",
      "Responsive Bootstrap interface deployed internally for regional administrative reviewers.",
    ],
    impact: "Processus 100% digitalisé · Auth sécurisée bcrypt · Déploiement interne",
    impactEn: "100% digitized workflow · bcrypt session auth · Internal deployment",
    tags: ["Node.js", "Express", "EJS", "MySQL", "bcrypt", "Architecture MVC", "Bootstrap"],
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
