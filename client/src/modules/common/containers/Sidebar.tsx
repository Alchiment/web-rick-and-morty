import SearchCharacter from "./SearchCharacter.tsx";
import {CharacterList} from "./CharacterList.tsx";
import {StarredCharacterList} from "./StarredCharacterList.tsx";

export default function Sidebar() {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">Sidebar</h2>
            <div className="pb-4">
                <SearchCharacter/>
            </div>
            <StarredCharacterList />
            <CharacterList />
        </>
    );
}