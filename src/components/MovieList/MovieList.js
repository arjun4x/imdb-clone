import React from 'react'
import { useSelector } from 'react-redux';
import {getAllMovies, getAllSeries} from '../../features/Movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.scss'; 
import List from './List';
import { Offline} from "react-detect-offline";

 const MovieList = (props) => {
 let movie,series= ''; 
 const movies = useSelector(getAllMovies) 
   const seriess =useSelector(getAllSeries) ;
   
  console.log(movies);
  console.log(seriess);
 
  const error = <div className='offline'>
                 <Offline >Something went wrong !!!!  </Offline>
                 </div>
const load = <div className='offline'>
             <p>Loading ....</p>
             </div>
const Unknown = <h1>Something went wrong</h1>             
  

  let data ='';
  if(!movies && !seriess){
    data = Unknown;
  }



if(movies && seriess) {
  if(movies.Error ){
    movie=<h1 className='eror'>{movies.Error}</h1>
    series=<h1 className='eror'>{seriess.Error}</h1>;
  
  }else if(seriess.Error) {
    series=<h1 className='eror'>{seriess.Error}</h1>;

  }else{
    movie = movies.Search.map((movie,index)=><MovieCard  key={index} data={movie}/>)
    series = seriess.Search.map((movie,index)=><MovieCard  key={index} data={movie}/>)
  }
}
 
  data=<List movie={movie} series={series}/> ;

 
  return (
    <div>
{!movie && load}
{!movie && error}
{movie && data}
</div>

  )
}

export default MovieList;