import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Slide,
  DialogActions,
  makeStyles,
  Box,
  Theme,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import { useState, forwardRef } from "react";

const TITLE = "How to use?";

const Transition = forwardRef<unknown, TransitionProps>(function Transition(
  { children, ...props },
  ref
) {
  return (
    <Slide direction="up" ref={ref} {...props}>
      {children as any}
    </Slide>
  ) as any;
});

const useStyles = makeStyles((theme: Theme) => ({
  dialogActionButton: {
    margin: "auto",
  },
  dialogTitle: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.primary.main,
    padding: theme.spacing(2, 4),
  },
  dialogContent: {
    fontSize: "1.2rem",
    "& li": {
      padding: theme.spacing(2, 0),
    },
  },
  coloredText: {
    color: theme.palette.primary.main,
  },
}));

const Help = () => {
  const {
    dialogActionButton,
    dialogTitle,
    dialogContent,
    coloredText,
  } = useStyles();
  const [open, setOpen] = useState(false);
  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"), {noSsr: true});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        startIcon={<HelpRoundedIcon fontSize="large" />}
        fullWidth
      >
        {TITLE}
      </Button>
      <Dialog
        open={open}
        maxWidth="md"
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        fullScreen={isSm}
      >
        <DialogTitle id="alert-dialog-slide-title" disableTypography>
          <Box display="inline-block" textAlign="center" width="100%">
            <Typography variant="h6" className={dialogTitle}>
              {TITLE}
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent className={dialogContent}>
          <p>
            The purpose of this app is to show how
            <span className={coloredText}> Optimistic Updates </span>
            can make an application feel faster, even if the network requests
            take a little bit of time in the background.
          </p>
          <p>
            The <span className={coloredText}> Book List </span> allows us to
            make changes to the names of the books, add new books, and toggle
            whether or not they've been read.
          </p>
          <p>
            The <span className={coloredText}> Control Panel </span> allows us
            to edit how the requests work, and toggle optimistic updates.
          </p>
          <p>By using the switches, we can control the following:</p>
          <ul>
            <li>
              Whether or not our client side will use
              <span className={coloredText}> Optimistic Updates </span> to
              update our cached data with expected data before a request
              actually completes
            </li>
            <li>
              Whether our requests should complete immediately (perfect world)
              or have a <span className={coloredText}> Delay </span> of 1500ms
              (quite an extreme example). Applying the delay without using
              optimistic responses shows just how bad the user experience can
              potentially be
            </li>
            <li>
              Whether our requests should return{" "}
              <span className={coloredText}> Forced Errors </span>. This is
              great for seeing how optimistic updates respond when an error is
              returned from the endpoint
            </li>
          </ul>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            variant="contained"
            className={dialogActionButton}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Help;
