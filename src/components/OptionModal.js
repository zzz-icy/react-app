import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (<div>
    <Modal
        isOpen={!!props.selectedOption} // flip valid string twice to make it a true boolean, same for invalid string: undefined => false boolean
        // onAfterOpen={this.afterOpenModal}
        onRequestClose={props.handleClearSelectedOption} // take a funtion, close by click background or use Escape key
        // style={customStyles}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}> Okay </button>
    </Modal>
</div >
);


export default OptionModal;