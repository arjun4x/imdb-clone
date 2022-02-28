// import React from 'react'
// import {useSelector} from 'react-redux';
// import { getAllBanner, getAllMovies } from '../../../features/Movies/movieSlice';
// import BannerCard from './BannerCard';
// import Slider from 'react-slick';
// import './Banner.scss';


// const Banner = () =>{

//   const banners = useSelector(getAllMovies);
//   console.log(banners);
//   const error = <h1>Something went wrong</h1>
//   let banner ='';
//    banner = banners?.Search.map((movie,index)=><BannerCard  key={index} data={movie}/>)|| error ;


//   return(
//     <div className="banner-wrapper" >
//     <Slider>
//       {banner}
//     </Slider>
 
    
//       </div>
//   )
// }
// export default  Banner;