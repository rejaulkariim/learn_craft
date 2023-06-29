import { getCourse } from "@/prisma/courseController";

function CourseVideo({ course }) {
  return <div className="min-h-screen">{course.title}</div>;
}

export default CourseVideo;

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
