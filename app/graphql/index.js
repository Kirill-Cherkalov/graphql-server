const QuerySchema = require('./modules/Query/schema');
const MutationSchema = require('./modules/Mutation/schema');
const LinkSchema = require('./modules/Link/schema');
const UserSchema = require('./modules/User/schema');

const User = require('./modules/User');
const Link = require('./modules/Link');

const resolvers = {
  Query: {
    ...Link.queries,
  },
  Mutation: {
    ...User.mutators,
    ...Link.mutators,
  },
  User: User.resolvers,
  Link: Link.resolvers,
};

const typeDefs = [QuerySchema, MutationSchema, LinkSchema, UserSchema];

module.exports = {
  typeDefs,
  resolvers,
};
