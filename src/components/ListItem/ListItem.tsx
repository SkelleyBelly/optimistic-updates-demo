import { Input, InputAdornment, makeStyles, Theme } from "@material-ui/core";
import { useEffect, useMemo, useState } from "react";
import Checkbox from "../Checkbox";

export interface ListItemProps {
  title: string;
  hasBeenRead: boolean;
  onTitleChange: (title: string) => void;
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
  title,
  hasBeenRead,
  onToggle,
  onTitleChange,
}: ListItemProps) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState(title);

  useEffect(() => {
    setInputValue(title);
  }, [title]);

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
      //   if (keyCode === 13) onTitleChange(value);
      // }}
      fullWidth
      onChange={({ target: { value } }) => setInputValue(value)}
      disableUnderline
      startAdornment={Adornment}
      onBlur={({ target: { value } }) => onTitleChange(value)}
    />
  );
};

export default ListItem;
