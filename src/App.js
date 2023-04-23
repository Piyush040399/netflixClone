import "./App.css";
import { Banner } from "./components/Banner/Banner";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Home
        title={"NETFLIX ORGINALS"}
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Home title={"Trending Now"} fetchURL={requests.fetchTrending} />
      <Home title={"Top Rated"} fetchURL={requests.fetchTopRated} />
      <Home title={"Action Movies"} fetchURL={requests.fetchActionMovies} />
      <Home title={" Comedy Movies"} fetchURL={requests.fetchComedyMovies} />
      <Home title={" Horror Movies"} fetchURL={requests.fetchHorrorMovies} />
      <Home title={"Romance Movies"} fetchURL={requests.fetchRomanceMovies} />
      <Home title={"Documentaries"} fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
