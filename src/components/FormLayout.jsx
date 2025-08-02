import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './FormLayout.module.css';

export default function FormLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.mobileScreen}>
        <Outlet />
      </div>
    </div>
  );
}