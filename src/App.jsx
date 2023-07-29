import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore';
import Playlist from './pages/Playlist/Playlist';
import WatchLater from './pages/WatchLater/WatchLater';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import VideoDetailsPage from './pages/VideoDetailsPage/VideoDetailsPage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/video/:id" element={<VideoDetailsPage />} />
      </Routes>
    </>
  );
}

export default App
