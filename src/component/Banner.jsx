import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "axios";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const Banner = () => {
  const baseUrlImg = "https://image.tmdb.org/t/p/original/";


  const [movie, setMovie] = useState([]);
  const [trailerurl, setTrailerurl] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/all/week?api_key=68daf33edf0acc818934e03bde94a1a3&language=en-US
      `)
      .then(async (res) => {
        const data = await res.data.results;
        setMovie(data[Math.floor(Math.random() * data.length - 1)]);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  
  const handleClick = (data)=>{
    if(trailerurl){
        setTrailerurl("");

    }else{
        movieTrailer(data.name || "")
        .then(url=>{
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerurl(urlParams.get('v'));

        }).catch(err=>console.error(err));
    }
}


      const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          autoplay:1,
        },
      }

  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
                     "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                 )`,
          backgroundPosition: "center-center",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button
              className="banner__button"
              onClick={()=> handleClick(movie)}
            >
              Play
            </button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>

        <div className="banner--fadeBottom" />
      </header>
      {trailerurl &&<YouTube
        videoId={trailerurl}
        opts={opts}/>}

      
    </div>
  );
};

export default Banner;
