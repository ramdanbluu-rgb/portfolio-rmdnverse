export type Project = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  image: string;
  imageAlt: string;
  overview: string[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "fintech-analytics-platform",
    index: "01",
    title: "FinTech Analytics Platform",
    tagline: "Real-time data processing engine with low-latency API and dashboard.",
    year: "2024",
    role: "Lead Backend Engineer",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "React"],
    image: "/projects/fintech-analytics.jpg",
    imageAlt:
      "A sleek, dark-themed dashboard interface displaying complex data visualizations and analytics. The aesthetic is brutalist minimal, with a deep black background, sharp 1px borders, and striking neon blue data points. The UI looks highly technical and professional, resembling advanced financial software.",
    overview: [
      "A real-time analytics engine built to ingest, normalize, and serve high-frequency financial market data. The platform processes thousands of events per second and exposes them through a low-latency query layer consumed by trader-facing dashboards.",
      "The architecture favors predictable p99 latency over raw throughput — every hot path is measured, cached, and benchmarked. Write-behind buffering into PostgreSQL keeps the analytical store consistent without blocking the ingest pipeline.",
    ],
    highlights: [
      "Sub-50ms p99 query latency on live market feeds via Redis-backed materialized views.",
      "Event ingestion pipeline handling 10k+ msg/sec with backpressure and dead-letter recovery.",
      "Role-based access control with full audit trails for compliance requirements.",
      "Dashboard data layer with incremental hydration, keeping first paint under 1s.",
    ],
  },
  {
    slug: "global-logistics-api",
    index: "02",
    title: "Global Logistics API",
    tagline: "Scalable microservices architecture for supply chain tracking.",
    year: "2023",
    role: "Backend Engineer",
    stack: ["Laravel", "PostgreSQL", "Docker", "GitHub Actions", "MongoDB"],
    image: "/projects/global-logistics.jpg",
    imageAlt:
      "A highly structured e-commerce backend management screen. The design is stark and minimal, utilizing a dark mode palette with stark white typography and subtle gray structural lines. It shows inventory tables and order processing logs, emphasizing technical precision and utility over decoration.",
    overview: [
      "A distributed tracking system connecting warehouses, carriers, and customs checkpoints across multiple regions. Each shipment emits a stream of state transitions that must remain ordered, auditable, and queryable across services.",
      "Services are deployed as containerized units behind an API gateway, with event-driven synchronization between the relational core (inventory, orders) and document stores (raw tracking logs).",
    ],
    highlights: [
      "Shipment state machine covering 20+ lifecycle transitions across 5 regional clusters.",
      "Idempotent webhook ingestion for carrier integrations with automatic replay.",
      "Containerized CI/CD via GitHub Actions — zero-downtime rolling deploys.",
      "Inventory reconciliation job that flags discrepancies before end-of-day close.",
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
