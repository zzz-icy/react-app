import React from 'react';

// can not use export default here
const Option = (props) => (
    <div>
        {props.optionText}
        <button
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            Remove
            </button>
    </div>
);



// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p> {this.props.optionText} </p>
//             </div>
//         );
//     }
// }

export { Option as default };