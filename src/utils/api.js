const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const checkResponse = (res) => {
//   if (res.ok) {
//       return res.json();
//   } else {
//   return res.json().then((err) => Promise.reject(err))};
  const contentType = res.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    return res.json();
  } else {
    return res.json().then((err) => Promise.reject(err));
  }
};

export function getMetricsData() {
  return fetch("/api?metrics", {
    headers: config.headers,
    method: "GET",
  }).then(checkResponse);
}

// export function getUsersNames() {
//     return fetch(`${config.url}/users`, {
//         headers: config.headers,
//         method: 'GET'
//     })
//         .then(checkResponse);
// }
