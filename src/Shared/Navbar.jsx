import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icon/logo.png";
const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];
const Navbar = () => {
  //Dropdown options
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={` flex items-center`}>
      <div className="py-6 container mx-auto px-2">
        <span className="scroll-watcher"></span>
        <div className="flex justify-between">
          <div className="lg:hidden">
            <div className="flex">
              <Link to="/">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src={logo}
                  alt="Green Bangla"
                />
              </Link>
            </div>
          </div>

          <div className="block lg:hidden pl-2 transition">
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                className=" py-2 text-light transition"
                onClick={toggleDropdown}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute right-0 z-10 mt-1 w-48 py-2 text-left text-sm text-gray-700 bg-primary rounded-lg shadow ">
                  <div className="py-1 flex flex-col gap-6 pl-4">
                    {navItems.map((item, idx) => (
                      <a
                        className="text-white"
                        key={idx}
                        onClick={handleOptionClick}
                        href={item.link}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="hidden lg:flex items-center justify-between">
            <div>
              <Link to="/">
                <img
                  className="lg:block hidden h-14 w-auto"
                  src={logo}
                  alt="Green Bangla"
                />
              </Link>
            </div>
            <div className="text-primary flex gap-10">
              {navItems.map((item, idx) => (
                <a
                  className=" text-light hover:text-primary duration-300"
                  key={idx}
                  onClick={handleOptionClick}
                  href={item.link}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
