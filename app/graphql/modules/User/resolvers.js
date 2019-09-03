const Provider = require('./provider.ts');

const resolvers = {
  Query: {
    user: (root, arg, context) => context.injector.get(Provider).getUserById(arg.id),
  },
  User: {
    id: parent => parent.id,
    username: parent => parent.username,
  },
};

module.exports = resolvers;
