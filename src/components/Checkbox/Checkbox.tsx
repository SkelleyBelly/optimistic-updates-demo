import { IconButton, makeStyles, Theme, Zoom } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  iconContainer: {
    height: "20px",
    width: "20px",
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.light,
    display: "block",
  },
  iconInner: {
    height: "20px",
    width: "20px",
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
    display: "block",
  },
}));

export interface CheckboxProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const Checkbox = ({ value, onChange }: CheckboxProps) => {
  const classes = useStyles();

  return (
    <IconButton disableRipple onClick={() => onChange(!value)} size="small">
      <span className={classes.iconContainer}>
        <Zoom in={value} appear={false}>
          <span className={classes.iconInner} />
        </Zoom>
      </span>
    </IconButton>
  );
};

export default Checkbox;
