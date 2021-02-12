import express from 'express';
import { ApolloServer, gql, IResolvers, UserInputError } from 'apollo-server-express';

const books = [
  {
    id: 1,
    title: "Final Option",
    hasBeenRead: true,
  },
  {
    id: 2,
    title: "Marauder",
    hasBeenRead: true,
  },
  {
    id: 3,
    title: "The Chimp Paradox",
    hasBeenRead: false,
  },
  {
    id: 4,
    title: "The Guest List",
    hasBeenRead: false,
  },
  {
    id: 5,
    title: "The Galaxy, and the Grounds Within",
    hasBeenRead: false,
  },
];

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Book {
    id: Int!
    title: String!
    hasBeenRead: Boolean!
  }

  type Query {
    books: [Book]
  }

  type Mutation {
  addBook(id: Int!, title: String!): Book
  updateBook(id: Int!, title: String!, hasBeenRead: Boolean!):Book
}
`;

// Provide resolver functions for your schema fields
const resolvers: IResolvers = {
  Query: {
    books: () => books
  },
  Mutation: {
    addBook: (_, { id, title }) => {

      if (books.some(({ id: ID }) => id === ID)) {
        throw new UserInputError('This ID already exists in the database', {
          invalidArgs: ['id'],
        });
      }

      const newBook = { id, title, hasBeenRead: false }

      books.push(newBook);

      return newBook;
    },

    updateBook: (_, { id, title, hasBeenRead }) => {

      const index = books.findIndex(({ id: ID }) => id === ID);

      if (index === -1) {
        throw new UserInputError('This ID does not exist in the database', {
          invalidArgs: ['id'],
        });
      }

      const updatedBook = { id, title, hasBeenRead }

      books[index] = updatedBook;

      return updatedBook;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

app.get('/hello', (_, res) => {
  res.send("Hello World, I'm a Rest Endpoint")
})

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);