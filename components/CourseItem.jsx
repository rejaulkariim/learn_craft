import { currencyConverter } from "@/utils/currencyConverter";
import { getTransition, shutterUp } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import Button from "./Button";

function CourseItem({ course }) {
  const {
    id,
    title,
    descriptions,
    durations,
    image,
    instructor,
    price,
    rating,
    students,
  } = course;
  return (
    <motion.div
      variants={shutterUp()}
      initial="from"
      whileInView="to"
      transition={getTransition()}
      className="w-full md:w-[27rem] shadow-lg rounded-lg overflow-hidden bg-muted"
    >
      <div className="w-full h-[20rem] overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={640}
          height={360}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="flex justify-between">
          <span>
            Instructor:{" "}
            <span className="text-primary font-semibold">{instructor}</span>
          </span>
          <span>
            Durations:{" "}
            <span className="text-primary font-semibold">{durations}</span>
          </span>
        </p>
        <p className="flex justify-between">
          <span>
            Enrolled Students:{" "}
            <span className="text-primary  font-semibold">{students}</span>
          </span>
          <span className="flex items-center gap-1">
            Ratings: <AiFillStar className="text-amber-600" />
            <span className="text-primary  font-semibold">{rating}</span>
          </span>
        </p>
        <p className="text-foreground">{descriptions.substring(0, 100)}...</p>
        <div className="flex justify-between items-center">
          <p className="text-primary text-xl font-bold">
            {currencyConverter(price)}
          </p>
          <Button
            href={`/courses/${id}`}
            placeholder="View Details"
            color="primary"
            size="default"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default CourseItem;
