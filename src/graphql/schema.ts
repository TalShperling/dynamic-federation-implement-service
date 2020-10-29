import 'graphql-import-node';
import { GraphQLSchema } from 'graphql';
import { typeDefs } from './typeDefs/index';
import { resolvers } from './resolvers/index';
import { buildFederatedSchema } from '@apollo/federation/dist/service/buildFederatedSchema';

const schema: GraphQLSchema = buildFederatedSchema({ typeDefs, resolvers });

export default schema;
