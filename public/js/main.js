/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, exports) {

var hash = function hash(s) {
	var _hash = 7;
	var letters = "acdfgilmnoprstuw";
	for (i = 0; i < s.length; i++) {
		_hash = _hash * 23 + letters.indexOf(s[i]);
		console.log(_hash);
	}
	return _hash;
};

var isDivisible = function isDivisible(num, idx) {
	var temp = (num - idx) / 23;
	return temp % 1 === 0;
};

var getNextHash = function getNextHash(current, idx) {
	return (current - idx) / 23;
};

var findLastIndex = function findLastIndex(hash) {
	var letters = "acdfgilmnoprstuw";
	for (var i = 0; i < letters.length; i++) {
		if (isDivisible(hash, i)) {
			return i;
		}
	}
};

var doLogic = function doLogic(current, idx) {
	var letters = "acdfgilmnoprstuw";
	if (isDivisible(current, idx)) {
		return letters[idx];
	}
	return '';
};

var unHash = function unHash(hash) {
	var runningNum = hash;
	var letters = "acdfgilmnoprstuw";
	var str = '';
	var lastIndex = findLastIndex(hash);

	while (runningNum > 7) {
		str = doLogic(runningNum, lastIndex) + str;
		runningNum = getNextHash(runningNum, lastIndex);
		lastIndex = findLastIndex(runningNum);
	}

	return str;
};

var x = hash("tortilla");

console.log(x);

// console.log(isDivisible(x, 0));

console.log(unHash(x));

//asdasdasda

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ })

/******/ });