import './MovieCard.css';
import { FaPlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card" style={{ backgroundImage: `url(${movie.image})` }}>
      <div className="movie-overlay">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-details">
           <aside className='sided'>
              <p>{movie.year}</p>
              <p style={{display:'flex', gap:'0.3rem'}}><FaStar/>{movie.rating}/10</p>
           </aside>
           <p className='genre'> {movie.genre}</p>
        </div>
        <div className="play-button">
           <FaPlay color='#fff'/>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;