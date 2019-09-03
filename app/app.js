require('reflect-metadata');

const Koa = require('koa');
const { ApolloServer } = require('apollo-server-koa');
const bodyParser = require('koa-bodyparser');
const { gql } = require('apollo-server-koa');
const merge = require('lodash.merge');

const graphQlModule = require('./graphql/modules/index');

const app = new Koa();
const PORT = 4000;

app.use(bodyParser());

const Root = gql`
  extend type Query {
    hello: String!
  }
`;

const RootRes = {
  Query: {
    hello: () => "Hello World!"
  }
}

const Author = gql`
  extend type Query {
    author(id: Int!): Author
  }

  type Author {
    id: Int!
    firstName: String
    lastName: String
    books: [Book]
  }
`;

const Book = gql`
  extend type Query {
    book(id: Int!): Book
  }

  type Book {
    title: String
    author: Author
  }
`;

const Query = gql`
  type Query {
    _empty: String
  }
`;

const resolvers = {};

const server = new ApolloServer({
  // schema: graphQlModule.schema,
  // context: session => session,
  typeDefs: [Query, Author, Book, Root],
  resolvers: merge(resolvers, RootRes),
});

app.use(server.getMiddleware({ path: '/' }));

app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
