/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Hamburger = ({ openNavigation }) => {
  return (
    <div className="sm:hidden">
      <hr className="h-[2px] bg-slate-500 ml-2 mr-2" />
      {openNavigation == true ? (
        <div className="w-full p-2 pl-3  bg-white ">
          <ul
            className={`${
              openNavigation ? "visible flex-row" : ""
            }hidden sm:flex gap-4 font-mono font-semibold text-lg `}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/">Register</Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Hamburger;
