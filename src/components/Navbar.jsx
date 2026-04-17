import Image from "next/image";
import Link from "next/link";
import { ImStatsDots } from "react-icons/im";
import { IoMdTime } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm ">
        <Link className="flex-1" href="/">
          <Image src="/images/logo.png" width={200} height={200} alt=""></Image>
        </Link>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 flex gap-4  text-lg ">
            <Link className="flex items-center gap-1" href="/">
              {" "}
              <RiHome2Line className="w-6"/>
              <span> Home</span>
            </Link>
            <Link className="flex items-center gap-1" href="/timeline">
              <IoMdTime className="w-6"/>
              <span>Timeline</span>
            </Link>
            <Link className="flex items-center gap-1" href="/stats">
              <ImStatsDots className="w-6"/>
              <span>stats</span>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
