import React, { useEffect, useRef, useState } from "react";
import "./Slider.scss";

function Slider({ slider, setValues }) {
  const [value, setValue] = useState(slider.value);
  const prevValue = useRef(value);

  const onEnter = (e) => {
    if (e.code === "Enter") {
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
          value={value}
          className="slider"
          id={`myRange${slider.name}`}
          onInput={() =>
            setValue(
              (document.getElementById(`amount${slider.name}`).value =
                document.getElementById(`myRange${slider.name}`).value)
            )
          }
          onMouseUp={() => {
            if (value !== prevValue.current) {
              prevValue.current = value;
              setValues((values) => ({ ...values, [slider.id]: value }));
            }
          }}
        />
        <input
          type="number"
          id={`amount${slider.name}`}
          min="0"
          max="300"
          onInput={() => {
            setValue(
              (document.getElementById(`myRange${slider.name}`).value =
                document.getElementById(`amount${slider.name}`).value)
            );
          }}
          defaultValue={slider.value}
          className="slider_value"
          onBlur={(e) =>
            setValues((values) => ({ ...values, [slider.id]: e.target.value }))
          }
        />
      </div>
    </li>
  );
}

export default Slider;
