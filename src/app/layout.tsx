import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import "./styles/app.css";
import "./styles/index.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Get More Affilate Commissions",
  authors: [
    {
      name: "Badger",
      url: "https://getbadger.net",
    },
  ],
  description: "Providing open source tools for savvy shoppers and affilate marketers",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
