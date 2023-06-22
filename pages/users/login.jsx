import SectionHeader from "@/components/SectionHeader";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

function LoginPage({ session }) {
  const router = useRouter();

  const loginWithGoogle = async () => {
    try {
      await signIn("google");
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (session) {
      const destination = router.query.destination || "/users/profile";
      router.replace(destination);
    }
  }, [router, session]);

  if (session) {
    return null;
  }

  if (!session) {
    return (
      <div className="min-h-screen">
        <SectionHeader
          span={"Login"}
          h1={"Get Started With Google"}
          p={"Please login to continue with our features"}
        />
        <div className="flex justify-center">
          <button
            onClick={loginWithGoogle}
            className="flex gap-2 items-center bg-black text-white py-3 px-6 rounded-md hover:bg-gray-700 duration-300"
          >
            <FcGoogle />
            <span> Sign in with Google</span>
          </button>
        </div>
      </div>
    );
  }
}

export default LoginPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    const destination = context.query.destination || "/users/profile";

    return {
      redirect: {
        destination,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
