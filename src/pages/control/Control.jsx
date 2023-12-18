import React, { useEffect } from "react";
import "./Control.scss";
import SliderForm from "../../components/slider-form/SliderForm";
import PageTitle from "../../components/page-title/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../../hooks/http.hook";
import {
  getMetrics,
  getMetricsFailed,
  getMetricsSuccess,
} from "../../services/reducers/metricsSlice";

function Control() {
  // const slidersControl = [
  //   { name: "slider1", value: "70" },
  //   { name: "slider2", value: "90" },
  //   { name: "slider3", value: "70" },
  // ];

  const dispatch = useDispatch();

  const { request } = useHttp();
  useEffect(() => {
    dispatch(getMetrics());
    const fetchData = async () => {
      const response = await request("http://localhost:8000/api/metrics");
      const data = await response;
      if (data) {
        dispatch(getMetricsSuccess(data));
      } else {
        dispatch(getMetricsFailed());
      }
    };
    fetchData();
  }, []);

  const metrics = useSelector((state) => state.metrics.metrics);

  const basicMetrics = [];

  for (const [key, value] of Object.entries(metrics)) {
    basicMetrics.push({ name: `${key}`, value: value });
  }

  return (
    <div className="control">
      <div className="control__d_pads"></div>
      <div className="control__calibration">
        <PageTitle
          title="настройка высоты и длины шага"
          className="control__calibration__title"
        />
        <SliderForm
          array={basicMetrics.slice(0, 3)}
          className="control__calibration__inputs_container"
        />
      </div>
    </div>
  );
}

export default Control;
