'use strict';

console.log('app.js is running');
// JSX javascript XML
// babel compile ES6 to ES5 javascript
var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    // add the event object
    e.preventDefault(); // this will stop the full page refreshing
    console.log(e);
    var option = e.target.elements.option.value; // e.target is gonna point to the element the event started on
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = ''; // clear the input
    }
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length); // 0 - 1.99999, needs to be rounded
    var option = app.options[randomNum];
    alert(option);
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        ' ',
        app.subtitle,
        ' '
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options: ' : 'No options'
    ),
    React.createElement(
        'form',
        { onSubmit: onFormSubmit },
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
            'button',
            null,
            'Add Option'
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
