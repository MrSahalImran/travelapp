import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jadoo",
  description: "A platform that will help you in have great vacations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: 'url("assets/header-bg.png")',
          backgroundSize: "contain",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
        className={`${inter.className} container mx-auto bg-white`}
      >
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
