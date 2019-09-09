require('dotenv').config();

const apolloSrver = require('./graphql/server');

apolloSrver
  .listen({
    port: process.env.SERVER_PORT,
  })
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
    console.log(`🚀 Subscriptions ready at ${apolloSrver.subscriptionsPath}`);
  });
