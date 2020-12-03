import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Element from '../Element';

import './chosen-elements.scss';

const ChosenElements = ({
  chosenElements,
  onDeleteElement,  
}) => (
  <div className="chosen-elements-wrapper">
    {chosenElements.map((title) => (
      <Element
        key={uuidv4()}
        title={title}
        onDeleteElement={onDeleteElement}
      />
    ))}
  </div>
);

ChosenElements.propTypes = {
  chosenElements: PropTypes.arrayOf(PropTypes.string),
  onDeleteElement: PropTypes.func.isRequired,
}

export default ChosenElements;