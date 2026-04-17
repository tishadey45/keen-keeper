import Image from "next/image";
import Link from "next/link";
import { ImStatsDots } from "react-icons/im";
import { IoMdTime } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      
      {/* logo */}
      <Link className="flex-1" href="/">
        <Image
          src="/images/logo.png"
          width={150}
          height={150}
          alt=""
          className="w-32 md:w-40"
        />
      </Link>

      {/* menu */}
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 flex gap-2 md:gap-4 text-sm md:text-lg">

          <Link className="flex items-center gap-1" href="/">
            <RiHome2Line className="w-5 md:w-6" />
            <span className="hidden sm:inline">Home</span>
          </Link>

          <Link className="flex items-center gap-1" href="/timeline">
            <IoMdTime className="w-5 md:w-6" />
            <span className="hidden sm:inline">Timeline</span>
          </Link>

          <Link className="flex items-center gap-1" href="/stats">
            <ImStatsDots className="w-5 md:w-6" />
            <span className="hidden sm:inline">Stats</span>
          </Link>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;