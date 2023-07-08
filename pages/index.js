import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import { getAllCourses } from "@/prisma/courseController";
import CoursesPage from "./courses";
import CallToAction from "@/components/CallToAction";

function HomePage({ courses }) {
  return (
    <div>
      <HeroSection />
      <CoursesPage courses={courses} />
      <div className="py-10">
        <Testimonials />
      </div>
      <div className="py-10">
        <CallToAction />
      </div>
    </div>
  );
}

export default HomePage;

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
