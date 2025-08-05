import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';
import { FaCirclePlay } from "react-icons/fa6";
import { LuTvMinimalPlay } from "react-icons/lu";


function MovieList({ movies, title }) {
  return (
    <div className="movie-list">
      <div className='listTitile'>
        <h2>{title}</h2>
        <p className='lightblue'>
           <FaCirclePlay />
           <p>Movies</p>
        </p>
        <p className='lightgrey'>
           <LuTvMinimalPlay />
           <p>TV-Series</p>
        </p>
      </div>
      
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;