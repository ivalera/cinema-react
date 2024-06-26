import axios from 'axios';
import { MOVIE_GENRE_API, MOVIE_TOKEN } from './constants';

async function getGenresRequest() {
    try {
        const request = await axios.get(MOVIE_GENRE_API, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer ' + MOVIE_TOKEN
            }
        });

        return request.data;
    } catch (error) {
        console.error(error);
    }    
}

async function getGenresList() {
    try {
        const genresList = await getGenresRequest();
        return genresList.genres
    } catch (error) {
        console.error(error)
    }
}

export { getGenresList }