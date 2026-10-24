import type { Project } from "../data/portfolio.ts";
import {
  Server,
  ShieldCheck,
  Database,
  GitBranch,
  Layers,
  ArrowRight,
  ArrowDown,
  Cpu,
  CheckCircle2,
  Lock,
  Boxes,
  Zap,
} from "lucide-react";

interface ProjectDiagramProps {
  project: Project;
  lang: "fr" | "en";
}

export function ProjectDiagram({ project, lang }: ProjectDiagramProps) {
  if (project.visual === "bettergit") {
    return (
      <div
        className="project-diagram"
        role="img"
        aria-label={
          lang === "fr"
            ? "Diagramme d'architecture logicielle de BetterGit"
            : "Software architecture diagram of BetterGit"
        }
      >
        <div className="diagram-track">
          {/* Node 1: Desktop Shell */}
          <div className="diagram-stage">
            <div className="diagram-stage-badge">
              <Cpu size={13} />
              <span>{lang === "fr" ? "Couche Présentation" : "Presentation Layer"}</span>
            </div>
            <div className="diagram-box">
              <strong className="diagram-box-title">Tauri Desktop GUI</strong>
              <span className="diagram-box-sub">React 18 · TypeScript</span>
              <span className="diagram-box-note">
                {lang === "fr" ? "Interface réactive & inspection fluide" : "Reactive UI & fluid inspection"}
              </span>
            </div>
          </div>

          {/* Connector 1 */}
          <div className="diagram-flow-arrow">
            <span className="flow-label">
              {lang === "fr" ? "Pont IPC Rust asynchrone" : "Async Rust IPC Bridge"}
            </span>
            <ArrowRight className="flow-icon flow-horizontal" size={16} />
            <ArrowDown className="flow-icon flow-vertical" size={16} />
          </div>

          {/* Node 2: Java Engine */}
          <div className="diagram-stage diagram-stage-wide">
            <div className="diagram-stage-badge">
              <GitBranch size={13} />
              <span>{lang === "fr" ? "Moteur Découplé Java 21" : "Decoupled Java 21 Engine"}</span>
            </div>
            <div className="diagram-subcards-grid">
              <div className="diagram-subcard">
                <strong>Eclipse JGit</strong>
                <span>
                  {lang === "fr"
                    ? "Graphe DAG, RevWalk & index staging"
                    : "DAG commit graph, RevWalk & staging index"}
                </span>
              </div>
              <div className="diagram-subcard">
                <strong>JavaParser AST</strong>
                <span>
                  {lang === "fr"
                    ? "Extraction syntaxique des classes et méthodes"
                    : "AST syntax extraction of classes & methods"}
                </span>
              </div>
              <div className="diagram-subcard">
                <strong>PlantUML Engine</strong>
                <span>
                  {lang === "fr"
                    ? "Génération vectorielle de diagrammes de classes"
                    : "Automated vector UML class diagram export"}
                </span>
              </div>
            </div>
          </div>

          {/* Connector 2 */}
          <div className="diagram-flow-arrow">
            <span className="flow-label">
              {lang === "fr" ? "Pipeline CI / CD" : "CI / CD Pipeline"}
            </span>
            <ArrowRight className="flow-icon flow-horizontal" size={16} />
            <ArrowDown className="flow-icon flow-vertical" size={16} />
          </div>

          {/* Node 3: Quality Gate */}
          <div className="diagram-stage">
            <div className="diagram-stage-badge diagram-badge-success">
              <CheckCircle2 size={13} />
              <span>SonarQube Grade A</span>
            </div>
            <div className="diagram-box diagram-box-accent">
              <strong className="diagram-box-title">
                {lang === "fr" ? "Garantie Qualité" : "Quality Guarantee"}
              </strong>
              <span className="diagram-box-sub">0 vulnérabilité</span>
              <span className="diagram-box-note">
                {lang === "fr"
                  ? "Normes strictes de maintenabilité & tests JUnit"
                  : "Strict maintainability standards & JUnit tests"}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.visual === "gateway") {
    return (
      <div
        className="project-diagram"
        role="img"
        aria-label={
          lang === "fr"
            ? "Diagramme d'architecture de sécurité d'AuthGateway"
            : "Security architecture diagram of AuthGateway"
        }
      >
        <div className="diagram-track">
          {/* Step 1: External Request */}
          <div className="diagram-stage">
            <div className="diagram-stage-badge">
              <Lock size={13} />
              <span>{lang === "fr" ? "Périmètre Externe" : "External Perimeter"}</span>
            </div>
            <div className="diagram-box">
              <strong className="diagram-box-title">Client Web / Mobile</strong>
              <span className="diagram-box-sub">HTTPS / TLS 1.3</span>
              <span className="diagram-box-note">
                {lang === "fr" ? "Appels API REST non authentifiés" : "Inbound unauthenticated REST calls"}
              </span>
            </div>
          </div>

          {/* Connector 1 */}
          <div className="diagram-flow-arrow">
            <span className="flow-label">
              {lang === "fr" ? "Filtrage passerelle" : "Gateway filtering"}
            </span>
            <ArrowRight className="flow-icon flow-horizontal" size={16} />
            <ArrowDown className="flow-icon flow-vertical" size={16} />
          </div>

          {/* Step 2: Gateway Core */}
          <div className="diagram-stage diagram-stage-wide">
            <div className="diagram-stage-badge">
              <ShieldCheck size={13} />
              <span>Spring Cloud Gateway &amp; Security</span>
            </div>
            <div className="diagram-subcards-grid">
              <div className="diagram-subcard">
                <strong>Tokens RS256</strong>
                <span>
                  {lang === "fr"
                    ? "Vérification cryptographique asymétrique"
                    : "Asymmetric cryptographic verification"}
                </span>
              </div>
              <div className="diagram-subcard">
                <strong>Endpoint JWKS</strong>
                <span>
                  {lang === "fr"
                    ? "/.well-known/jwks.json · Rotation de clés"
                    : "/.well-known/jwks.json · Key rotation"}
                </span>
              </div>
              <div className="diagram-subcard">
                <strong>Cache Redis</strong>
                <span>
                  {lang === "fr"
                    ? "Révocation immédiate & cookies HttpOnly"
                    : "Instant token revocation & HttpOnly cookies"}
                </span>
              </div>
            </div>
          </div>

          {/* Connector 2 */}
          <div className="diagram-flow-arrow">
            <span className="flow-label">
              {lang === "fr" ? "En-têtes signés X-User-Role" : "Signed X-User-Role headers"}
            </span>
            <ArrowRight className="flow-icon flow-horizontal" size={16} />
            <ArrowDown className="flow-icon flow-vertical" size={16} />
          </div>

          {/* Step 3: Downstream Services */}
          <div className="diagram-stage">
            <div className="diagram-stage-badge">
              <Server size={13} />
              <span>{lang === "fr" ? "Microservices Métiers" : "Domain Services"}</span>
            </div>
            <div className="diagram-box diagram-box-accent">
              <strong className="diagram-box-title">Docker Mesh (11 conteneurs)</strong>
              <span className="diagram-box-sub">BusWay GIS &amp; FixMyCity</span>
              <span className="diagram-box-note">
                {lang === "fr"
                  ? "Réseau interne isolé avec confiance déléguée"
                  : "Isolated internal mesh with delegated trust"}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.visual === "city") {
    return (
      <div
        className="project-diagram"
        role="img"
        aria-label={
          lang === "fr"
            ? "Diagramme Clean Architecture de FixMyCity"
            : "Clean Architecture diagram of FixMyCity"
        }
      >
        <div className="diagram-track">
          {/* Step 1: Presentation */}
          <div className="diagram-stage">
            <div className="diagram-stage-badge">
              <Zap size={13} />
              <span>{lang === "fr" ? "Contrôleurs REST" : "REST Controllers"}</span>
            </div>
            <div className="diagram-box">
              <strong className="diagram-box-title">ASP.NET Core 10</strong>
              <span className="diagram-box-sub">POST /api/v1/incidents/route</span>
              <span className="diagram-box-note">
                {lang === "fr"
                  ? "Middleware RFC 7807 & validation DTO"
                  : "RFC 7807 middleware & DTO validation"}
              </span>
            </div>
          </div>

          {/* Connector 1 */}
          <div className="diagram-flow-arrow">
            <span className="flow-label">
              {lang === "fr" ? "Inversion des dépendances" : "Dependency Inversion"}
            </span>
            <ArrowRight className="flow-icon flow-horizontal" size={16} />
            <ArrowDown className="flow-icon flow-vertical" size={16} />
          </div>

          {/* Step 2: Core Domain */}
          <div className="diagram-stage diagram-stage-wide">
            <div className="diagram-stage-badge">
              <Layers size={13} />
              <span>{lang === "fr" ? "Application & Domaine Métier" : "Application & Domain Core"}</span>
            </div>
            <div className="diagram-subcards-grid">
              <div className="diagram-subcard">
                <strong>{lang === "fr" ? "Services Applicatifs" : "Application Services"}</strong>
                <span>
                  {lang === "fr"
                    ? "Règles d'affectation aux services municipaux"
                    : "Routing logic to municipal departments"}
                </span>
              </div>
              <div className="diagram-subcard">
                <strong>{lang === "fr" ? "Agrégat Incident" : "Incident Aggregate"}</strong>
                <span>
                  {lang === "fr"
                    ? "Machine à états : Soumis → Affecté → Résolu"
                    : "State machine: Submitted → Dispatched → Done"}
                </span>
              </div>
              <div className="diagram-subcard">
                <strong>{lang === "fr" ? "Contrats Abstraits" : "Domain Contracts"}</strong>
                <span>
                  {lang === "fr"
                    ? "Interfaces découplées de la base de données"
                    : "Interfaces decoupled from the database"}
                </span>
              </div>
            </div>
          </div>

          {/* Connector 2 */}
          <div className="diagram-flow-arrow">
            <span className="flow-label">Entity Framework Core 10</span>
            <ArrowRight className="flow-icon flow-horizontal" size={16} />
            <ArrowDown className="flow-icon flow-vertical" size={16} />
          </div>

          {/* Step 3: Infrastructure */}
          <div className="diagram-stage">
            <div className="diagram-stage-badge">
              <Database size={13} />
              <span>{lang === "fr" ? "Infrastructure & SGBD" : "Infrastructure & DBMS"}</span>
            </div>
            <div className="diagram-box diagram-box-accent">
              <strong className="diagram-box-title">SQL Server</strong>
              <span className="diagram-box-sub">
                {lang === "fr" ? "Transactions ACID" : "ACID Transactions"}
              </span>
              <span className="diagram-box-note">
                {lang === "fr"
                  ? "Migrations automatiques & intégrité stricte"
                  : "Automatic migrations & strict integrity"}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.visual === "market") {
    return (
      <div
        className="project-diagram"
        role="img"
        aria-label={
          lang === "fr"
            ? "Diagramme réseau et temps réel de Skillz Hire"
            : "Network and real-time diagram of Skillz Hire"
        }
      >
        <div className="diagram-track">
          {/* Step 1: Client Next.js */}
          <div className="diagram-stage">
            <div className="diagram-stage-badge">
              <Cpu size={13} />
              <span>{lang === "fr" ? "Client Moderne" : "Modern Client"}</span>
            </div>
            <div className="diagram-box">
              <strong className="diagram-box-title">Next.js 14 App Router</strong>
              <span className="diagram-box-sub">React 18 · TypeScript</span>
              <span className="diagram-box-note">
                {lang === "fr" ? "Rendu réactif & gestion d'état locale" : "Reactive UI & local state management"}
              </span>
            </div>
          </div>

          {/* Connector 1 */}
          <div className="diagram-flow-arrow">
            <span className="flow-label">
              {lang === "fr" ? "Double canal réseau" : "Dual network channels"}
            </span>
            <ArrowRight className="flow-icon flow-horizontal" size={16} />
            <ArrowDown className="flow-icon flow-vertical" size={16} />
          </div>

          {/* Step 2: Split Channels */}
          <div className="diagram-stage diagram-stage-wide">
            <div className="diagram-stage-badge">
              <Zap size={13} />
              <span>{lang === "fr" ? "Canaux Synchrones & Événements" : "Synchronous & Event Channels"}</span>
            </div>
            <div className="diagram-subcards-grid">
              <div className="diagram-subcard">
                <strong>HTTP REST (Express)</strong>
                <span>
                  {lang === "fr"
                    ? "Gestion des profils et catalogues de compétences"
                    : "Profiles directory & skills multicriteria catalog"}
                </span>
              </div>
              <div className="diagram-subcard">
                <strong>WebSockets (wss://)</strong>
                <span>
                  {lang === "fr"
                    ? "Canal Socket.IO bidirectionnel persistant"
                    : "Persistent bidirectional Socket.IO connection"}
                </span>
              </div>
              <div className="diagram-subcard">
                <strong>{lang === "fr" ? "Salons Isolés (Rooms)" : "Scoped Chat Rooms"}</strong>
                <span>
                  {lang === "fr"
                    ? "Latence < 50ms & préservation de présence"
                    : "Sub-50ms latency & live user presence"}
                </span>
              </div>
            </div>
          </div>

          {/* Connector 2 */}
          <div className="diagram-flow-arrow">
            <span className="flow-label">Index NoSQL</span>
            <ArrowRight className="flow-icon flow-horizontal" size={16} />
            <ArrowDown className="flow-icon flow-vertical" size={16} />
          </div>

          {/* Step 3: MongoDB */}
          <div className="diagram-stage">
            <div className="diagram-stage-badge">
              <Database size={13} />
              <span>{lang === "fr" ? "Base de Données" : "Database"}</span>
            </div>
            <div className="diagram-box diagram-box-accent">
              <strong className="diagram-box-title">MongoDB Atlas</strong>
              <span className="diagram-box-sub">
                {lang === "fr" ? "Index Composés" : "Compound Indexes"}
              </span>
              <span className="diagram-box-note">
                {lang === "fr"
                  ? "Recherche instantanée et persistence des conversations"
                  : "Instant skill lookup & chat log persistence"}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.visual === "database") {
    return (
      <div
        className="project-diagram"
        role="img"
        aria-label={
          lang === "fr"
            ? "Diagramme de l'architecture MySQL Compass"
            : "Architecture diagram of MySQL Compass"
        }
      >
        <div className="diagram-track">
          {/* Step 1: Electron UI */}
          <div className="diagram-stage">
            <div className="diagram-stage-badge">
              <Boxes size={13} />
              <span>{lang === "fr" ? "Client Desktop Natif" : "Native Desktop Client"}</span>
            </div>
            <div className="diagram-box">
              <strong className="diagram-box-title">Electron Shell (React)</strong>
              <span className="diagram-box-sub">TypeScript · IPC</span>
              <span className="diagram-box-note">
                {lang === "fr"
                  ? "Grille virtualisée 100k+ lignes & éditeur SQL"
                  : "Virtualized grid (100k+ rows) & SQL console"}
              </span>
            </div>
          </div>

          {/* Connector 1 */}
          <div className="diagram-flow-arrow">
            <span className="flow-label">
              {lang === "fr" ? "Pont IPC asynchrone sécurisé" : "Context-isolated IPC bridge"}
            </span>
            <ArrowRight className="flow-icon flow-horizontal" size={16} />
            <ArrowDown className="flow-icon flow-vertical" size={16} />
          </div>

          {/* Step 2: Main Process Engine */}
          <div className="diagram-stage diagram-stage-wide">
            <div className="diagram-stage-badge">
              <Cpu size={13} />
              <span>{lang === "fr" ? "Moteur Node.js Principal" : "Node.js Core Engine"}</span>
            </div>
            <div className="diagram-subcards-grid">
              <div className="diagram-subcard">
                <strong>{lang === "fr" ? "Pilote Multi-SGBD" : "Unified DBMS Driver"}</strong>
                <span>
                  {lang === "fr"
                    ? "Adaptateurs unifiés : MySQL 8.0, Postgres & SQLite"
                    : "Unified drivers: MySQL 8.0, Postgres & SQLite"}
                </span>
              </div>
              <div className="diagram-subcard">
                <strong>{lang === "fr" ? "Algorithme de Kahn" : "Kahn's Algorithm"}</strong>
                <span>
                  {lang === "fr"
                    ? "Tri topologique résolvant le graphe des clés étrangères"
                    : "Topological sort resolving FK dependency graph"}
                </span>
              </div>
              <div className="diagram-subcard">
                <strong>{lang === "fr" ? "Streaming par Lots" : "Chunked Batch Stream"}</strong>
                <span>
                  {lang === "fr"
                    ? "Worker thread séparé préservant l'UI à 60 FPS"
                    : "Background worker thread keeping UI at 60 FPS"}
                </span>
              </div>
            </div>
          </div>

          {/* Connector 2 */}
          <div className="diagram-flow-arrow">
            <span className="flow-label">0 violation FK</span>
            <ArrowRight className="flow-icon flow-horizontal" size={16} />
            <ArrowDown className="flow-icon flow-vertical" size={16} />
          </div>

          {/* Step 3: Target Database */}
          <div className="diagram-stage">
            <div className="diagram-stage-badge diagram-badge-success">
              <CheckCircle2 size={13} />
              <span>50 000+ tuples / sec</span>
            </div>
            <div className="diagram-box diagram-box-accent">
              <strong className="diagram-box-title">
                {lang === "fr" ? "Génération Volumique" : "Synthetic Volume"}
              </strong>
              <span className="diagram-box-sub">
                {lang === "fr" ? "Intégrité Référentielle" : "Referential Integrity"}
              </span>
              <span className="diagram-box-note">
                {lang === "fr"
                  ? "Insertion en masse respectant les contraintes PK / FK"
                  : "Bulk insertion honoring PK / FK constraints"}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
