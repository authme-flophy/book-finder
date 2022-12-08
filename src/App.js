import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Book from "./components/Book";
import BookIndividual from "./components/BookIndividual";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Genre from "./components/Genre";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
// import {BrowserRouter as Router,Routes} from './BrowserRouter';

function App() {
  // const title = 'Welcome';
  // const likes = 50;

  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/books" element={<Book />}>
          <Route path="/books/:id" element={<BookIndividual />} />
        </Route>
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route
          path="/signup"
          element={<SignUp user={user} setUser={setUser} />}
        />
        <Route path="/genres" element={<Genre />} />
        <Route
          path="/reviews"
          element={<Reviews user={user} setUser={setUser} />}
        />
      </Routes>
      <Footer className="footer" />
    </div>
  );
}

export default App;
