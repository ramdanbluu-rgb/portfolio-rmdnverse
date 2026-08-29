import {
  Users,
  Code2,
  Zap,
  Wifi,
  Bot,
  LayoutDashboard,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const TechMarquee = ({ items }: { items: string[] }) => (
  <div className="relative overflow-hidden border-y border-void py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
    <div className="flex w-max animate-marquee gap-14">
      {[...items, ...items].map((item, i) => (
        <span
          key={i}
          className="font-mono text-sm uppercase tracking-widest text-outline whitespace-nowrap"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

export const EXPERTISE: Array<{
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
  span?: string;
}> = [
  {
    icon: Users,
    title: "Adaptabilitas & Kolaborasi",
    desc: "Mudah berbaur dengan tim baru, cepat memahami alur kerja, dan menciptakan suasana nyaman saat berkolaborasi. Komunikasi aktif dan empati jadi fondasi kerja tim.",
    tags: ["Komunikasi", "Tim Kerja", "Empati", "Fast Learner"],
    span: "md:col-span-2",
  },
  {
    icon: Code2,
    title: "Pengembangan Web Fullstack",
    desc: "Membangun antarmuka pengguna hingga logika server. Terbiasa dengan React/Next.js untuk frontend dan PHP/Node.js untuk backend serta database relasional.",
    tags: ["Next.js", "React", "TypeScript", "PHP", "Node.js", "MySQL"],
  },
  {
    icon: Zap,
    title: "Otomatisasi & Integrasi API",
    desc: "Mengotomatiskan alur kerja manual via bot & integrasi layanan cloud. Contoh: bot Telegram terhubung Google Sheets API untuk pencatatan real-time tanpa database terpisah.",
    tags: ["Telegram Bot API", "Google Sheets API", "Google Cloud", "Webhook"],
  },
  {
    icon: Wifi,
    title: "Dasar Jaringan & Infrastruktur",
    desc: "Pengalaman PKL di ISP: memahami IP addressing, VLAN, routing dasar, monitoring bandwidth, dan troubleshooting koneksi pelanggan. Fondasi untuk fullstack yang sadar infrastruktur.",
    tags: ["IP Networking", "VLAN", "Bandwidth Monitoring", "ISP Operations"],
    span: "md:col-span-2",
  },
];

export const AI_BADGE = Bot;