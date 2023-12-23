import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  wifiList: {},
  requestedPass: '',
  passedPass: '',
  status: false
};

export const wifiSlice = createSlice({
  name: "wifiList",
  initialState,
  reducers: {
    getWifiList: (state, action) => {
        state.wifiList = action.payload;
    },
    getConnectForm: (state, action) => {
      state.requestedPass = action.payload;
    },
    getConnection: (state, action) => {
      state.passedPass = action.payload;
    },
    getConnectionStatus: (state) => {
      if (state.passedPass === state.requestedPass) {
        state.status = true;
      } else {state.status = false;}
    }
  },
});

export const { getWifiList, getConnectForm, getConnectionStatus, getConnection } =
  wifiSlice.actions;
export default wifiSlice.reducer;