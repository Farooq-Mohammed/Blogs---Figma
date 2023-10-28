import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import ViewPost from "./components/post/viewpost/ViewPost";
import Contact from "./components/contact/Contact";
import Add from "./components/post/addPost/Add";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Blogs from "./components/blogs/Blogs";
import Works from "./components/works/Works";
import Footer from "./components/footer/Footer";

import "./App.css";
const PrivateRoute = () => {
  return (
    <div className="PrivateRoute">
      <Navbar />
      <div className="main-container">
        <Outlet />
      </div>
      <div className='footer-container'><p><b>© Omar Farooq</b></p></div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/post/add" element={<Add />} />
            <Route path="/post/:id" element={<ViewPost />} />
            <Route path="/portfolio" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
