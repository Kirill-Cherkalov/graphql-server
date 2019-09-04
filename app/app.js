
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
require('dotenv').config();

const apolloSrver = require('./graphql/server');

const app = new Koa();
const PORT = 4000;

app.use(bodyParser());
app.use(apolloSrver.getMiddleware({ path: '/' }));

app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${apolloSrver.graphqlPath}`);
});
