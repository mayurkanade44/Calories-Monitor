import { useEffect} from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDataContext } from "../context/data_context";

const EditMeals = () => {
  const { id } = useParams();
  const history = useHistory();
  const { fetchSingleData, current, changeData, updateData} = useDataContext();

  useEffect(() => {
    fetchSingleData(id);
    // eslint-disable-next-line
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData(current);
    history.push("/home");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={current.date || ""}
            onChange={changeData}
            disabled
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Meals</label>
          <input
            type="text"
            className="form-control"
            name="meals"
            value={current.meals || ""}
            onChange={changeData}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Calories</label>
          <input
            type="number"
            className="form-control"
            name="calories"
            value={current.calories || ""}
            onChange={changeData}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditMeals;
