class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);

        this.state = {
            // options: ['Thing One', 'Thing Two', 'Thing Three', 'Thing Four'],
            options: [],
        }
    }
    handleDeleteOptions() {
        this.setState({
            options: [],
        });
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length); // 0 - 1.99999, needs to be rounded
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        this.setState(
            (prevState) => {
                // prevState.options.push(option) we do not want to mutate the previos state
                // create a new array, concat arrays
                const newOptions = prevState.options.concat([option]);
                return {
                    options: newOptions,
                }
            }
        );
    }
    render() {

        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of  computer!';
        const headerProps = {
            title: title,
            subtitle: subtitle,
        }
        return (
            <div>
                <Header {...headerProps} />

                <Action
                    hasOption={this.state.options.length > 0}
                    handlePick={this.handlePick} />

                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} />

                <AddOption
                    options={this.state.options}
                    handleAddOption={this.handleAddOption} />
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
    // define method
    // handlePick() {  // this is a method for Action component in new and consice syntax, outside render
    //     alert('handlepick');
    // }
    render() {

        return (
            <div>
                <button disabled={!this.props.hasOption} onClick={this.props.handlePick} >What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.handleRemoveAll = this.handleRemoveAll.bind(this); // one way is calling bind() in constructor, the other way is calling bind() inline in render()
    // }
    // so how did we break that context, use props in the method but not render method
    // handleRemoveAll() {
    //     alert('handle remove all');
    //     console.log(this.props.options);
    // console.log(this.props.options); lose the context
    // example
    // const func = function () {
    // console.log(this)
    // }.bind(this);  get the context back, reset the context
    // func();   output is undefine, because already lose that context, then hoe to set the binding
    // Uncaught TypeError: Cannot read property 'props' of undefined
    // }
    // render() is also a method of Options component, can not be arrow function, or have no access to handleRemoveAll


    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions} >Remove All</button>
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
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        // the handleAddOption here refers to the method defined within AddOption component, not the props passed in
    }

    handleAddOption(e) {
        e.preventDefault(); // this will stop the full page refreshing
        // console.log(e);
        const option = e.target.elements.option.value.trim();
        // .trim() take off spaces not internal
        // e.target is gonna point to the element the event started on
        if (option) {
            // 
            // this.setState((prevState) => {
            //     return {
            //         options: prevState.options.push(option),
            //     };
            // }
            // );
            this.props.handleAddOption(option); // call the props function here
            // e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>

                    <input type='text' name='option' />
                    <button >Add Option</button>

                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
