import React, { useEffect, useState } from "react";
import Slider from "../slider/Slider";
import Button from "../button/Button";
import "./SliderForm.scss";
import { useHttp } from "../../hooks/http.hook";

function SliderForm({ array, className, apiSliderChange, slidersSaveEndPoint }) {
  const [values, setValues] = useState({});
  const { request } = useHttp();

  useEffect(() => {
    const initialValues = {};

    for (const v of array) {
      initialValues[v.id] = v.value;
    }

    setValues(initialValues);
  }, [array]);

  useEffect(() => {
    apiSliderChange(values).catch(console.error);
  }, [values]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await request(
      `http://localhost:8000/api/${slidersSaveEndPoint}`,
      "POST",
      JSON.stringify(values),
      {
        Accept: "application/x-www-form-urlencoded",
        "Content-Type": "application/x-www-form-urlencoded",
      }
    );
  };

  return (
    <form className="slider_form" onSubmit={handleSubmit}>
      <ul className={className}>
        {array.map((slider, index) => (
          <Slider key={index} slider={slider} setValues={setValues} />
        ))}
      </ul>
      <div className="slider_form__button_container">
        <Button text="Сохранить" />
      </div>
    </form>
  );
}

export default SliderForm;
