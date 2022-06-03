export interface Game {
  image_background: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: Array<Genre>;
  parent_platforms: Array<parentPlatform>;
  publishers: Array<Publishers>;
  ratings: Array<Rating>;
  screenshots: Array<Screenshots>;
  trailers: Array<Trailer>;
  slug:string,
  id:string
}
export interface APIResponce<T> {
  results: Array<T>;
}
interface Genre {
  name: string;
}
interface parentPlatform {
  platform: {
    name: string;
  };
}
interface Publishers {
  name: string;
}
interface Rating {
  id: number;
  count: number;
  title: string;
}
interface Screenshots {
  image: string;
}

interface Trailer {
  data: { max: string };
}
