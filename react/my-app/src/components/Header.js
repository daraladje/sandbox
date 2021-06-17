import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log('Click');
  };
  // Gives route information
  const location = useLocation();
  return (
    <header>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button color={title.length > 1 ? 'red' : 'green'} text="Add" onClick={onClick}></Button>
      )}
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headStyle = { color: 'red', backgroundColor: 'black' };

export default Header;
