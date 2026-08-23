// Generates a minimal but valid one-page PDF at public/resume.pdf.
// Replace this file with the real CV anytime — same path keeps working.
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outPath = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "resume.pdf");

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

const lines = [
  [72, 720, 28, "rmdnverse"],
  [72, 694, 14, "Web & Backend Engineer"],
  [72, 650, 11, "Email: hello@rmdnverse.my.id  |  rmdnverse.my.id"],
  [72, 590, 13, "EXPERIENCE"],
  [72, 566, 10, "- FinTech Analytics Platform — Lead Backend Engineer (2024)"],
  [72, 548, 10, "- Global Logistics API — Backend Engineer (2023)"],
  [72, 500, 13, "STACK"],
  [72, 476, 10, "Node.js / TypeScript / Laravel / PostgreSQL / Redis / Docker"],
  [72, 458, 10, "React / Tailwind CSS / GitHub Actions / MongoDB"],
  [72, 400, 9, "(Placeholder CV - replace public/resume.pdf with the real file.)"],
];

const content = lines
  .map(
    ([x, y, size, text]) =>
      `BT /F1 ${size} Tf ${x} ${y} Td (${esc(text)}) Tj ET`
  )
  .join("\n");

const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>",
  `<< /Length ${Buffer.byteLength(content, "latin1")} >>\nstream\n${content}\nendstream`,
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
];

let pdf = "%PDF-1.4\n";
const offsets = [];
objects.forEach((body, i) => {
  offsets.push(Buffer.byteLength(pdf, "latin1"));
  pdf += `${i + 1} 0 obj\n${body}\nendobj\n`;
});

const xrefStart = Buffer.byteLength(pdf, "latin1");
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (const off of offsets) pdf += `${String(off).padStart(10, "0")} 00000 n \n`;
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

writeFileSync(outPath, pdf, "latin1");
console.log(`Wrote ${outPath} (${Buffer.byteLength(pdf, "latin1")} bytes)`);
