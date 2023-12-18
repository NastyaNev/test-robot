import { useHttp } from "../../hooks/http.hook";
import { getMetricsData } from "../../utils/api";
import {
  getMetrics,
  getMetricsFailed,
  getMetricsSuccess,
} from "../reducers/metricsSlice";
// import { getUsers, getUsersFailed, getUsersSuccess } from "../reducers/usersSlice";

// const { request } = useHttp();

// export function getBasicMetrics() {
//   return function (dispatch) {
//     dispatch(getMetrics());
//     const fetchData = async () => {
//       const response = await request("http://localhost:8000/api?metrics");
//       const data = await response;
//       if (data.ok) {
//         dispatch(getMetricsSuccess(data));
//       } else {
//         dispatch(getMetricsFailed());
//       }
//     };
//     fetchData();
//   }
//   .catch((err) => {
//     console.log(err);
//   });
// }

// export function getNames() {
//     return function (dispatch) {
//         dispatch(getUsers());
//         return getUsersNames().then(res => {
//             if (res) {
//                 dispatch(getUsersSuccess(res));
//             } else {
//                 dispatch(getUsersFailed());
//             }
//         })
//             .catch(err => {
//                 console.log(err)
//             });
//     };
// }
