import { testimonials } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "./SectionHeader";

function Testimonials() {
  return (
    <div className="py-10">
      <SectionHeader
        span="What students say"
        h1="Testimonials"
        p="Words of praise of our successful students"
      />
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 10 },
          600: { slidesPerView: 3.5, spaceBetween: 10 },
        }}
        modules={[Autoplay]}
        freeMode
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop
      >
        {testimonials.map((testimonial, i) => (
          <SwiperSlide key={i}>
            <div className="h-56 flex flex-col items-center justify-center space-y-2 border-2 rounded-2xl border-accent p-6 shadow-md">
              <div className="space-y-2">
                <p>{testimonial.feedback}</p>
                <div className="flex justify-between items-center ">
                  <div>
                    <p>
                      <span className="text-primary font-bold">@ </span>
                      {testimonial.name}
                    </p>
                    <p>
                      {testimonial.designation}{" "}
                      <span>{testimonial.company}</span>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
