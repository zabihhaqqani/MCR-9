export const DataReducer = (state, action) => {
  switch (action.type) {
    case "SET_WATCH_LATER":
      return {
        ...state,
        watchLater: action.payload,
      };

    case "SET_NOTES":
      return {
        ...state,
        notes: action.payload,
      };

    case "ADD_TO_WATCH_LATER":
      const updatedWatchLater = [...state.watchLater, action.payload];
      localStorage.setItem("watchlater", JSON.stringify(updatedWatchLater));
      return { ...state, watchLater: updatedWatchLater };

    case "REMOVE_FROM_WATCH_LATER":
      const removedFromWatchLater = state?.watchLater.filter(
        (video) => video?._id !== action.payload?._id
      );
      localStorage.setItem("watchlater", JSON.stringify(removedFromWatchLater));
      return { ...state, watchLater: removedFromWatchLater };

    case "ADD_NOTE":
      const updatedNotes = [...state.notes, action.payload];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return { ...state, notes: updatedNotes };

    case "REMOVE_NOTE":
      const removedFromNotes = state?.notes.filter(
        (note) => note?._id !== action.payload
      );
      localStorage.setItem("notes", JSON.stringify(removedFromNotes));
      return { ...state, notes: removedFromNotes };

    case "EDIT_NOTE":
      
      const editedNotes = state?.notes.map(
        (note) => note?._id === action.payload[1] ? {...action.payload[0]} : note
      );
      localStorage.setItem("notes", JSON.stringify(editedNotes));
      return { ...state, notes: editedNotes };
    default:
      return state;
  }
};
