import '../../../styles/components/input-component.css';
import SearchIcon from "../components/SearchIcon.tsx";
import SettingsIcon from "../components/SettingsIcon.tsx";
import InputStandard from "../components/InputStandard.tsx";
import SearchFilterOptions from "./SearchFilterOptions.tsx";

export default function SearchCharacter() {
    return (
        <div className="relative">
            <button className="bg-b-transparent">
                <SearchIcon className="b-input__search--icon__search" />
            </button>
            <InputStandard id="search_character" className="b-input__search" placeholder="Search or filter results" />
            <button className="bg-b-transparent">
                <SettingsIcon className="b-input__search--icon__settings text-b-purple" />
            </button>
            <div className="absolute w-full mt-2">
                <SearchFilterOptions />
            </div>
        </div>
    );
}