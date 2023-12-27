import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  wifiList: {},
  requiredPass: ''
};

export const wifiSlice = createSlice({
  name: "wifiList",
  initialState,
  reducers: {
    getWifiList: (state, action) => {
        state.wifiList = action.payload;
    },
    getConnectForm: (state, action) => {
      state.requiredPass = action.payload;
    }
  },
});

export const { getWifiList, getConnectForm } =
  wifiSlice.actions;
export default wifiSlice.reducer;