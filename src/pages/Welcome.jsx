import { Link, Navigate } from "react-router-dom";

const Welcome = () => {
  return (
    <section className="bg-back-1 w-full px-8">
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col max-md:text-center gap-2 text-center p-5" >
          <h1 className=" text-6xl font-extrabold font-Righteous leading-0 tracking-widest text-sky-500">
            TEXTHERE
          </h1>
          <h5 className="text-4xl font-outfit font-medium ">Join today 🚀</h5>
          <p className="text-2xl font-outfit font-medium ">
            TextHere helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="border-2 border-gray-300 rounded-2xl p-5 w-96 text-center">
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
