import React from 'react';
import styles from './InfoBar.css';
import { GrGoogleWallet } from 'react-icons/gr';

export default function InfoBar(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.totalPortfolioBox}>
          <GrGoogleWallet size={16} />
          <span className={styles.totalPortfolio}>£34,000</span>
        </div>
        <div>
          <span className={styles.totalPortfolio}>ETH - £400</span><span className={styles.totalPortfolio}>BTC - 11000</span>
        </div>
      </div>
    </div>
  );
}
