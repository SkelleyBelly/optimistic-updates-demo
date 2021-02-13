import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./components";
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
} from "@apollo/client";
import SnackbarProvider from "./components/SnackbarProvider";

const books = [
  {
    id: 1,
    title: "Final Option",
    hasBeenRead: true,
    __typename: "Book",
  },
  {
    id: 2,
    title: "Marauder",
    hasBeenRead: true,
    __typename: "Book",
  },
  {
    id: 3,
    title: "The Chimp Paradox",
    hasBeenRead: false,
    __typename: "Book",
  },
  {
    id: 4,
    title: "The Guest List",
    hasBeenRead: false,
    __typename: "Book",
  },
  {
    id: 5,
    title: "The Galaxy, and the Grounds Within",
    hasBeenRead: false,
    __typename: "Book",
  },
];

const wait = (delay: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), delay);
  });
};

const createError = (predicate: boolean, message: string) => {
  if (predicate) throw new Error(message);
};

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
    addBook(id: Int!, title: String!, delay: Int, error: Boolean): Book
    updateBook(
      id: Int!
      title: String!
      hasBeenRead: Boolean!
      delay: Int
      error: Boolean
    ): Book
  }
`;

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  typeDefs,
  cache: new InMemoryCache(),
  // it would be nicer to use typePolicies for this, but that doesn't produce quite the right behaviour
  // local mutation resolvers are going out the window, but they worked nicely for this example
  // https://spectrum.chat/apollo/apollo-client/how-to-use-mutations-with-local-only-fields~faa0c796-8f10-4c13-bae1-be7fe559c5fa
  resolvers: {
    Query: {
      books: () => books,
    },
    Mutation: {
      updateBook: async (
        _,
        { id, title, hasBeenRead, delay = 0, error = false }: any
      ) => {
        await wait(delay);

        createError(error, "Error arg was set to true. You asked for this.");

        const index = books.findIndex(({ id: ID }) => id === ID);

        createError(index === -1, "This ID does not exist in the database");

        const updatedBook = { id, title, hasBeenRead, __typename: "Book" };

        books[index] = updatedBook;

        return updatedBook;
      },

      addBook: async (_, { id, title, delay = 0, error = false }: any) => {

        await wait(delay);

        createError(error, "Error arg was set to true. You asked for this.");

        createError(
          books.some(({ id: ID }) => id === ID),
          "This ID already exists in the database"
        );

        const newBook = { id, title, hasBeenRead: false, __typename: "Book" };

        books.push(newBook);

        return newBook;
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider>
    <SnackbarProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </SnackbarProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
