import { useMutation, useQuery } from "@apollo/client";
import { Box, Container, Slide } from "@material-ui/core";
import { List, Book } from "./components";
import { GET_BOOKS, UPDATE_BOOK, ADD_BOOK } from "./query";

const DELAY = 1500;

const App = () => {
  const { data, loading } = useQuery<{ books: Array<Book> }>(GET_BOOKS);

  const [updateBookMutation] = useMutation(UPDATE_BOOK, {
    optimisticResponse: ({ id, title, hasBeenRead }) => ({
      updateBook: {
        id,
        hasBeenRead,
        title,
        __typename: "Book",
      },
    }),
  });

  const [addBookMutation] = useMutation(ADD_BOOK, {
    optimisticResponse: ({ id, title }) => ({
      addBook: {
        id,
        hasBeenRead: false,
        title,
        __typename: "Book",
      },
    }),
    update: (cache, { data: { addBook } }) => {
      console.log("UPDATED")
      cache.modify({
        fields: {
          books: (existingBooks, { toReference }) => [
            ...existingBooks,
            toReference(addBook),
          ],
        },
      });
    },
  });

  const books = data?.books ?? [];

  const updateBook = (updatedBook: Book) => {
    updateBookMutation({ variables: { ...updatedBook, delay: DELAY } });
  };

  const addBook = (title: Book["title"], clearInput: () => void) => {
    const nextId = Math.max(...books.map(({ id }) => id)) + 1;
    addBookMutation({ variables: { title, id: nextId, delay: DELAY } });
    clearInput();
  };

  return (
    <Container maxWidth="md" style={{ paddingTop: 100 }}>
      <Slide in={!loading} direction="up">
        <Box>
          <List books={books} onChange={updateBook} onAdd={addBook} />
        </Box>
      </Slide>
    </Container>
  );
};

export default App;
