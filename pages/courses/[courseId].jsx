import Button from "@/components/Button";
import { getCourse } from "@/prisma/courseController";
import { currencyConverter } from "@/utils/currencyConverter";
import { AiFillStar } from "react-icons/ai";

function CourseDetail({ course }) {
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
    <div className="py-10 min-h-screen">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-full h-[25rem] bg-no-repeat bg-cover bg-center"
      />

      <div className="mt-10 grid md:grid-cols-2 md:gap-10">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p>
            <span className="font-semibold">Instructor: </span>
            {instructor}
          </p>
          <p>{descriptions}</p>
          <p>
            {" "}
            <span className="font-semibold">Enrolled Students: </span>
            {students}
          </p>
        </div>

        <div className="space-y-2">
          <p>Durations: {durations}</p>
          <p className="flex items-center">
            {" "}
            <AiFillStar className="text-amber-600" />
            <span className="font-bold"> {rating}</span>
          </p>
          <p>
            <span className="font-bold">Price:  </span>
            {currencyConverter(price)}
          </p>
          <div className="mt-20">
            {" "}
            <Button href="/checkout" placeholder="Enroll Now" size="full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;

export const getServerSideProps = async ({ query }) => {
  const course = await getCourse(query.courseId);

  // convert time to string
  const updatedCourse = {
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  };
  console.log(updatedCourse);

  return {
    props: {
      course: updatedCourse,
    },
  };
};
