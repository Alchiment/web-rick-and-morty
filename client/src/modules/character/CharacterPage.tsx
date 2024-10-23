import {useGetCharacters} from "./hooks/character.hook.ts";
import {useEffect} from "react";
import {useOutletContext} from "react-router-dom";
import {GlobalStateInterface, GlobalStateModel} from "../common/models/global-state.model.ts";

function CharacterPage() {
    const [globalState, setGlobalState] = useOutletContext<GlobalStateInterface|any>();

    const {
        characters,
        // loading,
        // error,
    } = useGetCharacters();

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