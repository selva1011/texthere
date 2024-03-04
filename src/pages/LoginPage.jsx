import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { storeUserData } from "../services/Storage";
import { LoginApi } from "../services/api";
import { isAuthenticated, logout } from "../services/Auth";

const LoginPage = () => {
  const initialStateErrors = {
    email: { required: false },
    password: { required: false },
    custom_error: null,
  };

  const [errors, setErrors] = useState(initialStateErrors);

  const handlesubmit = (event) => {
    event.preventDefault();
    let hasError = false;
    if (inputs.email === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: { required: true },
      }));
      hasError = true;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: { required: false },
      }));
    }
    if (inputs.password === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: { required: true },
      }));
      hasError = true;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: { required: false },
      }));
    }

    if (!hasError) {
      LoginApi(inputs)
        .then((response) => {
          storeUserData(response.data.idToken);
          console.log(response.data.idToken);
        })
        .catch((err) => {
          if (err.code === "ERR_BAD_REQUEST") {
            setErrors((prevErrors) => ({
              ...prevErrors,
              custom_error: "Invalid Credentials.",
            }));
          } else {
            setErrors((prevErrors) => ({
              ...prevErrors,
              custom_error: null,
            }));
          }
        })
        .finally();
    }
  };

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  if (isAuthenticated()) {
    return <Navigate to="/home" />;
  }

  return (
    <section className=" w-full px-8 font-Outfit">
      <div className="h-screen flex items-center justify-center gap-12 max-md:flex-col">
        <div className="p-5  w-96">
          <div>
            <div className="flex flex-col">
              <h1 className=" text-6xl font-extrabold font-Righteous leading-0 tracking-widest text-sky-500">TEXTHERE</h1>
              <p className="text-2xl font-outfit font-medium">TextHere helps you connect 🔌 and share with the people 🫂 in your life.</p>
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-300 rounded-2xl p-5  w-96 bg-back-1">
          <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
            Sign In
          </h1>
          <form
            onSubmit={handlesubmit}
            action=""
            className="flex flex-col px-5 gap-4"
          >
            <div className="flex flex-col gap-1 font-bold">
              <input
                type="text"
                className=" text-black text-lg tracking-wide	 font-bold rounded-2xl w-full leading-10 px-4	"
                placeholder="Email"
                onChange={handleInput}
                name="email"
              />
              {errors.email.required ? (
                <span className="text-sm text-red-600">
                  * Email is required.
                </span>
              ) : null}
            </div>
            <div className="flex flex-col gap-1 font-bold ">
              <input
                type="password"
                className=" text-black text-lg tracking-wide	 font-bold rounded-2xl w-full leading-10 px-4	"
                placeholder="Password"
                onChange={handleInput}
                name="password"
              />
              {errors.password.required ? (
                <span className="text-sm text-red-600">
                  * Password is required.
                </span>
              ) : null}
            </div>
            <span className="">
              {errors.custom_error ? (
                <p className="text-sm text-red-600">{errors.custom_error}</p>
              ) : null}
            </span>
            <input
              type="submit"
              className="hover:bg-sky-400 bg-sky-500  text-white text-sm font-bold rounded-2xl w-full py-3 mt-3 border-b-4 border-b-sky-600 text-center"
              value="Log In"
            />
          </form>
          <div className="flex flex-col gap-1 font-bold py-2 justify-center items-center mt-1 ">
            <h3 className="text-black">Don't have an account?</h3>
            <Link
              className="hover:text-green-400 text-green-500"
              to="/register"
            >
              Create a profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
