console.log('app.js is running');
// JSX javascript XML
// babel compile ES6 to ES5 javascript
// const template = <p>This is JSX from app.js!</p>;
var template = React.creatElement('p', null, 'hahha');

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);