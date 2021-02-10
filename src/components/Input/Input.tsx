import {
  Input as MuiInput,
  InputProps as MuiInputProps,
  InputAdornment,
  makeStyles,
  SvgIcon,
  Theme,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.primary.main,
  },
  input: {
    padding: 0,
    "&::placeholder": {
      opacity: 0.8,
    },
  },
  adornment: {
    fontSize: "1.4rem",
  },
}));

export interface InputProps
  extends Pick<MuiInputProps, "value" | "placeholder"> {
  onChange: (value: string) => void;
  onEnter: () => void;
}

const Input = ({ placeholder, onChange, onEnter, value }: InputProps) => {
  const classes = useStyles();

  const Adornment = (
    <InputAdornment position="start">
      <SvgIcon viewBox="0 0 17 17" className={classes.adornment}>
        <path
          d="M15.1657 6.99035C15.6898 6.99035 16.1265 7.16538 16.4759 7.51544C16.8253 7.84363 17 8.27027 17 8.79537C17 9.32046 16.8253 9.75804 16.4759 10.1081C16.1265 10.4363 15.6898 10.6004 15.1657 10.6004H10.58V14.8996C10.58 15.5122 10.3725 16.0154 9.95761 16.4093C9.56455 16.8031 9.0623 17 8.45087 17C7.83944 17 7.32627 16.8031 6.91137 16.4093C6.5183 16.0154 6.32177 15.5122 6.32177 14.8996V10.6004H1.8343C1.31021 10.6004 0.873475 10.4254 0.524085 10.0753C0.174695 9.72523 0 9.28764 0 8.76255C0 8.23745 0.174695 7.81081 0.524085 7.48263C0.873475 7.15444 1.31021 6.99035 1.8343 6.99035H6.32177V2.10039C6.32177 1.48777 6.5183 0.984556 6.91137 0.590734C7.32627 0.196911 7.85035 0 8.48362 0C9.09505 0 9.5973 0.196911 9.99037 0.590734C10.3834 0.984556 10.58 1.48777 10.58 2.10039V6.99035H15.1657Z"
          fill="#C31CB5"
        />
      </SvgIcon>
    </InputAdornment>
  );

  return (
    <MuiInput
      value={value}
      fullWidth
      onChange={({ target: { value } }) => onChange(value)}
      onKeyDown={({ keyCode }) => {
        if (keyCode === 13) onEnter();
      }}
      placeholder={placeholder}
      disableUnderline
      startAdornment={Adornment}
      classes={{
        root: classes.root,
        input: classes.input,
      }}
    />
  );
};

export default Input;
