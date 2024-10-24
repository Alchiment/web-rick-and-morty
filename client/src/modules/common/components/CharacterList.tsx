import CharacterItem from "./CharacterItem.tsx";
import {CharacterInterface} from "../models/character.model.ts";
import {Link} from "react-router-dom";

interface CharacterListProps {
    characters: CharacterInterface[];
}

export function CharacterList({characters}: CharacterListProps){
    return (
        <>
            {characters?.map((character) => (
                <div className="mb-1" key={character.id}>
                    <Link to={`/character/${character.id}`}>
                        <CharacterItem character={character} />
                    </Link>
                </div>
            ))}
        </>
    );
};