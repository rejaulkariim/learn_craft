import React from "react";
import Button from "./Button";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="py-10 md:py-20 bg-background">
      <div className="md:flex items-center flex-row-reverse">
        <div style={{ maxWidth: "100%", height: "42" }}>
          {/* <Lottie animationData={lottieFile} /> */}
          <Image
            src="https://images.pexels.com/photos/17210725/pexels-photo-17210725/free-photo-of-cappadocia-balloon-landscape-tourists.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="bg"
            height={500}
            width={500}
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold uppercase mb-4">
            Custom <span className="text-primary">Websites</span> &{" "}
            <span className="text-primary">AI Applications</span> Solutions.
          </h1>
          <p className="text-sm md:text-[15px] text-muted-foreground font-medium leading-6 mb-8">
            Experience customized websites and AI solutions that drive
            innovation. Our team designs captivating websites and develops AI
            applications to automate tasks and provide insights. Transform your
            business with our tailored solutions, blending AI power and
            exceptional web design.
          </p>

          <Button href="/contact" placeholder="Get Started" color="primary" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
