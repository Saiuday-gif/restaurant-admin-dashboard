import React, { createContext, useState, useCallback } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setIsOpen(false);
    }, []);

    const openMenu = useCallback(() => {
        setIsOpen(true);
    }, []);

    const value = {
        isOpen,
        toggleMenu,
        closeMenu,
        openMenu,
    };

    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => {
    const context = React.useContext(MenuContext);
    if (!context) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
};