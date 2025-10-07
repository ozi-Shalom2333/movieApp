
import MovieList from './components/Movies/MovieList';
import movieData from './data/movie_data_full.json';
import './App.css';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';

const App = () => {
   const data = movieData
   console.log(data)
  return (
    <div >
      <div className='header-hero'>
         <Header/>
         <Hero/>
      </div>
      <div className="App">
        <MovieList movies={movieData.topTrending} title="Top Trending" />
        <MovieList movies={movieData.topRating} title="Top Rated" />
        <MovieList movies={movieData.popular} title="Popular" />
        <MovieList movies={movieData.movies} title="Feature Films" />
        <MovieList movies={movieData.tvSeries} title="TV Series" />
      </div>
    </div>
  );
}

export default App;