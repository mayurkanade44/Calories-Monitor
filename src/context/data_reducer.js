const data_reducer = (state, action) => {
  switch (action.type) {
    case "DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case "SINGLE_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        current: action.payload,
      };
    case "DATA_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "DELETE_SUCCESS":
      return {
        ...state,
        loading: false,
        data: state.data.filter((data) => data.id !== action.payload),
      };
    case "DATA_ADDED":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "CHANGE_DATA":
      const { name, value } = action.payload;
      return {
        ...state,
        current: { ...state.current, [name]: value },
      };
    case "DATA_UPDATED":
      return {
        ...state,
        data: state.data.map((d) =>
          d.id === action.payload.id ? action.payload : d
        ),
      };
    case "CLEAR_CURRENT":
      return {
        ...state,
        current: [],
      };
    case "TARGET_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        target: action.payload,
      };
    case "TARGET_UPDATED":
      return {
        ...state,
        loading: false,
        error: null,
        target: action.payload,
      };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default data_reducer;
