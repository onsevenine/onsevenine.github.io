import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nishant Bhagat",
  description: "Nishant Bhagat's Portfolio",
  authors: [{ name: "Nishant Bhagat" }],
  keywords: [
    "Nishant Bhagat",
    "Nishant",
    "Bhagat",
    "Portfolio",
    "Resume",
    "Nishant Bhagat Portfolio",
    "Web Development",
    "Developer",
    "Hire",
    "NextJS",
    "DevOps",
    "Development",
    "Website",
    "Nishant",
    "Bhagat",
  ],
  icons: {
    icon: "/avatar.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
