import React, { useState } from 'react';
import styles from './TranslationBox.module.scss';

type TranslationBoxProps = {
  species: string;
  ENG: string;
  LV: string;
  RUS: string;
  index: number;
}

const TranslationBox = ({
  ENG, LV, RUS, species, index,
}: TranslationBoxProps) => {
  const [currentTranslation, setCurrentTranslation] = useState({
    lv: '',
    rus: '',
  });

  console.log(currentTranslation);

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        {species}
      </div>
      <div className={styles.column}>
        <div className={styles.row}>
          ENG
        </div>
        <div className={styles.row}>
          LV
        </div>
        <div className={styles.row}>
          RUS
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.row}>
          {ENG}
        </div>
        <div className={styles.row}>
          <input
            className={styles.input}
            type="text"
            placeholder="Add translation"
            value={LV}
            onChange={(e) => {
              setCurrentTranslation({
                ...currentTranslation,
                lv: e.target.value,
              });
            }}
            minLength={3}
          />
        </div>
        <div className={styles.row}>
          <input
            className={styles.input}
            type="text"
            value={RUS}
            onChange={(e) => {
              setCurrentTranslation({
                ...currentTranslation,
                rus: e.target.value,
              });
            }}
            minLength={3}
          />
        </div>
      </div>
    </div>
  );
};

export default TranslationBox;
