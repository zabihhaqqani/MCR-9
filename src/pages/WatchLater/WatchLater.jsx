import VideoCard from "../../components/VideoCard/VideoCard";
import { useDataContext } from "../../context/DataContext";
import LeftSideBar from "../LeftSideBar/LeftSideBar";

const WatchLater = () => {
  const { dataState } = useDataContext();
  return (
    <div className="container">
      <LeftSideBar />
      <div className="main-content">
        <h3>Watch Later</h3>
        <ul className="category-container">
          {dataState?.watchLater?.length > 0 ? (
            <>
              {dataState?.watchLater?.map((data) => {
                return <VideoCard key={data?._id} video={data} />;
              })}
            </>
          ) : (
            <h4>No Videos in Watch Later</h4>
          )}
        </ul>
      </div>
    </div>
  );
};

export default WatchLater;
