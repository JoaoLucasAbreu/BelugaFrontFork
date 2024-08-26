// src/components/Dashboard.tsx

import React from 'react';
import styles from '../styles/Dashboard.module.css';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.topSection}>
        <div className={styles.metricCard}>Minutos Traduzidos</div>
        <div className={styles.metricCard}>Créditos Utilizados</div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.userList}>Usuários Beluga Assist</div>
        <div className={styles.videoList}>Vídeos Recentes</div>
        <div className={styles.languagesUsed}>Idiomas mais utilizados</div>
      </div>
    </div>
  );
};

export default Dashboard;
