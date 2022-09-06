import Row from './component/Row';
import requests from './request';
import "./App.css"
import Navbar from './component/Navbar'
import Banner from './component/Banner';

function App() {
  return (
    <div className="app">
      <Navbar/>
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
  );
}

export default App;