const { ApolloServer } = require('apollo-server');
// const { importSchema } = require('graphql-import');

const { prisma } = require('../../prisma/generated/prisma-client');
const { typeDefs, resolvers } = require('./modules/index');

// const resolvers = require('./withoutModules');

const server = new ApolloServer({
  // typeDefs: importSchema('./app/graphql/withoutModules/schema.graphql'),
  typeDefs,
  resolvers,
  context: ({ ctx }) => ({
    prisma,
    ...ctx,
  }),
  subscriptions: {
    path: '/subscriptions',
  },
  engine: {
    apiKey: process.env.ENGINE_API_KEY,
  },
});

module.exports = server;
