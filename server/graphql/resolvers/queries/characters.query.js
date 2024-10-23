import {
    fetchQueryCharacters,
    fetchCharactersStarred,
} from "../../../repositories/character.repository.js";
import {CharacterModel} from "../../../dtos/character.model.js";

export async function queryGetCharacters(_root, {filter}) {
    const characters = await fetchQueryCharacters(filter);
    return characters?.map(
        (character) => new CharacterModel(character)
    ) || [];
}

export async function queryGetStarredCharacters(_root) {
    const characters = await fetchCharactersStarred();
    return characters?.map(
        (character) => new CharacterModel(character)
    ) || [];
}