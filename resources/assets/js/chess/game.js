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
		$(".knightblack").append("<img class='piece-image' src='http://www.wpclipart.com/recreation/games/chess/chess_set_1/chess_piece_black_knight_T.png'>");
		$(".rookblack").append("<img class='piece-image' src='http://www.wpclipart.com/recreation/games/chess/chess_set_1/chess_piece_black_rook_T.png'>");
		$(".bishopblack").append("<img class='piece-image' src='http://4vector.com/i/free-vector-chess-piece-black-bishop-clip-art_120020_chess-piece-black-bishop-clip-art/Chess_Piece_Black_Bishop_clip_art_hight.png'>");
		$(".queenblack").append("<img class='piece-image' src='http://www.wpclipart.com/recreation/games/chess/chess_set_1/chess_piece_black_queen_T.png'>");
		$(".kingblack").append("<img class='piece-image' src='http://4vector.com/i/free-vector-chess-king-piece-clip-art_107167_Chess_King_Piece_clip_art_medium.png'>");
		$(".pawnblack").append("<img class='piece-image' src='http://upload.wikimedia.org/wikipedia/commons/9/93/Chess_tile_pd.png'>");
		$(".rookwhite").append("<img class='piece-image' src='http://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rlt60.png'>");
		$(".knightwhite").append("<img class='piece-image' src='http://www.wpclipart.com/recreation/games/chess/chess_set_1/chess_piece_white_knight_T.png'>");
		$(".bishopwhite").append("<img class='piece-image' src='http://4vector.com/i/free-vector-chess-bishop-white-piece-clip-art_108188_Chess_Bishop_White_Piece_clip_art_medium.png'>");
		$(".queenwhite").append("<img class='piece-image' src='https://upload.wikimedia.org/wikipedia/commons/4/49/Chess_qlt60.png'>");
		$(".kingwhite").append("<img class='piece-image' src='http://rybkaforum.net/mwf/rybkaattach/46/16246/K-big.png'>");
		$(".pawnwhite").append("<img class='piece-image' src='http://4vector.com/i/free-vector-chess-white-pawn-piece-clip-art_105063_Chess_White_Pawn_Piece_clip_art_medium.png'>");
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
