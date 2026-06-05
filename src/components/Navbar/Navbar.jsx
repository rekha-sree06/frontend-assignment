import { useState, useEffect } from "react";
import "./Navbar.css";

const navItems = [
    "Home",
    "Studio",
    "Services",
    "Contact",
    "FAQs",
  ];

const navLinkClass = "inline-block hover:scale-105 transition-all duration-300 font-['Satoshi'] text-[#000000]"

function Navbar() {
  const [active, setActive] = useState("Home");
  const line="block w-[25px] border-t-[2px] border-black";

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems;

      let current = "Home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const sectionTop = section.offsetTop - 200;

          if (window.scrollY >= sectionTop) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="main-nav"
      className="
        fixed
        top-2
        left-1/2
        -translate-x-1/2

        w-full
        max-w-[1490px]

        lg:h-[70px]

        z-50

        flex
        justify-between
        items-center

        px-4
        sm:px-8
        lg:px-24

        py-2
        sm:py-3
        md:py-4
        lg:py-5

        bg-[#FFFFFF]/60
        backdrop-blur-xl

        border border-white/10
      "
    >

      {/* Landing page */}
      <h2
        className={`
          text-[10px]
          sm:text-[15px]
          md:text-[20px]
          lg:text-[26px]

          relative
          left-2
          sm:left-3
          md:left-4
          lg:left-5
          leading-none
          transition-all duration-300
        `}
      >
        Elementum
      </h2>

      {/* Navbar */}
      <ul
        id="right-nav"
        className="
          flex

          gap-5
          md:gap-6
          lg:gap-15

          items-center

          text-[6px]
          sm:text-[10px]
          md:text-lg
          lg:text-[15px]
        "
      >

        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={`
                ${navLinkClass}
                ${
                  active === item
                    ? "scale-110 font-semibold"
                    : ""
                }
              `}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Menu-icon */}
      <div
        className="
          flex
          flex-col
          gap-[2px]
          sm:gap-[3px]
          md:gap-[4px]
          lg:gap-[5px]
          cursor-pointer
          relative
          right-2
          sm:right-3
          md:right-4
          lg:right-5
        "
      >
        <span
          className={line}
        ></span>

        <span
          className={line}
        ></span>
      </div>

    </nav>
  );
}

export default Navbar;