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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", function () {
    //start DOMContentLoaded
    console.log("NIEWIERNE PSY RULEZ!!!!");

    $(".buttonJQtoggleMain").click(function () {
        $(".buttonJQtoggleMain").toggleClass("buttonJQtoggleNext");
    });

    $("#panel, #panel2, #panel3").css("display", "none");

    $("#flip").on("click", function () {
        var text = $("#flip").text();

        if (text == "down") {
            $("#flip").text("up");
            $("#panel").slideDown("slow");
        } else {
            $("#flip").text("down");
            $("#panel").slideUp("slow");
        }
        console.log(text);
    });

    $("#flip2").on("click", function () {
        var text2 = $("#flip2").text();

        if (text2 == "down") {
            $("#flip2").text("up");
            $("#panel2").slideDown("slow");
        } else {
            $("#flip2").text("down");
            $("#panel2").slideUp("slow");
        }
        console.log(text2);
    });

    $("#flip3").on("click", function () {
        var text2 = $("#flip3").text();

        if (text2 == "down") {
            $("#flip3").text("up");
            $("#panel3").slideDown("slow");
        } else {
            $("#flip3").text("down");
            $("#panel3").slideUp("slow");
        }
        console.log(text2);
    });
}); //end DOMContentLoaded

/***/ })
/******/ ]);