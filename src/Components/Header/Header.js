import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloudSun } from '@fortawesome/free-solid-svg-icons';

const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <header className="header">
      <button
        className="button-change-dark-mode"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        <FontAwesomeIcon icon={isDarkMode ? faSun : faCloudSun} />
      </button>

      <h1>Pokedex App</h1>
    </header>
  );
};

export default Header;
