import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../context/data_context";

const Table = () => {
  const { data, fetchData, handleDelete, clearCurrent, target } =
    useDataContext();
  const [targetValue, setTargetValue] = useState();

  useEffect(() => {
    fetchData();
    clearCurrent();
    if (target.length) {
      setTargetValue(target[0].target);
    }
    // eslint-disable-next-line
  }, [target]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Meals</th>
            <th>Calories</th>
            <th>Under/Over</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr key={data.id}>
              <td>{data.date}</td>
              <td>{data.meals}</td>
              <td>{data.calories}</td>
              <td>
                {targetValue >= data.calories ? (
                  <span className="green-dot" />
                ) : (
                  <span className="red-dot" />
                )}
              </td>
              <td>
                <Link
                  to={`/editmeals/${data.id}`}
                  className="btn btn-dark me-2"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(data.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
