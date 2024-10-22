import {SystemVars} from "../constants/system-vars.constant.js";
import {GraphQLClient, gql} from "graphql-request";

const client = new GraphQLClient(SystemVars.API_GQL_RICK_MORTY);

/**
 *
 * @param page
 * @param filter {Object}
 * @param filter.name {String}
 * @param filter.status {String} alive | dead | unknown
 * @param filter.species {String} human | alien | other
 * @param filter.type {String}
 * @param filter.gender {String} female, male, genderless, unknown
 * @returns {Promise<{characters: {results: Array}}>}
 */
export async function fetchCharacters({page, filter}) {
    const query = gql`
        query ($page: Int, $filter: FilterCharacter) {
            characters(page: $page, filter: $filter) {
                results {
                    id
                    name
                    status
                    species
                    type
                    gender
                    origin {
                        name
                    }
                    location {
                        name
                    }
                    image
                    episode {
                        name
                    }
                }
            }
        }
    `;
    const variables = {
        page,
        filter
    };

    return await client.request(query, variables);
}