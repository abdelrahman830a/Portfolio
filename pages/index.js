import Head from "next/head";
import { Inter } from "next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import Image from "next/image";
import deved from "../public/3D boy using laptop and phone Illustration.jpg";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  //emailjs form
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm(
        "service_v7zl2up",
        "template_pb1b0og",
        form.current,
        "S1DyNuk_8a6WNzIXj"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSent(true);
          e.target.reset;
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>A.Zaitoun</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/olive.png" />
      </Head>
      <main className="px-10 bg-white md:px-20 lg:px-40 transition duration-500 ease-in-out dark:bg-slate-800">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">A.ZAITOUN</h1>
            <ul className="flex items-center gap-4">
              <li>
                <BsFillMoonStarsFill
                  className=" cursor-pointer text-2xl dark:text-white transition duration-300 ease-in-out"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li className="hover:scale-105 transition duration-100 ease-in-out">
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#">
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className=" text-center p-10">
            <h2 className=" text-5xl py-2 text-teal-600 font-medium  break-all md:text-6xl">
              Abdelrahman Zaitoun
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Developer and Designer.
            </h3>
            <p className="text-md py-3 text-gray-800 leading-8 md:text-xl max-w-2xl mx-auto dark:text-white">
              Are you in search of a skilled and reliable{" "}
              <span className=" font-bold">full-stack developer </span>
              to bring your web app ideas to life?{" "}
              <span className="text-xl font-semibold  italic">
                Look no further!{" "}
              </span>{" "}
              My name is Abdelrahman, and I'm excited to introduce myself as a
              passionate professional in the field of{" "}
              <span className=" underline">web development</span>.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-600 pt-3">
            <a href="https://www.linkedin.com/in/abdelrahmanzaitoun/">
              <AiFillLinkedin className="dark:text-white" />
            </a>
            <a href="https://github.com/abdelrahman830a">
              <AiFillGithub className="dark:text-white" />
            </a>
            <a href="https://web.facebook.com/profile.php?id=100089922090148">
              <AiFillFacebook className="dark:text-white" />
            </a>
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-4 mx-auto overflow-hidden md:w-96 md:h-96 hover:shadow-2xl transition duration-300">
            <Image
              src={deved}
              alt="My Avatar"
              layout="fill"
              objectFit="contain"
              className="hover:backdrop-blur-md hover:backdrop-brightness-50 transition duration-500 ease-in-out"
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I Offer</h3>
            <p className="text-md py-3 text-gray-800 leading-8 dark:text-white">
              I deliver not only visually appealing designs but also highly
              functional and user-friendly experiences. By leveraging my skills
              in both front-end and back-end development, I ensure that your web
              app not only looks great but also
              <span className="text-teal-500 font-medium">
                {" "}
                performs flawlessly across devices and platforms.
              </span>
            </p>

            <p className="text-md py-3 text-gray-800 leading-8 dark:text-white">
              With expertise in React, Tailwind, Next.js, TypeScript, Node.js,
              and MongoDB, I have the tools and knowledge to create modern and
              responsive web applications that exceed your expectations. Whether
              you need an
              <span className="text-teal-500"> e-commerce platform</span>,
              <span className="text-teal-500">
                {" "}
                a content management system
              </span>
              , or
              <span className="text-teal-500"> a custom web solution</span>, I'm
              here to turn your vision into a reality.
            </p>
          </div>

          <div className="lg:flex gap-10 ">
            <div className="text-center shadow-lg rounded-xl p-10 my-10 flex-1 dark:bg-slate-50 hover:shadow-2xl transition duration-300 ease-in-out dar">
              <Image
                src={design}
                alt="design"
                width={100}
                height={100}
                className="inline-block"
              />
              <h3 className=" text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className=" py-2 ">
                Creating elegant designs suited for your needs following core
                design theory. I believe in simplicity, and straightforwardness
              </p>
              <h4 className=" py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Illustrator</p>
            </div>
            <div className="text-center shadow-lg rounded-xl p-10 my-10 flex-1 dark:bg-slate-50 hover:shadow-2xl transition duration-300 ease-in-out">
              <Image
                src={code}
                alt="design"
                width={100}
                height={100}
                className="inline-block"
              />
              <h3 className=" text-lg font-medium pt-8 pb-2">Fast Code</h3>
              <p className=" py-2 ">
                Writing clean code to rocket fast your website.
              </p>
              <h4 className=" py-4 text-teal-600">Top Notch Stack</h4>
              <p className="text-gray-800 py-1">React.js</p>
              <p className="text-gray-800 py-1">Next.js</p>
              <p className="text-gray-800 py-1">Tailwind Css</p>
              <p className="text-gray-800 py-1">TypeScript</p>
              <p className="text-gray-800 py-1">Nodejs</p>
            </div>
            <div className="text-center shadow-lg rounded-xl p-10 my-10 flex-1 dark:bg-slate-50 hover:shadow-2xl transition duration-300 ease-in-out">
              <Image
                src={consulting}
                alt="design"
                width={100}
                height={100}
                className="inline-block"
              />
              <h3 className=" text-lg font-medium pt-8 pb-2">
                Need help? No problem.
              </h3>
              <p className=" py-2 ">
                Offering cosultation services for whoever needs guidance. Let me
                know what you want to do, and I will guide you through it.
                Simple. Best Quality.
              </p>
              <h4 className=" py-4 text-teal-600">I can help you</h4>
              <p className="text-gray-800 py-1">Write efficient code</p>
              <p className="text-gray-800 py-1">Improve your coding flow</p>
              <p className="text-gray-800 py-1">
                Get more logic writing functions
              </p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md leading-8 text-gray-800 dark:text-white">
              In my portfolio, you'll discover a diverse array of web
              development ventures, including engaging
              <span className="text-teal-500"> ecommerce platforms, </span>
              <span className="text-teal-500">persuasive landing pages</span>,
              <span className="text-teal-500"> personalized blogs</span>, and
              <span className="text-teal-500"> efficient admin dashboards</span>
              .
            </p>
            <p className="text-md leading-8 text-gray-800 dark:text-white mb-5">
              These projects not only demonstrate my adeptness in various coding
              languages and technologies, but also underscore my commitment to
              creating intuitive, visually appealing, and responsive digital
              solutions. Each entry encapsulates my dedication to merging
              creativity with technical finesse, resulting in
              <span className="underline decoration-teal-500">
                {" "}
                seamless and captivating online experiences.
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
            <div className=" basis-1/2 flex-1 overflow-hidden">
              <Image
                src={web1}
                width={"100%"}
                height={"100%"}
                layout="responsive"
                className="rounded-lg object-cover hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
            <div className=" basis-1/2 flex-1 overflow-hidden">
              <Image
                src={web2}
                width={"100%"}
                height={"100%"}
                layout="responsive"
                className="rounded-lg object-cover hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
            <div className=" basis-1/2 flex-1 overflow-hidden">
              <Image
                src={web3}
                width={"100%"}
                height={"100%"}
                layout="responsive"
                className="rounded-lg object-cover hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
            <div className=" basis-1/2 flex-1 overflow-hidden">
              <Image
                src={web4}
                width={"100%"}
                height={"100%"}
                layout="responsive"
                className="rounded-lg object-cover hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
            <div className=" basis-1/2 flex-1 overflow-hidden">
              <Image
                src={web5}
                width={"100%"}
                height={"100%"}
                layout="responsive"
                className="rounded-lg object-cover hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
            <div className=" basis-1/2 flex-1 overflow-hidden">
              <Image
                src={web6}
                width={"100%"}
                height={"100%"}
                layout="responsive"
                className="rounded-lg object-cover hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="p-10 h-screen bg-white-500 dark:bg-slate-700 text-center">
        <h1 className="text-5xl p-12 text-teal-500">Contact Here</h1>

        {isEmailSent ? ( // Conditionally render success message
          <p className="text-green-500 text-lg">Email sent successfully!</p>
        ) : (
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col items-start gap-6">
            <label htmlFor="Name" className="text-3xl text-teal-400">
              Name
            </label>
            <input
              type="text"
              placeholder="your name"
              className="w-96 p-2 rounded-md border-none shadow-lg"
            />

            <label htmlFor="email" className="text-3xl text-teal-400">
              Email
            </label>
            <input
              type="email"
              placeholder="email"
              className="w-96 p-2 rounded-md border-none shadow-lg"
            />
            <label htmlFor="message" className="text-3xl text-teal-400">
              Message
            </label>
            <input
              type="text"
              placeholder="message"
              className="w-96 h-48 p-2 rounded-md border-none shadow-lg"
            />
            <input
              type="submit"
              value="Send"
              className="text-white bg-emerald-600 w-36 h-10 rounded cursor-pointer hover:bg-emerald-800"
            />
          </form>
        )}
      </footer>
    </div>
  );
}
