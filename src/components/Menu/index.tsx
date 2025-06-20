import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { MenuLink } from './MenuLink';

const links = [
  { href: '#', icon: <HouseIcon /> },
  { href: '#', icon: <HistoryIcon /> },
  { href: '#', icon: <SettingsIcon /> },
  { href: '#', icon: <SunIcon /> },
];

export function Menu() {
  return (
    <nav className={styles.menu}>
      {links.map(({ href, icon }) => (
        <MenuLink href={href}>{icon}</MenuLink>
      ))}
    </nav>
  );
}
