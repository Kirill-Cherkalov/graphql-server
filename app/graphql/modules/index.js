const QuerySchema = require('./Query/schema');
const MutationSchema = require('./Mutation/schema');
const LinkSchema = require('./Link/schema');
const UserSchema = require('./User/schema');

const User = require('./User');
const Link = require('./Link');

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
