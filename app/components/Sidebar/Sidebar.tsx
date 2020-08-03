import React from 'react';
import styles from './Sidebar.css';
import {MdSearch} from 'react-icons/md'
export default function Sidebar(): JSX.Element {

  return (
    <div className={styles.sidebar}>
      <div className={styles.wrapper}>
        <div className={styles.outerWrapper}>
          <div className={styles.innerWrapper}>
            <div className={styles.scroller}>
              <div className={styles.infoPane}>
                <div className={styles.searchContainer}>
                  <span className={styles.searchIconBox}>
                    <MdSearch/>
                  </span>
                  <input className={styles.searchInput} />
                </div>
                <div className={styles.filterContainer}>
                  <div className={styles.filterOption}>
                    Fiat
                  </div>
                  <div className={`${styles.filterOption} ${styles.filterOptionSelected}`}>
                    Defi
                  </div>
                  <div className={`${styles.filterOption} ${styles.filterOptionSelected}`}>
                    Active
                  </div>
                  <div className={`${styles.filterOption} ${styles.filterOptionSelected}`}>
                    Closed
                  </div>
                </div>
                <div className={styles.fiatContainer}>
                  <div className={styles.fiatInnerWrapper}>
                    <div className={styles.scroller}>
                      <div className={styles.fiatBox}>
                        <div className={styles.groupContainer}>
                          <span className={styles.fiatTitle}>
                            Fiat Markets
                          </span>

                          {/* Fiat products */}
                          {Array.of(1,2,3,4,5,6,6,7,8,4,41,2,3,4,5,6,6,7).map(() => (

                            <div className={styles.productContainer}>
                            <div className={styles.pairBox}>
                              <div className={styles.cryptoIcon}>
                                B
                              </div>
                              <div className={styles.cryptoBox}>
                                <span className={styles.pairLabel}>
                                  BTC/USD
                                </span>
                                <span className={styles.cryptoName}>
                                  Bitcoin
                                </span>
                              </div>
                            </div>
                            <div className={styles.sparkLineBox}>
                              Spark Line
                            </div>
                            <div className={styles.volumeBox}>
                              <span className={styles.volumeLabel}>
                                1,949 BTC
                              </span>
                              <span className={styles.volumeDescription}>
                                24h volume
                              </span>
                            </div>
                            <div className={styles.priceBox}>
                              <span className={styles.priceLabel}>
                                £9,679.13
                              </span>
                              <span className={styles.priceDescription}>
                                +1.39%
                              </span>
                            </div>
                          </div>
                        ))}



                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
