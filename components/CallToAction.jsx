import Button from "./Button";

export default function CallToAction() {
  return (
    <section className="bg-primary py-10 rounded-lg">
      <div className="container mx-auto text-center">
        <h2 className="text-white text-4xl font-bold mb-4">
          Join our course today!
        </h2>
        <p className="text-white text-lg mb-8">
          Start your learning journey and unlock new opportunities.
        </p>
        <Button href="/courses" placeholder="Enroll Now" color="secondary" />
      </div>
    </section>
  );
}
