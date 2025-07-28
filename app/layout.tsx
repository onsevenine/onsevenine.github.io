import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const robotoFlex = Roboto_Flex({
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
      <body className={`${robotoFlex.className} antialiased`}>{children}</body>
    </html>
  );
}
