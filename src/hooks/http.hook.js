import { useState, useCallback } from "react";

const wifiList = {
  wifi1: "jnkrnje",
  wifi3: "jnkrnje",
  wifissid: "11345678",
  wifi7: "jnkrnje",
  wifi8: "jnkrnje",
};

class FakeResponse {
  constructor(url, body) {
    this.body = body;
    this.url = url;
    this.ok = true;
  }

  async json() {
    if (this.url == "http://localhost:8000/api/metrics") {
      return {
        spi_hight: 50,
        step_hight: 50,
        step_length: 50,
        l1: 300,
        ll1: 300,
        l2: 300,
        ll2: 300,
        l3: 300,
        ll3: 300,
        r1: 300,
        rr1: 300,
        r2: 300,
        rr2: 300,
        r3: 300,
        rr3: 300,
      };
    } else if (this.url == "http://localhost:8000/api/get_ssid") {
      return wifiList;
    } else if (this.url == "http://localhost:8000/api/wifi") {
      return wifiList[this.body];
    } else if (this.url.includes(`&password`)) {
      return wifiList[this.body["ssid"]] === this.body["password"] ? this.ok = true : this.ok = false
    }

    return {
      data: "default",
    };
  }
}

async function fakeFetch(url, options) {
  console.log("url", url);
  console.log("options", options);

  return new FakeResponse(url, options.body);
}

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = {
        "Content-Type": "application/json",
      }
    ) => {
      setLoading(true);

      const response = await fakeFetch(url, { method, body, headers });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();

      setLoading(false);

      return data;
    },
    []
  );

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
};
