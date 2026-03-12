import type { Metadata } from "next";
import "./globals.css";
import WelcomeModal from "@/components/WelcomeModal";

export const metadata: Metadata = {
  title: "Better Man",
  description:
    "Tough-love coaching, real-life tools, and a proven roadmap for men who are tired of being stuck.",
  keywords: [
    "Better Man",
    "men's coaching",
    "mindset",
    "masculinity",
    "financial independence",
    "discipline",
  ],
  openGraph: {
    title: "Better Man",
    description: "Take back control of your mindset, money, and masculinity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-charcoal text-silver antialiased">
        <WelcomeModal />
        {children}
      </body>
    </html>
  );
}
