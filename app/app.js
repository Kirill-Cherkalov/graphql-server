
const Koa = require('koa');
const { ApolloServer } = require('apollo-server-koa');
const bodyParser = require('koa-bodyparser');

const { prisma } = require('../prisma/generated/prisma-client');

const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const app = new Koa();
const PORT = 4000;

app.use(bodyParser());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ ctx }) => ({
    prisma,
    ...ctx,
  }),
});

app.use(server.getMiddleware({ path: '/' }));

app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
