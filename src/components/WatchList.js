import React from "react";
import MovieCard from "./MovieCard";

export default function WatchList({ movies, watchLists, toggleWatchList }) {
    // Step 1: Filter movies based on watchLists
    const filteredMovies = watchLists
        .map(id => movies.find(movie => movie.id === id))
        .filter(movie => movie !== undefined); // Ensure we filter out any undefined values

    return (
        <div className='container'>
            <h1 className="title">Your Watchlist</h1>
            <div className="watchlist">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map(movie => (
                        <MovieCard 
                            key={movie.id} 
                            movie={movie} 
                            toggleWatchList={toggleWatchList} 
                            isWhitelisted={true} 
                        />
                    ))
                ) : (
                    <div className="title">No movies available</div>
                )}
            </div>
        </div>
    );
}
