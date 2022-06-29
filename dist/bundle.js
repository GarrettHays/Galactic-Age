/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/galactic.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/galactic.js":
/*!****************************!*\
  !*** ./src/js/galactic.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GalacticAge; });\nclass GalacticAge {\r\n  constructor(age, expected) {\r\n    this.age = age;\r\n    this.days = 0;\r\n    this.expected = expected;\r\n  }\r\n\r\n  earthDays(){\r\n    let userAge = this.age;\r\n    let totalLifeDays = userAge * 365;\r\n    this.days = totalLifeDays;\r\n    return totalLifeDays;\r\n  }\r\n\r\n  convertMercury() {\r\n    let ageMercury = Math.round(this.days / 88);\r\n    return ageMercury;\r\n  }\r\n\r\n  convertVenus() {\r\n    let ageVenus = Math.round(this.days / 225);\r\n    return ageVenus;\r\n  }\r\n\r\n  convertMars() {\r\n    let ageMars = Math.round(this.days / 687);\r\n    return ageMars;\r\n  }\r\n\r\n  convertJupiter() {\r\n    let ageJupiter = Math.round(this.days / 4333);\r\n    return ageJupiter;\r\n  }\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2FsYWN0aWMuanM/NjcxNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL2pzL2dhbGFjdGljLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsYWN0aWNBZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKGFnZSwgZXhwZWN0ZWQpIHtcclxuICAgIHRoaXMuYWdlID0gYWdlO1xyXG4gICAgdGhpcy5kYXlzID0gMDtcclxuICAgIHRoaXMuZXhwZWN0ZWQgPSBleHBlY3RlZDtcclxuICB9XHJcblxyXG4gIGVhcnRoRGF5cygpe1xyXG4gICAgbGV0IHVzZXJBZ2UgPSB0aGlzLmFnZTtcclxuICAgIGxldCB0b3RhbExpZmVEYXlzID0gdXNlckFnZSAqIDM2NTtcclxuICAgIHRoaXMuZGF5cyA9IHRvdGFsTGlmZURheXM7XHJcbiAgICByZXR1cm4gdG90YWxMaWZlRGF5cztcclxuICB9XHJcblxyXG4gIGNvbnZlcnRNZXJjdXJ5KCkge1xyXG4gICAgbGV0IGFnZU1lcmN1cnkgPSBNYXRoLnJvdW5kKHRoaXMuZGF5cyAvIDg4KTtcclxuICAgIHJldHVybiBhZ2VNZXJjdXJ5O1xyXG4gIH1cclxuXHJcbiAgY29udmVydFZlbnVzKCkge1xyXG4gICAgbGV0IGFnZVZlbnVzID0gTWF0aC5yb3VuZCh0aGlzLmRheXMgLyAyMjUpO1xyXG4gICAgcmV0dXJuIGFnZVZlbnVzO1xyXG4gIH1cclxuXHJcbiAgY29udmVydE1hcnMoKSB7XHJcbiAgICBsZXQgYWdlTWFycyA9IE1hdGgucm91bmQodGhpcy5kYXlzIC8gNjg3KTtcclxuICAgIHJldHVybiBhZ2VNYXJzO1xyXG4gIH1cclxuXHJcbiAgY29udmVydEp1cGl0ZXIoKSB7XHJcbiAgICBsZXQgYWdlSnVwaXRlciA9IE1hdGgucm91bmQodGhpcy5kYXlzIC8gNDMzMyk7XHJcbiAgICByZXR1cm4gYWdlSnVwaXRlcjtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/galactic.js\n");

/***/ })

/******/ });