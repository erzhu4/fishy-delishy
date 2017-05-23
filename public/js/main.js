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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("var hash = function(s){\n\tvar _hash = 7;\n\tvar letters = \"acdfgilmnoprstuw\";\n\tfor (i = 0; i < s.length; i++) {\n\t\t_hash = ((_hash * 23) + letters.indexOf(s[i]));\n\t\tconsole.log(_hash);\n\t}\n\treturn _hash;\n}\n\n\n\nvar isDivisible = function(num, idx){\n\tvar temp = (num - idx)/23;\n\treturn temp % 1 === 0\n\n}\n\nvar getNextHash = function(current, idx){\n\treturn (current - idx) / 23;\n}\n\nvar findLastIndex = function(hash){\n\tvar letters = \"acdfgilmnoprstuw\";\n\tfor (var i = 0; i < letters.length; i++){\n\t\tif (isDivisible(hash, i)){\n\t\t\treturn i;\n\t\t}\n\t}\n}\n\nvar doLogic = function(current, idx){\n\tvar letters = \"acdfgilmnoprstuw\";\n\tif (isDivisible(current, idx)){\n\t\treturn letters[idx];\n\t}\n\treturn '';\n}\n\nvar unHash = function(hash){\n\tvar runningNum = hash;\n\tvar letters = \"acdfgilmnoprstuw\";\n\tvar str = ''\n\tvar lastIndex = findLastIndex(hash);\n\n\twhile (runningNum > 7){\n\t\tstr = doLogic(runningNum, lastIndex) + str;\n\t\trunningNum = getNextHash(runningNum, lastIndex);\n\t\tlastIndex = findLastIndex(runningNum);\n\t}\n\n\treturn str;\n}\n\nvar x = hash(\"tortilla\");\n\nconsole.log(x);\n\n// console.log(isDivisible(x, 0));\n\nconsole.log(unHash(x));\n\n\n\n\n\n\n\n\n\n\n//asdasdasda//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL21haW4uanM/NmU0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaGFzaCA9IGZ1bmN0aW9uKHMpe1xuXHR2YXIgX2hhc2ggPSA3O1xuXHR2YXIgbGV0dGVycyA9IFwiYWNkZmdpbG1ub3Byc3R1d1wiO1xuXHRmb3IgKGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuXHRcdF9oYXNoID0gKChfaGFzaCAqIDIzKSArIGxldHRlcnMuaW5kZXhPZihzW2ldKSk7XG5cdFx0Y29uc29sZS5sb2coX2hhc2gpO1xuXHR9XG5cdHJldHVybiBfaGFzaDtcbn1cblxuXG5cbnZhciBpc0RpdmlzaWJsZSA9IGZ1bmN0aW9uKG51bSwgaWR4KXtcblx0dmFyIHRlbXAgPSAobnVtIC0gaWR4KS8yMztcblx0cmV0dXJuIHRlbXAgJSAxID09PSAwXG5cbn1cblxudmFyIGdldE5leHRIYXNoID0gZnVuY3Rpb24oY3VycmVudCwgaWR4KXtcblx0cmV0dXJuIChjdXJyZW50IC0gaWR4KSAvIDIzO1xufVxuXG52YXIgZmluZExhc3RJbmRleCA9IGZ1bmN0aW9uKGhhc2gpe1xuXHR2YXIgbGV0dGVycyA9IFwiYWNkZmdpbG1ub3Byc3R1d1wiO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxldHRlcnMubGVuZ3RoOyBpKyspe1xuXHRcdGlmIChpc0RpdmlzaWJsZShoYXNoLCBpKSl7XG5cdFx0XHRyZXR1cm4gaTtcblx0XHR9XG5cdH1cbn1cblxudmFyIGRvTG9naWMgPSBmdW5jdGlvbihjdXJyZW50LCBpZHgpe1xuXHR2YXIgbGV0dGVycyA9IFwiYWNkZmdpbG1ub3Byc3R1d1wiO1xuXHRpZiAoaXNEaXZpc2libGUoY3VycmVudCwgaWR4KSl7XG5cdFx0cmV0dXJuIGxldHRlcnNbaWR4XTtcblx0fVxuXHRyZXR1cm4gJyc7XG59XG5cbnZhciB1bkhhc2ggPSBmdW5jdGlvbihoYXNoKXtcblx0dmFyIHJ1bm5pbmdOdW0gPSBoYXNoO1xuXHR2YXIgbGV0dGVycyA9IFwiYWNkZmdpbG1ub3Byc3R1d1wiO1xuXHR2YXIgc3RyID0gJydcblx0dmFyIGxhc3RJbmRleCA9IGZpbmRMYXN0SW5kZXgoaGFzaCk7XG5cblx0d2hpbGUgKHJ1bm5pbmdOdW0gPiA3KXtcblx0XHRzdHIgPSBkb0xvZ2ljKHJ1bm5pbmdOdW0sIGxhc3RJbmRleCkgKyBzdHI7XG5cdFx0cnVubmluZ051bSA9IGdldE5leHRIYXNoKHJ1bm5pbmdOdW0sIGxhc3RJbmRleCk7XG5cdFx0bGFzdEluZGV4ID0gZmluZExhc3RJbmRleChydW5uaW5nTnVtKTtcblx0fVxuXG5cdHJldHVybiBzdHI7XG59XG5cbnZhciB4ID0gaGFzaChcInRvcnRpbGxhXCIpO1xuXG5jb25zb2xlLmxvZyh4KTtcblxuLy8gY29uc29sZS5sb2coaXNEaXZpc2libGUoeCwgMCkpO1xuXG5jb25zb2xlLmxvZyh1bkhhc2goeCkpO1xuXG5cblxuXG5cblxuXG5cblxuXG4vL2FzZGFzZGFzZGFcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9tYWluLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);