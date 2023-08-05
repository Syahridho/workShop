import { NavLink } from "react-router-dom";
import moon from "./../../public/moon.png";

const Navigation = () => {
  return (
    <div
      id="nav"
      className="flex justify-between items-center px-24 h-[10vh] shadow sticky top-0 bg-primary z-10"
    >
      <h1 className="font-bold">Syahridho</h1>
      <ul className="flex">
        <li className="link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="link">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="link">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <ul className="flex hover:pb-2 transition-all">
        <li>
          <button className="px-4 py-1 pb-2 border border-2 border-text rounded shadow-sm hover:shadow-lg ">
            <img src={moon} alt="" className="w-4 mt-1 -rotate-[15deg]" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
