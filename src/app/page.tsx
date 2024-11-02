import React from 'react';
import { About } from './components/about';
import { ContactMe } from './components/contactMe';
import { Hero } from './components/hero';
import { MyExperience } from './components/myExperience';
import { Portfolio } from './components/portfolio';

export default function Home(): React.ReactElement {
  return (
    <>
      <section className="h-screen pt-[3rem]" id="home">
        <div className="h-[calc(100vh-3rem)] max-w-[90%] mx-auto p-10">
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
