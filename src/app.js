// will only be in charge of bootstrap things tha live elsewhere

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


import IndecisionApp from './components/IndecisionApp';

const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.children}
            <p>Footer</p>

        </div>
    );
};

ReactDOM.render(<Layout><IndecisionApp /></Layout>, document.getElementById('app'));
