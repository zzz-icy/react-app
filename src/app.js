console.log('node is running!');
// class IndecisionApp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
//         this.handleAddOption = this.handleAddOption.bind(this);
//         this.handlePick = this.handlePick.bind(this);
//         this.handleDeleteOption = this.handleDeleteOption.bind(this);

//         this.state = {
//             // options: ['Thing One', 'Thing Two', 'Thing Three', 'Thing Four'],
//             options: props.options,
//         }
//     }
//     // the very first time app got rendered 
//     componentDidMount() {
//         try {
//             const json = localStorage.getItem('options');
//             const options = JSON.parse(json);
//             if (options) {  // avoid set option as null
//                 this.setState({ options });
//             }
//         }
//         catch (e) {
//             // do nothing
//         }

//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.options.length !== this.state.options.length) { // won't save redundant data
//             const json = JSON.stringify(this.state.options);
//             localStorage.setItem('options', json);
//             // console.log('saving data!');
//         }
//     }
//     // fire before component goes away
//     componentWillUnmount() {
//         console.log('componentWillUnmount!');

//     }

//     handleDeleteOptions() {
//         this.setState({
//             options: [],
//         });
//     }

//     handleDeleteOption(optionToRemove) {
//         this.setState((prevState) => ({
//             options: prevState.options.filter((option) => optionToRemove !== option)
//         }));
//     }

//     handlePick() {
//         const randomNum = Math.floor(Math.random() * this.state.options.length); // 0 - 1.99999, needs to be rounded
//         const option = this.state.options[randomNum];
//         alert(option);
//     }

//     handleAddOption(option) {
//         if (!option) {
//             return 'Invalid input!';
//         } else if (this.state.options.indexOf(option) > -1) {  // if >-1, already exists
//             return 'Already exists!';
//         }

//         this.setState(
//             (prevState) => (
//                 // prevState.options.push(option) we do not want to mutate the previos state
//                 // create a new array, concat arrays
//                 {
//                     options: prevState.options.concat([option]),
//                 }
//             )
//         );
//     }

//     render() {

//         const title = 'Indecision';
//         const subtitle = 'Put your life in the hands of  computer!';
//         // const headerProps = {
//         //     title: title,
//         //     subtitle: subtitle,
//         // }
//         return (
//             <div>
//                 <Header title={title} subtitle={subtitle} />


//                 <Action
//                     hasOption={this.state.options.length > 0}
//                     handlePick={this.handlePick} />

//                 <Options
//                     options={this.state.options}
//                     handleDeleteOptions={this.handleDeleteOptions}
//                     handleDeleteOption={this.handleDeleteOption}
//                 />

//                 <AddOption
//                     options={this.state.options}
//                     handleAddOption={this.handleAddOption}
//                 // chained props, has alternative way of doing this
//                 />
//             </div>
//         )
//     }
// }
// // still can cutomize it , good for reusable
// IndecisionApp.defaultProps = {
//     options: [],
// }
// // can be stateless functional component
// // class Header extends React.Component {  // component is a class itself, must define render function
// //     render() {

// //         return (
// //             <div>
// //                 <h1>{this.props.title}</h1>
// //                 <h2>{this.props.subtitle}</h2>
// //             </div>
// //         );
// //     }
// // }

// // if class based should be this.props
// const Header = (props) => {
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             {props.subtitle && <h2>{props.subtitle}</h2>}
//         </div>
//     );
// };

// Header.defaultProps = {
//     title: 'Indecision',
// };

// const Action = (props) => {
//     return (
//         <div>
//             <button
//                 disabled={!props.hasOption}
//                 onClick={props.handlePick}
//             >
//                 What should I do?
//             </button>
//         </div>
//     );
// };

// const Options = (props) => {
//     return (
//         <div>
//             <button onClick={props.handleDeleteOptions} >Remove All</button>
//             {props.options.length === 0 && <p>Please add an option to get started!</p>}
//             {props.options.map((option) => (
//                 <Option
//                     key={option}
//                     optionText={option}
//                     handleDeleteOption={props.handleDeleteOption}
//                 />
//             )
//             )}
//         </div>
//     );
// };

// const Option = (props) => {
//     return (
//         <div>
//             {props.optionText}
//             <button
//                 onClick={(e) => {
//                     props.handleDeleteOption(props.optionText);
//                 }}
//             >
//                 Remove
//             </button>
//         </div>
//     );
// };
// // class Action extends React.Component {
// //     // define method
// //     // handlePick() {  // this is a method for Action component in new and consice syntax, outside render
// //     //     alert('handlepick');
// //     // }
// //     render() {

// //         return (
// //             <div>
// //                 <button disabled={!this.props.hasOption} onClick={this.props.handlePick} >What should I do?</button>
// //             </div>
// //         );
// //     }
// // }

// // class Options extends React.Component {
// //     // constructor(props) {
// //     //     super(props);
// //     //     this.handleRemoveAll = this.handleRemoveAll.bind(this); // one way is calling bind() in constructor, the other way is calling bind() inline in render()
// //     // }
// //     // so how did we break that context, use props in the method but not render method
// //     // handleRemoveAll() {
// //     //     alert('handle remove all');
// //     //     console.log(this.props.options);
// //     // console.log(this.props.options); lose the context
// //     // example
// //     // const func = function () {
// //     // console.log(this)
// //     // }.bind(this);  get the context back, reset the context
// //     // func();   output is undefine, because already lose that context, then hoe to set the binding
// //     // Uncaught TypeError: Cannot read property 'props' of undefined
// //     // }
// //     // render() is also a method of Options component, can not be arrow function, or have no access to handleRemoveAll


// //     render() {
// //         return (
// //             <div>
// //                 <button onClick={this.props.handleDeleteOptions} >Remove All</button>
// //                 {this.props.options.map((option) => {
// //                     return <Option key={option} optionText={option} />;
// //                 })}
// //             </div>
// //         );
// //     }
// // }

// // class Option extends React.Component {
// //     render() {
// //         return (
// //             <div>
// //                 <p> {this.props.optionText} </p>
// //             </div>
// //         );
// //     }
// // }

// class AddOption extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleAddOption = this.handleAddOption.bind(this);
//         // the handleAddOption here refers to the method defined within AddOption component, not the props passed in
//         this.state = {
//             error: undefined,
//         }
//     }

//     handleAddOption(e) {
//         e.preventDefault(); // this will stop the full page refreshing
//         // console.log(e);
//         const option = e.target.elements.option.value.trim();
//         // .trim() take off spaces not internal
//         // e.target is gonna point to the element the event started on
//         // if (option) { // nolonger need if condition here, it's handled up above in the parent component
//         // 
//         // this.setState((prevState) => {
//         //     return {
//         //         options: prevState.options.push(option),
//         //     };
//         // }
//         // );
//         // this.props.handleAddOption(option); // call the props function here
//         // e.target.elements.option.value = '';
//         const error = this.props.handleAddOption(option);
//         this.setState({
//             error: error,
//             // error   ES6 object shorthand
//         });
//         if (!error) {
//             e.target.elements.option.value = '';
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.error && <p>{this.state.error}</p>}
//                 <form onSubmit={this.handleAddOption}>

//                     <input type='text' name='option' />
//                     <button >Add Option</button>

//                 </form>
//             </div>
//         );
//     }
// }


// ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
