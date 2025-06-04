import { Link, NavLink } from "react-router-dom";
import { RiMenu5Fill } from "react-icons/ri";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import Logo from "../images/logo370.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = () => {
    setIsMenuOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  const HandleShowMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="font-poppins relative">
      <div className="container mx-auto px-5 sm:px-7 md:px-10 xl:px-20">
        <div className="flex items-center justify-between h-20 border-b">
          <Link to="/" className="rounded-full h-10 sm:h-12 flex items-center">
            <img src={Logo} className="h-full" alt="company name" />
            <span className="text-blue-900 capitalize text-base sm:text-lg font-bold border-l-2 border-blue-900 pl-2">
              tech blog
            </span>
          </Link>
          <nav className="hidden sm:flex items-center gap-x-5 capitalize">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red" : "text-blue-900"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="blog"
              className={({ isActive }) =>
                isActive ? "text-red" : "text-blue-900"
              }
            >
              blog
            </NavLink>
          </nav>
          <div
            className="sm:hidden cursor-pointer"
            ref={ref}
            onClick={HandleShowMenu}
          >
            <RiMenu5Fill className="w-6 h-6 text-blue-900" />
          </div>
          <MobileMenu
            isMenuOpen={isMenuOpen}
            handleClickOutside={handleClickOutside}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
