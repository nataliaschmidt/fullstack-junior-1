import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
const poppis = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description:
    "Página desenvolvida para o desafio de vaga full stack jr na Naranja Labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-font-color ${poppis.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
