
var bigSquareHeader = <h1>Big Ass Header!!!</h1>;

ReactDOM.render(bigSquareHeader, document.getElementById('react-page-header'));

class BigSquare extends React.Component{

    constructor() {
    }

    render(){
        return (
            <div>
                <div>
                    <div>
                        I am a big ass square. Below is my message
                    </div>
                    <div>
                        {this.props.message}
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<BigSquare message="this is a custom message"/>, document.getElementById('react-page-root'));
ReactDOM.render(<BigSquare message="this is another message but the same component"/>, document.getElementById('react-page-root'));