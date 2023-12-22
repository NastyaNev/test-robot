import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  metrics: {},
};

export const metricsSlice = createSlice({
  name: "metrics",
  initialState,
  reducers: {
    getMetrics: (state, action) => {
      state.metrics = action.payload;
    },
  },
});

export const { getMetrics } =
  metricsSlice.actions;
export default metricsSlice.reducer;
