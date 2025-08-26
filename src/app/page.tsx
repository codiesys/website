"use client";

import Feature from "./components/Services";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />
      <Pricing />
    </div>
  );
}
