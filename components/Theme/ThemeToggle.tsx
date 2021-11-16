import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { ThemeContext } from './ThemeContext';
import 'tailwindcss/tailwind.css';
import styles from './Theme.module.css'

export const ThemeToggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div
      //className='transition duration-500 ease-in-out rounded-full p-2'
    >
      {theme === 'dark' ? (
        <HiSun
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={styles.hiSun}
        />
      ) : (
        <HiMoon
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={styles.hiMoon}
        />
      )}
    </div>
  );
};


