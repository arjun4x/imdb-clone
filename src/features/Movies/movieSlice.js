import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from '../../api/MovieApi';
import { MovieApiKey } from "../../api/MovieApiKey";


export  const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
  async (search) =>{
	  let searchValue="";
	  if(search ){
		searchValue = search;
	}else{
		searchValue = "war"
	}
    let response = await MovieApi.get(`?apiKey=${MovieApiKey}&s=${searchValue}&type=movie`); 
	console.log(response.data);
	
		if(!response){
			return response = false;
		}else{
			return response.data;
		}
   
   

	
   });


   export  const fetchAsyncSeries = createAsyncThunk('movies/fetchAsyncSeries',
   async (search) =>{
	   console.log(search);
	   let  searchValue=""
	   if(search ){
		   searchValue = search;

	   }else{
		   searchValue = "love"

	   }
	 let response = await MovieApi.get(`?apiKey=${MovieApiKey}&s=${searchValue}&type=series`); 
	 console.log(response.data);
		 if(!response){
			 return response = false;
		 }else{
			 return response.data;

		 }
		
	
	});


	export  const fetchAsyncDetails = createAsyncThunk('movies/fetchAsynDetails',
	async (id) =>{
		console.log(id);
	  const response = await MovieApi.get(`?apiKey=${MovieApiKey}&i=${id}&plot=full`); 
	  console.log(response.data);
	  return response.data;
	});


 const initialState = {
	movie:{},
	seriess:{},
	details:{},
	
    };

 const movieSlice = createSlice({
	name:"movies",
	initialState,
	reducers:{
	addMovies:(state,{payload})=>{
		return state.movies = payload;
		},

	},
	extraReducers:{
		[fetchAsyncMovies.pending] :()=>{
			console.log('pending');
		},
		[fetchAsyncMovies.fulfilled] :(state,{payload})=>{
			console.log("fullfilled");
			return {...state,movies:payload}	
		},
		[fetchAsyncMovies.rejected]:()=>{
			console.log("rejected");
		},
		[fetchAsyncSeries.pending] :()=>{
			console.log('pending');
		},
		[fetchAsyncSeries.fulfilled]:(state,{payload})=>{
			console.log("fullfilled");
			return {...state, series:payload}
		},
		[fetchAsyncSeries.rejected]:()=>{
			console.log("rejected");
		},
		[fetchAsyncDetails.pending] :()=>{
			console.log('pending');
		},
		[fetchAsyncDetails.fulfilled]:(state,{payload})=>{
			return {...state, details:payload}
		},
		[fetchAsyncDetails.rejected]:()=>{
			console.log("rejected");
		},
	
	},
});

export const {addMovies} = movieSlice.actions ;
export default movieSlice.reducer;
export const getAllSeries =(state) => state.movies.series ;
export const getAllMovies = (state) => state.movies.movies ;
export const getAllDetails = (state) =>state.movies.details;


