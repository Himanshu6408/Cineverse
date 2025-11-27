import React from "react";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import DetailsPage from "./Components/DetailsPage";


function App() {
  return (
    <>
      <div>
        {/* Home */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
