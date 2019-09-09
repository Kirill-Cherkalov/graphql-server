const { gql } = require('apollo-server');

const schema = gql`
  type Subscription {
    newLink: Link
  }
`;

module.exports = schema;
