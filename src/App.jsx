import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './container/Footer/Footer';
import Home from './container/Home/Home';

const App = () => (
  <Router>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/registration' element={<Footer/>}/>
    </Routes>
  </Router>
);

export default App;
