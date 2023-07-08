import { getTransition, shutterUp } from "@/utils/motion";
import Button from "./Button";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <motion.section
      variants={shutterUp()}
      initial="from"
      whileInView="to"
      transition={getTransition()}
      className="py-20 bg-muted rounded-lg"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-foreground text-4xl font-bold mb-4">
          Join our course today!
        </h2>
        <p className="text-foreground text-lg mb-8">
          Start your learning journey and unlock new opportunities.
        </p>
        <Button href="/courses" placeholder="Enroll Today" color="secondary" />
      </div>
    </motion.section>
  );
}
