"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "../components/VideoCarousel";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#highlights",
        start: "top 80%",
      },
    });

    tl.to("#title", { opacity: 1, y: 0, duration: 0.8 }).to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
      ease: "back.out(1.7)",
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc-950"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1
            id="title"
            className="section-heading opacity-0 translate-y-10 transition-transform duration-500"
          >
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link opacity-0 translate-y-5">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link opacity-0 translate-y-5">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
