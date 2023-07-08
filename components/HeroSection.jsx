import Lottie from "lottie-react";
import Button from "./Button";
import onlineLearning from "../public/lottieFile/online-learning";
import { motion } from "framer-motion";
import { getTransition, shutterUp } from "@/utils/motion";

function HeroSection() {
  return (
    <motion.div
      variants={shutterUp()}
      initial="from"
      whileInView="to"
      transition={getTransition()}
      className="py-10 md:py-20"
    >
      <div className="md:flex items-center flex-row-reverse">
        <div>
          <Lottie animationData={onlineLearning} loop={true} />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold  mb-4">
            Unlock Your Creative Potential with Learn Craft
          </h1>
          <p className="text-foreground font-medium leading-6 mb-8">
            Welcome to Learn Craft, the ultimate online course platform designed
            to ignite your creativity and empower you to learn new skills.
            Whether you&apos;re an aspiring artist, a budding entrepreneur, or
            simply someone who loves to explore different crafts, we have the
            perfect courses for you.
          </p>

          <Button
            href="/courses"
            placeholder="Browse popular course"
            color="primary"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default HeroSection;
