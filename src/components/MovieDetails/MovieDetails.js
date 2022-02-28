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
  let data='';
  if(details){
    data =<h1>Loading.....</h1>;
if(!details){
  data =<h1>Loading.....</h1>;
  
}else{

  data = <Data details={details}/> 

}
  }

  return (
    <div>
    {data}
    </div>
  )
}

export default MovieDetails