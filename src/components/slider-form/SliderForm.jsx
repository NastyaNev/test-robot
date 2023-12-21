import React, { useEffect, useState } from "react";
import Slider from "../slider/Slider";
import Button from "../button/Button";
import "./SliderForm.scss";
import { useHttp } from "../../hooks/http.hook";

function SliderForm({ array, className, apiSliderChange }) {
  const [values, setValues] = useState({});

  useEffect(() => {
    const initialValues = {};

    for (const v of array) {
      initialValues[v.id] = v.value;
    }

    setValues(initialValues);
  }, [array]);

  const { request } = useHttp();

  useEffect(() => {
    apiSliderChange(values).catch(console.error);
  }, [values]);

  return (
    <form className="slider_form">
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
