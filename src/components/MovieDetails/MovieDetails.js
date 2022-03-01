import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { fetchAsyncDetails } from '../../features/Movies/movieSlice';
import { getAllDetails} from '../../features/Movies/movieSlice';
import './MovieDetails.scss';
import Data from './Data';


const MovieDetails = () => {
  const {id} = useParams();
  console.log(id);
const dispatch = useDispatch();
  useEffect(()=>{
  dispatch(fetchAsyncDetails(id));

  },[dispatch])
const details = useSelector(getAllDetails);
  console.log(details);
const load=<div className='load'>
            <p>Loading....</p>
            </div> 

 const  data = <Data details={details}/> 


  

  return (
    <div>
    {!details && load}
    {details && data}
    </div>
  )
}

export default MovieDetails