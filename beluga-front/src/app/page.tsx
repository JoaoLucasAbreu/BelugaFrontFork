// src/pages/index.tsx

import React from 'react';
import { Sidebar } from "c:/repos/beluga-front/beluga-front/src/components/sidebar/sidebar";
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
