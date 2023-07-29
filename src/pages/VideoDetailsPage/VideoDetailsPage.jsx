import { useNavigate, useParams } from "react-router";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import { useDataContext } from "../../context/DataContext";
import { useState } from "react";
import NotesForm from "../../components/NotesForm/NotesForm";
import Notes from "../Notes/Notes";
import EditNotes from "../../components/NotesForm/EditNotes";
import "./VideoDetailsPage.css";

const VideoDetailsPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const { dataState, dataDispatch } = useDataContext();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const video = dataState?.videosData?.find((data) => data?._id === Number(id));

  const inWatchLater = dataState?.watchLater?.find(
    (data) => data?._id === Number(id)
  );

  const moreVideos = dataState?.videosData?.filter(
    (data) => data?._id !== Number(id)
  );

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <LeftSideBar />
      <div className="main-content">
        <iframe width="100%" height="50%" src={video?.src}></iframe>
        <div className="title-container">
          <span>
            <strong>{video?.title}</strong>
          </span>
          <div className="icons-container">
            <i
              onClick={() => {
                if (!inWatchLater) {
                  dataDispatch({
                    type: "ADD_TO_WATCH_LATER",
                    payload: video,
                  });
                } else {
                  dataDispatch({
                    type: "REMOVE_FROM_WATCH_LATER",
                    payload: video,
                  });
                }
              }}
              className={
                inWatchLater
                  ? "fa-solid fa-clock fa-lg"
                  : "fa-regular fa-clock fa-lg"
              }
            ></i>
            <i
              onClick={() => setIsModalOpen(true)}
              className="fa-solid fa-notes-medical fa-lg"
            ></i>
            <span className="material-symbols-outlined">edit_note</span>
          </div>
          {isModalOpen && <NotesForm onClose={handleModalClose} videoId={id} />}
        </div>
        <hr />
        <div>
          <Notes id={id} />
        </div>
      </div>

      <div>
        <h3> More videos</h3>

        <ul>
          {moreVideos?.slice(0, 5)?.map((video) => (
            <div
              onClick={() => navigate(`/video/${video?._id}`)}
              key={video?._id}
            >
              <img src={video?.thumbnail} alt="" />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoDetailsPage;
