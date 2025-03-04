import "react";
import Header from "./Header.jsx";
import { checkValidation } from "../utils/validate.jsx";
import { useRef, useState } from "react";

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
      password.current.value,
      name.current?.value
    );
    setErrorMessage(message);
    // console.log(message);
  };

  const handletoggle = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"
          alt="backgroudimage"
        />
      </div>
      <form
        onClick={(e) => e.preventDefault()}
        className="w-3/12 bg-black/70 text-white p-12 absolute my-36 mx-auto right-0 left-0 rounded-lg "
      >
        <h1 className="text-white font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className=" p-4 my-2 w-full bg-gray-800 "
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="email"
          className=" p-4 my-2 w-full bg-gray-800 "
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="bg-gray-800 p-4 my-4 w-full"
        />
        <p className="text-red-700 font-bold">{errorMessage}</p>
        <button
          className="p-4 my-6 text-white bg-red-700 w-full"
          onClick={handlebuttonclick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={handletoggle}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default login;
