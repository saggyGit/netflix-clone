import React, { useEffect, useState } from 'react'
import './Row.css';
import axios from 'axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
// import axios from '../axios';
const API_KEY = "68daf33edf0acc818934e03bde94a1a3";
const baseUrlImg = "https://image.tmdb.org/t/p/original/";
const baseUrl = "https://api.themoviedb.org/3";



function Row({title , fetchUrl ,isLargeRow }) {

    const [movie,setMovie] = useState([]);
    const [trailerUrl,setTrailerurl] = useState("");

    useEffect(()=>{
            axios.get(`${baseUrl}${fetchUrl}`)
            .then(async res=>{
                const data = await res.data.results;
                setMovie(data);
                console.log(data);
            })
            .catch(err=>console.error(err));
            
    },[])

    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        },
    }

    const handleClick = (data)=>{
        if(trailerUrl){
            setTrailerurl("")

        }else{
            movieTrailer(data?.name || "")
            .then(url=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerurl(urlParams.get('v'));

            }).catch(err=>console.error(err));
        }
    }

    // console.log(movie);
  return (
    <div className='row'>
        <h2>
            {title}
        </h2>
        <div className="row__posters">
        {
            movie.map(data=>{
                return(
                    <>
                    <img 
                    key={data.id}
                    onClick={()=>handleClick(data)}
                    className={`row__poster  && ${isLargeRow && "row__posterLarge"} `}
                    src={`${baseUrlImg}${isLargeRow? data.poster_path : data.backdrop_path}`} 
                    alt="img" />
                    </>
                );
            })
        }
        </div>
        {trailerUrl &&<YouTube
        videoId={trailerUrl}
        opts={opts}/>}

    </div>
  )
}

export default Row;
