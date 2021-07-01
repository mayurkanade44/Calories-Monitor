import React, { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const token = localStorage.getItem('token')

  const data = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const res = await axios.get("http://127.0.0.1:8000/data/", config);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    data();
  },[token]);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
