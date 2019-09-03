const { GraphQLModule } = require('@graphql-modules/core');
const merge = require('lodash.merge');

const UserSchema = require('./User/schema');
const UserResolvers = require('./User/resolvers');

const BookSchema = require('./Book/schema');
const BookResolvers = require('./Book/resolvers');
const UserProvider = require('./User/provider.ts');

const graphQlModule = new GraphQLModule({
  typeDefs: [UserSchema, BookSchema],
  resolvers: merge(UserResolvers, BookResolvers),
  providers: [
    UserProvider,
  ],
});

module.exports = graphQlModule;
