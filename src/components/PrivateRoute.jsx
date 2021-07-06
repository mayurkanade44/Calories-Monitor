import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../context/auth_context";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuthContext();
  return (
    <Route
      {...rest}
      render={() => {
        return user ? children : <Redirect to="/"></Redirect>;
      }}
    ></Route>
  );
};

export default PrivateRoute;
