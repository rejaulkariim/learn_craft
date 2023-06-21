import SectionHeader from "@/components/SectionHeader";
import { FcGoogle } from "react-icons/fc";

function LoginPage() {
  return (
    <div className="min-h-screen">
      <SectionHeader
        span={"Login"}
        h1={"Get Started With Google"}
        p={"Please login to continue with our features"}
      />
      <div className="flex justify-center">
        <button className="flex gap-2 items-center bg-black text-white py-3 px-6 rounded-md hover:bg-gray-700 duration-300">
          <FcGoogle />
          <span> Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
