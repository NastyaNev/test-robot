import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  apiRequest: false,
  apiFailed: false,
  metrics: {},
};

export const metricsSlice = createSlice({
  name: "metrics",
  initialState,
  reducers: {
    getMetrics: (state) => {
      state.apiRequest = true;
    },
    getMetricsSuccess: (state, action) => {
      state.metrics = action.payload;
      state.apiRequest = false;
      state.apiFailed = false;
    },
    getMetricsFailed: (state) => {
      state.metrics = {};
      state.apiRequest = false;
      state.apiFailed = true;
    }
  },
});

export const { getMetrics, getMetricsSuccess, getMetricsFailed } =
  metricsSlice.actions;
export default metricsSlice.reducer;
