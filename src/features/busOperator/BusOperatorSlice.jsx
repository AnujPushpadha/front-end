import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createBusOperator } from "./BusOperatorAPI";

const initialState = {
  busOperators: [],
  status: "idle",
  error: null,
};

export const createBusOperatorAsync = createAsyncThunk(
  "busOperators/createBusOperator",
  async (operatorData) => {
    console.log(operatorData);
    const response = await createBusOperator(operatorData);
    return response;
  }
);

const busOperatorSlice = createSlice({
  name: "busOperators",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBusOperatorAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createBusOperatorAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.busOperators.push(action.payload);
      })
      .addCase(createBusOperatorAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default busOperatorSlice.reducer;
