import {requestMovie} from "../../helpers/functions";

export const FETCH_MOVIE_REQUEST = 'FETCH_MOVIE_REQUEST';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_ERROR = 'FETCH_MOVIE_ERROR';

export function fetchMovieRequest() {
    return {
        type: FETCH_MOVIE_REQUEST,
    };
}

export function fetchMovieError(error) {
    return {
        type: FETCH_MOVIE_ERROR,
        data: error
    };
}

export function fetchMovieSuccess(movie) {
    return {
        type: FETCH_MOVIE_SUCCESS,
        data: movie
    };
}

export function fetchMovie(movieTitle, index) {
    return dispatch => {
        dispatch(fetchMovieRequest());
        const movie = loadData(movieTitle);
        if (!movie) {
            dispatch(fetchMovieError('Error on the API request'));
        }
        dispatch(fetchMovieSuccess(loadData(movieTitle, index)));
    }
}

const loadData = async (title, index) => {
    const response = await fetch(requestMovie(title));
    const data = await response.json();
    return {
        id: index,
        title: title,
        description: data.results[0].overview,
        release: data.results[0].release_date,
        poster: data.results[0].poster_path,
        isWatched: false,
        rating: 0
    };
};