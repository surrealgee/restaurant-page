/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about_page.js":
/*!***************************!*\
  !*** ./src/about_page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAboutPage: () => (/* binding */ renderAboutPage)\n/* harmony export */ });\nconst elements = [\n    {\n        title: \"About Sakura Savor\",\n        body: \"Welcome to Sakura Savor, where we invite you on a culinary journey to Japan, where every dish tells a story and every bite is an adventure. Step into our serene haven, adorned with cherry blossoms and traditional decor, and embark on a gastronomic experience unlike any other.\"\n    },\n    {\n        title: \"Our Culinary Philosophy\",\n        body: \"At Sakura Savor, we believe that food is more than just sustenance – it's a celebration of culture, tradition, and craftsmanship. Our menu is a tribute to the artistry and heritage of Japanese cuisine, showcasing a harmonious blend of flavors, textures, and culinary techniques.\"\n    },\n    {\n        title: \"The Essence of Japanese Cuisine\",\n        body: \"From delicate sushi rolls crafted with the freshest ingredients to savory ramen bowls simmering with rich flavors, our menu celebrates the diversity and complexity of Japanese culinary tradition. Whether you're craving the elegance of a kaiseki meal or the warmth of a comforting bowl of udon, our skilled chefs are dedicated to delivering an unforgettable dining experience.\"\n    },\n    {\n        title: \"Indulge in Authenticity\",\n        body: \"Join us at Sakura Savor and indulge in the essence of Japan, right here in [Location]. Immerse yourself in the sights, sounds, and flavors of Japanese culture as you savor each dish, crafted with precision and passion. Whether you're a seasoned food enthusiast or a curious newcomer, we invite you to experience the beauty and authenticity of Japanese cuisine at Sakura Savor.\"\n    },\n    {\n        title: \"Location Details\",\n        body: \"Find us at [Address], where our doors are always open to welcome you into our culinary haven. Whether you're seeking a quiet dinner for two or a memorable gathering with friends and family, Sakura Savor offers an unforgettable dining experience that will transport you to the heart of Japan.\"\n    },\n    {\n        title: \"Come, Taste the Difference\",\n        body: \"At Sakura Savor, we invite you to taste the difference and discover the true essence of Japanese cuisine. Join us for an unforgettable culinary adventure and let your senses be captivated by the flavors, aromas, and traditions of Japan. We look forward to serving you soon!\"\n    },\n]\n\nfunction renderAboutPage() {\n    const contentEl = document.querySelector('#content');\n    contentEl.innerHTML = \"\";\n\n    elements.forEach(element => {\n        const title = document.createElement('h3');\n        title.textContent = element.title;\n\n        const body = document.createElement('p');\n        body.textContent = element.body;\n\n        contentEl.appendChild(title);\n        contentEl.appendChild(body);\n    })\n\n\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/about_page.js?");

/***/ }),

/***/ "./src/home_page.js":
/*!**************************!*\
  !*** ./src/home_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHomePage: () => (/* binding */ renderHomePage)\n/* harmony export */ });\n/* harmony import */ var _assets_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/restaurant.jpg */ \"./src/assets/restaurant.jpg\");\n\n\nfunction renderHomePage() {\n    const contentEl = document.querySelector('#content');\n\n    contentEl.innerHTML = \"\";\n\n    const image = new Image();\n    image.src = _assets_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n    const headline = document.createElement('h2');\n    headline.textContent = 'Immerse Yourself in Authentic Japanese Cuisine and Culture'\n\n    const description = document.createElement('p');\n    description.textContent = `At Sakura Savor, we invite you on a culinary journey to Japan, where every dish tells a story and every bite is an adventure. Step into our serene haven, adorned with cherry blossoms and traditional decor, and embark on a gastronomic experience unlike any other. From delicate sushi rolls crafted with the freshest ingredients to savory ramen bowls simmering with rich flavors, our menu celebrates the artistry and tradition of Japanese cuisine. Whether you're craving the elegance of a kaiseki meal or the warmth of a comforting bowl of udon, our skilled chefs are dedicated to delivering an unforgettable dining experience.Join us at Sakura Savor and indulge in the essence of Japan, right here in [Location].`;\n\n    contentEl.appendChild(headline);\n    contentEl.appendChild(image);    \n    contentEl.appendChild(description);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home_page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home_page */ \"./src/home_page.js\");\n/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu_page */ \"./src/menu_page.js\");\n/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about_page */ \"./src/about_page.js\");\n\n\n\n\nwindow.onload = () => {\n    (0,_home_page__WEBPACK_IMPORTED_MODULE_0__.renderHomePage)();\n};\n\nconst homeBtn = document.querySelector('#home');\nconst menuBtn = document.querySelector('#menu');\nconst aboutBtn = document.querySelector('#about');\n\nhomeBtn.addEventListener('click', _home_page__WEBPACK_IMPORTED_MODULE_0__.renderHomePage);\nmenuBtn.addEventListener('click', _menu_page__WEBPACK_IMPORTED_MODULE_1__.renderMenuPage);\naboutBtn.addEventListener('click', _about_page__WEBPACK_IMPORTED_MODULE_2__.renderAboutPage);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu_page.js":
