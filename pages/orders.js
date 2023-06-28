import OrderCard from "@/components/OrderCard";
import prisma from "@/prisma/prisma";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

function OrdersPage({ session, customer }) {
  console.log(customer);
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.replace("/user/login");
    }
  }, [router, session]);

  return (
    <div className="py-10 min-h-screen">
      <h2 className="text-3xl mb-5">
        You enrolled: {customer.orders.length} course
        {customer.orders.length > 1 ? "s" : ""}
      </h2>

      <div className="flex flex-wrap gap-10">
        {customer.orders.map((course) => (
          <OrderCard key={course.id} course={course}/>
        ))}
      </div>
    </div>
  );
}

export default OrdersPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  // FIND CUSTOMER
  const customer = await prisma.user.findUnique({
    where: {
      email: session?.user?.email,
    },
    include: {
      orders: true,
    },
  });

  const updatedCustomer = {
    ...customer,
    updatedAt: customer.updatedAt.toString(),
    createdAt: customer.createdAt.toString(),

    orders: customer.orders.map((order) => ({
      ...order,
      updatedAt: order.updatedAt.toString(),
      createdAt: order.createdAt.toString(),
    })),
  };

  if (!session) {
    return {
      redirect: {
        destination: "users/login",
        permanent: true,
      },
    };
  }

  return {
    props: {
      session,
      customer: updatedCustomer,
    },
  };
};
