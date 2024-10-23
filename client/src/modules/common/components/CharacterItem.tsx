import {CharacterInterface} from "../models/character.model.ts";
import HeartIcon from "./HeartIcon.tsx";

export interface CharacterComponentPropsInterface {
    character: CharacterInterface;
    selected?: boolean;
}

export default function CharacterItem(
    {character, selected}: CharacterComponentPropsInterface
) {
    return (
        <div className={`p-2 w-full flex items-center content-between rounded-2xl ${selected ? 'bg-b-primary': ''}`}>
            <div className="flex items-center w-full">
                <div className="pr-2">
                    <img className="max-w-8 rounded-full" src={character.image} alt={character.name}/>
                </div>
                <div className="flex flex-col">
                    <strong>
                        {character.name}
                    </strong>
                    <p className="text-b-gray-2">
                        {character.species}
                    </p>
                </div>
            </div>
            <div>
                <span className={`p-1 flex items-center ${character.starred ? 'bg-white rounded-full': ''}`}>
                    <HeartIcon filled={character.starred} />
                </span>
            </div>
        </div>
    );
}