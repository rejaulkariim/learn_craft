import { getSession, signOut } from "next-auth/react";
import Image from "next/image";
import { FiLogOut } from "react-icons/fi";

function ProfilePage({ session }) {
  const logoutWithGoogle = async () => {
    try {
      await signOut("google");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!session) {
    return null;
  }

  return (
    <div className="container min-h-screen py-10 flex flex-col items-center">
      <Image
        src={session.user.image}
        alt={session.user.name}
        height={100}
        width={100}
        className="h-20 w-20 rounded-full border-2 border-black"
      />
      <h2 className="text-2xl font-semibold">Welcome, {session.user.name}</h2>
      <button
        onClick={logoutWithGoogle}
        className="flex gap-2 items-center bg-black text-white py-3 px-6 rounded-md hover:bg-gray-700 duration-300"
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

  return {
    props: {
      session,
    },
  };
};
