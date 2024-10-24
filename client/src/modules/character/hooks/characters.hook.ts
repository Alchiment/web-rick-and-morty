import {useQuery} from "@apollo/client";
import {getCharacterQuery} from "../lib/graphql/queries/characters.query.ts";
import {CharacterInterface} from "../../common/models/character.model.ts";

export function useGetCharacters() {
    const { data, loading, error } = useQuery(getCharacterQuery, {
        fetchPolicy: 'network-only',
    });
    const characters: CharacterInterface[] = data?.characters || [];
    return { characters, loading, error: error?.graphQLErrors };
}