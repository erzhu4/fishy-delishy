<!doctype html>
<html>
    <title>Chess</title>
    <head>
        <style>
            .piece-image {
                width: 50px;
                height: 50px;
                background: transparent;
            }
            .board {
                position: relative;
                width: 400px;
                height: 400px;
            }
            .board-img{
                z-index: -2;
                position: absolute;
                width: 100%;
                opacity: 0.6;
            }
            .board:after {
                content: "";
                clear: both;
                display: block;
            }
            .square {
                z-index: 2;
                width: 50px;
                height: 50px;
                float: left;
            }
            .square:hover {
                background: blue;
            }
        </style>
    </head>
    <body>
        <h1>Chess</h1>
        <div class="board">
            <img class="board-img" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Chess_Board.svg">
        </div>
        <div id="score-container">white's turn</div>
    </body>
    <script src="js/chess.js"></script>
</html>