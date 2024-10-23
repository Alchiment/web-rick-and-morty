import './App.css';
import {Outlet} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";
import apolloClient from "./lib/graphql/apollo-client.graphql.ts";
import {useState} from "react";
import {GlobalStateInterface} from "./modules/common/models/global-state.model.ts";
import CharacterItem from "./modules/common/components/CharacterItem.tsx";
import SearchCharacter from "./modules/common/components/SearchCharacter.tsx";

function App() {
    const [globalState, setGlobalState] = useState<GlobalStateInterface>();

    return (
        <ApolloProvider client={apolloClient}>
            <div className="flex h-screen">
                <div className="w-96 bg-gray-50 p-4 hidden sm:block">
                    <h2 className="text-xl font-bold mb-4">Sidebar</h2>
                    <div>
                        <SearchCharacter />
                    </div>
                    {
                        globalState?.characters.map(
                            (character)  => <div className="mb-1" key={character.id}>
                                <CharacterItem character={character} />
                            </div>
                        )
                    }
                </div>
                <div className="flex-1 p-8">
                    <Outlet context={[globalState, setGlobalState]} />
                </div>
            </div>
        </ApolloProvider>
    );
}

export default App;