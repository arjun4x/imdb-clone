import React,{useEffect} from 'react'
import MovieList from '../MovieList/MovieList';
import { useDispatch } from 'react-redux';
import {  fetchAsyncMovies, fetchAsyncSeries } from '../../features/Movies/movieSlice';




const Home = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
dispatch(fetchAsyncSeries());
dispatch(fetchAsyncMovies());

  },[dispatch]);
  return (
	<div className='home' >
    <MovieList/>
  </div>
  )
}

export default Home