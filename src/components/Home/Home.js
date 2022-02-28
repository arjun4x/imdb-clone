import React,{useEffect} from 'react'
import MovieList from '../MovieList/MovieList';
import { useDispatch } from 'react-redux';
import {  fetchAsyncMovies, fetchAsyncSeries } from '../../features/Movies/movieSlice';
import './Home.scss';
import Banner from './Banner/Banner';


const Home = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
dispatch(fetchAsyncSeries());
dispatch(fetchAsyncMovies());

  },[dispatch]);
  return (
	<div className='home' >
    {/* <div className='banner'>
      <Banner/>
    </div> */}
    <MovieList/>
  </div>
  )
}

export default Home