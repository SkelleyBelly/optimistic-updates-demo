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
import NewReleasesRoundedIcon from '@material-ui/icons/NewReleasesRounded';
import { useState, forwardRef } from "react";

const TITLE = "What are Optimistic Updates?";

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

const Explainer = () => {
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
        variant="outlined"
        color="primary"
        onClick={handleOpen}
        startIcon={<NewReleasesRoundedIcon fontSize="large" />}
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
            When we make changes (mutations) to our remote data via a web app,
            we traditionally send off the new data that we'd like to store, like
            a new book or a change to an existing one, and then wait for a
            response to come back before we make changes to the screen.
          </p>
          <p>This means that our logic usually goes:</p>
          <ul>
            <li>Send a request</li>
            <li>Show a pending state</li>
            <li>Update our data once the request has completed</li>
          </ul>
          <p>
            That can work fine, but it can leave us looking at pending states if
            we make multiple changes, and can slow down the overall behaviour of
            our applications. To combat this, we can use{" "}
            <span className={coloredText}>Optimistic Updates</span>. With{" "}
            <span className={coloredText}>Optimistic Updates</span>, we assume
            that our request will return successfully with a specific payload -
            we are <span className={coloredText}>Optimistic</span> about the
            response! We then take that optimistic response and use it to update
            the local data, even though the remote data hasn't actually changed
            yet. When the request does eventually complete, we throw away the
            optimistic local data, and re-sync with the remote data. If
            everything works, our local and remote data are only breifly out of
            sync, but it makes our apps feel much snappier as a result.
          </p>
          <p>
            With <span className={coloredText}>Optimistic Updates</span>, our
            logic looks like this:
          </p>
          <ul>
            <li>Send a request</li>
            <li>Update the local state with an optimistic response</li>
            <li>Then, when the request returns:</li>
            <ul>
              <li>On Success, merge the new remote data in</li>
              <li>On Failure, revert to the old data and trigger an error</li>
            </ul>
          </ul>
          <Typography variant="h6" component="span">
            Requirements to use Optimistic Updates
          </Typography>
          <p>
            In order to use Optimistic Updates effectively, we need to
            understand the exact structure of the expected response data, as we
            need to know what data we should optimistically populate the local
            cache with. If we don't know how that return data will look, we'd be
            better off sticking with a nice pending state, as we can easily
            bloat the client side if we put too much logic into it.
          </p>
          <p>
            In this example, adding{" "}
            <span className={coloredText}>Optimistic Updates</span> was easy as
            we always understand the new data that we're expecting to recieve.
            The only structure change we had to make to accommodate the updates
            is generating the Book ID on the client side, whereas this normally
            may be generated on the server. This was a simple solution in this
            case, but it could become more complicated if the application was
            handling multiple requests concurrently.
          </p>
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

export default Explainer;
