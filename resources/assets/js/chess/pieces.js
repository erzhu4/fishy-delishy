(function () {

	if (typeof Chess === "undefined"){
		window.Chess = {};
	}

	Chess.checkRange = function (pos) {
		return ((pos[0] < 8) && (pos[0] >= 0) && (pos[1] < 8) && (pos[1] >= 0));
	};
	// Normal pieces not counting king, pawn, or knight/////////////////////////////////////////////////////
	var Piece = Chess.Piece = function (board, pos, dirs, color, mark){
		this.board = board;
		this.grid = board.grid;
		this.pos = pos;
		this.dirs = dirs;
		this.color = color;
		this.mark = mark;
	};

	Piece.prototype.possibleMoves = function () {
		var arr = [];
		for (var i = 0; i < this.dirs.length; i++){
			var x = 1;
			flag = true;
			while (flag){
				var move = [ this.pos[0] + (this.dirs[i][0] * x), this.pos[1] + (this.dirs[i][1] * x) ];
				if (!Chess.checkRange(move)){break;}
				if (this.board.grid[move[0]][move[1]]){
					if (this.board.grid[move[0]][move[1]].color !== this.color){
						arr.push(move);
						break;
					} else {
						break;
					}
				}
				arr.push(move);
				x++;
			}// end of while loop
		}//end of for loop

		return arr;
	};

	Piece.prototype.validMove = function (move){
		return (this.possibleMoves().includes(move));
	};

	//Individual pieces declaration/////////////////////////////////////////////////////////////////
	//Knight
	var Knight = Chess.Knight = function (board, pos, dirs, color, mark) {
		this.board = board;
		this.pos = pos;
		this.dirs = dirs;
		this.color = color;
		this.mark = mark;
	};

	Knight.prototype.validMove = Piece.prototype.validMove;

	Knight.prototype.possibleMoves = function () {
		var arr = [];
		for (var i = 0; i < this.dirs.length; i++){
			var move = [ this.pos[0] + this.dirs[i][0], this.pos[1] + this.dirs[i][1] ];
			if (Chess.checkRange(move)){
				if (this.board.grid[move[0]][move[1]]){
					if (this.board.grid[move[0]][move[1]].color != this.color){arr.push(move);}
				}else {
					arr.push(move);
				}
			}// end of in range if clause
		}//end of for loop
		return arr;
	};
	//Pawn
	var Pawn = Chess.Pawn = function (board, pos, dirs, color, mark) {
		this.board = board;
		this.pos = pos;
		this.dirs = dirs;
		this.color = color;
		this.mark = mark;
	};

	Pawn.prototype.validMove = Piece.prototype.validMove;

	Pawn.prototype.possibleMoves = function () {
		var arr = [];
		var move1 = [ this.pos[0] + this.dirs[0][0], this.pos[1] + this.dirs[0][1] ];
		var move2 = [ this.pos[0] + this.dirs[1][0], this.pos[1] + this.dirs[1][1] ];
		var move3 = [ this.pos[0] + this.dirs[2][0], this.pos[1] + this.dirs[2][1] ];
		if (Chess.checkRange(move1)){
			if ((this.board.grid[move1[0]][move1[1]]) && (this.board.grid[move1[0]][move1[1]].color != this.color)){arr.push(move1);}
		}
		if ((!this.board.grid[move2[0]][move2[1]])&&(Chess.checkRange(move2))){arr.push(move2);}
		if (Chess.checkRange(move3)){
			if ((this.board.grid[move3[0]][move3[1]]) && (this.board.grid[move3[0]][move3[1]].color != this.color)){arr.push(move3);}
		}
		if ((this.color === "white") && (this.pos[0] === 6)){
			arr.push([this.pos[0] - 2, this.pos[1]]);
		}

		if ((this.color === "black") && (this.pos[0] === 1)){
			arr.push([ this.pos[0] + 2, this.pos[1] ]);
		}

		return arr;
	};
	//king
	var King = Chess.King = function (board, pos, dirs, color, mark) {
		this.board = board;
		this.pos = pos;
		this.dirs = dirs;
		this.color = color;
		this.mark = mark;
	};

	King.prototype.validMove = Piece.prototype.validMove;

	King.prototype.possibleMoves = function () {
		var arr = [];
		for (var i = 0; i < this.dirs.length; i++){
			var move = [ this.pos[0] + this.dirs[i][0], this.pos[1] + this.dirs[i][1] ];
			if (Chess.checkRange(move)){
				if (!this.board.grid[move[0]][move[1]]){
					arr.push(move);
				} else if (this.board.grid[move[0]][move[1]].color != this.color) {
					arr.push(move);
				}
			}
		}
		return arr;
	};

})();
