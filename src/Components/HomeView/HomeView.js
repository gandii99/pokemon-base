import './HomeView.css';
import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Filter from '../Filter/Filter';
import PokemonsContainer from '../PokemonsContainer/PokemonsContainer';
import typeOfPokemons from './PokemonsTypes';

function HomeView({
  currentPokemonsList,
  loadMorePokemons,
  setSelectedPokemonType,
  selectedPokemonType,
  allPokemonsTypes,
  setDraftInputValue,
  setIsDarkMode,
  isDarkMode,
}) {
  const [clickedPokemonCard, setClickedPokemonCard] = useState([]);

  const onChangeHandlerInputValue = (e) => {
    setDraftInputValue(e.target.value);
  };

  return (
    <div className="backGround">
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <Filter
        onChangeHandlerInputValue={onChangeHandlerInputValue}
        allPokemonsTypes={allPokemonsTypes}
        selectedPokemonType={selectedPokemonType}
        setSelectedPokemonType={setSelectedPokemonType}
        typeOfPokemons={typeOfPokemons}
      />
      {currentPokemonsList != null ? (
        <PokemonsContainer
          currentPokemonsList={currentPokemonsList}
          loadMorePokemons={loadMorePokemons}
          clickedPokemonCard={clickedPokemonCard}
          setClickedPokemonCard={setClickedPokemonCard}
        />
      ) : (
        <span>Brak danych</span>
      )}

      <Footer />
    </div>
  );
}

export default HomeView;
