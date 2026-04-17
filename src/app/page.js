import Banner from "@/components/Banner";
import Friend from "@/components/Friend";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 ">
      <Banner />
      <div className="">
        <Friend />
      </div>
    </div>
  );
}
