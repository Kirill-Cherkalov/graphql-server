const { gql } = require('apollo-server-koa');

const schema = gql`
  type Query {
  hello: String!
  feed(filter: String, skip: Int, first: Int, orderBy: LinkOrderByInput): Feed!
  }
  
  type Feed {
    links: [Link!]!
    count: Int!
  }
`;

module.exports = schema;
