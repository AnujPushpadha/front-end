import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createRoutes } from "./routesAPI";

const initialState = {
  routes: [],
  status: "idle",
  error: null,
};

export const createRoutesAsync = createAsyncThunk(
  "routes/createRoutes",
  async (RoutesData) => {
    const response = await createRoutes(RoutesData);
    return response;
  }
);

const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createRoutesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createRoutesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.routes.push(action.payload);
      })
      .addCase(createRoutesAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default routesSlice.reducer;
