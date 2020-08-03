import React from 'react';
import styles from './InfoBar.css';
import { GrGoogleWallet } from 'react-icons/gr';

const stocks = [
  {
    pair: 'bitcoin',
    price: '11,400',
    change24: '0.423',
    percentage24: '+0.4343',
    positive: true,
  },
  {
    pair: 'etherium',
    price: '11,400',
    change24: '0.423',
    percentage24: '+0.4343',
    positive: false,
  },
  {
    pair: 'ripple',
    price: '11,400',
    change24: '0.423',
    percentage24: '+0.4343',
    positive: false,
  },
  {
    pair: 'ample',
    price: '11,400',
    change24: '0.423',
    percentage24: '+0.4343',
    positive: true,
  },

  {
    pair: 'PEPE',
    price: '11,400',
    change24: '0.423',
    percentage24: '3',
    positive: false,
  },
  {
    pair: 'MARAI',
    price: '11,400',
    change24: '0.423',
    percentage24: '3',
    positive: false,
  },
  {
    pair: 'JOSE',
    price: '11,400',
    change24: '0.423',
    percentage24: '3',
    positive: false,
  },
]

export default function InfoBar(): JSX.Element {
  console.log(stocks)
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.totalPortfolioBox}>
          <GrGoogleWallet size={16} />
          <span className={styles.totalPortfolio}>£38,000</span>
        </div>
        <div className={styles.stockCarrousel}>
          <ul className={styles.stockCarrouselList}>
            {stocks.map((stock) => (
                <li className={styles.stockCarrouselUnit}>
                  <div className={`${styles.stockPercentage} ${styles.error}`}>
                    <span className={styles.stockPair}>{stock.pair}&nbsp;{"·"}</span>
                    <span className={`${styles.stockChange24} ${stock.positive ? styles.success : styles.error}`}>{stock.change24}</span>
                    <span className={`${styles.stockPercentage24} ${stock.positive ? styles.success : styles.error}`}>({stock.percentage24})</span>
                  </div>
                  <span className={styles.stockPrice}>{stock.price}</span>
                </li>
            ))}
          </ul>
          <ul className={styles.stockCarrouselList}>
            {stocks.map((stock) => (
                <li className={styles.stockCarrouselUnit}>
                  <div className={`${styles.stockPercentage} ${styles.error}`}>
                    <span className={styles.stockPair}>{stock.pair}&nbsp;{"·"}</span>
                    <span className={`${styles.stockChange24} ${stock.positive ? styles.success : styles.error}`}>{stock.change24}</span>
                    <span className={`${styles.stockPercentage24} ${stock.positive ? styles.success : styles.error}`}>({stock.percentage24})</span>
                  </div>
                  <span className={styles.stockPrice}>{stock.price}</span>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
