import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import Button from '../Button/Button';

const getActiveClassName = (isActive: boolean) => (
  isActive ? `${styles.nav__link} ${styles['nav__link--active']}` : `${styles.nav__link}`
);

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <NavLink
        className={({ isActive }) => getActiveClassName(isActive)}
        to="/"
      >
        Animals
      </NavLink>
      <NavLink
        className={({ isActive }) => getActiveClassName(isActive)}
        to="/translations"
      >
        Translations
      </NavLink>
    </nav>
    <Button title="Add animal" />
  </header>
);

export default Header;