/*!**************************!*\
  !*** ./src/menu_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMenuPage: () => (/* binding */ renderMenuPage)\n/* harmony export */ });\n/* harmony import */ var _assets_sushi_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/sushi.jpg */ \"./src/assets/sushi.jpg\");\n/* harmony import */ var _assets_tempura_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/tempura.jpg */ \"./src/assets/tempura.jpg\");\n/* harmony import */ var _assets_ramen_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/ramen.jpg */ \"./src/assets/ramen.jpg\");\n\n\n\n\nconst dishes = [\n    {\n        name: \"Sushi\",\n        image: _assets_sushi_jpg__WEBPACK_IMPORTED_MODULE_0__,\n        description: 'Dive into a world of exquisite flavors and delicate craftsmanship with sushi, the iconic Japanese dish that has captured the hearts and palates of food enthusiasts worldwide. Experience the perfect harmony of seasoned rice, premium seafood, and fresh vegetables expertly crafted into bite-sized masterpieces. From the buttery richness of salmon nigiri to the vibrant hues of tuna sashimi, each piece of sushi is a work of art that tantalizes the senses and leaves a lasting impression.'\n    },\n    {\n        name: \"Tempura\",\n        image: _assets_tempura_jpg__WEBPACK_IMPORTED_MODULE_1__,\n        description: 'Crispy, golden perfection awaits with tempura, a culinary delight that showcases the artistry of Japanese frying techniques. Delicate morsels of seafood, vegetables, and mushrooms are encased in a light, airy batter and gently fried to crispy perfection. Experience the symphony of textures as you bite into a tender shrimp or a crisp slice of sweet potato, enveloped in the subtle flavors of the sea and earth. With its irresistible crunch and delicate balance of flavors, tempura is a true indulgence for the senses.'\n    },\n    {\n        name: \"Ramen\",\n        image: _assets_ramen_jpg__WEBPACK_IMPORTED_MODULE_2__,\n        description: `Embark on a culinary journey through the bustling streets of Japan with a steaming bowl of ramen, the ultimate comfort food that warms the soul and delights the palate. Immerse yourself in the rich, complex flavors of savory broth infused with umami goodness, paired with springy noodles that slurp up every drop of flavor. Whether you prefer the hearty richness of tonkotsu, the comforting warmth of miso, or the clean simplicity of shoyu, there's a bowl of ramen to satisfy every craving. Topped with succulent slices of chashu pork, tender bamboo shoots, and a perfectly seasoned egg, each bowl of ramen is a symphony of flavors that transports you to the vibrant streets of Japan.`,\n    },\n];\n\n\nfunction renderMenuPage() {\n    const contentEl = document.querySelector('#content');\n\n    contentEl.innerHTML = \"\";\n\n    dishes.forEach(dish => {\n        const name = document.createElement('h3');\n        name.textContent = dish.name;\n\n        const image = new Image();\n        image.src = dish.image;\n\n        const description = document.createElement('p');\n        description.textContent = dish.description;\n\n        contentEl.appendChild(image);\n        contentEl.appendChild(name);\n        contentEl.appendChild(description);\n    })\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu_page.js?");

/***/ }),

/***/ "./src/assets/ramen.jpg":
/*!******************************!*\
  !*** ./src/assets/ramen.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"608b33540496454291a8.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/ramen.jpg?");

/***/ }),

/***/ "./src/assets/restaurant.jpg":
/*!***********************************!*\
  !*** ./src/assets/restaurant.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ebf47b00e686cecca9bf.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/restaurant.jpg?");

/***/ }),

/***/ "./src/assets/sushi.jpg":
/*!******************************!*\
  !*** ./src/assets/sushi.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"898585943cb34026c855.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/sushi.jpg?");

/***/ }),

/***/ "./src/assets/tempura.jpg":
/*!********************************!*\
  !*** ./src/assets/tempura.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4702ff4b8b54d0991936.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/tempura.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;