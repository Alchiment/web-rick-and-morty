import {EpisodeModel} from "./episode.model.js";
import {LocationModel} from "./location.model.js";
import {OriginModel} from "./origin.model.js";

export class CharacterModel {
    constructor(character = {}) {
        this.id = character.id || '';
        this.name = character.name || '';
        this.status = character.status || '';
        this.species = character.species || '';
        this.gender = character.gender || '';
        this.image = character.image || '';
        this.episode = character.episode?.map(
            (episode) => new EpisodeModel(episode),
        ) || [];
        this.location = new LocationModel(character.location);
        this.origin = new OriginModel(character.origin);
        this.starred = !!character.starred;
        this.softDelete = character.softDelete;
    }
}