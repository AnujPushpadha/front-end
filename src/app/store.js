import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";

import useReducer from "../features/user/userSlice";

import routesSlice from "../features/routes/routesSlice";
import BusOperatorSlice from "../features/busOperator/BusOperatorSlice";
// import userReducer from "../features/user/userSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,

    user: useReducer,

    routes: routesSlice,

    busOperator: BusOperatorSlice,
  },
});
