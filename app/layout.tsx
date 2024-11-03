import { Danfo, Nunito, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Switchfixx Electricals",
  description:
    "A Taranaki based electrical team that provides electric services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-[#F0F4EF] antialiased`}>{children}</body>
    </html>
  );
}
