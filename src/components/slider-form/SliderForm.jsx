import React from "react";
import Slider from "../slider/Slider";
import Button from "../button/Button";
import "./SliderForm.scss";

function SliderForm({ array, className }) {

  return (
    <form className="slider_form">
      <ul className={className} >
        {array.map((slider) => (
          <Slider key={slider.index} slider={slider} />
        ))}
      </ul>
      <Button text="Сохранить" />
    </form>
  );
}

export default SliderForm;
