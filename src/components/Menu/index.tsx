import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import React, { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function toogleTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    console.log(theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='#'
        title='Ir para a Home'
        aria-label='Ir para a Home'
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        title='Ver Histórico'
        aria-label='Ver Histórico'
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        title='Configurações'
        aria-label='Configurações'
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        title='Alterar o Tema'
        aria-label='Alterar o Tema'
        onClick={toogleTheme}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
