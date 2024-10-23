import {EpisodeInterface} from "../../character/models/episode.model.ts";
import {LocationInterface} from "../../character/models/location.model.ts";
import {OriginInterface} from "../../character/models/origin.model.ts";

export interface CharacterInterface {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    episode: EpisodeInterface[];
    location: LocationInterface;
    origin: OriginInterface;
    starred: boolean;
    softDelete: string|null;
}