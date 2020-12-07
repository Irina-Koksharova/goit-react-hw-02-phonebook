import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onFilter }) => {
  return (
    <>
      <label className={s.label} htmlFor="input">
        Find contact by name
      </label>
      <input
        className={s.input}
        id="input"
        value={value}
        onChange={onFilter}
      ></input>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default Filter;
