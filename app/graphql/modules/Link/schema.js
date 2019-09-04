const { gql } = require('apollo-server-koa');

const schema = gql`
  extend type Query {
    feed: [Link!]!
  }

  extend type Mutation {
    post(url: String!, description: String!): Link!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
    postedBy: User
  }
`;

module.exports = schema;
