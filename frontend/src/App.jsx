import React from "react";
import { HomePage } from "./pages/Homepage";
import { BlogsPage } from "./pages/BlogsPage";
import { BlogDetail } from "./pages/BlogDetail";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Profile } from "./pages/Profile";
import { CreateBlog } from "./pages/CreateBlog";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="font-FiraSans">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
