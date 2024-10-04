import React from 'react';
import { About } from './components/about';
import { Hero } from './components/hero';

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
      <section className="h-screen" id="portfolio">
        <h1>Portfolio</h1>
      </section>
      <section className="h-screen" id="contact">
        <h1>Contact</h1>
      </section>
    </>
  );
}
