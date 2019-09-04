const { gql } = require('apollo-server-koa');

const schema = gql`
  type Query {
    _empty: String
  }
`;

module.exports = schema;
