import CourseItem from "@/components/CourseItem";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import { getAllCourses } from "@/prisma/courseController";

function CoursesPage({ courses }) {
  return (
    <div className="w-full mx-auto py-20">
      <HeroSection/>
      <SectionHeader
        span={"Courses"}
        h1={"Unlocking the Secrets to a Fulfilling Life"}
        p={
          " Discovering Inner Joy, Building Resilience, and Cultivating Meaningful Connections"
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3  gap-2 gap-y-10 ">
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
