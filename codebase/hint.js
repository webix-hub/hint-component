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
/******/ 	__webpack_require__.p = "/codebase/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.locale = undefined;

__webpack_require__(5);

__webpack_require__(7);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(6);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

var locale = exports.locale = {
	hint: {
		next: "Next",
		prev: "Previous",
		last: "End Tour"
	}
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _locales = __webpack_require__(0);

webix.i18n.hint = webix.extend(webix.i18n, _locales.locale).hint;

webix.protoUI({
	name: "hint",
	defaults: {
		steps: [],
		borderless: true,
		nextButton: true,
		prevButton: true,
		top: false,
		left: false
	},
	$init: function $init() {
		var _this = this;

		this.$view.className += " webix_hint_view";
		this._i = -1;
		this.attachEvent("onDestruct", function () {
			_this._setBodyClass("remove");
			if (_this._eventObj) {
				webix.eventRemove(_this._eventObj);
			}
			if (_this._eventObjEsc) {
				webix.eventRemove(_this._eventObjEsc);
			}
			if (_this._eventResize) {
				webix.detachEvent(_this._eventResize);
			}
		});
		this._eventObjEsc = webix.event(document.body, "keydown", function (e) {
			// escape
			if (e.keyCode == 27) {
				_this._skip();
			}
		});
		this._setResize();
	},
	steps_setter: function steps_setter(config) {
		var newConfig = [];
		for (var i = 0; i < config.length; i++) {
			config[i].padding = config[i].padding || 0;
			config[i].text = config[i].text || "";
			newConfig.push(config[i]);
		}
		return newConfig;
	},
	_drawOver: function _drawOver(stepEl) {
		this.$view.innerHTML += "<svg preserveAspectRatio=\"none\" width=\"100%\" height=\"100%\" class=\"webix_hint_overlay\" preserveAspectRatio=\"none\">\n\t\t\t<defs>\n\t\t\t\t<mask id=\"hole\">\n\t\t\t\t\t<rect class=\"webix_hint_overlay_hole\" width=\"100%\" height=\"100%\" fill=\"white\"/>\n\t\t\t\t\t<rect class=\"webix_hint_overlay_hole webix_hint_overlay_hole_el\" x=\"0\" y=\"0\" width=\"0\" height=\"0\" fill=\"white\"/>\n\t\t\t\t</mask>\n\t\t\t</defs>\n\t\t\t<rect class=\"webix_hint_overlay_hole\" width=\"100%\" height=\"100%\" mask=\"url(#hole)\" />\n\t\t</svg>";
		this._setProperties(stepEl);
		this.callEvent("onAfterStart", []);
	},
	_drawHint: function _drawHint() {
		var settings = this.config;
		this.$view.innerHTML += "<div class=\"webix_hint\">\n\t\t\t<span class='webix_hint_title'>" + (this._step.title ? this._step.title : "") + "</span>\n\t\t\t<p class=\"webix_hint_label\">" + this._step.text + "</p>\n\t\t\t<div class=\"webix_hint_progress\">\n\t\t\t\t" + (this._i + 1) + "/" + this.config.steps.length + "\n\t\t\t</div>\n\t\t\t<div class=\"webix_hint_buttons\">\n\t\t\t\t" + (settings.prevButton !== false ? "<button class=\"webix_hint_button webix_hint_button_prev webix_hint_button_hidden\">" + (typeof settings.prevButton == "string" ? settings.prevButton : "" + webix.i18n.hint.prev) + "</button>" : "") + "\n\t\t\t\t" + (settings.nextButton !== false ? "<button class=\"webix_hint_button webix_hint_button_next\">" + (typeof settings.nextButton == "string" ? settings.nextButton : "" + webix.i18n.hint.next) + "</button>" : "") + "\n\t\t\t</div>\n\t\t\t<button class=\"webix_hint_button_close\" title=\"Close\">&#10005;</button>\n\t\t</div>";
	},
	_setProperties: function _setProperties(stepEl, refresh) {
		var _this2 = this;

		if (!stepEl) {
			return;
		}

		if (!webix.env.mobile) {
			stepEl.scrollIntoView(false);
		}
		this._step = this.config.steps[this._i];
		this._reDraw(stepEl, refresh);
		this._hint = this.$view.querySelector(".webix_hint");

		var padding = 30;
		var docElem = document.documentElement;
		var box = stepEl.getBoundingClientRect();
		var elLeft = box.left + this._step.padding;
		var highlightWidth = box.width;
		var highlightHeight = box.height;
		var hintLeft = elLeft - this._step.padding;
		var hintWidth = this._hint.offsetWidth;
		var hintHeight = this._hint.offsetHeight;
		var elTop = webix.env.mobile ? box.top + this._step.padding : box.top + this._step.padding + window.pageYOffset;
		var hintTop = elTop + highlightHeight + this._step.padding + padding;
		var windowWidth = window.innerWidth && docElem.clientWidth ? Math.min(window.innerWidth, docElem.clientWidth) : window.innerWidth || docElem.clientWidth || document.getElementsByTagName("body")[0].clientWidth;
		var windowHeight = window.innerHeight && docElem.clientHeight ? Math.min(window.innerHeight, docElem.clientHeight) : window.innerHeight || docElem.clientHeight || document.getElementsByTagName("body")[0].clientHeight;

		stepEl.style.pointerEvents = "all";
		stepEl.style.userSelect = "initial";

		// set hint position
		if (elLeft - windowWidth > 0) {
			elLeft = elLeft - windowWidth + hintWidth + highlightWidth;
		}

		if (windowHeight / 2 < elTop) {
			// bottom
			hintTop = elTop - hintHeight - padding - this._step.padding * 2;
		} else if (windowWidth / 2 < elLeft && elLeft + hintWidth < windowWidth && highlightWidth + hintWidth < windowWidth) {
			// right
			hintTop = highlightHeight / 2 + elTop - this._step.padding;
			hintLeft = elLeft - hintWidth - this._step.padding - padding;
		} else if (windowWidth / 2 > elLeft && elLeft + hintWidth + highlightWidth < windowWidth) {
			// left
			hintLeft = highlightWidth + elLeft + padding;
			hintTop = elTop - this._step.padding;
		} else if (hintTop > windowHeight && hintHeight + highlightHeight < windowHeight) {
			//top, but hint does not fit
			hintTop = elTop - hintHeight - padding - this._step.padding * 2;
		} else if (hintTop > windowHeight || hintTop + hintHeight > windowHeight) {
			hintLeft = elLeft - hintWidth - this._step.padding * 2 - padding;
			hintTop = elTop - this._step.padding;
		}

		if (hintLeft + hintWidth > windowWidth) {
			// for overflow
			hintLeft = windowWidth - hintWidth;
		} else if (hintTop < 0 || hintTop > windowHeight) {
			hintTop = padding;
		} else if (windowWidth < highlightWidth || hintLeft < 0) {
			hintLeft = padding;
		}

		if (this._isInteger(this._step.top)) {
			hintTop = this._step.top;
		} else if (this._isInteger(this.config.top)) {
			hintTop = this.config.top;
		}
		if (this._isInteger(this._step.left)) {
			hintLeft = this._step.left;
		} else if (this._isInteger(this.config.left)) {
			hintLeft = this.config.left;
		}

		if (webix.env.mobile) {
			stepEl.scrollIntoView(false);
		}
		if (this._timer) {
			clearTimeout(this._timer);
		}
		this._timer = setTimeout(function () {
			_this2._hint.style.cssText = "top:" + hintTop + "px; left:" + hintLeft + "px;";
			_this2._setAttributes(_this2.$view.getElementsByClassName("webix_hint_overlay_hole_el")[0], { "x": elLeft - _this2._step.padding * 2, "y": elTop - _this2._step.padding * 2, "width": highlightWidth + _this2._step.padding * 2, "height": highlightHeight + _this2._step.padding * 2 });
			webix.html.addCss(_this2.getNode(), "webix_hint_animated");
		}, 500);
	},
	_setResize: function _setResize() {
		var _this3 = this;

		this._eventResize = webix.attachEvent("onResize", function () {
			if (_this3.getCurrentStep() && _this3._i !== _this3.config.steps.length) {
				_this3._refresh(_this3.getCurrentStep(), false, true);
			}
		});
	},
	_isInteger: function _isInteger(value) {
		if (Number.isInteger) return Number.isInteger(value);
		return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
	},
	_setAttributes: function _setAttributes(el, attrs) {
		for (var key in attrs) {
			el.setAttribute(key, attrs[key]);
		}
	},
	_reDraw: function _reDraw(stepEl, refresh) {
		var title = this.$view.querySelector(".webix_hint_title");
		var el = void 0;

		this._step.eventEl ? el = this._getEl(this._step.eventEl) : el = stepEl;
		if (this._i > 0 && !refresh) {
			webix.html.removeCss(this.getNode(), "webix_hint_animated");
			title.innerHTML = this._step.title || "";
			this.$view.querySelector(".webix_hint_label").innerHTML = this._step.text || "";
			this.$view.querySelector(".webix_hint_progress").innerHTML = this._i + 1 + "/" + this.config.steps.length;
		} else {
			this._drawHint();
			this._setEventsButtons(el);
		}
		if (!this._step.title && title) {
			title.style.margin = "0";
		}
		this._setElEvents(el);

		if (this._prevButton) {
			if (this._i > 0) {
				// previous button show
				webix.html.removeCss(this._prevButton, "webix_hint_button_hidden");
			} else if (this._prevButton && !this._prevButton.classList.contains("webix_hint_button_hidden")) {
				webix.html.addCss(this._prevButton, "webix_hint_button_hidden");
			}
		}

		if (this._i === this.config.steps.length - 1 && this._nextButton) {
			// next button text
			this._nextButton.innerHTML = "" + (typeof this.config.nextButton == "string" ? this.config.nextButton : "" + webix.i18n.hint.last);
		}
	},
	_setBodyClass: function _setBodyClass(remove) {
		var body = document.body;
		if (remove) {
			webix.html.removeCss(body, "webix_hint_overflow");
		} else if (!body.classList.contains("webix_hint_overflow")) {
			webix.html.addCss(body, "webix_hint_overflow");
		}
	},
	_getEl: function _getEl(el) {
		if ($$(el)) {
			return $$(el).getNode();
		} else {
			return document.querySelector(el);
		}
	},
	_drawSteps: function _drawSteps(refresh) {
		var _this4 = this;

		if (this.config.steps[this._i]) {
			var el = this._getEl(this.config.steps[this._i].el);
			if (this._i === 0 && !refresh) {
				this.callEvent("onBeforeStart", []);
				setTimeout(function () {
					// for first init
					_this4._drawOver(el);
				}, 100);
			} else {
				this._setProperties(el, refresh);
			}
		} else {
			this._skip();
		}
	},
	_setEventsButtons: function _setEventsButtons() {
		var _this5 = this;

		this._prevButton = this.$view.querySelectorAll(".webix_hint_button_prev")[0];
		this._nextButton = this.$view.querySelectorAll(".webix_hint_button_next")[0];
		var el = void 0;
		if (this._nextButton) {
			webix.event(this._nextButton, "click", function () {
				_this5._next(el, "next");
			});
		}
		if (this._prevButton) {
			webix.event(this._prevButton, "click", function () {
				_this5._next(el, "previous");
			});
		}
		webix.event(this.$view.querySelector(".webix_hint_button_close"), "click", function () {
			_this5._skip();
		});
	},
	_setElEvents: function _setElEvents(stepEl) {
		var _this6 = this;

		var eventStep = this._step.event;
		stepEl.focus();
		if (eventStep) {
			if (eventStep === "enter") {
				eventStep = "keydown";
			}
			if (this._eventObj) {
				webix.eventRemove(this._eventObj);
			}
			this._eventObj = webix.event(stepEl, eventStep, function (e) {
				if (eventStep == e.type) {
					if (e.type === "keydown" && e.keyCode !== 13) return;
					stepEl.focus();
					_this6._next(stepEl);
				}
			});
		} else {
			return;
		}
	},
	_next: function _next(stepEl, action) {
		var _this7 = this;

		action = action || "next";
		if (this._step.next && action === "next" || this._step.previous && action === "previous") {
			var promise = this._step[action]();
			if (promise) {
				promise.resolve().then(function () {
					_this7._nextStep(stepEl, action);
				});
			} else {
				this._nextStep(stepEl, action);
			}
		} else {
			this._nextStep(stepEl, action);
		}
	},
	_nextStep: function _nextStep(stepEl, action) {
		var el = this._getEl(this._step.el);
		el.style.pointerEvents = "";
		el.style.userSelect = "";
		el.blur();
		if (action !== "previous") {
			this._i++;
			this._drawSteps();
			this.callEvent("onNext", [this._i + 1]);
		}
		if (action === "previous") {
			this.callEvent("onPrevious", [this._i]);
			this._refresh(this._i--, false);
		}
	},
	_skip: function _skip() {
		if (this._i === -1) return;
		if (this._eventObj) {
			webix.eventRemove(this._eventObj);
			delete this._eventObj;
		}
		if (this._eventResize) {
			webix.detachEvent(this._eventResize);
			delete this._eventResize;
		}
		this.callEvent("onSkip", [this._i + 1]);
		this.hide();
		this._setBodyClass("remove");
		if (this._i === this.config.steps.length) {
			this.callEvent("onEnd", [this._i + 1]);
		}
	},
	_refresh: function _refresh(i, firstDraw) {
		if (!this._eventResize) {
			this._setResize();
		}
		this._i = i - 1;
		this._setBodyClass();
		if (this._hint) {
			if (this._hint.parentNode) this._hint.parentNode.removeChild(this._hint);
			webix.html.removeCss(this.getNode(), "webix_hint_animated");
		}
		this.show();
		if (firstDraw) {
			var svg = this.$view.querySelector("svg");
			if (svg) svg.parentNode.removeChild(svg);
			this._drawSteps();
		} else {
			this._drawSteps("refresh");
		}
	},
	start: function start() {
		this._refresh(1, true);
	},
	end: function end() {
		this._skip();
	},
	getCurrentStep: function getCurrentStep() {
		return this._i + 1;
	},
	resume: function resume(stepNumber) {
		if (this._hint) {
			stepNumber = stepNumber || 1;
			this._refresh(stepNumber);
		}
	},
	getSteps: function getSteps() {
		return this.config.steps;
	},
	setSteps: function setSteps(value) {
		this.define("steps", value);
	}
}, webix.ui.view, webix.EventSystem);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var be = exports.be = webix.i18n.locales["be-BY"] = {
	hint: {
		next: "Наступны",
		prev: "Папярэдні",
		last: "Канец Тура"
	}
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/*German (Germany) locale*/
var de = exports.de = webix.i18n.locales["de-DE"] = {
	hint: {
		next: "Nächster",
		prev: "Bisherige",
		last: "Ende Tour"
	}
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var en = exports.en = webix.i18n.locales["en-US"] = {
	hint: {
		next: "Next",
		prev: "Previous",
		last: "End Tour"
	}
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/*Spanish (Spain, International Sort) locale*/
var es = exports.es = webix.i18n.locales["es-ES"] = {
	hint: {
		next: "Siguiente",
		prev: "Anterior",
		last: "Fin de Viaje"
	}
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var fr = exports.fr = webix.i18n.locales["fr-FR"] = {
	hint: {
		next: "Prochain",
		prev: "Précédent",
		last: "End Tour"
	}
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/*Italian (Italy) locale*/
var it = exports.it = webix.i18n.locales["it-IT"] = {
	hint: {
		next: "Seguente",
		prev: "Precedente",
		last: "End Tour"
	}
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var ja = exports.ja = webix.i18n.locales["ja-JP"] = {
	hint: {
		next: "次",
		prev: "前",
		last: "終了ツアー"
	}
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var pt = exports.pt = webix.i18n.locales["pt-BR"] = {
	hint: {
		next: "Próximo",
		prev: "Anterior",
		last: "End Tour"
	}
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var ru = exports.ru = webix.i18n.locales["ru-RU"] = {
	hint: {
		next: "Следующий",
		prev: "Предыдущий",
		last: "Конец Тура"
	}
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/*Chinese (Simplified, PRC) locale*/
var zh = exports.zh = webix.i18n.locales["zh-CN"] = {
	hint: {
		next: "下一个",
		prev: "以前",
		last: "结束巡视"
	}
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmZmYWE2OTQ5MzJhOWU5MGUzYWUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9sb2NhbGVzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5sZXNzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vYmUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL2RlLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9lbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL2ZyLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9pdC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vamEuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL3B0LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9ydS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vemguanMiXSwibmFtZXMiOlsibG9jYWxlIiwiaGludCIsIm5leHQiLCJwcmV2IiwibGFzdCIsIndlYml4IiwiaTE4biIsImV4dGVuZCIsInByb3RvVUkiLCJuYW1lIiwiZGVmYXVsdHMiLCJzdGVwcyIsImJvcmRlcmxlc3MiLCJuZXh0QnV0dG9uIiwicHJldkJ1dHRvbiIsInRvcCIsImxlZnQiLCIkaW5pdCIsIiR2aWV3IiwiY2xhc3NOYW1lIiwiX2kiLCJhdHRhY2hFdmVudCIsIl9zZXRCb2R5Q2xhc3MiLCJfZXZlbnRPYmoiLCJldmVudFJlbW92ZSIsIl9ldmVudE9iakVzYyIsIl9ldmVudFJlc2l6ZSIsImRldGFjaEV2ZW50IiwiZXZlbnQiLCJkb2N1bWVudCIsImJvZHkiLCJlIiwia2V5Q29kZSIsIl9za2lwIiwiX3NldFJlc2l6ZSIsInN0ZXBzX3NldHRlciIsImNvbmZpZyIsIm5ld0NvbmZpZyIsImkiLCJsZW5ndGgiLCJwYWRkaW5nIiwidGV4dCIsInB1c2giLCJfZHJhd092ZXIiLCJzdGVwRWwiLCJpbm5lckhUTUwiLCJfc2V0UHJvcGVydGllcyIsImNhbGxFdmVudCIsIl9kcmF3SGludCIsInNldHRpbmdzIiwiX3N0ZXAiLCJ0aXRsZSIsInJlZnJlc2giLCJlbnYiLCJtb2JpbGUiLCJzY3JvbGxJbnRvVmlldyIsIl9yZURyYXciLCJfaGludCIsInF1ZXJ5U2VsZWN0b3IiLCJkb2NFbGVtIiwiZG9jdW1lbnRFbGVtZW50IiwiYm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZWxMZWZ0IiwiaGlnaGxpZ2h0V2lkdGgiLCJ3aWR0aCIsImhpZ2hsaWdodEhlaWdodCIsImhlaWdodCIsImhpbnRMZWZ0IiwiaGludFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJoaW50SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZWxUb3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImhpbnRUb3AiLCJ3aW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsIk1hdGgiLCJtaW4iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwidXNlclNlbGVjdCIsIl9pc0ludGVnZXIiLCJfdGltZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY3NzVGV4dCIsIl9zZXRBdHRyaWJ1dGVzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImh0bWwiLCJhZGRDc3MiLCJnZXROb2RlIiwiZ2V0Q3VycmVudFN0ZXAiLCJfcmVmcmVzaCIsInZhbHVlIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwiaXNGaW5pdGUiLCJmbG9vciIsImVsIiwiYXR0cnMiLCJrZXkiLCJzZXRBdHRyaWJ1dGUiLCJldmVudEVsIiwiX2dldEVsIiwicmVtb3ZlQ3NzIiwiX3NldEV2ZW50c0J1dHRvbnMiLCJtYXJnaW4iLCJfc2V0RWxFdmVudHMiLCJfcHJldkJ1dHRvbiIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiX25leHRCdXR0b24iLCJyZW1vdmUiLCIkJCIsIl9kcmF3U3RlcHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX25leHQiLCJldmVudFN0ZXAiLCJmb2N1cyIsInR5cGUiLCJhY3Rpb24iLCJwcmV2aW91cyIsInByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9uZXh0U3RlcCIsImJsdXIiLCJoaWRlIiwiZmlyc3REcmF3IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwic2hvdyIsInN2ZyIsInN0YXJ0IiwiZW5kIiwicmVzdW1lIiwic3RlcE51bWJlciIsImdldFN0ZXBzIiwic2V0U3RlcHMiLCJkZWZpbmUiLCJ1aSIsInZpZXciLCJFdmVudFN5c3RlbSIsImJlIiwibG9jYWxlcyIsImRlIiwiZW4iLCJlcyIsImZyIiwiaXQiLCJqYSIsInB0IiwicnUiLCJ6aCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRU8sSUFBSUEsMEJBQVM7QUFDbkJDLE9BQU07QUFDTEMsUUFBTSxNQUREO0FBRUxDLFFBQU0sVUFGRDtBQUdMQyxRQUFNO0FBSEQ7QUFEYSxDQUFiLEM7Ozs7OztBQ1hQLHlDOzs7Ozs7Ozs7QUNBQTs7QUFDQTs7QUFFQUMsTUFBTUMsSUFBTixDQUFXTCxJQUFYLEdBQWtCSSxNQUFNRSxNQUFOLENBQWFGLE1BQU1DLElBQW5CLG1CQUFpQ0wsSUFBbkQ7O0FBRUFJLE1BQU1HLE9BQU4sQ0FBYztBQUNiQyxPQUFNLE1BRE87QUFFYkMsV0FBVTtBQUNUQyxTQUFPLEVBREU7QUFFVEMsY0FBWSxJQUZIO0FBR1RDLGNBQVksSUFISDtBQUlUQyxjQUFZLElBSkg7QUFLVEMsT0FBSyxLQUxJO0FBTVRDLFFBQU07QUFORyxFQUZHO0FBVWJDLE1BVmEsbUJBVUw7QUFBQTs7QUFDUCxPQUFLQyxLQUFMLENBQVdDLFNBQVgsSUFBd0Isa0JBQXhCO0FBQ0EsT0FBS0MsRUFBTCxHQUFVLENBQUMsQ0FBWDtBQUNBLE9BQUtDLFdBQUwsQ0FBaUIsWUFBakIsRUFBK0IsWUFBTTtBQUNwQyxTQUFLQyxhQUFMLENBQW1CLFFBQW5CO0FBQ0EsT0FBRyxNQUFLQyxTQUFSLEVBQW1CO0FBQ2xCbEIsVUFBTW1CLFdBQU4sQ0FBa0IsTUFBS0QsU0FBdkI7QUFDQTtBQUNELE9BQUcsTUFBS0UsWUFBUixFQUFzQjtBQUNyQnBCLFVBQU1tQixXQUFOLENBQWtCLE1BQUtDLFlBQXZCO0FBQ0E7QUFDRCxPQUFHLE1BQUtDLFlBQVIsRUFBc0I7QUFDckJyQixVQUFNc0IsV0FBTixDQUFrQixNQUFLRCxZQUF2QjtBQUNBO0FBQ0QsR0FYRDtBQVlBLE9BQUtELFlBQUwsR0FBb0JwQixNQUFNdUIsS0FBTixDQUFZQyxTQUFTQyxJQUFyQixFQUEwQixTQUExQixFQUFxQyxVQUFDQyxDQUFELEVBQU87QUFDL0Q7QUFDQSxPQUFJQSxFQUFFQyxPQUFGLElBQWEsRUFBakIsRUFBb0I7QUFDbkIsVUFBS0MsS0FBTDtBQUNBO0FBQ0QsR0FMbUIsQ0FBcEI7QUFNQSxPQUFLQyxVQUFMO0FBQ0EsRUFoQ1k7QUFpQ2JDLGFBakNhLHdCQWlDQUMsTUFqQ0EsRUFpQ1E7QUFDcEIsTUFBSUMsWUFBWSxFQUFoQjtBQUNBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixPQUFPRyxNQUEzQixFQUFtQ0QsR0FBbkMsRUFBd0M7QUFDdkNGLFVBQU9FLENBQVAsRUFBVUUsT0FBVixHQUFvQkosT0FBT0UsQ0FBUCxFQUFVRSxPQUFWLElBQXFCLENBQXpDO0FBQ0FKLFVBQU9FLENBQVAsRUFBVUcsSUFBVixHQUFpQkwsT0FBT0UsQ0FBUCxFQUFVRyxJQUFWLElBQWtCLEVBQW5DO0FBQ0FKLGFBQVVLLElBQVYsQ0FBZU4sT0FBT0UsQ0FBUCxDQUFmO0FBQ0E7QUFDRCxTQUFPRCxTQUFQO0FBQ0EsRUF6Q1k7QUEwQ2JNLFVBMUNhLHFCQTBDSEMsTUExQ0csRUEwQ0s7QUFDakIsT0FBSzFCLEtBQUwsQ0FBVzJCLFNBQVg7QUFTQSxPQUFLQyxjQUFMLENBQW9CRixNQUFwQjtBQUNBLE9BQUtHLFNBQUwsQ0FBZSxjQUFmLEVBQStCLEVBQS9CO0FBQ0EsRUF0RFk7QUF1RGJDLFVBdkRhLHVCQXVERDtBQUNYLE1BQUlDLFdBQVcsS0FBS2IsTUFBcEI7QUFDQSxPQUFLbEIsS0FBTCxDQUFXMkIsU0FBWCwyRUFDa0MsS0FBS0ssS0FBTCxDQUFXQyxLQUFYLEdBQWlCLEtBQUtELEtBQUwsQ0FBV0MsS0FBNUIsR0FBa0MsRUFEcEUsc0RBRStCLEtBQUtELEtBQUwsQ0FBV1QsSUFGMUMsa0VBSUksS0FBS3JCLEVBQUwsR0FBUSxDQUpaLFVBSWlCLEtBQUtnQixNQUFMLENBQVl6QixLQUFaLENBQWtCNEIsTUFKbkMsMkVBT0lVLFNBQVNuQyxVQUFULEtBQXVCLEtBQXZCLDZGQUFrSCxPQUFPbUMsU0FBU25DLFVBQWhCLElBQThCLFFBQTlCLEdBQXVDbUMsU0FBU25DLFVBQWhELFFBQThEVCxNQUFNQyxJQUFOLENBQVdMLElBQVgsQ0FBZ0JFLElBQWhNLGtCQUFrTixFQVB0TixvQkFRSThDLFNBQVNwQyxVQUFULEtBQXVCLEtBQXZCLG9FQUF5RixPQUFPb0MsU0FBU3BDLFVBQWhCLElBQThCLFFBQTlCLEdBQXVDb0MsU0FBU3BDLFVBQWhELFFBQThEUixNQUFNQyxJQUFOLENBQVdMLElBQVgsQ0FBZ0JDLElBQXZLLGtCQUF5TCxFQVI3TDtBQVlBLEVBckVZO0FBc0ViNEMsZUF0RWEsMEJBc0VFRixNQXRFRixFQXNFVVEsT0F0RVYsRUFzRW1CO0FBQUE7O0FBQy9CLE1BQUcsQ0FBQ1IsTUFBSixFQUFZO0FBQ1g7QUFDQTs7QUFFRCxNQUFHLENBQUN2QyxNQUFNZ0QsR0FBTixDQUFVQyxNQUFkLEVBQXNCO0FBQ3JCVixVQUFPVyxjQUFQLENBQXNCLEtBQXRCO0FBQ0E7QUFDRCxPQUFLTCxLQUFMLEdBQWEsS0FBS2QsTUFBTCxDQUFZekIsS0FBWixDQUFrQixLQUFLUyxFQUF2QixDQUFiO0FBQ0EsT0FBS29DLE9BQUwsQ0FBYVosTUFBYixFQUFxQlEsT0FBckI7QUFDQSxPQUFLSyxLQUFMLEdBQWEsS0FBS3ZDLEtBQUwsQ0FBV3dDLGFBQVgsQ0FBeUIsYUFBekIsQ0FBYjs7QUFFQSxNQUFJbEIsVUFBVSxFQUFkO0FBQ0EsTUFBSW1CLFVBQVU5QixTQUFTK0IsZUFBdkI7QUFDQSxNQUFJQyxNQUFNakIsT0FBT2tCLHFCQUFQLEVBQVY7QUFDQSxNQUFJQyxTQUFTRixJQUFJN0MsSUFBSixHQUFXLEtBQUtrQyxLQUFMLENBQVdWLE9BQW5DO0FBQ0EsTUFBSXdCLGlCQUFpQkgsSUFBSUksS0FBekI7QUFDQSxNQUFJQyxrQkFBa0JMLElBQUlNLE1BQTFCO0FBQ0EsTUFBSUMsV0FBV0wsU0FBUyxLQUFLYixLQUFMLENBQVdWLE9BQW5DO0FBQ0EsTUFBSTZCLFlBQVksS0FBS1osS0FBTCxDQUFXYSxXQUEzQjtBQUNBLE1BQUlDLGFBQWEsS0FBS2QsS0FBTCxDQUFXZSxZQUE1QjtBQUNBLE1BQUlDLFFBQVFwRSxNQUFNZ0QsR0FBTixDQUFVQyxNQUFWLEdBQW1CTyxJQUFJOUMsR0FBSixHQUFVLEtBQUttQyxLQUFMLENBQVdWLE9BQXhDLEdBQWtEcUIsSUFBSTlDLEdBQUosR0FBVSxLQUFLbUMsS0FBTCxDQUFXVixPQUFyQixHQUErQmtDLE9BQU9DLFdBQXBHO0FBQ0EsTUFBSUMsVUFBVUgsUUFBUVAsZUFBUixHQUEwQixLQUFLaEIsS0FBTCxDQUFXVixPQUFyQyxHQUErQ0EsT0FBN0Q7QUFDQSxNQUFJcUMsY0FBY0gsT0FBT0ksVUFBUCxJQUFxQm5CLFFBQVFvQixXQUE3QixHQUEyQ0MsS0FBS0MsR0FBTCxDQUFTUCxPQUFPSSxVQUFoQixFQUE0Qm5CLFFBQVFvQixXQUFwQyxDQUEzQyxHQUE4RkwsT0FBT0ksVUFBUCxJQUFxQm5CLFFBQVFvQixXQUE3QixJQUE0Q2xELFNBQVNxRCxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxFQUF5Q0gsV0FBck07QUFDQSxNQUFJSSxlQUFlVCxPQUFPVSxXQUFQLElBQXNCekIsUUFBUTBCLFlBQTlCLEdBQTZDTCxLQUFLQyxHQUFMLENBQVNQLE9BQU9VLFdBQWhCLEVBQTZCekIsUUFBUTBCLFlBQXJDLENBQTdDLEdBQWtHWCxPQUFPVSxXQUFQLElBQXNCekIsUUFBUTBCLFlBQTlCLElBQThDeEQsU0FBU3FELG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLEVBQXlDRyxZQUE1TTs7QUFFQXpDLFNBQU8wQyxLQUFQLENBQWFDLGFBQWIsR0FBNkIsS0FBN0I7QUFDQTNDLFNBQU8wQyxLQUFQLENBQWFFLFVBQWIsR0FBMEIsU0FBMUI7O0FBRUE7QUFDQSxNQUFHekIsU0FBU2MsV0FBVCxHQUF1QixDQUExQixFQUE2QjtBQUM1QmQsWUFBU0EsU0FBU2MsV0FBVCxHQUF1QlIsU0FBdkIsR0FBbUNMLGNBQTVDO0FBQ0E7O0FBRUQsTUFBR21CLGVBQWMsQ0FBZCxHQUFrQlYsS0FBckIsRUFBNEI7QUFBRTtBQUM3QkcsYUFBVUgsUUFBUUYsVUFBUixHQUFxQi9CLE9BQXJCLEdBQStCLEtBQUtVLEtBQUwsQ0FBV1YsT0FBWCxHQUFtQixDQUE1RDtBQUNBLEdBRkQsTUFFTyxJQUFHcUMsY0FBYSxDQUFiLEdBQWlCZCxNQUFqQixJQUEyQkEsU0FBU00sU0FBVCxHQUFxQlEsV0FBaEQsSUFBK0RiLGlCQUFpQkssU0FBakIsR0FBNkJRLFdBQS9GLEVBQTRHO0FBQUU7QUFDcEhELGFBQVVWLGtCQUFrQixDQUFsQixHQUFzQk8sS0FBdEIsR0FBOEIsS0FBS3ZCLEtBQUwsQ0FBV1YsT0FBbkQ7QUFDQTRCLGNBQVdMLFNBQVNNLFNBQVQsR0FBcUIsS0FBS25CLEtBQUwsQ0FBV1YsT0FBaEMsR0FBMENBLE9BQXJEO0FBQ0EsR0FITSxNQUdBLElBQUdxQyxjQUFhLENBQWIsR0FBaUJkLE1BQWpCLElBQTJCQSxTQUFTTSxTQUFULEdBQXFCTCxjQUFyQixHQUFzQ2EsV0FBcEUsRUFBaUY7QUFBRTtBQUN6RlQsY0FBV0osaUJBQWlCRCxNQUFqQixHQUEwQnZCLE9BQXJDO0FBQ0FvQyxhQUFVSCxRQUFRLEtBQUt2QixLQUFMLENBQVdWLE9BQTdCO0FBQ0EsR0FITSxNQUdBLElBQUdvQyxVQUFRTyxZQUFSLElBQXdCWixhQUFXTCxlQUFYLEdBQTJCaUIsWUFBdEQsRUFBbUU7QUFBQztBQUMxRVAsYUFBVUgsUUFBUUYsVUFBUixHQUFxQi9CLE9BQXJCLEdBQStCLEtBQUtVLEtBQUwsQ0FBV1YsT0FBWCxHQUFtQixDQUE1RDtBQUNBLEdBRk0sTUFFQSxJQUFHb0MsVUFBU08sWUFBVCxJQUF5QlAsVUFBUUwsVUFBUixHQUFtQlksWUFBL0MsRUFBNEQ7QUFDbEVmLGNBQVdMLFNBQVNNLFNBQVQsR0FBcUIsS0FBS25CLEtBQUwsQ0FBV1YsT0FBWCxHQUFtQixDQUF4QyxHQUE0Q0EsT0FBdkQ7QUFDQW9DLGFBQVVILFFBQVEsS0FBS3ZCLEtBQUwsQ0FBV1YsT0FBN0I7QUFDQTs7QUFFRCxNQUFHNEIsV0FBV0MsU0FBWCxHQUF1QlEsV0FBMUIsRUFBdUM7QUFBRTtBQUN4Q1QsY0FBV1MsY0FBY1IsU0FBekI7QUFDQSxHQUZELE1BRU8sSUFBR08sVUFBVSxDQUFWLElBQWVBLFVBQVVPLFlBQTVCLEVBQTBDO0FBQ2hEUCxhQUFVcEMsT0FBVjtBQUNBLEdBRk0sTUFFQSxJQUFHcUMsY0FBY2IsY0FBZCxJQUFnQ0ksV0FBVyxDQUE5QyxFQUFpRDtBQUN2REEsY0FBVzVCLE9BQVg7QUFDQTs7QUFFRCxNQUFHLEtBQUtpRCxVQUFMLENBQWdCLEtBQUt2QyxLQUFMLENBQVduQyxHQUEzQixDQUFILEVBQW9DO0FBQ25DNkQsYUFBVSxLQUFLMUIsS0FBTCxDQUFXbkMsR0FBckI7QUFDQSxHQUZELE1BRU8sSUFBRyxLQUFLMEUsVUFBTCxDQUFnQixLQUFLckQsTUFBTCxDQUFZckIsR0FBNUIsQ0FBSCxFQUFvQztBQUMxQzZELGFBQVUsS0FBS3hDLE1BQUwsQ0FBWXJCLEdBQXRCO0FBQ0E7QUFDRCxNQUFHLEtBQUswRSxVQUFMLENBQWdCLEtBQUt2QyxLQUFMLENBQVdsQyxJQUEzQixDQUFILEVBQXFDO0FBQ3BDb0QsY0FBVyxLQUFLbEIsS0FBTCxDQUFXbEMsSUFBdEI7QUFDQSxHQUZELE1BRU8sSUFBRyxLQUFLeUUsVUFBTCxDQUFnQixLQUFLckQsTUFBTCxDQUFZcEIsSUFBNUIsQ0FBSCxFQUFxQztBQUMzQ29ELGNBQVcsS0FBS2hDLE1BQUwsQ0FBWXBCLElBQXZCO0FBQ0E7O0FBRUQsTUFBR1gsTUFBTWdELEdBQU4sQ0FBVUMsTUFBYixFQUFxQjtBQUNwQlYsVUFBT1csY0FBUCxDQUFzQixLQUF0QjtBQUNBO0FBQ0QsTUFBRyxLQUFLbUMsTUFBUixFQUFnQjtBQUFDQyxnQkFBYSxLQUFLRCxNQUFsQjtBQUEyQjtBQUM1QyxPQUFLQSxNQUFMLEdBQWNFLFdBQVcsWUFBTTtBQUM5QixVQUFLbkMsS0FBTCxDQUFXNkIsS0FBWCxDQUFpQk8sT0FBakIsWUFBa0NqQixPQUFsQyxpQkFBcURSLFFBQXJEO0FBQ0EsVUFBSzBCLGNBQUwsQ0FBb0IsT0FBSzVFLEtBQUwsQ0FBVzZFLHNCQUFYLENBQWtDLDRCQUFsQyxFQUFnRSxDQUFoRSxDQUFwQixFQUF3RixFQUFDLEtBQUloQyxTQUFPLE9BQUtiLEtBQUwsQ0FBV1YsT0FBWCxHQUFtQixDQUEvQixFQUFrQyxLQUFJaUMsUUFBTSxPQUFLdkIsS0FBTCxDQUFXVixPQUFYLEdBQW1CLENBQS9ELEVBQWtFLFNBQVF3QixpQkFBZSxPQUFLZCxLQUFMLENBQVdWLE9BQVgsR0FBb0IsQ0FBN0csRUFBZ0gsVUFBUzBCLGtCQUFnQixPQUFLaEIsS0FBTCxDQUFXVixPQUFYLEdBQW1CLENBQTVKLEVBQXhGO0FBQ0FuQyxTQUFNMkYsSUFBTixDQUFXQyxNQUFYLENBQWtCLE9BQUtDLE9BQUwsRUFBbEIsRUFBa0MscUJBQWxDO0FBQ0EsR0FKYSxFQUlYLEdBSlcsQ0FBZDtBQUtBLEVBbkpZO0FBb0piaEUsV0FwSmEsd0JBb0pBO0FBQUE7O0FBQ1osT0FBS1IsWUFBTCxHQUFvQnJCLE1BQU1nQixXQUFOLENBQWtCLFVBQWxCLEVBQThCLFlBQU07QUFDdkQsT0FBRyxPQUFLOEUsY0FBTCxNQUF5QixPQUFLL0UsRUFBTCxLQUFZLE9BQUtnQixNQUFMLENBQVl6QixLQUFaLENBQWtCNEIsTUFBMUQsRUFBa0U7QUFDakUsV0FBSzZELFFBQUwsQ0FBYyxPQUFLRCxjQUFMLEVBQWQsRUFBcUMsS0FBckMsRUFBNEMsSUFBNUM7QUFDQTtBQUNELEdBSm1CLENBQXBCO0FBS0EsRUExSlk7QUEySmJWLFdBM0phLHNCQTJKRlksS0EzSkUsRUEySks7QUFDakIsTUFBR0MsT0FBT0MsU0FBVixFQUFxQixPQUFPRCxPQUFPQyxTQUFQLENBQWlCRixLQUFqQixDQUFQO0FBQ3JCLFNBQU8sT0FBT0EsS0FBUCxLQUFpQixRQUFqQixJQUNORyxTQUFTSCxLQUFULENBRE0sSUFFTnJCLEtBQUt5QixLQUFMLENBQVdKLEtBQVgsTUFBc0JBLEtBRnZCO0FBR0EsRUFoS1k7QUFpS2JQLGVBakthLDBCQWlLRVksRUFqS0YsRUFpS01DLEtBaktOLEVBaUthO0FBQ3pCLE9BQUksSUFBSUMsR0FBUixJQUFlRCxLQUFmLEVBQXNCO0FBQ3JCRCxNQUFHRyxZQUFILENBQWdCRCxHQUFoQixFQUFxQkQsTUFBTUMsR0FBTixDQUFyQjtBQUNBO0FBQ0QsRUFyS1k7QUFzS2JwRCxRQXRLYSxtQkFzS0xaLE1BdEtLLEVBc0tHUSxPQXRLSCxFQXNLWTtBQUN4QixNQUFJRCxRQUFRLEtBQUtqQyxLQUFMLENBQVd3QyxhQUFYLENBQXlCLG1CQUF6QixDQUFaO0FBQ0EsTUFBSWdELFdBQUo7O0FBRUEsT0FBS3hELEtBQUwsQ0FBVzRELE9BQVgsR0FBbUJKLEtBQUssS0FBS0ssTUFBTCxDQUFZLEtBQUs3RCxLQUFMLENBQVc0RCxPQUF2QixDQUF4QixHQUF3REosS0FBSzlELE1BQTdEO0FBQ0EsTUFBRyxLQUFLeEIsRUFBTCxHQUFVLENBQVYsSUFBZSxDQUFDZ0MsT0FBbkIsRUFBNEI7QUFDM0IvQyxTQUFNMkYsSUFBTixDQUFXZ0IsU0FBWCxDQUFxQixLQUFLZCxPQUFMLEVBQXJCLEVBQXFDLHFCQUFyQztBQUNBL0MsU0FBTU4sU0FBTixHQUFrQixLQUFLSyxLQUFMLENBQVdDLEtBQVgsSUFBb0IsRUFBdEM7QUFDQSxRQUFLakMsS0FBTCxDQUFXd0MsYUFBWCxDQUF5QixtQkFBekIsRUFBOENiLFNBQTlDLEdBQTBELEtBQUtLLEtBQUwsQ0FBV1QsSUFBWCxJQUFtQixFQUE3RTtBQUNBLFFBQUt2QixLQUFMLENBQVd3QyxhQUFYLENBQXlCLHNCQUF6QixFQUFpRGIsU0FBakQsR0FBZ0UsS0FBS3pCLEVBQUwsR0FBUSxDQUF4RSxTQUE2RSxLQUFLZ0IsTUFBTCxDQUFZekIsS0FBWixDQUFrQjRCLE1BQS9GO0FBQ0EsR0FMRCxNQUtPO0FBQ04sUUFBS1MsU0FBTDtBQUNBLFFBQUtpRSxpQkFBTCxDQUF1QlAsRUFBdkI7QUFDQTtBQUNELE1BQUcsQ0FBQyxLQUFLeEQsS0FBTCxDQUFXQyxLQUFaLElBQXFCQSxLQUF4QixFQUErQjtBQUM5QkEsU0FBTW1DLEtBQU4sQ0FBWTRCLE1BQVosR0FBcUIsR0FBckI7QUFDQTtBQUNELE9BQUtDLFlBQUwsQ0FBa0JULEVBQWxCOztBQUVBLE1BQUcsS0FBS1UsV0FBUixFQUFxQjtBQUNwQixPQUFHLEtBQUtoRyxFQUFMLEdBQVUsQ0FBYixFQUFnQjtBQUFFO0FBQ2pCZixVQUFNMkYsSUFBTixDQUFXZ0IsU0FBWCxDQUFxQixLQUFLSSxXQUExQixFQUF1QywwQkFBdkM7QUFDQSxJQUZELE1BRU8sSUFBRyxLQUFLQSxXQUFMLElBQW9CLENBQUMsS0FBS0EsV0FBTCxDQUFpQkMsU0FBakIsQ0FBMkJDLFFBQTNCLENBQW9DLDBCQUFwQyxDQUF4QixFQUF5RjtBQUMvRmpILFVBQU0yRixJQUFOLENBQVdDLE1BQVgsQ0FBa0IsS0FBS21CLFdBQXZCLEVBQW9DLDBCQUFwQztBQUNBO0FBQ0Q7O0FBRUQsTUFBRyxLQUFLaEcsRUFBTCxLQUFZLEtBQUtnQixNQUFMLENBQVl6QixLQUFaLENBQWtCNEIsTUFBbEIsR0FBMEIsQ0FBdEMsSUFBMkMsS0FBS2dGLFdBQW5ELEVBQWdFO0FBQUU7QUFDakUsUUFBS0EsV0FBTCxDQUFpQjFFLFNBQWpCLFNBQWdDLE9BQU8sS0FBS1QsTUFBTCxDQUFZdkIsVUFBbkIsSUFBaUMsUUFBakMsR0FBMEMsS0FBS3VCLE1BQUwsQ0FBWXZCLFVBQXRELFFBQW9FUixNQUFNQyxJQUFOLENBQVdMLElBQVgsQ0FBZ0JHLElBQXBIO0FBQ0E7QUFDRCxFQXBNWTtBQXFNYmtCLGNBck1hLHlCQXFNQ2tHLE1Bck1ELEVBcU1TO0FBQ3JCLE1BQUkxRixPQUFPRCxTQUFTQyxJQUFwQjtBQUNBLE1BQUcwRixNQUFILEVBQVc7QUFDVm5ILFNBQU0yRixJQUFOLENBQVdnQixTQUFYLENBQXFCbEYsSUFBckIsRUFBMkIscUJBQTNCO0FBQ0EsR0FGRCxNQUVPLElBQUcsQ0FBQ0EsS0FBS3VGLFNBQUwsQ0FBZUMsUUFBZixDQUF3QixxQkFBeEIsQ0FBSixFQUFvRDtBQUMxRGpILFNBQU0yRixJQUFOLENBQVdDLE1BQVgsQ0FBa0JuRSxJQUFsQixFQUF3QixxQkFBeEI7QUFDQTtBQUNELEVBNU1ZO0FBNk1iaUYsT0E3TWEsa0JBNk1OTCxFQTdNTSxFQTZNRjtBQUNWLE1BQUdlLEdBQUdmLEVBQUgsQ0FBSCxFQUFXO0FBQ1YsVUFBT2UsR0FBR2YsRUFBSCxFQUFPUixPQUFQLEVBQVA7QUFDQSxHQUZELE1BRU87QUFDTixVQUFPckUsU0FBUzZCLGFBQVQsQ0FBdUJnRCxFQUF2QixDQUFQO0FBQ0E7QUFDRCxFQW5OWTtBQW9OYmdCLFdBcE5hLHNCQW9ORnRFLE9BcE5FLEVBb05PO0FBQUE7O0FBQ25CLE1BQUcsS0FBS2hCLE1BQUwsQ0FBWXpCLEtBQVosQ0FBa0IsS0FBS1MsRUFBdkIsQ0FBSCxFQUErQjtBQUM5QixPQUFJc0YsS0FBSyxLQUFLSyxNQUFMLENBQVksS0FBSzNFLE1BQUwsQ0FBWXpCLEtBQVosQ0FBa0IsS0FBS1MsRUFBdkIsRUFBMkJzRixFQUF2QyxDQUFUO0FBQ0EsT0FBRyxLQUFLdEYsRUFBTCxLQUFZLENBQVosSUFBaUIsQ0FBQ2dDLE9BQXJCLEVBQThCO0FBQzdCLFNBQUtMLFNBQUwsQ0FBZSxlQUFmLEVBQWdDLEVBQWhDO0FBQ0E2QyxlQUFXLFlBQU07QUFBRTtBQUNsQixZQUFLakQsU0FBTCxDQUFlK0QsRUFBZjtBQUNBLEtBRkQsRUFFRyxHQUZIO0FBR0EsSUFMRCxNQUtPO0FBQ04sU0FBSzVELGNBQUwsQ0FBb0I0RCxFQUFwQixFQUF3QnRELE9BQXhCO0FBQ0E7QUFDRCxHQVZELE1BVU87QUFDTixRQUFLbkIsS0FBTDtBQUNBO0FBQ0QsRUFsT1k7QUFtT2JnRixrQkFuT2EsK0JBbU9PO0FBQUE7O0FBQ25CLE9BQUtHLFdBQUwsR0FBbUIsS0FBS2xHLEtBQUwsQ0FBV3lHLGdCQUFYLENBQTRCLHlCQUE1QixFQUF1RCxDQUF2RCxDQUFuQjtBQUNBLE9BQUtKLFdBQUwsR0FBbUIsS0FBS3JHLEtBQUwsQ0FBV3lHLGdCQUFYLENBQTRCLHlCQUE1QixFQUF1RCxDQUF2RCxDQUFuQjtBQUNBLE1BQUlqQixXQUFKO0FBQ0EsTUFBRyxLQUFLYSxXQUFSLEVBQXFCO0FBQ3BCbEgsU0FBTXVCLEtBQU4sQ0FBWSxLQUFLMkYsV0FBakIsRUFBOEIsT0FBOUIsRUFBdUMsWUFBTTtBQUM1QyxXQUFLSyxLQUFMLENBQVdsQixFQUFYLEVBQWUsTUFBZjtBQUNBLElBRkQ7QUFHQTtBQUNELE1BQUcsS0FBS1UsV0FBUixFQUFxQjtBQUNwQi9HLFNBQU11QixLQUFOLENBQVksS0FBS3dGLFdBQWpCLEVBQThCLE9BQTlCLEVBQXVDLFlBQU07QUFDNUMsV0FBS1EsS0FBTCxDQUFXbEIsRUFBWCxFQUFlLFVBQWY7QUFDQSxJQUZEO0FBR0E7QUFDRHJHLFFBQU11QixLQUFOLENBQVksS0FBS1YsS0FBTCxDQUFXd0MsYUFBWCxDQUF5QiwwQkFBekIsQ0FBWixFQUFrRSxPQUFsRSxFQUEyRSxZQUFNO0FBQUUsVUFBS3pCLEtBQUw7QUFBZSxHQUFsRztBQUNBLEVBbFBZO0FBbVBia0YsYUFuUGEsd0JBbVBBdkUsTUFuUEEsRUFtUFE7QUFBQTs7QUFDcEIsTUFBSWlGLFlBQVksS0FBSzNFLEtBQUwsQ0FBV3RCLEtBQTNCO0FBQ0FnQixTQUFPa0YsS0FBUDtBQUNBLE1BQUdELFNBQUgsRUFBYztBQUNiLE9BQUdBLGNBQWMsT0FBakIsRUFBMEI7QUFDekJBLGdCQUFZLFNBQVo7QUFDQTtBQUNELE9BQUcsS0FBS3RHLFNBQVIsRUFBbUI7QUFDbEJsQixVQUFNbUIsV0FBTixDQUFrQixLQUFLRCxTQUF2QjtBQUNBO0FBQ0QsUUFBS0EsU0FBTCxHQUFpQmxCLE1BQU11QixLQUFOLENBQVlnQixNQUFaLEVBQW9CaUYsU0FBcEIsRUFBK0IsVUFBQzlGLENBQUQsRUFBTztBQUN0RCxRQUFHOEYsYUFBYTlGLEVBQUVnRyxJQUFsQixFQUF3QjtBQUN2QixTQUFHaEcsRUFBRWdHLElBQUYsS0FBVyxTQUFYLElBQXdCaEcsRUFBRUMsT0FBRixLQUFjLEVBQXpDLEVBQTZDO0FBQzdDWSxZQUFPa0YsS0FBUDtBQUNBLFlBQUtGLEtBQUwsQ0FBV2hGLE1BQVg7QUFDQTtBQUNELElBTmdCLENBQWpCO0FBT0EsR0FkRCxNQWNPO0FBQ047QUFDQTtBQUNELEVBdlFZO0FBd1FiZ0YsTUF4UWEsaUJBd1FQaEYsTUF4UU8sRUF3UUNvRixNQXhRRCxFQXdRUztBQUFBOztBQUNyQkEsV0FBU0EsVUFBVSxNQUFuQjtBQUNBLE1BQUksS0FBSzlFLEtBQUwsQ0FBV2hELElBQVgsSUFBbUI4SCxXQUFXLE1BQTlCLElBQXdDLEtBQUs5RSxLQUFMLENBQVcrRSxRQUFYLElBQXVCRCxXQUFXLFVBQTlFLEVBQTBGO0FBQ3pGLE9BQUlFLFVBQVUsS0FBS2hGLEtBQUwsQ0FBVzhFLE1BQVgsR0FBZDtBQUNBLE9BQUlFLE9BQUosRUFBWTtBQUNYQSxZQUFRQyxPQUFSLEdBQWtCQyxJQUFsQixDQUF1QixZQUFNO0FBQzVCLFlBQUtDLFNBQUwsQ0FBZXpGLE1BQWYsRUFBdUJvRixNQUF2QjtBQUNBLEtBRkQ7QUFHQSxJQUpELE1BSU87QUFDTixTQUFLSyxTQUFMLENBQWV6RixNQUFmLEVBQXVCb0YsTUFBdkI7QUFDQTtBQUNELEdBVEQsTUFTTztBQUNOLFFBQUtLLFNBQUwsQ0FBZXpGLE1BQWYsRUFBdUJvRixNQUF2QjtBQUNBO0FBQ0QsRUF0Ulk7QUF1UmJLLFVBdlJhLHFCQXVSSHpGLE1BdlJHLEVBdVJLb0YsTUF2UkwsRUF1UmE7QUFDekIsTUFBSXRCLEtBQUssS0FBS0ssTUFBTCxDQUFZLEtBQUs3RCxLQUFMLENBQVd3RCxFQUF2QixDQUFUO0FBQ0FBLEtBQUdwQixLQUFILENBQVNDLGFBQVQsR0FBeUIsRUFBekI7QUFDQW1CLEtBQUdwQixLQUFILENBQVNFLFVBQVQsR0FBc0IsRUFBdEI7QUFDQWtCLEtBQUc0QixJQUFIO0FBQ0EsTUFBR04sV0FBVyxVQUFkLEVBQTBCO0FBQ3pCLFFBQUs1RyxFQUFMO0FBQ0EsUUFBS3NHLFVBQUw7QUFDQSxRQUFLM0UsU0FBTCxDQUFlLFFBQWYsRUFBeUIsQ0FBQyxLQUFLM0IsRUFBTCxHQUFRLENBQVQsQ0FBekI7QUFDQTtBQUNELE1BQUc0RyxXQUFXLFVBQWQsRUFBMEI7QUFDekIsUUFBS2pGLFNBQUwsQ0FBZSxZQUFmLEVBQTZCLENBQUMsS0FBSzNCLEVBQU4sQ0FBN0I7QUFDQSxRQUFLZ0YsUUFBTCxDQUFjLEtBQUtoRixFQUFMLEVBQWQsRUFBeUIsS0FBekI7QUFDQTtBQUNELEVBclNZO0FBc1NiYSxNQXRTYSxtQkFzU0w7QUFDUCxNQUFJLEtBQUtiLEVBQUwsS0FBWSxDQUFDLENBQWpCLEVBQW9CO0FBQ3BCLE1BQUcsS0FBS0csU0FBUixFQUFtQjtBQUNsQmxCLFNBQU1tQixXQUFOLENBQWtCLEtBQUtELFNBQXZCO0FBQ0EsVUFBTyxLQUFLQSxTQUFaO0FBQ0E7QUFDRCxNQUFHLEtBQUtHLFlBQVIsRUFBc0I7QUFDckJyQixTQUFNc0IsV0FBTixDQUFrQixLQUFLRCxZQUF2QjtBQUNBLFVBQU8sS0FBS0EsWUFBWjtBQUNBO0FBQ0QsT0FBS3FCLFNBQUwsQ0FBZSxRQUFmLEVBQXlCLENBQUMsS0FBSzNCLEVBQUwsR0FBUSxDQUFULENBQXpCO0FBQ0EsT0FBS21ILElBQUw7QUFDQSxPQUFLakgsYUFBTCxDQUFtQixRQUFuQjtBQUNBLE1BQUcsS0FBS0YsRUFBTCxLQUFZLEtBQUtnQixNQUFMLENBQVl6QixLQUFaLENBQWtCNEIsTUFBakMsRUFBeUM7QUFDeEMsUUFBS1EsU0FBTCxDQUFlLE9BQWYsRUFBd0IsQ0FBQyxLQUFLM0IsRUFBTCxHQUFRLENBQVQsQ0FBeEI7QUFDQTtBQUNELEVBdFRZO0FBdVRiZ0YsU0F2VGEsb0JBdVRKOUQsQ0F2VEksRUF1VERrRyxTQXZUQyxFQXVUVTtBQUN0QixNQUFHLENBQUMsS0FBSzlHLFlBQVQsRUFBdUI7QUFDdEIsUUFBS1EsVUFBTDtBQUNBO0FBQ0QsT0FBS2QsRUFBTCxHQUFVa0IsSUFBRSxDQUFaO0FBQ0EsT0FBS2hCLGFBQUw7QUFDQSxNQUFHLEtBQUttQyxLQUFSLEVBQWU7QUFDZCxPQUFHLEtBQUtBLEtBQUwsQ0FBV2dGLFVBQWQsRUFDQyxLQUFLaEYsS0FBTCxDQUFXZ0YsVUFBWCxDQUFzQkMsV0FBdEIsQ0FBa0MsS0FBS2pGLEtBQXZDO0FBQ0RwRCxTQUFNMkYsSUFBTixDQUFXZ0IsU0FBWCxDQUFxQixLQUFLZCxPQUFMLEVBQXJCLEVBQXFDLHFCQUFyQztBQUNBO0FBQ0QsT0FBS3lDLElBQUw7QUFDQSxNQUFHSCxTQUFILEVBQWM7QUFDYixPQUFJSSxNQUFNLEtBQUsxSCxLQUFMLENBQVd3QyxhQUFYLENBQXlCLEtBQXpCLENBQVY7QUFDQSxPQUFJa0YsR0FBSixFQUNDQSxJQUFJSCxVQUFKLENBQWVDLFdBQWYsQ0FBMkJFLEdBQTNCO0FBQ0QsUUFBS2xCLFVBQUw7QUFDQSxHQUxELE1BS087QUFDTixRQUFLQSxVQUFMLENBQWdCLFNBQWhCO0FBQ0E7QUFDRCxFQTNVWTtBQTRVYm1CLE1BNVVhLG1CQTRVTDtBQUNQLE9BQUt6QyxRQUFMLENBQWMsQ0FBZCxFQUFpQixJQUFqQjtBQUNBLEVBOVVZO0FBK1ViMEMsSUEvVWEsaUJBK1VQO0FBQ0wsT0FBSzdHLEtBQUw7QUFDQSxFQWpWWTtBQWtWYmtFLGVBbFZhLDRCQWtWSTtBQUNoQixTQUFPLEtBQUsvRSxFQUFMLEdBQVEsQ0FBZjtBQUNBLEVBcFZZO0FBcVZiMkgsT0FyVmEsa0JBcVZOQyxVQXJWTSxFQXFWTTtBQUNsQixNQUFHLEtBQUt2RixLQUFSLEVBQWM7QUFDYnVGLGdCQUFhQSxjQUFjLENBQTNCO0FBQ0EsUUFBSzVDLFFBQUwsQ0FBYzRDLFVBQWQ7QUFDQTtBQUNELEVBMVZZO0FBMlZiQyxTQTNWYSxzQkEyVkY7QUFDVixTQUFPLEtBQUs3RyxNQUFMLENBQVl6QixLQUFuQjtBQUNBLEVBN1ZZO0FBOFZidUksU0E5VmEsb0JBOFZKN0MsS0E5VkksRUE4Vkc7QUFDZixPQUFLOEMsTUFBTCxDQUFZLE9BQVosRUFBcUI5QyxLQUFyQjtBQUNBO0FBaFdZLENBQWQsRUFpV0doRyxNQUFNK0ksRUFBTixDQUFTQyxJQWpXWixFQWlXa0JoSixNQUFNaUosV0FqV3hCLEU7Ozs7Ozs7Ozs7OztBQ0xPLElBQUlDLGtCQUFLbEosTUFBTUMsSUFBTixDQUFXa0osT0FBWCxDQUFtQixPQUFuQixJQUE4QjtBQUM3Q3ZKLE9BQUs7QUFDSkMsUUFBTSxVQURGO0FBRUpDLFFBQU0sV0FGRjtBQUdKQyxRQUFNO0FBSEY7QUFEd0MsQ0FBdkMsQzs7Ozs7Ozs7Ozs7O0FDQVA7QUFDTyxJQUFJcUosa0JBQUtwSixNQUFNQyxJQUFOLENBQVdrSixPQUFYLENBQW1CLE9BQW5CLElBQThCO0FBQzdDdkosT0FBSztBQUNKQyxRQUFNLFVBREY7QUFFSkMsUUFBTSxXQUZGO0FBR0pDLFFBQU07QUFIRjtBQUR3QyxDQUF2QyxDOzs7Ozs7Ozs7Ozs7QUNEQSxJQUFJc0osa0JBQUtySixNQUFNQyxJQUFOLENBQVdrSixPQUFYLENBQW1CLE9BQW5CLElBQTRCO0FBQzNDdkosT0FBSztBQUNKQyxRQUFNLE1BREY7QUFFSkMsUUFBTSxVQUZGO0FBR0pDLFFBQU07QUFIRjtBQURzQyxDQUFyQyxDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUNPLElBQUl1SixrQkFBS3RKLE1BQU1DLElBQU4sQ0FBV2tKLE9BQVgsQ0FBbUIsT0FBbkIsSUFBOEI7QUFDN0N2SixPQUFLO0FBQ0pDLFFBQU0sV0FERjtBQUVKQyxRQUFNLFVBRkY7QUFHSkMsUUFBTTtBQUhGO0FBRHdDLENBQXZDLEM7Ozs7Ozs7Ozs7OztBQ0RBLElBQUl3SixrQkFBS3ZKLE1BQU1DLElBQU4sQ0FBV2tKLE9BQVgsQ0FBbUIsT0FBbkIsSUFBNEI7QUFDM0N2SixPQUFLO0FBQ0pDLFFBQU0sVUFERjtBQUVKQyxRQUFNLFdBRkY7QUFHSkMsUUFBTTtBQUhGO0FBRHNDLENBQXJDLEM7Ozs7Ozs7Ozs7OztBQ0FQO0FBQ08sSUFBSXlKLGtCQUFLeEosTUFBTUMsSUFBTixDQUFXa0osT0FBWCxDQUFtQixPQUFuQixJQUE4QjtBQUM3Q3ZKLE9BQUs7QUFDSkMsUUFBTSxVQURGO0FBRUpDLFFBQU0sWUFGRjtBQUdKQyxRQUFNO0FBSEY7QUFEd0MsQ0FBdkMsQzs7Ozs7Ozs7Ozs7O0FDREEsSUFBSTBKLGtCQUFLekosTUFBTUMsSUFBTixDQUFXa0osT0FBWCxDQUFtQixPQUFuQixJQUE0QjtBQUMzQ3ZKLE9BQUs7QUFDSkMsUUFBTSxHQURGO0FBRUpDLFFBQU0sR0FGRjtBQUdKQyxRQUFNO0FBSEY7QUFEc0MsQ0FBckMsQzs7Ozs7Ozs7Ozs7O0FDQUEsSUFBSTJKLGtCQUFLMUosTUFBTUMsSUFBTixDQUFXa0osT0FBWCxDQUFtQixPQUFuQixJQUE4QjtBQUM3Q3ZKLE9BQUs7QUFDSkMsUUFBTSxTQURGO0FBRUpDLFFBQU0sVUFGRjtBQUdKQyxRQUFNO0FBSEY7QUFEd0MsQ0FBdkMsQzs7Ozs7Ozs7Ozs7O0FDQUEsSUFBSTRKLGtCQUFLM0osTUFBTUMsSUFBTixDQUFXa0osT0FBWCxDQUFtQixPQUFuQixJQUE0QjtBQUMzQ3ZKLE9BQUs7QUFDSkMsUUFBTSxXQURGO0FBRUpDLFFBQU0sWUFGRjtBQUdKQyxRQUFNO0FBSEY7QUFEc0MsQ0FBckMsQzs7Ozs7Ozs7Ozs7O0FDQVA7QUFDTyxJQUFJNkosa0JBQUs1SixNQUFNQyxJQUFOLENBQVdrSixPQUFYLENBQW1CLE9BQW5CLElBQThCO0FBQzdDdkosT0FBSztBQUNKQyxRQUFNLEtBREY7QUFFSkMsUUFBTSxJQUZGO0FBR0pDLFFBQU07QUFIRjtBQUR3QyxDQUF2QyxDIiwiZmlsZSI6ImhpbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jb2RlYmFzZS9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmZmZhYTY5NDkzMmE5ZTkwZTNhZSIsImltcG9ydCBcIi4vaTE4bi9lblwiO1xuaW1wb3J0IFwiLi9pMThuL2ZyXCI7XG5pbXBvcnQgXCIuL2kxOG4vYmVcIjtcbmltcG9ydCBcIi4vaTE4bi9kZVwiO1xuaW1wb3J0IFwiLi9pMThuL2VzXCI7XG5pbXBvcnQgXCIuL2kxOG4vaXRcIjtcbmltcG9ydCBcIi4vaTE4bi9qYVwiO1xuaW1wb3J0IFwiLi9pMThuL3B0XCI7XG5pbXBvcnQgXCIuL2kxOG4vcnVcIjtcbmltcG9ydCBcIi4vaTE4bi96aFwiO1xuXG5leHBvcnQgbGV0IGxvY2FsZSA9IHtcblx0aGludDoge1xuXHRcdG5leHQ6IFwiTmV4dFwiLFxuXHRcdHByZXY6IFwiUHJldmlvdXNcIixcblx0XHRsYXN0OiBcIkVuZCBUb3VyXCJcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2xvY2FsZXMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy9oaW50Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFwiLi9oaW50Lmxlc3NcIjtcbmltcG9ydCB7IGxvY2FsZSB9IGZyb20gXCIuL2xvY2FsZXNcIjtcblxud2ViaXguaTE4bi5oaW50ID0gd2ViaXguZXh0ZW5kKHdlYml4LmkxOG4sIGxvY2FsZSkuaGludDtcblxud2ViaXgucHJvdG9VSSh7XG5cdG5hbWU6IFwiaGludFwiLFxuXHRkZWZhdWx0czoge1xuXHRcdHN0ZXBzOiBbXSxcblx0XHRib3JkZXJsZXNzOiB0cnVlLFxuXHRcdG5leHRCdXR0b246IHRydWUsXG5cdFx0cHJldkJ1dHRvbjogdHJ1ZSxcblx0XHR0b3A6IGZhbHNlLFxuXHRcdGxlZnQ6IGZhbHNlXG5cdH0sXG5cdCRpbml0KCkge1xuXHRcdHRoaXMuJHZpZXcuY2xhc3NOYW1lICs9IFwiIHdlYml4X2hpbnRfdmlld1wiO1xuXHRcdHRoaXMuX2kgPSAtMTtcblx0XHR0aGlzLmF0dGFjaEV2ZW50KFwib25EZXN0cnVjdFwiLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zZXRCb2R5Q2xhc3MoXCJyZW1vdmVcIik7XG5cdFx0XHRpZih0aGlzLl9ldmVudE9iaikge1xuXHRcdFx0XHR3ZWJpeC5ldmVudFJlbW92ZSh0aGlzLl9ldmVudE9iaik7XG5cdFx0XHR9XG5cdFx0XHRpZih0aGlzLl9ldmVudE9iakVzYykge1xuXHRcdFx0XHR3ZWJpeC5ldmVudFJlbW92ZSh0aGlzLl9ldmVudE9iakVzYyk7XG5cdFx0XHR9XG5cdFx0XHRpZih0aGlzLl9ldmVudFJlc2l6ZSkge1xuXHRcdFx0XHR3ZWJpeC5kZXRhY2hFdmVudCh0aGlzLl9ldmVudFJlc2l6ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5fZXZlbnRPYmpFc2MgPSB3ZWJpeC5ldmVudChkb2N1bWVudC5ib2R5LFwia2V5ZG93blwiLCAoZSkgPT4ge1xuXHRcdFx0Ly8gZXNjYXBlXG5cdFx0XHRpZiAoZS5rZXlDb2RlID09IDI3KXtcblx0XHRcdFx0dGhpcy5fc2tpcCgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuX3NldFJlc2l6ZSgpO1xuXHR9LFxuXHRzdGVwc19zZXR0ZXIoY29uZmlnKSB7XG5cdFx0bGV0IG5ld0NvbmZpZyA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY29uZmlnLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25maWdbaV0ucGFkZGluZyA9IGNvbmZpZ1tpXS5wYWRkaW5nIHx8IDA7XG5cdFx0XHRjb25maWdbaV0udGV4dCA9IGNvbmZpZ1tpXS50ZXh0IHx8IFwiXCI7XG5cdFx0XHRuZXdDb25maWcucHVzaChjb25maWdbaV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3Q29uZmlnO1xuXHR9LFxuXHRfZHJhd092ZXIoc3RlcEVsKSB7XG5cdFx0dGhpcy4kdmlldy5pbm5lckhUTUwgKz0gYDxzdmcgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgY2xhc3M9XCJ3ZWJpeF9oaW50X292ZXJsYXlcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiPlxuXHRcdFx0PGRlZnM+XG5cdFx0XHRcdDxtYXNrIGlkPVwiaG9sZVwiPlxuXHRcdFx0XHRcdDxyZWN0IGNsYXNzPVwid2ViaXhfaGludF9vdmVybGF5X2hvbGVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cIndoaXRlXCIvPlxuXHRcdFx0XHRcdDxyZWN0IGNsYXNzPVwid2ViaXhfaGludF9vdmVybGF5X2hvbGUgd2ViaXhfaGludF9vdmVybGF5X2hvbGVfZWxcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIwXCIgaGVpZ2h0PVwiMFwiIGZpbGw9XCJ3aGl0ZVwiLz5cblx0XHRcdFx0PC9tYXNrPlxuXHRcdFx0PC9kZWZzPlxuXHRcdFx0PHJlY3QgY2xhc3M9XCJ3ZWJpeF9oaW50X292ZXJsYXlfaG9sZVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBtYXNrPVwidXJsKCNob2xlKVwiIC8+XG5cdFx0PC9zdmc+YDtcblx0XHR0aGlzLl9zZXRQcm9wZXJ0aWVzKHN0ZXBFbCk7XG5cdFx0dGhpcy5jYWxsRXZlbnQoXCJvbkFmdGVyU3RhcnRcIiwgW10pO1xuXHR9LFxuXHRfZHJhd0hpbnQoKSB7XG5cdFx0bGV0IHNldHRpbmdzID0gdGhpcy5jb25maWc7XG5cdFx0dGhpcy4kdmlldy5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJ3ZWJpeF9oaW50XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz0nd2ViaXhfaGludF90aXRsZSc+JHt0aGlzLl9zdGVwLnRpdGxlP3RoaXMuX3N0ZXAudGl0bGU6XCJcIn08L3NwYW4+XG5cdFx0XHQ8cCBjbGFzcz1cIndlYml4X2hpbnRfbGFiZWxcIj4ke3RoaXMuX3N0ZXAudGV4dH08L3A+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwid2ViaXhfaGludF9wcm9ncmVzc1wiPlxuXHRcdFx0XHQke3RoaXMuX2krMX0vJHt0aGlzLmNvbmZpZy5zdGVwcy5sZW5ndGh9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ3ZWJpeF9oaW50X2J1dHRvbnNcIj5cblx0XHRcdFx0JHtzZXR0aW5ncy5wcmV2QnV0dG9uIT09IGZhbHNlP2A8YnV0dG9uIGNsYXNzPVwid2ViaXhfaGludF9idXR0b24gd2ViaXhfaGludF9idXR0b25fcHJldiB3ZWJpeF9oaW50X2J1dHRvbl9oaWRkZW5cIj4ke3R5cGVvZiBzZXR0aW5ncy5wcmV2QnV0dG9uID09IFwic3RyaW5nXCI/c2V0dGluZ3MucHJldkJ1dHRvbjpgJHt3ZWJpeC5pMThuLmhpbnQucHJldn1gfTwvYnV0dG9uPmA6XCJcIn1cblx0XHRcdFx0JHtzZXR0aW5ncy5uZXh0QnV0dG9uIT09IGZhbHNlP2A8YnV0dG9uIGNsYXNzPVwid2ViaXhfaGludF9idXR0b24gd2ViaXhfaGludF9idXR0b25fbmV4dFwiPiR7dHlwZW9mIHNldHRpbmdzLm5leHRCdXR0b24gPT0gXCJzdHJpbmdcIj9zZXR0aW5ncy5uZXh0QnV0dG9uOmAke3dlYml4LmkxOG4uaGludC5uZXh0fWB9PC9idXR0b24+YDpcIlwifVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwid2ViaXhfaGludF9idXR0b25fY2xvc2VcIiB0aXRsZT1cIkNsb3NlXCI+JiMxMDAwNTs8L2J1dHRvbj5cblx0XHQ8L2Rpdj5gO1xuXHR9LFxuXHRfc2V0UHJvcGVydGllcyhzdGVwRWwsIHJlZnJlc2gpIHtcblx0XHRpZighc3RlcEVsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoIXdlYml4LmVudi5tb2JpbGUpIHtcblx0XHRcdHN0ZXBFbC5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XG5cdFx0fVxuXHRcdHRoaXMuX3N0ZXAgPSB0aGlzLmNvbmZpZy5zdGVwc1t0aGlzLl9pXTtcblx0XHR0aGlzLl9yZURyYXcoc3RlcEVsLCByZWZyZXNoKTtcblx0XHR0aGlzLl9oaW50ID0gdGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwiLndlYml4X2hpbnRcIik7XG5cblx0XHRsZXQgcGFkZGluZyA9IDMwO1xuXHRcdGxldCBkb2NFbGVtID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRcdGxldCBib3ggPSBzdGVwRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0bGV0IGVsTGVmdCA9IGJveC5sZWZ0ICsgdGhpcy5fc3RlcC5wYWRkaW5nO1xuXHRcdGxldCBoaWdobGlnaHRXaWR0aCA9IGJveC53aWR0aDtcblx0XHRsZXQgaGlnaGxpZ2h0SGVpZ2h0ID0gYm94LmhlaWdodDtcblx0XHRsZXQgaGludExlZnQgPSBlbExlZnQgLSB0aGlzLl9zdGVwLnBhZGRpbmc7XG5cdFx0bGV0IGhpbnRXaWR0aCA9IHRoaXMuX2hpbnQub2Zmc2V0V2lkdGg7XG5cdFx0bGV0IGhpbnRIZWlnaHQgPSB0aGlzLl9oaW50Lm9mZnNldEhlaWdodDtcblx0XHRsZXQgZWxUb3AgPSB3ZWJpeC5lbnYubW9iaWxlID8gYm94LnRvcCArIHRoaXMuX3N0ZXAucGFkZGluZyA6IGJveC50b3AgKyB0aGlzLl9zdGVwLnBhZGRpbmcgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cdFx0bGV0IGhpbnRUb3AgPSBlbFRvcCArIGhpZ2hsaWdodEhlaWdodCArIHRoaXMuX3N0ZXAucGFkZGluZyArIHBhZGRpbmc7XG5cdFx0bGV0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggJiYgZG9jRWxlbS5jbGllbnRXaWR0aCA/IE1hdGgubWluKHdpbmRvdy5pbm5lcldpZHRoLCBkb2NFbGVtLmNsaWVudFdpZHRoKSA6IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY0VsZW0uY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmNsaWVudFdpZHRoO1xuXHRcdGxldCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgZG9jRWxlbS5jbGllbnRIZWlnaHQgPyBNYXRoLm1pbih3aW5kb3cuaW5uZXJIZWlnaHQsIGRvY0VsZW0uY2xpZW50SGVpZ2h0KSA6IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2NFbGVtLmNsaWVudEhlaWdodCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uY2xpZW50SGVpZ2h0O1xuXHRcdFxuXHRcdHN0ZXBFbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhbGxcIjtcblx0XHRzdGVwRWwuc3R5bGUudXNlclNlbGVjdCA9IFwiaW5pdGlhbFwiO1xuXG5cdFx0Ly8gc2V0IGhpbnQgcG9zaXRpb25cblx0XHRpZihlbExlZnQgLSB3aW5kb3dXaWR0aCA+IDApIHtcblx0XHRcdGVsTGVmdCA9IGVsTGVmdCAtIHdpbmRvd1dpZHRoICsgaGludFdpZHRoICsgaGlnaGxpZ2h0V2lkdGg7XG5cdFx0fVxuXG5cdFx0aWYod2luZG93SGVpZ2h0IC8yIDwgZWxUb3ApIHsgLy8gYm90dG9tXG5cdFx0XHRoaW50VG9wID0gZWxUb3AgLSBoaW50SGVpZ2h0IC0gcGFkZGluZyAtIHRoaXMuX3N0ZXAucGFkZGluZyoyO1xuXHRcdH0gZWxzZSBpZih3aW5kb3dXaWR0aCAvMiA8IGVsTGVmdCAmJiBlbExlZnQgKyBoaW50V2lkdGggPCB3aW5kb3dXaWR0aCAmJiBoaWdobGlnaHRXaWR0aCArIGhpbnRXaWR0aCA8IHdpbmRvd1dpZHRoKSB7IC8vIHJpZ2h0XG5cdFx0XHRoaW50VG9wID0gaGlnaGxpZ2h0SGVpZ2h0IC8gMiArIGVsVG9wIC0gdGhpcy5fc3RlcC5wYWRkaW5nO1xuXHRcdFx0aGludExlZnQgPSBlbExlZnQgLSBoaW50V2lkdGggLSB0aGlzLl9zdGVwLnBhZGRpbmcgLSBwYWRkaW5nO1xuXHRcdH0gZWxzZSBpZih3aW5kb3dXaWR0aCAvMiA+IGVsTGVmdCAmJiBlbExlZnQgKyBoaW50V2lkdGggKyBoaWdobGlnaHRXaWR0aCA8IHdpbmRvd1dpZHRoKSB7IC8vIGxlZnRcblx0XHRcdGhpbnRMZWZ0ID0gaGlnaGxpZ2h0V2lkdGggKyBlbExlZnQgKyBwYWRkaW5nO1xuXHRcdFx0aGludFRvcCA9IGVsVG9wIC0gdGhpcy5fc3RlcC5wYWRkaW5nO1xuXHRcdH0gZWxzZSBpZihoaW50VG9wPndpbmRvd0hlaWdodCAmJiBoaW50SGVpZ2h0K2hpZ2hsaWdodEhlaWdodDx3aW5kb3dIZWlnaHQpey8vdG9wLCBidXQgaGludCBkb2VzIG5vdCBmaXRcblx0XHRcdGhpbnRUb3AgPSBlbFRvcCAtIGhpbnRIZWlnaHQgLSBwYWRkaW5nIC0gdGhpcy5fc3RlcC5wYWRkaW5nKjI7XG5cdFx0fSBlbHNlIGlmKGhpbnRUb3AgPndpbmRvd0hlaWdodCB8fCBoaW50VG9wK2hpbnRIZWlnaHQ+d2luZG93SGVpZ2h0KXtcblx0XHRcdGhpbnRMZWZ0ID0gZWxMZWZ0IC0gaGludFdpZHRoIC0gdGhpcy5fc3RlcC5wYWRkaW5nKjIgLSBwYWRkaW5nO1xuXHRcdFx0aGludFRvcCA9IGVsVG9wIC0gdGhpcy5fc3RlcC5wYWRkaW5nO1xuXHRcdH1cblxuXHRcdGlmKGhpbnRMZWZ0ICsgaGludFdpZHRoID4gd2luZG93V2lkdGgpIHsgLy8gZm9yIG92ZXJmbG93XG5cdFx0XHRoaW50TGVmdCA9IHdpbmRvd1dpZHRoIC0gaGludFdpZHRoO1xuXHRcdH0gZWxzZSBpZihoaW50VG9wIDwgMCB8fCBoaW50VG9wID4gd2luZG93SGVpZ2h0KSB7XG5cdFx0XHRoaW50VG9wID0gcGFkZGluZztcblx0XHR9IGVsc2UgaWYod2luZG93V2lkdGggPCBoaWdobGlnaHRXaWR0aCB8fCBoaW50TGVmdCA8IDApIHtcblx0XHRcdGhpbnRMZWZ0ID0gcGFkZGluZztcblx0XHR9XG5cblx0XHRpZih0aGlzLl9pc0ludGVnZXIodGhpcy5fc3RlcC50b3ApKSB7XG5cdFx0XHRoaW50VG9wID0gdGhpcy5fc3RlcC50b3A7XG5cdFx0fSBlbHNlIGlmKHRoaXMuX2lzSW50ZWdlcih0aGlzLmNvbmZpZy50b3ApKXtcblx0XHRcdGhpbnRUb3AgPSB0aGlzLmNvbmZpZy50b3A7XG5cdFx0fVxuXHRcdGlmKHRoaXMuX2lzSW50ZWdlcih0aGlzLl9zdGVwLmxlZnQpKSB7XG5cdFx0XHRoaW50TGVmdCA9IHRoaXMuX3N0ZXAubGVmdDtcblx0XHR9IGVsc2UgaWYodGhpcy5faXNJbnRlZ2VyKHRoaXMuY29uZmlnLmxlZnQpKXtcblx0XHRcdGhpbnRMZWZ0ID0gdGhpcy5jb25maWcubGVmdDtcblx0XHR9XG5cblx0XHRpZih3ZWJpeC5lbnYubW9iaWxlKSB7XG5cdFx0XHRzdGVwRWwuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xuXHRcdH1cblx0XHRpZih0aGlzLl90aW1lcikge2NsZWFyVGltZW91dCh0aGlzLl90aW1lcik7fVxuXHRcdHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLl9oaW50LnN0eWxlLmNzc1RleHQgPSBgdG9wOiR7aGludFRvcH1weDsgbGVmdDoke2hpbnRMZWZ0fXB4O2A7XG5cdFx0XHR0aGlzLl9zZXRBdHRyaWJ1dGVzKHRoaXMuJHZpZXcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndlYml4X2hpbnRfb3ZlcmxheV9ob2xlX2VsXCIpWzBdLCB7XCJ4XCI6ZWxMZWZ0LXRoaXMuX3N0ZXAucGFkZGluZyoyLCBcInlcIjplbFRvcC10aGlzLl9zdGVwLnBhZGRpbmcqMiwgXCJ3aWR0aFwiOmhpZ2hsaWdodFdpZHRoK3RoaXMuX3N0ZXAucGFkZGluZyAqMiwgXCJoZWlnaHRcIjpoaWdobGlnaHRIZWlnaHQrdGhpcy5fc3RlcC5wYWRkaW5nKjJ9KTtcblx0XHRcdHdlYml4Lmh0bWwuYWRkQ3NzKHRoaXMuZ2V0Tm9kZSgpLCBcIndlYml4X2hpbnRfYW5pbWF0ZWRcIik7XG5cdFx0fSwgNTAwKTtcblx0fSxcblx0X3NldFJlc2l6ZSgpIHtcblx0XHR0aGlzLl9ldmVudFJlc2l6ZSA9IHdlYml4LmF0dGFjaEV2ZW50KFwib25SZXNpemVcIiwgKCkgPT4ge1xuXHRcdFx0aWYodGhpcy5nZXRDdXJyZW50U3RlcCgpICYmIHRoaXMuX2kgIT09IHRoaXMuY29uZmlnLnN0ZXBzLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLl9yZWZyZXNoKHRoaXMuZ2V0Q3VycmVudFN0ZXAoKSwgZmFsc2UsIHRydWUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXHRfaXNJbnRlZ2VyKHZhbHVlKSB7XG5cdFx0aWYoTnVtYmVyLmlzSW50ZWdlcikgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodmFsdWUpO1xuXHRcdHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgJiYgXG5cdFx0XHRpc0Zpbml0ZSh2YWx1ZSkgJiYgXG5cdFx0XHRNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWU7XG5cdH0sXG5cdF9zZXRBdHRyaWJ1dGVzKGVsLCBhdHRycykge1xuXHRcdGZvcih2YXIga2V5IGluIGF0dHJzKSB7XG5cdFx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0XHR9XG5cdH0sXG5cdF9yZURyYXcoc3RlcEVsLCByZWZyZXNoKSB7XG5cdFx0bGV0IHRpdGxlID0gdGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwiLndlYml4X2hpbnRfdGl0bGVcIik7XG5cdFx0bGV0IGVsO1xuXG5cdFx0dGhpcy5fc3RlcC5ldmVudEVsP2VsID0gdGhpcy5fZ2V0RWwodGhpcy5fc3RlcC5ldmVudEVsKTplbCA9IHN0ZXBFbDtcblx0XHRpZih0aGlzLl9pID4gMCAmJiAhcmVmcmVzaCkge1xuXHRcdFx0d2ViaXguaHRtbC5yZW1vdmVDc3ModGhpcy5nZXROb2RlKCksIFwid2ViaXhfaGludF9hbmltYXRlZFwiKTtcblx0XHRcdHRpdGxlLmlubmVySFRNTCA9IHRoaXMuX3N0ZXAudGl0bGUgfHwgXCJcIjtcblx0XHRcdHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcIi53ZWJpeF9oaW50X2xhYmVsXCIpLmlubmVySFRNTCA9IHRoaXMuX3N0ZXAudGV4dCB8fCBcIlwiO1xuXHRcdFx0dGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwiLndlYml4X2hpbnRfcHJvZ3Jlc3NcIikuaW5uZXJIVE1MID0gYCR7dGhpcy5faSsxfS8ke3RoaXMuY29uZmlnLnN0ZXBzLmxlbmd0aH1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9kcmF3SGludCgpO1xuXHRcdFx0dGhpcy5fc2V0RXZlbnRzQnV0dG9ucyhlbCk7XG5cdFx0fVxuXHRcdGlmKCF0aGlzLl9zdGVwLnRpdGxlICYmIHRpdGxlKSB7XG5cdFx0XHR0aXRsZS5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcblx0XHR9XG5cdFx0dGhpcy5fc2V0RWxFdmVudHMoZWwpO1xuXG5cdFx0aWYodGhpcy5fcHJldkJ1dHRvbikge1xuXHRcdFx0aWYodGhpcy5faSA+IDApIHsgLy8gcHJldmlvdXMgYnV0dG9uIHNob3dcblx0XHRcdFx0d2ViaXguaHRtbC5yZW1vdmVDc3ModGhpcy5fcHJldkJ1dHRvbiwgXCJ3ZWJpeF9oaW50X2J1dHRvbl9oaWRkZW5cIik7XG5cdFx0XHR9IGVsc2UgaWYodGhpcy5fcHJldkJ1dHRvbiAmJiAhdGhpcy5fcHJldkJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJ3ZWJpeF9oaW50X2J1dHRvbl9oaWRkZW5cIikpIHtcblx0XHRcdFx0d2ViaXguaHRtbC5hZGRDc3ModGhpcy5fcHJldkJ1dHRvbiwgXCJ3ZWJpeF9oaW50X2J1dHRvbl9oaWRkZW5cIik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGlmKHRoaXMuX2kgPT09IHRoaXMuY29uZmlnLnN0ZXBzLmxlbmd0aCAtMSAmJiB0aGlzLl9uZXh0QnV0dG9uKSB7IC8vIG5leHQgYnV0dG9uIHRleHRcblx0XHRcdHRoaXMuX25leHRCdXR0b24uaW5uZXJIVE1MID0gYCR7dHlwZW9mIHRoaXMuY29uZmlnLm5leHRCdXR0b24gPT0gXCJzdHJpbmdcIj90aGlzLmNvbmZpZy5uZXh0QnV0dG9uOmAke3dlYml4LmkxOG4uaGludC5sYXN0fWB9YDtcblx0XHR9XG5cdH0sXG5cdF9zZXRCb2R5Q2xhc3MocmVtb3ZlKSB7XG5cdFx0bGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXHRcdGlmKHJlbW92ZSkge1xuXHRcdFx0d2ViaXguaHRtbC5yZW1vdmVDc3MoYm9keSwgXCJ3ZWJpeF9oaW50X292ZXJmbG93XCIpO1xuXHRcdH0gZWxzZSBpZighYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJ3ZWJpeF9oaW50X292ZXJmbG93XCIpKSB7XG5cdFx0XHR3ZWJpeC5odG1sLmFkZENzcyhib2R5LCBcIndlYml4X2hpbnRfb3ZlcmZsb3dcIik7XG5cdFx0fVxuXHR9LFxuXHRfZ2V0RWwoZWwpIHtcblx0XHRpZigkJChlbCkpIHtcblx0XHRcdHJldHVybiAkJChlbCkuZ2V0Tm9kZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG5cdFx0fVxuXHR9LFxuXHRfZHJhd1N0ZXBzKHJlZnJlc2gpIHtcblx0XHRpZih0aGlzLmNvbmZpZy5zdGVwc1t0aGlzLl9pXSkge1xuXHRcdFx0bGV0IGVsID0gdGhpcy5fZ2V0RWwodGhpcy5jb25maWcuc3RlcHNbdGhpcy5faV0uZWwpO1xuXHRcdFx0aWYodGhpcy5faSA9PT0gMCAmJiAhcmVmcmVzaCkge1xuXHRcdFx0XHR0aGlzLmNhbGxFdmVudChcIm9uQmVmb3JlU3RhcnRcIiwgW10pO1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHsgLy8gZm9yIGZpcnN0IGluaXRcblx0XHRcdFx0XHR0aGlzLl9kcmF3T3ZlcihlbCk7XG5cdFx0XHRcdH0sIDEwMCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9zZXRQcm9wZXJ0aWVzKGVsLCByZWZyZXNoKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fc2tpcCgpO1xuXHRcdH1cblx0fSxcblx0X3NldEV2ZW50c0J1dHRvbnMoKSB7XG5cdFx0dGhpcy5fcHJldkJ1dHRvbiA9IHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvckFsbChcIi53ZWJpeF9oaW50X2J1dHRvbl9wcmV2XCIpWzBdO1xuXHRcdHRoaXMuX25leHRCdXR0b24gPSB0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud2ViaXhfaGludF9idXR0b25fbmV4dFwiKVswXTtcblx0XHRsZXQgZWw7XG5cdFx0aWYodGhpcy5fbmV4dEJ1dHRvbikge1xuXHRcdFx0d2ViaXguZXZlbnQodGhpcy5fbmV4dEJ1dHRvbiwgXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuX25leHQoZWwsIFwibmV4dFwiKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZih0aGlzLl9wcmV2QnV0dG9uKSB7XG5cdFx0XHR3ZWJpeC5ldmVudCh0aGlzLl9wcmV2QnV0dG9uLCBcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdFx0dGhpcy5fbmV4dChlbCwgXCJwcmV2aW91c1wiKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHR3ZWJpeC5ldmVudCh0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIud2ViaXhfaGludF9idXR0b25fY2xvc2VcIiksIFwiY2xpY2tcIiwgKCkgPT4geyB0aGlzLl9za2lwKCk7IH0pO1xuXHR9LFxuXHRfc2V0RWxFdmVudHMoc3RlcEVsKSB7XG5cdFx0bGV0IGV2ZW50U3RlcCA9IHRoaXMuX3N0ZXAuZXZlbnQ7XG5cdFx0c3RlcEVsLmZvY3VzKCk7XG5cdFx0aWYoZXZlbnRTdGVwKSB7XG5cdFx0XHRpZihldmVudFN0ZXAgPT09IFwiZW50ZXJcIikge1xuXHRcdFx0XHRldmVudFN0ZXAgPSBcImtleWRvd25cIjtcblx0XHRcdH1cblx0XHRcdGlmKHRoaXMuX2V2ZW50T2JqKSB7XG5cdFx0XHRcdHdlYml4LmV2ZW50UmVtb3ZlKHRoaXMuX2V2ZW50T2JqKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2V2ZW50T2JqID0gd2ViaXguZXZlbnQoc3RlcEVsLCBldmVudFN0ZXAsIChlKSA9PiB7XG5cdFx0XHRcdGlmKGV2ZW50U3RlcCA9PSBlLnR5cGUpIHtcblx0XHRcdFx0XHRpZihlLnR5cGUgPT09IFwia2V5ZG93blwiICYmIGUua2V5Q29kZSAhPT0gMTMpIHJldHVybjtcblx0XHRcdFx0XHRzdGVwRWwuZm9jdXMoKTtcblx0XHRcdFx0XHR0aGlzLl9uZXh0KHN0ZXBFbCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9LFxuXHRfbmV4dChzdGVwRWwsIGFjdGlvbikge1xuXHRcdGFjdGlvbiA9IGFjdGlvbiB8fCBcIm5leHRcIjtcblx0XHRpZiAodGhpcy5fc3RlcC5uZXh0ICYmIGFjdGlvbiA9PT0gXCJuZXh0XCIgfHwgdGhpcy5fc3RlcC5wcmV2aW91cyAmJiBhY3Rpb24gPT09IFwicHJldmlvdXNcIikge1xuXHRcdFx0bGV0IHByb21pc2UgPSB0aGlzLl9zdGVwW2FjdGlvbl0oKTtcblx0XHRcdGlmIChwcm9taXNlKXtcblx0XHRcdFx0cHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5fbmV4dFN0ZXAoc3RlcEVsLCBhY3Rpb24pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX25leHRTdGVwKHN0ZXBFbCwgYWN0aW9uKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fbmV4dFN0ZXAoc3RlcEVsLCBhY3Rpb24pO1xuXHRcdH1cblx0fSxcblx0X25leHRTdGVwKHN0ZXBFbCwgYWN0aW9uKSB7XG5cdFx0bGV0IGVsID0gdGhpcy5fZ2V0RWwodGhpcy5fc3RlcC5lbCk7XG5cdFx0ZWwuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiXCI7XG5cdFx0ZWwuc3R5bGUudXNlclNlbGVjdCA9IFwiXCI7XG5cdFx0ZWwuYmx1cigpO1xuXHRcdGlmKGFjdGlvbiAhPT0gXCJwcmV2aW91c1wiKSB7XG5cdFx0XHR0aGlzLl9pKys7XG5cdFx0XHR0aGlzLl9kcmF3U3RlcHMoKTtcblx0XHRcdHRoaXMuY2FsbEV2ZW50KFwib25OZXh0XCIsIFt0aGlzLl9pKzFdKTtcblx0XHR9XG5cdFx0aWYoYWN0aW9uID09PSBcInByZXZpb3VzXCIpIHtcblx0XHRcdHRoaXMuY2FsbEV2ZW50KFwib25QcmV2aW91c1wiLCBbdGhpcy5faV0pO1xuXHRcdFx0dGhpcy5fcmVmcmVzaCh0aGlzLl9pLS0sIGZhbHNlKTtcblx0XHR9XG5cdH0sXG5cdF9za2lwKCkge1xuXHRcdGlmICh0aGlzLl9pID09PSAtMSkgcmV0dXJuO1xuXHRcdGlmKHRoaXMuX2V2ZW50T2JqKSB7XG5cdFx0XHR3ZWJpeC5ldmVudFJlbW92ZSh0aGlzLl9ldmVudE9iaik7XG5cdFx0XHRkZWxldGUgdGhpcy5fZXZlbnRPYmo7XG5cdFx0fVxuXHRcdGlmKHRoaXMuX2V2ZW50UmVzaXplKSB7XG5cdFx0XHR3ZWJpeC5kZXRhY2hFdmVudCh0aGlzLl9ldmVudFJlc2l6ZSk7XG5cdFx0XHRkZWxldGUgdGhpcy5fZXZlbnRSZXNpemU7XG5cdFx0fVxuXHRcdHRoaXMuY2FsbEV2ZW50KFwib25Ta2lwXCIsIFt0aGlzLl9pKzFdKTtcblx0XHR0aGlzLmhpZGUoKTtcblx0XHR0aGlzLl9zZXRCb2R5Q2xhc3MoXCJyZW1vdmVcIik7XG5cdFx0aWYodGhpcy5faSA9PT0gdGhpcy5jb25maWcuc3RlcHMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLmNhbGxFdmVudChcIm9uRW5kXCIsIFt0aGlzLl9pKzFdKTtcblx0XHR9XG5cdH0sXG5cdF9yZWZyZXNoKGksIGZpcnN0RHJhdykge1xuXHRcdGlmKCF0aGlzLl9ldmVudFJlc2l6ZSkge1xuXHRcdFx0dGhpcy5fc2V0UmVzaXplKCk7XG5cdFx0fVxuXHRcdHRoaXMuX2kgPSBpLTE7XG5cdFx0dGhpcy5fc2V0Qm9keUNsYXNzKCk7XG5cdFx0aWYodGhpcy5faGludCkge1xuXHRcdFx0aWYodGhpcy5faGludC5wYXJlbnROb2RlKVxuXHRcdFx0XHR0aGlzLl9oaW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5faGludCk7XG5cdFx0XHR3ZWJpeC5odG1sLnJlbW92ZUNzcyh0aGlzLmdldE5vZGUoKSwgXCJ3ZWJpeF9oaW50X2FuaW1hdGVkXCIpO1xuXHRcdH1cblx0XHR0aGlzLnNob3coKTtcblx0XHRpZihmaXJzdERyYXcpIHtcblx0XHRcdGxldCBzdmcgPSB0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIik7XG5cdFx0XHRpZiAoc3ZnKVxuXHRcdFx0XHRzdmcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdmcpO1xuXHRcdFx0dGhpcy5fZHJhd1N0ZXBzKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2RyYXdTdGVwcyhcInJlZnJlc2hcIik7XG5cdFx0fVxuXHR9LFxuXHRzdGFydCgpIHtcblx0XHR0aGlzLl9yZWZyZXNoKDEsIHRydWUpO1xuXHR9LFxuXHRlbmQoKSB7XG5cdFx0dGhpcy5fc2tpcCgpO1xuXHR9LFxuXHRnZXRDdXJyZW50U3RlcCgpIHtcblx0XHRyZXR1cm4gdGhpcy5faSsxO1xuXHR9LFxuXHRyZXN1bWUoc3RlcE51bWJlcikge1xuXHRcdGlmKHRoaXMuX2hpbnQpe1xuXHRcdFx0c3RlcE51bWJlciA9IHN0ZXBOdW1iZXIgfHwgMTtcblx0XHRcdHRoaXMuX3JlZnJlc2goc3RlcE51bWJlcik7XG5cdFx0fVxuXHR9LFxuXHRnZXRTdGVwcygpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25maWcuc3RlcHM7XG5cdH0sXG5cdHNldFN0ZXBzKHZhbHVlKSB7XG5cdFx0dGhpcy5kZWZpbmUoXCJzdGVwc1wiLCB2YWx1ZSk7XG5cdH1cbn0sIHdlYml4LnVpLnZpZXcsIHdlYml4LkV2ZW50U3lzdGVtKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2hpbnQuanMiLCJleHBvcnQgbGV0IGJlID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiYmUtQllcIl0gPSB7XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwi0J3QsNGB0YLRg9C/0L3Ri1wiLFxuXHRcdHByZXY6IFwi0J/QsNC/0Y/RgNGN0LTQvdGWXCIsXG5cdFx0bGFzdDogXCLQmtCw0L3QtdGGINCi0YPRgNCwXCJcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vYmUuanMiLCIvKkdlcm1hbiAoR2VybWFueSkgbG9jYWxlKi9cbmV4cG9ydCBsZXQgZGUgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJkZS1ERVwiXSA9IHtcblx0aGludDp7XG5cdFx0bmV4dDogXCJOw6RjaHN0ZXJcIixcblx0XHRwcmV2OiBcIkJpc2hlcmlnZVwiLFxuXHRcdGxhc3Q6IFwiRW5kZSBUb3VyXCJcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9kZS5qcyIsImV4cG9ydCBsZXQgZW4gPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJlbi1VU1wiXT17XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwiTmV4dFwiLFxuXHRcdHByZXY6IFwiUHJldmlvdXNcIixcblx0XHRsYXN0OiBcIkVuZCBUb3VyXCJcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vZW4uanMiLCIvKlNwYW5pc2ggKFNwYWluLCBJbnRlcm5hdGlvbmFsIFNvcnQpIGxvY2FsZSovXG5leHBvcnQgbGV0IGVzID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiZXMtRVNcIl0gPSB7XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwiU2lndWllbnRlXCIsXG5cdFx0cHJldjogXCJBbnRlcmlvclwiLFxuXHRcdGxhc3Q6IFwiRmluIGRlIFZpYWplXCJcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9lcy5qcyIsImV4cG9ydCBsZXQgZnIgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJmci1GUlwiXT17XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwiUHJvY2hhaW5cIixcblx0XHRwcmV2OiBcIlByw6ljw6lkZW50XCIsXG5cdFx0bGFzdDogXCJFbmQgVG91clwiXG5cdH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2ZyLmpzIiwiLypJdGFsaWFuIChJdGFseSkgbG9jYWxlKi9cbmV4cG9ydCBsZXQgaXQgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJpdC1JVFwiXSA9IHtcblx0aGludDp7XG5cdFx0bmV4dDogXCJTZWd1ZW50ZVwiLFxuXHRcdHByZXY6IFwiUHJlY2VkZW50ZVwiLFxuXHRcdGxhc3Q6IFwiRW5kIFRvdXJcIlxuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2l0LmpzIiwiZXhwb3J0IGxldCBqYSA9IHdlYml4LmkxOG4ubG9jYWxlc1tcImphLUpQXCJdPXtcblx0aGludDp7XG5cdFx0bmV4dDogXCLmrKFcIixcblx0XHRwcmV2OiBcIuWJjVwiLFxuXHRcdGxhc3Q6IFwi57WC5LqG44OE44Ki44O8XCJcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vamEuanMiLCJleHBvcnQgbGV0IHB0ID0gd2ViaXguaTE4bi5sb2NhbGVzW1wicHQtQlJcIl0gPSB7XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwiUHLDs3hpbW9cIixcblx0XHRwcmV2OiBcIkFudGVyaW9yXCIsXG5cdFx0bGFzdDogXCJFbmQgVG91clwiXG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vcHQuanMiLCJleHBvcnQgbGV0IHJ1ID0gd2ViaXguaTE4bi5sb2NhbGVzW1wicnUtUlVcIl09e1xuXHRoaW50Ontcblx0XHRuZXh0OiBcItCh0LvQtdC00YPRjtGJ0LjQuVwiLFxuXHRcdHByZXY6IFwi0J/RgNC10LTRi9C00YPRidC40LlcIixcblx0XHRsYXN0OiBcItCa0L7QvdC10YYg0KLRg9GA0LBcIlxuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9ydS5qcyIsIi8qQ2hpbmVzZSAoU2ltcGxpZmllZCwgUFJDKSBsb2NhbGUqL1xuZXhwb3J0IGxldCB6aCA9IHdlYml4LmkxOG4ubG9jYWxlc1tcInpoLUNOXCJdID0ge1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIuS4i+S4gOS4qlwiLFxuXHRcdHByZXY6IFwi5Lul5YmNXCIsXG5cdFx0bGFzdDogXCLnu5PmnZ/lt6Hop4ZcIlxuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL3poLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==