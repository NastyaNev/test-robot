import React, { useEffect, useState } from "react";
import "./Console.scss";

function Console() {
  const [nameClass, setNameClass] = useState("console");

  useEffect(() => {
    setNameClass("console console_visible");
  }, []);

  return <div className={nameClass}>Open Console</div>;
}

export default Console;
