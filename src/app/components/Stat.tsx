// components/Statistics.tsx
import React from 'react';
import styles from '../styles/Statistics.module.css';
import Image from 'next/image';
import stat1 from '/public/Images/User.png';
import stat2 from '/public/Images/Artists.png';
import stat3 from '/public/Images/Artworks.png';
import stat4 from '/public/Images/Wallet.png';
import persona1 from '/public/Images/Frame.png';
import persona2 from '/public/Images/Frame-1.png';
import persona3 from '/public/Images/Frame-2.png';


const Statistics = () => {
  return (
    <div className={styles.statContainer}>
      <div className={styles.stats}>
        <div><Image src={stat1} alt="Icon" className="stat"/><h2>300k</h2><p>Users Active</p></div>
        <div><Image src={stat2} alt="Icon" className="stat"/><h2>52,5k</h2><p>Artworks</p></div>
        <div><Image src={stat3} alt="Icon" className="stat"/><h2>17,5k</h2><p>Artists</p></div>
        <div><Image src={stat4} alt="Icon" className="stat"/><h2>35.58</h2><p>ETH Spent</p></div>
      </div>
      <div className={styles.ctaBox}>
        <div className={styles.textSection}>
          <p className={styles.overline}>OVERLINE</p>
          <h1>Cursus vitae sollicitudin donec nascetur. Join now</h1>
          <p>Donec volutpat bibendum justo, odio aenean congue est porttitor ut. Mauris vestibulum eros libero amet tincidunt.</p>
          <div className={styles.buttons}>
            <button className={styles.getStarted}>Get started</button>
            <button className={styles.learnMore}>Learn more</button>
          </div>
        </div>
        <Image src={persona1} alt="Icon" className={styles.statUsers1}/>
        <Image src={persona2} alt="Icon" className={styles.statUsers2}/>
        <Image src={persona3} alt="Icon" className={styles.statUsers3}/>
      </div>
    </div>
  );
};

export default Statistics;
