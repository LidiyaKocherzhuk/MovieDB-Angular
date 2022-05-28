import { environment } from '../../../../environments/environment';

const { API, apiKey } = environment;

export const urls = {
  movies: `${API}/discover/movie?api_key=${apiKey}`,
  genres: `${API}/genre/movie/list?api_key=${apiKey}`,

}
