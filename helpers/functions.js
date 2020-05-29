import {TMD_KEY} from "../api_key";

export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}

export function requestMovie(name) {
    return `https://api.themoviedb.org/3/search/movie?api_key=${TMD_KEY}&language=fr-FR&query=${name}&page=1&include_adult=false`
}