import React, { createContext, useContext } from 'react';

const ToggleDrawerContext = createContext<(() => void) | undefined>(undefined);

export const ToggleDrawerProvider = ({ children, toggleDrawer }: { children: React.ReactNode, toggleDrawer: () => void }) => (
    <ToggleDrawerContext.Provider value={toggleDrawer}>
        {children}
    </ToggleDrawerContext.Provider>
);

export const useToggleDrawer = () => useContext(ToggleDrawerContext);
