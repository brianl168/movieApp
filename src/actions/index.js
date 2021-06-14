export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
}

export function getMovies(titulo) {
    return function(dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
}

export function removeMovieFavorite(payload) {
    return { type: "REM_MOVIE_FAVORITE", payload };
}

export function getMovieDetail(movieId) {
    return function(dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + movieId)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: "GET_MOVIE_DETAILS", payload: json });
        });
    };
}