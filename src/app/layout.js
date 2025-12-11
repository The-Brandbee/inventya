import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google"

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title:
    "inventya",
  description:
    "inventya",

  alternates: {
    canonical: "",
  },
  openGraph: {
    images:
      "",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
     
    </html>
  );
}
