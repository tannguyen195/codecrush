import { createContext, useContext, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface AppContextType {
    theme: Theme;
    toggleTheme: () => void;
    changeRandomColor: () => void;
    playerColor: string;
    startGame: () => void;
    start: boolean;
    isWalking: boolean;
    setIsWalking: (value: boolean) => void;
    isSprinting: boolean;
    setIsSprinting: (value: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('light');
    const [playerColor, setPlayerColor] = useState<string>('orange');
    const [start, setStart] = useState<boolean>(false);

    const [isWalking, setIsWalking] = useState(false);
    const [isSprinting, setIsSprinting] = useState(false);

    

    const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    const changeRandomColor = () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setPlayerColor(randomColor);
    };
    const startGame = () => {
        setStart(true);
    };

    return (
        <AppContext.Provider value={{ theme, toggleTheme, changeRandomColor, playerColor, startGame, start,
            isWalking, setIsWalking, isSprinting, setIsSprinting
         }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error('useAppContext must be used within AppProvider');
    return context;
};
