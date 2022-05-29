import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AnimalForm from '../../components/AnimalForm/AnimalForm';
import AnimalCard from '../../components/AnimalCard/AnimalCard';
import { RootState } from '../../store/store';
import Button from '../../components/Button/Button';
import Animal from '../../models/AnimalModel';

const HomePage = () => {
  const animals = useSelector((state: RootState) => state.animalList.animals);
  const [showForm, setShowForm] = useState(false);
  const [filteredAnimals, setFilteredAnimals] = useState<Animal[]>(animals);

  const speciesList = Array.from(new Set(
    animals.map(({ species }) => species),
  ));

  return (
    <div className="page">
      {showForm && (
        <div className="form-overlay">
          <AnimalForm onAdd={() => setShowForm(false)} />
        </div>
      )}
      {animals.length === 0 && (
        <div className="warning-box">
          <h2 className="warning-box__message">No animals added yet</h2>
          <Button title="Add animal" onClick={() => setShowForm(true)} />
        </div>
      )}
      {filteredAnimals.length > 0 && (
        <div className="container width-max">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="filter-container">
                  <button
                    className="filter-container__btn"
                    onClick={() => setFilteredAnimals(animals)}
                  >
                    All
                  </button>
                  {speciesList.map((species) => (
                    <button
                      key={species}
                      className="filter-container__btn"
                      onClick={() => {
                        const filteredSpecies = animals.filter((animal) => animal.species === species);

                        setFilteredAnimals(filteredSpecies);
                      }}
                    >
                      {species}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <Button
                  title="Add animal"
                  onClick={() => setShowForm(true)}
                />
                {/* <Button */}
                {/*   title="Clear all" */}
                {/*   onClick={() => localStorage.clear()} */}
                {/* /> */}
                <div className="grid">
                  {filteredAnimals.map(({ name, species, imgUrl }) => (
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
