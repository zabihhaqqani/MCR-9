import { useNavigate } from "react-router";
import { useDataContext } from "../../context/DataContext";
import "./VideoCard.css";

const VideoCard = ({ video }) => {
  const { dataDispatch, dataState } = useDataContext();

  const navigate = useNavigate();
  const { _id, title, creator, views, thumbnail, category } = video;

  const inWatchLater = dataState?.watchLater?.find((data) => data?._id === _id);
  return (
    <div className="video-container-main">
      <i
        onClick={() => {
          if (!inWatchLater) {
            dataDispatch({ type: "ADD_TO_WATCH_LATER", payload: video });
          } else {
            dataDispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: video });
          }
        }}
        className={
          inWatchLater ? "fa-solid fa-clock fa-lg" : "fa-regular fa-clock fa-lg"
        }
      ></i>
      <div className="video-card" onClick={() => navigate(`/video/${_id}`)}>
        <img className="video-card-img" src={thumbnail} alt={title} />
        <p>
          <strong>{title}</strong>
        </p>
        <p>
          <strong>{category}</strong>
        </p>
        <p>
          {views} views | {creator}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
