import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Project1 from "../public/tina-interiors-image-gallery.png";
import Project2 from "../public/flos-movies-app.png";
import Project3 from "../public/slack-profile.png";
import Project4 from "../public/tina-interiors.png";
import Project5 from "../public/order-summary.png";
import Project6 from "../public/nft-preview.png";
import Project7 from "../public/single-price-grid.png";
import Project8 from "../public/signup-form.png";
import Project9 from "../public/qr-code.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Florentina Antigha Portfolio</title>
        <meta name="description" content="Portfolio Project" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mooli&family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className=" bg-white md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className=" pt-10 pb-6 mb-12 flex justify-between px-10">
            <h1 className=" text-2xl font-Mooli">DEVELOPEDBYFLORENTEENA</h1>
            <ul className=" flex items-center">
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Email
                </a>
              </li>
            </ul>
          </nav>
          <div className=" text-center p-10 leading-10">
            <h2 className=" text-5xl pb-8 text-teal-600 font-medium md:text-6xl">
              Florentina Antigha
            </h2>
            <h3 className=" text-2xl pt-2 pb-4 text-gray-800 font-semibold md:text-3xl">
              Web Developer, Coding Instructor and DevOps Engineer.
            </h3>
            <p className=" text-md pt-5 pb-5 text-gray-800 md:text-xl max-w-xl mx-auto">
              I am a passionate Freelancer, providing services for Website
              development, DevOps and Teaching programming.
            </p>
          </div>
          <div className=" text-5xl flex justify-center gap-16 text-gray-800 pb-24">
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillTwitterCircle />
          </div>
          <div className="px-10 pb-10">
            <div className=" bg-slate-900 pt-20 pb-20 rounded-3xl">
              <h3 className=" text-4xl pb-4 text-teal-600 text-center">
                Services I Offer
              </h3>
              <p className=" text-md py-2 leading-8 text-white px-10 text-center">
                Since the beginning of my journey as a freelance frontend
                developer, coding insructor for kids and DevOps enthusiaist, I
                have worked and interned in several{" "}
                <span className=" text-teal-500">startups</span> and reputable{" "}
                <span className=" text-teal-500">agencies</span>, and
                collaborated with talented people to create amazing websites,
                automate and deploy softwares and introduced the concept of
                programming to some of the next generation programmers in a fun
                and exciting manner.
              </p>
            </div>
          </div>
        </section>
        <section className="px-10">
          <div>
            <h3 className=" text-4xl pt-10 pb-5 text-teal-600 text-center">Portfolio</h3>
            <h4 className=" text-xl text-gray-800 pb-3 text-center">
              Here are some of my recent projects that showcase my skills and
              passion for web development:
            </h4>
          </div>
          <div className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className=" basis-1/3 flex-1">
              <a href="https://tinainteriorsimagegallery.vercel.app/gallery" target="_blank">
              <Image src={Project1} className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
              </a>
            </div>
            <div className=" basis-1/3 flex-1">
              <a href="https://flosmovieapp.vercel.app/" target="_blank">
              <Image src={Project2} className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
              </a>
            </div>
            <div className=" basis-1/3 flex-1">
              <a href="https://frontend-track-stage-one-task.vercel.app/" target="_blank">
              <Image src={Project3} className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
              </a>
            </div>
            <div className=" basis-1/3 flex-1">
              <a href="https://tina-interiors.vercel.app/" target="_blank">
              <Image src={Project4} className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
              </a>
            </div>
            <div className=" basis-1/3 flex-1">
              <a href="https://order-summary-subscription.vercel.app/" target="_blank">
              <Image src={Project5} className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
              </a>
            </div>
            <div className=" basis-1/3 flex-1">
              <a href="https://nft-preview-card-project.vercel.app/" target="_blank">
              <Image src={Project6} className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
              </a>
            </div>
            <div className=" basis-1/3 flex-1">
              <a href="https://single-price-grid-by-florenteena.vercel.app/" target="_blank">
              <Image src={Project7} className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
              </a>
            </div>
            <div className=" basis-1/3 flex-1">
              <a href="https://intro-component-with-signup-form-by-florenteena.vercel.app/" target="_blank">
              <Image src={Project8} className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
              </a>
            </div>
            <div className="lg:m-auto">
              <a href="https://qr-code-component-by-florenteena.vercel.app/" target="_blank">
              <Image src={Project9} className=" rounded-lg object-cover" width={"100%"} height={"100%"} layout="responsive"/>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
