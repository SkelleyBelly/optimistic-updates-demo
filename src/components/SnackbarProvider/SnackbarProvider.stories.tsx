import { Box, Button, InputAdornment, TextField } from "@material-ui/core";
import { Story, Meta } from "@storybook/react";
import { useState } from "react";

import SnackbarProvider, { useSnackbar } from "./SnackbarProvider";

export default {
  title: "Components/SnackbarProvider",
  component: SnackbarProvider,
} as Meta;

const DemoComponent = () => {
  const { newMessage } = useSnackbar();
  const [message, setMessage] = useState("");

  const createSnackbar = () => {
    newMessage(message);
    setMessage("");
  };

  return (
    <Box display="flex" alignContent="center">
      <TextField
        variant="outlined"
        value={message}
        label="Snackbar Message"
        onChange={({ target: { value } }) => setMessage(value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant="contained"
                color="primary"
                onClick={createSnackbar}
              >
                Create
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

const Template: Story = () => (
  <SnackbarProvider>
    <DemoComponent />
  </SnackbarProvider>
);

export const Default = Template.bind({});
