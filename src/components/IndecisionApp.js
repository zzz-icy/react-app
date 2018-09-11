import React from 'react';

import AddOption from './AddOption';
// import Option from './components/Option';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {
    state = {
        // options: ['Thing One', 'Thing Two', 'Thing Three', 'Thing Four'],
        options: this.props.options,
        selectedOption: undefined,
    }
    // constructor(props) {
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);

    //     this.state = {
    //         // options: ['Thing One', 'Thing Two', 'Thing Three', 'Thing Four'],
    //         options: props.options,
    //     }
    // }
    // the very first time app got rendered 
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {  // avoid set option as null
                this.setState({ options });
            }
        }
        catch (e) {
            // do nothing
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) { // won't save redundant data
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            // console.log('saving data!');
        }
    }
    // fire before component goes away
    componentWillUnmount() {
        console.log('componentWillUnmount!');

    }

    handleDeleteOptions = () => {
        this.setState({
            options: [],
        });
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length); // 0 - 1.99999, needs to be rounded
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option,
        }));
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item!';
        } else if (this.state.options.indexOf(option) > -1) {  // if >-1, already exists
            return 'Already exists!';
        }

        this.setState(
            (prevState) => (
                // prevState.options.push(option) we do not want to mutate the previos state
                // create a new array, concat arrays
                {
                    options: prevState.options.concat([option]),
                }
            )
        );
    }

    handleClearSelectedOption = () => {
        this.setState((prevState) => ({
            selectedOption: !prevState.selectedOption,
            // selectedOption: undefined,
        }));
    };

    render() {

        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of  computer!';
        // const headerProps = {
        //     title: title,
        //     subtitle: subtitle,
        // }
        return (
            <div>
                <Header title={title} subtitle={subtitle} />

                <div className="container">

                    <Action
                        hasOption={this.state.options.length > 0}
                        handlePick={this.handlePick} />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />

                        <AddOption
                            options={this.state.options}
                            handleAddOption={this.handleAddOption}
                        // chained props, has alternative way of doing this
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        )
    }
}

// still can cutomize it , good for reusable
IndecisionApp.defaultProps = {
    options: [],
}