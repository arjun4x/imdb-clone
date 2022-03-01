import React from 'react';
import './App.scss';
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Footer from  './components/Footer/Footer';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';

const App = () => {

  const errorHandler = (error,errorInfo) =>{
    console.log("logging" , error , errorInfo);
  }

  return (
    <div className='app'>
 <Router>
  <Header></Header>
  <Routes>
  <Route path="/" exact element={<Home/>} />
  <Route path ="/movie/:id" element={<MovieDetails/>}/>
  <Route component={<PageNotFound/>}/>
  </Routes>
  <Footer/>
</Router>
</div>
  )  
}

export default App