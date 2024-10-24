import {Outlet} from "react-router-dom";

function CharacterLayout() {
    return (
        <div className="container px-14">
            <Outlet />
        </div>
    );
}

export default CharacterLayout;