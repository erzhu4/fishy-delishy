var hash = function(s){
	var _hash = 7;
	var letters = "acdfgilmnoprstuw";
	for (i = 0; i < s.length; i++) {
		_hash = ((_hash * 23) + letters.indexOf(s[i]));
		console.log(_hash);
	}
	return _hash;
}



var isDivisible = function(num, idx){
	var temp = (num - idx)/23;
	return temp % 1 === 0

}

var getNextHash = function(current, idx){
	return (current - idx) / 23;
}

var findLastIndex = function(hash){
	var letters = "acdfgilmnoprstuw";
	for (var i = 0; i < letters.length; i++){
		if (isDivisible(hash, i)){
			return i;
		}
	}
}

var doLogic = function(current, idx){
	var letters = "acdfgilmnoprstuw";
	if (isDivisible(current, idx)){
		return letters[idx];
	}
	return '';
}

var unHash = function(hash){
	var runningNum = hash;
	var letters = "acdfgilmnoprstuw";
	var str = ''
	var lastIndex = findLastIndex(hash);

	while (runningNum > 7){
		str = doLogic(runningNum, lastIndex) + str;
		runningNum = getNextHash(runningNum, lastIndex);
		lastIndex = findLastIndex(runningNum);
	}

	return str;
}

var x = hash("tortilla");

console.log(x);

// console.log(isDivisible(x, 0));

console.log(unHash(x));










//asdasdasda