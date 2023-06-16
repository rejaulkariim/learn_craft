import Image from "next/image";

function CourseItem({ course }) {
  console.log(course);

  const {
    title,
    descriptions,
    durations,
    image,
    instructor,
    price,
    rating,
    students,
  } = course;
  return (
    <div className="w-3/4 shadow-md rounded-md">
      <div>
        <Image src={image} alt={title} width={300} height={300} />
      </div>
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="flex justify-between">
          <span>by {instructor}</span>
          <span>{durations}</span>
        </p>
        <p className="flex justify-between">
          <span>Enrolled Students: {students}</span>
          <span>{rating}</span>
        </p>
        <p>{descriptions}</p>
      </div>
    </div>
  );
}

export default CourseItem;
