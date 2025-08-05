
import MovieList from './components/Movies/MovieList';
import movieData from './data/movie_data_full.json';
import './App.css';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Hero movie={movieData.topTrending}/>
      <MovieList movies={movieData.topTrending} title="Top Trending" />
      <MovieList movies={movieData.topRating} title="Top Rated" />
      <MovieList movies={movieData.popular} title="Popular" />
      <MovieList movies={movieData.movies} title="Feature Films" />
      <MovieList movies={movieData.tvSeries} title="TV Series" />
    </div>
  );
}

export default App;