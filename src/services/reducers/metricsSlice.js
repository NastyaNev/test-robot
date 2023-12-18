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
    },
    getMetricsFailed: (state) => {
      state.metrics = {
        spi_hight: 50,
        step_hight: 50,
        step_length: 50,
        l1: 300,
        ll1: 300,
        l2: 300,
        ll2: 300,
        l3: 300,
        ll3: 300,
        r1: 300,
        rr1: 300,
        r2: 300,
        rr2: 300,
        r3: 300,
        rr3: 300,
      };
      state.apiRequest = false;
      state.apiFailed = true;
    },
  },
});

export const { getMetrics, getMetricsSuccess, getMetricsFailed } =
  metricsSlice.actions;
export default metricsSlice.reducer;
