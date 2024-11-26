import { useState } from "react";
import DarkToggle from "../UI/DarkToggle";
import Humburger from "../UI/Humburger";


const Nav = () => {
  /*----------State----------*/
  const [istoggled, setIsToggled] = useState(false);

  const menu = [
    {
      link: "about",
    },
    {
      link: "skills",
    },
    {
      link: "works",
    },
    {
      link: "contact",
    },
  ];
  
  /*----------RENDER----------*/
  const MenuLinks = menu.map((item, idx) => {
    return (
      <li
        key={idx}
        className="capitalize w-fit dark:hover:bg-gray-900 py-2 px-4 dark:transition dark:rounded-md cursor-pointer "
      >
        <a href={`#${item.link}`}>{item.link}</a>
      </li>
    );
  });

  return (
    <nav className="fixed top-0 z-50 w-full md:py-10">
      <div className="container mx-auto  relative flex  items-center justify-between md:justify-center space-x-5  md:w-fit md:dark:border md:dark:border-gray-900 py-1 backdrop-blur-md bg-white/80 dark:bg-black/70 px-5  md:rounded-2xl">
        <div id="logo">
          <a href="/" className="logo capitalize text-mainColor italic font-instrument text-3xl">
           ahmed
          </a>
        </div>

        {/* Large Screen menu */}
        <div className="menu hidden md:block">
          <ul className="flex items-center space-x-1">
            {/* Render Menu */}
            {MenuLinks}

            {/* Dark Mode */}
            <DarkToggle />
          </ul>
        </div>

        {/* Small Screen menu */}
        <div className="humberger block md:hidden">
          <Humburger setIsToggled={setIsToggled} isToggled={istoggled} />
        </div>

        <div
          className={`small-screen-menu block md:hidden absolute -left-5 top-14 backdrop-blur-md bg-white/80  dark:bg-black/70 px-4 w-full ${
            istoggled ? "h-[220px]" : "h-0"
          } overflow-hidden transition-all duration-900`}
        >
          <ul>
            {/* Render Menu */}
            {MenuLinks}

            {/* Dark Mode */}
            <div className="center-flex py-4">
              <DarkToggle />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
