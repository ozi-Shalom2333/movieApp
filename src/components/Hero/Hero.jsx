import './Hero.css'
import { LuCassetteTape } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { BiSolidMoviePlay } from "react-icons/bi";

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <h1>Ne Zha 2</h1>
        <div className='hero-details'>
            <p className='tape'>
              <LuCassetteTape size={15} />
            </p>
            <p style={{display:'flex', gap:'0.3rem', }}>
                <FaStar size={15} />
                8.0
            </p>
            <div className='hero-genres'>
                <p>Action</p>
                <p>Adventure</p>
                <p>Animation</p>
            </div>
        </div>
        <p className='writeup'>A rebellious young boy, Ne Zha, is feared by the gods and born to mortal parents with wild, uncontrolled powers. Now he's faced with an ancient force intent on destroying humanity, he must grow up to become the hero the world needs.</p>
        <div className='watch-option'>
            <p>
               <FaPlay size={15}/>
               Watch now
            </p>
            <p>
              <BiSolidMoviePlay size={20}/>
              Trailer
            </p>
        </div>
      </div>
      
    </section>
  )
}

export default Hero

