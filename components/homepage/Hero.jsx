import React from "react";
import Section from "../ui/Section";
import H1 from "../ui/H1";
import * as motion from "motion/react-client";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.png";
import Image from "next/image";
import P from "../ui/P";
import { container } from "@/animation/animate";

const Hero = () => {
  return (
    <div className="bg-primary text-primary-content py-24">
      <Section className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8">
        {/* content */}
        <motion.div
          variants={container("BTT", 0.2)}
          initial="initial"
          animate="animate"
          className="max-w-lg space-y-4"
        >
          <H1>Discover Your Natural Glow</H1>
          <P>
            Experience the power of nature with our thoughtfully crafted organic
            products. Made with the purest ingredients, our collection is
            designed to nourish your body and elevate your daily rituals.
          </P>
          <motion.button
            whileHover={{ width: 150 }}
            className="btn btn-accent rounded-lg justify-between"
          >
            <p>Shop Now</p> <ArrowRight />
          </motion.button>
        </motion.div>
        {/* Image */}
        <motion.div
          variants={container("BTT", 0.5)}
          initial="initial"
          animate="animate"
        >
          <Image src={hero} height={500} width={500} alt="hero-image" />
        </motion.div>
      </Section>
    </div>
  );
};

export default Hero;
