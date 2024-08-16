import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createRoutes } from "./routesAPI";
import { fetchRoutes } from "./routesAPI";
const initialState = {
  routes: null,
  // routes: [],
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

export const fetchRoutesAsync = createAsyncThunk(
  "routes/fetchRoutes",
  async () => {
    const response = await fetchRoutes();
    // console.log(response);
    // The value we return becomes the `fulfilled` action payload
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
        state.routes = action.payload;
        // state.routes.push(action.payload);
      })
      .addCase(createRoutesAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchRoutesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRoutesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        console.log(action.payload.response);
        // state.routes.push(action.payload.response);
        state.routes = action.payload.response;
      });
  },
});

export const selectRoutes = (state) => state.routes.routes;

export default routesSlice.reducer;
