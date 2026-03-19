import type { Metadata } from "next";
import { Radio_Canada } from "next/font/google";
import "./globals.css";
import ParticleBackground from "@/components/ParticleBackground";
import Footer from "@/components/Footer";

const radio = Radio_Canada({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "raja muhammed omar",
  description: "portfolio — computer science @ university of calgary",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${radio.className} min-h-screen pl-0 pr-0 pt-12 pb-2 mx-10 flex justify-center sm:mx-24 text-neutral-700`}
      >
        <ParticleBackground />
        <div className="max-w-2xl w-full flex flex-col min-h-screen">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
