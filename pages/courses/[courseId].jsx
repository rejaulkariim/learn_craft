import { getCourse } from "@/prisma/courseController";
import { currencyConverter } from "@/utils/currencyConverter";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { AiFillStar } from "react-icons/ai";

function CourseDetail({ course }) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleEnroll = () => {
    if (session) {
      router.push(`/checkout/${id}`);
    } else {
      router.push(`/users/login?destination=/checkout/${id}`);
    }
  };

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
        className="w-full h-[30rem] rounded-lg bg-no-repeat bg-cover bg-center"
      />

      <div className="mt-10 grid md:grid-cols-2 md:gap-10">
        <div className="space-y-2">
          <h2 className="text-3xl text-foreground font-bold">{title}</h2>
          <p>
            <span className=" text-foreground font-semibold">Instructor: </span>
            {instructor}
          </p>
          <p>
            <span className=" text-foreground font-bold">
              Course Descriptions:
            </span>{" "}
            {descriptions}
          </p>
          <p>
            {" "}
            <span className=" text-foreground font-semibold">
              Enrolled Students:{" "}
            </span>
            {students}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-foreground">
            <span className="font-bold">Durations:</span> {durations}
          </p>
          <p className="flex items-center">
            <AiFillStar className="text-amber-500 " />
            <span className="font-bold"> {rating} </span>
          </p>
          <p className="text-2xl font-bold">
            <span>Price: </span>
            {currencyConverter(price)}
          </p>

          <div className="mt-24">
            <button
              onClick={handleEnroll}
              className="py-3 w-full rounded-lg bg-primary text-white hover:bg-secondary duration-300"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;

// GET single course
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
