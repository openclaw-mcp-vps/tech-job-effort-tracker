import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechEffort — Anonymous Work Hours Tracker for Developers",
  description:
    "Anonymously log your actual productive work hours vs scheduled hours. Benchmark your workload against real industry data. Built for developers, engineers, and managers."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="16eb936a-7452-403c-b4b4-fbde649f8f8b"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
