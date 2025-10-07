import './Header.css'
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
  return (
    <header className='header'>
      <aside className='headerA'>
        <h1>
            MovieMate2.0
        </h1>
        <div>
          <p>Home</p>
          <p>Movies</p>
          <p>TV-Series</p>
        </div>
      </aside>
      <aside className='search'>
        <IoSearchSharp size={20}/>
      </aside>
    </header>
  )
}

export default Header
