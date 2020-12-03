import React from 'react';
import PropTypes from 'prop-types';

const Search = ({
  onChange
}) => (
  <fieldset className="modal-fieldset">
    <label htmlFor="search" className="modal-filter-label">
      Search:
    </label>
    <input 
      type="text" 
      id="search" 
      name="search" 
      onChange={onChange}
      className="modal-filter-input"
    />
  </fieldset>
);

Search.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default Search;