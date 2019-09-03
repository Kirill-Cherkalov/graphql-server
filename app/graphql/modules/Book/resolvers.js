// const Provider = require('./provider');

// const Provider = require('./provider.ts');

// const resolvers = {
//   Query: {
//     user: (root, arg, { injector }) => injector.get(Provider).getUserById(arg.id),
//   },
//   User: {
//     id: parent => parent.id,
//     username: parent => parent.username,
//   },
// };

// module.exports = resolvers;


const resolvers = {
  Query: {
    book: (root, arg) => {
      return {
        id: arg.id,
        bookName: 'Moched book Name',
      };
    },
  },
  Book: {
    id: parent => parent.id,
    bookName: parent => parent.bookName,
  },
};

module.exports = resolvers;
