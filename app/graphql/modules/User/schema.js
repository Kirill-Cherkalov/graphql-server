
const { gql } = require('apollo-server-koa');

const userSchema = gql`
  type Query {
    user(id: ID!): User
  }

  type User {
    id: ID!
    username: String!
  }
`;

module.exports = userSchema;
