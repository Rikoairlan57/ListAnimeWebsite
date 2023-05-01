import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TopAnime from "./pages/TopAnime";
import TopManga from "./pages/TopManga";
import SeasonalAnime from "./pages/SeasonalAnime";
import UpcomingAnime from "./pages/UpcomingAnime";
import AnimeSearch from "./pages/AnimeSearch";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-col">
      <div>
        <div className="block md:hidden">
          <Sidebar />
        </div>
        <div className="hidden md:block h-16">
          <Navbar />
        </div>
      </div>
      <div className="my-16 mx-3">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/anime/top" element={<TopAnime />} />
          <Route path="/anime/seasonal" element={<SeasonalAnime />} />
          <Route path="/anime/upcoming" element={<UpcomingAnime />} />
          <Route path="/anime/search" element={<AnimeSearch />} />
          <Route path="/manga/top" element={<TopManga />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
