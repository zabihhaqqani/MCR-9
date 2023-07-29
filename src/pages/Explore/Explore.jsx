import { useState } from "react";
import { useDataContext } from "../../context/DataContext";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import VideoCard from "../../components/VideoCard/VideoCard";
import "./Explore.css";

const Explore = () => {
  const { dataState } = useDataContext();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = dataState?.videosData?.filter((data) =>
    data.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <LeftSideBar />
      <div className="main-content">
        <h3>Explore</h3>
        <input
          className="search-bar"
          type="text"
          placeholder="Search video by title"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className="category-container">
          {filteredData?.length > 0 ? (
            <>
              {filteredData?.map((data) => {
                return <VideoCard key={data?._id} video={data} />;
              })}
            </>
          ) : (
            <h4>No Videos Found with that title</h4>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Explore;
