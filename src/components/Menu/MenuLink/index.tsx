import styles from './styles.module.css';

type MenuLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function MenuLink({ href, children }: MenuLinkProps) {
  return (
    <a className={styles.menuLink} href={href}>
      {children}
    </a>
  );
}
