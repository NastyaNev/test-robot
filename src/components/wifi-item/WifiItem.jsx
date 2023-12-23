import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import wifi_icon from "../../images/fa6-solid_wifi.svg";
import wifi_icon_active from "../../images/fa6-solid_wifi_active.svg";
import "./WifiItem.scss";
import { useHttp } from "../../hooks/http.hook";
import { useDispatch } from "react-redux";
import { getConnectForm } from "../../services/reducers/wifiSlice";

function WifiItem({ name }) {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const { request } = useHttp();

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleClick = async () => {
    const response = await request("http://localhost:8000/api/wifi", "GET", name);
    dispatch(getConnectForm(response));
  };

  return (
    <NavLink
      to={`/wifi/connection-to-/${name}`}
      state={{ name }}
      className={isHovered ? "wifi_item__active" : "wifi_item"}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={handleClick}
    >
      <img
        src={isHovered ? wifi_icon_active : wifi_icon}
        className="wifi_item__icon"
        alt="wifi"
      />
      <span>{name}</span>
    </NavLink>
  );
}

export default WifiItem;
