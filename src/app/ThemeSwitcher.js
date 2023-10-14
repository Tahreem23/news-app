"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes"
import { Switch } from '@mui/material';

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    const handleThemeChange = () => {
        setTheme(theme == "light" ? "dark" : "light");
    }

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted){
        return null;
    }

    return (
        <div>
            {"Theme"}
            <Switch
                checked={theme === 'light'}
                onChange={handleThemeChange}
            /> {theme}
        </div>
    )
}

export default ThemeSwitcher;