import React, { useEffect } from "react";
import "./app.scss";
import { Route, Routes } from "react-router";
import Layout from "../layout/Layout";
import Control from "../../pages/control/Control";
import Calibration from "../../pages/calibration/Calibration";
import WifiList from "../wifi-list/WifiList";
import ConnectForm from "../connect-form/ConnectForm";
import NotFound from "../../pages/not-found/NotFound";
import Wifi from "../../pages/wifi/Wifi";
import { useDispatch } from "react-redux";
import { useHttp } from "../../hooks/http.hook";
import {
  getMetrics,
} from "../../services/reducers/metricsSlice";

function App() {
  const dispatch = useDispatch();

  const { request } = useHttp();

  useEffect(() => {
    const fetchData = async () => {
      const response = await request("http://localhost:8000/api/metrics");
      dispatch(getMetrics(response));
    };
    fetchData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Control />} />
        <Route path="calibration" element={<Calibration />} />
        <Route path="/wifi" element={<Wifi />}>
          <Route path="/wifi" element={<WifiList />} />
          <Route path="/wifi/connection-to-/:id" element={<ConnectForm />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
