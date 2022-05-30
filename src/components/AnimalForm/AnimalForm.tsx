import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './AnimalForm.module.scss';
import { AppDispatch, RootState } from '../../store/store';
import Button from '../Button/Button';
import { addAnimal } from '../../store/slices/animalSlice';
import { addSpecies } from '../../store/slices/speciesSlice';
import Animal, { Species } from '../../models/AnimalModel';

type AnimalFormProps = {
  onAdd: () => void;
  onClose: () => void;
}

const AnimalForm = ({ onAdd, onClose }: AnimalFormProps) => {
  const animals = useSelector((state: RootState) => state.animalList.animals);
  const [newAnimal, setNewAnimal] = useState<Animal>({
    name: '',
    species: '',
    imgUrl: '',
  });
  const [newSpecies, setNewSpecies] = useState<Species>({
    speciesName: '',
    speciesTranslations: {
      eng: '',
      lv: '',
      rus: '',
    },
  });
  const [showSpeciesInput, setShowSpeciesInput] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const speciesList = Array.from(new Set(
    animals.map(({ species }) => species),
  ));

  useEffect(() => {
    if (speciesList.length === 0) {
      setShowSpeciesInput(true);
    }
  }, []);

  const capitalizeWords = (textInput: string) => {
    const wordArr = textInput.split(' ');

    const capitalized = wordArr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

    return capitalized.join(' ');
  };

  const handleSubmit = () => {
    dispatch(addAnimal(newAnimal));

    dispatch(addSpecies(newSpecies));

    onAdd();
  };

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAnimal({
      ...newAnimal,
      name: capitalizeWords(e.target.value),
    });
  };

  const handleImgUrlInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAnimal({
      ...newAnimal,
      imgUrl: e.target.value,
    });
  };

  const handleSpeciesInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewAnimal({
      ...newAnimal,
      species: capitalizeWords(e.target.value),
    });

    setNewSpecies({
      ...newSpecies,
      speciesName: capitalizeWords(e.target.value),
      speciesTranslations: {
        ...newSpecies.speciesTranslations,
        eng: capitalizeWords(e.target.value),
      },
    });
  };

  const handleExistingSpeciesClick = () => {
    setShowSpeciesInput(false);

    setNewAnimal({
      ...newAnimal,
      species: '',
    });
  };

  return (
    <form
      className={styles.form}
      onSubmit={() => handleSubmit()}
    >
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
          onChange={(e) => {
            handleNameInput(e);
          }}
          required
          minLength={3}
          maxLength={15}
        />
      </label>
      {/* Image url input */}
      <label htmlFor="srcInputId" className={styles.label}>
        Image source
        <input
          className={styles.input}
          type="url"
          id="srcInputId"
          placeholder="Enter url for the animal's picture"
          value={newAnimal.imgUrl}
          onChange={(e) => {
            handleImgUrlInput(e);
          }}
          required
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
                handleExistingSpeciesClick();
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
            onChange={(e) => {
              handleSpeciesInput(e);
            }}
            required
            minLength={3}
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
            onChange={(e) => {
              handleSpeciesInput(e);
            }}
            required
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
                {species}
              </option>
            ))}
          </select>
        </label>
      )}
      <Button
        title="Add"
      />
      <button
        className={styles.closeBtn}
        onClick={onClose}
      >
        X
      </button>
    </form>
  );
};

export default AnimalForm;
