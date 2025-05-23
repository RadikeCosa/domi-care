import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Domi-Care",
  description:
    "Domi Care is a web application that helps you manage your health home service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
