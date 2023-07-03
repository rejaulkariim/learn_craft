import Link from "next/link";

function Footer() {
  return (
    <footer className="mt-20">
      <div className="flex flex-col justify-around md:flex-row">
        <div className="">
          <h3 className="text-white text-lg font-semibold mb-2">Courses</h3>
          <ul className="text-gray-400">
            <li>
              <Link href="/" className="link-item">
                Course 1
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Course 2
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Course 3
              </Link>
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="text-white text-lg font-semibold mb-2">Resources</h3>
          <ul className="text-gray-400">
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
        </div>

        <div className="">
          <h3 className="text-white text-lg font-semibold mb-2">Support</h3>
          <ul className="text-gray-400">
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
        </div>

        <div className="mb-8 md:mb-0">
          <h3 className="text-white text-lg font-semibold mb-2">Connect</h3>
          <ul className="text-gray-400">
            <li>
              <Link href="/" className="link-item">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                Twitter
              </Link>
            </li>
            <li>
              <Link href="/" className="link-item">
                LinkedIn
              </Link>
            </li>
          </ul>
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
