import CourseItem from "@/components/CourseItem";
import { getAllCourses } from "@/prisma/courseController";

function CoursesPage({courses}) {
  return (
    <div className="w-full mx-auto py-10">
      <div className="flex items-center flex-col text-center py-10 space-y-2">
        <span className="text-md font-bold">COURSES</span>
        <h1 className="text-2xl font-bold">Unlocking the Secrets to a Fulfilling Life</h1>
        <p>Discovering Inner Joy, Building Resilience, and Cultivating Meaningful Connections</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-2 gap-y-10">
        {courses?.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;

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
