import {useParams} from "react-router-dom";
import HeartIcon from "../../common/components/HeartIcon.tsx";
import RowDetail from "../../common/components/RowDetail.tsx";
import apolloClient from "../../../lib/graphql/apollo-client.graphql.ts";
import {getCharacterQuery} from "../lib/graphql/queries/characters.query.ts";
import {CharacterInterface} from "../../common/models/character.model.ts";
import {getStarredCharacterQuery} from "../lib/graphql/queries/starred-characters.query.ts";

export default function ViewCharacterPage() {
    let { id } = useParams();
    const userId = id || -1;
    const cacheCharacters = apolloClient.readQuery({
        query: getCharacterQuery,
    });
    const cacheStarredCharacters = apolloClient.readQuery({
        query: getStarredCharacterQuery,
    });
    const characters: CharacterInterface[] = cacheCharacters?.characters || [];
    const starredCharacters: CharacterInterface[] = cacheStarredCharacters?.starredCharacters || [];
    let character = characters.find(character => String(character.id) === userId);
    if (!character) {
        character = starredCharacters.find(character => String(character.id) === userId);
    }

    if (!character) {
        return <div>
            Character not found
        </div>;
    }
    return (
        <div>
            <header>
                <div className="relative w-16">
                    <img className="rounded-full w-14" src={character.image} alt={character.name}/>
                    <span className={`p-1 flex items-center absolute bottom-0 right-0 ${character.starred ? 'bg-white rounded-full' : ''}`}>
                        <HeartIcon filled={character.starred}/>
                    </span>
                </div>
                <h1 className="text-4xl font-bold">{character.name}</h1>
            </header>
            <RowDetail className="py-3" title="Specie" value={character.species}/>
            <RowDetail className="py-3" title="Status" value={character.status}/>
            <RowDetail className="py-3" title="Occupation" value={''} borderLine={false}/>
        </div>
    );
}