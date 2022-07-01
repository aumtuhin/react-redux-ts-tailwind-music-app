import { createContext, useEffect, useState } from 'react';
import { Theme } from '../shared/const';

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('current-theme');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return Theme.Dark;
        }
    }
    return Theme.Light;
};

interface IThemeContext {
    theme: string;
    setTheme?: any;
}

const defaultState = {
    theme: Theme.Dark,
}
  

export const ThemeContext = createContext<IThemeContext>(defaultState);

interface props {
    children: JSX.Element | JSX.Element[]
}

export const ThemeProvider = ({ children }: props) => {
    const [theme, setTheme] = useState(getInitialTheme);

    const checkTheme = (existing: string) => {
        const root = window.document.documentElement;
        const isDark = existing === Theme.Dark;

        root.classList.remove(isDark ? Theme.Light : Theme.Dark);
        root.classList.add(existing);

        localStorage.setItem(Theme.CurrentTheme, existing);
    };

    const currentTheme = localStorage.getItem(Theme.CurrentTheme);

    if (currentTheme) {
        checkTheme(currentTheme);
    }

    useEffect(() => {
        checkTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};