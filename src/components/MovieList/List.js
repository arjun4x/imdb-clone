import React from 'react';
import './List.scss';
const List = ({movie,series}) =>{
	return(
		<div className="movie-wrapper" >
		<div className='movie-list'>
		 <h2>Movies</h2>
		 <div className='movie-container'>
		   {movie}
	  
		  </div>
		</div>
		<div className='show-list'>
		 <h2>Shows</h2>
		 <div className='show-container'>
		   {series}
		  </div>
		</div>
	  </div>
	)
}
export default List;