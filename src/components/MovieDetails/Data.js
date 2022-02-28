import React from 'react';
 import {Link} from 'react-router-dom';

  const Data = ({details}) =>{
   return(
 	<div className='movie-section'>
  <div className='section-left'>
  <div className='movie-title'>{details.Title}</div>
  <div className='movie-rating'>
    <span>
      IMDB rating <i className="fa fa-star"></i> :{details.imdbRating}
    </span>
    <span>
      IMDB Votes <i className='fa fa-thumbs-up'></i> :{details.imdbVotes}
    </span>
    <span>
      Runtime <i className='fa fa-film'></i> :{details.Runtime}
    </span>
    <span>
      Year <i className='fa fa-calendar'></i> :{details.Year}
    </span>
  </div>
  <div className='movie-plot'>
    {details.Plot}
  </div>
  <div className='movie-info'>
    <div>
      <span>Director</span>
      <span>{details.Director}</span>
    </div>
    <div>
      <span>Stars</span>
      <span>{details.Actors}</span>
    </div>
    <div>
      <span>Generes</span>
      <span>{details.Genre}</span>
    </div>
    <div>
      <span>Languages</span>
      <span>{details.Language}</span>
    </div>
    <div>
      <span>Awards</span>
      <span>{details.Awards}</span>
    </div>
  </div>

</div>
<div className='section-right'>
  <img src={details.Poster} alt="Image"/>
</div>
<Link to={'/'}><button className='Button'>Back</button></Link>
</div>
) 
 }
 export default Data;