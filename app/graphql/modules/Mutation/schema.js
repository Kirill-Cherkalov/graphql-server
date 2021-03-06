const { gql } = require('apollo-server');

const schema = gql`
  type Mutation {
    post(url: String!, description: String!): Link!
    signup(email: String!, password: String!, name: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }
`;

module.exports = schema;
