import React, { useEffect, useState } from "react";
import PageTitle from "../../components/page-title/PageTitle";
import SliderForm from "../../components/slider-form/SliderForm";
import "./Calibration.scss";
import { useSelector } from "react-redux";

function Calibration() {
  const sliderNamesCalibration = [
    "Название1",
    "Название2",
    "Название3",
    "Название4",
    "Название5",
    "Название6",
    "Название7",
    "Название8",
    "Название9",
    "Название10",
    "Название11",
    "Название12",
  ];

  const metrics = useSelector((state) => state.metrics.metrics);

  const [basicMetricsCalibration, setbasicMetricsCalibration] = useState([]);

  useEffect(() => {
    let ind = 0;
    const slidersData = [];
    for (const value of Object.values(metrics).slice(3)) {
      slidersData.push({
        name: sliderNamesCalibration[ind],
        value: value,
        id: `servo${ind + 1}`,
      });
      ind++;
    }
    setbasicMetricsCalibration(slidersData);
  }, [metrics]);

  return (
    <div className="calibration">
      <PageTitle title="калибровка" className="calibration__title" />
      <SliderForm
        array={basicMetricsCalibration}
        className="calibration__inputs_container"
        sliderChangeEndPoint={"set"}
        slidersSaveEndPoint={"save"}
      />
    </div>
  );
}

export default Calibration;
