class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state ={
            visibility: false
        }
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return{
                visibility: !prevState.visibility
            }
        })
    }

    render(){
        return(
            <div>
                <h1>Visisbility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility? 'Hide Details' : 'Show Details'}</button>
                { this.state.visibility && (
                    <div>
                        <p>Is this what you want to see?</p>
                    </div>
                )}
            </div>
        )
    }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle />, appRoot);
