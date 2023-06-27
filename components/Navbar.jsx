import Link from "next/link";
import Button from "./Button";
import { useSession } from "next-auth/react";

function Navbar() {
 const {data: session} = useSession()
  return (
    <div className="h-20 text-black flex items-center">
      <div className="wrapper flex justify-between">
        <Link className="text-2xl text-black font-bold" href="/">
          LearnCraft
        </Link>

        <div className="hidden md:flex gap-5">
          <Link
            href="/"
            className="link-item hover:text-black transition-color"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="link-item hover:text-black transition-color"
          >
            Courses
          </Link>
          <Link
            href="/about"
            className="link-item hover:text-black transition-color"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="link-item hover:text-black transition-color"
          >
            Contact
          </Link>
        </div>

        <div>
         {
          !session ? ( <Button
            href="/users/login"
            className="hover:text-black transition-color"
            placeholder="Login"
            color="secondary"
            size="default"
          />) : <Button href="/users/profile" placeholder="Profile"/>
         }
        </div>
      </div>
    </div>
  );
}

export default Navbar;
