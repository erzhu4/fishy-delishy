(function () {

	if (typeof Chess === "undefined"){
		window.Chess = {};
	}

	var Board = Chess.Board = function () {
		this.grid = new Array(8);
		for (var i = 0; i < this.grid.length; i++){
			this.grid[i] = new Array(8);
			for ( var x = 0; x < this.grid[i].length; x++){
				this.grid[i][x] = null
			}
		}//end of setting up empty grid
	};

	Board.prototype.setRook = function (pos, color) {
		var dirs = [ [1,0], [0,1], [-1,0], [0,-1] ];
		var rook = new Chess.Piece(this, pos, dirs, color, "rook");
		this.grid[pos[0]][pos[1]] = rook;
		return 0;
	};

	Board.prototype.setBishop = function (pos, color) {
		var dirs = [ [1,1], [1,-1], [-1,1], [-1,-1] ];
		var bishop = new Chess.Piece(this, pos, dirs, color, "bishop");
		this.grid[pos[0]][pos[1]] = bishop;
		return 0;
	};

	Board.prototype.setQueen = function (pos, color) {
		var dirs = [ [1,1], [1,-1], [-1,1], [-1,-1],[1,0], [0,1], [-1,0], [0,-1] ];
		var queen = new Chess.Piece(this, pos, dirs, color, "queen");
		this.grid[pos[0]][pos[1]] = queen;
		return 0;
	};
	// end of setting up pieces

	Board.prototype.setKing = function (pos, color) {
		var dirs = [ [1,1], [1,-1], [-1,1], [-1,-1],[1,0], [0,1], [-1,0], [0,-1] ];
		var king = new Chess.King(this, pos, dirs, color, "king");
		this.grid[pos[0]][pos[1]] = king;
		return 0;
	};

	Board.prototype.setKnight = function (pos, color) {
		var dirs = [ [1,2], [1,-2], [2,1], [2,-1], [-1,2], [-1,-2], [-2,1], [-2,-1] ];
		var knight = new Chess.Knight(this, pos, dirs, color, "knight");
		this.grid[pos[0]][pos[1]] = knight;
		return 0;
	};

	Board.prototype.setPawn = function (pos, color) {
		if (color === "white"){
			var dirs = [ [-1,-1], [-1,0], [-1,1] ] ;
		} else if (color === "black"){
			var dirs = [ [1,-1], [1,0], [1,1] ];
		}
		var pawn = new Chess.Pawn(this, pos, dirs, color, "pawn");
		this.grid[pos[0]][pos[1]] = pawn;
		return 0;
	};
	//End of all pieces setup functions

	Board.prototype.setup = function () {
		//set up black side
		this.setRook([0,0], "black");
		this.setKnight([0,1], "black");
		this.setBishop([0,2], "black");
		this.setQueen([0,3], "black");
		this.setKing([0,4], "black");
		this.setBishop([0,5], "black");
		this.setKnight([0,6], "black");
		this.setRook([0,7], "black");
		for (var i = 0; i < this.grid[1].length; i++){
			this.setPawn([1, i], "black");
		}
		//set up white side
		this.setRook([7,0], "white");
		this.setKnight([7,1], "white");
		this.setBishop([7,2], "white");
		this.setQueen([7,3], "white");
		this.setKing([7,4], "white");
		this.setBishop([7,5], "white");
		this.setKnight([7,6], "white");
		this.setRook([7,7], "white");
		for (var i = 0; i < this.grid[6].length; i++){
			this.setPawn([6,i], "white");
		}
	};

	Board.prototype.move = function (pos, destination, color){
		if (this.grid[pos[0]][pos[1]].validMove(destination)){
			this.grid[destination[0]][destination[1]] = this.grid[pos[0]][pos[1]];
			this.grid[destination[0]][destination[1]].pos = destination;
			this.grid[pos[0]][pos[1]] = null;
			return true;
		} else {
			return false;
		}
	};

	//return pieces
	Board.prototype.getPieces = function (color) {
		var pieces = [];
		for (var o = 0; o < this.grid.length; o++) {
			for (var i = 0; i < this.grid[o].length; i++){
				if ((this.grid[o][i]) && (this.grid[o][i].color === color)){
					pieces.push(this.grid[o][i]);
				}
			}
		}
		return pieces;
	};

	Board.prototype.getKing = function (color) {
		var str = $(".king" + color)[0].id;
		var location = [ parseInt(str[0]), parseInt(str[1]) ];
		return this.grid[location[0]][location[1]];
	};//needs fixing to not use dom elements to get position!!!!!!!!!!

	Board.prototype.inCheck = function (color) {
		var king = this.getKing(color);
		var otherColor = (color === "black" ? "white" : "black");
		var otherPieces = this.getPieces(otherColor);
		for (var i = 0; i < otherPieces.length; i++){
			if (otherPieces[i].possibleMoves().includes(king.pos)) {return true;}
		}
		return false;
	};

	//win conditions


})();
