import {gql} from "@apollo/client/index.js";

export const getCharacterQuery = gql`
    query GetCharacter($filter: CharacterFilter) {
        characters(filter: $filter) {
            id
            name
            status
            species
            type
            gender
            image
            starred
            episode {
              name
            }
            location {
              name
            }
            origin {
              name
            }
            softDelete
        }
    }

`;