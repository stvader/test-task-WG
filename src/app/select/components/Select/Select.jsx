import React from 'react';
import PropTypes from 'prop-types';
import ChosenElements from '../../../common/components/ChosenElements';
import Button from '../../../common/components/Button';

import './select.scss';

const Select = ({
  chosenElements,
  onChangeButtonClick,
  handleDeleteElement
}) => (  
  <section className="select-block">
    <h3 className="select-header">
      Item Selection
    </h3>
    <p className="select-info">
      You currently have {chosenElements.length} items selected.
    </p>
    {!!chosenElements.length && ( 
      <ChosenElements 
        chosenElements={chosenElements}
        onDeleteElement={handleDeleteElement}  
      />      
    )}
    <Button 
      title="Сhange my choice"
      onClick={onChangeButtonClick}
    />
  </section>
);
  
Select.propTypes = {
  chosenElements: PropTypes.arrayOf(PropTypes.string),
  onChangeButtonClick: PropTypes.func.isRequired,
  handleDeleteElement: PropTypes.func.isRequired
}

export default Select;