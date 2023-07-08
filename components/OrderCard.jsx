import { currencyConverter } from "@/utils/currencyConverter";
import Button from "./Button";

function OrderCard({ course }) {
  return (
    <div
      key={course.id}
      className="p-5 shadow-md border-2 border-accent rounded-lg space-y-3"
    >
      <h2 className="text-2xl">{course.courseTitle}</h2>
      <p className="text-lg">Amount: {currencyConverter(course.amountTotal)}</p>
      <div className="py-10">
        <Button
          href={`/users/dashboard/courses/${course.courseId}`}
          placeholder={"Start Learning"}
        ></Button>
      </div>
    </div>
  );
}

export default OrderCard;
