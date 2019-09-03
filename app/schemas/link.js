const { gql } = require('apollo-server-koa');

const Link = gql`
  extend type Query {
    links: Link
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`;

module.exports = {
  Link,
};
