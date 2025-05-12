import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

interface AnimateWithGsapOptions {
  target: any;
  animationProps: any;
  scrollProps?: Partial<ScrollTrigger.Vars>;
}

export const animateWithGsap = ({
  target,
  animationProps,
  scrollProps = {},
}: AnimateWithGsapOptions): void => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};
