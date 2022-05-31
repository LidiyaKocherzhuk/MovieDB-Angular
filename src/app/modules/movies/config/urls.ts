import { environment } from '../../../../environments/environment';

const { API, apiKey } = environment;

export const urls = {
  genres: `${API}/genre/movie/list?api_key=${apiKey}`,
  movies: `${API}/discover/movie?api_key=${apiKey}`,
  popular: `${API}/movie/popular?api_key=${apiKey}`,
  nowPlaying: `${API}/movie/now_playing?api_key=${apiKey}`,
  topRated: `${API}/movie/top_rated?api_key=${apiKey}`,
  upcoming: `${API}/movie/upcoming?api_key=${apiKey}`,
}
