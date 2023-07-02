import SectionHeader from "../SectionHeader";
import { testimonials } from "@/constants";
import FeedbackCard from "./FeedbackCard";

function Testimonials() {
  return (
    <div className="py-10">
      <SectionHeader
        span="What students say"
        h1="Testimonials"
        p="Words of praise of our successful students"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((testimonial, i) => (
          <FeedbackCard key={i} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
