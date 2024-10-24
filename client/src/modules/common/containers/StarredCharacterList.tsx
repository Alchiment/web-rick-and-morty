import CharacterItem from "../components/CharacterItem.tsx";
import {Link} from "react-router-dom";
import {useGetStarredCharacters} from "../../character/hooks/starred-characters.hook.ts";
import TitleParagraph from "../components/titles/TitleParagraph.tsx";

interface CharacterListProps {
}

export function StarredCharacterList({}: CharacterListProps){
    const { characters } = useGetStarredCharacters();

    return (
        <>
            <TitleParagraph className="p-4">
                Starred Characters ({characters?.length || 0})
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