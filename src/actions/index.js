const url = "http://localhost";

export const fetchLogs = async (dispatch, state) => {
  dispatch({ type: "LOADING_DATA" });

  try {
    const res = await fetch(`${url}/logs?start=0&end=2`);
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
