import { IMovie } from './movie.interface';


export interface IMovieDetails extends IMovie {
  genres: IGenre[];
  homepage: string;
  production_companies: IProductionCompanies[];
  production_countries: IProductionCountries[];
  spoken_languages: ISpokenLanguages[];
  status: string;
  tagline: string;
}

interface IGenre {
  id: number;
  name: string;
}

interface IProductionCompanies {
  id: number;
  name: string;
  origin_country: string;
}

interface IProductionCountries {
  iso_3166_1: string;
  name: string;
}

interface ISpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}
