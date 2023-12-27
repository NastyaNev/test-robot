import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import wifi_icon from "../../images/fa6-solid_wifi.svg";
import wifi_icon_active from "../../images/fa6-solid_wifi_active.svg";
import "./WifiItem.scss";
import { useHttp } from "../../hooks/http.hook";
import { useDispatch } from "react-redux";
import { getConnectForm } from "../../services/reducers/wifiSlice";

function WifiItem({ name }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const { request } = useHttp();

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleClick = async () => {
    const response = await request(
      "http://localhost:8000/api/wifi",
      "GET",
      name
    );
    dispatch(getConnectForm(response));
  };

  const selectConnectedText = () => {
    const ssid = location.state.ssid;
    if(name === ssid) {return "wifi_item__active"} else {return `${isHovered ? "wifi_item__active" : "wifi_item"}`}
  };

  const selectConnectedIcon = () => {
      const ssid = location.state.ssid;
      if(name === ssid) {return wifi_icon_active} else {return `${isHovered ? wifi_icon_active : wifi_icon}`}
  };

  return (
    <NavLink
      to={`/wifi/connection-to-/${name}`}
      state={{ name }}
      className={location.state !== null ? selectConnectedText : isHovered ? "wifi_item__active" : "wifi_item"}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={handleClick}
    >
      <img src={location.state !== null ? selectConnectedIcon() : isHovered ? wifi_icon_active : wifi_icon}
      className="wifi_item__icon" alt="wifi" />
      <span>{name}</span>
    </NavLink>
  );
}

export default WifiItem;
