import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chorus - Your Always-On AI Dev Team",
  description: "Chorus is a cross-platform ambient agent orchestration platform. Deploy a persistent multi-agent coding team that works while you sleep — across VS Code, mobile, and the web.",
  openGraph: {
    title: "Chorus - Your Always-On AI Dev Team",
    description: "Deploy a persistent multi-agent coding team that works while you sleep.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
