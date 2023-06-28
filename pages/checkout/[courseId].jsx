import SectionHeader from "@/components/SectionHeader";
import { getCourse } from "@/prisma/courseController";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

// STRIPE PROMISE
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

function CheckoutPage({ course }) {
  const { data: session } = useSession();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    courseTitle: course.title,
    price: course.price,
  });

  useEffect(() => {
    if (session) {
      setFormData((prev) => ({
        ...prev,
        name: session.user.name,
        email: session.user.email,
      }));
    }
  }, [session, setFormData]);

  // CHECKOUT HANDLER
  const handleCheckout = async (e) => {
    e.preventDefault();
    const stript = await stripePromise;

    // SEND A POST REQUEST TO SERVER
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: [course],
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      address: formData.address,
      courseTitle: formData.courseTitle,
      courseId: course.id
    });

    // REDIRECT TO THE STRIPE PAYMENT
    const result = await stript.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <div className="py-10 min-h-screen">
      <SectionHeader
        span="Checkout"
        h1="Please provide your details"
        p="Please fill out checkout form"
      />

      <form
        onSubmit={handleCheckout}
        className="flex flex-col gap-5 mt-10 w-full md:w-[35rem] mx-auto"
      >
        <div className="form-control flex flex-col gap-2">
          <label htmlFor="name" className="cursor-pointer">
            Name
          </label>
          <input
            className="outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
            type="text"
            id="name"
            placeholder="John Doe"
            readOnly
            disabled
            value={formData.name}
          />
        </div>

        <div className="form-control flex flex-col gap-2">
          <label htmlFor="email" className="cursor-pointer">
            Email
          </label>
          <input
            className="outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
            type="email"
            id="email"
            placeholder="hello@gmail.com"
            readOnly
            disabled
            value={formData.email}
          />
        </div>

        <div className="form-control flex flex-col gap-2">
          <label htmlFor="tel" className="cursor-pointer">
            Phone Number
          </label>
          <input
            className="outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
            type="tel"
            id="mobile"
            required
            placeholder="+6018*******"
            value={formData.mobile}
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
          />
        </div>

        <div className="form-control flex flex-col gap-2">
          <label htmlFor="address" className="cursor-pointer">
            Address
          </label>
          <input
            className="outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
            type="text"
            id="address"
            required
            placeholder="Abc Street, NY"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        </div>

        <div className="form-control flex flex-col gap-2">
          <label htmlFor="courseTitle" className="cursor-pointer">
            Course Title
          </label>
          <input
            className="outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
            type="text"
            id="courseTitle"
            placeholder="Advance javascript course 2023"
            readOnly
            value={formData.courseTitle}
            disabled
          />
        </div>

        <div className="form-control flex flex-col gap-2">
          <label htmlFor="courseTitle" className="cursor-pointer">
            Course Price (USD)
          </label>
          <input
            className="outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
            type="text"
            id="courseTitle"
            placeholder="Advance javascript course 2023"
            readOnly
            value={formData.price}
            disabled
          />
        </div>
        <button
          role="link"
          type="submit"
          className="bg-black text-white rounded-lg py-4 w-full uppercase hover:bg-gray-700 duration-300"
        >
          Proceed to checkout
        </button>
      </form>
    </div>
  );
}

export default CheckoutPage;

// GET SINGLE COURSE
export const getServerSideProps = async ({ query }) => {
  const course = await getCourse(query.courseId);

  // CONVERT TIME TO STRING
  const updatedCourse = {
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  };

  return {
    props: {
      course: updatedCourse,
    },
  };
};
