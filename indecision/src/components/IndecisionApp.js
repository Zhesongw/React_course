import React from 'react';
import AddOptions from './AddOption.js';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import OptionModal from './OptionModal.js';

export default class IndecisionApp extends React.Component{
    state = {
        options: this.props.options,
        selectedOption: undefined
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) =>({
            options:prevState.options.filter((option) => option !== optionToRemove)
        }))
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options:[] }))
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        let option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption:option }))
    }
    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option)}));
    }
    handleClearSelectedOption = () =>{
        this.setState(() => ({ selectedOption: undefined }))
    }

    componentDidMount = () => {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({options: options}));
            }
        }catch(e){
            //handle error
        }
        
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }
    componentWillUnmount = () => {
        console.log('componentWill Unmount')
    }

    render(){
        const title = 'Title';
        const subtitle = 'Subtitle';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className='container'>
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick = {this.handlePick}
                    />
                    <div className='widget'>
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOptions 
                            handleAddOption = {this.handleAddOption}
                        />
                    </div>
                </div>
                
                <OptionModal 
                    selectedOption = {this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options:['option1','option2']
}