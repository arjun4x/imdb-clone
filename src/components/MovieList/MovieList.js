import React from 'react'
import { useSelector } from 'react-redux';
import {getAllMovies, getAllSeries} from '../../features/Movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.scss'; 
import List from './List';

 const MovieList = (props) => {
 let movie,series= ''; 
 const movies = useSelector(getAllMovies) 
   const seriess =useSelector(getAllSeries) ;
   
  console.log(movies);
  console.log(seriess);
 
  const error = <h1 className="error">Something went wrong</h1>
 
if(movies && seriess){
  if(movies.Error){
    movie=<h1>{movies.Error}</h1>
    series=<h1>{seriess.Error}</h1>;
  }else if(seriess.Error ){
    series=<h1>{seriess.Error}</h1>;
  }else{
  movie = movies.Search.map((movie,index)=><MovieCard  key={index} data={movie}/>)
  series = seriess.Search.map((movie,index)=><MovieCard  key={index} data={movie}/>)
  }
}
  return (
    <div>
{!movies ? error :<List movie= {movie} series={series}/>}
</div>
  )
}

export default MovieList;