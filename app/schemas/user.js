const { gql } = require('apollo-server-koa');

const user = gql`
  type User {
    id: ID!
    firstName: String!
    lastname: String!
  }
`;

module.exports = {
  user,
};
