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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
