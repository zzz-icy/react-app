// will only be in charge of bootstrap things tha live elsewhere

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';

// const Layout = (props) => {
//     return (
//         <div>
//             <p>Header</p>
//             {props.children}
//             <p>Footer</p>

//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
