import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to add background and shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mainMenu = [
    {
      icon: <i class="fa-solid fa-house text-3xl text-[#04cafb]"></i>,
      path: "/",
    },
    {
      label: "About Us",
      path: "/aboutus",
    },
    {
      label: "Products",
      path: "/products",
    },
    {
      label: "Principals",
      path: "/principals",
    },
    {
      label: "Customers",
      path: "/customers",
    },
    {
      label: "Career",
      path: "/career",
    },
  ];

  return (
    <div className="w-full px-5 overflow-hidden">
      {/* Desktop menu */}
      <div
        className={`w-full hidden md:block fixed top-0 left-0 z-50 px-5 py-2 transition-all duration-500 ease-in-out ${
          scrolled ? "bg-white shadow-md" : "bg-transparent text-white"
        }`}
        style={{
          transition: "background-color 0.5s ease, box-shadow 0.5s ease", // Adding transition to background color and shadow
        }}
      >
        <div className="max-w-screen-xl mx-auto lg:flex justify-between items-center">
          <div className="flex items-center gap-8">
            {mainMenu.slice(0, 3).map((item, index) => {
              return (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#04cafb] text-[20px] transition duration-300"
                      : "text-[20px] hover:text-[#04cafb] transition duration-300"
                  }
                >
                  {item.icon ? item.icon : null}
                  {item.label}
                </NavLink>
              );
            })}
          </div>
          <div>
            <Link to="/">
              <img
                src={`/images/logo-${scrolled ? "dark" : "light"}.png`}
                alt="logo-light.png"
                width={150}
                className="py-1"
              />
            </Link>
          </div>
          <div className="flex items-center gap-8">
            {mainMenu.slice(3, 5).map((item, index) => {
              return (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#04cafb] text-[20px] transition duration-300"
                      : "text-[20px] hover:text-[#04cafb] transition duration-300"
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
            <div className="relative group">
              <Link
                to="/contactus"
                className="inline-block px-8 py-3 bg-gradient-to-l from-[#04cafb] to-[#039dda] text-white rounded-md  shadow-lg transition-all duration-300 ease-in-out"
              >
                <span className="me-2">More</span>
                <i className="fa-solid fa-chevron-down"></i>
              </Link>

              <div className="absolute left-0 top-16 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 w-full lg:flex flex-col justify-center gap-3 bg-white text-black p-3 shadow-lg rounded-md z-10">
                <Link
                  to="/career"
                  className="hover:text-[#04cafb] transition-colors duration-300"
                >
                  Career
                </Link>
                <hr className="text-gray-300" />
                <Link
                  to="/news-letter"
                  className="hover:text-[#04cafb] transition-colors duration-300"
                >
                  News Letter
                </Link>
                <hr className="text-gray-300" />
                <Link
                  to="/contactus"
                  className="hover:text-[#04cafb] transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="w-full md:hidden fixed top-0 left-0 z-50 bg-white shadow-md">
        <div className="p-3 flex items-center justify-between lg:hidden">
          <div>
            <Link
              to="/contactus"
              className="inline-block p-2 text-[12px] bg-gradient-to-l from-[#04cafb] to-[#039dda] text-white rounded-md shadow-lg"
            >
              Get In Touch
            </Link>
          </div>
          <div>
            <Link to="/">
              <img
                src="/images/logo-dark.png"
                alt="logo-dark.png"
                className="h-12"
              />
            </Link>
          </div>
          <div className="border-2 border-[#04cafb] px-2 rounded-md">
            <i
              className={`fa-solid transition-all ease-out duration-500 mt-1 ${
                menuOpen ? "fa-xmark" : "fa-bars"
              } text-[25px] text-[#04cafb]`}
              onClick={() => setMenuOpen(!menuOpen)}
            ></i>
          </div>
        </div>

        {/* Mobile menu container with transition */}
        <div
          className={`flex flex-col gap-2 px-3 overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-[500px] pb-3" : "max-h-0"
          }`}
        >
          {mainMenu.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setMenuOpen(!menuOpen)}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#04cafb] text-[16px] font-semibold transition duration-300"
                    : "text-black text-[16px] font-[500] hover:text-[#04cafb] transition duration-300"
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
