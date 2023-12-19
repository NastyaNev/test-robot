import React, { useEffect, useState } from "react";
import "./Control.scss";
import { useSelector } from "react-redux";
import Dpad from "../../components/d-pad/Dpad";
import PageTitle from "../../components/page-title/PageTitle";
import SliderForm from "../../components/slider-form/SliderForm";

function Control() {
  const sliderNamesControl = ["Общая высота", "Высота шага", "Длина шага"];
  const basicMetrics = useSelector((state) => state.metrics.metrics);

  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    setMetrics(basicMetrics)
  }, [basicMetrics])

  const basicMetricsControl = [];

  let ind = 0;

  for (const value of Object.values(metrics).slice(0, 3)) {
    basicMetricsControl.push({ name: sliderNamesControl[ind], value: value });
    ind++;
  }

  return (
    <div className="control">
      <div className="control__d_pads">
        <Dpad />
        <Dpad />
      </div>
      <div className="control__calibration">
        <PageTitle
          title="настройка высоты и длины шага"
          className="control__calibration__title"
        />
        <SliderForm
          array={basicMetricsControl}
          className="control__calibration__inputs_container"
        />
      </div>
    </div>
  );
}

export default Control;
