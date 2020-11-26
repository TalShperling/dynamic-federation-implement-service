import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const episodeType: DocumentNode = gql`
  type Episode {
    pages: Int
  }
`;
