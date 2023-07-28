import { useContext, createContext, useReducer } from "react";
import { useState } from "react";
import { DataReducer } from "../reducer/DataReducer";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const initialHabitDetailsState = {
    name: "exercise",
    repeat: "",
    goal: "",
    timeofDay: "",
    startDate: "",
  };

  const [habit, setHabit] = useState(initialHabitDetailsState);

  const habitHandler = (event) => {};

  const [dataState, dataDispatch] = useReducer(
    DataReducer,
    initialHabitDetailsState
  );

  return (
    <DataContext.Provider
      value={{ habit, setHabit, habitHandler, initialHabitDetailsState }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);
