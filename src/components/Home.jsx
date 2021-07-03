import Table from "./Table";
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
