import CharacterItem from "./CharacterItem.tsx";
import {CharacterInterface} from "../models/character.model.ts";

interface CharacterListProps {
    characters: CharacterInterface[];
}

export function CharacterList({characters}: CharacterListProps){
    return (
        <>
            {characters?.map((character) => (
                <div className="mb-1" key={character.id}>
                    <CharacterItem character={character} />
                </div>
            ))}
        </>
    );
};