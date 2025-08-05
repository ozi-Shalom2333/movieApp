
import { FaStar } from 'react-icons/fa6';
import './Hero.css';

function Hero({ movie }) {
  return (
    <div className="hero" style={{ backgroundImage: `url(${movie.image})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">{movie.title}</h1>
          <div className="hero-details">
            <p>{movie.year}</p>
            <p>
              <FaStar className="star-icon" /> {movie.rating}/10
            </p>
            <p>{movie.genre}</p>
          </div>
          <button className="hero-button" role="button" aria-label="Watch movie">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;