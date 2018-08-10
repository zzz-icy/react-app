'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);

        _this.state = {
            // options: ['Thing One', 'Thing Two', 'Thing Three', 'Thing Four'],
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState({
                options: []
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length); // 0 - 1.99999, needs to be rounded
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Invalid input!';
            } else if (this.state.options.indexOf(option) > -1) {
                // if >-1, already exists
                return 'Already exists!';
            }

            this.setState(function (prevState) {
                // prevState.options.push(option) we do not want to mutate the previos state
                // create a new array, concat arrays
                var newOptions = prevState.options.concat([option]);
                return {
                    options: newOptions
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {

            var title = 'Indecision';
            var subtitle = 'Put your life in the hands of  computer!';
            var headerProps = {
                title: title,
                subtitle: subtitle
            };
            return React.createElement(
                'div',
                null,
                React.createElement(Header, headerProps),
                React.createElement(Action, {
                    hasOption: this.state.options.length > 0,
                    handlePick: this.handlePick }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions }),
                React.createElement(AddOption, {
                    options: this.state.options,
                    handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);
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

// if class based should be this.props


var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                disabled: !props.hasOption,
                onClick: props.handlePick
            },
            'What should I do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, optionText: option });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            ' ',
            props.optionText,
            ' '
        )
    );
};
// class Action extends React.Component {
//     // define method
//     // handlePick() {  // this is a method for Action component in new and consice syntax, outside render
//     //     alert('handlepick');
//     // }
//     render() {

//         return (
//             <div>
//                 <button disabled={!this.props.hasOption} onClick={this.props.handlePick} >What should I do?</button>
//             </div>
//         );
//     }
// }

// class Options extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this); // one way is calling bind() in constructor, the other way is calling bind() inline in render()
//     // }
//     // so how did we break that context, use props in the method but not render method
//     // handleRemoveAll() {
//     //     alert('handle remove all');
//     //     console.log(this.props.options);
//     // console.log(this.props.options); lose the context
//     // example
//     // const func = function () {
//     // console.log(this)
//     // }.bind(this);  get the context back, reset the context
//     // func();   output is undefine, because already lose that context, then hoe to set the binding
//     // Uncaught TypeError: Cannot read property 'props' of undefined
//     // }
//     // render() is also a method of Options component, can not be arrow function, or have no access to handleRemoveAll


//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions} >Remove All</button>
//                 {this.props.options.map((option) => {
//                     return <Option key={option} optionText={option} />;
//                 })}
//             </div>
//         );
//     }
// }

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p> {this.props.optionText} </p>
//             </div>
//         );
//     }
// }

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        // the handleAddOption here refers to the method defined within AddOption component, not the props passed in
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault(); // this will stop the full page refreshing
            // console.log(e);
            var option = e.target.elements.option.value.trim();
            // .trim() take off spaces not internal
            // e.target is gonna point to the element the event started on
            // if (option) { // nolonger need if condition here, it's handled up above in the parent component
            // 
            // this.setState((prevState) => {
            //     return {
            //         options: prevState.options.push(option),
            //     };
            // }
            // );
            // this.props.handleAddOption(option); // call the props function here
            // e.target.elements.option.value = '';
            var error = this.props.handleAddOption(option);
            this.setState({
                error: error
                // error   ES6 object shorthand
            });
            e.target.elements.option.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
