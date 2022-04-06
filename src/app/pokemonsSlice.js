import { createSlice } from '@reduxjs/toolkit';

export const fetchPokemons = () => {
  return async (dispatch, getState) => {
    const offset = getState().pokemons.offset;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
    );
    const data = await response.json();
    const urls = await Promise.all(data.results.map((u) => fetch(u.url)));
    const pokemonsInfo = await Promise.all(urls.map((u) => u.json()));

    dispatch(addPokemons(pokemonsInfo));
    dispatch(updateOffset());
    dispatch(updateIsMorePokemons());
  };
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: {
    offset: 0,
    isMorePokemons: false,
    pokemonsList: [],
  },
  reducers: {
    addPokemons: (state, action) => {
      state.pokemonsList.push(...action.payload);
    },
    updateOffset: (state) => {
      state.offset = state.offset + 20;
    },
    updateIsMorePokemons: (state, action) => {
      state.isMorePokemons = action.payload;
    },
  },
});

export const { addPokemons, updateOffset, updateIsMorePokemons } =
  pokemonsSlice.actions;
export default pokemonsSlice.reducer;
