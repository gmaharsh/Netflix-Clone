import './App.css';
import Row from './Row';
import request from './requests';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <Row
        title="NETFLIX Originals"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow= {true}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl = {request.fetchActionMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Comedy Movies" fetchUrl = {request.fetchComedyMovie} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrerMovies} />
      <Row title="Documentaries" fetchUrl = {request.fetchDocumentaries} />
    </div>
  );
}

export default App;
