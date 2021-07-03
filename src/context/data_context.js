import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import reducer from "./data_reducer";

const DataContext = createContext();

const initialState = {
  data: [],
  loading: false,
  error: null,
  current: [],
  target: null
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const res = await axios.get("http://127.0.0.1:8000/data/", config);
      dispatch({
        type: "DATA_SUCCESS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "DATA_FAIL",
        payload: error.response.data.detail,
      });
    }
  };

  const fetchSingleData = async (id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(`http://127.0.0.1:8000/data/${id}`, config);
      dispatch({
        type: "SINGLE_DATA_SUCCESS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "DATA_FAIL",
        payload: error.response.data.detail,
      });
    }
  };

  const fetchDailyTarget = async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const res = await axios.get("http://127.0.0.1:8000/data/target/", config);
      dispatch({
        type: "TARGET_SUCCESS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "DATA_FAIL",
        payload: error.response.data.detail,
      });
    }
  };
  console.log(state.target)
  


  //Adding New Meals
  const addMeals = async (newData) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/data/",
        newData,
        config
      );
      dispatch({
        type: "DATA_ADDED",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "DATA_FAIL",
        payload: error.response.data.detail,
      });
    }
  };


  //Updating Meals
  const updateData = async (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.put(
        `http://127.0.0.1:8000/data/${data.id}/`,
        data,
        config
      );
      dispatch({
        type: "DATA_UPDATED",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Delete Meals
  const handleDelete = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/data/${id}`);
    dispatch({
      type: "DELETE_SUCCESS",
      payload: id,
    });
  };

  //Changing the current valur of input
  const changeData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({
      type: "CHANGE_DATA",
      payload: { name, value },
    });
  };

  const clearCurrent = () => {
    dispatch({
      type: "CLEAR_CURRENT",
    });
  };

  return (
    <DataContext.Provider
      value={{
        ...state,
        fetchData,
        handleDelete,
        addMeals,
        changeData,
        updateData,
        fetchSingleData,
        clearCurrent,
        fetchDailyTarget
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
