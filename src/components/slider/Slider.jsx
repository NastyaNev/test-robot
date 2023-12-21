import React, { useEffect } from "react";
import "./Slider.scss";

function Slider({ slider }) {
  const onEnter = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };

  useEffect(() => {
    const textInput = document.getElementById(`amount${slider.name}`);
    textInput.addEventListener("keydown", onEnter);

    return () => textInput.removeEventListener("keydown", onEnter);
  }, []);

  return (
    <li className="slider_container">
      <label htmlFor="myRange" className="slider_name">
        {slider.name}
      </label>
      <div className="inputs">
        <input
          type="range"
          min="0"
          max="300"
          step="10"
          defaultValue={slider.value}
          className="slider"
          id={`myRange${slider.name}`}
          onInput={() =>
            (document.getElementById(`amount${slider.name}`).value =
              document.getElementById(`myRange${slider.name}`).value)
          }
        />
        <input
          type="number"
          id={`amount${slider.name}`}
          min="0"
          max="300"
          onInput={() =>
            (document.getElementById(`myRange${slider.name}`).value =
              document.getElementById(`amount${slider.name}`).value)
          }
          defaultValue={slider.value}
          className="slider_value"
        />
      </div>
    </li>
  );
}

export default Slider;
