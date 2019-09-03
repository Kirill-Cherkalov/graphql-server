const { GraphQLModule } = require('@graphql-modules/core');
const merge = require('lodash.merge');

const { UserSchema, UserResolvers, UserProvider } = require('./User');

const BookSchema = require('./Book/schema');
const BookResolvers = require('./Book/resolvers');

const graphQlModule = new GraphQLModule({
  typeDefs: [UserSchema, BookSchema],
  resolvers: merge(UserResolvers, BookResolvers),
  providers: [
    UserProvider,
  ],
});

module.exports = graphQlModule;
