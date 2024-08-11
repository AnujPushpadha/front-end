import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "./features/auth/authSlice";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";
import Home from "./pages/Home";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "./features/auth/components/Login";
import Signup from "./features/auth/components/Signup";
import AdminHome from "./pages/AdminHome";
import ProtectedAdmin from "./features/auth/components/ProtectedAdmin";
import Protected from "./features/auth/components/Protected";
import Logout from "./features/auth/components/Logout";
import UserProfilePage from "./pages/UserProfilePage";
const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <Protected>
        <Home></Home>
      </Protected>
    ),
  },
  {
    path: "/admin",

    element: (
      <ProtectedAdmin>
        <AdminHome></AdminHome>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <Signup></Signup>,
  },
  {
    path: "/logout",
    element: <Logout></Logout>,
  },
  {
    path: "/profile",
    element: <UserProfilePage></UserProfilePage>,
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  // useEffect(() => {
  //   if (user) {
  //     // console.log(user);
  //     // dispatch(fetchItemsByUserIdAsync(user.id));
  //     dispatch(fetchLoggedInUserAsync(user.id));
  //   }
  // }, [dispatch, user]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
