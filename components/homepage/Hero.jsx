import React from "react";
import Section from "../ui/Section";
import H1 from "../ui/H1";
import * as motion from "motion/react-client";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero.png";
import Image from "next/image";
import P from "../ui/P";
import { container } from "@/animation/animate";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-primary text-primary-content py-24">
      <Section className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8">
        {/* content */}
        <motion.div
          variants={container("BTT", 0.2)}
          initial="initial"
          animate="animate"
          className="max-w-screen-md space-y-4"
        >
          <h5 className="font-semibold tracking-tight text-lg">
            From fresh produce to household goods, discover a curated selection
            for your daily needs.
          </h5>
          <H1>Your Everyday Essentials, All in One Place</H1>
          <P>
            Experience the convenience of online shopping with a diverse range
            of quality products at your fingertips.
          </P>
          <Link href={"/products"}>
            <motion.button
              whileHover={{ width: 150 }}
              className="btn btn-accent rounded-lg justify-between"
            >
              <p>Shop Now</p> <ArrowRight />
            </motion.button>
          </Link>
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
