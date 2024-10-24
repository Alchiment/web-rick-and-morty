import {useGetCharacters} from "./hooks/character.hook.ts";
import {useEffect} from "react";
import {GlobalStateModel} from "../common/models/global-state.model.ts";
import {useGlobalState} from "../common/contexts/global-state.context.tsx";
import {Outlet} from "react-router-dom";

function CharacterLayout() {
    const { globalState, setGlobalState } = useGlobalState();
    const { characters } = useGetCharacters();

    useEffect(() => {
        setGlobalState(new GlobalStateModel({
            ...globalState,
            characters
        }));
    }, [characters]);

    return (
        <div className="container px-14">
            <Outlet />
        </div>
    );
}

export default CharacterLayout;