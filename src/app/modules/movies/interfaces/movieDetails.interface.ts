import { IMovie } from './movie.interface';


export interface IMovieDetails extends IMovie {
  production_companies: production_companies[];
  production_countries: production_countries[];
  spoken_languages: spoken_languages[];
  status: string;
  tagline: string;
}

interface production_companies {
  id: number;
  name: string;
  origin_country: string;
}

interface production_countries {
  iso_3166_1: string;
  name: string;
}

interface spoken_languages {
  english_name: string;
  iso_639_1: string;
  name: string;
}
