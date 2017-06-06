(function () {

	if (typeof Chess === "undefined"){
		window.Chess = {};
	}

	var Game = Chess.Game = function () {
		this.board = new Chess.Board();
		this.currentPlayer = "white";
		this.moveArr = [];
		this.start();
	};

	Game.prototype.display = function () {
		for (var x = 0; x < this.board.grid.length; x++){
			for (var y = 0; y < this.board.grid[x].length; y++){
				if(!this.board.grid[x][y]){
					$("#" + x + y).removeClass().addClass("square");
				}else{
					$("#" + x + y).removeClass().addClass("square " + this.board.grid[x][y].mark + this.board.grid[x][y].color);
				}
			}
		}

		$(".square").html("");
		$(".knightblack").append("<img class='piece-image' src='/images/chess/blackknight.png'>");
		$(".rookblack").append("<img class='piece-image' src='/images/chess/blackrook.png'>");
		$(".bishopblack").append("<img class='piece-image' src='/images/chess/blackbishop.png'>");
		$(".queenblack").append("<img class='piece-image' src='/images/chess/blackqueen.png'>");
		$(".kingblack").append("<img class='piece-image' src='/images/chess/blackking.png'>");
		$(".pawnblack").append("<img class='piece-image' src='/images/chess/blackpawn.png'>");
		$(".rookwhite").append("<img class='piece-image' src='/images/chess/whiterook.png'>");
		$(".knightwhite").append("<img class='piece-image' src='/images/chess/whiteknight.png'>");
		$(".bishopwhite").append("<img class='piece-image' src='/images/chess/whitebishop.png'>");
		$(".queenwhite").append("<img class='piece-image' src='/images/chess/whitequeen.png'>");
		$(".kingwhite").append("<img class='piece-image' src='/images/chess/whiteking.png'>");
		$(".pawnwhite").append("<img class='piece-image' src='/images/chess/whitepawn.png'>");
	};

	//Game play methods begin here/////////////////

	Game.prototype.start = function () {
		this.board.setup();
		this.display();
		this.setClickParams();
	};


	Game.prototype.moveColor = function (pos, move, color) {
		if (!this.board.grid[pos[0]][pos[1]]) {
			alert("Invalid Move!!");
			return false;
		}
		if (this.board.grid[pos[0]][pos[1]].color !== color) {
			alert("Invalid Move!!");
			return false;
		}
		if (this.board.move(pos, move, color)) {
			this.togglePlayer();
			this.display();
			return true;
		}
	};

	Game.prototype.togglePlayer = function (){
		if (this.currentPlayer === "white"){
			this.currentPlayer = "black";
		}else{
			this.currentPlayer = "white";
		}
		$('#score-container').html(this.currentPlayer + "'s turn");
	};

	Game.prototype.setClickParams = function () {
		var game = this;
		$(".message").html(game.currentPlayer + " choose piece.");
		$(".square").on("click", function (event){
			if (game.moveArr.length === 0){
				game.moveArr.push( [ parseInt(event.currentTarget.id[0]), parseInt(event.currentTarget.id[1]) ] );
				$(".message").html(game.currentPlayer + " choose location.");
			}else{
				game.moveColor( game.moveArr[0], [ parseInt(event.currentTarget.id[0]), parseInt(event.currentTarget.id[1]) ], game.currentPlayer);
				$(".message").html(game.currentPlayer + " choose piece.")
				game.moveArr = [];
			}
		});
	};


	//get move helper methods/////







})();
