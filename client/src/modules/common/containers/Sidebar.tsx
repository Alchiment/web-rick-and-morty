import SearchCharacter from "./SearchCharacter.tsx";
import {CharacterList} from "../components/CharacterList.tsx";
import {useGlobalState} from "../contexts/global-state.context.tsx";

export default function Sidebar() {
    const { globalState } = useGlobalState();
    return (
        <>
            <h2 className="text-xl font-bold mb-4">Sidebar</h2>
            <div>
                <SearchCharacter/>
            </div>
            <CharacterList characters={globalState?.characters || []}/>
        </>
    );
}