import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IncidentTrack — Real-Time Incident Response Checklist",
  description: "Track incident response checklist completion in real-time. Know who did what and when during outages."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0ac95fa8-a505-4df5-8bf4-d6ca9b09d81b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
