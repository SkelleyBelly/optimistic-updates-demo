import { Box, BoxProps, Typography } from "@material-ui/core";

export interface CounterProps extends BoxProps {
  value: number;
}

const safeValue = (value: number): string => {
  if (value < 0 || !value) return `0`;

  if (value > 99) return `99+`;

  return `${value}`;
};

const Counter = ({ value, ...BoxProps }: CounterProps) => (
  <Box
    height="6rem"
    width="6rem"
    bgcolor="primary.light"
    borderRadius="50%"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    {...BoxProps}
  >
    <Typography variant="h3" color="primary" align="center">
      {safeValue(value)}
    </Typography>
  </Box>
);

export default Counter;
