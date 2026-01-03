import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "DCYPHERNET | AI-Powered Web Design & Automation",
  description:
    "We design high-converting, secure websites and integrate AI automation that captures leads, responds instantly, and turns visitors into customers — automatically.",
  generator: "dcyphernet.com",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <head>
        {/* Zoho SalesIQ */}
        <Script id="zoho-salesiq-init" strategy="afterInteractive">
          {`
            window.$zoho = window.$zoho || {};
            $zoho.salesiq = $zoho.salesiq || { ready: function() {} };
          `}
        </Script>

        <Script
          id="zoho-salesiq-widget"
          src="https://salesiq.zohopublic.com/widget?wc=siqc96b96d5a0d13e184bfdd2fdd213a9af393890f772d8c59f7229d39ae5d38248"
          strategy="afterInteractive"
          defer
        />
      </head>

      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
