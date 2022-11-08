export interface IResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  budget: number;
  runtime: number;
  revenue: number;
  vote_average: number;
  vote_count: number;
}

export interface IMovieInfo {
  page: number;
  results: IResult[];
  total_pages: number;
  total_results: number;
  budget: number;
  revenue: number;
}