const fs = require('fs');
const path = require('path');

const { gql } = require('apollo-server-koa');
const { GraphQLModule } = require('@graphql-modules/core');
// const typeDefs = require('./schema.graphql');

const MyFirstModule = new GraphQLModule({
  // typeDefs: './app/schemas/schema.graphql',
  typeDefs: [fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8")],
  resolvers: {
    Query: {
      hello: () => 'Hello my fried',
    },
  },
});

module.exports = {
  MyFirstModule,
};
