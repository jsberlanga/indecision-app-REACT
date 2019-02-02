class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.updateClock = this.updateClock.bind(this)
        this.state = {
            date: new Date().toLocaleTimeString()
        };
    }
    updateClock() {
        this.setState(() => {
            return {
                date: new Date().toLocaleTimeString()
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date}.</h2>
                <button onClick={this.updateClock}>Update Clock</button>
            </div>
        );
    }
}

ReactDOM.render(<Clock />, document.getElementById('app'))