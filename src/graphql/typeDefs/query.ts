import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const queryType: DocumentNode = gql`
  extend type Query {
    book(bookId: ID!): Book
    books: [Book]
  }
`;
