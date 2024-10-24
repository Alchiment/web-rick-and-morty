import {CharacterInterface} from "./character.model.ts";

export interface GlobalStateInterface {
    characters: CharacterInterface[];
    starredCharacters: CharacterInterface[];
}

export class GlobalStateModel {
    characters: CharacterInterface[] = [];
    starredCharacters: CharacterInterface[] = [];

    constructor(state?: GlobalStateInterface) {
        this.characters = state?.characters ?? [];
        this.starredCharacters = state?.starredCharacters ?? [];
    }
}