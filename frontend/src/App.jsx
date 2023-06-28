import React from "react";
import HomePage from "./pages/Homepage";
import BlogsPage from "./pages/BlogsPage";
import BlogDetailPage from "./pages/BlogDetail";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="font-FiraSans">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<BlogDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
