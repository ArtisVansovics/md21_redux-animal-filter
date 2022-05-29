import { createSlice } from '@reduxjs/toolkit';
import Animal from '../../models/AnimalModel';

export const animalSlice = createSlice({
  name: 'animalList',
  initialState: {
    animals: [] as Animal[],
  },
  reducers: {
    addAnimal: (state: {animals: Animal[]}, action: {payload: Animal}) => {
      state.animals = [...state.animals, action.payload];
    },
    deleteAnimal: (state: {animals: Animal[]}, action: {payload: number}) => {
      state.animals.splice(action.payload, 1);
    },
  },
});

export const {
  addAnimal, deleteAnimal,
} = animalSlice.actions;

export default animalSlice.reducer;
