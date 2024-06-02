import logo from './logo.svg';
import './App.css';
import './styles.css';
import Header from './components/Header'
import MoviesGrid from './components/MoviesGrid'
import WatchList from './components/WatchList'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import {useState,useEffect} from 'react'
import Footer from './components/Footer'
function App() {

  const [movies,setMovies] = useState([]) // declaring an empty state for displaying all movies
  const [watchLists,setWatchLists] = useState([])
  // fetching the json response one time
	useEffect(() => {
		fetch("movies.json")
		.then(response => response.json())
		.then(data => setMovies(data))
	},[])

  const toggleWatchList = (movieId) => {
    setWatchLists(prev => 
      prev.includes(movieId) ? prev.filter(id => id!= movieId) : [...prev,movieId]
    )
  }

  return (
    <div className="App">

    <Header></Header>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Movies</Link> </li>
            <li> <Link to="/watchlist">WatchList</Link></li>
        </ul>
      </nav>
    

      <Routes>
        <Route 
            path='/'
            element={<MoviesGrid 
            movies={movies} 
            watchLists={watchLists} 
            toggleWatchList={toggleWatchList}
            />}>
          </Route>

        <Route
         path='/watchlist'
         element={<WatchList 
         movies={movies} 
         watchLists={watchLists} 
         toggleWatchList={toggleWatchList}
         />}>
          </Route>
       
      </Routes>
      </Router>

    <Footer></Footer>

    
    </div>
  );
}

export default App;
