import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Age Portal Dashboard",
  description: "AGE Portal Dashboard Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="my-theme">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} min-h-full flex flex-col`}
      >
        <Sidebar />
        <div className="md:pl-64 min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
