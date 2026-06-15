import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserDetail from "./UserDetail";

function Home() {
  return (
    <div>
      <p>Complete the mentioned tasks</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/user/1">Alice</Link>
        <Link to="/user/2">Bob</Link>
        <Link to="/user/3">Charlie</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;