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

  extend type Mutation {
    signup(email: String!, password: String!, name: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }
`;

module.exports = schema;
