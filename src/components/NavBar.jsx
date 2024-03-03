import { navLinks } from "../constants";
import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxInfoCircled, RxPlus, RxPerson, RxDrawingPin, RxGear } from "react-icons/rx";



const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [phone, setPhone] = useState(false);

  const opener = () => {
    setPhone(!phone);
  };

  const Scroll_handle = () => {
    if (window.screenY > 150) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", Scroll_handle);

  const GoTop = () => {
    window.scrollTo({
      top: (0, 0),
      behavior: "smooth",
    });
  };

  const Mobile_nav = (
    <>
      <div
        className="lg:hidden block absolute top-20 min-h-screen w-full left-0 right-0 bg-white ease-in-out	transition-all	 man"
        data-aos="fade-in"
      >
        <div>
          <div className="px-8 font-Sen font-semibold text-xl">Profile</div>
        </div>

        <ul className="flex flex-col gap-5 text-left px-8 font-Sen font-semibold text-2xl">
          <li className="flex gap-3 items-center"><RxPerson />Contacts</li>
          <li className="flex gap-3 items-center"><RxDrawingPin />Saved Messages</li>
          <li className="flex gap-3 items-center"><RxGear />Settings</li>
          
          <li className="flex gap-3 items-center"><RxPlus />Invite Friends</li>
          <li className="flex gap-3 items-center"><RxInfoCircled />TextHere Features</li>
        </ul>
      </div>
    </>
  );

  return (
    <header
      className={`padding-x py-4 fixed z-10 w-full h-20 bg-white drop-shadow-md ${
        window.screenY > 150 ? " drop-shadow-md" : ""
      }`}
    >
      <nav
        className={`${
          sticky ? ".nav-play" : ""
        } flex justify-between items-center max-container `}
      >
        <button
          className="hidden max-lg:block h-[25] w-[25] justify-center items-center"
          onClick={opener}
        >
          {phone ? <RiCloseLine size={30} /> : <HiMenuAlt1 size={30} />}
        </button>
        <div>{phone && Mobile_nav}</div>
        <div className="">
          <h1
            onClick={GoTop}
            className="flex justify-start items-center text-[2rem] m-0 cursor-pointer font-Urbanist font-extrabold max-sm:text-[1.8rem] max-sm:py-2 "
          >
            TextHere
          </h1>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
