import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexis De Jesus | Développeur Fullstack",
  description:
    "Portfolio d'Alexis De Jesus : Étudiant et Développeur Fullstack.",
  icons: {
    icon: "/images/sz-icons/icon.svg",
    apple: "/images/sz-icons/icon.svg",
  },
  // openGraph: {
  //   title: "Alexis De Jesus - Portfolio",
  //   description: "Conception d'applications web modernes et performantes.",
  //   url: "https://aalexis.fr",
  //   siteName: "Alexis De Jesus Portfolio",
  //   images: [
  //     {
  //       url: "/images/sz-icons/icon.png",
  //       width: 630,
  //       height: 630,
  //       alt: "Logo Alexis De Jesus",
  //     },
  //   ],
  //   locale: "fr_FR",
  //   type: "website",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
