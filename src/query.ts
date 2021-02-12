import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
query GetAllBooks {
    books {
        id
        title
        hasBeenRead
    }
}`