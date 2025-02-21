import Link from "next/link";
import Feed from "@/components/Feed";

const Homepage = () => {
  return (
    <div className="">
      <div className="px-4 pt-4 flex justify-between text-textGray font-bold border-b-[1px] border-borderGray">
        <Link
          href={"/"}
          className="pb-3 flex items-center border-b-4 border-iconBlue"
        >
          For you
        </Link>
        <Link href={"/"} className="pb-3 flex items-center">
          Following
        </Link>
      </div>
      <Feed />
    </div>
  );
};

export default Homepage;
