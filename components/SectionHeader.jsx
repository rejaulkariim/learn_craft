import { getTransition, shutterUp } from "@/utils/motion";
import { motion } from "framer-motion";
function SectionHeader({ span, h1, p }) {
  return (
    <motion.div
      variants={shutterUp()}
      initial="from"
      whileInView="to"
      transition={getTransition()}
      className="flex items-center flex-col text-center py-10 space-y-2"
    >
      <span className="text-sm text-primary font-bold uppercase tracking-wider">
        {span}
      </span>
      <h1 className="text-3xl text-foreground font-semibold">{h1}</h1>
      <p className="text-foreground md:w-[45rem] mx-auto">{p}</p>
    </motion.div>
  );
}

export default SectionHeader;
