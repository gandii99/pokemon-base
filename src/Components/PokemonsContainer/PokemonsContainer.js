import PokemonCard from '../PokemonCard/PokemonCard';
import { useDispatch } from 'react-redux';
import { fetchPokemons } from '../../app/pokemonsSlice';

const PokemonsContainer = ({
  currentPokemonsList,
  clickedPokemonCard,
  setClickedPokemonCard,
}) => {
  const dispatch = useDispatch();
  const currentPokemons = currentPokemonsList.map((pokemon) => (
    <PokemonCard
      key={pokemon.name}
      pokemon={pokemon}
      clickedPokemonCard={clickedPokemonCard}
      setClickedPokemonCard={setClickedPokemonCard}
    />
  ));
  return (
    <div className="containerPokemons">
      {currentPokemons}
      <div className="btnWrapper">
        <button
          className="btnLoadMorePokemons"
          onClick={() => dispatch(fetchPokemons())}
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default PokemonsContainer;
