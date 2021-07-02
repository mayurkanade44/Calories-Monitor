import React, { useEffect, useState} from "react";
import { useHistory } from "react-router";
import { useAuthContext } from "../context/auth_context";

const Register = () => {
  const { register, error, registerSuccess } = useAuthContext();
  const history = useHistory()

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    register(name, email, password);
  };

  useEffect(()=>{
    if (registerSuccess ){
      history.push("/login");
    }
    
  },[registerSuccess])


  const { name, email, password } = user;

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      {error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : null}
      <h1 className="text-center mb-4">Account Register</h1>
      <div className="d-flex justify-content-center">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Please Enter Your Full Name"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="abc@xyz.com"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
            <div className="form-text">
              We'll never share your email with anyone else.
            </div>
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
