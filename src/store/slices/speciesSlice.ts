import { createSlice } from '@reduxjs/toolkit';
import { Species } from '../../models/AnimalModel';

export type Translation = {
  index: number;
  lv: string;
  rus: string;
}

export const speciesSlice = createSlice({
  name: 'speciesList',
  initialState: {
    species: [] as Species[],
  },
  reducers: {
    addSpecies: (state: {species: Species[]}, action: {payload: Species}) => {
      if (!state.species.some((species) => (
        species.speciesName === action.payload.speciesName
      ))) {
        state.species = [...state.species, action.payload];
      }
    },
    updateTranslation: (state: {species: Species[]}, action: {payload: Translation}) => {
      state.species = [...state.species.map((species, index) => {
        if (index === action.payload.index) {
          species = {
            ...species,
            speciesTranslations: {
              ...species.speciesTranslations,
              lv: action.payload.lv,
              rus: action.payload.rus,
            },
          };
          return species;
        } return species;
      })];
    },
    clearSpecies: (state: {species: Species[]}) => {
      state.species = [];
    },
  },
});

export const {
  addSpecies, updateTranslation, clearSpecies,
} = speciesSlice.actions;

export default speciesSlice.reducer;
