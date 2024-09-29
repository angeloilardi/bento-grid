import type { Metadata } from "next";
import {DM_Sans} from "next/font/google";
import "./globals.css";

const dmsans = DM_Sans ({subsets:["latin"], weight: ["400", "500"]})


export const metadata: Metadata = {
  title: "Social agenda",
  description: "Boost social media with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmsans.className} antialiased bg-slate-200 overflow-auto h-fit`}
      >
        {children}
      </body>
    </html>
  );
}
