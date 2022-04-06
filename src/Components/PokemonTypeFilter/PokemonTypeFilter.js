const PokemonTypeFilter = ({
  type,
  selectedPokemonType,
  setSelectedPokemonType,
  typeOfPokemons,
}) => {
  return (
    <div
      className={`filterType ${
        type === selectedPokemonType ? 'selected-type' : null
      }`}
      key={type}
      onClick={() =>
        setSelectedPokemonType((prevType) => (prevType === type ? null : type))
      }
    >
      <img src={typeOfPokemons[type]} alt={type}></img>
    </div>
  );
};

export default PokemonTypeFilter;
