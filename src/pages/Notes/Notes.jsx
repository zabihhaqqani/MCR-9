import { useParams } from "react-router";
import { useDataContext } from "../../context/DataContext";
import { useEffect, useState } from "react";
import EditNotes from "../../components/NotesForm/EditNotes";
import "./Notes.css"

const Notes = () => {
  const { dataState, dataDispatch } = useDataContext();

  const [isEdit, setIsEdit] = useState(false);

  const { id } = useParams();

  const isNotes = dataState?.notes?.find((notes) => notes?.videoId === id);

  const filteredNotes = dataState?.notes?.filter(
    (note) => note?.videoId === id
  );

  const handleModalClose = () => {
    setIsEdit(false);
  };

  return (
    <div>
      {isNotes ? (
        <div>
            <h3>My Notes</h3>
          {filteredNotes?.map((data) => (
            <div key={data?._id}>
              <div className="notes-container">
                <p>{data?.note} </p>
                <div>
                  <i
                    onClick={() =>
                      dataDispatch({ type: "REMOVE_NOTE", payload: data?._id })
                    }
                    className="fa-solid fa-trash fa-lg"
                  ></i>
                  <i
                    onClick={() => {
                      setIsEdit(!isEdit);
                      dataDispatch({ type: "EDIT_NOTE", payload: data?._id });
                    }}
                    className="fa-solid fa-pen fa-lg"
                  ></i>
                </div>
              </div>
              {/* {isModalOpen && (
                <NotesForm onClose={handleModalClose} videoId={id} />
              )} */}
              {isEdit && (
                <EditNotes
                  onClose={handleModalClose}
                  videoId={data?.videoId}
                  noteId={data?._id}
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        <h3>No Notes</h3>
      )}
    </div>
  );
};

export default Notes;
