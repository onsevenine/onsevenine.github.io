import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto min-h-screen transition-all duration-500">
      <nav className="sticky top-0 w-full flex items-center px-4 py-8 rounded-full backdrop-blur-md">
        <Image
          src="https://avatars.githubusercontent.com/u/99410352?v=4"
          height={460}
          width={460}
          alt="Nishant Bhagat"
          className="h-16 w-16 rounded-full mr-4"
        />
        <h1 className="text-3xl font-bold">Nishant Bhagat</h1>
        <div>
          {/* <ul> */}
          {/*   <li>Home</li> */}
          {/*   <li>Projects</li> */}
          {/* </ul> */}
        </div>
      </nav>
      <section id="about" className="mb-8 mx-4">
        <p className="text-xl">
          Hi, I'm <em>Nishant Bhagat</em>. Can call me a web developer and a
          full time learner. Currently contributing to an educational institute
          management application{" "}
          <a href="https://cloord.com" className="text-blue-500">
            Cloord
          </a>{" "}
          using <span className="underline">NextJS and AWS</span>. My core
          interests are backend and cloud development(majorly on AWS).{" "}
          <strong>I'd like to work on any full-time or part-time jobs.</strong>
        </p>
      </section>
      <section id="technologies" className="mx-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Some technologies I work with...
        </h2>
        <div className="text-xl">
          <ul>
            <li>NextJS</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>AWS (S3, Lambda, Cognito,...)</li>
            <li>TailwindCSS</li>
          </ul>
        </div>
      </section>
      <section id="contact" className="mx-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">You can reach me at...</h2>
        <table className="w-full text-xl">
          <tbody>
            <tr>
              <td>
                <Link href="https://github.com/onsevenine">
                  <span className="font-medium underline">GitHub</span>
                </Link>
              </td>
              <td>https://github.com/onsevenine</td>
            </tr>
            <tr>
              <td>
                <Link href="https://x.com/onsevenine">
                  <span className="font-medium underline">
                    X(formerly Twitter)
                  </span>
                </Link>
              </td>
              <td>https://x.com/onsevenine</td>
            </tr>
            <tr>
              <td>
                <Link href="https://linkedin.com/in/nishant17bhagat">
                  <span className="font-medium underline">LinkedIn</span>
                </Link>
              </td>
              <td>https://linkedin.com/in/nishant17bhagat</td>
            </tr>
            <tr>
              <td>
                <Link href="mailto:nishant17bhagat@outlook.com">
                  <span className="font-medium underline">Email</span>
                </Link>
              </td>
              <td>nishant17bhagat@outlook.com</td>
            </tr>
          </tbody>
        </table>{" "}
      </section>
    </div>
  );
}
