import React from 'react';
import styles from './Contents.module.css';

const Contents = ({ todaycovidData, death }) => {
  const lastIndex = death.length - 1;
  console.log(death);
  return (
    <>
      <div className={styles.box}>
        <div className={styles.section}>
          <span className={styles.case}>확진자</span>
          <span className={styles.case}>사망자</span>
          <span className={styles.case}>완치자</span>
          <span className={styles.case}>검사자</span>
        </div>
        <div className={styles.coronaNumber}>
          <span className={styles.case}>{todaycovidData}</span>
          <span className={styles.case}>{death[lastIndex].Deaths}</span>
          <span className={styles.case}>111,111</span>
          <span className={styles.case}>11,111,111</span>
        </div>
      </div>

      <div className={styles.box}>
        <p className={styles.confirm}>오늘의 확진자수 </p>
        <p className={styles.confirmCase}>1,820명</p>
      </div>
    </>
  );
};

export default Contents;
