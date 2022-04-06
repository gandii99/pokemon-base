import PokemonTypeFilter from '../PokemonTypeFilter/PokemonTypeFilter';

const Filter = ({
  onChangeHandlerInputValue,
  allPokemonsTypes,
  selectedPokemonType,
  setSelectedPokemonType,
  typeOfPokemons,
}) => {
  return (
    <div className="filterWrapper">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onChangeHandlerInputValue(e)}
      ></input>
      {allPokemonsTypes.map((type) => (
        <PokemonTypeFilter
          type={type}
          key={type}
          selectedPokemonType={selectedPokemonType}
          setSelectedPokemonType={setSelectedPokemonType}
          typeOfPokemons={typeOfPokemons}
        />
      ))}
    </div>
  );
};

export default Filter;
