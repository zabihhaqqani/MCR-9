import { useNavigate, useParams } from "react-router";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import { useDataContext } from "../../context/DataContext";
import { useState } from "react";
import NotesForm from "../../components/NotesForm/NotesForm";
import Notes from "../Notes/Notes";
import EditNotes from "../../components/NotesForm/EditNotes";

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
        <iframe width="420" height="345" src={video?.src}></iframe>
        <p>
          <strong>{video?.title}</strong>
        </p>
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
        {isModalOpen && <NotesForm onClose={handleModalClose} videoId={id} />}
      
        <div>
          <Notes id={id} />
        </div>
      </div>

      <div>
        <h3> More videos</h3>

        <ul>
          {moreVideos?.slice(0, 5)?.map((video) => (
            <li
              onClick={() => navigate(`/video/${video?._id}`)}
              key={video?._id}
            >
              <img src={video?.thumbnail} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoDetailsPage;
