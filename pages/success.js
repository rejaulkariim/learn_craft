import Button from "@/components/Button";
import { AiFillCheckCircle } from "react-icons/ai";

function SuccessPage() {
  return (
    <div className="min-h-screen py-10">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-3xl flex items-center gap-2">
          <span className="text-emerald-500">
            <AiFillCheckCircle />
          </span>
          Congratulations you&apos;ve successfully enrolled{" "}
        </h1>
        <Button href="/orders" placeholder="Go to your order" />
      </div>
    </div>
  );
}

export default SuccessPage;
