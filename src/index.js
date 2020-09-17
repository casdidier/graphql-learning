const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
type Query {
  hello: String!
}

type User {
  id: ID!
  username: String!
}

type Mutation {
 register: User
}
`;

const resolvers = {
  Query: {
    hello: () => 'hello world'
  },

  // type CRUD
  Mutation: {
    register: () => ({
      id: 1,
      username: "bob"
    })
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`server started at  ${url}`));