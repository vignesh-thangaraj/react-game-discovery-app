import { Genres } from "./Genres";
import { Platform } from "./Platform";
import { Publishers } from "./Publishers";


export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genres[];
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  description_raw: string;
  publishers: Publishers[]
}
