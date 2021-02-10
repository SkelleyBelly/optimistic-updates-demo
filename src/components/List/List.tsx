import { Box, Grid, Typography } from "@material-ui/core";
import Card from "../Card";
import Counter from "../Counter";
import Input from "../Input";
import ListItem from "../ListItem";

export interface ListProps {
  books: Array<{
    name: string;
    hasBeenRead: boolean;
  }>;
}

const List = ({ books }: ListProps) => {
  const numberRead = books.filter(({ hasBeenRead }) => hasBeenRead).length;

  return (
    <Card>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Counter value={numberRead} mr={3} />
        <Typography variant="h6">Books read this year</Typography>
      </Box>
      <Box my={5} mx={10}>
        <Grid container spacing={4}>
          {books.map(({ hasBeenRead, name }) => (
            <Grid item xs={12}>
              <ListItem
                name={name}
                onNameChange={console.log}
                hasBeenRead={hasBeenRead}
                onToggle={console.log}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Box ml="34px">
              <Input
                onChange={console.log}
                onEnter={console.log}
                placeholder="Add a new book..."
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default List;
