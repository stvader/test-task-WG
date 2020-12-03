import React, { useContext, useState, useCallback, useEffect, useMemo } from 'react';
import ModalSelect from './ModalSelect';
import { SelectContext } from '../Select/SelectContext';
import { isLimitElements } from '../../utils/isLimitElements';
import { ModalSelectContextProvider } from './ModalSelectContext';
import { getSearchList } from '../../utils/getSearchList';

const elementsListInit = Array(300).fill().map((elem, i) => `Element ${i + 1}`)

const ModalSelectContainer = () => {
  const { handleCloseModal, chosenElements, handleSubmitModal } = useContext(SelectContext);

  const [elementsList, setElementsList] = useState(elementsListInit);
  const [chosenElementsList, setChosenElementsList] = useState(chosenElements);
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState(0);
  const [isDisabled, setDisabled] = useState(isLimitElements(chosenElementsList));

  const handleDeleteChosenElement = useCallback(
    deletedElement => {
      const newList = chosenElementsList.filter((title) => title !== deletedElement);
      setChosenElementsList(newList);
    }, 
    [chosenElementsList, setChosenElementsList]
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      handleSubmitModal(chosenElementsList);
    },
    [handleSubmitModal, chosenElementsList]
  );

  const handleSearch = useCallback(
    (event) => {
      const value = event.target.value;
      setSearchValue(value);      
    },
    [setSearchValue]
  );

  const handleFilter = useCallback(
    (event) => {
      const value = event.target.value.trim();
      setFilterValue(value);      
    },
    [setFilterValue]
  );
  
  const handleCheckElement = useCallback(
    (element) => {
      const newList = chosenElementsList.includes(element)
        ? chosenElementsList.filter((elem) => elem !== element)
        : chosenElementsList.concat(element);
      setChosenElementsList(newList);      
    },
    [chosenElementsList, setChosenElementsList]
  );

  useEffect(
    () => {
      const rangeList = elementsListInit.slice(Number(filterValue));
      const listFilter = getSearchList(searchValue, rangeList);
      setElementsList(listFilter)
    },
    [searchValue, filterValue]
  );

  useEffect(
    () => {
      setDisabled(isLimitElements(chosenElementsList))
    },
    [chosenElementsList]
  );

  const contextValue = useMemo(
    () => ({
      elementsList,
      isDisabled,
      chosenElements: chosenElementsList,
      checkElement: handleCheckElement,
      onDeleteChosenElement: handleDeleteChosenElement,    
    }),
    [
      elementsList, 
      isDisabled, 
      chosenElementsList, 
      handleCheckElement,
      handleDeleteChosenElement
    ]
  );

  return (
    <ModalSelectContextProvider value={contextValue}>
      <ModalSelect 
        closeModal={handleCloseModal}          
        onSubmitModal={handleSubmit}
        onSearch={handleSearch}
        onFilter={handleFilter}        
      />
    </ModalSelectContextProvider>
    
  )
}

export default ModalSelectContainer;