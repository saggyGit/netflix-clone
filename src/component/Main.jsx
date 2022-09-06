import React from 'react'
import Banner from './Banner';
import Row from './Row';
import requests from '../request';


function Main() {
  return (
    <div className='main'>
      <Banner/>
      <Row title="NETFLIX ORIGNALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default Main
