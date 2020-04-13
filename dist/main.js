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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/utils */ \"./src/js/utils.js\");\n/* harmony import */ var _js_dataList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/dataList */ \"./src/js/dataList.js\");\n/* harmony import */ var _js_CardsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/CardsList */ \"./src/js/CardsList.js\");\n\n\n\n\nwindow.onload = () => {\n  if (_js_dataList__WEBPACK_IMPORTED_MODULE_1__[\"data\"]) {\n    let cardList = new _js_CardsList__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_js_dataList__WEBPACK_IMPORTED_MODULE_1__[\"data\"]);\n    cardList.init();\n  }\n};\n\ndocument.querySelector(\"div.icon__menu_toggle\").addEventListener(\"click\", _js_utils__WEBPACK_IMPORTED_MODULE_0__[\"toggleMenu\"]);\ndocument.querySelector(\"#checkbox_switcher\").addEventListener(\"change\", _js_utils__WEBPACK_IMPORTED_MODULE_0__[\"chackboxChanger\"]);\ndocument.querySelector(\"ul.header_menu_list\").addEventListener(\"click\", _js_utils__WEBPACK_IMPORTED_MODULE_0__[\"handleMenuClick\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/Card.js":
/*!************************!*\
  !*** ./src/js/Card.js ***!
  \************************/
/*! exports provided: default, CategoryItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CategoryItem\", function() { return CategoryItem; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\n\nclass Card {\n  constructor(cardItem) {\n    this.id = cardItem.id;\n    this.img = cardItem.img;\n    this.name = cardItem.name;\n    this.nameRu = cardItem.nameRu;\n    this.cardImg = document.createElement('img');\n    this.card = document.createElement('div');\n  }\n\n  getCardTemplate() {\n    let cardTemplate = this.card;\n    let itemId = this.id;\n    cardTemplate.classList.add('card', 'card_item');\n    cardTemplate.setAttribute('data-id', itemId);\n    cardTemplate.append(this.getCardImgTemplate());\n    cardTemplate.append(this.getCardNameTemplate());\n    return cardTemplate;\n  } // eventListner() {     \n  //     this.card.addEventListener(\"click\", handleCardClick);\n  // }\n\n\n  getImageSource() {\n    return `./src/assets/img/category/${this.img}`;\n  }\n\n  getCardImgTemplate() {\n    let cardImg = this.cardImg;\n    cardImg.setAttribute('src', this.getImageSource());\n    cardImg.setAttribute('alt', `./src/assets/img/category/${this.name}`);\n    return cardImg;\n  }\n\n  getCardNameTemplate() {\n    let cardName = document.createElement('h2');\n    cardName.innerText = this.name;\n    cardName.classList.add('cart_title');\n    return cardName;\n  }\n\n  getCardNameRuTemplate() {\n    let cardName = document.createElement('h2');\n    cardName.innerText = this.nameRu;\n    cardName.classList.add('cart_title');\n    return cardName;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nclass CategoryItem extends Card {\n  constructor(cardItem) {\n    super(cardItem);\n    this.front = document.createElement('div');\n    this.back = document.createElement('div');\n  }\n\n  getCardTemplate() {\n    let cardTemplate = this.card;\n    let itemId = this.id;\n    cardTemplate.classList.add('card', 'card_item');\n    cardTemplate.setAttribute('data-id', itemId);\n    cardTemplate.append(this.getFrontCard());\n    cardTemplate.append(this.getBackCard());\n    return cardTemplate;\n  }\n\n  getFrontCard() {\n    let front = this.front;\n    let name = this.getCardNameTemplate();\n    let reload = this.getButtonReload();\n    front.classList.add('front');\n    front.setAttribute('style', `background-image: url(${this.getImageSource()})`); //front.append(this.getCardImgTemplate());\n\n    front.append(name);\n    front.appendChild(reload);\n    return front;\n  }\n\n  getButtonReload() {\n    let reload = document.createElement('div');\n    reload.classList.add('reload');\n    return reload;\n  }\n\n  getBackCard() {\n    let back = this.back;\n    let name = this.getCardNameRuTemplate();\n    back.classList.add('back');\n    back.setAttribute('style', `background-image: url(${this.getImageSource()})`);\n    back.append(name);\n    return back;\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/Card.js?");

/***/ }),

