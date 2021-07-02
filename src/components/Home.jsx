import Table from "./Table";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1>Home</h1>
      <Link to="/addmeals" className="btn btn-primary my-3">
        Add Meals
      </Link>
      <Table></Table>
    </div>
  );
};

export default Home;
