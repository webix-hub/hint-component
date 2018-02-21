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
		hintTop = this._setPos("top") ? this._setPos("top") : hintTop;
		hintLeft = this._setPos("left") ? this._setPos("left") : hintLeft;

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
	_setPos: function _setPos(name) {
		if (this._isInteger(this._step[name])) {
			return this._step[name];
		} else if (this._isInteger(this.config[name]) && this._step[name] !== false) {
			return this.config[name];
		}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmJlZWUyODUyNWZlOGUxNDM5OTkiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9sb2NhbGVzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5sZXNzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vYmUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL2RlLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9lbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL2ZyLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9pdC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vamEuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL3B0LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9ydS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vemguanMiXSwibmFtZXMiOlsibG9jYWxlIiwiaGludCIsIm5leHQiLCJwcmV2IiwibGFzdCIsIndlYml4IiwiaTE4biIsImV4dGVuZCIsInByb3RvVUkiLCJuYW1lIiwiZGVmYXVsdHMiLCJzdGVwcyIsImJvcmRlcmxlc3MiLCJuZXh0QnV0dG9uIiwicHJldkJ1dHRvbiIsInRvcCIsImxlZnQiLCIkaW5pdCIsIiR2aWV3IiwiY2xhc3NOYW1lIiwiX2kiLCJhdHRhY2hFdmVudCIsIl9zZXRCb2R5Q2xhc3MiLCJfZXZlbnRPYmoiLCJldmVudFJlbW92ZSIsIl9ldmVudE9iakVzYyIsIl9ldmVudFJlc2l6ZSIsImRldGFjaEV2ZW50IiwiZXZlbnQiLCJkb2N1bWVudCIsImJvZHkiLCJlIiwia2V5Q29kZSIsIl9za2lwIiwiX3NldFJlc2l6ZSIsInN0ZXBzX3NldHRlciIsImNvbmZpZyIsIm5ld0NvbmZpZyIsImkiLCJsZW5ndGgiLCJwYWRkaW5nIiwidGV4dCIsInB1c2giLCJfZHJhd092ZXIiLCJzdGVwRWwiLCJpbm5lckhUTUwiLCJfc2V0UHJvcGVydGllcyIsImNhbGxFdmVudCIsIl9kcmF3SGludCIsInNldHRpbmdzIiwiX3N0ZXAiLCJ0aXRsZSIsInJlZnJlc2giLCJlbnYiLCJtb2JpbGUiLCJzY3JvbGxJbnRvVmlldyIsIl9yZURyYXciLCJfaGludCIsInF1ZXJ5U2VsZWN0b3IiLCJkb2NFbGVtIiwiZG9jdW1lbnRFbGVtZW50IiwiYm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZWxMZWZ0IiwiaGlnaGxpZ2h0V2lkdGgiLCJ3aWR0aCIsImhpZ2hsaWdodEhlaWdodCIsImhlaWdodCIsImhpbnRMZWZ0IiwiaGludFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJoaW50SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZWxUb3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImhpbnRUb3AiLCJ3aW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsIk1hdGgiLCJtaW4iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwidXNlclNlbGVjdCIsIl9zZXRQb3MiLCJfdGltZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY3NzVGV4dCIsIl9zZXRBdHRyaWJ1dGVzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImh0bWwiLCJhZGRDc3MiLCJnZXROb2RlIiwiX2lzSW50ZWdlciIsImdldEN1cnJlbnRTdGVwIiwiX3JlZnJlc2giLCJ2YWx1ZSIsIk51bWJlciIsImlzSW50ZWdlciIsImlzRmluaXRlIiwiZmxvb3IiLCJlbCIsImF0dHJzIiwia2V5Iiwic2V0QXR0cmlidXRlIiwiZXZlbnRFbCIsIl9nZXRFbCIsInJlbW92ZUNzcyIsIl9zZXRFdmVudHNCdXR0b25zIiwibWFyZ2luIiwiX3NldEVsRXZlbnRzIiwiX3ByZXZCdXR0b24iLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIl9uZXh0QnV0dG9uIiwicmVtb3ZlIiwiJCQiLCJfZHJhd1N0ZXBzIiwicXVlcnlTZWxlY3RvckFsbCIsIl9uZXh0IiwiZXZlbnRTdGVwIiwiZm9jdXMiLCJ0eXBlIiwiYWN0aW9uIiwicHJldmlvdXMiLCJwcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfbmV4dFN0ZXAiLCJibHVyIiwiaGlkZSIsImZpcnN0RHJhdyIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInNob3ciLCJzdmciLCJzdGFydCIsImVuZCIsInJlc3VtZSIsInN0ZXBOdW1iZXIiLCJnZXRTdGVwcyIsInNldFN0ZXBzIiwiZGVmaW5lIiwidWkiLCJ2aWV3IiwiRXZlbnRTeXN0ZW0iLCJiZSIsImxvY2FsZXMiLCJkZSIsImVuIiwiZXMiLCJmciIsIml0IiwiamEiLCJwdCIsInJ1IiwiemgiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVPLElBQUlBLDBCQUFTO0FBQ25CQyxPQUFNO0FBQ0xDLFFBQU0sTUFE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QXJDLEM7Ozs7Ozs7Ozs7OztBQ0FBLElBQUk0SixrQkFBSzNKLE1BQU1DLElBQU4sQ0FBV21KLE9BQVgsQ0FBbUIsT0FBbkIsSUFBOEI7QUFDN0N4SixPQUFLO0FBQ0pDLFFBQU0sU0FERjtBQUVKQyxRQUFNLFVBRkY7QUFHSkMsUUFBTTtBQUhGO0FBRHdDLENBQXZDLEM7Ozs7Ozs7Ozs7OztBQ0FBLElBQUk2SixrQkFBSzVKLE1BQU1DLElBQU4sQ0FBV21KLE9BQVgsQ0FBbUIsT0FBbkIsSUFBNEI7QUFDM0N4SixPQUFLO0FBQ0pDLFFBQU0sV0FERjtBQUVKQyxRQUFNLFlBRkY7QUFHSkMsUUFBTTtBQUhGO0FBRHNDLENBQXJDLEM7Ozs7Ozs7Ozs7OztBQ0FQO0FBQ08sSUFBSThKLGtCQUFLN0osTUFBTUMsSUFBTixDQUFXbUosT0FBWCxDQUFtQixPQUFuQixJQUE4QjtBQUM3Q3hKLE9BQUs7QUFDSkMsUUFBTSxLQURGO0FBRUpDLFFBQU0sSUFGRjtBQUdKQyxRQUFNO0FBSEY7QUFEd0MsQ0FBdkMsQyIsImZpbGUiOiJoaW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvY29kZWJhc2UvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMmJlZWUyODUyNWZlOGUxNDM5OTkiLCJpbXBvcnQgXCIuL2kxOG4vZW5cIjtcbmltcG9ydCBcIi4vaTE4bi9mclwiO1xuaW1wb3J0IFwiLi9pMThuL2JlXCI7XG5pbXBvcnQgXCIuL2kxOG4vZGVcIjtcbmltcG9ydCBcIi4vaTE4bi9lc1wiO1xuaW1wb3J0IFwiLi9pMThuL2l0XCI7XG5pbXBvcnQgXCIuL2kxOG4vamFcIjtcbmltcG9ydCBcIi4vaTE4bi9wdFwiO1xuaW1wb3J0IFwiLi9pMThuL3J1XCI7XG5pbXBvcnQgXCIuL2kxOG4vemhcIjtcblxuZXhwb3J0IGxldCBsb2NhbGUgPSB7XG5cdGhpbnQ6IHtcblx0XHRuZXh0OiBcIk5leHRcIixcblx0XHRwcmV2OiBcIlByZXZpb3VzXCIsXG5cdFx0bGFzdDogXCJFbmQgVG91clwiXG5cdH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9sb2NhbGVzLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvaGludC5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBcIi4vaGludC5sZXNzXCI7XG5pbXBvcnQgeyBsb2NhbGUgfSBmcm9tIFwiLi9sb2NhbGVzXCI7XG5cbndlYml4LmkxOG4uaGludCA9IHdlYml4LmV4dGVuZCh3ZWJpeC5pMThuLCBsb2NhbGUpLmhpbnQ7XG5cbndlYml4LnByb3RvVUkoe1xuXHRuYW1lOiBcImhpbnRcIixcblx0ZGVmYXVsdHM6IHtcblx0XHRzdGVwczogW10sXG5cdFx0Ym9yZGVybGVzczogdHJ1ZSxcblx0XHRuZXh0QnV0dG9uOiB0cnVlLFxuXHRcdHByZXZCdXR0b246IHRydWUsXG5cdFx0dG9wOiBmYWxzZSxcblx0XHRsZWZ0OiBmYWxzZVxuXHR9LFxuXHQkaW5pdCgpIHtcblx0XHR0aGlzLiR2aWV3LmNsYXNzTmFtZSArPSBcIiB3ZWJpeF9oaW50X3ZpZXdcIjtcblx0XHR0aGlzLl9pID0gLTE7XG5cdFx0dGhpcy5hdHRhY2hFdmVudChcIm9uRGVzdHJ1Y3RcIiwgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc2V0Qm9keUNsYXNzKFwicmVtb3ZlXCIpO1xuXHRcdFx0aWYodGhpcy5fZXZlbnRPYmopIHtcblx0XHRcdFx0d2ViaXguZXZlbnRSZW1vdmUodGhpcy5fZXZlbnRPYmopO1xuXHRcdFx0fVxuXHRcdFx0aWYodGhpcy5fZXZlbnRPYmpFc2MpIHtcblx0XHRcdFx0d2ViaXguZXZlbnRSZW1vdmUodGhpcy5fZXZlbnRPYmpFc2MpO1xuXHRcdFx0fVxuXHRcdFx0aWYodGhpcy5fZXZlbnRSZXNpemUpIHtcblx0XHRcdFx0d2ViaXguZGV0YWNoRXZlbnQodGhpcy5fZXZlbnRSZXNpemUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuX2V2ZW50T2JqRXNjID0gd2ViaXguZXZlbnQoZG9jdW1lbnQuYm9keSxcImtleWRvd25cIiwgKGUpID0+IHtcblx0XHRcdC8vIGVzY2FwZVxuXHRcdFx0aWYgKGUua2V5Q29kZSA9PSAyNyl7XG5cdFx0XHRcdHRoaXMuX3NraXAoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLl9zZXRSZXNpemUoKTtcblx0fSxcblx0c3RlcHNfc2V0dGVyKGNvbmZpZykge1xuXHRcdGxldCBuZXdDb25maWcgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNvbmZpZy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uZmlnW2ldLnBhZGRpbmcgPSBjb25maWdbaV0ucGFkZGluZyB8fCAwO1xuXHRcdFx0Y29uZmlnW2ldLnRleHQgPSBjb25maWdbaV0udGV4dCB8fCBcIlwiO1xuXHRcdFx0bmV3Q29uZmlnLnB1c2goY29uZmlnW2ldKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ld0NvbmZpZztcblx0fSxcblx0X2RyYXdPdmVyKHN0ZXBFbCkge1xuXHRcdHRoaXMuJHZpZXcuaW5uZXJIVE1MICs9IGA8c3ZnIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGNsYXNzPVwid2ViaXhfaGludF9vdmVybGF5XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIj5cblx0XHRcdDxkZWZzPlxuXHRcdFx0XHQ8bWFzayBpZD1cImhvbGVcIj5cblx0XHRcdFx0XHQ8cmVjdCBjbGFzcz1cIndlYml4X2hpbnRfb3ZlcmxheV9ob2xlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbGw9XCJ3aGl0ZVwiLz5cblx0XHRcdFx0XHQ8cmVjdCBjbGFzcz1cIndlYml4X2hpbnRfb3ZlcmxheV9ob2xlIHdlYml4X2hpbnRfb3ZlcmxheV9ob2xlX2VsXCIgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMFwiIGhlaWdodD1cIjBcIiBmaWxsPVwid2hpdGVcIi8+XG5cdFx0XHRcdDwvbWFzaz5cblx0XHRcdDwvZGVmcz5cblx0XHRcdDxyZWN0IGNsYXNzPVwid2ViaXhfaGludF9vdmVybGF5X2hvbGVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgbWFzaz1cInVybCgjaG9sZSlcIiAvPlxuXHRcdDwvc3ZnPmA7XG5cdFx0dGhpcy5fc2V0UHJvcGVydGllcyhzdGVwRWwpO1xuXHRcdHRoaXMuY2FsbEV2ZW50KFwib25BZnRlclN0YXJ0XCIsIFtdKTtcblx0fSxcblx0X2RyYXdIaW50KCkge1xuXHRcdGxldCBzZXR0aW5ncyA9IHRoaXMuY29uZmlnO1xuXHRcdHRoaXMuJHZpZXcuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwid2ViaXhfaGludFwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9J3dlYml4X2hpbnRfdGl0bGUnPiR7dGhpcy5fc3RlcC50aXRsZT90aGlzLl9zdGVwLnRpdGxlOlwiXCJ9PC9zcGFuPlxuXHRcdFx0PHAgY2xhc3M9XCJ3ZWJpeF9oaW50X2xhYmVsXCI+JHt0aGlzLl9zdGVwLnRleHR9PC9wPlxuXHRcdFx0PGRpdiBjbGFzcz1cIndlYml4X2hpbnRfcHJvZ3Jlc3NcIj5cblx0XHRcdFx0JHt0aGlzLl9pKzF9LyR7dGhpcy5jb25maWcuc3RlcHMubGVuZ3RofVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwid2ViaXhfaGludF9idXR0b25zXCI+XG5cdFx0XHRcdCR7c2V0dGluZ3MucHJldkJ1dHRvbiE9PSBmYWxzZT9gPGJ1dHRvbiBjbGFzcz1cIndlYml4X2hpbnRfYnV0dG9uIHdlYml4X2hpbnRfYnV0dG9uX3ByZXYgd2ViaXhfaGludF9idXR0b25faGlkZGVuXCI+JHt0eXBlb2Ygc2V0dGluZ3MucHJldkJ1dHRvbiA9PSBcInN0cmluZ1wiP3NldHRpbmdzLnByZXZCdXR0b246YCR7d2ViaXguaTE4bi5oaW50LnByZXZ9YH08L2J1dHRvbj5gOlwiXCJ9XG5cdFx0XHRcdCR7c2V0dGluZ3MubmV4dEJ1dHRvbiE9PSBmYWxzZT9gPGJ1dHRvbiBjbGFzcz1cIndlYml4X2hpbnRfYnV0dG9uIHdlYml4X2hpbnRfYnV0dG9uX25leHRcIj4ke3R5cGVvZiBzZXR0aW5ncy5uZXh0QnV0dG9uID09IFwic3RyaW5nXCI/c2V0dGluZ3MubmV4dEJ1dHRvbjpgJHt3ZWJpeC5pMThuLmhpbnQubmV4dH1gfTwvYnV0dG9uPmA6XCJcIn1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cIndlYml4X2hpbnRfYnV0dG9uX2Nsb3NlXCIgdGl0bGU9XCJDbG9zZVwiPiYjMTAwMDU7PC9idXR0b24+XG5cdFx0PC9kaXY+YDtcblx0fSxcblx0X3NldFByb3BlcnRpZXMoc3RlcEVsLCByZWZyZXNoKSB7XG5cdFx0aWYoIXN0ZXBFbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKCF3ZWJpeC5lbnYubW9iaWxlKSB7XG5cdFx0XHRzdGVwRWwuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xuXHRcdH1cblx0XHR0aGlzLl9zdGVwID0gdGhpcy5jb25maWcuc3RlcHNbdGhpcy5faV07XG5cdFx0dGhpcy5fcmVEcmF3KHN0ZXBFbCwgcmVmcmVzaCk7XG5cdFx0dGhpcy5faGludCA9IHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcIi53ZWJpeF9oaW50XCIpO1xuXG5cdFx0bGV0IHBhZGRpbmcgPSAzMDtcblx0XHRsZXQgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0XHRsZXQgYm94ID0gc3RlcEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGxldCBlbExlZnQgPSBib3gubGVmdCArIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHRsZXQgaGlnaGxpZ2h0V2lkdGggPSBib3gud2lkdGg7XG5cdFx0bGV0IGhpZ2hsaWdodEhlaWdodCA9IGJveC5oZWlnaHQ7XG5cdFx0bGV0IGhpbnRMZWZ0ID0gZWxMZWZ0IC0gdGhpcy5fc3RlcC5wYWRkaW5nO1xuXHRcdGxldCBoaW50V2lkdGggPSB0aGlzLl9oaW50Lm9mZnNldFdpZHRoO1xuXHRcdGxldCBoaW50SGVpZ2h0ID0gdGhpcy5faGludC5vZmZzZXRIZWlnaHQ7XG5cdFx0bGV0IGVsVG9wID0gd2ViaXguZW52Lm1vYmlsZSA/IGJveC50b3AgKyB0aGlzLl9zdGVwLnBhZGRpbmcgOiBib3gudG9wICsgdGhpcy5fc3RlcC5wYWRkaW5nICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xuXHRcdGxldCBoaW50VG9wID0gZWxUb3AgKyBoaWdobGlnaHRIZWlnaHQgKyB0aGlzLl9zdGVwLnBhZGRpbmcgKyBwYWRkaW5nO1xuXHRcdGxldCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICYmIGRvY0VsZW0uY2xpZW50V2lkdGggPyBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCwgZG9jRWxlbS5jbGllbnRXaWR0aCkgOiB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2NFbGVtLmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5jbGllbnRXaWR0aDtcblx0XHRsZXQgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICYmIGRvY0VsZW0uY2xpZW50SGVpZ2h0ID8gTWF0aC5taW4od2luZG93LmlubmVySGVpZ2h0LCBkb2NFbGVtLmNsaWVudEhlaWdodCkgOiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jRWxlbS5jbGllbnRIZWlnaHQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmNsaWVudEhlaWdodDtcblx0XHRcblx0XHRzdGVwRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYWxsXCI7XG5cdFx0c3RlcEVsLnN0eWxlLnVzZXJTZWxlY3QgPSBcImluaXRpYWxcIjtcblxuXHRcdC8vIHNldCBoaW50IHBvc2l0aW9uXG5cdFx0aWYoZWxMZWZ0IC0gd2luZG93V2lkdGggPiAwKSB7XG5cdFx0XHRlbExlZnQgPSBlbExlZnQgLSB3aW5kb3dXaWR0aCArIGhpbnRXaWR0aCArIGhpZ2hsaWdodFdpZHRoO1xuXHRcdH1cblxuXHRcdGlmKHdpbmRvd0hlaWdodCAvMiA8IGVsVG9wKSB7IC8vIGJvdHRvbVxuXHRcdFx0aGludFRvcCA9IGVsVG9wIC0gaGludEhlaWdodCAtIHBhZGRpbmcgLSB0aGlzLl9zdGVwLnBhZGRpbmcqMjtcblx0XHR9IGVsc2UgaWYod2luZG93V2lkdGggLzIgPCBlbExlZnQgJiYgZWxMZWZ0ICsgaGludFdpZHRoIDwgd2luZG93V2lkdGggJiYgaGlnaGxpZ2h0V2lkdGggKyBoaW50V2lkdGggPCB3aW5kb3dXaWR0aCkgeyAvLyByaWdodFxuXHRcdFx0aGludFRvcCA9IGhpZ2hsaWdodEhlaWdodCAvIDIgKyBlbFRvcCAtIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHRcdGhpbnRMZWZ0ID0gZWxMZWZ0IC0gaGludFdpZHRoIC0gdGhpcy5fc3RlcC5wYWRkaW5nIC0gcGFkZGluZztcblx0XHR9IGVsc2UgaWYod2luZG93V2lkdGggLzIgPiBlbExlZnQgJiYgZWxMZWZ0ICsgaGludFdpZHRoICsgaGlnaGxpZ2h0V2lkdGggPCB3aW5kb3dXaWR0aCkgeyAvLyBsZWZ0XG5cdFx0XHRoaW50TGVmdCA9IGhpZ2hsaWdodFdpZHRoICsgZWxMZWZ0ICsgcGFkZGluZztcblx0XHRcdGhpbnRUb3AgPSBlbFRvcCAtIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHR9IGVsc2UgaWYoaGludFRvcD53aW5kb3dIZWlnaHQgJiYgaGludEhlaWdodCtoaWdobGlnaHRIZWlnaHQ8d2luZG93SGVpZ2h0KXsvL3RvcCwgYnV0IGhpbnQgZG9lcyBub3QgZml0XG5cdFx0XHRoaW50VG9wID0gZWxUb3AgLSBoaW50SGVpZ2h0IC0gcGFkZGluZyAtIHRoaXMuX3N0ZXAucGFkZGluZyoyO1xuXHRcdH0gZWxzZSBpZihoaW50VG9wID53aW5kb3dIZWlnaHQgfHwgaGludFRvcCtoaW50SGVpZ2h0PndpbmRvd0hlaWdodCl7XG5cdFx0XHRoaW50TGVmdCA9IGVsTGVmdCAtIGhpbnRXaWR0aCAtIHRoaXMuX3N0ZXAucGFkZGluZyoyIC0gcGFkZGluZztcblx0XHRcdGhpbnRUb3AgPSBlbFRvcCAtIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHR9XG5cblx0XHRpZihoaW50TGVmdCArIGhpbnRXaWR0aCA+IHdpbmRvd1dpZHRoKSB7IC8vIGZvciBvdmVyZmxvd1xuXHRcdFx0aGludExlZnQgPSB3aW5kb3dXaWR0aCAtIGhpbnRXaWR0aDtcblx0XHR9IGVsc2UgaWYoaGludFRvcCA8IDAgfHwgaGludFRvcCA+IHdpbmRvd0hlaWdodCkge1xuXHRcdFx0aGludFRvcCA9IHBhZGRpbmc7XG5cdFx0fSBlbHNlIGlmKHdpbmRvd1dpZHRoIDwgaGlnaGxpZ2h0V2lkdGggfHwgaGludExlZnQgPCAwKSB7XG5cdFx0XHRoaW50TGVmdCA9IHBhZGRpbmc7XG5cdFx0fVxuXHRcdGhpbnRUb3AgPSB0aGlzLl9zZXRQb3MoXCJ0b3BcIik/dGhpcy5fc2V0UG9zKFwidG9wXCIpOmhpbnRUb3A7XG5cdFx0aGludExlZnQgPSB0aGlzLl9zZXRQb3MoXCJsZWZ0XCIpP3RoaXMuX3NldFBvcyhcImxlZnRcIik6aGludExlZnQ7XG5cblx0XHRpZih3ZWJpeC5lbnYubW9iaWxlKSB7XG5cdFx0XHRzdGVwRWwuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xuXHRcdH1cblx0XHRpZih0aGlzLl90aW1lcikge2NsZWFyVGltZW91dCh0aGlzLl90aW1lcik7fVxuXHRcdHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLl9oaW50LnN0eWxlLmNzc1RleHQgPSBgdG9wOiR7aGludFRvcH1weDsgbGVmdDoke2hpbnRMZWZ0fXB4O2A7XG5cdFx0XHR0aGlzLl9zZXRBdHRyaWJ1dGVzKHRoaXMuJHZpZXcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndlYml4X2hpbnRfb3ZlcmxheV9ob2xlX2VsXCIpWzBdLCB7XCJ4XCI6ZWxMZWZ0LXRoaXMuX3N0ZXAucGFkZGluZyoyLCBcInlcIjplbFRvcC10aGlzLl9zdGVwLnBhZGRpbmcqMiwgXCJ3aWR0aFwiOmhpZ2hsaWdodFdpZHRoK3RoaXMuX3N0ZXAucGFkZGluZyAqMiwgXCJoZWlnaHRcIjpoaWdobGlnaHRIZWlnaHQrdGhpcy5fc3RlcC5wYWRkaW5nKjJ9KTtcblx0XHRcdHdlYml4Lmh0bWwuYWRkQ3NzKHRoaXMuZ2V0Tm9kZSgpLCBcIndlYml4X2hpbnRfYW5pbWF0ZWRcIik7XG5cdFx0fSwgNTAwKTtcblx0fSxcblx0X3NldFBvcyhuYW1lKSB7XG5cdFx0aWYodGhpcy5faXNJbnRlZ2VyKHRoaXMuX3N0ZXBbbmFtZV0pKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fc3RlcFtuYW1lXTtcblx0XHR9IGVsc2UgaWYodGhpcy5faXNJbnRlZ2VyKHRoaXMuY29uZmlnW25hbWVdKSAmJiB0aGlzLl9zdGVwW25hbWVdICE9PSBmYWxzZSl7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb25maWdbbmFtZV07XG5cdFx0fVxuXHR9LFxuXHRfc2V0UmVzaXplKCkge1xuXHRcdHRoaXMuX2V2ZW50UmVzaXplID0gd2ViaXguYXR0YWNoRXZlbnQoXCJvblJlc2l6ZVwiLCAoKSA9PiB7XG5cdFx0XHRpZih0aGlzLmdldEN1cnJlbnRTdGVwKCkgJiYgdGhpcy5faSAhPT0gdGhpcy5jb25maWcuc3RlcHMubGVuZ3RoKSB7XG5cdFx0XHRcdHRoaXMuX3JlZnJlc2godGhpcy5nZXRDdXJyZW50U3RlcCgpLCBmYWxzZSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cdF9pc0ludGVnZXIodmFsdWUpIHtcblx0XHRpZihOdW1iZXIuaXNJbnRlZ2VyKSByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSk7XG5cdFx0cmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiBcblx0XHRcdGlzRmluaXRlKHZhbHVlKSAmJiBcblx0XHRcdE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZTtcblx0fSxcblx0X3NldEF0dHJpYnV0ZXMoZWwsIGF0dHJzKSB7XG5cdFx0Zm9yKHZhciBrZXkgaW4gYXR0cnMpIHtcblx0XHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHRcdH1cblx0fSxcblx0X3JlRHJhdyhzdGVwRWwsIHJlZnJlc2gpIHtcblx0XHRsZXQgdGl0bGUgPSB0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIud2ViaXhfaGludF90aXRsZVwiKTtcblx0XHRsZXQgZWw7XG5cblx0XHR0aGlzLl9zdGVwLmV2ZW50RWw/ZWwgPSB0aGlzLl9nZXRFbCh0aGlzLl9zdGVwLmV2ZW50RWwpOmVsID0gc3RlcEVsO1xuXHRcdGlmKHRoaXMuX2kgPiAwICYmICFyZWZyZXNoKSB7XG5cdFx0XHR3ZWJpeC5odG1sLnJlbW92ZUNzcyh0aGlzLmdldE5vZGUoKSwgXCJ3ZWJpeF9oaW50X2FuaW1hdGVkXCIpO1xuXHRcdFx0dGl0bGUuaW5uZXJIVE1MID0gdGhpcy5fc3RlcC50aXRsZSB8fCBcIlwiO1xuXHRcdFx0dGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwiLndlYml4X2hpbnRfbGFiZWxcIikuaW5uZXJIVE1MID0gdGhpcy5fc3RlcC50ZXh0IHx8IFwiXCI7XG5cdFx0XHR0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIud2ViaXhfaGludF9wcm9ncmVzc1wiKS5pbm5lckhUTUwgPSBgJHt0aGlzLl9pKzF9LyR7dGhpcy5jb25maWcuc3RlcHMubGVuZ3RofWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2RyYXdIaW50KCk7XG5cdFx0XHR0aGlzLl9zZXRFdmVudHNCdXR0b25zKGVsKTtcblx0XHR9XG5cdFx0aWYoIXRoaXMuX3N0ZXAudGl0bGUgJiYgdGl0bGUpIHtcblx0XHRcdHRpdGxlLnN0eWxlLm1hcmdpbiA9IFwiMFwiO1xuXHRcdH1cblx0XHR0aGlzLl9zZXRFbEV2ZW50cyhlbCk7XG5cblx0XHRpZih0aGlzLl9wcmV2QnV0dG9uKSB7XG5cdFx0XHRpZih0aGlzLl9pID4gMCkgeyAvLyBwcmV2aW91cyBidXR0b24gc2hvd1xuXHRcdFx0XHR3ZWJpeC5odG1sLnJlbW92ZUNzcyh0aGlzLl9wcmV2QnV0dG9uLCBcIndlYml4X2hpbnRfYnV0dG9uX2hpZGRlblwiKTtcblx0XHRcdH0gZWxzZSBpZih0aGlzLl9wcmV2QnV0dG9uICYmICF0aGlzLl9wcmV2QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcIndlYml4X2hpbnRfYnV0dG9uX2hpZGRlblwiKSkge1xuXHRcdFx0XHR3ZWJpeC5odG1sLmFkZENzcyh0aGlzLl9wcmV2QnV0dG9uLCBcIndlYml4X2hpbnRfYnV0dG9uX2hpZGRlblwiKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0aWYodGhpcy5faSA9PT0gdGhpcy5jb25maWcuc3RlcHMubGVuZ3RoIC0xICYmIHRoaXMuX25leHRCdXR0b24pIHsgLy8gbmV4dCBidXR0b24gdGV4dFxuXHRcdFx0dGhpcy5fbmV4dEJ1dHRvbi5pbm5lckhUTUwgPSBgJHt0eXBlb2YgdGhpcy5jb25maWcubmV4dEJ1dHRvbiA9PSBcInN0cmluZ1wiP3RoaXMuY29uZmlnLm5leHRCdXR0b246YCR7d2ViaXguaTE4bi5oaW50Lmxhc3R9YH1gO1xuXHRcdH1cblx0fSxcblx0X3NldEJvZHlDbGFzcyhyZW1vdmUpIHtcblx0XHRsZXQgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cdFx0aWYocmVtb3ZlKSB7XG5cdFx0XHR3ZWJpeC5odG1sLnJlbW92ZUNzcyhib2R5LCBcIndlYml4X2hpbnRfb3ZlcmZsb3dcIik7XG5cdFx0fSBlbHNlIGlmKCFib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIndlYml4X2hpbnRfb3ZlcmZsb3dcIikpIHtcblx0XHRcdHdlYml4Lmh0bWwuYWRkQ3NzKGJvZHksIFwid2ViaXhfaGludF9vdmVyZmxvd1wiKTtcblx0XHR9XG5cdH0sXG5cdF9nZXRFbChlbCkge1xuXHRcdGlmKCQkKGVsKSkge1xuXHRcdFx0cmV0dXJuICQkKGVsKS5nZXROb2RlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKTtcblx0XHR9XG5cdH0sXG5cdF9kcmF3U3RlcHMocmVmcmVzaCkge1xuXHRcdGlmKHRoaXMuY29uZmlnLnN0ZXBzW3RoaXMuX2ldKSB7XG5cdFx0XHRsZXQgZWwgPSB0aGlzLl9nZXRFbCh0aGlzLmNvbmZpZy5zdGVwc1t0aGlzLl9pXS5lbCk7XG5cdFx0XHRpZih0aGlzLl9pID09PSAwICYmICFyZWZyZXNoKSB7XG5cdFx0XHRcdHRoaXMuY2FsbEV2ZW50KFwib25CZWZvcmVTdGFydFwiLCBbXSk7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4geyAvLyBmb3IgZmlyc3QgaW5pdFxuXHRcdFx0XHRcdHRoaXMuX2RyYXdPdmVyKGVsKTtcblx0XHRcdFx0fSwgMTAwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX3NldFByb3BlcnRpZXMoZWwsIHJlZnJlc2gpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9za2lwKCk7XG5cdFx0fVxuXHR9LFxuXHRfc2V0RXZlbnRzQnV0dG9ucygpIHtcblx0XHR0aGlzLl9wcmV2QnV0dG9uID0gdGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yQWxsKFwiLndlYml4X2hpbnRfYnV0dG9uX3ByZXZcIilbMF07XG5cdFx0dGhpcy5fbmV4dEJ1dHRvbiA9IHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvckFsbChcIi53ZWJpeF9oaW50X2J1dHRvbl9uZXh0XCIpWzBdO1xuXHRcdGxldCBlbDtcblx0XHRpZih0aGlzLl9uZXh0QnV0dG9uKSB7XG5cdFx0XHR3ZWJpeC5ldmVudCh0aGlzLl9uZXh0QnV0dG9uLCBcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdFx0dGhpcy5fbmV4dChlbCwgXCJuZXh0XCIpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGlmKHRoaXMuX3ByZXZCdXR0b24pIHtcblx0XHRcdHdlYml4LmV2ZW50KHRoaXMuX3ByZXZCdXR0b24sIFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl9uZXh0KGVsLCBcInByZXZpb3VzXCIpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHdlYml4LmV2ZW50KHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcIi53ZWJpeF9oaW50X2J1dHRvbl9jbG9zZVwiKSwgXCJjbGlja1wiLCAoKSA9PiB7IHRoaXMuX3NraXAoKTsgfSk7XG5cdH0sXG5cdF9zZXRFbEV2ZW50cyhzdGVwRWwpIHtcblx0XHRsZXQgZXZlbnRTdGVwID0gdGhpcy5fc3RlcC5ldmVudDtcblx0XHRzdGVwRWwuZm9jdXMoKTtcblx0XHRpZihldmVudFN0ZXApIHtcblx0XHRcdGlmKGV2ZW50U3RlcCA9PT0gXCJlbnRlclwiKSB7XG5cdFx0XHRcdGV2ZW50U3RlcCA9IFwia2V5ZG93blwiO1xuXHRcdFx0fVxuXHRcdFx0aWYodGhpcy5fZXZlbnRPYmopIHtcblx0XHRcdFx0d2ViaXguZXZlbnRSZW1vdmUodGhpcy5fZXZlbnRPYmopO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fZXZlbnRPYmogPSB3ZWJpeC5ldmVudChzdGVwRWwsIGV2ZW50U3RlcCwgKGUpID0+IHtcblx0XHRcdFx0aWYoZXZlbnRTdGVwID09IGUudHlwZSkge1xuXHRcdFx0XHRcdGlmKGUudHlwZSA9PT0gXCJrZXlkb3duXCIgJiYgZS5rZXlDb2RlICE9PSAxMykgcmV0dXJuO1xuXHRcdFx0XHRcdHN0ZXBFbC5mb2N1cygpO1xuXHRcdFx0XHRcdHRoaXMuX25leHQoc3RlcEVsKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH0sXG5cdF9uZXh0KHN0ZXBFbCwgYWN0aW9uKSB7XG5cdFx0YWN0aW9uID0gYWN0aW9uIHx8IFwibmV4dFwiO1xuXHRcdGlmICh0aGlzLl9zdGVwLm5leHQgJiYgYWN0aW9uID09PSBcIm5leHRcIiB8fCB0aGlzLl9zdGVwLnByZXZpb3VzICYmIGFjdGlvbiA9PT0gXCJwcmV2aW91c1wiKSB7XG5cdFx0XHRsZXQgcHJvbWlzZSA9IHRoaXMuX3N0ZXBbYWN0aW9uXSgpO1xuXHRcdFx0aWYgKHByb21pc2Upe1xuXHRcdFx0XHRwcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLl9uZXh0U3RlcChzdGVwRWwsIGFjdGlvbik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fbmV4dFN0ZXAoc3RlcEVsLCBhY3Rpb24pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9uZXh0U3RlcChzdGVwRWwsIGFjdGlvbik7XG5cdFx0fVxuXHR9LFxuXHRfbmV4dFN0ZXAoc3RlcEVsLCBhY3Rpb24pIHtcblx0XHRsZXQgZWwgPSB0aGlzLl9nZXRFbCh0aGlzLl9zdGVwLmVsKTtcblx0XHRlbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJcIjtcblx0XHRlbC5zdHlsZS51c2VyU2VsZWN0ID0gXCJcIjtcblx0XHRlbC5ibHVyKCk7XG5cdFx0aWYoYWN0aW9uICE9PSBcInByZXZpb3VzXCIpIHtcblx0XHRcdHRoaXMuX2krKztcblx0XHRcdHRoaXMuX2RyYXdTdGVwcygpO1xuXHRcdFx0dGhpcy5jYWxsRXZlbnQoXCJvbk5leHRcIiwgW3RoaXMuX2krMV0pO1xuXHRcdH1cblx0XHRpZihhY3Rpb24gPT09IFwicHJldmlvdXNcIikge1xuXHRcdFx0dGhpcy5jYWxsRXZlbnQoXCJvblByZXZpb3VzXCIsIFt0aGlzLl9pXSk7XG5cdFx0XHR0aGlzLl9yZWZyZXNoKHRoaXMuX2ktLSwgZmFsc2UpO1xuXHRcdH1cblx0fSxcblx0X3NraXAoKSB7XG5cdFx0aWYgKHRoaXMuX2kgPT09IC0xKSByZXR1cm47XG5cdFx0aWYodGhpcy5fZXZlbnRPYmopIHtcblx0XHRcdHdlYml4LmV2ZW50UmVtb3ZlKHRoaXMuX2V2ZW50T2JqKTtcblx0XHRcdGRlbGV0ZSB0aGlzLl9ldmVudE9iajtcblx0XHR9XG5cdFx0aWYodGhpcy5fZXZlbnRSZXNpemUpIHtcblx0XHRcdHdlYml4LmRldGFjaEV2ZW50KHRoaXMuX2V2ZW50UmVzaXplKTtcblx0XHRcdGRlbGV0ZSB0aGlzLl9ldmVudFJlc2l6ZTtcblx0XHR9XG5cdFx0dGhpcy5jYWxsRXZlbnQoXCJvblNraXBcIiwgW3RoaXMuX2krMV0pO1xuXHRcdHRoaXMuaGlkZSgpO1xuXHRcdHRoaXMuX3NldEJvZHlDbGFzcyhcInJlbW92ZVwiKTtcblx0XHRpZih0aGlzLl9pID09PSB0aGlzLmNvbmZpZy5zdGVwcy5sZW5ndGgpIHtcblx0XHRcdHRoaXMuY2FsbEV2ZW50KFwib25FbmRcIiwgW3RoaXMuX2krMV0pO1xuXHRcdH1cblx0fSxcblx0X3JlZnJlc2goaSwgZmlyc3REcmF3KSB7XG5cdFx0aWYoIXRoaXMuX2V2ZW50UmVzaXplKSB7XG5cdFx0XHR0aGlzLl9zZXRSZXNpemUoKTtcblx0XHR9XG5cdFx0dGhpcy5faSA9IGktMTtcblx0XHR0aGlzLl9zZXRCb2R5Q2xhc3MoKTtcblx0XHRpZih0aGlzLl9oaW50KSB7XG5cdFx0XHRpZih0aGlzLl9oaW50LnBhcmVudE5vZGUpXG5cdFx0XHRcdHRoaXMuX2hpbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9oaW50KTtcblx0XHRcdHdlYml4Lmh0bWwucmVtb3ZlQ3NzKHRoaXMuZ2V0Tm9kZSgpLCBcIndlYml4X2hpbnRfYW5pbWF0ZWRcIik7XG5cdFx0fVxuXHRcdHRoaXMuc2hvdygpO1xuXHRcdGlmKGZpcnN0RHJhdykge1xuXHRcdFx0bGV0IHN2ZyA9IHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcInN2Z1wiKTtcblx0XHRcdGlmIChzdmcpXG5cdFx0XHRcdHN2Zy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN2Zyk7XG5cdFx0XHR0aGlzLl9kcmF3U3RlcHMoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fZHJhd1N0ZXBzKFwicmVmcmVzaFwiKTtcblx0XHR9XG5cdH0sXG5cdHN0YXJ0KCkge1xuXHRcdHRoaXMuX3JlZnJlc2goMSwgdHJ1ZSk7XG5cdH0sXG5cdGVuZCgpIHtcblx0XHR0aGlzLl9za2lwKCk7XG5cdH0sXG5cdGdldEN1cnJlbnRTdGVwKCkge1xuXHRcdHJldHVybiB0aGlzLl9pKzE7XG5cdH0sXG5cdHJlc3VtZShzdGVwTnVtYmVyKSB7XG5cdFx0aWYodGhpcy5faGludCl7XG5cdFx0XHRzdGVwTnVtYmVyID0gc3RlcE51bWJlciB8fCAxO1xuXHRcdFx0dGhpcy5fcmVmcmVzaChzdGVwTnVtYmVyKTtcblx0XHR9XG5cdH0sXG5cdGdldFN0ZXBzKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5zdGVwcztcblx0fSxcblx0c2V0U3RlcHModmFsdWUpIHtcblx0XHR0aGlzLmRlZmluZShcInN0ZXBzXCIsIHZhbHVlKTtcblx0fVxufSwgd2ViaXgudWkudmlldywgd2ViaXguRXZlbnRTeXN0ZW0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaGludC5qcyIsImV4cG9ydCBsZXQgYmUgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJiZS1CWVwiXSA9IHtcblx0aGludDp7XG5cdFx0bmV4dDogXCLQndCw0YHRgtGD0L/QvdGLXCIsXG5cdFx0cHJldjogXCLQn9Cw0L/Rj9GA0Y3QtNC90ZZcIixcblx0XHRsYXN0OiBcItCa0LDQvdC10YYg0KLRg9GA0LBcIlxuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9iZS5qcyIsIi8qR2VybWFuIChHZXJtYW55KSBsb2NhbGUqL1xuZXhwb3J0IGxldCBkZSA9IHdlYml4LmkxOG4ubG9jYWxlc1tcImRlLURFXCJdID0ge1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIk7DpGNoc3RlclwiLFxuXHRcdHByZXY6IFwiQmlzaGVyaWdlXCIsXG5cdFx0bGFzdDogXCJFbmRlIFRvdXJcIlxuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2RlLmpzIiwiZXhwb3J0IGxldCBlbiA9IHdlYml4LmkxOG4ubG9jYWxlc1tcImVuLVVTXCJdPXtcblx0aGludDp7XG5cdFx0bmV4dDogXCJOZXh0XCIsXG5cdFx0cHJldjogXCJQcmV2aW91c1wiLFxuXHRcdGxhc3Q6IFwiRW5kIFRvdXJcIlxuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9lbi5qcyIsIi8qU3BhbmlzaCAoU3BhaW4sIEludGVybmF0aW9uYWwgU29ydCkgbG9jYWxlKi9cbmV4cG9ydCBsZXQgZXMgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJlcy1FU1wiXSA9IHtcblx0aGludDp7XG5cdFx0bmV4dDogXCJTaWd1aWVudGVcIixcblx0XHRwcmV2OiBcIkFudGVyaW9yXCIsXG5cdFx0bGFzdDogXCJGaW4gZGUgVmlhamVcIlxuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2VzLmpzIiwiZXhwb3J0IGxldCBmciA9IHdlYml4LmkxOG4ubG9jYWxlc1tcImZyLUZSXCJdPXtcblx0aGludDp7XG5cdFx0bmV4dDogXCJQcm9jaGFpblwiLFxuXHRcdHByZXY6IFwiUHLDqWPDqWRlbnRcIixcblx0XHRsYXN0OiBcIkVuZCBUb3VyXCJcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vZnIuanMiLCIvKkl0YWxpYW4gKEl0YWx5KSBsb2NhbGUqL1xuZXhwb3J0IGxldCBpdCA9IHdlYml4LmkxOG4ubG9jYWxlc1tcIml0LUlUXCJdID0ge1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIlNlZ3VlbnRlXCIsXG5cdFx0cHJldjogXCJQcmVjZWRlbnRlXCIsXG5cdFx0bGFzdDogXCJFbmQgVG91clwiXG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vaXQuanMiLCJleHBvcnQgbGV0IGphID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiamEtSlBcIl09e1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIuasoVwiLFxuXHRcdHByZXY6IFwi5YmNXCIsXG5cdFx0bGFzdDogXCLntYLkuobjg4TjgqLjg7xcIlxuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9qYS5qcyIsImV4cG9ydCBsZXQgcHQgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJwdC1CUlwiXSA9IHtcblx0aGludDp7XG5cdFx0bmV4dDogXCJQcsOzeGltb1wiLFxuXHRcdHByZXY6IFwiQW50ZXJpb3JcIixcblx0XHRsYXN0OiBcIkVuZCBUb3VyXCJcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9wdC5qcyIsImV4cG9ydCBsZXQgcnUgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJydS1SVVwiXT17XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwi0KHQu9C10LTRg9GO0YnQuNC5XCIsXG5cdFx0cHJldjogXCLQn9GA0LXQtNGL0LTRg9GJ0LjQuVwiLFxuXHRcdGxhc3Q6IFwi0JrQvtC90LXRhiDQotGD0YDQsFwiXG5cdH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL3J1LmpzIiwiLypDaGluZXNlIChTaW1wbGlmaWVkLCBQUkMpIGxvY2FsZSovXG5leHBvcnQgbGV0IHpoID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiemgtQ05cIl0gPSB7XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwi5LiL5LiA5LiqXCIsXG5cdFx0cHJldjogXCLku6XliY1cIixcblx0XHRsYXN0OiBcIue7k+adn+W3oeinhlwiXG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vemguanMiXSwic291cmNlUm9vdCI6IiJ9