import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../context/data_context";

const Table = () => {
  const { data, fetchData, handleDelete, clearCurrent } = useDataContext();
  console.log(data)
  
  useEffect(()=>{
    fetchData();
    clearCurrent();
    // eslint-disable-next-line
  },[])

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Meals</th>
            <th>Calories</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { data.map((data) => (
            <tr key={data.id}>
              <td>{data.date}</td>
              <td>{data.meals}</td>
              <td>{data.calories}</td>
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
