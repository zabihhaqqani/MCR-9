import VideoCard from "../../components/VideoCard/VideoCard";
import { useDataContext } from "../../context/DataContext";
import LeftSideBar from "../LeftSideBar/LeftSideBar";

const Playlist = () => {
  const {dataState} = useDataContext()
  return (
    <div className="container">
      <LeftSideBar />
      <div className="main-content">
        <h3>PlayList</h3>
        <ul className="category-container">
          {dataState?.playlist?.length > 0 ? (
            <>
              {dataState?.playlist?.map((data) => {
                return <VideoCard key={data?._id} video={data} />;
              })}
            </>
          ) : (
            <h4>No Videos in PlayList</h4>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Playlist;
