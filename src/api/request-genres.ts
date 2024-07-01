import axios from 'axios';
import { MOVIE_GENRE_API, MOVIE_TOKEN } from './constants';

const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${MOVIE_TOKEN}`
    },
  };

async function getGenresRequest() {
    try {
        const request = await axios.get(MOVIE_GENRE_API, options);

        return request.data.genres;
    } catch (error) {
        console.error(error);
        return [];
    }    
}

export const genresFromRequest = await getGenresRequest();