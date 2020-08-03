import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes.json';
import styles from './Home.css';
import InfoBar from './InfoBar';

import {MdApps} from 'react-icons/md'
import {FaChevronDown} from 'react-icons/fa'
import Sidebar from './Sidebar';

export default function Home(): JSX.Element {
  return (
    <>
      <div className={styles.container} data-tid="container">
        <div className={styles.innerContainer}>
            <div className={styles.leftMenuBox}>
          <div className={styles.logoBox}>
            <h2>RA TRADING</h2>
            <span className={styles.proLabel}>pro</span>
          </div>
            <div className={styles.leftMenuIcon}>

              <div>
              <MdApps size={24}/>
              </div>
              <div>
              <FaChevronDown size={8}/>
              </div>
            </div>

            </div>
          <div className={styles.menuBox}>
            <div className={styles.menuLink}>
              <Link to={routes.COUNTER}>GBP</Link>
            </div>
            <div className={styles.menuLink}>
              <Link to={routes.COUNTER}>English</Link>
            </div>
            <div className={styles.menuLink}>
              <Link to={routes.COUNTER}>Ruben C.</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.topMain}>
          <InfoBar/>
        </div>
        <div className={styles.downMain}>
          <div className={styles.mainLayout}>
            <Sidebar/>
            <div className={styles.orderBookTabbed}>Order Book</div>
            <div className={styles.chart}>Chart</div>
            <div className={styles.trading}>Trading</div>
          </div>
        </div>
      </div>
    </>
  );
}
