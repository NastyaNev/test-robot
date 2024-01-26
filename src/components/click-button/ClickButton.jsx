import React, { useEffect, useState } from "react";
import "./ClickButton.scss";

function ClickButton() {
  const [nameClass, setNameClass] = useState("click-button");

  useEffect(() => {
    setTimeout(() => {
      setNameClass("click-button click-button_visible");
    }, 6000);
  }, []);

  return <div className={nameClass}>Click the button&rarr;</div>;
}

export default ClickButton;
