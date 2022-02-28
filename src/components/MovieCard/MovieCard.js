import React from 'react'
import {Link } from  'react-router-dom';
import './MovieCard.scss';
const MovieCard = (props) => {
const id = props.data.imdbID;


  return (
    <div className='card'>
       <Link to={`/movie/${id}`}>
      <div className='card-inner'>
       

        <div className='card-top'>
        <img src={props.data.Poster}  alt={props.data.title}/>
        </div>
        <div className='card-bottom'>
          <div className='card-info'>
            <h4>{props.data.Title}</h4>
            <p>{props.data.Year}</p>
           </div>
        </div>
      </div>
      </Link>
    </div>
	
  )
}

export default MovieCard