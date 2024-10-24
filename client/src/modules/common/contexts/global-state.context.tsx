import { createContext, useContext, useState, ReactNode } from 'react';
import { GlobalStateInterface, GlobalStateModel } from '../models/global-state.model.ts';

interface GlobalStateContextProps {
    globalState: GlobalStateInterface;
    setGlobalState: (state: GlobalStateInterface) => void;
}

const GlobalStateContext = createContext<GlobalStateContextProps | undefined>(undefined);

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
    const [globalState, setGlobalState] = useState<GlobalStateInterface>(new GlobalStateModel());

    return (
        <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
};