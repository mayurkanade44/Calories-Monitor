const auth_reducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        registerSuccess: true,
        error: null,
      };
    case "SET_REGISTER":
      return {
        ...state,
        registerSuccess: false,
      };
    case "REGISTER_FAIL":
      return {
        ...state,
        loading: false,
        registerSuccess: false,
        error: action.payload,
      };
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.access);
      localStorage.setItem("user", action.payload.name);
      return {
        ...state,
        token: localStorage.getItem("token"),
        loading: false,
        isAuthenticated: true,
        error: null,
        user: localStorage.getItem("user"),
      };
    case "LOGIN_FAIL":
    case "LOGOUT":
      return {
        ...state,
        token: localStorage.removeItem("token"),
        isAuthenticated: false,
        loading: false,
        error: action.payload,
        user: localStorage.removeItem("user"),
      };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default auth_reducer;
