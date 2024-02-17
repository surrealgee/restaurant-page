/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about_page.js":
/*!***************************!*\
  !*** ./src/about_page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderAboutPage: () => (/* binding */ renderAboutPage)
/* harmony export */ });
const elements = [
    {
        title: "About Sakura Savor",
        body: "Welcome to Sakura Savor, where we invite you on a culinary journey to Japan, where every dish tells a story and every bite is an adventure. Step into our serene haven, adorned with cherry blossoms and traditional decor, and embark on a gastronomic experience unlike any other."
    },
    {
        title: "Our Culinary Philosophy",
        body: "At Sakura Savor, we believe that food is more than just sustenance – it's a celebration of culture, tradition, and craftsmanship. Our menu is a tribute to the artistry and heritage of Japanese cuisine, showcasing a harmonious blend of flavors, textures, and culinary techniques."
    },
    {
        title: "The Essence of Japanese Cuisine",
        body: "From delicate sushi rolls crafted with the freshest ingredients to savory ramen bowls simmering with rich flavors, our menu celebrates the diversity and complexity of Japanese culinary tradition. Whether you're craving the elegance of a kaiseki meal or the warmth of a comforting bowl of udon, our skilled chefs are dedicated to delivering an unforgettable dining experience."
    },
    {
        title: "Indulge in Authenticity",
        body: "Join us at Sakura Savor and indulge in the essence of Japan, right here in [Location]. Immerse yourself in the sights, sounds, and flavors of Japanese culture as you savor each dish, crafted with precision and passion. Whether you're a seasoned food enthusiast or a curious newcomer, we invite you to experience the beauty and authenticity of Japanese cuisine at Sakura Savor."
    },
    {
        title: "Location Details",
        body: "Find us at [Address], where our doors are always open to welcome you into our culinary haven. Whether you're seeking a quiet dinner for two or a memorable gathering with friends and family, Sakura Savor offers an unforgettable dining experience that will transport you to the heart of Japan."
    },
    {
        title: "Come, Taste the Difference",
        body: "At Sakura Savor, we invite you to taste the difference and discover the true essence of Japanese cuisine. Join us for an unforgettable culinary adventure and let your senses be captivated by the flavors, aromas, and traditions of Japan. We look forward to serving you soon!"
    },
]

function renderAboutPage() {
    const contentEl = document.querySelector('#content');
    contentEl.innerHTML = "";

    elements.forEach(element => {
        const title = document.createElement('h3');
        title.textContent = element.title;

        const body = document.createElement('p');
        body.textContent = element.body;

        contentEl.appendChild(title);
        contentEl.appendChild(body);
    })


}



/***/ }),

/***/ "./src/home_page.js":
/*!**************************!*\
  !*** ./src/home_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHomePage: () => (/* binding */ renderHomePage)
/* harmony export */ });
/* harmony import */ var _assets_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/restaurant.jpg */ "./src/assets/restaurant.jpg");


function renderHomePage() {
    const contentEl = document.querySelector('#content');

    contentEl.innerHTML = "";

    const image = new Image();
    image.src = _assets_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;

    const headline = document.createElement('h2');
    headline.textContent = 'Immerse Yourself in Authentic Japanese Cuisine and Culture'

    const description = document.createElement('p');
    description.textContent = `At Sakura Savor, we invite you on a culinary journey to Japan, where every dish tells a story and every bite is an adventure. Step into our serene haven, adorned with cherry blossoms and traditional decor, and embark on a gastronomic experience unlike any other. From delicate sushi rolls crafted with the freshest ingredients to savory ramen bowls simmering with rich flavors, our menu celebrates the artistry and tradition of Japanese cuisine. Whether you're craving the elegance of a kaiseki meal or the warmth of a comforting bowl of udon, our skilled chefs are dedicated to delivering an unforgettable dining experience.Join us at Sakura Savor and indulge in the essence of Japan, right here in [Location].`;

    contentEl.appendChild(headline);
    contentEl.appendChild(image);    
    contentEl.appendChild(description);
}



