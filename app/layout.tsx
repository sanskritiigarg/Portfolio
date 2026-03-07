import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/navbar/Navbar";
import Footer from "@/components/general/Footer";
import ScrollToTop from "@/components/general/ScrollToTop";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Sanskriti's Portfolio",
  description: "Sanskriti Mohit Garg Portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-background text-foreground w-full`}
      >
          <Navbar/>
          {children}
          <Footer/>
          <ScrollToTop/>
      </body>
    </html>
  );
}
