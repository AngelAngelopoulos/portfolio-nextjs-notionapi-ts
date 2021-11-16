import React, { Dispatch, SetStateAction } from 'react';

type Theme = string;
type ThemeContext = { theme: Theme; setTheme: Dispatch<SetStateAction<string>> };

export const ThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
);
