import {fetchCharacters} from "../../../repositories/character.repository.js";

export async function queryGetCharacters(_root, {page = 1, filter}) {
    const request = await fetchCharacters({page, filter});
    return request.characters.results;
}