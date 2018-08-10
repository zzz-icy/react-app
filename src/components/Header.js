import React from 'react';

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
);


Header.defaultProps = {
    title: 'Indecision',
};

export default Header;


// can be stateless functional component
// class Header extends React.Component {  // component is a class itself, must define render function
//     render() {

//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }