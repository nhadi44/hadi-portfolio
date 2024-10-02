import React from "react";
import { Hero } from "./components/hero";

export default function Home(): React.ReactElement {
  return (
    <>
      <section className="h-screen pt-[3rem]" id="home">
        <div className="h-[calc(100vh-3rem)] max-w-[90%] mx-auto p-10 flex items-center">
          <Hero />
        </div>
      </section>
      <section className="h-screen" id="about">
        <h1>About Me</h1>
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
