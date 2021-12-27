import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Home";
import CreatePost from "./Components/CreatePost";
import EditPost from "./Components/EditPost";
const App = () => {
  return (
    <Router>
      <section>
        <article>
          <header>
            <Navbar />
            <ToastContainer />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-post" element={<CreatePost />} />
              <Route path="/update-post/:id" element={<EditPost />} />
            </Routes>
          </main>
        </article>
      </section>
    </Router>
  );
};

export default App;
