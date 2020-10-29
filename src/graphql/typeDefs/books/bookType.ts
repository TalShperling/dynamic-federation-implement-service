import { gql, ITypedef } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const bookType: DocumentNode = gql`
  type Book @key(fields: "id") {
    id: ID!
    title: String!
    author: String!
  }
`;