/***/ "./src/js/CardsList.js":
/*!*****************************!*\
  !*** ./src/js/CardsList.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ \"./src/js/Card.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\n //import { data } from './dataList';\n\nlet cardsFromDataList = [];\n\nclass CardsList {\n  constructor(data) {\n    this.data = data;\n    this.cardListContainer = document.querySelector(\"div.cards__list\");\n    this.mode = 'categores'; //this.getWorkMode = this.getWorkMode.bind(this);\n  }\n\n  init() {\n    this.renderCardsToDom();\n    this.eventListner();\n  }\n\n  eventListner() {\n    this.cardListContainer.addEventListener(\"click\", _utils__WEBPACK_IMPORTED_MODULE_1__[\"handleMouseEvent\"]); //this.cardListContainer.addEventListener(\"mousemove\", handleMouseOutEvent);\n  }\n\n  renderCardsToDom() {\n    let cardListContainer = this.getCardsListWrapper();\n    cardsFromDataList = this.getCardsFromData();\n    cardsFromDataList.map(element => {\n      cardListContainer.appendChild(element.getCardTemplate());\n    });\n    return cardsFromDataList;\n  }\n\n  renderCard(item) {\n    let card = null; //let mode = \n    //console.log(this.mode)\n\n    switch (this.mode) {\n      case 'categores':\n        card = new _Card__WEBPACK_IMPORTED_MODULE_0__[\"default\"](item);\n        break;\n\n      case 'category':\n        card = new _Card__WEBPACK_IMPORTED_MODULE_0__[\"CategoryItem\"](item);\n        break;\n\n      default:\n        //card = new Card(item);\n        break;\n    }\n\n    return card;\n  }\n\n  getCardsFromData() {\n    let cardsArr = [];\n    this.data.forEach(item => {\n      let cardItem = this.renderCard(item);\n      cardsArr.push(cardItem);\n    });\n    return cardsArr;\n  }\n\n  getCardsListWrapper() {\n    let cardListContainer = this.cardListContainer;\n    cardListContainer.innerHTML = '';\n    cardListContainer.classList = [];\n    cardListContainer.classList.add('cards__list', 'green', this.mode); //cardListContainer.classList.add(this.mode);\n\n    return cardListContainer;\n  }\n\n  setWorkMode(mode) {\n    this.mode = mode;\n  }\n\n  getWorkMode() {\n    return this.mode;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardsList); //export { getWorkMode };\n\n//# sourceURL=webpack:///./src/js/CardsList.js?");

/***/ }),

