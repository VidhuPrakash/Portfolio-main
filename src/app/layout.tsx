import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { siteConfig } from "./page";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vidhuprakash.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,

  // added new keywords for seo
  keywords: [
    "Vidhu",
    "Prakash",
    "Tp",
    "VidhuPrakash",
    "VIDHU",
    "PRAKASH",
    "Prakash",
    "Tp",
    "TP",
    "Vidhu Prakash T P",
    "VIDHU PRAKASH T P",
    "vidhu prakash t p",
    "vidhuprakashtp",
    "prakash tp",
    "vidhu prakash",
    "VidhuPraksashTP",
    "portfolio",
    "full stack web developer",
    "web",
    "web dev",
    "developer",
    "PROGRAMMER ",
    "programmer ",
    "VIDHU PRAKASH T P ",
    "website",
    "VidhuPrakashTP",
    "vidhu developer",
  ],
  authors: [
    {
      name: "Vidhu Prakash",
      url: "https://github.com/VidhuPrakash",
    },
  ],
  creator: "Vidhu Prakash",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <main
          className={cn(
            "flex  relative  break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(gray_.3px,transparent_1px)] [background-size:16px_16px]",
            { "bg-black": "#E6E7EB" }
          )}
        >
          {/* NAVBAR ->  */}
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
