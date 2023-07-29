import { useParams } from "react-router";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useDataContext } from "../../context/DataContext";

const CategoryPage = () => {
  const { dataState } = useDataContext();
  const { category } = useParams();

  const filteredCategoryData = dataState?.videosData?.filter(
    (data) => data.category === category
  );

  return (
    <div className="container">
      <LeftSideBar />
      <div className="main-content">
        <h3>{category}</h3>
        <ul className="category-container">
          {filteredCategoryData?.map((data) => {
            return <VideoCard key={data?._id} video={data} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryPage;
