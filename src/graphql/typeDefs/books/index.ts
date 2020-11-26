import { bookMutationResponse } from './bookMutationResponse';
import { bookInputType } from './bookInputType';
import { bookType } from './bookType';
import { DocumentNode } from 'graphql';
import { categoryType } from './categoryType';
import { episodeType } from './episodeType';

export const bookTypeDefs: DocumentNode[] = [
  bookType,
  categoryType,
  episodeType,
  bookInputType,
  bookMutationResponse,
];
