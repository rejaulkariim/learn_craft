import CourseItem from "@/components/CourseItem";
import { getAllCourses } from "@/prisma/courseController";

function CoursePage({courses}) {
  return (
    <div className="w-full mx-auto py-10">
      <div className="flex items-center flex-col text-center py-10 space-y-2">
        <span className="text-md font-bold">COURSES</span>
        <h1 className="text-2xl font-bold">Unlocking the Secrets to a Fulfilling Life</h1>
        <p>Discovering Inner Joy, Building Resilience, and Cultivating Meaningful Connections</p>
      </div>

      <div className="flex flex-row gap-4">
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
