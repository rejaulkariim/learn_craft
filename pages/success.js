import { useEffect } from "react";
import { useRouter } from "next/router";
import { getSession} from "next-auth/react";
import Button from "@/components/Button";
import { AiFillCheckCircle } from "react-icons/ai";

function SuccessPage({session}) {
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.replace("user/login");
    }
  }, [session, router]);

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen py-10">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-3xl flex items-center gap-2">
          <span className="text-emerald-500">
            <AiFillCheckCircle />
          </span>
          Congratulations you&apos;ve successfully enrolled{" "}
        </h1>
        <Button href="/orders" placeholder="Go to your order" />
      </div>
    </div>
  );
}

export default SuccessPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "users/login",
        permanent: true,
      },
    };
  }

  return{
    props:{
      session,
    }
  }
};
