import React from 'react';
import PropTypes from 'prop-types';

import './close-button.scss';

const CloseButton = ({
  handleOnClick
}) => (
  <button 
    className="close-btn" 
    onClick={handleOnClick}
    area-label="delete"
  />
);

CloseButton.propTypes = {
  handleOnClick: PropTypes.func.isRequired
}

export default CloseButton;