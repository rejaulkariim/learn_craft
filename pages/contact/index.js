import SectionHeader from "@/components/SectionHeader";

function ContactPage() {
  return (
    <div className="py-10 min-h-screen">
      <SectionHeader
        span="contact"
        h1="Let's chat about your dreams"
        p="You can reach us anytime at karimscoding@gmail.com"
      />

      <div>
        <form className="flex flex-col gap-5 w-full md:w-[35rem] mx-auto">
          <div className="form-control flex flex-col gap-2">
            <label htmlFor="name" className="cursor-pointer">
              Name
            </label>
            <input
              className="outline-none border border-primary py-3 px-4 rounded-lg focus:ring-1 focus:ring-primary bg-transparent"
              type="text"
              id="name"
              placeholder="John Doe"
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label htmlFor="email" className="cursor-pointer">
              Email
            </label>
            <input
              className="outline-none border border-primary py-3 px-4 rounded-lg focus:ring-1 focus:ring-primary bg-transparent"
              type="email"
              id="email"
              placeholder="karimscoding@gmail.com"
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label htmlFor="address" className="cursor-pointer">
              Message
            </label>
            <input
              type="textarea"
              className="h-52 outline-none border border-primary py-3 px-4 rounded-lg focus:ring-1 focus:ring-primary bg-transparent"
            />
          </div>

          <button
            type="submit"
            className="py-4 rounded-lg bg-primary text-white hover:bg-secondary duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
