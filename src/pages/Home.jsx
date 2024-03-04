import { logout } from "../services/Auth";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br">
      <div className="w-full max-w-lg px-10 py-8 mx-auto bg-gray-100 rounded-2xl shadow-xl">
        <div className="max-w-md mx-auto space-y-6">
          <p className="text-gray-600 text-4xl">WELCOME BACK!</p>

          <div className="bg-yellow-200 text-yellow-800  flex items-center justify-center rounded-2xl">
            <div className="text-center p-3">
              <div className="text-6xl">&#9888;</div>
              <h1 className="text-4xl font-extrabold">Under Construction</h1>
              <p className="mt-4 text-lg">
                We're working on something awesome! Please check back later.
              </p>
            </div>
          </div>

          <button
            className="block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-teal-400 rounded-2xl hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80  border-b-teal-600 border-b-4"
            onClick={logoutUser}
          >
            LOG OUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
