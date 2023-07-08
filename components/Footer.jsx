import Link from "next/link";

const menuItem = (
  <>
    <ul className="text-foreground">
      <li>
        <Link href="/" className="link-item">
          Home
        </Link>
      </li>
      <li>
        <Link href="/" className="link-item">
          Course
        </Link>
      </li>
      <li>
        <Link href="/" className="link-item">
          Order
        </Link>
      </li>
    </ul>
  </>
);

const menuItem2 = (
  <>
    <ul className="text-foreground">
      <li>
        <Link href="/" className="link-item">
          Blog
        </Link>
      </li>
      <li>
        <Link href="/" className="link-item">
          Ebooks
        </Link>
      </li>
      <li>
        <Link href="/" className="link-item">
          Webinars
        </Link>
      </li>
    </ul>
  </>
);

const menuItem3 = (
  <>
    <ul className="text-foreground">
      <li>
        <Link href="/" className="link-item">
          FAQs
        </Link>
      </li>
      <li>
        <Link href="/" className="link-item">
          Contact Us
        </Link>
      </li>
      <li>
        <Link href="/" className="link-item">
          Terms of Service
        </Link>
      </li>
    </ul>
  </>
);

const menuItem4 = (
  <>
    <li>
      <Link href="/" className="link-item">
        Linkedin
      </Link>
    </li>
    <li>
      <Link href="/" className="link-item">
        Twitter
      </Link>
    </li>
    <li>
      <Link href="/" className="link-item mb-2">
        Facebook
      </Link>
    </li>
  </>
);

function Footer() {
  return (
    <footer className="mt-20">
      <div className="my-20 flex flex-col justify-center md:justify-around md:flex-row">
        <div className="mb-8 md:mb-0">
          <h3 className="text-foreground text-lg font-semibold mb-2">
            Courses
          </h3>
          <ul className="text-foreground">{menuItem}</ul>
        </div>

        <div className="mb-8 md:mb-0">
          <h3 className="text-foreground text-lg font-semibold mb-2">
            Resources
          </h3>
          <ul className="text-foreground">{menuItem2}</ul>
        </div>

        <div className="mb-8 md:mb-0">
          <h3 className="text-foreground text-lg font-semibold mb-2">
            Support
          </h3>
          <ul className="text-foreground">{menuItem3}</ul>
        </div>

        <div className="mb-8 md:mb-0">
          <h3 className="text-foreground text-lg font-semibold mb-2">
            Connect
          </h3>
          <ul className="text-foreground">{menuItem4}</ul>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <p className="text-foreground">
          &copy; {new Date().getFullYear()}, LearnCraft all rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
