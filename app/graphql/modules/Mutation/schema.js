const { gql } = require('apollo-server-koa');

const schema = gql`
  type Mutation {
    _empty: String
  }
`;

module.exports = schema;
