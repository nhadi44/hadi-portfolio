import React from 'react';
import { Hero } from './components/hero';
import { About } from '@/app/components/about';
import { Portfolio } from '@/app/components/portfolio';
import { MyExperience } from '@/app/components/myExperience';
import { ContactMe } from '@/app/components/contactMe';

export default function Home(): React.ReactElement {
  return (
    <>
      <section className="h-screen w-full pt-[12rem] lg:pt-[3rem]" id="home">
        <div className="lg:h-[calc(100vh-3rem)] w-full lg:max-w-[90%] mx-auto p-10">
          <Hero />
        </div>
      </section>
      <section className="bg-slate-50 dark:bg-slate-800" id="about">
        <About />
      </section>
      <section className="bg-slate-100 dark:bg-slate-600" id="portfolio">
        <Portfolio />
      </section>
      <section className="bg-white dark:bg-slate-900" id="experience">
        <MyExperience />
      </section>
      <section className="bg-white dark:bg-gray-950" id="contact">
        <ContactMe />
      </section>
    </>
  );
}
