import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Khula, Catamaran } from "next/font/google";


const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const khula = Khula({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-khula",
});

const catamaran = Catamaran({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-catamaran",
});

export const metadata: Metadata = {
  title: "MeshSpire | A peer to peer learning platform",
  description: "Fastest and most optimized way of learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${khula.variable} ${catamaran.variable}`}
    >
      <body className="bg-black font-sans">
        {children}
      </body>
    </html>
  );
}
