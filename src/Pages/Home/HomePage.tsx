import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AnimalForm from '../../components/AnimalForm/AnimalForm';
import AnimalCard from '../../components/AnimalCard/AnimalCard';
import { RootState } from '../../store/store';
import Button from '../../components/Button/Button';

const HomePage = () => {
  const animals = useSelector((state: RootState) => state.animalList.animals);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="page">
      {showForm && <AnimalForm onAdd={() => setShowForm(false)} />}
      {animals.length === 0 && (
        <div className="warning-box">
          <h2 className="warning-box__message">No animals added yet</h2>
          <Button title="Add animal" onClick={() => setShowForm(true)} />
        </div>
      )}
      {animals.length > 0 && (
        <div className="container width-max">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <Button title="Add animal" onClick={() => setShowForm(true)} />
                <div className="grid">
                  {animals.map(({ name, species, imgUrl }) => (
                    <AnimalCard
                      key={Math.random()}
                      name={name}
                      species={species}
                      imgUrl={imgUrl}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
