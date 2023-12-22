import React, { useEffect } from 'react'
import WifiItem from '../wifi-item/WifiItem'
import './WifiList.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getWifiList } from '../../services/reducers/wifiSlice';
import { useHttp } from '../../hooks/http.hook';

function WifiList() {
  const dispatch = useDispatch();
  const wifiList = useSelector(state => state.wifiList.wifiList);
  const { request } = useHttp();

  // const wifiList = [
  //   {name: 'wifi1'},
  //   {name: 'wifi3'},
  //   {name: 'wifi5'},
  //   {name: 'wifi7'},
  //   {name: 'wifi8'},
  // ]


  useEffect(() => {
    const fetchData = async () => {
      const response = await request("http://localhost:8000/api/wifi");
      dispatch(getWifiList(response));
    };
    fetchData()
  }, [])

  return (
    <div>
    <nav className="wifi_list">
      {
        wifiList.map(wifi => (
          <WifiItem key={wifi.name} name={wifi.name} />
        ))
      }
    </nav>
    </div>
  )
}

export default WifiList