import CharacterLayout from "./CharacterLayout.tsx";
import {RouteObject} from "react-router-dom";
import ViewCharacterPage from "./containers/ViewCharacterPage.tsx";

export const characterRoutes: RouteObject = {
    path: "/",
    element: <CharacterLayout />,
    children: [
        {
            path: "/character/:id",
            element: <ViewCharacterPage />
        }
    ]
}