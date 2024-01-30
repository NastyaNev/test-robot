import React, { useEffect, useState } from "react";
import "./Control.scss";
import { useSelector } from "react-redux";
import Dpad from "../../components/d-pad/Dpad";
import PageTitle from "../../components/page-title/PageTitle";
import SliderForm from "../../components/slider-form/SliderForm";
import { useHttp } from "../../hooks/http.hook";

function Control() {
  const sliderNamesControl = ["Общая высота", "Высота шага", "Длина шага"];
  const metrics = useSelector((state) => state.metrics.metrics);
  const [basicMetricsControl, setBasicMetricsControl] = useState([]);

  useEffect(() => {
    let ind = 0;
    const slidersData = [];
    for (const value of Object.values(metrics).slice(0, 3)) {
      slidersData.push({
        name: sliderNamesControl[ind],
        value: value,
        id: `slider${ind + 1}`,
      });
      ind++;
    }
    setBasicMetricsControl(slidersData);
  }, [metrics]);

  const { request } = useHttp();

  const apiRequest = async (endPoint) => {
      await request(`http://localhost:8000/api/${endPoint}`);
  };

  function onMove(e) {
    if (e.code === "KeyW") {
      apiRequest("fw");
    } else if (e.code === "KeyA") {
      apiRequest("lf");
    } else if (e.code === "KeyS") {
      apiRequest("bk");
    } else if (e.code === "KeyD") {
      apiRequest("rt");
    } else if (e.code === "ArrowLeft") {
      e.preventDefault();
      apiRequest("lf");
    } else if (e.code === "ArrowDown") {
      e.preventDefault();
      apiRequest("bk");
    } else if (e.code === "ArrowRight") {
      e.preventDefault();
      apiRequest("rt");
    } else if (e.code === "ArrowUp") {
      e.preventDefault();
      apiRequest("fw");
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", onMove);

    return () => document.removeEventListener("keydown", onMove);
  }, []);

  return (
    <div className="control">
      <div className="control__d_pads">
        <Dpad title="wasd" apiRequest={apiRequest} />
        <Dpad
          title="&#129120;&#129121;&#129122;&#129123;"
          apiRequest={apiRequest}
        />
      </div>
      <div className="control__calibration">
        <PageTitle
          title="настройки высоты и длины шага"
          className="control__calibration__title"
        />
        <SliderForm
          array={basicMetricsControl}
          className="control__calibration__inputs_container"
          sliderChangeEndPoint={"set_set"}
          slidersSaveEndPoint={'save_set'}
        />
      </div>
    </div>
  );
}

export default Control;
