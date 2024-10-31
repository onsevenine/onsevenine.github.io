import Image from "next/image";
import { Jersey_10 } from "next/font/google";
import Link from "next/link";

import Github from "@/assets/github.svg";
import LinkedIn from "@/assets/linkedin.svg";
import Email from "@/assets/email.svg";

const jersey = Jersey_10({
  weight: ["400"],
});

export default function Home() {
  return (
    <div className="w-full min-h-screen">
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
        <span>Hi, I'm Nishant Bhagat</span>
      </section>
      <section id="about" className="mb-8">
        <h2 className="text-4xl font-bold mb-4">About</h2>
        <p className="leading-loose">
          I am currently student pursuing engineering. Being away from computers
          always interested me to know to more. But this curiosity now helps me
          to dig deeper inside and learn more. I wrote my first line of in my
          higher secondary school when I choose <i>Computer Science</i>
          course, it was in <i>C++</i> but my personal interest was in web
          development, but <i>C++</i> knowledge helps me to understand
          programming concepts better. Before learning how to code I used to
          review websites source code, that how things work and how they are
          made. I started web development in freshman year of college, when
          COVID-19 hit and classes were online, that was the time my inner
          programmer came out, I started to think in code. This journey is still
          going on and I am learning new things everyday.
        </p>
      </section>
      <section id="projects" className="mb-8">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-xl"></p>
      </section>
      <section id="contact" className="mb-8">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="overflow-hidden rounded-md border-[var(--foreground)] border-2 flex items-center">
            <Image
              src={Github}
              alt="Github"
              className="h-16 w-16 bg-[var(--foreground)] p-4"
            />
            <span className="px-4 flex flex-col">
              <span className="font-semibold">Github</span>
              <Link href="https://github.com/onsevenine">
                https://github.com/onsevenine
              </Link>
            </span>
          </div>
          <div className="overflow-hidden rounded-md border-[var(--foreground)] border-2 flex items-center">
            <Image
              src={LinkedIn}
              alt="LinkedIn"
              className="h-16 w-16 bg-[var(--foreground)] p-4"
            />
            <span className="px-4 flex flex-col">
              <span className="font-semibold">Github</span>
              <Link href="https://linked.com/in/nishant17bhagat">
                https://linked.com/in/nishant17bhagat
              </Link>
            </span>
          </div>
          <div className="overflow-hidden rounded-md border-[var(--foreground)] border-2 flex items-center">
            <Image
              src={Email}
              alt="Email"
              className="h-16 w-16 bg-[var(--foreground)] p-4"
            />
            <span className="px-4 flex flex-col">
              <span className="font-semibold">Email</span>
              <Link href="mailto:onsevenine@gmail.com">Nishant Bhagat</Link>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
