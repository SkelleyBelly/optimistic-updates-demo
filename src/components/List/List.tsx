import { Box, Grid, Typography } from "@material-ui/core";
import { useCallback, useState } from "react";
import Card from "../Card";
import Counter from "../Counter";
import Input from "../Input";
import ListItem from "../ListItem";

export interface Book {
  id: number;
  name: string;
  hasBeenRead: boolean;
}
export interface ListProps {
  onChange: (value: Book) => void;
  onAdd: (name: string, clearInput: () => void) => void;
  books: Array<Book>;
}

const List = ({ books, onChange, onAdd }: ListProps) => {
  const numberRead = books.filter(({ hasBeenRead }) => hasBeenRead).length;

  const [inputValue, setInputValue] = useState<string>("");

  const clearInput = useCallback(() => {
    setInputValue("");
  }, []);

  const onEnter = useCallback(() => {
    if (inputValue) {
      onAdd(inputValue, clearInput);
    }
  }, [inputValue, clearInput, onAdd]);

  return (
    <Card>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Counter value={numberRead} mr={3} />
        <Typography variant="h6">Books read this year</Typography>
      </Box>
      <Box my={5} mx={10}>
        <Grid container spacing={4}>
          {books.map(({ hasBeenRead, name, id }, index) => (
            <Grid item xs={12} key={id}>
              <ListItem
                name={name}
                onNameChange={(newName) =>
                  onChange({ id, hasBeenRead, name: newName })
                }
                hasBeenRead={hasBeenRead}
                onToggle={(beenRead) =>
                  onChange({ id, name, hasBeenRead: beenRead })
                }
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Box ml="34px">
              <Input
                value={inputValue}
                onChange={setInputValue}
                onEnter={onEnter}
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
