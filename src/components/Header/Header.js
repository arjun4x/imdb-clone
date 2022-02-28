import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchAsyncBanner, fetchAsyncMovies, fetchAsyncSeries } from '../../features/Movies/movieSlice';
import image from '../../images/user.png'
import  './Header.scss';

const Header = () => {
  let movieValue = "";
  
  const [search,setSearch] = useState("");
  const dispatch = useDispatch();
  
const submitHandler = (e) =>{
  e.preventDefault();
   
  const movieValue = search;
 
  
  
  dispatch(fetchAsyncMovies(movieValue));
  dispatch(fetchAsyncSeries(movieValue));
  
  setSearch("");
}


  return (
	<div className='header'>
  <Link to="/">
  <div className='logo'>Movie App</div>
  </Link>  
  <div className='search'>
    <form onClick={submitHandler}>
      <input placeholder="Search...." type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <button className='button' >Search</button>
    </form>
  </div>
  <div className="user-image">
    <img src={image}/>
  </div>

  </div>
  )
}

export default Header