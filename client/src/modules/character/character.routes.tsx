import CharacterPage from "./CharacterPage.tsx";
import {RouteObject} from "react-router-dom";

export const characterRoutes: RouteObject = {
    path: "/",
    element: <CharacterPage />,
    children: [

    ]
}