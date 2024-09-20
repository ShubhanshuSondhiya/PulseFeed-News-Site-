/* eslint-disable no-unused-vars */
import bar from "../assets/bars-solid.svg";
import cross from "../assets/xmark-solid.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import Hamburger from "./Hamburger";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  return (
    <div>
    <div className="h-14 p-4 flex items-center justify-between bg-[#FFFFFF] text-black text-lg font-semibold shadow-xl">
      <div>
        <Link to="/">
          <img className="w-36" src={logo} alt="" />
        </Link>
      </div>
      <div>
        <ul
          className={`${
            openNavigation ? "hidden flex-row" : ""
          }hidden sm:flex sm:visible gap-4`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link
              to="/"
              className=" bg-slate-800 text-white p-2 rounded-md transition ease-in-out hover:bg-slate-300 hover:text-black text-base"
            >
              Get Started
            </Link>
          </li>
        </ul>
        <img
          onClick={toggleNavigation}
          className={`${openNavigation ? "hidden" : "sm:hidden"} w-[20px]`}
          src={bar}
          alt=""
        />
        <img
          onClick={toggleNavigation}
          className={`${
            openNavigation == false ? "hidden" : "sm:hidden"
          } w-[20px]`}
          src={cross}
          alt=""
        />
      </div>
      </div>
      <div className={`${openNavigation ? "" : "hidden"}`}>
        <Hamburger
          openNavigation={openNavigation}
          toggleNavigation={toggleNavigation}
        />
      </div>
    </div>
  );
};

export default Header;
