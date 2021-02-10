import { makeStyles, Paper, Theme } from "@material-ui/core";
import { ReactNode } from "react";

export interface CardProps {
    children: ReactNode
}

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        padding: theme.spacing(5)
    }
}))

const Card = ({children}: CardProps) => {
    const classes = useStyles();

    return <Paper elevation={1} className={classes.card}>{children}</Paper>
}

export default Card;