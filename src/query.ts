import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
    query GetAllBooks {
        books {
            id
            title
            hasBeenRead
        }
}`

export const UPDATE_BOOK = gql`
    mutation UpdateBook($id: Int!, $title: String!, $hasBeenRead:Boolean!) {
        updateBook(id: $id, title: $title, hasBeenRead: $hasBeenRead){
            id
            title
            hasBeenRead
        }
}`

export const ADD_BOOK = gql`
    mutation($id: Int!, $title: String!) {
        addBook(id: $id, title: $title){
            id
            title
            hasBeenRead
        } 
}`
