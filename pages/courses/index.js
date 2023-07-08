import CourseItem from "@/components/CourseItem";
import SectionHeader from "@/components/SectionHeader";
import { getAllCourses } from "@/prisma/courseController";

function CoursesPage({ courses }) {
  return (
    <div className="w-full container mx-auto">
      <SectionHeader
        span={"Courses"}
        h1={"Explore Our Diverse Course Catalog"}
        p={
          "Dive into our diverse course catalog and embark on a journey of self-discovery and skill development. We offer a wide range of courses across various disciplines, carefully curated to cater to your unique interests and aspirations."
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
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
