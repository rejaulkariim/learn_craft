import prisma from "./prisma";

// GET all courses
export const getAllCourses = async () => {
  const courses = await prisma.course.findMany({});

  return courses;
};

// GET a single course
export const course = async (id) => {
  const course = await prisma.course.findUnique({
    where: { id },
  });

  return course;
};
