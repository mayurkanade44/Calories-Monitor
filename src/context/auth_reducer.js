const auth_reducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
      };
    case "REGISTER_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.access);
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: null,
        user: action.payload,
      };
    case "LOGIN_FAIL":
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated:false,
        loading: false,
        error: action.payload,
      };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default auth_reducer;
