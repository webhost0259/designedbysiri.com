import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sireesha Reddy Designer Studio, Buy Indian Traditional Attire Online, Designed by Siri",
  description: "Sireesha Reddy Designer Studio, Buy Indian Traditional Attire Online, Designed by Siri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white min-h-screen w-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
