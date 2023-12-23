import React, { useEffect, useState } from "react";
import wifi_icon from "../../images/fa6-solid_wifi.svg";
import { useLocation } from "react-router-dom";
import "./ConnectForm.scss";
import Button from "../button/Button";
import eye from "../../images/eye.svg";
import eyeCrossed from "../../images/eye_crossed.svg";
import {
  getConnection,
  getConnectionStatus,
} from "../../services/reducers/wifiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHttp } from "../../hooks/http.hook";

function ConnectForm() {
  const location = useLocation();
  const ssid = location.state.name;
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const { request } = useHttp();
  const status = useSelector((state) => state.wifiList.status);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await request(
      `http://localhost:8000/api/connect?ssid=${ssid}&password=${password}`,
      "GET",
      password
    );
    dispatch(getConnection(response));
    dispatch(getConnectionStatus());
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
      </div>
      <Button text="Подключиться" />
    </form>
  );
}

export default ConnectForm;
