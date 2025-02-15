import "react";
import Header from "./Header.jsx";

const login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"
          alt="backgroudimage"
        />
      </div>
      <form className="w-3/12 bg-black opacity-80 p-12 absolute my-36 mx-auto right-0 left-0">
        <h1 className="text-white font-semibold text-3xl py-4">Sign In</h1>
        <input
          type="email"
          placeholder="email"
          className="bg-white p-2 my-2 w-full"
        />
        <input
          type="password"
          placeholder="password"
          className="bg-white p-2 my-2 w-full"
        />
        <button className="p-4 my-4 text-white bg-red-700 w-full">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default login;
