import './theme.css';
import React, { useState, useEffect, useMemo } from 'react';
import HomeView from './Components/HomeView/HomeView';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from './app/pokemonsSlice';

function App() {
  const dispatch = useDispatch();
  const isMorePokemons = useSelector((state) => state.pokemons.isMorePokemons);
  const currentPokemonsList = useSelector(
    (state) => state.pokemons.pokemonsList
  );
  const [selectedPokemonType, setSelectedPokemonType] = useState(null);
  const [draftInputValue, setDraftInputValue] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  const getPokemonTypes = (pokemon) => {
    if (!pokemon) {
      return;
    }
    return pokemon.types.map((types) => types.type.name);
  };

  const getAllPokemonTypes = useMemo(() => {
    if (!currentPokemonsList) {
      return;
    }
    const allTypes = currentPokemonsList
      .map((pokemon) => getPokemonTypes(pokemon))
      .reduce((acc, types) => [...acc, ...types], []);
    return [...new Set(allTypes)];
  }, [currentPokemonsList]);

  const filterPokemon = (pokemonType) => {
    const filteredPokemons = currentPokemonsList.filter((pokemon) =>
      getPokemonTypes(pokemon).includes(pokemonType)
    );
    return filteredPokemons;
  };

  let filteredPokemons = selectedPokemonType
    ? filterPokemon(selectedPokemonType)
    : currentPokemonsList;

  if (draftInputValue) {
    filteredPokemons = filteredPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(draftInputValue.toLowerCase())
    );
  }

  return (
    <div className={isDarkMode ? 'dark-mode' : null}>
      <HomeView
        currentPokemonsList={filteredPokemons}
        isMorePokemons={isMorePokemons}
        setSelectedPokemonType={setSelectedPokemonType}
        allPokemonsTypes={getAllPokemonTypes}
        setDraftInputValue={setDraftInputValue}
        setIsDarkMode={setIsDarkMode}
        isDarkMode={isDarkMode}
        selectedPokemonType={selectedPokemonType}
      />
    </div>
  );
}

export default App;
