import { logout } from "../services/Auth";
import { Navigate, useNavigate } from "react-router-dom";
import { FcSettings, FcComments, FcCalendar, FcSearch, FcShare } from "react-icons/fc";

const DashBoard = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    navigate("/");
  };

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
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
            <FcComments size={25}/>
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
            <FcShare size={25}/>
            <span className="group-hover:text-gray-700">Invite Friends</span>
          </li>
          <li className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <FcSettings size={25}/>
            <span className="group-hover:text-gray-700">Settings</span>
          </li>
        </ul>
      </div>

      <div
        className="px-6 -mx-6 pt-4 flex justify-between items-center border-t hover:cursor-pointer"
        onClick={logoutUser}
      >
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default DashBoard;
