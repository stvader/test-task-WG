import React, { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import CheckBoxElement from './CheckBoxElement';

const CheckBoxElementContainer = ({
  title,
  checked,
  onChangeCheckbox,
  disabled
}) => {
  const [isChecked, setChecked] = useState(checked);

  const handleChange = useCallback(
    () => {
      setChecked(!isChecked);
      onChangeCheckbox(title);      
    },
    [onChangeCheckbox, title, isChecked, setChecked]
  );

  return (
    <CheckBoxElement 
      title={title}
      checked={isChecked}
      onChange={handleChange}
      disabled={disabled}
    />
  );
}

CheckBoxElementContainer.propTypes = {
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChangeCheckbox: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

export default memo(CheckBoxElementContainer);