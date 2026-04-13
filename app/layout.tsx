import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ilkcan Kose",
  description: "Designing end-to-end from idea to impact.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/npj1fam.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
