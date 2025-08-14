import Link from "next/link";
import Image from "next/image";

import githubSvg from "@/assets/github.svg";
import linkedinSvg from "@/assets/linkedin.svg";
import twitterSvg from "@/assets/twitter.svg";
import emailSvg from "@/assets/email.svg";

export default function Home() {
  return (
    <main className="max-w-[80ch] my-4 sm:my-8 mx-2 sm:mx-auto space-y-8 tracking-normal">
      <div className="space-y-2">
        <h1 className="text-5xl font-bold text-slate-50">Nishant Bhagat</h1>
        <p className="text-lg text-gray-400">
          Looking for a role to work in a startup
        </p>
        <p className="text-xs text-gray-200">
          <span className="rounded-full px-2 py-1 bg-gray-200/20 drop-shadow">
            Backend Development
          </span>
          <span className="rounded-full px-2 py-1 bg-gray-200/20 drop-shadow ml-2">
            DevOps
          </span>
        </p>
      </div>
      <div className="flex gap-2">
        <Link href="https://github.com/onsevenine">
          <Image src={githubSvg} alt="GitHub" className="h-8 w-8" />
        </Link>

        <Link href="https://www.linkedin.com/in/nishant17bhagat/">
          <Image src={linkedinSvg} alt="LinkedIn" className="h-8 w-8" />
        </Link>

        <Link href="https://twitter.com/onsevenine">
          <Image src={twitterSvg} alt="Twitter" className="h-8 w-8" />
        </Link>

        <Link href="mailto:nishant17bhagat@outlook.com">
          <Image src={emailSvg} alt="Email" className="h-8 w-8" />
        </Link>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-100">Experience</h2>
        <ul className="pl-2">
          <li>
            <div className="inline-block  text-gray-100">
              <Link href="https://cloord.com/">
                <h3 className="font-semibold underline">Cloord</h3>
              </Link>
              <p className="text-sm">Founding member of the company</p>
              <p className="text-sm">2024-Current</p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-100">Education</h2>
        <ul className="pl-2">
          <li>
            <div className="inline-block  text-gray-100">
              <h3 className="font-semibold">
                Indian Institute of Technology, Guwahati
              </h3>
              <p className="text-sm">
                B. Tech., Electronics and Communication Engineering
              </p>
              <p className="text-sm">2021-2025</p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-100">Projects</h2>
        <p className="text-gray-100 ml-2">Uploading soon...</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-slate-100">Skills</h2>
        <ul className="pl-2 space-y-4">
          <li>
            <div className="inline-block text-gray-100">
              <h3 className="font-semibold">Programming Languages</h3>
              <p className="text-sm">
                C, Python, PHP, TypeScript, JavaScript, HTML, CSS
              </p>
            </div>
          </li>
          <li>
            <div className="inline-block text-gray-100">
              <h3 className="font-semibold">Web Frameworks</h3>
              <p className="text-sm">ReactJS, NextJS, ExpressJS, Laravel*</p>
            </div>
          </li>
          <li>
            <div className="inline-block text-gray-100">
              <h3 className="font-semibold">Miscellaneous</h3>
              <p className="text-sm">Git, Linux, Docker*, AWS*, Bash</p>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}
