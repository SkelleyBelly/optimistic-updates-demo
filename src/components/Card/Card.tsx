import { Box, Paper } from "@material-ui/core";
import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <Box clone px={5} py={8}>
      <Paper elevation={1}>
        {children}
      </Paper>
    </Box>
  );
};

export default Card;
