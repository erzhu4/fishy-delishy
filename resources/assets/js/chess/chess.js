$ = require('jquery');
require('./helpers.js');
require('./board.js');
require('./pieces.js');
require('./game.js');

for (var x = 0; x < 8; x++){
    for (var y = 0; y < 8; y++){
        $(".board").append("<div class='square' Id='" + x + y + "'></div>");
    }
}
$( function () {
    var game = new Chess.Game();
});