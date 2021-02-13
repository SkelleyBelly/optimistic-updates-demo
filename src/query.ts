import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
    query GetAllBooks {
        books @client {
            id
            title
            hasBeenRead
            __typename
        }
}`

export const UPDATE_BOOK = gql`
    mutation UpdateBook($id: Int!, $title: String!, $hasBeenRead:Boolean!, $delay:Int, $error: Boolean) {
        updateBook(id: $id, title: $title, hasBeenRead: $hasBeenRead, delay: $delay, error: $error) @client {
            id
            title
            hasBeenRead
            __typename
        }
}`

export const ADD_BOOK = gql`
    mutation($id: Int!, $title: String!, $delay:Int, $error: Boolean) {
        addBook(id: $id, title: $title, delay: $delay, error: $error) @client {
            id
            title
            hasBeenRead
            __typename
        } 
}`
