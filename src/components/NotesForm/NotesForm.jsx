import { useState } from "react";
import { useDataContext } from "../../context/DataContext";
import { v4 as uuid } from "uuid";
import "./NotesForm.css"

const NotesForm = ({ onClose,videoId }) => {
  const { dataDispatch } = useDataContext();

  const [note, setNote] = useState("");

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = () => {
    dataDispatch({ type: "ADD_NOTE", payload: { _id: uuid() , videoId, note  } });
    onClose();
  };

  return (
    <span className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Add a note</h2>
        <input
          type="text"
          value={note}
          onChange={handleChange}
          placeholder="Add a note"
        />
        <button className="save-button" disabled={note === ""} onClick={handleSubmit}>
          Add New Note
        </button>
      </div>
    </span>
  );
};

export default NotesForm;
