import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar";
// import Navbar from "../components/Navbar";
// import Header from "../components/Header";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WorkhubMTY",
  description:
    "A platform to connect and collaborate with professionals in Monterrey, Mexico.",
};

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col bg-background min-h-screen  w-screen" style={{ fontFamily: "var(--font-manrope)" }}>
    <Navbar />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
