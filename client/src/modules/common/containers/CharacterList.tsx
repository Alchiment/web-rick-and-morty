import CharacterItem from "../components/CharacterItem.tsx";
import {Link} from "react-router-dom";
import {useGetCharacters} from "../../character/hooks/characters.hook.ts";
import TitleParagraph from "../components/titles/TitleParagraph.tsx";

interface CharacterListProps {
}

export function CharacterList({}: CharacterListProps){
    const { characters } = useGetCharacters();

    return (
        <>
            <TitleParagraph className="p-4">
                Characters ({characters?.length || 0})
            </TitleParagraph>
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