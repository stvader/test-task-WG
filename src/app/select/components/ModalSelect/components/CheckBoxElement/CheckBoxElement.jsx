import React from 'react';
import PropTypes from 'prop-types';

import './checkbox-element.scss';

const CheckBoxElement = ({title, checked, onChange, disabled}) => (
  <div className="checkbox-element">    
    <input 
      type="checkbox" 
      id={title} 
      name={title}      
      className="checkbox"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
    <label htmlFor={title} className="checkbox-label">{title}</label>  
  </div>
);

CheckBoxElement.propTypes = {
  title: PropTypes.string.isRequired, 
  checked: PropTypes.bool, 
  onChange: PropTypes.func.isRequired, 
  disabled: PropTypes.bool,
}

export default CheckBoxElement;