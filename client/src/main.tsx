import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {characterRoutes} from "./modules/character/character.routes.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            characterRoutes
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
