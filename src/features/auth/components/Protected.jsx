// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// import { selectLoggedInUser } from "../authSlice";

// function Protected({ children }) {
//   const user = useSelector(selectLoggedInUser);

//   if (!user) {
//     return <Navigate to="/login" replace={true}></Navigate>;
//   }
//   return children;
// }

// export default Protected;

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectLoggedInUser } from "../authSlice";

function Protected({ children }) {
  const user = useSelector(selectLoggedInUser);

  if (!user) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }

  // Redirect to admin home if the user is an admin
  if (user.role === "ADMIN") {
    return <Navigate to="/admin" replace={true}></Navigate>;
  }

  // Otherwise, return the children (usually the Home component)
  return children;
}

export default Protected;
