require('reflect-metadata');

const Koa = require('koa');
const { ApolloServer } = require('apollo-server-koa');
const bodyParser = require('koa-bodyparser');

const graphQlModule = require('./graphql/modules/index');

const app = new Koa();
const PORT = 4000;

app.use(bodyParser());

const server = new ApolloServer({
  schema: graphQlModule.schema,
  // context: session => session,
});

app.use(server.getMiddleware({ path: '/' }));

app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
