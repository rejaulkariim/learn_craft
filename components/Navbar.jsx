import Link from "next/link";

function Navbar() {
  return (
    <div className="p-10 h-20 bg-black text-gray-300 flex items-center">
      <div className="wrapper flex justify-between">
        <Link className="text-white font-bold" href="/">
          LearnCraft
        </Link>

        <div className="flex gap-5">
          <Link href="/" className="hover:text-white transition-color">
            Home
          </Link>
          <Link href="/courses" className="hover:text-white transition-color">
            Courses
          </Link>
          <Link href="/about" className="hover:text-white transition-color">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition-color">
            Contact
          </Link>
        </div>

        <div>
          <Link href="/login" className="hover:text-white transition-color">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
