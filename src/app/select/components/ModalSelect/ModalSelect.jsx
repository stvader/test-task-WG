import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from '../../../common/components/CloseButton';
import Button from '../../../common/components/Button';
import Search from './components/Search';
import SelectFilter from './components/SelectFilter';
import CheckBoxElementsBlock from './components/CheckBoxElementsBlock';
import ChosenElementsBlock from './components/ChosenElementsBlock';

import './modal-select.scss';

const ModalSelect = ({
  closeModal,
  onSubmitModal,
  onSearch,
  onFilter,  
}) => (
  <>
    <div className="modal-backdrop"></div>
    <div className="modal-select">
      <form onSubmit={onSubmitModal}>
        <header className="modal-header">
          <h3>Make your choice</h3>
          <CloseButton handleOnClick={closeModal}/>
        </header>
        <div className="modal-filter-block">
          <Search onChange={onSearch} />
          <SelectFilter onChange={onFilter}/>
        </div>
        <CheckBoxElementsBlock />
        <ChosenElementsBlock />      
        <footer className="modal-footer">
          <Button
            type="submit" 
            title="Save"            
          />
          <Button 
            title="Cancel"
            onClick={closeModal}
          />
        </footer>
      </form>
    </div>
  </>
);

ModalSelect.propTypes = {
  closeModal: PropTypes.func.isRequired,
  onSubmitModal: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
}

export default ModalSelect;