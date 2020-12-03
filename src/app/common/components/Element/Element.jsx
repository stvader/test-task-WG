import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../CloseButton';

import './element.scss';

const Element = ({
  title,
  onDeleteElement
}) => (
  <div className="element">
    <span className="element-title">
      {title}
    </span>
    <CloseButton handleOnClick={() => onDeleteElement(title)} />
  </div>
);

Element.propTypes = {
  title: PropTypes.string.isRequired,
  onDeleteElement: PropTypes.func.isRequired,
}

export default Element;