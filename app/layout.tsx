import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Khula, Catamaran } from "next/font/google";


export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const khula = Khula({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-khula",
});

export const catamaran = Catamaran({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-khula",
});


export const metadata: Metadata = {
  title: "Bimal Paan Masala",
  description: "UI/UX Workshop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${khula.variable}`}>
      <body className="bg-black font-sans">
        {children}
      </body>
    </html>
  );
}