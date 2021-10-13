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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.querySelector('.navbar-toggler').addEventListener('click', e => {\r\n    e.preventDefault()\r\n    document.querySelector('#navbarSupportedContent').classList.toggle('show')\r\n})\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/events.js":
/*!*********************************!*\
  !*** ./src/assets/js/events.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const nextEvent = document.querySelector('.events__main')\n\nconst gameTypes = document.querySelectorAll('.event__type').forEach((gameType) => {\n    gameType.addEventListener('click', e => {\n        e.preventDefault()\n        if (gameType.innerText === 'Basketball') {\n            nextEvent.innerHTML = ''\n            nextEvent.innerHTML += `\n                <div class=\"card mb-3\">\n                    <div class=\"row g-0\">\n                        <div class=\"col-md-4\">\n                            <img src=\"./assets/images/basketball.png\" class=\"img-fluid rounded-start\" alt=\"Next Event\">\n                        </div>\n                    <div class=\"col-md-8 card__main\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title card__name\">Basketball</h5>\n                            <h5 class=\"card-title card__loc\">Riga, Latvia (18:00) | 10 EUR</h5>\n                            <p class=\"card-text card__desc\">Description description... dolor sit amet consectetur adipisicing elit. Blanditiis, nulla? Repellat fugit corporis!</p>\n                            <p class=\"card-text card__subt\"><small class=\"text-muted\">Number of Participants: 55 out of 100</small></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            `\n        } else if (gameType.innerHTML === 'Football') {\n            nextEvent.innerHTML = ''\n            nextEvent.innerHTML += `\n                <div class=\"card mb-3\">\n                    <div class=\"row g-0\">\n                        <div class=\"col-md-4\">\n                            <img src=\"./assets/images/football.png\" class=\"img-fluid rounded-start\" alt=\"Next Event\">\n                        </div>\n                    <div class=\"col-md-8 card__main\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title card__name\">Football</h5>\n                            <h5 class=\"card-title card__loc\">Riga, Latvia (20:00) | 5 EUR</h5>\n                            <p class=\"card-text card__desc\">Description description... dolor sit amet consectetur adipisicing elit. Blanditiis, nulla? Repellat fugit corporis!</p>\n                            <p class=\"card-text card__subt\"><small class=\"text-muted\">Number of Participants: 70 out of 100</small></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            `\n        } else if (gameType.innerHTML === 'Table Tennis') {\n            nextEvent.innerHTML = ''\n            nextEvent.innerHTML += `\n                <div class=\"card mb-3\">\n                    <div class=\"row g-0\">\n                        <div class=\"col-md-4\">\n                            <img src=\"./assets/images/tabletennis.png\" class=\"img-fluid rounded-start\" alt=\"Next Event\">\n                        </div>\n                    <div class=\"col-md-8 card__main\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title card__name\">Table Tennis</h5>\n                            <h5 class=\"card-title card__loc\">Riga, Latvia (20:00) | FREE </h5>\n                            <p class=\"card-text card__desc\">Description description... dolor sit amet consectetur adipisicing elit. Blanditiis, nulla? Repellat fugit corporis!</p>\n                            <p class=\"card-text card__subt\"><small class=\"text-muted\">Number of Participants: 70 out of 100</small></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            `\n        } else if (gameType.innerHTML === 'Snooker') {\n            nextEvent.innerHTML = ''\n            nextEvent.innerHTML += `\n                <div class=\"card mb-3\">\n                    <div class=\"row g-0\">\n                        <div class=\"col-md-4\">\n                            <img src=\"./assets/images/snooker.png\" class=\"img-fluid rounded-start\" alt=\"Next Event\">\n                        </div>\n                    <div class=\"col-md-8 card__main\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title card__name\">Snooker</h5>\n                            <h5 class=\"card-title card__loc\">Riga, Latvia (18:00) | 500 EUR</h5>\n                            <p class=\"card-text card__desc\">Description description... dolor sit amet consectetur adipisicing elit. Blanditiis, nulla? Repellat fugit corporis!</p>\n                            <p class=\"card-text card__subt\"><small class=\"text-muted\">Number of Participants: 70 out of 100</small></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            `\n        }\n     })\n})\n\n//# sourceURL=webpack:///./src/assets/js/events.js?");

/***/ }),

/***/ "./src/assets/js/login.js":
/*!********************************!*\
  !*** ./src/assets/js/login.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const loginForm = document.getElementById('formLogin'),\r\n    usernameLogin = document.getElementById('usernameLogin'),\r\n    passLogin = document.getElementById('passwordLogin')\r\n\r\nif (loginForm) {\r\n    loginForm.addEventListener('submit', e => {\r\n        e.preventDefault()\r\n\r\n        checkInputsLogin()\r\n    })\r\n}\r\n\r\nfunction checkInputsLogin() {\r\n    const usernameValue = usernameLogin.value.trim();\r\n    const passwordValue = passLogin.value.trim();\r\n\r\n    if (usernameValue === '') {\r\n        setErrorFor(usernameLogin, 'Username cannot be blank!');\r\n    } else {\r\n        setSuccessFor(usernameLogin);\r\n    }\r\n\r\n    if (passwordValue === '') {\r\n        setErrorFor(passLogin, 'Password cannot be blank!');\r\n    } else {\r\n        setSuccessFor(passLogin);\r\n    }\r\n}\r\n\r\nfunction setErrorFor(input, message) {\r\n    const formControl = input.parentElement;\r\n    const small = formControl.querySelector('small');\r\n    formControl.className = 'login__form-control error';\r\n    small.innerText = message;\r\n}\r\n\r\nfunction setSuccessFor(input) {\r\n    const formControl = input.parentElement;\r\n    formControl.className = 'login__form-control success';\r\n}\r\n\r\nfunction isEmail(email) {\r\n    return /^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/.test(email);\r\n}\r\n\r\n// Login Button\r\nconst loginBtn = document.querySelector('#loginBtn')\r\nif (loginBtn) {\r\n    loginBtn.addEventListener('click', e => {\r\n        e.preventDefault()\r\n        document.querySelector('.login__form').classList.toggle('visible')\r\n    })\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/login.js?");

/***/ }),

/***/ 0:
/*!***************************************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/events.js ./src/assets/js/login.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/AK/A_K/3_Projects/Web/_Deploy/Siamo/siamoAppV2/src/assets/js/app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! /Users/AK/A_K/3_Projects/Web/_Deploy/Siamo/siamoAppV2/src/assets/js/events.js */\"./src/assets/js/events.js\");\nmodule.exports = __webpack_require__(/*! /Users/AK/A_K/3_Projects/Web/_Deploy/Siamo/siamoAppV2/src/assets/js/login.js */\"./src/assets/js/login.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/events.js_./src/assets/js/login.js?");

/***/ })

/******/ });