import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import styles from './TranslationBox.module.scss';
import Button from '../Button/Button';
import { updateTranslation } from '../../store/slices/speciesSlice';

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
    index,
    lv: LV,
    rus: RUS,
  });
  const dispatch = useDispatch<AppDispatch>();

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
            value={currentTranslation.lv}
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
            value={currentTranslation.rus}
            placeholder="Add translation"
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
      <div className={styles.column}>
        <Button
          title="Add translations"
          onClick={() => {
            dispatch(updateTranslation(currentTranslation));
          }}
        />
      </div>
    </div>
  );
};

export default TranslationBox;
