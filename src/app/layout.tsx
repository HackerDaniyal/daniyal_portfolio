import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Daniyal Alam | Portfolio",
  description: "Web Designer specializing in WordPress & Elementor",
  icons: {
    icon: "/assets/logo.png",
  },
};

import ClientProviders from "@/components/ClientProviders";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://avatars.githubusercontent.com" />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
