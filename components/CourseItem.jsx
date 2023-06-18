import { currencyConverter } from "@/utils/currencyConverter";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

function CourseItem({ course }) {
  console.log(course);

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
    <div className="w-full lg:w-[30rem] shadow-lg rounded-md overflow-hidden">
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
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="flex justify-between">
          <span>
            by <span className="text-black font-semibold">{instructor}</span>
          </span>
          <span>
            Durations:{" "}
            <span className="text-black font-semibold">{durations}</span>
          </span>
        </p>
        <p className="flex justify-between">
          <span>
            Enrolled Students:{" "}
            <span className="text-black font-semibold">{students}</span>
          </span>
          <span className="flex items-center gap-1">
            {" "}
            <AiFillStar className="text-amber-600" />
            <span className="text-black font-semibold">{rating}</span>
          </span>
        </p>
        <p>{descriptions.substring(0, 100)}...</p>
      <div className="flex justify-between items-center">
        <p className="text-black font-semibold">{currencyConverter(price, "en-GB", "EUR")}</p>
        <Link href={`/courses/${id}`}>View Details</Link>
      </div>
      </div>

    </div>
  );
}

export default CourseItem;
