class IndecisionApp extends React.Component {
    render() {

        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of  computer!';
        const options = ['Thing One', 'Thing Two', 'Thing Three'];
        const headerProps = {
            title: title,
            subtitle: subtitle,
        }
        return (
            <div>
                <Header {...headerProps} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {  // component is a class itself, must define render function
    render() {

        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {  // this is a method for Action component in new and consice syntax, outside render
        alert('handlepick');
    }
    render() {

        return (
            <div>
                <button onClick={this.handlePick} >What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                {this.props.options.map((option) => {
                    return <Option key={option} optionText={option} />;
                })}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p> {this.props.optionText} </p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <button>AddOption</button>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));









// console.log('app.js is running');
// // JSX javascript XML
// // babel compile ES6 to ES5 javascript
// const app = {
//     title: 'Indecision App',
//     subtitle: 'Put your life in the hands of computer',
//     options: [],
// };

// const onFormSubmit = (e) => {   // add the event object
//     e.preventDefault(); // this will stop the full page refreshing
//     console.log(e);
//     const option = e.target.elements.option.value;  // e.target is gonna point to the element the event started on
//     if (option) {
//         app.options.push(option);
//         e.target.elements.option.value = ''; // clear the input
//     }
// };

// const onRemoveAll = () => {
//     app.options = [];
// }

// const onMakeDecision = () => {
//     const randomNum = Math.floor(Math.random() * app.options.length); // 0 - 1.99999, needs to be rounded
//     const option = app.options[randomNum];
//     alert(option);
// }

// const template = (
//     <div>
//         <h1>{app.title}</h1>
//         {app.subtitle && <p> {app.subtitle} </p>}
//         <p>{app.options.length > 0 ? 'Here are your options: ' : 'No options'}</p>

//         <form onSubmit={onFormSubmit}>
//             <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>

//             <button onClick={onRemoveAll}>Remove All</button>
//             <ol>
//                 {
//                     app.options.map((option) => (
//                         <li key={option}>{option}</li>
//                     ))
//                 }
//             </ol>
//             <input type='text' name='option' />

//             <button >Add Option</button>
//         </form>
//     </div >
// );


// const appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
