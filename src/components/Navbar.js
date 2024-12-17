import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import mail from "../assets/mail.png";
import linkedIn from "../assets/linkedin.png";
import github from "../assets/github.png";
import resume from "../assets/resume/Resume_Dhinesh_T_2024.pdf";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
        <img src={logo} alt="logo" className="w-40 h-auto object-contain" />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden sm:flex items-center gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

        {/* Social Icons and Button */}

        <div className="flex gap-4">
    <a href="https://www.linkedin.com/in/dhinesh-t-647a1a227/" className="group relative" target="_blank" rel="noopener noreferrer">
      <img
        src={linkedIn}
        alt="LinkedIn"
        className="w-6 h-6 transition-transform transform group-hover:scale-110"
      />
    </a>
    <a href="https://github.com/DhineshT99" className="group relative" target="_blank" rel="noopener noreferrer">
      <img
        src={github}
        alt="GitHub"
        className="w-6 h-6 transition-transform transform group-hover:scale-110"
      />
    </a>
    <a href="mailto:dhinesht008@gmail.com" className="group relative">
      <img
        src={mail}
        alt="Mail"
        className="w-6 h-6 transition-transform transform group-hover:scale-110"
      />
    </a>
  </div>
  <a href={resume} download >
  <button className="px-4 py-2 text-md font-bold text-white border border-white bg-transparent hover:bg-white hover:text-black transition-all rounded">
    Download CV
  </button>
</a>

       </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          {toggle && (
            <div className="p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl">
              <ul className="flex flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
