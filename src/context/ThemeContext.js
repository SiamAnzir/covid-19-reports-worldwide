import React from "react";

export const themes = {
    light: {
        foreground: "#242424",
        background: "#FAFAFA",
        cardBackground: "#FAFAFA"
    },
    dark: {
        foreground: "#FAFAFA",
        background: "#242424",
        cardBackground: "#323232"
    }
};

export const ThemeContext = React.createContext(themes);
