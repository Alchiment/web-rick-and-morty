import {CharacterInterface} from "./character.model.ts";

export interface GlobalStateInterface {
    characters: CharacterInterface[];
}

export class GlobalStateModel {
    characters: CharacterInterface[] = [];

    constructor(state?: GlobalStateInterface) {
        this.characters = state?.characters ?? [];
    }
}