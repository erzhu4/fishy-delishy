(function (exports) {
'use strict';

var bigSquareHeader = React.createElement( 'h1', null, "Big Ass Header!!!" );

ReactDOM.render(bigSquareHeader, document.getElementById('react-page-header'));

var BigSquare = (function (superclass) {
    function BigSquare() {
    }

    if ( superclass ) BigSquare.__proto__ = superclass;
    BigSquare.prototype = Object.create( superclass && superclass.prototype );
    BigSquare.prototype.constructor = BigSquare;

    BigSquare.prototype.render = function render (){
        return (
            React.createElement( 'div', null,
                React.createElement( 'div', null,
                    React.createElement( 'div', null, "I am a big ass square. Below is my message" ),
                    React.createElement( 'div', null,
                        this.props.message
                    )
                )
            )
        );
    };

    return BigSquare;
}(React.Component));

ReactDOM.render(React.createElement( BigSquare, { message: "this is a custom message" }), document.getElementById('react-page-root'));
ReactDOM.render(React.createElement( BigSquare, { message: "this is another message but the same component" }), document.getElementById('react-page-root'));

}((this.LaravelElixirBundle = this.LaravelElixirBundle || {})));
//# sourceMappingURL=main-react.js.map
