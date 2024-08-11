import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkUser, checkAdmin, createUser, signOut } from "./authAPI";
// import { updateUser } from "../user/userAPI";
const initialState = {
  loggedInUser: null,
  status: "idle",
  error: null,
};

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData, { rejectWithValue }) => {
    console.log(userData);
    try {
      const response = await createUser(userData);
      // The value we return becomes the `fulfilled` action payload
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const checkAdminAsync = createAsyncThunk(
  "auth/checkAdmin",
  async (loginInfo, { rejectWithValue }) => {
    console.log(loginInfo);
    try {
      const response = await checkAdmin(loginInfo);
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const checkUserAsync = createAsyncThunk(
  "auth/checkUser",
  async (loginInfo, { rejectWithValue }) => {
    try {
      const response = await checkUser(loginInfo);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const checkUserAsync = createAsyncThunk(
//   "user/checkUser",
//   async (loginInfo) => {
//     // console.log(loginInfo);
//     const response = await checkUser(loginInfo);
//     // The value we return becomes the `fulfilled` action payload
//     // console.log(response);
//     return response.data;
//   }
// );
export const signOutAsync = createAsyncThunk(
  "user/signOut",
  async (loginInfo) => {
    // console.log("runrunr");
    const response = await signOut(loginInfo);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        // console.log(action.payload);
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.status = "idle";
        console.log(action.payload);
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.error;
      })
      //   .addCase(updateUserAsync.pending, (state) => {
      //     state.status = "loading";
      //   })
      //   .addCase(updateUserAsync.fulfilled, (state, action) => {
      //     state.status = "idle";
      //     state.loggedInUser = action.payload;
      //   })
      .addCase(checkAdminAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkAdminAsync.fulfilled, (state, action) => {
        state.status = "idle";
        console.log(action.payload);
        state.loggedInUser = action.payload;
      })
      .addCase(checkAdminAsync.rejected, (state, action) => {
        state.status = "idle";
        state.error = action.payload;
      })
      .addCase(signOutAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signOutAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.loggedInUser = null;
      });
  },
});

export const selectLoggedInUser = (state) => state.auth.loggedInUser;
export const selectError = (state) => state.auth.error;

export const { increment } = authSlice.actions;

export default authSlice.reducer;
