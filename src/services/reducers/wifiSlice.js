import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  wifiList: [],
};

export const wifiSlice = createSlice({
  name: "wifiList",
  initialState,
  reducers: {
    getWifiList: (state, action) => {
        state.wifiList = action.payload;
    }
  },
});

export const { getWifiList } =
  wifiSlice.actions;
export default wifiSlice.reducer;