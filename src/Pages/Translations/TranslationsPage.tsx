import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import TranslationBox from '../../components/TranslationBox/TranslationBox';

const TranslationsPage = () => {
  const speciesList = useSelector((state: RootState) => state.speciesList.species);

  return (
    <div className="page">
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12 col-sm-10 col-md-8">
            <div className="box">
              {speciesList && speciesList.map(({ speciesName, speciesTranslations }, index) => (
                <TranslationBox
                  key={speciesName}
                  index={index}
                  species={speciesName}
                  ENG={speciesTranslations.eng}
                  LV={speciesTranslations.lv}
                  RUS={speciesTranslations.rus}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslationsPage;
