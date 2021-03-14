import gql from 'graphql-tag';

export const ADD_USER = gql`
    mutation addUser($input: NewUserInput!) {
        addUser(input: $input) {
            id
            email
            firstName
            lastName
            address
            longitude
            latitude
        }
    }
`;

export const UPDATE_USER = gql`
    mutation updateUser($id: ID!, $input: UpdateUserInput!) {
        updateUser(id: $id, input: $input) {
            id
            email
            firstName
            lastName
            gender
            address
            latitude
            longitude
            photo
        }
    }
`;

export const DELETE_USER = gql`
    mutation removeUser($id: ID!) {
        removeUser(id: $id) {
            id
            email
            firstName
            lastName
            latitude
            longitude
            gender
            address
        }
    }
`;

export const ADD_FAVORITE_EVENT = gql`
    mutation favoriteEventInput($favoriteEvent: FavoriteEventInput!) {
        favoriteEventInput(favoriteEvent: $favoriteEvent) {
            id
        }
    }
`;

export const REMOVE_FAVORITE_EVENT = gql`
    mutation removeFavoriteEvent($favoriteEvent: FavoriteEventInput!) {
        removeFavoriteEvent(favoriteEvent: $favoriteEvent) {
            id
        }
    }
`;
