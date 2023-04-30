import React from "react";
import { Routes, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";

function App() {
  return (
    <div className="my-16 mx-3">
      <Routes>
        <Route path="/" element={<FirstPage />} />
      </Routes>
    </div>
  );
}

export default App;
