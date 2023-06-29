import { getSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FiLogOut } from "react-icons/fi";

function ProfilePage({ session }) {
  const router = useRouter();

  // LOGOUT
  const logoutWithGoogle = async () => {
    try {
      await signOut("google");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!session) {
      router.replace("/users/login");
    }
  }, [router, session]);

  // if not user return null
  if (!session) {
    return null;
  }

  return (
    <div className="container min-h-screen py-10 flex flex-col items-center space-y-4">
      <Image
        src={session.user.image}
        alt={session.user.name}
        height={100}
        width={100}
        className="h-20 w-20 rounded-full border-2 border-primary"
      />
      <h2 className="text-3xl font-semibold">Welcome, {session.user.name}</h2>
      <button
        onClick={logoutWithGoogle}
        className="flex gap-2 items-center bg-primary text-white py-3 px-6 rounded-lg hover:bg-secondary duration-300"
      >
        <FiLogOut />
        <span> Logout</span>
      </button>
    </div>
  );
}

export default ProfilePage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/users/login",
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
