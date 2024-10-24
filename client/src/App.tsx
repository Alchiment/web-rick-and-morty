import './App.css';
import {Outlet} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import apolloClient from "./lib/graphql/apollo-client.graphql.ts";
import {useState} from "react";
import {GlobalStateInterface} from "./modules/common/models/global-state.model.ts";
import {GlobalStateProvider} from "./modules/common/contexts/global-state.context.tsx";
import Sidebar from "./modules/common/containers/Sidebar.tsx";

function App() {
    const [globalState, setGlobalState] = useState<GlobalStateInterface>();

    return (
        <ApolloProvider client={apolloClient}>
            <GlobalStateProvider>
                <div className="flex h-screen">
                    <div className="w-96 bg-gray-50 p-4 hidden sm:block">
                        <Sidebar />
                    </div>
                    <div className="flex-1 p-8">
                        <Outlet context={[globalState, setGlobalState]} />
                    </div>
                </div>
            </GlobalStateProvider>
        </ApolloProvider>
    );
}

export default App;