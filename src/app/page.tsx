import React from "react";

import Features from "./ui/Features";
import Footer from "./ui/Footer";
import Hero from "./ui/Hero";
import Highlights from "./ui/Highlights";
import HowItWorks from "./ui/HowItWorks";
import Navbar from "./ui/Navbar";

const Home = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default Home;
