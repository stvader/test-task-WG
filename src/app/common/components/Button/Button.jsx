import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({title, onClick, type = 'button'}) => (
  <button
    type={type}
    className='btn' 
    onClick={onClick}
  >
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
}

export default Button;