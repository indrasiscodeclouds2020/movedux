import React, {useState} from 'react'
import MovieCard from '../components/MovieCard'
import '../styles.css'

export default function MoviesGrid({movies, watchLists, toggleWatchList}){
	// State Declare	
	const [searchTerm,setSearchTerm] = useState("") // declaring an empty state for search operation
	const [filterGenre,setGenre] = useState("All Genres") // declaring an empty state for search operation
	const [filterRating,setRating] = useState("All") // declaring an empty state for search operation

	//***********Event change function and setting the state declare */
	// change searchbox
	const changesearchTerm = (e) => {
		setSearchTerm(e.target.value)
	}

	// change genre
	const handleGenreChange = (e) => {
		setGenre(e.target.value)
	}

	// change rating
	const handleRatingChange = (e) => {
		setRating(e.target.value)
	}



	const filtersearchreseults = (movie,searchTerm) => {
		return movie.title.toLowerCase().includes(searchTerm.toLowerCase())
	}

	const filterGenreSelection = (movie,filterGenre) => {
		return filterGenre === 'All Genres' || movie.genre.toLowerCase() === filterGenre.toLowerCase()
	}

	const filterRatingSelectiong = (movie,filterRating) => {
		switch(filterRating){

			case "All":
				return true
			case "Good":
			return movie.rating > 8

			case "Ok":
			return movie.rating > 5 && movie.rating < 8

			case "Bad":
			return movie.rating < 5

			default:
			return false
		}
	}

	// filtering the items from ui
	const filterSearchItems = movies.filter((movie) =>
	//movie.title.toLowerCase().includes(searchTerm.toLowerCase())
	 filterGenreSelection(movie,filterGenre)
	 && 
	 filterRatingSelectiong(movie,filterRating) 
	&&
	 filtersearchreseults(movie,searchTerm) 
	)

	


	return (
		<div className='container'>
			<input type="text" 
			className="search-input" 
			placeholder='Search here'
			value={searchTerm}
			onChange={changesearchTerm}	
			/>
		<div className="filter-bar">

			<div className='filter-slot'>
				<label>Genre</label>
				<select className='filter-dropdown' value={filterGenre} onChange={handleGenreChange}>
					<option>All Genres</option>
					<option>Action</option>
					<option>Drama</option>
					<option>Fantasy</option>
					<option>Horror</option>
				</select>
			</div>

			<div className='filter-slot'>
			<label>Rating</label>
				<select className='filter-dropdown' value={filterRating} onChange={handleRatingChange}>
						<option>All</option>
						<option>Good</option>
						<option>Ok</option>
						<option>Bad</option>
				</select>
			</div>

		</div>


			<div className="movies-grid">
			{
				// array map function
				filterSearchItems.map(movie => 
				<MovieCard 
				movie={movie} 
				key={movie.id} 
				isWhitelisted = {watchLists.includes(movie.id)}
				toggleWatchList={toggleWatchList}
				></MovieCard>
				)

			}
			</div>


		</div>	

		)
}