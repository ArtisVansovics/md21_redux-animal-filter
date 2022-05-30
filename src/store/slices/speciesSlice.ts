import { createSlice } from '@reduxjs/toolkit';
import { Species } from '../../models/AnimalModel';

export type Translation = {
  language: string;
  translation: string;
}

export const speciesSlice = createSlice({
  name: 'speciesList',
  initialState: {
    species: [] as Species[],
  },
  reducers: {
    addSpecies: (state: {species: Species[]}, action: {payload: Species}) => {
      if (!state.species.some((species) => species.speciesName === action.payload.speciesName)) {
        state.species = [...state.species, action.payload];
      }
    },
  },
});

export const {
  addSpecies,
} = speciesSlice.actions;

export default speciesSlice.reducer;
