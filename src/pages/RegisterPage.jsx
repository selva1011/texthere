import React from "react";
import { useState } from "react";
import { RegisterApi } from "../services/api";
import { storeUserData } from "../services/Storage";
import { Link, Navigate } from "react-router-dom";
import { isAuthenticated, logout } from "../services/Auth";

const RegisterPage = () => {
  const initialStateErrors = {
    email: { required: false },
    password: { required: false },
    name: { required: false },
    custom_error: null,
  };

  const [errors, setErrors] = useState(initialStateErrors);

  const handlesubmit = (event) => {
    event.preventDefault();
    let hasError = false;
    if (inputs.name === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: { required: true },
      }));
      hasError = true;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: { required: false },
      }));
    }
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
      RegisterApi(inputs)
        .then((response) => {
          storeUserData(response.data.idToken);
        })
        .catch((err) => {
          if (err.response.data.error.message === "EMAIL_EXISTS") {
            setErrors((prevErrors) => ({
              ...prevErrors,
              custom_error: "Already this email has been registered!",
            }));
          } else if (
            String(err.response.data.error.message).includes("WEAK_PASSWORD")
          ) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              custom_error: "Password should be at least 6 characters!",
            }));
          }
          console.log(err.response.data.error.message);
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
    <section className=" w-full px-8 ">
      <div className="h-screen flex items-center justify-center ">
        <div className="border-2 border-gray-300 rounded-2xl p-5  w-96 bg-back-1">
          <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">CREATE A PROFILE</h1>
          <form
            onSubmit={handlesubmit}
            action=""
            className="flex flex-col px-5 gap-3 "
          >
            <div className="flex flex-col gap-1 font-bold ">
              <input
                type="text"
                className=" text-black text-lg tracking-wide	 font-bold rounded-2xl w-full leading-10 px-4	"
                placeholder="Name"
                onChange={handleInput}
                name="name"
              />
              {errors.name.required ? (
                <span className="text-sm text-red-600">* Name is required.</span>
              ) : null}
            </div>
            <div className="flex flex-col gap-1 font-bold ">
              <input
                type="text"
                className=" text-black text-lg tracking-wide	 font-bold rounded-2xl w-full leading-10 px-4	"
                placeholder="Email"
                onChange={handleInput}
                name="email"
              />
              {errors.email.required ? (
                <span className="text-sm text-red-600">* Email is required.</span>
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
              className="hover:bg-green-400 bg-green-500 text-white text-sm font-bold rounded-2xl w-full py-3 mt-2 border-b-4 border-b-green-600 text-center"
              value="Create Account"
            />
          </form>
          <div className="flex gap-1 font-bold py-2 justify-center items-center">
            <h1 className="text-black">Already have an account?</h1>
            <Link className="hover:text-sky-400 text-sky-500" to="/login">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
