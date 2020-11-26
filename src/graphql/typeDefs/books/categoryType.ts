import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const categoryType: DocumentNode = gql`
  type Category {
    name: String
    val: String
  }
`;
