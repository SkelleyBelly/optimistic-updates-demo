import { Container } from "@material-ui/core";
import { List } from "./components";

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

const App = () => (
  <Container maxWidth="md" style={{paddingTop: 100}}>
    <List books={initialState} onChange={console.log} onAdd={(name) => console.log({name})}/>
  </Container>
)

export default App;
