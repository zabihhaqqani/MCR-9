import { useNavigate } from "react-router";
import "./CategoryCard.css";

const CategoryCard = ({ data }) => {
    const navigate = useNavigate()
  const { _id, thumbnail, src, category } = data;
  return (
    <div onClick={()=>navigate(`/category/${category}`)} className="category-card">
      <img src={thumbnail} alt={category} />
      <p>
        <strong>{category}</strong>
      </p>
    </div>
  );
};

export default CategoryCard;
