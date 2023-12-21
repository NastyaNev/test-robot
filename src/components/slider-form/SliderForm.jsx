import React from "react";
import Slider from "../slider/Slider";
import Button from "../button/Button";
import "./SliderForm.scss";
import { v4 as uuidv4 } from 'uuid';

function SliderForm({ array, className }) {
  return (
    <form className="slider_form">
      <ul className={className}>
        {array.map((slider) => (
          <Slider key={uuidv4()} slider={slider} />
        ))}
      </ul>
      <div className="slider_form__button_container">
        <Button text="Сохранить" />
      </div>
    </form>
  );
}

export default SliderForm;
