import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {

    return (<div>
        <Modal
            isOpen={!!props.selectedOption} // flip valid string twice to make it a true boolean, same for invalid string: undefined => false boolean
            // onAfterOpen={this.afterOpenModal}
            onRequestClose={props.handleClearSelectedOption} // take a funtion, close by click background or use Escape key
            // style={customStyles}
            contentLabel="Selected Option"
        >
            Selected Option
            {props.selectedOption && <h3>{props.selectedOption}</h3>}
            <button onClick={props.handleClearSelectedOption}> Okay </button>
        </Modal>
    </div>
    );
};

export default OptionModal;