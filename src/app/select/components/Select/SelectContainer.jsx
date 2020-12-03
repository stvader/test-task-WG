import React, { useState, useCallback, useMemo } from 'react';
import Select from './Select';
import ModalSelect from '../ModalSelect';
import { SelectContextProvider } from './SelectContext';

const chosenElementsInit = ['Element 3', 'Element 40'];

const SelectContainer = () => {
  const [chosenElements, setChosenElements] = useState(chosenElementsInit);
  const [isModalVisible, setModalVisible] = useState(false);

  const onChangeButtonClick = useCallback(
    () => {
      setModalVisible(true);
    }, 
    [setModalVisible]
  );

  const handleDeleteElement = useCallback(
    (titleDeleted) => {
      const newElementsList = chosenElements.filter((title) => title !== titleDeleted);
      setChosenElements(newElementsList);
    },
    [chosenElements, setChosenElements]
  );

  const handleCloseModal = useCallback(
    () => {
      setModalVisible(false);
    },
    [setModalVisible]
  );

  const handleSubmitModal = useCallback(
    (elementsList) => {
      setChosenElements(elementsList);
      handleCloseModal();
    },
    [handleCloseModal]
  );

  const contextValue = useMemo(
    () => ({
      chosenElements,
      handleCloseModal,
      handleSubmitModal
    }), 
    [chosenElements, handleCloseModal, handleSubmitModal]
  );

  return (
    <SelectContextProvider value={contextValue}> 
      <Select 
        chosenElements={chosenElements}
        onChangeButtonClick={onChangeButtonClick}
        handleDeleteElement={handleDeleteElement}
      />
    
      {isModalVisible && (        
        <ModalSelect />               
      )}
    </SelectContextProvider>    
  );
}

export default SelectContainer;