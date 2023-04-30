import React from "react";
import { Routes, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import TopAnime from "./pages/TopAnime";
import TopManga from "./pages/TopManga";
import SeasonalAnime from "./pages/SeasonalAnime";
import UpcomingAnime from "./pages/UpcomingAnime";
import AnimeSearch from "./pages/AnimeSearch";

function App() {
  return (
    <div className="my-16 mx-3">
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/anime/top" element={<TopAnime />} />
        <Route path="/anime/seasonal" element={<SeasonalAnime />} />
        <Route path="/anime/upcoming" element={<UpcomingAnime />} />
        <Route path="/anime/search" element={<AnimeSearch />} />
        <Route path="/manga/top" element={<TopManga />} />
      </Routes>
    </div>
  );
}

export default App;
