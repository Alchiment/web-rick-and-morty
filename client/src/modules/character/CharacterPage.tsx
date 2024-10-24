import {useGetCharacters} from "./hooks/character.hook.ts";
import {useEffect} from "react";
import {GlobalStateModel} from "../common/models/global-state.model.ts";
import {useGlobalState} from "../common/contexts/global-state.context.tsx";

function CharacterPage() {
    const { globalState, setGlobalState } = useGlobalState();
    const { characters } = useGetCharacters();

    useEffect(() => {
        setGlobalState(new GlobalStateModel({
            ...globalState,
            characters
        }));
    }, [characters]);

    return (
        <>
            Character Page
        </>
    );
}

export default CharacterPage;