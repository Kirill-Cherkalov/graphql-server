
const { gql } = require('apollo-server-koa');

const userSchema = gql`
  type Query {
    book(id: ID!): Book
  }

  type Book {
    id: ID!
    bookName: String!
  }
`;

module.exports = userSchema;
