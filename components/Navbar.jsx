import Link from "next/link";
import Button from "./Button";
import { useSession } from "next-auth/react";
import ModeToggle from "./ModeToggle";

function Navbar() {
  const { data: session } = useSession();
  return (
    <div className="h-20 text-black flex items-center">
      <div className="wrapper flex justify-between">
        <Link className="link-item text-2xl text-foreground font-bold" href="/">
          LearnCraft
        </Link>

        <div className="hidden md:flex gap-5">
          <Link
            href="/"
            className="link-item text-foreground hover:text-primary transition-color"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="link-item text-foreground hover:text-primary transition-color"
          >
            Courses
          </Link>
          <Link
            href="/about"
            className="link-item text-foreground hover:text-primary transition-color"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="link-item text-foreground hover:text-primary transition-color"
          >
            Contact
          </Link>
          {session && (
            <Link
              href="/orders"
              className="link-item text-foreground hover:text-primary transition-color"
            >
              Orders
            </Link>
          )}
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          {!session ? (
            <Button
              href="/users/login"
              className="hover:text-black transition-color"
              placeholder="Login"
              color="secondary"
              size="default"
            />
          ) : (
            <Button href="/users/profile" placeholder="Profile" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
