import React, { useEffect } from 'react'
import WifiItem from '../wifi-item/WifiItem'
import './WifiList.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getWifiList } from '../../services/reducers/wifiSlice';
import { useHttp } from '../../hooks/http.hook';

function WifiList() {
  const dispatch = useDispatch();
  const wifiList = useSelector(state => state.wifiList.wifiList);
  const ssidList = Object.keys(wifiList);
  const { request } = useHttp();

  useEffect(() => {
    const fetchData = async () => {
      const response = await request("http://localhost:8000/api/get_ssid");
      dispatch(getWifiList(response));
    };
    fetchData()
  }, [])

  return (
    <div>
    <nav className="wifi_list">
      {
        ssidList.map((wifi, index) => (
          <WifiItem key={index} name={wifi} />
        ))
      }
    </nav>
    </div>
  )
}

export default WifiList