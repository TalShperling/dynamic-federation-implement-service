import { ICategory } from './Category';
import { IEpisode } from './Episode';

export interface IBook {
  id: number;
  title: string;
  category: ICategory;
  episode: IEpisode;
}
