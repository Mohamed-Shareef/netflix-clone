import "react";
import Header from "./Header.jsx";
import { checkValidation } from "../utils/validate.jsx";
import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isSignInForm, setisSignInForm] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [errorMessage, setErrorMessage] = useState(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const email = useRef(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const password = useRef(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const name = useRef(null);

  const handlebuttonclick = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value
      // name.current?.value
    );
    setErrorMessage(message);

    if (message) return;

    // sign Up

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user, "shareef");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handletoggle = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div className="relative min-h-screen">
      <Header />
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"
          alt="background image"
        />
      </div>

      {/* Form Container */}
      <div className="flex justify-center items-center min-h-screen relative z-10">
        <form
          onClick={(e) => e.preventDefault()}
          className=" sm:w-10/12 md:w-4/12 lg:w-3/12 xl:w-3/12 bg-black/70 text-white p-8 rounded-lg shadow-lg"
        >
          <h1 className="text-white font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              className="p-4 my-2 w-full bg-gray-800 rounded-md"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email"
            className="p-4 my-2 w-full bg-gray-800 rounded-md"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="bg-gray-800 p-4 my-4 w-full rounded-md"
          />
          <p className="text-red-700 font-bold">{errorMessage}</p>
          <button
            className="p-4 my-6 text-white bg-red-700 w-full rounded-md hover:bg-red-800"
            onClick={handlebuttonclick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="cursor-pointer text-gray-300 hover:underline"
            onClick={handletoggle}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already Registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default login;
