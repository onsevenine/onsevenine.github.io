"use client";

import { Jersey_10 } from "next/font/google";
import Link from "next/link";

import { useEffect, useState } from "react";

const jersey = Jersey_10({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  const [colorScheme, setColorScheme] = useState("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleColorSchemeChange = (event: any) => {
      setColorScheme(event.matches ? "dark" : "light");
    };

    handleColorSchemeChange(mediaQuery);

    mediaQuery.addEventListener("change", handleColorSchemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleColorSchemeChange);
    };
  }, []);

  return (
    <div className="w-full min-h-screen transition-all duration-500">
      <nav className="flex items-center justify-between m-2 mb-8 md:m-8 lg:my-8 lg:m-auto max-w-[1000px]">
        <div className="border h-16 w-16 grid place-items-center">
          <h1 className={`${jersey.className} text-4xl pointer-events-none`}>
            NB
          </h1>
        </div>
        <div className="space-x-6">
          <Link
            href="#about"
            className="font-semibold uppercase cursor-pointer hover:text-[var(--tertiary)]  transition rounded-full"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="font-semibold uppercase cursor-pointer hover:text-[var(--tertiary)] transition rounded-full"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="font-semibold uppercase cursor-pointer hover:text-[var(--tertiary)]  transition rounded-full"
          >
            Contact
          </Link>
        </div>
      </nav>
      <section id="hero">
        <span className="text-lg">
          Hi, I'm <b>Nishant Bhagat</b>
        </span>
      </section>
      <section id="about" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <ul className="list-disc pl-4">
          <li>
            Love doing <strong>Code</strong>
          </li>
          <li>
            Building{" "}
            <Link href="https://cloord.com">
              {" "}
              <strong>
                "<u>Cloord</u>"
              </strong>
            </Link>{" "}
            - A SaaS platform to streamline school management process.
          </li>
          <li>
            Currently student at Indian Institute of Technology, Guwahati.
          </li>
        </ul>
      </section>
      <section id="projects" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div>
          <h3 className="text-lg font-semibold">
            Table Tennis Counter: Android App
            <Link href="https://github.com/onsevenine/table_tennis_counter.git">
              [<u>Link</u>]
            </Link>
          </h3>
          <ul className="list-disc list-inside">
            <li>App to count points in table tennis match.</li>
            <li>
              Different match mode is available, e.g. with or without deuce.
            </li>
            <li>Can choose for 4 different number of sets.</li>
          </ul>
        </div>
      </section>
      <section id="contact" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <table className="w-full">
          <tbody>
            <tr>
              <td>
                <Link href="https://github.com/onsevenine" className="group">
                  <span className="font-semibold group-hover:underline">
                    GitHub
                  </span>
                </Link>
              </td>
              <td>https://github.com/onsevenine</td>
            </tr>
            <tr>
              <td>
                <Link
                  href="https://linkedin.com/in/nishant17bhagat"
                  className="group"
                >
                  <span className="font-semibold group-hover:underline">
                    LinkedIn
                  </span>
                </Link>
              </td>
              <td>https://linkedin.com/in/nishant17bhagat</td>
            </tr>
            <tr>
              <td>
                <Link href="mailto:onsevenine@gmail.com" className="group">
                  <span className="font-semibold group-hover:underline">
                    Email
                  </span>
                </Link>
              </td>
              <td>onsevenine@gmail.com</td>
            </tr>
          </tbody>
        </table>{" "}
      </section>
    </div>
  );
}
