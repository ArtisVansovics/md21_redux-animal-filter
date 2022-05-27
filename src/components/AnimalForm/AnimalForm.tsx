import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './AnimalForm.module.scss';
import { AppDispatch, RootState } from '../../store/store';
import Button from '../Button/Button';
import { addAnimal } from '../../store/slices/animalSlice';
import Animal from '../../models/AnimalModel';

type AnimalFormProps = {
  onAdd: () => void;
}

const AnimalForm = ({ onAdd }: AnimalFormProps) => {
  const [newAnimal, setNewAnimal] = useState<Animal>({
    name: '',
    species: '',
    imgUrl: '',
  });
  const [showSpeciesInput, setShowSpeciesInput] = useState(false);
  const animals = useSelector((state: RootState) => state.animalList.animals);
  const dispatch = useDispatch<AppDispatch>();

  const speciesList = Array.from(new Set(
    animals.map(({ species }) => species),
  ));

  return (
    <div className={styles.form}>
      <h2 className={styles.title}>Add Animal</h2>
      {/* Name input */}
      <label htmlFor="nameInputId" className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          id="nameInputId"
          placeholder="Enter the animal's name"
          value={newAnimal.name}
          onChange={(e) => (
            setNewAnimal({
              ...newAnimal,
              name: e.target.value,
            })
          )}
        />
      </label>
      {/* Image url input */}
      <label htmlFor="srcInputId" className={styles.label}>
        Image source
        <input
          className={styles.input}
          type="text"
          id="srcInputId"
          placeholder="Enter url for the animal's picture"
          value={newAnimal.imgUrl}
          onChange={(e) => (
            setNewAnimal({
              ...newAnimal,
              imgUrl: e.target.value,
            })
          )}
        />
      </label>
      {/* Species input */}
      {showSpeciesInput ? (
        <label htmlFor="speciesId" className={styles.label}>
          <p>
            Species
            <button
              className={styles.toggleBtn}
              onClick={() => {
                setShowSpeciesInput(false);
                setNewAnimal({
                  ...newAnimal,
                  species: '',
                });
              }}
            >
              (select from existing species)
            </button>
          </p>
          <input
            className={styles.input}
            type="text"
            id="speciesId"
            placeholder="Enter the animal's species"
            value={newAnimal.species}
            onChange={(e) => (
              setNewAnimal({
                ...newAnimal,
                species: e.target.value,
              })
            )}
          />
        </label>
      ) : (
        <label htmlFor="speciesSelectId" className={styles.label}>
          <p>
            Species
            <button
              className={styles.toggleBtn}
              onClick={() => setShowSpeciesInput(true)}
            >
              (add new species)
            </button>
          </p>
          <select
            className={styles.select}
            id="speciesSelectId"
            value={newAnimal.species}
            onChange={(e) => (
              setNewAnimal({
                ...newAnimal,
                species: e.target.value,
              })
            )}
          >
            <option
              disabled
              label="Select species"
            />
            {speciesList && speciesList.map((species) => (
              <option
                key={species}
                value={species}
              >
                {species.toUpperCase()}
              </option>
            ))}
          </select>
        </label>
      )}
      <Button
        title="Add"
        onClick={() => {
          dispatch(addAnimal(newAnimal));
          onAdd();
        }}
        disabled={!newAnimal.name || !newAnimal.imgUrl || !newAnimal.species}
      />
    </div>
  );
};

export default AnimalForm;
