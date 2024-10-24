import {useQuery} from "@apollo/client";
import {CharacterInterface} from "../../common/models/character.model.ts";
import {getStarredCharacterQuery} from "../lib/graphql/queries/starred-characters.query.ts";

export function useGetStarredCharacters() {
    const { data, loading, error } = useQuery(getStarredCharacterQuery, {
        fetchPolicy: 'network-only',
    });
    const characters: CharacterInterface[] = data?.starredCharacters || [];
    return { characters, loading, error: error?.graphQLErrors };
}