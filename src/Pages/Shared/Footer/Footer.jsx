import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white ">
      <div className=" sm:flex justify-between items-center ">
        <div className="flex-1 bg-slate-600 py-10 text-center">
          <h1 className="text-2xl font-semibold">CONTACT US</h1>
          <p className="mt-4">
            123 ABS Street, Uni 21, Bangladesh <br /> +88 123456789 <br /> Mon - Fri: 08:00 -
            22:00 <br /> Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className="flex-1 bg-slate-700 py-14 text-center space-y-3 h-[224px]">
          <h1 className="text-2xl font-semibold">Follow US</h1>
          <p className="">Join us on social media</p>
          <div className="flex gap-5 justify-center items-center text-3xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="flex justify-center text-xs  bg-black text-white py-5">
        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
      </div>
    </div>
  );
};

export default Footer;
