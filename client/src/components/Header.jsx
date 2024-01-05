import React from "react";
import {
  FaGoogle,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r shadow-md h-[120px] xl:max-h-[80px] z-40">
      <div className="flex xl:flex-row flex-col justify-between items-center max-w-6xl mx-auto p-4 ">
        <div>
          <h1 className="cursor-pointer select-none">
            <span className="text-white font-bold text-4xl ">P</span>
            <span className="text-blue-500 font-bold text-4xl">ort</span>
            <span className="text-blue-500 font-bold text-2xl">folio</span>
          </h1>
        </div>
        <ul className="text-white flex gap-x-5 cursor-pointer z-50 sm:z-50  absolute pr-28 sm:pr-72 right-0 xl:group-hover:flex text-[23px] mt-12 xl:mt-5">
          <li>
            <FaGoogle />
          </li>
          <Link
            to={
              "https://www.linkedin.com/in/ankit-kumar-rai-5a8182206/?originalSubdomain=in"
            }
          >
            <FaLinkedin />
          </Link>

          <Link to={"https://github.com/ankitkumar62"}>
            <FaGithub />
          </Link>

          <Link to={"https://www.instagram.com/a_n_k_i_t_23_o7/"}>
            <FaInstagram />
          </Link>
          <li>
            <FaFacebookF />
          </li>
        </ul>
      </div>
    </header>
  );
}
