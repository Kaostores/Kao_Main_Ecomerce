import React, { createContext, useContext, useState, ReactNode } from 'react';
import Auth from './Login';

interface AuthContextProps {
    onOpenLogin: () => void;
    onCloseLogin: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false)

    const onOpenLogin = () => setLoginModalOpen(true);
    const onCloseLogin = () => setLoginModalOpen(false);
    
    return (
        <AuthContext.Provider value={{ onOpenLogin, onCloseLogin }}>
            {children}
            {isLoginModalOpen && <Auth onClose={onCloseLogin} />}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};