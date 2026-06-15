import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Welcome to Home Page</h1>;
}

function About() {
  return <h1>About Us</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function RouterExercise() {
  return (
    <Router>
      <div className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default RouterExercise;