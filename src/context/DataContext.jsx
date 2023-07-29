import { useContext, createContext, useReducer, useEffect } from "react";
import { useState } from "react";
import { DataReducer } from "../reducer/DataReducer";
import { videos } from "../data/VideosData";
import { categories } from "../data/Categories";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const initialState = {
    videosData: videos,
    categoryData: categories,
    playlist: [],
    watchLater: [],
    notes:[]
  };

  const [dataState, dataDispatch] = useReducer(DataReducer, initialState);
  
  
  useEffect(() => {
    const watchLaterFromStorage = localStorage.getItem("watchlater");
    if (watchLaterFromStorage) {
      const parsedWatchLater = JSON.parse(watchLaterFromStorage);
      dataDispatch({ type: "SET_WATCH_LATER", payload: parsedWatchLater });
    }
  }, []);
  
   useEffect(() => {
     const notesFromStorage = localStorage.getItem("notes");
     if (notesFromStorage) {
       const parsedNotes = JSON.parse(notesFromStorage);
       dataDispatch({ type: "SET_NOTES", payload: parsedNotes });
     }
   }, []);

  return (
    <DataContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);
