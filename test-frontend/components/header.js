import Link from 'next/link';
import styles from '../styles/header.module.css'; 

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li><Link href="/">Home</Link></li>
        </ul>
      </nav>
    </header>
  );
}