/***/ }),

/***/ "./src/menu_page.js":
/*!**************************!*\
  !*** ./src/menu_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMenuPage: () => (/* binding */ renderMenuPage)
/* harmony export */ });
/* harmony import */ var _assets_sushi_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/sushi.jpg */ "./src/assets/sushi.jpg");
/* harmony import */ var _assets_tempura_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/tempura.jpg */ "./src/assets/tempura.jpg");
/* harmony import */ var _assets_ramen_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/ramen.jpg */ "./src/assets/ramen.jpg");




const dishes = [
    {
        name: "Sushi",
        image: _assets_sushi_jpg__WEBPACK_IMPORTED_MODULE_0__,
        description: 'Dive into a world of exquisite flavors and delicate craftsmanship with sushi, the iconic Japanese dish that has captured the hearts and palates of food enthusiasts worldwide. Experience the perfect harmony of seasoned rice, premium seafood, and fresh vegetables expertly crafted into bite-sized masterpieces. From the buttery richness of salmon nigiri to the vibrant hues of tuna sashimi, each piece of sushi is a work of art that tantalizes the senses and leaves a lasting impression.'
    },
    {
        name: "Tempura",
        image: _assets_tempura_jpg__WEBPACK_IMPORTED_MODULE_1__,
        description: 'Crispy, golden perfection awaits with tempura, a culinary delight that showcases the artistry of Japanese frying techniques. Delicate morsels of seafood, vegetables, and mushrooms are encased in a light, airy batter and gently fried to crispy perfection. Experience the symphony of textures as you bite into a tender shrimp or a crisp slice of sweet potato, enveloped in the subtle flavors of the sea and earth. With its irresistible crunch and delicate balance of flavors, tempura is a true indulgence for the senses.'
    },
    {
        name: "Ramen",
        image: _assets_ramen_jpg__WEBPACK_IMPORTED_MODULE_2__,
        description: `Embark on a culinary journey through the bustling streets of Japan with a steaming bowl of ramen, the ultimate comfort food that warms the soul and delights the palate. Immerse yourself in the rich, complex flavors of savory broth infused with umami goodness, paired with springy noodles that slurp up every drop of flavor. Whether you prefer the hearty richness of tonkotsu, the comforting warmth of miso, or the clean simplicity of shoyu, there's a bowl of ramen to satisfy every craving. Topped with succulent slices of chashu pork, tender bamboo shoots, and a perfectly seasoned egg, each bowl of ramen is a symphony of flavors that transports you to the vibrant streets of Japan.`,
    },
];


function renderMenuPage() {
    const contentEl = document.querySelector('#content');

    contentEl.innerHTML = "";

    dishes.forEach(dish => {
        const name = document.createElement('h3');
        name.textContent = dish.name;

        const image = new Image();
        image.src = dish.image;

        const description = document.createElement('p');
        description.textContent = dish.description;

        contentEl.appendChild(image);
        contentEl.appendChild(name);
        contentEl.appendChild(description);
    })
}



/***/ }),

/***/ "./src/assets/ramen.jpg":
/*!******************************!*\
  !*** ./src/assets/ramen.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "608b33540496454291a8.jpg";

/***/ }),

/***/ "./src/assets/restaurant.jpg":
/*!***********************************!*\
  !*** ./src/assets/restaurant.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ebf47b00e686cecca9bf.jpg";

/***/ }),

/***/ "./src/assets/sushi.jpg":
/*!******************************!*\
  !*** ./src/assets/sushi.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "898585943cb34026c855.jpg";

/***/ }),

/***/ "./src/assets/tempura.jpg":
/*!********************************!*\
  !*** ./src/assets/tempura.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4702ff4b8b54d0991936.jpg";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home_page */ "./src/home_page.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu_page */ "./src/menu_page.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about_page */ "./src/about_page.js");




