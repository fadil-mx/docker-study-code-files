import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home '
import Create from './pages/Create'

function App() {
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar_title'>
          <h1>Anime</h1>
        </Link>
        <div className='navbar_links'>
          <Link to='/' className='navbar_link  '>
            Home
          </Link>
          <Link to='/create' className='navbar_link  '>
            {' '}
            Share
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </>
  )
}

export default App
