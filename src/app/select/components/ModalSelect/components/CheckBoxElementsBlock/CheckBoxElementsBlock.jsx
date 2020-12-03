import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ModalSelectContext } from '../../ModalSelectContext';
import CheckBoxElement from '../../components/CheckBoxElement';
import { getChecked } from '../../../../utils/getChecked';

const CheckBoxElementsBlock = () => {
  const { 
    elementsList, 
    checkElement, 
    chosenElements, 
    isDisabled 
  } = useContext(ModalSelectContext);

  return (
    <div className="modal-elements-list">
      <fieldset className="modal-fieldset">
        {elementsList.map((elem) => 
          <CheckBoxElement 
            key={uuidv4()} 
            title={elem} 
            checked={getChecked(elem, chosenElements)}
            onChangeCheckbox={checkElement}
            disabled={isDisabled}       
          />
        )}
      </fieldset>
    </div>
  );
}

export default CheckBoxElementsBlock;