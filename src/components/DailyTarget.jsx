import React, { useEffect } from "react";
import { useDataContext } from "../context/data_context";
import { Link } from "react-router-dom";

const DailyTarget = () => {
  const { target, fetchDailyTarget } = useDataContext();
  useEffect(() => {
    fetchDailyTarget();
  }, []);
  return (
    <div className="d-flex justify-content-between my-3">
      <Link to="/addmeals" className="btn btn-primary">
        Add Meals
      </Link>
      <div>
        {target ? (
          <button className='btn btn-primary'>Update Daily Target</button>
        ) : (
          <button>Add Daily Target</button>
        )}
      </div>
    </div>
  );
};

export default DailyTarget;
