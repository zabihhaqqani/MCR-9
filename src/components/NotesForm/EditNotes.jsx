import { useState } from "react";
import { useDataContext } from "../../context/DataContext";
import { v4 as uuid } from "uuid";

const EditNotes = ({ onClose,videoId,noteId }) => {
  const { dataState,dataDispatch } = useDataContext();

  const [noteData, setNoteData] = useState({
    _id:noteId,
    note:dataState?.notes?.find(({_id})=>_id === noteId)?.note,
    videoId:dataState?.notes?.find(({_id})=>_id === noteId)?.videoId
  });


  const handleSubmit = () => {
    dataDispatch({
      type: "EDIT_NOTE",
      payload: [noteData,noteId],
    });
    onClose();
  };

  return (
    <span className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Edit Note</h2>
        <input
          type="text"
          value={noteData?.note}
          name="note"
          onChange={(e) =>
            setNoteData((noteData) => ({
              ...noteData,
              [e.target.name]: e.target.value,
            }))
          }
          placeholder="Edit a note"
        />
        <button className="save-button" disabled={noteData?.note === ""} onClick={handleSubmit}>
          Edit Note
        </button>
      </div>
    </span>
  );
};

export default EditNotes;
