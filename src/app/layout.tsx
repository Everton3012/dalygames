import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://dalygames-m3gof9x4h-evertons-projects-8acea483.vercel.app"
  ),
  title: "Daly Games - Descubra jogos incriveis para se divertir",
  description: "uma variedade de jogos separados e organizados",
  keywords: ["games", "jogos", "steam"],
  twitter: {
    card: "summary_large_image",
    title: "Daly Games - Descubra jogos incriveis para se divertir",
    description: "uma variedade de jogos separados e organizados",
    creator: "@Everton",
    images: [
      `https://dalygames-c6owjwmmq-evertons-projects-8acea483.vercel.app`,
    ], // Must be an absolute URL
  },
  openGraph: {
    images: [
      `${process.env.PROJECT_URL}/preview.png`,
      "https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
