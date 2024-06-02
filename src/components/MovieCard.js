import React from 'react'
// import '../styles.css'

export default function MovieCard({ movie, isWhitelisted, toggleWatchList }) {
	const handleError = (e) => {
		e.target.src = 'images/default.jpg'
	}

	const getratingclass = (rating) => {

		if (rating >= 8)
			return 'rating-good'

		if (rating >= 5 && rating < 8)
			return 'rating-ok'

		return 'rating-bad'

	}

	return (
		<div key={movie.id} className="movie-card">
			<img src={`images/${movie.image}`} alt="{movie.title}" onError={handleError} />
			<div className="movie-card-info">
				<h3 className="movie-card-title"> {movie.title} </h3>
				<div>
					<span className="movie-card-genre"> {movie.genre} </span>
					<span className={`movie-card-rating ${getratingclass(movie.rating)}`}> {movie.rating} </span>
				</div>
				<label className="switch">
					<input type="checkbox" 
					checked={isWhitelisted} 
					onChange={() => toggleWatchList(movie.id)}>
					</input>
					<span className='slider'>
						<span className='slider-label'>
							{isWhitelisted ? 'In Watchlist' : 'Add to Watchlist'}
						</span>
					</span>

				</label>

			</div>
		</div>



	)
}