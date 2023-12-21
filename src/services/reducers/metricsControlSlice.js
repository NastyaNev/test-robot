import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  metricsControl: {},
  apiFailed: false,
};

export const metricsControlSlice = createSlice({
  name: "metricsControl",
  initialState,
  reducers: {
    setMetricsControlSuccess: (state, action) => {
      state.metricsControl = {...state.metricsControl, "slider": action.payload};
    },
    setMetricsControlFailed: (state, action) => {
      state.metricsControl["slider"] = action.payload;
      state.apiFailed = true;
    },
  },
});

export const { setMetricsControlSuccess, setMetricsControlFailed } =
  metricsControlSlice.actions;
export default metricsControlSlice.reducer;
