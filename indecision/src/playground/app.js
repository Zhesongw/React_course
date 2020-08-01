
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: "Indecision"
}

const Action = (props) => {
    return(
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >What should I do?</button>
            
        </div>    
    )
}

const Options = (props) => {
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption} 
                    />
                ))
            }
            {
                (props.options.length === 0)&&(<p>Please enter some options</p>)
            }
        </div>
    )
}

const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
            >remove</button>
        </div>
    )
}

class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() =>({ error: error }));
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input type='text' name='option'/>
                    <button>Add Option</button>
                    {
                        this.state.error && <p>{this.state.error}</p>
                    }
                </form>
            </div>
        )
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options:props.options
        }
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) =>({
            options:prevState.options.filter((option) => option !== optionToRemove)
        }))
    }
    handleDeleteOptions(){
        this.setState(() => ({ options:[] }))
    }
    handlePick(){
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        let option = this.state.options[randomNum];
        console.log(option)
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option)}));
    }

    componentDidMount(){
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
    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }
    componentWillUnmount(){
        console.log('componentWill Unmount')
    }

    render(){
        const title = 'Title';
        const subtitle = 'Subtitle';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick = {this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        )
    }
}

App.defaultProps = {
    options:['option1','option2']
}
const appRoot = document.getElementById('app');

ReactDOM.render(<App options = {['option1','option2','option3']}/>,appRoot);

