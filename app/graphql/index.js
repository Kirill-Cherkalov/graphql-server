const QuerySchema = require('./modules/Query/schema');
const MutationSchema = require('./modules/Mutation/schema');
const LinkSchema = require('./modules/Link/schema');
const UserSchema = require('./modules/User/schema');

const Query = require('./modules/Query/resolvers');
const Mutation = require('./modules/Mutation/resolvers');
const User = require('./modules/User/resolvers');
const Link = require('./modules/Link/resolvers');

const resolvers = {
  Query,
  Mutation,
  User,
  Link,
};

const typeDefs = [QuerySchema, MutationSchema, LinkSchema, UserSchema];

module.exports = {
  typeDefs,
  resolvers,
};
