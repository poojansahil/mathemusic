import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as a clean, modern font
import "./globals.css";

// Configure the Inter font
const inter = Inter({
  subsets: ["latin"],
  display: 'swap', // Ensures text remains visible during font loading
  variable: '--font-inter', // Optional: if you want to use it as a CSS variable
});

export const metadata: Metadata = {
  title: "Math-e-Music | Math and Science Like Never Before",
  description: "A celebration of math and science through engaging musical performances by Poojan Sahil. Book a unique educational experience for your school or event.",
  // Add more metadata as needed: keywords, open graph tags, etc.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Applying the Inter font class to the body */}
      <body className={`${inter.className} bg-brand-bg-light text-brand-font-darkest`}>
        {children}
      </body>
    </html>
  );
}