import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';
import InfoBar from '../components/InfoBar'

export default function Home(): JSX.Element {
  return (
    <>
      <div className={styles.container} data-tid="container">
        <div className={styles.innerContainer}>
          <div className={styles.logoBox}>
            <h2>RA TRADING</h2> <span className={styles.proLabel}>pro</span>
          </div>
          <Link to={routes.COUNTER}>Trades</Link>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.topMain}>
          <InfoBar />
        </div>
          <div className={styles.downMain}>
            <div className={styles.mainLayout}>
              <div className={styles.sidebar}>
                Sidebar
              </div>
              <div className={styles.orderBookTabbed}>
                Order Book
              </div>
              <div className={styles.chart}>
                Chart
              </div>
              <div className={styles.trading}>
                Trading
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
