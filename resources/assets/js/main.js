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





//trap rain

var getMaxValue = function(arr){
	var max = 0;
	for (var i = 0; i < arr.length; i++){
		if (arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}

var countInBetween = function(arr, val){
	var startCount = false;
	var count = 0;
	var tempCount = 0;
	for (var i = 0; i < arr.length; i++){
		if (arr[i] >= val && !startCount){
			startCount = true;
			continue;
		} else if (arr[i] < val && startCount){
			tempCount += 1;
		} else if (arr[i] >= val && startCount && tempCount > 0){
			startCount = false;
			count += tempCount;
			tempCount = 0;
			continue;
		}

	}
	return count;
}

var trap = function(arr){
	var val = getMaxValue(arr);
	var count = 0;
	while (val > 0){
		count += countInBetween(arr, val);
		val -= 1;
	}
	return count;
}




//asdasdasda