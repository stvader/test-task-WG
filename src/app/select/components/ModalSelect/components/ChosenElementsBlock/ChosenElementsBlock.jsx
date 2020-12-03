import React, { useContext } from 'react';
import { ModalSelectContext } from '../../ModalSelectContext';
import ChosenElements from '../../../../../common/components/ChosenElements';

const ChosenElementsBlock = () => {
  const { chosenElements, onDeleteChosenElement } = useContext(ModalSelectContext);

  return (
    <div className="modal-current-chosen-elements">
      {!!chosenElements.length ? (
        <>
          <p className="modal-current-chosen-text">
            Currently chosen elements:
          </p>
          <ChosenElements 
            chosenElements={chosenElements}
            onDeleteElement={onDeleteChosenElement}
          />
        </>
      ) : (
        <p className="modal-current-chosen-text">
          Not chosen elements.
        </p>
      )}      
    </div>
  )
}

export default ChosenElementsBlock;