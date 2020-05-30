import {FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR, FETCH_MOVIE_REQUEST, ADD_MOVIE_ERROR, ADD_MOVIE_REQUEST, ADD_MOVIE_SUCCESS} from "../actions/movies";

export default function movies(state = {data: [], loading: false, error: false}, action) {
    switch (action.type) {
        case FETCH_MOVIE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_MOVIE_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };
        case FETCH_MOVIE_SUCCESS:
            return {
                data: [...state.data, action.data],
                loading: false,
                error: false
            };
        case ADD_MOVIE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case ADD_MOVIE_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            };
        case ADD_MOVIE_SUCCESS:
            console.log(action.data);
            return {
                data: [...state.data, action.data],
                loading: false,
                error: false
            };
        default:
            return state;
    }
}