/***/ "./src/js/dataList.js":
/*!****************************!*\
  !*** ./src/js/dataList.js ***!
  \****************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data\", function() { return data; });\nconst data = [{\n  id: 1,\n  img: \"dance.jpg\",\n  name: \"Action A\",\n  chld: [{\n    id: 101,\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    id: 102,\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    id: 103,\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    id: 104,\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    id: 105,\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    id: 106,\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    id: 107,\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    id: 108,\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }]\n}, {\n  id: 2,\n  img: \"swim.jpg\",\n  name: \"Action B\",\n  chld: [{\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }]\n}, {\n  id: 3,\n  img: \"drop.jpg\",\n  name: \"Action C\",\n  chld: [{\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }]\n}, {\n  id: 4,\n  img: \"friendly.jpg\",\n  name: \"Adjective\",\n  chld: [{\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }]\n}, {\n  id: 5,\n  img: \"cat.jpg\",\n  name: \"Animal A\",\n  chld: [{\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }]\n}, {\n  id: 6,\n  img: \"bird.jpg\",\n  name: \"Animal B\",\n  chld: [{\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }]\n}, {\n  id: 7,\n  img: \"blouse.jpg\",\n  name: \"Clothes\",\n  chld: [{\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }]\n}, {\n  id: 8,\n  img: \"smile.jpg\",\n  name: \"Emotion\",\n  chld: [{\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }, {\n    img: \"dance.jpg\",\n    name: \"Dance\",\n    nameRu: \"Танец\",\n    audio: ''\n  }]\n}];\n\n//# sourceURL=webpack:///./src/js/dataList.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: toggleMenu, chackboxChanger, handleCardClick, handleMouseOutEvent, handleMouseEvent, handleMenuClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleMenu\", function() { return toggleMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chackboxChanger\", function() { return chackboxChanger; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleCardClick\", function() { return handleCardClick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleMouseOutEvent\", function() { return handleMouseOutEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleMouseEvent\", function() { return handleMouseEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleMenuClick\", function() { return handleMenuClick; });\n/* harmony import */ var _dataList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataList */ \"./src/js/dataList.js\");\n/* harmony import */ var _CardsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardsList */ \"./src/js/CardsList.js\");\n //import { renderCardsToDom }  from '../index';\n\n //let cardMode = 'categores';\n\nconst toggleMenu = () => {\n  document.querySelector(\"div.icon__menu_toggle\").classList.toggle(\"active\");\n  document.querySelector(\"nav.header_menu\").classList.toggle(\"active\");\n};\nconst chackboxChanger = event => {\n  const {\n    target: {\n      checked\n    }\n  } = event;\n  console.log(event);\n\n  if (checked) {\n    changeColorScheme(\"orange\");\n  } else {\n    changeColorScheme(\"green\");\n  }\n};\n\nconst changeColorScheme = scheme => {\n  let colorElements = [document.querySelector(\"nav.header_menu\"), document.querySelector(\"div.cards__list\")];\n\n  switch (scheme) {\n    case \"orange\":\n      colorElements.forEach(element => {\n        element.classList.remove(\"green\");\n        element.classList.add(scheme);\n      });\n      break;\n\n    case \"green\":\n      colorElements.forEach(element => {\n        element.classList.remove(\"orange\");\n        element.classList.add(scheme);\n      });\n      break;\n\n    default:\n      break;\n  }\n};\n\nconst handleCardClick = event => {\n  event.preventDefault();\n  const {\n    target: {\n      attributes,\n      parentNode,\n      classList\n    },\n    currentTarget\n  } = event;\n\n  if (classList.contains('reload')) {\n    currentTarget.classList.add('reloaded');\n  }\n}; // export const getWorkMode = () => {\n//     //let mode = \n//     return mode;\n// }\n// export const setWorkMode = (mode) => {\n//     cardMode = mode;\n// }\n\nconst handleMouseOutEvent = event => {\n  const {\n    target: {\n      parentNode\n    },\n    toElement\n  } = event;\n\n  if (toElement.classList.contains('cards__list')) {\n    parentNode.classList.remove('reloaded');\n  }\n};\nconst handleMouseEvent = event => {\n  event.preventDefault();\n  const {\n    target: {\n      attributes,\n      parentNode\n    },\n    currentTarget\n  } = event;\n  let clickedElementId = attributes['data-id'] ? attributes['data-id'].nodeValue : parentNode.attributes['data-id'] ? parentNode.attributes['data-id'].nodeValue : null;\n  setMenuActive(clickedElementId);\n\n  if (currentTarget.classList.contains('categores')) {\n    let chldDataFromData = getDataChldById(clickedElementId);\n    renderCardsToDom(chldDataFromData, 'categores');\n    currentTarget.classList.remove('categores');\n    currentTarget.classList.add('category');\n  }\n\n  if (event.target.classList.contains('reload')) {\n    parentNode.parentNode.classList.add('reloaded');\n    document.querySelector('.reloaded').addEventListener(\"mouseout\", handleMouseOutEvent);\n  }\n};\n\nconst renderCardsToDom = (dataChild, mode) => {\n  //console.log(dataChild)\n  let cardList = new _CardsList__WEBPACK_IMPORTED_MODULE_1__[\"default\"](dataChild);\n\n  if (mode === 'categores') {\n    cardList.setWorkMode('category');\n  } else if (mode === 'category') {\n    cardList.setWorkMode('categores');\n  }\n\n  cardList.init();\n};\n\nconst getDataChldById = id => {\n  const elementById = _dataList__WEBPACK_IMPORTED_MODULE_0__[\"data\"].find(it => it['id'] === Number(id));\n  const chldData = elementById ? elementById['chld'] : null;\n  return chldData;\n};\n\nconst handleMenuClick = event => {\n  event.preventDefault();\n  const {\n    target: {\n      attributes,\n      parentNode\n    },\n    currentTarget\n  } = event;\n  let clickedElementId = parentNode.attributes[\"data-id\"] ? Number(parentNode.attributes[\"data-id\"].nodeValue) : null;\n  let chldDataFromData = getDataChldById(clickedElementId);\n  setMenuActive(clickedElementId);\n  toggleMenu();\n  clickedElementId && chldDataFromData ? renderCardsToDom(chldDataFromData, 'categores') : renderCardsToDom(_dataList__WEBPACK_IMPORTED_MODULE_0__[\"data\"], 'category');\n  console.log(currentTarget.parentNode);\n};\n\nconst setMenuActive = elementId => {\n  let menuList = document.querySelector('ul.header_menu_list').children;\n  Array.from(menuList).forEach(it => {\n    if (it.classList.contains('active')) {\n      it.classList.remove('active');\n    }\n\n    let activeMenuItem = Number(it.dataset[\"id\"]) === Number(elementId) ? it : null;\n\n    if (activeMenuItem === it) {\n      it.classList.add('active');\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ })

/******/ });