import {queryGetCharacters, queryGetStarredCharacters} from "./graphql/resolvers/queries/characters.query.js";

export const resolvers = {
    Query: {
        characters: queryGetCharacters,
        starredCharacters: queryGetStarredCharacters,
    },
}