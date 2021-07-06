import React, { useEffect, useState } from "react";
import { useDataContext } from "../context/data_context";
import { Link } from "react-router-dom";

const DailyTarget = () => {
  const { target, fetchDailyTarget, setDailyTarget } = useDataContext();
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState("");

  const onChange = (e) => {
    setCurrent(e.target.value);
  };

  const onSave = (e) => {
    e.preventDefault();
    setShow(false);
    setDailyTarget(current);
  };

  const setTarget = () => {
    if (target.length > 0) {
      return setCurrent(target[0]);
    }
  };

  useEffect(() => {
    setTarget();
    // eslint-disable-next-line
  }, [target]);

  useEffect(() => {
    fetchDailyTarget();
    // eslint-disable-next-line
  }, [show]);
  return (
    <>
      <div className="d-flex justify-content-between my-3">
        <Link to="/addmeals" className="btn btn-primary">
          Add Meals
        </Link>
        <div>
          <button onClick={() => setShow(true)} className="btn btn-primary">
            Update Daily Target
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        {show ? (
          <div className="input-group mb-3" style={{ width: 160 }}>
            <input
              type="number"
              className="form-control"
              value={current.target}
              onChange={onChange}
            />
            <button
              className="btn btn-outline-dark"
              type="button"
              onClick={onSave}
            >
              Save
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default DailyTarget;
