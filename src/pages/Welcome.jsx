import { Link, Navigate } from "react-router-dom";

const Welcome = () => {
  return (
    <section className="bg-back-1 w-full px-8">
      <div className="h-screen flex items-center justify-center">
        <div className="border-2 border-gray-300 rounded-2xl p-5 w-96">
          <div className="text-2xl font-bold text-gray-700">Welcome</div>

          <Link to="/register">
            <div className="hover:bg-green-400 bg-green-500  text-white text-sm font-bold rounded-2xl w-full py-3 mt-7 border-b-4 border-b-green-600 text-center hover:cursor-pointer">
              CREATE A PROFILE
            </div>
          </Link>
          <Link to="/login">
            <div className="hover:bg-sky-400 bg-sky-500  text-white text-sm font-bold rounded-2xl w-full py-3 mt-3 border-b-4 border-b-sky-600 text-center hover:cursor-pointer">
              SIGN IN
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
