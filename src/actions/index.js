const axios = require("axios");

const url = "http://localhost:8080";

export const fetchLogs = async (dispatch, state) => {
  dispatch({ type: "LOADING_DATA" });

  try {
    const res = await axios.get(`${url}/logs?start=0&end=2`);
    axios.get(`${url}/logs`, {
      params: {
        start: 0,
        end: 1
      }
    });
    const payload = await res.json();
    console.log(payload);

    setTimeout(() => {
      dispatch({ type: "DATA_SUCCESS", payload });
    }, 1000);
  } catch (error) {
    throw error;
    dispatch({ type: "DATA_ERROR" });
  }
};
