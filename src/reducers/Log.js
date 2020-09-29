const logReg = /^(\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}),994\s(INFO|ERROR|WARNING)\s(.*)$/;

const initialState = {
  logs: [],
  loading: false,
  error: false,

  stats: {
    info: 0,
    warning: 0,
    error: 0
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "DATA_ERROR": {
      return { ...state, error: true };
    }
    case "LOADING_DATA": {
      return { ...state, loading: true };
    }

    case "DATA_SUCCESS": {
      const logs = action.payload.lines.map((logText) => {
        const log = logText.match(logReg);
        const { date, type, message } = log;

        return {
          log: {
            date,
            type,
            message
          }
        };
      });
      return {
        ...state,
        loading: false,
        logs, //stats should be done here
        error: false
      };
    }
    default:
      break;
  }

  return state;
}
