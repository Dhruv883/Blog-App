import { HomePage } from "./pages/HomePage.jsx";
import { BlogsPage } from "./pages/BlogsPage.jsx";
import { BlogDetail } from "./pages/BlogDetail.jsx";
import { SignUp } from "./pages/SignUp.jsx";
import { SignIn } from "./pages/SignIn.jsx";
import { Profile } from "./pages/Profile.jsx";
import { CreateBlog } from "./pages/CreateBlog.jsx";
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
