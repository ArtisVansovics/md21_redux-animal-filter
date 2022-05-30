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

const languages = ['ENG', 'LV', 'RUS'];

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
      <div className={styles.box}>
        <h3>
          {species}
        </h3>
        <Button
          title="Add translations"
          onClick={() => {
            dispatch(updateTranslation(currentTranslation));
          }}
        />
      </div>
      <div className={styles.columnBox}>
        <div className={styles.column}>
          {languages.map((language) => (
            <div
              key={language}
              className={styles.row}
            >
              {language}
            </div>
          ))}
        </div>
        <div className={styles.column}>
          <div className={styles.row}>
            {ENG}
          </div>
          <div className={styles.row}>
            <input
              className={styles.input}
              type="text"
              placeholder="Unknown"
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
              placeholder="Unknown"
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
    </div>
  );
};

export default TranslationBox;
