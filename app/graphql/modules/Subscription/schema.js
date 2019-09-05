const { gql } = require('apollo-server-koa');

const schema = gql`
  type Subscription {
    newLink: Link
  }
`;

module.exports = schema;
