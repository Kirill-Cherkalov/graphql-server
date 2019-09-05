const { gql } = require('apollo-server-koa');

const schema = gql`
  type Link {
    id: ID!
    description: String!
    url: String!
    postedBy: User
  }

  enum LinkOrderByInput {
    description_ASC
    description_DESC
    url_ASC
    url_DESC
  }
`;

module.exports = schema;
