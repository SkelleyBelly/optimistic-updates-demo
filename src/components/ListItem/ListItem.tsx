import { Input, InputAdornment, makeStyles, Theme } from "@material-ui/core";
import { useEffect, useMemo, useState } from "react";
import Checkbox from "../Checkbox";

export interface ListItemProps {
  name: string;
  hasBeenRead: boolean;
  onNameChange: (name: string) => void;
  onToggle: (hasBeenRead: boolean) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.action.hover,
    },
    "&$disabled": {
      backgroundColor: "transparent",
    },
  },
  disabled: {},
}));

const ListItem = ({
  name,
  hasBeenRead,
  onToggle,
  onNameChange,
}: ListItemProps) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState(name);

  useEffect(() => {
    setInputValue(name);
  }, [name]);

  const Adornment = useMemo(
    () => (
      <InputAdornment position="start">
        <Checkbox value={hasBeenRead} onChange={onToggle} />
      </InputAdornment>
    ),
    [hasBeenRead, onToggle]
  );

  return (
    <Input
      disabled={hasBeenRead}
      classes={classes}
      value={inputValue}
      // onKeyDown={({ keyCode, target: { value } }: any) => {
      //   if (keyCode === 13) onNameChange(value);
      // }}
      fullWidth
      onChange={({ target: { value } }) => setInputValue(value)}
      disableUnderline
      startAdornment={Adornment}
      onBlur={({ target: { value } }) => onNameChange(value)}
    />
  );
};

export default ListItem;
