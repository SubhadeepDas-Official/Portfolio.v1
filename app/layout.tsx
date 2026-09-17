import type { Metadata } from "next";
import "./globals.css";
import NoiseOverlay from "@/components/noise-overlay";
import CustomCursor from "@/components/custom-cursor";

export const metadata: Metadata = {
  title: "SUBHADEEP DAS — Web Designer & Digital Creator",
  description:
    "Design with intent. Crafting bold, user-centered digital experiences merging strategy, aesthetics and performance.",
  keywords: [
    "Subhadeep Das",
    "Portfolio",
    "Creative Developer",
    "Brutalist Web Design",
    "Indian Poster Design",
    "Editorial Design",
    "Next.js",
    "GSAP",
  ],
  authors: [{ name: "Subhadeep Das" }],
  creator: "Subhadeep Das",
  metadataBase: new URL("https://subhadeep.design"),
  openGraph: {
    type: "website",
    locale: "en_In",
    url: "https://subhadeep.design",
    title: "SUBHADEEP DAS — Web Designer & Digital Creator",
    description:
      "Design with intent. Crafting bold, user-centered digital experiences merging strategy, aesthetics and performance.",
    siteName: "SUBHADEEP DAS Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "SUBHADEEP DAS — Web Designer & Digital Creator",
    description: "Design with intent. Minimal noise. Maximum impact.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-paper text-ink selection:bg-orange selection:text-white antialiased min-h-screen">
        <NoiseOverlay />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
