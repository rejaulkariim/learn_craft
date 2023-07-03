import CallToAction from "@/components/CallToAction";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import { getAllCourses } from "@/prisma/courseController";
import CoursesPage from "../courses";

function HomePage({ courses }) {
  return (
    <main>
      <HeroSection />
      <CoursesPage courses={courses} />
      <Testimonials />
      <div className="py-10">
        <CallToAction />
      </div>
    </main>
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
