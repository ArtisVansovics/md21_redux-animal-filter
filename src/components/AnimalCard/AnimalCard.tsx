import React from 'react';
import styles from './AnimalCard.module.scss';

type AnimalProps = {
  name: string;
  species: string;
  imgUrl: string;
  onDeleteClick: () => void;
}

const AnimalCard = ({
  name, species, imgUrl, onDeleteClick,
}: AnimalProps) => (
  <div className={styles.card}>
    <div className={styles.imgContainer}>
      <img
        className={styles.image}
        src={imgUrl}
        alt={name}
      />
    </div>
    <h3
      className={styles.title}
    >
      {name}
    </h3>
    <p
      className={styles.species}
    >
      {`Species: ${species}`}
    </p>
    <button
      className={styles.delete}
      onClick={onDeleteClick}
    >
      X
    </button>
  </div>
);

export default AnimalCard;
