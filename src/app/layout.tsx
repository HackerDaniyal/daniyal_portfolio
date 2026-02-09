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
    icon: "/assets/log.png",
  },
};

import GSAPProvider from "@/components/GSAPProvider";
import CustomCursor from "@/components/CustomCursor/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <CustomCursor />
        <GSAPProvider>{children}</GSAPProvider>
      </body>
    </html>
  );
}
