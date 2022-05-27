import React from 'react';
import styles from './AnimalCard.module.scss';

type AnimalProps = {
  name: string;
  species: string;
  imgUrl: string;
}

const AnimalCard = ({ name, species, imgUrl }: AnimalProps) => (
  <div className={styles.card}>
    <img className={styles.image} src={imgUrl} alt={name} />
    <h3 className={styles.title}>{name}</h3>
    <p className={styles.species}>{`Species: ${species}`}</p>
  </div>
);

export default AnimalCard;
