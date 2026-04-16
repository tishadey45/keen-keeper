import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-green-950 text-primary-content p-10">
        <aside>
          <Image
            src="/images/logo-xl.png"
            width={400}
            height={400}
            alt=""
          ></Image>
          <p className="font-bold">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <p className="text-2xl pt-4">Social Links</p>
        </aside>
        <nav>
          <div className="flex justify-start space-x-3 pb-2">
            <a
              rel="noopener noreferrer"
              href="#"
              title="Instagram"
              className="flex items-center justify-center w-10 h-10 text-white transition rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:scale-110"
            >
              <LuInstagram size={18} />
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              title="Facebook"
              className="flex items-center justify-center w-10 h-10 text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
            >
              <ImFacebook2 size={18} />
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              title="TwitterX"
              className="flex items-center justify-center w-10 h-10 text-black transition rounded-full bg-base-300 hover:bg-black hover:text-white"
            >
              <BsTwitterX size={18} />
            </a>
          </div>
           <div className="w-full border-t border-gray-400 my-6"></div>
          <div className="flex justify-between px-24 pt-4 text-gray-300 gap-90">
            © 2026 KeenKeeper. All rights reserved.
            <div className="flex gap-4">
              <ul>
                <li>privacy policy</li>
              </ul>
              <ul>
                <li>Terms of service</li>
              </ul>
              <ul>
                <li>cookies</li>
              </ul>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
