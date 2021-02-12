import { useQuery } from "@apollo/client";
import { Box, Container, Fade, Slide } from "@material-ui/core";
import { List } from "./components";
import { GET_BOOKS } from "./query";

const initialState = [
  {
    id: 1,
    name: "Final Option",
    hasBeenRead: true,
  },
  {
    id: 2,
    name: "Marauder",
    hasBeenRead: true,
  },
  {
    id: 3,
    name: "The Chimp Paradox",
    hasBeenRead: false,
  },
  {
    id: 4,
    name: "The Guest List",
    hasBeenRead: false,
  },
  {
    id: 5,
    name: "The Galaxy, and the Grounds Within",
    hasBeenRead: false,
  },
];

const App = () => {
  const { data, loading } = useQuery(GET_BOOKS);

  const books = data?.books ?? [];

  return (
    <Container maxWidth="md" style={{ paddingTop: 100 }}>
      <Slide in={!loading} direction="up">
        <Box>
          <List
            books={books}
            onChange={console.log}
            onAdd={(name) => console.log({ name })}
          />
        </Box>
      </Slide>
    </Container>
  );
};

export default App;
