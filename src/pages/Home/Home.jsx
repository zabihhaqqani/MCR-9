import { useDataContext } from "../../context/DataContext";
import "./Home.css";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

const Home = () => {
  const { dataState } = useDataContext();
  return (
    <>
      <div className="container">
        <LeftSideBar />
        <div className="main-content">
          <h3>Categories</h3>
          <ul className="category-container">
            {dataState?.categoryData?.map((category) => {
              return <CategoryCard key={category._id} data={category} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
