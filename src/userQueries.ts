import {gql} from '@apollo/client'

export const GET_BOOKS = gql`
    query {
        books {
            id, title, price
        }
    }`

/*export const GET_ONE_USER = gql`
    query getUser($id: ID){
        getUser(id: $id) {
            id, username
        }
    }`*/

/*
export const CREATE_USER = gql`
    mutation createUser($input: UserInput) {
        createUser(input: $input) {
            id, username, age
        }
    }`*/
