import { booksQueries, booksMutations, bookExternalResolvers } from './booksResolvers';
import { GraphQLResolverMap } from 'apollo-graphql';

export const resolvers: GraphQLResolverMap<any> = {
  ...bookExternalResolvers,
  ...booksQueries,
  ...booksMutations,
};
