
import { useHistory } from "react-router-dom";
import { useDataContext } from "../context/data_context";

const AddMeals = () => {
  const { addMeals, current, changeData} = useDataContext()  
  const history = useHistory();

  const handleSubmit = (e) => {
      e.preventDefault()
        addMeals(current)
        history.push("/home");
  }

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
            required
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

        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default AddMeals;
