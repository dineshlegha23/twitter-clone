import Image from "next/image";
import Link from "next/link";

const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* LOGO MENU BUTTON */}
      <div>
        <Link href={"/"}>
          <Image src={"icons/logo.svg"} alt="logo" width={24} height={24} />
        </Link>
      </div>

      {/* USER */}
      <div></div>
    </div>
  );
};

export default LeftBar;
