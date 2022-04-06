import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

const PokemonCard = ({
  pokemon,
  clickedPokemonCard,
  setClickedPokemonCard,
}) => {
  return (
    <div
      className={`cardPokemon ${
        clickedPokemonCard.includes(pokemon.name)
          ? 'selected-pokemon-card'
          : null
      }`}
      key={pokemon.name}
      onClick={() => {
        if (clickedPokemonCard.includes(pokemon.name)) {
          setClickedPokemonCard(
            clickedPokemonCard.filter((name) => name !== pokemon.name)
          );
        } else {
          setClickedPokemonCard([...clickedPokemonCard, pokemon.name]);
        }
      }}
    >
      <div className="moreInfo">
        {clickedPokemonCard.includes(pokemon.name) ? (
          <>
            <div>
              <div className="titleMoreInfo">Height</div>
              <span>{pokemon.height}</span>
            </div>
            <div>
              <div className="titleMoreInfo">Width</div>
              <span>{pokemon.weight}</span>
            </div>
          </>
        ) : (
          <FontAwesomeIcon icon={faInfo} style={{ fontSize: '12px' }} />
        )}
      </div>
      <img
        className="imgPokemon"
        src={
          pokemon.sprites.other.dream_world.front_default === null
            ? pokemon.sprites.front_default
            : pokemon.sprites.other.dream_world.front_default
        }
        alt={pokemon.name}
      ></img>

      <div className="namePokemon">
        <span>{pokemon.name}</span>
      </div>

      <ul className="typePokemonList">
        {pokemon.types.map((type, index) => (
          <div className={`typePokemonTag ${type.type.name}`} key={index}>
            {type.type.name}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PokemonCard;
