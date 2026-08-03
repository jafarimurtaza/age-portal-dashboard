import { Geist, Geist_Mono, Fraunces } from "next/font/google";
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
    <html
      lang="en"
      data-theme="light"
    >
      <body className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} min-h-full flex flex-col`}>
        <div className="flex">
          <div className="w-full">
            <main className="min-h-screen">{children}</main>
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  );
}