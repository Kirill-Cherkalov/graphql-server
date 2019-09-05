const QuerySchema = require('./Query/schema');
const MutationSchema = require('./Mutation/schema');
const LinkSchema = require('./Link/schema');
const UserSchema = require('./User/schema');
const SubscriptionSchema = require('./Subscription/schema');

const User = require('./User');
const Link = require('./Link');
const Query = require('./Query');
const Mutation = require('./Mutation');
const Subscription = require('./Subscription');

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Link,
};

const typeDefs = [QuerySchema, MutationSchema, SubscriptionSchema, LinkSchema, UserSchema];

module.exports = {
  typeDefs,
  resolvers,
};
