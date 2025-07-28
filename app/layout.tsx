import type { Metadata } from "next";
import { Cascadia_Code } from "next/font/google";
import "./globals.css";

const cascadiaCode = Cascadia_Code({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nishant Bhagat",
  description: "Personal website of Nishant Bhagat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cascadiaCode.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
