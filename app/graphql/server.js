
const { ApolloServer } = require('apollo-server-koa');

const { prisma } = require('../../prisma/generated/prisma-client');

const { typeDefs, resolvers } = require('./index');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ ctx }) => ({
    prisma,
    ...ctx,
  }),
});

module.exports = server;