window.onload = () => {
    (0,_home_page__WEBPACK_IMPORTED_MODULE_0__.renderHomePage)();
};

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

homeBtn.addEventListener('click', _home_page__WEBPACK_IMPORTED_MODULE_0__.renderHomePage);
menuBtn.addEventListener('click', _menu_page__WEBPACK_IMPORTED_MODULE_1__.renderMenuPage);
aboutBtn.addEventListener('click', _about_page__WEBPACK_IMPORTED_MODULE_2__.renderAboutPage);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ2dEOztBQUVoRDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0JBQWdCLG1EQUFTOztBQUV6QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQjBDO0FBQ0k7QUFDSjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0EsZUFBZSw4Q0FBUTtBQUN2QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZUFBZSxnREFBVTtBQUN6QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZUFBZSw4Q0FBUTtBQUN2QjtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xCNkM7QUFDQTtBQUNFOztBQUUvQztBQUNBLElBQUksMERBQWM7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtDQUFrQyxzREFBYztBQUNoRCxrQ0FBa0Msc0RBQWM7QUFDaEQsbUNBQW1DLHdEQUFlLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXRfcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZV9wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51X3BhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbGVtZW50cyA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkFib3V0IFNha3VyYSBTYXZvclwiLFxuICAgICAgICBib2R5OiBcIldlbGNvbWUgdG8gU2FrdXJhIFNhdm9yLCB3aGVyZSB3ZSBpbnZpdGUgeW91IG9uIGEgY3VsaW5hcnkgam91cm5leSB0byBKYXBhbiwgd2hlcmUgZXZlcnkgZGlzaCB0ZWxscyBhIHN0b3J5IGFuZCBldmVyeSBiaXRlIGlzIGFuIGFkdmVudHVyZS4gU3RlcCBpbnRvIG91ciBzZXJlbmUgaGF2ZW4sIGFkb3JuZWQgd2l0aCBjaGVycnkgYmxvc3NvbXMgYW5kIHRyYWRpdGlvbmFsIGRlY29yLCBhbmQgZW1iYXJrIG9uIGEgZ2FzdHJvbm9taWMgZXhwZXJpZW5jZSB1bmxpa2UgYW55IG90aGVyLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIk91ciBDdWxpbmFyeSBQaGlsb3NvcGh5XCIsXG4gICAgICAgIGJvZHk6IFwiQXQgU2FrdXJhIFNhdm9yLCB3ZSBiZWxpZXZlIHRoYXQgZm9vZCBpcyBtb3JlIHRoYW4ganVzdCBzdXN0ZW5hbmNlIOKAkyBpdCdzIGEgY2VsZWJyYXRpb24gb2YgY3VsdHVyZSwgdHJhZGl0aW9uLCBhbmQgY3JhZnRzbWFuc2hpcC4gT3VyIG1lbnUgaXMgYSB0cmlidXRlIHRvIHRoZSBhcnRpc3RyeSBhbmQgaGVyaXRhZ2Ugb2YgSmFwYW5lc2UgY3Vpc2luZSwgc2hvd2Nhc2luZyBhIGhhcm1vbmlvdXMgYmxlbmQgb2YgZmxhdm9ycywgdGV4dHVyZXMsIGFuZCBjdWxpbmFyeSB0ZWNobmlxdWVzLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIlRoZSBFc3NlbmNlIG9mIEphcGFuZXNlIEN1aXNpbmVcIixcbiAgICAgICAgYm9keTogXCJGcm9tIGRlbGljYXRlIHN1c2hpIHJvbGxzIGNyYWZ0ZWQgd2l0aCB0aGUgZnJlc2hlc3QgaW5ncmVkaWVudHMgdG8gc2F2b3J5IHJhbWVuIGJvd2xzIHNpbW1lcmluZyB3aXRoIHJpY2ggZmxhdm9ycywgb3VyIG1lbnUgY2VsZWJyYXRlcyB0aGUgZGl2ZXJzaXR5IGFuZCBjb21wbGV4aXR5IG9mIEphcGFuZXNlIGN1bGluYXJ5IHRyYWRpdGlvbi4gV2hldGhlciB5b3UncmUgY3JhdmluZyB0aGUgZWxlZ2FuY2Ugb2YgYSBrYWlzZWtpIG1lYWwgb3IgdGhlIHdhcm10aCBvZiBhIGNvbWZvcnRpbmcgYm93bCBvZiB1ZG9uLCBvdXIgc2tpbGxlZCBjaGVmcyBhcmUgZGVkaWNhdGVkIHRvIGRlbGl2ZXJpbmcgYW4gdW5mb3JnZXR0YWJsZSBkaW5pbmcgZXhwZXJpZW5jZS5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJJbmR1bGdlIGluIEF1dGhlbnRpY2l0eVwiLFxuICAgICAgICBib2R5OiBcIkpvaW4gdXMgYXQgU2FrdXJhIFNhdm9yIGFuZCBpbmR1bGdlIGluIHRoZSBlc3NlbmNlIG9mIEphcGFuLCByaWdodCBoZXJlIGluIFtMb2NhdGlvbl0uIEltbWVyc2UgeW91cnNlbGYgaW4gdGhlIHNpZ2h0cywgc291bmRzLCBhbmQgZmxhdm9ycyBvZiBKYXBhbmVzZSBjdWx0dXJlIGFzIHlvdSBzYXZvciBlYWNoIGRpc2gsIGNyYWZ0ZWQgd2l0aCBwcmVjaXNpb24gYW5kIHBhc3Npb24uIFdoZXRoZXIgeW91J3JlIGEgc2Vhc29uZWQgZm9vZCBlbnRodXNpYXN0IG9yIGEgY3VyaW91cyBuZXdjb21lciwgd2UgaW52aXRlIHlvdSB0byBleHBlcmllbmNlIHRoZSBiZWF1dHkgYW5kIGF1dGhlbnRpY2l0eSBvZiBKYXBhbmVzZSBjdWlzaW5lIGF0IFNha3VyYSBTYXZvci5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJMb2NhdGlvbiBEZXRhaWxzXCIsXG4gICAgICAgIGJvZHk6IFwiRmluZCB1cyBhdCBbQWRkcmVzc10sIHdoZXJlIG91ciBkb29ycyBhcmUgYWx3YXlzIG9wZW4gdG8gd2VsY29tZSB5b3UgaW50byBvdXIgY3VsaW5hcnkgaGF2ZW4uIFdoZXRoZXIgeW91J3JlIHNlZWtpbmcgYSBxdWlldCBkaW5uZXIgZm9yIHR3byBvciBhIG1lbW9yYWJsZSBnYXRoZXJpbmcgd2l0aCBmcmllbmRzIGFuZCBmYW1pbHksIFNha3VyYSBTYXZvciBvZmZlcnMgYW4gdW5mb3JnZXR0YWJsZSBkaW5pbmcgZXhwZXJpZW5jZSB0aGF0IHdpbGwgdHJhbnNwb3J0IHlvdSB0byB0aGUgaGVhcnQgb2YgSmFwYW4uXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQ29tZSwgVGFzdGUgdGhlIERpZmZlcmVuY2VcIixcbiAgICAgICAgYm9keTogXCJBdCBTYWt1cmEgU2F2b3IsIHdlIGludml0ZSB5b3UgdG8gdGFzdGUgdGhlIGRpZmZlcmVuY2UgYW5kIGRpc2NvdmVyIHRoZSB0cnVlIGVzc2VuY2Ugb2YgSmFwYW5lc2UgY3Vpc2luZS4gSm9pbiB1cyBmb3IgYW4gdW5mb3JnZXR0YWJsZSBjdWxpbmFyeSBhZHZlbnR1cmUgYW5kIGxldCB5b3VyIHNlbnNlcyBiZSBjYXB0aXZhdGVkIGJ5IHRoZSBmbGF2b3JzLCBhcm9tYXMsIGFuZCB0cmFkaXRpb25zIG9mIEphcGFuLiBXZSBsb29rIGZvcndhcmQgdG8gc2VydmluZyB5b3Ugc29vbiFcIlxuICAgIH0sXG5dXG5cbmZ1bmN0aW9uIHJlbmRlckFib3V0UGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnRFbC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGU7XG5cbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgYm9keS50ZXh0Q29udGVudCA9IGVsZW1lbnQuYm9keTtcblxuICAgICAgICBjb250ZW50RWwuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBjb250ZW50RWwuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgfSlcblxuXG59XG5cbmV4cG9ydCB7IHJlbmRlckFib3V0UGFnZSB9OyIsImltcG9ydCBtYWluSW1hZ2UgZnJvbSBcIi4vYXNzZXRzL3Jlc3RhdXJhbnQuanBnXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckhvbWVQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb250ZW50RWwuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gbWFpbkltYWdlO1xuXG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRsaW5lLnRleHRDb250ZW50ID0gJ0ltbWVyc2UgWW91cnNlbGYgaW4gQXV0aGVudGljIEphcGFuZXNlIEN1aXNpbmUgYW5kIEN1bHR1cmUnXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBBdCBTYWt1cmEgU2F2b3IsIHdlIGludml0ZSB5b3Ugb24gYSBjdWxpbmFyeSBqb3VybmV5IHRvIEphcGFuLCB3aGVyZSBldmVyeSBkaXNoIHRlbGxzIGEgc3RvcnkgYW5kIGV2ZXJ5IGJpdGUgaXMgYW4gYWR2ZW50dXJlLiBTdGVwIGludG8gb3VyIHNlcmVuZSBoYXZlbiwgYWRvcm5lZCB3aXRoIGNoZXJyeSBibG9zc29tcyBhbmQgdHJhZGl0aW9uYWwgZGVjb3IsIGFuZCBlbWJhcmsgb24gYSBnYXN0cm9ub21pYyBleHBlcmllbmNlIHVubGlrZSBhbnkgb3RoZXIuIEZyb20gZGVsaWNhdGUgc3VzaGkgcm9sbHMgY3JhZnRlZCB3aXRoIHRoZSBmcmVzaGVzdCBpbmdyZWRpZW50cyB0byBzYXZvcnkgcmFtZW4gYm93bHMgc2ltbWVyaW5nIHdpdGggcmljaCBmbGF2b3JzLCBvdXIgbWVudSBjZWxlYnJhdGVzIHRoZSBhcnRpc3RyeSBhbmQgdHJhZGl0aW9uIG9mIEphcGFuZXNlIGN1aXNpbmUuIFdoZXRoZXIgeW91J3JlIGNyYXZpbmcgdGhlIGVsZWdhbmNlIG9mIGEga2Fpc2VraSBtZWFsIG9yIHRoZSB3YXJtdGggb2YgYSBjb21mb3J0aW5nIGJvd2wgb2YgdWRvbiwgb3VyIHNraWxsZWQgY2hlZnMgYXJlIGRlZGljYXRlZCB0byBkZWxpdmVyaW5nIGFuIHVuZm9yZ2V0dGFibGUgZGluaW5nIGV4cGVyaWVuY2UuSm9pbiB1cyBhdCBTYWt1cmEgU2F2b3IgYW5kIGluZHVsZ2UgaW4gdGhlIGVzc2VuY2Ugb2YgSmFwYW4sIHJpZ2h0IGhlcmUgaW4gW0xvY2F0aW9uXS5gO1xuXG4gICAgY29udGVudEVsLmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcbiAgICBjb250ZW50RWwuYXBwZW5kQ2hpbGQoaW1hZ2UpOyAgICBcbiAgICBjb250ZW50RWwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xufVxuXG5leHBvcnQgeyByZW5kZXJIb21lUGFnZSB9OyIsImltcG9ydCBzdXNoaUltZyBmcm9tICcuL2Fzc2V0cy9zdXNoaS5qcGcnO1xuaW1wb3J0IHRlbXB1cmFJbWcgZnJvbSAnLi9hc3NldHMvdGVtcHVyYS5qcGcnO1xuaW1wb3J0IHJhbWVuSW1nIGZyb20gJy4vYXNzZXRzL3JhbWVuLmpwZyc7XG5cbmNvbnN0IGRpc2hlcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiU3VzaGlcIixcbiAgICAgICAgaW1hZ2U6IHN1c2hpSW1nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0RpdmUgaW50byBhIHdvcmxkIG9mIGV4cXVpc2l0ZSBmbGF2b3JzIGFuZCBkZWxpY2F0ZSBjcmFmdHNtYW5zaGlwIHdpdGggc3VzaGksIHRoZSBpY29uaWMgSmFwYW5lc2UgZGlzaCB0aGF0IGhhcyBjYXB0dXJlZCB0aGUgaGVhcnRzIGFuZCBwYWxhdGVzIG9mIGZvb2QgZW50aHVzaWFzdHMgd29ybGR3aWRlLiBFeHBlcmllbmNlIHRoZSBwZXJmZWN0IGhhcm1vbnkgb2Ygc2Vhc29uZWQgcmljZSwgcHJlbWl1bSBzZWFmb29kLCBhbmQgZnJlc2ggdmVnZXRhYmxlcyBleHBlcnRseSBjcmFmdGVkIGludG8gYml0ZS1zaXplZCBtYXN0ZXJwaWVjZXMuIEZyb20gdGhlIGJ1dHRlcnkgcmljaG5lc3Mgb2Ygc2FsbW9uIG5pZ2lyaSB0byB0aGUgdmlicmFudCBodWVzIG9mIHR1bmEgc2FzaGltaSwgZWFjaCBwaWVjZSBvZiBzdXNoaSBpcyBhIHdvcmsgb2YgYXJ0IHRoYXQgdGFudGFsaXplcyB0aGUgc2Vuc2VzIGFuZCBsZWF2ZXMgYSBsYXN0aW5nIGltcHJlc3Npb24uJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlRlbXB1cmFcIixcbiAgICAgICAgaW1hZ2U6IHRlbXB1cmFJbWcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ3Jpc3B5LCBnb2xkZW4gcGVyZmVjdGlvbiBhd2FpdHMgd2l0aCB0ZW1wdXJhLCBhIGN1bGluYXJ5IGRlbGlnaHQgdGhhdCBzaG93Y2FzZXMgdGhlIGFydGlzdHJ5IG9mIEphcGFuZXNlIGZyeWluZyB0ZWNobmlxdWVzLiBEZWxpY2F0ZSBtb3JzZWxzIG9mIHNlYWZvb2QsIHZlZ2V0YWJsZXMsIGFuZCBtdXNocm9vbXMgYXJlIGVuY2FzZWQgaW4gYSBsaWdodCwgYWlyeSBiYXR0ZXIgYW5kIGdlbnRseSBmcmllZCB0byBjcmlzcHkgcGVyZmVjdGlvbi4gRXhwZXJpZW5jZSB0aGUgc3ltcGhvbnkgb2YgdGV4dHVyZXMgYXMgeW91IGJpdGUgaW50byBhIHRlbmRlciBzaHJpbXAgb3IgYSBjcmlzcCBzbGljZSBvZiBzd2VldCBwb3RhdG8sIGVudmVsb3BlZCBpbiB0aGUgc3VidGxlIGZsYXZvcnMgb2YgdGhlIHNlYSBhbmQgZWFydGguIFdpdGggaXRzIGlycmVzaXN0aWJsZSBjcnVuY2ggYW5kIGRlbGljYXRlIGJhbGFuY2Ugb2YgZmxhdm9ycywgdGVtcHVyYSBpcyBhIHRydWUgaW5kdWxnZW5jZSBmb3IgdGhlIHNlbnNlcy4nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiUmFtZW5cIixcbiAgICAgICAgaW1hZ2U6IHJhbWVuSW1nLFxuICAgICAgICBkZXNjcmlwdGlvbjogYEVtYmFyayBvbiBhIGN1bGluYXJ5IGpvdXJuZXkgdGhyb3VnaCB0aGUgYnVzdGxpbmcgc3RyZWV0cyBvZiBKYXBhbiB3aXRoIGEgc3RlYW1pbmcgYm93bCBvZiByYW1lbiwgdGhlIHVsdGltYXRlIGNvbWZvcnQgZm9vZCB0aGF0IHdhcm1zIHRoZSBzb3VsIGFuZCBkZWxpZ2h0cyB0aGUgcGFsYXRlLiBJbW1lcnNlIHlvdXJzZWxmIGluIHRoZSByaWNoLCBjb21wbGV4IGZsYXZvcnMgb2Ygc2F2b3J5IGJyb3RoIGluZnVzZWQgd2l0aCB1bWFtaSBnb29kbmVzcywgcGFpcmVkIHdpdGggc3ByaW5neSBub29kbGVzIHRoYXQgc2x1cnAgdXAgZXZlcnkgZHJvcCBvZiBmbGF2b3IuIFdoZXRoZXIgeW91IHByZWZlciB0aGUgaGVhcnR5IHJpY2huZXNzIG9mIHRvbmtvdHN1LCB0aGUgY29tZm9ydGluZyB3YXJtdGggb2YgbWlzbywgb3IgdGhlIGNsZWFuIHNpbXBsaWNpdHkgb2Ygc2hveXUsIHRoZXJlJ3MgYSBib3dsIG9mIHJhbWVuIHRvIHNhdGlzZnkgZXZlcnkgY3JhdmluZy4gVG9wcGVkIHdpdGggc3VjY3VsZW50IHNsaWNlcyBvZiBjaGFzaHUgcG9yaywgdGVuZGVyIGJhbWJvbyBzaG9vdHMsIGFuZCBhIHBlcmZlY3RseSBzZWFzb25lZCBlZ2csIGVhY2ggYm93bCBvZiByYW1lbiBpcyBhIHN5bXBob255IG9mIGZsYXZvcnMgdGhhdCB0cmFuc3BvcnRzIHlvdSB0byB0aGUgdmlicmFudCBzdHJlZXRzIG9mIEphcGFuLmAsXG4gICAgfSxcbl07XG5cblxuZnVuY3Rpb24gcmVuZGVyTWVudVBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnRlbnRFbC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgZGlzaGVzLmZvckVhY2goZGlzaCA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gZGlzaC5uYW1lO1xuXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLnNyYyA9IGRpc2guaW1hZ2U7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGlzaC5kZXNjcmlwdGlvbjtcblxuICAgICAgICBjb250ZW50RWwuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICBjb250ZW50RWwuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgIGNvbnRlbnRFbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgfSlcbn1cblxuZXhwb3J0IHsgcmVuZGVyTWVudVBhZ2UgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyByZW5kZXJIb21lUGFnZSB9IGZyb20gXCIuL2hvbWVfcGFnZVwiO1xuaW1wb3J0IHsgcmVuZGVyTWVudVBhZ2UgfSBmcm9tICcuL21lbnVfcGFnZSc7XG5pbXBvcnQgeyByZW5kZXJBYm91dFBhZ2UgfSBmcm9tIFwiLi9hYm91dF9wYWdlXCI7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgcmVuZGVySG9tZVBhZ2UoKTtcbn07XG5cbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51Jyk7XG5jb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dCcpO1xuXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVySG9tZVBhZ2UpO1xubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlck1lbnVQYWdlKTtcbmFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyQWJvdXRQYWdlKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=