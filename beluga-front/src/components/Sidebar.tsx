// src/components/Sidebar.tsx

import React from 'react';
import styles from '../styles/Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
      
        <img src='../whale-tail-svgrepo-com.svg' alt="Beluga"/>
      </div>
      <ul className={styles.nav}>
        <li className={styles.navItem}>Dashboard</li>
        <li className={styles.navItem}>API</li>
        <li className={styles.navItem}>Chaves De Acesso</li>
        <li className={styles.navItem}>Dub Sandbox</li>
        <li className={styles.navItem}>Usuários Assist</li>
        <li className={styles.navItem}>Minha Conta</li>
      </ul>
      <div className={styles.cta}>
        <button className={styles.ctaButton}>Compre créditos</button>
      </div>
    </div>
  );
};

export default Sidebar;
