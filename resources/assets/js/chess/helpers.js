(function () {
	
	Array.prototype.includes = function (arr) {
		for (var i = 0; i < this.length; i++){
			if ((this[i][0] === arr[0]) && (this[i][1] === arr[1])){ return true;}
		}
		return false;
	}
	
})();