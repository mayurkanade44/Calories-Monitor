import Table from "./Table";
import { Link } from "react-router-dom";
import DailyTarget from "./DailyTarget";

const Home = () => {
  return (
    <div className="container">
      <h1>Home</h1>
      
      <DailyTarget />
      <Table></Table>
    </div>
  );
};

export default Home;
