import { useParams } from "react-router";
import { useDataContext } from "../../context/DataContext";
import { useEffect, useState } from "react";
import EditNotes from "../../components/NotesForm/EditNotes";

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
          {filteredNotes?.map((data) => (
            <div key={data?._id}>
              <p>
                {data?.note}{" "}
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
              </p>
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
        <h4>No Notes</h4>
      )}
    </div>
  );
};

export default Notes;
