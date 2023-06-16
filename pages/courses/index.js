import CourseItem from "@/components/CourseItem";
import { getAllCourses } from "@/prisma/courseController";

function CoursePage({courses}) {
  return (
    <div className="w-full mx-auto py-10">
      <div className="flex items-center flex-col text-center">
        <span>COURSES</span>
        <h1>Browse all course</h1>
        <p>lorem10</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses?.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CoursePage;

// get data using controller
export const getServerSideProps = async () => {
  const courses = await getAllCourses();

  // convert time to string 
  const updatedCourses = courses.map((course) => ({
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  }));

  return {
    props: {
      courses: updatedCourses,
    },
  };
};
