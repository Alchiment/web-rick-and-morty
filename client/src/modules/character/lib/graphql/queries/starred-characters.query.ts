import {gql} from "@apollo/client/index.js";

export const getStarredCharacterQuery = gql`
    query GetCharactersStarred {
        starredCharacters {
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