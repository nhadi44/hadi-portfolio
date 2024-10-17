import React from 'react';
import { About } from './components/about';
import { Hero } from './components/hero';
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
      <section className="h-screen" id="contact">
        <h1>Contact</h1>
      </section>
    </>
  );
}
