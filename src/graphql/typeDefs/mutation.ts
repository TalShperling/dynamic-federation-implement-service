import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const mutationType: DocumentNode = gql`
  extend type Mutation {
    createBook(bookToAdd: BookInput!): BookMutationResponse!
    updateBook(bookToUpdate: BookInput!): BookMutationResponse!
    deleteBook(bookIdToDelete: ID!): BookMutationResponse!
  }
`;
