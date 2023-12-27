import React, { useState } from "react";
import wifi_icon from "../../images/fa6-solid_wifi.svg";
import { useLocation, useNavigate } from "react-router-dom";
import "./ConnectForm.scss";
import Button from "../button/Button";
import eye from "../../images/eye.svg";
import eyeCrossed from "../../images/eye_crossed.svg";
import { useHttp } from "../../hooks/http.hook";

function ConnectForm() {
  const location = useLocation();
  const ssid = location.state.name;
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const { request } = useHttp();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await request(
      `http://localhost:8000/api/connect?ssid=${ssid}&password=${password}`,
      "GET",
      { password, ssid }
    );
    if (response) {
      navigate("/wifi/", { state: { ssid } });
    } else {
      document.getElementById('pass').classList.add("input_container__input__warning");
      document.getElementById('warning').classList.add("input_container__warning_visible");
    }
  };

  return (
    <form className="connect_form" onSubmit={handleSubmit}>
      <label htmlFor="pass">
        <img src={wifi_icon} alt="wifi_icon" className="wifi_icon" />
        <span>{ssid}</span>
      </label>
      <div className="input_container">
        <input
          className="input_container__input"
          type={visible ? "text" : "password"}
          onChange={(e) => {
            setPassword(e.target.value);
            document.getElementById('warning').classList.remove("input_container__warning_visible");
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
          className="input_container__eye_icon"
        />
        <span className="input_container__warning" id="warning">Wrong password</span>
      </div>
      <Button text="Подключиться" />
    </form>
  );
}

export default ConnectForm;
