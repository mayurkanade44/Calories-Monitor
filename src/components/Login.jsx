import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "../context/auth_context";

const Login = () => {
  const { login, error, isAuthenticated } = useAuthContext();
  const history = useHistory()

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { username, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  useEffect(()=>{
    if (isAuthenticated) {
      history.push("/home");
    }
    // eslint-disable-next-line
  }, [isAuthenticated])

  

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      {error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : null}
      <h1 className="text-center mb-4">Account Login</h1>
      <div className="d-flex justify-content-center">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Username/Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="abc@xyz.com"
              name="username"
              value={username}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChange}
              required
              minLength="5"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
