import "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../utils/firebase";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browse />,
    },
  ]);

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {

  //   const{uid,email,password}=user;
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //   }
  // });

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
