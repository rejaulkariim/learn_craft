import { getCourse } from "@/prisma/courseController";

function CourseVideo({ courseVideos }) {
  return (
    <div className="py-10 min-h-screen">
      <div className="grid grid-cols-3 gap-4">
        {courseVideos.map((video) => (
          <div key={video.id}>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${video.url}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseVideo;

// GET single course
export const getServerSideProps = async ({ query }) => {
  const courseId = query.courseId;

  // FIND COURSE
  const course = await getCourse(courseId);

  if (!course) {
    return {
      notFound: true,
    };
  }

  // FIND COURSE VIDEOS
  const courseVideos = await prisma.video.findMany({
    where: {
      courseId: courseId,
    },
  });

  return {
    props: {
      courseVideos,
    },
  };
};
