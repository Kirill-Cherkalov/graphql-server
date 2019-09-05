const { gql } = require('apollo-server-koa');

const schema = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    links: [Link!]!
  }

  type AuthPayload {
    token: String
    user: User
  }
`;

module.exports = schema;
