import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/CourseDetail.js';
import CourseDetail from './pages/CourseDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
    
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route exact path="/courses" element={<Courses/>} />
          <Route path="/courses/:id" element={<CourseDetail/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/notfound"element={<NotFound/>} />
        </Routes>
    
      <Footer />
    </BrowserRouter>
  );
}

export default App;
