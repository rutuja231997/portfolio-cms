import Head from "next/head";
import Hero from "./components/Hero";
import About from "./components/About";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

import getExperience from "@/utils/getExperience";
import getProject from "@/utils/getProject";
import getSocial from "@/utils/getSocial";
import { getSkills } from "@/utils/getSkills";
import { getPageInfo } from "@/utils/getPageInfo";

 
export const revalidate = 10;

export default async function Home() {

  const pageInfo = await getPageInfo();
  const experience = await getExperience();
  const skills = await getSkills();
  const projects = await getProject();
  const socials = await getSocial();

  if(!pageInfo) return null;

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>{pageInfo?.name}</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experience} />
      </section>

      <section id="skills" className="snap-start ">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <Contact pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-10 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src={urlFor(pageInfo?.heroImage).url()}
              alt={pageInfo.heroImage.alt}   
              width={10}
              height={10}  
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

