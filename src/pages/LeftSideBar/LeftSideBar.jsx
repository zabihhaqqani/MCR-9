import { useNavigate } from "react-router";
import "./LeftSideBar.css";

const LeftSideBar = () => {
  const navigate = useNavigate();

  return (
    <div className="left-sidebar">
      <div className="sidebar-container item-left">
        <ul className="sidebar-items">
          <li onClick={() => navigate("/")}>
            <i style={{}} className="fa-solid fa-house fa-lg"></i>Home
          </li>
          <li onClick={() => navigate("/explore")}>
            {" "}
            <i className="fa-solid fa-compass fa-lg"></i>Explore
          </li>
          <li onClick={() => navigate("/playlist")}>
            <i className="fa-solid fa-bookmark fa-lg"></i>Playlist
          </li>
          <li onClick={() => navigate("/watchlater")}>
            <i className="fa-solid fa-bookmark fa-lg"></i>Watch Later
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSideBar;
