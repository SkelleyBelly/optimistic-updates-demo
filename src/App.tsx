import { useMutation, useQuery } from "@apollo/client";
import { Container, Grid, Slide } from "@material-ui/core";
import { useCallback, useMemo, useState } from "react";
import { List, Book, ControlPanel, useSnackbar } from "./components";
import { GET_BOOKS, UPDATE_BOOK, ADD_BOOK } from "./query";

const DELAY = 1500;

const INITIAL_CONFIG = {
  optimistic: false,
  delay: false,
  forceError: false,
};

const App = () => {
  const [config, setConfig] = useState(INITIAL_CONFIG);

  const { newMessage } = useSnackbar();

  const createErrorMessage = useCallback(
    ({ message }: Error) => {
      newMessage(message);
    },
    [newMessage]
  );

  const { delay, optimistic, forceError } = config;

  const { data, loading } = useQuery<{ books: Array<Book> }>(GET_BOOKS, {
    onError: createErrorMessage,
  });

  const [updateBookMutation] = useMutation(UPDATE_BOOK, {
    onError: createErrorMessage,
    optimisticResponse: optimistic
      ? ({ id, title, hasBeenRead }) => ({
          updateBook: {
            id,
            hasBeenRead,
            title,
            __typename: "Book",
          },
        })
      : undefined,
  });

  const [addBookMutation] = useMutation(ADD_BOOK, {
    onError: createErrorMessage,
    optimisticResponse: optimistic
      ? ({ id, title }) => ({
          addBook: {
            id,
            hasBeenRead: false,
            title,
            __typename: "Book",
          },
        })
      : undefined,
    update: (cache, { data: { addBook } }) => {
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

  const books = useMemo(() => data?.books ?? [], [data]);

  const updateBook = (updatedBook: Book) => {
    updateBookMutation({
      variables: {
        ...updatedBook,
        delay: delay ? DELAY : 0,
        error: forceError ? true : false,
      },
    });
  };

  const addBook = useCallback(
    (title: Book["title"], clearInput: () => void) => {
      const nextId = Math.max(...books.map(({ id }) => id)) + 1;
      addBookMutation({
        variables: {
          title,
          id: nextId,
          delay: delay ? DELAY : 0,
          error: forceError ? true : false,
        },
      });
      clearInput();
    },
    [addBookMutation, books, delay, forceError]
  );

  return (
    <Container maxWidth="lg" style={{ paddingTop: 50 }}>
      <Slide in={!loading} direction="up">
        <Grid container spacing={10}>
          <Grid item xs={12} md={4}>
            <ControlPanel config={config} onChange={setConfig} />
          </Grid>
          <Grid item xs={12} md={8}>
            <List books={books} onChange={updateBook} onAdd={addBook} />
          </Grid>
        </Grid>
      </Slide>
    </Container>
  );
};

export default App;
