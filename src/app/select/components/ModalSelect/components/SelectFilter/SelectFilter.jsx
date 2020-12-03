import React from 'react';
import PropTypes from 'prop-types';

const SelectFilter = ({
  onChange
}) => (
  <fieldset className="modal-fieldset">
    <label 
      htmlFor="interval"
      className="modal-filter-label"
    >
      Filter:
    </label>

    <select id="interval" onChange={onChange}>
      <option value={0}> -- select a range -- </option>
      <option value={10}>Number > 10</option>
      <option value={100}>Number > 100</option>
      <option value={200}>Number > 200</option>      
    </select>
  </fieldset>
);

SelectFilter.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default SelectFilter;