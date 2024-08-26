// src/pages/index.tsx

import React from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Home;
