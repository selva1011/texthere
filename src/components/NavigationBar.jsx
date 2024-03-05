import React from "react";
import {
  FcSettings,
  FcComments,
  FcCalendar,
  FcSearch,
  FcShare,
} from "react-icons/fc";
import { MdLogout } from "react-icons/md";

const NavigationBar = () => {
  const MobileNav = () => {
    <>
      <div>selva</div>
    </>;
  };

  return (
    <header>
      <nav className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-gray-100 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            <h2 className="text-3xl font-semibold	text-sky-500 font-Righteous tracking-widest text-center">
              TextHere
            </h2>
          </div>

          <div className="mt-8 text-center">
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              Selva Ganapathi
            </h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            <li className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
              <FcComments size={25} />
              <span className="-mr-1 font-medium">Chats</span>
            </li>
            <li className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
              <FcCalendar size={25} />
              <span className="group-hover:text-gray-700">Calender</span>
            </li>
            <li className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
              <FcSearch size={25} />
              <span className="group-hover:text-gray-700">Search</span>
            </li>
            <li className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
              <FcShare size={25} />
              <span className="group-hover:text-gray-700">Invite Friends</span>
            </li>
            <li className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
              <FcSettings size={25} />
              <span className="group-hover:text-gray-700">Settings</span>
            </li>
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t hover:cursor-pointer">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <MdLogout size={25} />
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </nav>
      
    </header>
  );
};

export default NavigationBar;
