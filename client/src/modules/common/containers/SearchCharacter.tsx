import '../../../styles/components/input-component.css';
import SearchIcon from "../components/SearchIcon.tsx";
import SettingsIcon from "../components/SettingsIcon.tsx";
import InputStandard from "../components/InputStandard.tsx";
import SearchFilterOptions from "./SearchFilterOptions.tsx";
import {useState} from "react";

export default function SearchCharacter() {
    const [showFilters, setShowFilters] = useState<boolean>(false);

    function onClickSettings() {
        setShowFilters(!showFilters);
    }

    return (
        <div className="relative">
            <button className="bg-b-transparent">
                <SearchIcon className="b-input__search--icon__search" />
            </button>
            <InputStandard id="search_character" className="b-input__search" placeholder="Search or filter results" />
            <button onClick={onClickSettings}>
                <SettingsIcon className={`b-input__search--icon__settings text-b-purple rounded p-2 ${showFilters ? 'bg-b-primary': 'bg-b-transparent'}`} />
            </button>
            {
                showFilters
                &&
                <div className="absolute w-full mt-2">
                    <SearchFilterOptions />
                </div>
            }
        </div>
    );
}