import { cva } from "class-variance-authority";
import clsx from "clsx";

import Link from "next/link";

const buttonVariants = cva("rounded-md transition-colors durations-300", {
  variants: {
    color: {
      primary: "bg-primary text-white hover:bg-secondary duration-300",
      secondary: "bg-black text-white hover:bg-gray-700",
    },
    size: {
      default: "py-3 px-6",
      full: "py-3 w-full",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "default",
  },
});

function Button({ href, placeholder, color, size }) {
  return (
    <Link className={clsx(buttonVariants({ color, size }))} href={href}>
      {placeholder}
    </Link>
  );
}

export default Button;
