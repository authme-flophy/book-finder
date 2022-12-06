import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Book from './components/Book';
import BookCard from './components/BookCard';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Genre from './components/Genre';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import {BrowserRouter as Router,Routes} from './BrowserRouter';

function App() {
  // const title = 'Welcome';
  // const likes = 50;
  return (
    <div className="App">
      <Navbar/>
       <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/books' element={<Book />}>
          <Route path='/books/:id' element={<BookCard />} />
        </Route>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/genres" element={<Genre />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
