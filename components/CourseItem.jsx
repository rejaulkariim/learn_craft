import { currencyConverter } from "@/utils/currencyConverter";
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
    <div className="w-full lg:w-[29rem] shadow-lg rounded-md overflow-hidden bg-muted">
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
        <h3 className="text-xl font-bold text-muted-foreground">{title}</h3>
        <p className="flex justify-between">
          <span>
            by{" "}
            <span className="text-black font-semibold text-muted-foreground">
              {instructor}
            </span>
          </span>
          <span>
            Durations:{" "}
            <span className="text-black font-semibold text-muted-foreground">
              {durations}
            </span>
          </span>
        </p>
        <p className="flex justify-between">
          <span>
            Enrolled Students:{" "}
            <span className="text-black font-semibold text-muted-foreground">
              {students}
            </span>
          </span>
          <span className="flex items-center gap-1">
            {" "}
            <AiFillStar className="text-amber-600" />
            <span className="text-black font-semibold text-muted-foreground">
              Ratings: {rating}
            </span>
          </span>
        </p>
        <p className="text-muted-foreground">
          {descriptions.substring(0, 100)}...
        </p>
        <div className="flex justify-between items-center">
          <p className="text-black font-semibold text-muted-foreground">
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
    </div>
  );
}

export default CourseItem;
