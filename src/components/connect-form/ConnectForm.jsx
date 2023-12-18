import React, { useState } from "react";
import wifi_icon from "../../images/fa6-solid_wifi.svg";
import { useLocation } from "react-router-dom";
import "./ConnectForm.scss";
import Button from "../button/Button";
import eye from "../../images/eye.svg";
import eyeCrossed from "../../images/eye_crossed.svg";

function ConnectForm() {
  const location = useLocation();
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <form className="connect_form">
      <label htmlFor="pass">
        <img src={wifi_icon} alt="wifi_icon" className='wifi_icon' />
        <span>{location.state.name}</span>
      </label>
      <div className='input_container'>
        <input
          type={visible ? "text" : "password"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          id="pass"
          name="password"
          minLength="6"
          required
        />
        <img
          src={visible ? eye : eyeCrossed}
          alt={visible ? "скрыть пароль" : "показать пароль"}
          onClick={() => setVisible(!visible)}
          className="eye_icon"
        />
      </div>
      <Button text="Подключиться" />
    </form>
  );
}

export default ConnectForm;
