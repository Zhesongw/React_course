class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handledAddOne = this.handledAddOne.bind(this);
        this.handledMinusOne = this.handledMinusOne.bind(this);
        this.handledReset = this.handledReset.bind(this);
        this.state = {
            count: this.props.initCount
        }
    }
    handledAddOne(){
        this.setState((prevState) =>({count: prevState.count + 1}));
    }
    handledMinusOne(){
        this.setState((prevState) =>({count: prevState.count - 1}));
    }
    handledReset(){
        this.setState(() =>({count: 0}));
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handledAddOne}>+1</button>
                <button onClick={this.handledMinusOne}>-1</button>
                <button onClick={this.handledReset}>Reset</button>
            </div>
        )
    }
    componentDidMount(){
        const json = localStorage.getItem('count');
        const num = parseInt(json,10);
        if(num){
            this.setState(() => ({count: num}));
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count',json);
        }
    }
}

Counter.defaultProps = {initCount: 0}
const appRoot = document.getElementById('app');
ReactDOM.render(<Counter />, appRoot)