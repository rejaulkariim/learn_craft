import Image from "next/image";





function FeedbackCard({ testimonial }) {
  return (
    <div className="w-[29rem] mx-auto bg-muted shadow-lg p-10 rounded-lg ">
      <div className="space-y-2">
        <p>{testimonial.feedback}</p>

        <div className="flex justify-between items-center ">
          <div>
            <p>
              <span className="text-primary font-bold">@ </span>
              {testimonial.name}
            </p>
            <p>
              {testimonial.designation} <span>{testimonial.company}</span>
            </p>
          </div>

          <div>
            <Image
              src={testimonial.image}
              alt={`${testimonial.name}`}
              className="w-10 h-10 rounded-full object-cover"
              height={40}
              width={40}
            />
          </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default FeedbackCard;
