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
	next: "Next",
	prev: "Previous",
	last: "End Tour"
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

webix.i18n.hint = webix.extend(webix.i18n, _locales.locale);

webix.protoUI({
	name: "hint",
	defaults: {
		steps: [],
		borderless: true,
		nextButton: true,
		prevButton: true
	},
	$init: function $init() {
		var _this = this;

		this.$view.className += " webix_hint_view";
		this._i = -1;
		this.attachEvent("onDestruct", function () {
			_this._setBodyClass();
			if (_this._eventObjEsc) {
				webix.eventRemove(_this._eventObjEsc);
			}
		});
		this._eventObjEsc = webix.event(document.body, "keydown", function (e) {
			// escape
			if (e.keyCode == 27) {
				_this._skip();
			}
		});
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
		var windowHeight = window.innerHeight && docElem.clientHeight ? Math.min(window.innerWidth, docElem.clientHeight) : window.innerHeight || docElem.clientHeight || document.getElementsByTagName("body")[0].clientHeight;

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
		} else if (hintTop > windowHeight && hintHeight + highlightHeight < windowHeight) //top, but hint does not fit
			hintTop = elTop - hintHeight - padding - this._step.padding * 2;else if (hintTop > windowHeight) {
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
		if (webix.env.mobile) {
			stepEl.scrollIntoView(false);
		}
		this._hint.style.cssText = "top:" + hintTop + "px; left:" + hintLeft + "px;";
		this._setAttributes(this.$view.getElementsByClassName("webix_hint_overlay_hole_el")[0], { "x": elLeft - this._step.padding * 2, "y": elTop - this._step.padding * 2, "width": highlightWidth + this._step.padding * 2, "height": highlightHeight + this._step.padding * 2 });
		webix.html.addCss(this.getNode(), "webix_hint_animated");
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

		if (this._i > 0) {
			// previous button show
			webix.html.removeCss(this._prevButton, "webix_hint_button_hidden");
		} else if (this._prevButton && !this._prevButton.classList.contains("webix_hint_button_hidden")) {
			webix.html.addCss(this._prevButton, "webix_hint_button_hidden");
		}
		if (this._i === this.config.steps.length - 1) {
			// next button text
			this._nextButton.innerHTML = "" + (typeof this.config.nextButton == "string" ? this.config.nextButton : "" + webix.i18n.hint.last);
		}
	},
	_setBodyClass: function _setBodyClass() {
		var body = document.body;
		if (body.classList.contains("webix_hint_overflow")) {
			webix.html.removeCss(body, "webix_hint_overflow");
		} else {
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
		var _this2 = this;

		if (this.config.steps[this._i]) {
			var el = this._getEl(this.config.steps[this._i].el);
			if (this._i === 0 && !refresh) {
				this.callEvent("onBeforeStart", []);
				setTimeout(function () {
					// for first init
					_this2._drawOver(el);
				}, 100);
			} else {
				this._setProperties(el, refresh);
			}
		} else {
			this._skip();
		}
	},
	_setEventsButtons: function _setEventsButtons() {
		var _this3 = this;

		this._prevButton = this.$view.querySelectorAll(".webix_hint_button_prev")[0];
		this._nextButton = this.$view.querySelectorAll(".webix_hint_button_next")[0];
		var el = void 0;
		if (this._nextButton) {
			webix.event(this._nextButton, "click", function () {
				_this3._next(el, "next");
			});
		}
		if (this._prevButton) {
			webix.event(this._prevButton, "click", function () {
				webix.html.removeCss(_this3.getNode(), "webix_hint_animated");
				_this3._hint.parentNode.removeChild(_this3._hint);
				_this3._i -= 2;
				_this3._next(el, "previous");
			});
		}
		webix.event(this.$view.querySelector(".webix_hint_button_close"), "click", function () {
			_this3._skip();
		});
	},
	_setElEvents: function _setElEvents(stepEl) {
		var _this4 = this;

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
					_this4._next(stepEl);
				}
			});
		} else {
			return;
		}
	},
	_next: function _next(stepEl, action) {
		var _this5 = this;

		action = action || "next";
		if (this._step.next && action === "next" || this._step.previous && action === "previous") {
			var promise = this._step[action]();
			if (promise.then) {
				return promise.then(function () {
					_this5._nextStep(stepEl, action);
				});
			}
		}

		this._nextStep(stepEl, action);
	},
	_nextStep: function _nextStep(stepEl, action) {
		var el = this._getEl(this._step.el);
		el.style.pointerEvents = "";
		el.style.userSelect = "";
		el.blur();
		this._i++;
		if (action !== "previous") {
			this._drawSteps();
			this.callEvent("onNext", [this._i + 1]);
		}
		if (action === "previous") {
			this._drawSteps("previous");
			this.callEvent("onPrevious", [this._i + 1]);
		}
	},
	_skip: function _skip() {
		if (this._i === -1) return;

		this.callEvent("onSkip", [this._i + 1]);
		this.hide();
		this._setBodyClass();
		if (this._i === this.config.steps.length) {
			this.callEvent("onEnd", [this._i + 1]);
			this._i = -1;
		}
	},

	start: function start() {
		this._refresh(0, true);
	},
	end: function end() {
		this._skip();
	},
	_refresh: function _refresh(i, firstDraw) {
		this._i = i;
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
			this._setBodyClass();
		}
	},
	getCurrentStep: function getCurrentStep() {
		return this._i;
	},
	resume: function resume(stepNumber) {
		if (this._hint) {
			stepNumber = stepNumber || this._i + 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjYxMzVhNzAzOGE5MjIyM2MyYzMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9sb2NhbGVzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5sZXNzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vYmUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL2RlLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9lbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL2ZyLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9pdC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vamEuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL3B0LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9ydS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vemguanMiXSwibmFtZXMiOlsibG9jYWxlIiwibmV4dCIsInByZXYiLCJsYXN0Iiwid2ViaXgiLCJpMThuIiwiaGludCIsImV4dGVuZCIsInByb3RvVUkiLCJuYW1lIiwiZGVmYXVsdHMiLCJzdGVwcyIsImJvcmRlcmxlc3MiLCJuZXh0QnV0dG9uIiwicHJldkJ1dHRvbiIsIiRpbml0IiwiJHZpZXciLCJjbGFzc05hbWUiLCJfaSIsImF0dGFjaEV2ZW50IiwiX3NldEJvZHlDbGFzcyIsIl9ldmVudE9iakVzYyIsImV2ZW50UmVtb3ZlIiwiZXZlbnQiLCJkb2N1bWVudCIsImJvZHkiLCJlIiwia2V5Q29kZSIsIl9za2lwIiwic3RlcHNfc2V0dGVyIiwiY29uZmlnIiwibmV3Q29uZmlnIiwiaSIsImxlbmd0aCIsInBhZGRpbmciLCJ0ZXh0IiwicHVzaCIsIl9kcmF3T3ZlciIsInN0ZXBFbCIsImlubmVySFRNTCIsIl9zZXRQcm9wZXJ0aWVzIiwiY2FsbEV2ZW50IiwiX2RyYXdIaW50Iiwic2V0dGluZ3MiLCJfc3RlcCIsInRpdGxlIiwicmVmcmVzaCIsImVudiIsIm1vYmlsZSIsInNjcm9sbEludG9WaWV3IiwiX3JlRHJhdyIsIl9oaW50IiwicXVlcnlTZWxlY3RvciIsImRvY0VsZW0iLCJkb2N1bWVudEVsZW1lbnQiLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbExlZnQiLCJsZWZ0IiwiaGlnaGxpZ2h0V2lkdGgiLCJ3aWR0aCIsImhpZ2hsaWdodEhlaWdodCIsImhlaWdodCIsImhpbnRMZWZ0IiwiaGludFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJoaW50SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZWxUb3AiLCJ0b3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImhpbnRUb3AiLCJ3aW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsIk1hdGgiLCJtaW4iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwidXNlclNlbGVjdCIsImNzc1RleHQiLCJfc2V0QXR0cmlidXRlcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJodG1sIiwiYWRkQ3NzIiwiZ2V0Tm9kZSIsImVsIiwiYXR0cnMiLCJrZXkiLCJzZXRBdHRyaWJ1dGUiLCJldmVudEVsIiwiX2dldEVsIiwicmVtb3ZlQ3NzIiwiX3NldEV2ZW50c0J1dHRvbnMiLCJtYXJnaW4iLCJfc2V0RWxFdmVudHMiLCJfcHJldkJ1dHRvbiIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiX25leHRCdXR0b24iLCIkJCIsIl9kcmF3U3RlcHMiLCJzZXRUaW1lb3V0IiwicXVlcnlTZWxlY3RvckFsbCIsIl9uZXh0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZXZlbnRTdGVwIiwiZm9jdXMiLCJfZXZlbnRPYmoiLCJ0eXBlIiwiYWN0aW9uIiwicHJldmlvdXMiLCJwcm9taXNlIiwidGhlbiIsIl9uZXh0U3RlcCIsImJsdXIiLCJoaWRlIiwic3RhcnQiLCJfcmVmcmVzaCIsImVuZCIsImZpcnN0RHJhdyIsInNob3ciLCJzdmciLCJnZXRDdXJyZW50U3RlcCIsInJlc3VtZSIsInN0ZXBOdW1iZXIiLCJnZXRTdGVwcyIsInNldFN0ZXBzIiwidmFsdWUiLCJkZWZpbmUiLCJ1aSIsInZpZXciLCJFdmVudFN5c3RlbSIsImJlIiwibG9jYWxlcyIsImRlIiwiZW4iLCJlcyIsImZyIiwiaXQiLCJqYSIsInB0IiwicnUiLCJ6aCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRU8sSUFBSUEsMEJBQVM7QUFDbkJDLE9BQU0sTUFEYTtBQUVuQkMsT0FBTSxVQUZhO0FBR25CQyxPQUFNO0FBSGEsQ0FBYixDOzs7Ozs7QUNYUCx5Qzs7Ozs7Ozs7O0FDQUE7O0FBQ0E7O0FBRUFDLE1BQU1DLElBQU4sQ0FBV0MsSUFBWCxHQUFrQkYsTUFBTUcsTUFBTixDQUFhSCxNQUFNQyxJQUFuQixrQkFBbEI7O0FBRUFELE1BQU1JLE9BQU4sQ0FBYztBQUNiQyxPQUFNLE1BRE87QUFFYkMsV0FBVTtBQUNUQyxTQUFPLEVBREU7QUFFVEMsY0FBWSxJQUZIO0FBR1RDLGNBQVksSUFISDtBQUlUQyxjQUFZO0FBSkgsRUFGRztBQVFiQyxNQVJhLG1CQVFMO0FBQUE7O0FBQ1AsT0FBS0MsS0FBTCxDQUFXQyxTQUFYLElBQXdCLGtCQUF4QjtBQUNBLE9BQUtDLEVBQUwsR0FBVSxDQUFDLENBQVg7QUFDQSxPQUFLQyxXQUFMLENBQWlCLFlBQWpCLEVBQStCLFlBQU07QUFDcEMsU0FBS0MsYUFBTDtBQUNBLE9BQUcsTUFBS0MsWUFBUixFQUFzQjtBQUNyQmpCLFVBQU1rQixXQUFOLENBQWtCLE1BQUtELFlBQXZCO0FBQ0E7QUFDRCxHQUxEO0FBTUEsT0FBS0EsWUFBTCxHQUFvQmpCLE1BQU1tQixLQUFOLENBQVlDLFNBQVNDLElBQXJCLEVBQTBCLFNBQTFCLEVBQXFDLFVBQUNDLENBQUQsRUFBTztBQUMvRDtBQUNBLE9BQUlBLEVBQUVDLE9BQUYsSUFBYSxFQUFqQixFQUFvQjtBQUNuQixVQUFLQyxLQUFMO0FBQ0E7QUFDRCxHQUxtQixDQUFwQjtBQU1BLEVBdkJZO0FBd0JiQyxhQXhCYSx3QkF3QkFDLE1BeEJBLEVBd0JRO0FBQ3BCLE1BQUlDLFlBQVksRUFBaEI7QUFDQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsT0FBT0csTUFBM0IsRUFBbUNELEdBQW5DLEVBQXdDO0FBQ3ZDRixVQUFPRSxDQUFQLEVBQVVFLE9BQVYsR0FBb0JKLE9BQU9FLENBQVAsRUFBVUUsT0FBVixJQUFxQixDQUF6QztBQUNBSixVQUFPRSxDQUFQLEVBQVVHLElBQVYsR0FBaUJMLE9BQU9FLENBQVAsRUFBVUcsSUFBVixJQUFrQixFQUFuQztBQUNBSixhQUFVSyxJQUFWLENBQWVOLE9BQU9FLENBQVAsQ0FBZjtBQUNBO0FBQ0QsU0FBT0QsU0FBUDtBQUNBLEVBaENZO0FBaUNiTSxVQWpDYSxxQkFpQ0hDLE1BakNHLEVBaUNLO0FBQ2pCLE9BQUt0QixLQUFMLENBQVd1QixTQUFYO0FBU0EsT0FBS0MsY0FBTCxDQUFvQkYsTUFBcEI7QUFDQSxPQUFLRyxTQUFMLENBQWUsY0FBZixFQUErQixFQUEvQjtBQUNBLEVBN0NZO0FBOENiQyxVQTlDYSx1QkE4Q0Q7QUFDWCxNQUFJQyxXQUFXLEtBQUtiLE1BQXBCO0FBQ0EsT0FBS2QsS0FBTCxDQUFXdUIsU0FBWCwyRUFDa0MsS0FBS0ssS0FBTCxDQUFXQyxLQUFYLEdBQWlCLEtBQUtELEtBQUwsQ0FBV0MsS0FBNUIsR0FBa0MsRUFEcEUsc0RBRStCLEtBQUtELEtBQUwsQ0FBV1QsSUFGMUMsa0VBSUksS0FBS2pCLEVBQUwsR0FBUSxDQUpaLFVBSWlCLEtBQUtZLE1BQUwsQ0FBWW5CLEtBQVosQ0FBa0JzQixNQUpuQywyRUFPSVUsU0FBUzdCLFVBQVQsS0FBdUIsS0FBdkIsNkZBQWtILE9BQU82QixTQUFTN0IsVUFBaEIsSUFBOEIsUUFBOUIsR0FBdUM2QixTQUFTN0IsVUFBaEQsUUFBOERWLE1BQU1DLElBQU4sQ0FBV0MsSUFBWCxDQUFnQkosSUFBaE0sa0JBQWtOLEVBUHROLG9CQVFJeUMsU0FBUzlCLFVBQVQsS0FBdUIsS0FBdkIsb0VBQXlGLE9BQU84QixTQUFTOUIsVUFBaEIsSUFBOEIsUUFBOUIsR0FBdUM4QixTQUFTOUIsVUFBaEQsUUFBOERULE1BQU1DLElBQU4sQ0FBV0MsSUFBWCxDQUFnQkwsSUFBdkssa0JBQXlMLEVBUjdMO0FBWUEsRUE1RFk7QUE2RGJ1QyxlQTdEYSwwQkE2REVGLE1BN0RGLEVBNkRVUSxPQTdEVixFQTZEbUI7QUFDL0IsTUFBRyxDQUFDMUMsTUFBTTJDLEdBQU4sQ0FBVUMsTUFBZCxFQUFzQjtBQUNyQlYsVUFBT1csY0FBUCxDQUFzQixLQUF0QjtBQUNBO0FBQ0QsT0FBS0wsS0FBTCxHQUFhLEtBQUtkLE1BQUwsQ0FBWW5CLEtBQVosQ0FBa0IsS0FBS08sRUFBdkIsQ0FBYjtBQUNBLE9BQUtnQyxPQUFMLENBQWFaLE1BQWIsRUFBcUJRLE9BQXJCO0FBQ0EsT0FBS0ssS0FBTCxHQUFhLEtBQUtuQyxLQUFMLENBQVdvQyxhQUFYLENBQXlCLGFBQXpCLENBQWI7O0FBRUEsTUFBSWxCLFVBQVUsRUFBZDtBQUNBLE1BQUltQixVQUFVN0IsU0FBUzhCLGVBQXZCO0FBQ0EsTUFBSUMsTUFBTWpCLE9BQU9rQixxQkFBUCxFQUFWO0FBQ0EsTUFBSUMsU0FBU0YsSUFBSUcsSUFBSixHQUFXLEtBQUtkLEtBQUwsQ0FBV1YsT0FBbkM7QUFDQSxNQUFJeUIsaUJBQWlCSixJQUFJSyxLQUF6QjtBQUNBLE1BQUlDLGtCQUFrQk4sSUFBSU8sTUFBMUI7QUFDQSxNQUFJQyxXQUFXTixTQUFTLEtBQUtiLEtBQUwsQ0FBV1YsT0FBbkM7QUFDQSxNQUFJOEIsWUFBWSxLQUFLYixLQUFMLENBQVdjLFdBQTNCO0FBQ0EsTUFBSUMsYUFBYSxLQUFLZixLQUFMLENBQVdnQixZQUE1QjtBQUNBLE1BQUlDLFFBQVFoRSxNQUFNMkMsR0FBTixDQUFVQyxNQUFWLEdBQW1CTyxJQUFJYyxHQUFKLEdBQVUsS0FBS3pCLEtBQUwsQ0FBV1YsT0FBeEMsR0FBa0RxQixJQUFJYyxHQUFKLEdBQVUsS0FBS3pCLEtBQUwsQ0FBV1YsT0FBckIsR0FBK0JvQyxPQUFPQyxXQUFwRztBQUNBLE1BQUlDLFVBQVVKLFFBQVFQLGVBQVIsR0FBMEIsS0FBS2pCLEtBQUwsQ0FBV1YsT0FBckMsR0FBK0NBLE9BQTdEO0FBQ0EsTUFBSXVDLGNBQWNILE9BQU9JLFVBQVAsSUFBcUJyQixRQUFRc0IsV0FBN0IsR0FBMkNDLEtBQUtDLEdBQUwsQ0FBU1AsT0FBT0ksVUFBaEIsRUFBNEJyQixRQUFRc0IsV0FBcEMsQ0FBM0MsR0FBOEZMLE9BQU9JLFVBQVAsSUFBcUJyQixRQUFRc0IsV0FBN0IsSUFBNENuRCxTQUFTc0Qsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsRUFBeUNILFdBQXJNO0FBQ0EsTUFBSUksZUFBZVQsT0FBT1UsV0FBUCxJQUFzQjNCLFFBQVE0QixZQUE5QixHQUE2Q0wsS0FBS0MsR0FBTCxDQUFTUCxPQUFPSSxVQUFoQixFQUE0QnJCLFFBQVE0QixZQUFwQyxDQUE3QyxHQUFpR1gsT0FBT1UsV0FBUCxJQUFzQjNCLFFBQVE0QixZQUE5QixJQUE4Q3pELFNBQVNzRCxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxFQUF5Q0csWUFBM007O0FBRUEzQyxTQUFPNEMsS0FBUCxDQUFhQyxhQUFiLEdBQTZCLEtBQTdCO0FBQ0E3QyxTQUFPNEMsS0FBUCxDQUFhRSxVQUFiLEdBQTBCLFNBQTFCOztBQUVBO0FBQ0EsTUFBRzNCLFNBQVNnQixXQUFULEdBQXVCLENBQTFCLEVBQTZCO0FBQzVCaEIsWUFBU0EsU0FBU2dCLFdBQVQsR0FBdUJULFNBQXZCLEdBQW1DTCxjQUE1QztBQUNBOztBQUVELE1BQUdvQixlQUFjLENBQWQsR0FBa0JYLEtBQXJCLEVBQTRCO0FBQUU7QUFDN0JJLGFBQVVKLFFBQVFGLFVBQVIsR0FBcUJoQyxPQUFyQixHQUErQixLQUFLVSxLQUFMLENBQVdWLE9BQVgsR0FBbUIsQ0FBNUQ7QUFDQSxHQUZELE1BRU8sSUFBR3VDLGNBQWEsQ0FBYixHQUFpQmhCLE1BQWpCLElBQTJCQSxTQUFTTyxTQUFULEdBQXFCUyxXQUFoRCxJQUErRGQsaUJBQWlCSyxTQUFqQixHQUE2QlMsV0FBL0YsRUFBNEc7QUFBRTtBQUNwSEQsYUFBVVgsa0JBQWtCLENBQWxCLEdBQXNCTyxLQUF0QixHQUE4QixLQUFLeEIsS0FBTCxDQUFXVixPQUFuRDtBQUNBNkIsY0FBV04sU0FBU08sU0FBVCxHQUFxQixLQUFLcEIsS0FBTCxDQUFXVixPQUFoQyxHQUEwQ0EsT0FBckQ7QUFDQSxHQUhNLE1BR0EsSUFBR3VDLGNBQWEsQ0FBYixHQUFpQmhCLE1BQWpCLElBQTJCQSxTQUFTTyxTQUFULEdBQXFCTCxjQUFyQixHQUFzQ2MsV0FBcEUsRUFBaUY7QUFBRTtBQUN6RlYsY0FBV0osaUJBQWlCRixNQUFqQixHQUEwQnZCLE9BQXJDO0FBQ0FzQyxhQUFVSixRQUFRLEtBQUt4QixLQUFMLENBQVdWLE9BQTdCO0FBQ0EsR0FITSxNQUdBLElBQUdzQyxVQUFRTyxZQUFSLElBQXdCYixhQUFXTCxlQUFYLEdBQTJCa0IsWUFBdEQsRUFBbUU7QUFDekVQLGFBQVVKLFFBQVFGLFVBQVIsR0FBcUJoQyxPQUFyQixHQUErQixLQUFLVSxLQUFMLENBQVdWLE9BQVgsR0FBbUIsQ0FBNUQsQ0FETSxLQUVGLElBQUdzQyxVQUFRTyxZQUFYLEVBQXdCO0FBQzVCaEIsY0FBV04sU0FBU08sU0FBVCxHQUFxQixLQUFLcEIsS0FBTCxDQUFXVixPQUFYLEdBQW1CLENBQXhDLEdBQTRDQSxPQUF2RDtBQUNBc0MsYUFBVUosUUFBUSxLQUFLeEIsS0FBTCxDQUFXVixPQUE3QjtBQUNBOztBQUVELE1BQUc2QixXQUFXQyxTQUFYLEdBQXVCUyxXQUExQixFQUF1QztBQUFFO0FBQ3hDVixjQUFXVSxjQUFjVCxTQUF6QjtBQUNBLEdBRkQsTUFFTyxJQUFHUSxVQUFVLENBQVYsSUFBZUEsVUFBU08sWUFBM0IsRUFBeUM7QUFDL0NQLGFBQVV0QyxPQUFWO0FBQ0EsR0FGTSxNQUVBLElBQUd1QyxjQUFjZCxjQUFkLElBQWdDSSxXQUFXLENBQTlDLEVBQWlEO0FBQ3ZEQSxjQUFXN0IsT0FBWDtBQUNBO0FBQ0QsTUFBRzlCLE1BQU0yQyxHQUFOLENBQVVDLE1BQWIsRUFBcUI7QUFDcEJWLFVBQU9XLGNBQVAsQ0FBc0IsS0FBdEI7QUFDQTtBQUNELE9BQUtFLEtBQUwsQ0FBVytCLEtBQVgsQ0FBaUJHLE9BQWpCLFlBQWtDYixPQUFsQyxpQkFBcURULFFBQXJEO0FBQ0EsT0FBS3VCLGNBQUwsQ0FBb0IsS0FBS3RFLEtBQUwsQ0FBV3VFLHNCQUFYLENBQWtDLDRCQUFsQyxFQUFnRSxDQUFoRSxDQUFwQixFQUF3RixFQUFDLEtBQUk5QixTQUFPLEtBQUtiLEtBQUwsQ0FBV1YsT0FBWCxHQUFtQixDQUEvQixFQUFrQyxLQUFJa0MsUUFBTSxLQUFLeEIsS0FBTCxDQUFXVixPQUFYLEdBQW1CLENBQS9ELEVBQWtFLFNBQVF5QixpQkFBZSxLQUFLZixLQUFMLENBQVdWLE9BQVgsR0FBb0IsQ0FBN0csRUFBZ0gsVUFBUzJCLGtCQUFnQixLQUFLakIsS0FBTCxDQUFXVixPQUFYLEdBQW1CLENBQTVKLEVBQXhGO0FBQ0E5QixRQUFNb0YsSUFBTixDQUFXQyxNQUFYLENBQWtCLEtBQUtDLE9BQUwsRUFBbEIsRUFBa0MscUJBQWxDO0FBQ0EsRUF2SFk7QUF3SGJKLGVBeEhhLDBCQXdIRUssRUF4SEYsRUF3SE1DLEtBeEhOLEVBd0hhO0FBQ3pCLE9BQUksSUFBSUMsR0FBUixJQUFlRCxLQUFmLEVBQXNCO0FBQ3JCRCxNQUFHRyxZQUFILENBQWdCRCxHQUFoQixFQUFxQkQsTUFBTUMsR0FBTixDQUFyQjtBQUNBO0FBQ0QsRUE1SFk7QUE2SGIzQyxRQTdIYSxtQkE2SExaLE1BN0hLLEVBNkhHUSxPQTdISCxFQTZIWTtBQUN4QixNQUFJRCxRQUFRLEtBQUs3QixLQUFMLENBQVdvQyxhQUFYLENBQXlCLG1CQUF6QixDQUFaO0FBQ0EsTUFBSXVDLFdBQUo7O0FBRUEsT0FBSy9DLEtBQUwsQ0FBV21ELE9BQVgsR0FBbUJKLEtBQUssS0FBS0ssTUFBTCxDQUFZLEtBQUtwRCxLQUFMLENBQVdtRCxPQUF2QixDQUF4QixHQUF3REosS0FBS3JELE1BQTdEO0FBQ0EsTUFBRyxLQUFLcEIsRUFBTCxHQUFVLENBQVYsSUFBZSxDQUFDNEIsT0FBbkIsRUFBNEI7QUFDM0IxQyxTQUFNb0YsSUFBTixDQUFXUyxTQUFYLENBQXFCLEtBQUtQLE9BQUwsRUFBckIsRUFBcUMscUJBQXJDO0FBQ0E3QyxTQUFNTixTQUFOLEdBQWtCLEtBQUtLLEtBQUwsQ0FBV0MsS0FBWCxJQUFvQixFQUF0QztBQUNBLFFBQUs3QixLQUFMLENBQVdvQyxhQUFYLENBQXlCLG1CQUF6QixFQUE4Q2IsU0FBOUMsR0FBMEQsS0FBS0ssS0FBTCxDQUFXVCxJQUFYLElBQW1CLEVBQTdFO0FBQ0EsUUFBS25CLEtBQUwsQ0FBV29DLGFBQVgsQ0FBeUIsc0JBQXpCLEVBQWlEYixTQUFqRCxHQUFnRSxLQUFLckIsRUFBTCxHQUFRLENBQXhFLFNBQTZFLEtBQUtZLE1BQUwsQ0FBWW5CLEtBQVosQ0FBa0JzQixNQUEvRjtBQUNBLEdBTEQsTUFLTztBQUNOLFFBQUtTLFNBQUw7QUFDQSxRQUFLd0QsaUJBQUwsQ0FBdUJQLEVBQXZCO0FBQ0E7QUFDRCxNQUFHLENBQUMsS0FBSy9DLEtBQUwsQ0FBV0MsS0FBWixJQUFxQkEsS0FBeEIsRUFBK0I7QUFDOUJBLFNBQU1xQyxLQUFOLENBQVlpQixNQUFaLEdBQXFCLEdBQXJCO0FBQ0E7QUFDRCxPQUFLQyxZQUFMLENBQWtCVCxFQUFsQjs7QUFFQSxNQUFHLEtBQUt6RSxFQUFMLEdBQVUsQ0FBYixFQUFnQjtBQUFFO0FBQ2pCZCxTQUFNb0YsSUFBTixDQUFXUyxTQUFYLENBQXFCLEtBQUtJLFdBQTFCLEVBQXVDLDBCQUF2QztBQUNBLEdBRkQsTUFFTyxJQUFHLEtBQUtBLFdBQUwsSUFBb0IsQ0FBQyxLQUFLQSxXQUFMLENBQWlCQyxTQUFqQixDQUEyQkMsUUFBM0IsQ0FBb0MsMEJBQXBDLENBQXhCLEVBQXlGO0FBQy9GbkcsU0FBTW9GLElBQU4sQ0FBV0MsTUFBWCxDQUFrQixLQUFLWSxXQUF2QixFQUFvQywwQkFBcEM7QUFDQTtBQUNELE1BQUcsS0FBS25GLEVBQUwsS0FBWSxLQUFLWSxNQUFMLENBQVluQixLQUFaLENBQWtCc0IsTUFBbEIsR0FBMEIsQ0FBekMsRUFBNEM7QUFBRTtBQUM3QyxRQUFLdUUsV0FBTCxDQUFpQmpFLFNBQWpCLFNBQWdDLE9BQU8sS0FBS1QsTUFBTCxDQUFZakIsVUFBbkIsSUFBaUMsUUFBakMsR0FBMEMsS0FBS2lCLE1BQUwsQ0FBWWpCLFVBQXRELFFBQW9FVCxNQUFNQyxJQUFOLENBQVdDLElBQVgsQ0FBZ0JILElBQXBIO0FBQ0E7QUFDRCxFQXhKWTtBQXlKYmlCLGNBekphLDJCQXlKRztBQUNmLE1BQUlLLE9BQU9ELFNBQVNDLElBQXBCO0FBQ0EsTUFBR0EsS0FBSzZFLFNBQUwsQ0FBZUMsUUFBZixDQUF3QixxQkFBeEIsQ0FBSCxFQUFtRDtBQUNsRG5HLFNBQU1vRixJQUFOLENBQVdTLFNBQVgsQ0FBcUJ4RSxJQUFyQixFQUEyQixxQkFBM0I7QUFDQSxHQUZELE1BRU87QUFDTnJCLFNBQU1vRixJQUFOLENBQVdDLE1BQVgsQ0FBa0JoRSxJQUFsQixFQUF3QixxQkFBeEI7QUFDQTtBQUNELEVBaEtZO0FBaUtidUUsT0FqS2Esa0JBaUtOTCxFQWpLTSxFQWlLRjtBQUNWLE1BQUdjLEdBQUdkLEVBQUgsQ0FBSCxFQUFXO0FBQ1YsVUFBT2MsR0FBR2QsRUFBSCxFQUFPRCxPQUFQLEVBQVA7QUFDQSxHQUZELE1BRU87QUFDTixVQUFPbEUsU0FBUzRCLGFBQVQsQ0FBdUJ1QyxFQUF2QixDQUFQO0FBQ0E7QUFDRCxFQXZLWTtBQXdLYmUsV0F4S2Esc0JBd0tGNUQsT0F4S0UsRUF3S087QUFBQTs7QUFDbkIsTUFBRyxLQUFLaEIsTUFBTCxDQUFZbkIsS0FBWixDQUFrQixLQUFLTyxFQUF2QixDQUFILEVBQStCO0FBQzlCLE9BQUl5RSxLQUFLLEtBQUtLLE1BQUwsQ0FBWSxLQUFLbEUsTUFBTCxDQUFZbkIsS0FBWixDQUFrQixLQUFLTyxFQUF2QixFQUEyQnlFLEVBQXZDLENBQVQ7QUFDQSxPQUFHLEtBQUt6RSxFQUFMLEtBQVksQ0FBWixJQUFpQixDQUFDNEIsT0FBckIsRUFBOEI7QUFDN0IsU0FBS0wsU0FBTCxDQUFlLGVBQWYsRUFBZ0MsRUFBaEM7QUFDQWtFLGVBQVcsWUFBTTtBQUFFO0FBQ2xCLFlBQUt0RSxTQUFMLENBQWVzRCxFQUFmO0FBQ0EsS0FGRCxFQUVHLEdBRkg7QUFHQSxJQUxELE1BS087QUFDTixTQUFLbkQsY0FBTCxDQUFvQm1ELEVBQXBCLEVBQXdCN0MsT0FBeEI7QUFDQTtBQUNELEdBVkQsTUFVTztBQUNOLFFBQUtsQixLQUFMO0FBQ0E7QUFDRCxFQXRMWTtBQXVMYnNFLGtCQXZMYSwrQkF1TE87QUFBQTs7QUFDbkIsT0FBS0csV0FBTCxHQUFtQixLQUFLckYsS0FBTCxDQUFXNEYsZ0JBQVgsQ0FBNEIseUJBQTVCLEVBQXVELENBQXZELENBQW5CO0FBQ0EsT0FBS0osV0FBTCxHQUFtQixLQUFLeEYsS0FBTCxDQUFXNEYsZ0JBQVgsQ0FBNEIseUJBQTVCLEVBQXVELENBQXZELENBQW5CO0FBQ0EsTUFBSWpCLFdBQUo7QUFDQSxNQUFHLEtBQUthLFdBQVIsRUFBcUI7QUFDcEJwRyxTQUFNbUIsS0FBTixDQUFZLEtBQUtpRixXQUFqQixFQUE4QixPQUE5QixFQUF1QyxZQUFNO0FBQzVDLFdBQUtLLEtBQUwsQ0FBV2xCLEVBQVgsRUFBZSxNQUFmO0FBQ0EsSUFGRDtBQUdBO0FBQ0QsTUFBRyxLQUFLVSxXQUFSLEVBQXFCO0FBQ3BCakcsU0FBTW1CLEtBQU4sQ0FBWSxLQUFLOEUsV0FBakIsRUFBOEIsT0FBOUIsRUFBdUMsWUFBTTtBQUM1Q2pHLFVBQU1vRixJQUFOLENBQVdTLFNBQVgsQ0FBcUIsT0FBS1AsT0FBTCxFQUFyQixFQUFxQyxxQkFBckM7QUFDQSxXQUFLdkMsS0FBTCxDQUFXMkQsVUFBWCxDQUFzQkMsV0FBdEIsQ0FBa0MsT0FBSzVELEtBQXZDO0FBQ0EsV0FBS2pDLEVBQUwsSUFBVyxDQUFYO0FBQ0EsV0FBSzJGLEtBQUwsQ0FBV2xCLEVBQVgsRUFBZSxVQUFmO0FBQ0EsSUFMRDtBQU1BO0FBQ0R2RixRQUFNbUIsS0FBTixDQUFZLEtBQUtQLEtBQUwsQ0FBV29DLGFBQVgsQ0FBeUIsMEJBQXpCLENBQVosRUFBa0UsT0FBbEUsRUFBMkUsWUFBTTtBQUFFLFVBQUt4QixLQUFMO0FBQWUsR0FBbEc7QUFDQSxFQXpNWTtBQTBNYndFLGFBMU1hLHdCQTBNQTlELE1BMU1BLEVBME1RO0FBQUE7O0FBQ3BCLE1BQUkwRSxZQUFZLEtBQUtwRSxLQUFMLENBQVdyQixLQUEzQjtBQUNBZSxTQUFPMkUsS0FBUDtBQUNBLE1BQUdELFNBQUgsRUFBYztBQUNiLE9BQUdBLGNBQWMsT0FBakIsRUFBMEI7QUFDekJBLGdCQUFZLFNBQVo7QUFDQTtBQUNELE9BQUcsS0FBS0UsU0FBUixFQUFtQjtBQUNsQjlHLFVBQU1rQixXQUFOLENBQWtCLEtBQUs0RixTQUF2QjtBQUNBO0FBQ0QsUUFBS0EsU0FBTCxHQUFpQjlHLE1BQU1tQixLQUFOLENBQVllLE1BQVosRUFBb0IwRSxTQUFwQixFQUErQixVQUFDdEYsQ0FBRCxFQUFPO0FBQ3RELFFBQUdzRixhQUFhdEYsRUFBRXlGLElBQWxCLEVBQXdCO0FBQ3ZCLFNBQUd6RixFQUFFeUYsSUFBRixLQUFXLFNBQVgsSUFBd0J6RixFQUFFQyxPQUFGLEtBQWMsRUFBekMsRUFBNkM7QUFDN0NXLFlBQU8yRSxLQUFQO0FBQ0EsWUFBS0osS0FBTCxDQUFXdkUsTUFBWDtBQUNBO0FBQ0QsSUFOZ0IsQ0FBakI7QUFPQSxHQWRELE1BY087QUFDTjtBQUNBO0FBQ0QsRUE5Tlk7QUErTmJ1RSxNQS9OYSxpQkErTlB2RSxNQS9OTyxFQStOQzhFLE1BL05ELEVBK05TO0FBQUE7O0FBQ3JCQSxXQUFTQSxVQUFVLE1BQW5CO0FBQ0EsTUFBSSxLQUFLeEUsS0FBTCxDQUFXM0MsSUFBWCxJQUFtQm1ILFdBQVcsTUFBOUIsSUFBd0MsS0FBS3hFLEtBQUwsQ0FBV3lFLFFBQVgsSUFBdUJELFdBQVcsVUFBOUUsRUFBMEY7QUFDekYsT0FBSUUsVUFBVSxLQUFLMUUsS0FBTCxDQUFXd0UsTUFBWCxHQUFkO0FBQ0EsT0FBSUUsUUFBUUMsSUFBWixFQUFpQjtBQUNoQixXQUFPRCxRQUFRQyxJQUFSLENBQWMsWUFBTTtBQUMxQixZQUFLQyxTQUFMLENBQWVsRixNQUFmLEVBQXVCOEUsTUFBdkI7QUFDQSxLQUZNLENBQVA7QUFHQTtBQUNEOztBQUVELE9BQUtJLFNBQUwsQ0FBZWxGLE1BQWYsRUFBdUI4RSxNQUF2QjtBQUNBLEVBM09ZO0FBNE9iSSxVQTVPYSxxQkE0T0hsRixNQTVPRyxFQTRPSzhFLE1BNU9MLEVBNE9hO0FBQ3pCLE1BQUl6QixLQUFLLEtBQUtLLE1BQUwsQ0FBWSxLQUFLcEQsS0FBTCxDQUFXK0MsRUFBdkIsQ0FBVDtBQUNBQSxLQUFHVCxLQUFILENBQVNDLGFBQVQsR0FBeUIsRUFBekI7QUFDQVEsS0FBR1QsS0FBSCxDQUFTRSxVQUFULEdBQXNCLEVBQXRCO0FBQ0FPLEtBQUc4QixJQUFIO0FBQ0EsT0FBS3ZHLEVBQUw7QUFDQSxNQUFHa0csV0FBVyxVQUFkLEVBQTBCO0FBQ3pCLFFBQUtWLFVBQUw7QUFDQSxRQUFLakUsU0FBTCxDQUFlLFFBQWYsRUFBeUIsQ0FBQyxLQUFLdkIsRUFBTCxHQUFRLENBQVQsQ0FBekI7QUFDQTtBQUNELE1BQUdrRyxXQUFXLFVBQWQsRUFBMEI7QUFDekIsUUFBS1YsVUFBTCxDQUFnQixVQUFoQjtBQUNBLFFBQUtqRSxTQUFMLENBQWUsWUFBZixFQUE2QixDQUFDLEtBQUt2QixFQUFMLEdBQVEsQ0FBVCxDQUE3QjtBQUNBO0FBQ0QsRUExUFk7QUEyUGJVLE1BM1BhLG1CQTJQTDtBQUNQLE1BQUksS0FBS1YsRUFBTCxLQUFZLENBQUMsQ0FBakIsRUFBb0I7O0FBRXBCLE9BQUt1QixTQUFMLENBQWUsUUFBZixFQUF5QixDQUFDLEtBQUt2QixFQUFMLEdBQVEsQ0FBVCxDQUF6QjtBQUNBLE9BQUt3RyxJQUFMO0FBQ0EsT0FBS3RHLGFBQUw7QUFDQSxNQUFHLEtBQUtGLEVBQUwsS0FBWSxLQUFLWSxNQUFMLENBQVluQixLQUFaLENBQWtCc0IsTUFBakMsRUFBeUM7QUFDeEMsUUFBS1EsU0FBTCxDQUFlLE9BQWYsRUFBd0IsQ0FBQyxLQUFLdkIsRUFBTCxHQUFRLENBQVQsQ0FBeEI7QUFDQSxRQUFLQSxFQUFMLEdBQVUsQ0FBQyxDQUFYO0FBQ0E7QUFDRCxFQXJRWTs7QUFzUWJ5RyxRQUFNLGlCQUFVO0FBQ2YsT0FBS0MsUUFBTCxDQUFjLENBQWQsRUFBaUIsSUFBakI7QUFDQSxFQXhRWTtBQXlRYkMsTUFBSSxlQUFVO0FBQ2IsT0FBS2pHLEtBQUw7QUFDQSxFQTNRWTtBQTRRYmdHLFNBNVFhLG9CQTRRSjVGLENBNVFJLEVBNFFEOEYsU0E1UUMsRUE0UVU7QUFDdEIsT0FBSzVHLEVBQUwsR0FBVWMsQ0FBVjtBQUNBLE9BQUtaLGFBQUw7QUFDQSxNQUFHLEtBQUsrQixLQUFSLEVBQWU7QUFDZCxPQUFHLEtBQUtBLEtBQUwsQ0FBVzJELFVBQWQsRUFDQyxLQUFLM0QsS0FBTCxDQUFXMkQsVUFBWCxDQUFzQkMsV0FBdEIsQ0FBa0MsS0FBSzVELEtBQXZDO0FBQ0QvQyxTQUFNb0YsSUFBTixDQUFXUyxTQUFYLENBQXFCLEtBQUtQLE9BQUwsRUFBckIsRUFBcUMscUJBQXJDO0FBQ0E7QUFDRCxPQUFLcUMsSUFBTDtBQUNBLE1BQUdELFNBQUgsRUFBYztBQUNiLE9BQUlFLE1BQU0sS0FBS2hILEtBQUwsQ0FBV29DLGFBQVgsQ0FBeUIsS0FBekIsQ0FBVjtBQUNBLE9BQUk0RSxHQUFKLEVBQ0NBLElBQUlsQixVQUFKLENBQWVDLFdBQWYsQ0FBMkJpQixHQUEzQjtBQUNELFFBQUt0QixVQUFMO0FBQ0EsR0FMRCxNQUtPO0FBQ04sUUFBS0EsVUFBTCxDQUFnQixTQUFoQjtBQUNBLFFBQUt0RixhQUFMO0FBQ0E7QUFDRCxFQTlSWTtBQStSYjZHLGVBL1JhLDRCQStSSTtBQUNoQixTQUFPLEtBQUsvRyxFQUFaO0FBQ0EsRUFqU1k7QUFrU2JnSCxPQWxTYSxrQkFrU05DLFVBbFNNLEVBa1NNO0FBQ2xCLE1BQUcsS0FBS2hGLEtBQVIsRUFBYztBQUNiZ0YsZ0JBQWFBLGNBQWUsS0FBS2pILEVBQUwsR0FBUSxDQUFwQztBQUNBLFFBQUswRyxRQUFMLENBQWNPLFVBQWQ7QUFDQTtBQUNELEVBdlNZO0FBd1NiQyxTQXhTYSxzQkF3U0Y7QUFDVixTQUFPLEtBQUt0RyxNQUFMLENBQVluQixLQUFuQjtBQUNBLEVBMVNZO0FBMlNiMEgsU0EzU2Esb0JBMlNKQyxLQTNTSSxFQTJTRztBQUNmLE9BQUtDLE1BQUwsQ0FBWSxPQUFaLEVBQXFCRCxLQUFyQjtBQUNBO0FBN1NZLENBQWQsRUE4U0dsSSxNQUFNb0ksRUFBTixDQUFTQyxJQTlTWixFQThTa0JySSxNQUFNc0ksV0E5U3hCLEU7Ozs7Ozs7Ozs7OztBQ0xPLElBQUlDLGtCQUFLdkksTUFBTUMsSUFBTixDQUFXdUksT0FBWCxDQUFtQixPQUFuQixJQUE4QjtBQUM3Q3RJLE9BQUs7QUFDSkwsUUFBTSxVQURGO0FBRUpDLFFBQU0sV0FGRjtBQUdKQyxRQUFNO0FBSEY7QUFEd0MsQ0FBdkMsQzs7Ozs7Ozs7Ozs7O0FDQVA7QUFDTyxJQUFJMEksa0JBQUt6SSxNQUFNQyxJQUFOLENBQVd1SSxPQUFYLENBQW1CLE9BQW5CLElBQThCO0FBQzdDdEksT0FBSztBQUNKTCxRQUFNLFVBREY7QUFFSkMsUUFBTSxXQUZGO0FBR0pDLFFBQU07QUFIRjtBQUR3QyxDQUF2QyxDOzs7Ozs7Ozs7Ozs7QUNEQSxJQUFJMkksa0JBQUsxSSxNQUFNQyxJQUFOLENBQVd1SSxPQUFYLENBQW1CLE9BQW5CLElBQTRCO0FBQzNDdEksT0FBSztBQUNKTCxRQUFNLE1BREY7QUFFSkMsUUFBTSxVQUZGO0FBR0pDLFFBQU07QUFIRjtBQURzQyxDQUFyQyxDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUNPLElBQUk0SSxrQkFBSzNJLE1BQU1DLElBQU4sQ0FBV3VJLE9BQVgsQ0FBbUIsT0FBbkIsSUFBOEI7QUFDN0N0SSxPQUFLO0FBQ0pMLFFBQU0sV0FERjtBQUVKQyxRQUFNLFVBRkY7QUFHSkMsUUFBTTtBQUhGO0FBRHdDLENBQXZDLEM7Ozs7Ozs7Ozs7OztBQ0RBLElBQUk2SSxrQkFBSzVJLE1BQU1DLElBQU4sQ0FBV3VJLE9BQVgsQ0FBbUIsT0FBbkIsSUFBNEI7QUFDM0N0SSxPQUFLO0FBQ0pMLFFBQU0sVUFERjtBQUVKQyxRQUFNLFdBRkY7QUFHSkMsUUFBTTtBQUhGO0FBRHNDLENBQXJDLEM7Ozs7Ozs7Ozs7OztBQ0FQO0FBQ08sSUFBSThJLGtCQUFLN0ksTUFBTUMsSUFBTixDQUFXdUksT0FBWCxDQUFtQixPQUFuQixJQUE4QjtBQUM3Q3RJLE9BQUs7QUFDSkwsUUFBTSxVQURGO0FBRUpDLFFBQU0sWUFGRjtBQUdKQyxRQUFNO0FBSEY7QUFEd0MsQ0FBdkMsQzs7Ozs7Ozs7Ozs7O0FDREEsSUFBSStJLGtCQUFLOUksTUFBTUMsSUFBTixDQUFXdUksT0FBWCxDQUFtQixPQUFuQixJQUE0QjtBQUMzQ3RJLE9BQUs7QUFDSkwsUUFBTSxHQURGO0FBRUpDLFFBQU0sR0FGRjtBQUdKQyxRQUFNO0FBSEY7QUFEc0MsQ0FBckMsQzs7Ozs7Ozs7Ozs7O0FDQUEsSUFBSWdKLGtCQUFLL0ksTUFBTUMsSUFBTixDQUFXdUksT0FBWCxDQUFtQixPQUFuQixJQUE4QjtBQUM3Q3RJLE9BQUs7QUFDSkwsUUFBTSxTQURGO0FBRUpDLFFBQU0sVUFGRjtBQUdKQyxRQUFNO0FBSEY7QUFEd0MsQ0FBdkMsQzs7Ozs7Ozs7Ozs7O0FDQUEsSUFBSWlKLGtCQUFLaEosTUFBTUMsSUFBTixDQUFXdUksT0FBWCxDQUFtQixPQUFuQixJQUE0QjtBQUMzQ3RJLE9BQUs7QUFDSkwsUUFBTSxXQURGO0FBRUpDLFFBQU0sWUFGRjtBQUdKQyxRQUFNO0FBSEY7QUFEc0MsQ0FBckMsQzs7Ozs7Ozs7Ozs7O0FDQVA7QUFDTyxJQUFJa0osa0JBQUtqSixNQUFNQyxJQUFOLENBQVd1SSxPQUFYLENBQW1CLE9BQW5CLElBQThCO0FBQzdDdEksT0FBSztBQUNKTCxRQUFNLEtBREY7QUFFSkMsUUFBTSxJQUZGO0FBR0pDLFFBQU07QUFIRjtBQUR3QyxDQUF2QyxDIiwiZmlsZSI6ImhpbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jb2RlYmFzZS9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2NjEzNWE3MDM4YTkyMjIzYzJjMyIsImltcG9ydCBcIi4vaTE4bi9lblwiO1xyXG5pbXBvcnQgXCIuL2kxOG4vZnJcIjtcclxuaW1wb3J0IFwiLi9pMThuL2JlXCI7XHJcbmltcG9ydCBcIi4vaTE4bi9kZVwiO1xyXG5pbXBvcnQgXCIuL2kxOG4vZXNcIjtcclxuaW1wb3J0IFwiLi9pMThuL2l0XCI7XHJcbmltcG9ydCBcIi4vaTE4bi9qYVwiO1xyXG5pbXBvcnQgXCIuL2kxOG4vcHRcIjtcclxuaW1wb3J0IFwiLi9pMThuL3J1XCI7XHJcbmltcG9ydCBcIi4vaTE4bi96aFwiO1xyXG5cclxuZXhwb3J0IGxldCBsb2NhbGUgPSB7XHJcblx0bmV4dDogXCJOZXh0XCIsXHJcblx0cHJldjogXCJQcmV2aW91c1wiLFxyXG5cdGxhc3Q6IFwiRW5kIFRvdXJcIlxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvbG9jYWxlcy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL2hpbnQubGVzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgXCIuL2hpbnQubGVzc1wiO1xyXG5pbXBvcnQgeyBsb2NhbGUgfSBmcm9tIFwiLi9sb2NhbGVzXCI7XHJcblxyXG53ZWJpeC5pMThuLmhpbnQgPSB3ZWJpeC5leHRlbmQod2ViaXguaTE4biwgbG9jYWxlKTtcclxuXHJcbndlYml4LnByb3RvVUkoe1xyXG5cdG5hbWU6IFwiaGludFwiLFxyXG5cdGRlZmF1bHRzOiB7XHJcblx0XHRzdGVwczogW10sXHJcblx0XHRib3JkZXJsZXNzOiB0cnVlLFxyXG5cdFx0bmV4dEJ1dHRvbjogdHJ1ZSxcclxuXHRcdHByZXZCdXR0b246IHRydWVcclxuXHR9LFxyXG5cdCRpbml0KCkge1xyXG5cdFx0dGhpcy4kdmlldy5jbGFzc05hbWUgKz0gXCIgd2ViaXhfaGludF92aWV3XCI7XHJcblx0XHR0aGlzLl9pID0gLTE7XHJcblx0XHR0aGlzLmF0dGFjaEV2ZW50KFwib25EZXN0cnVjdFwiLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMuX3NldEJvZHlDbGFzcygpO1xyXG5cdFx0XHRpZih0aGlzLl9ldmVudE9iakVzYykge1xyXG5cdFx0XHRcdHdlYml4LmV2ZW50UmVtb3ZlKHRoaXMuX2V2ZW50T2JqRXNjKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLl9ldmVudE9iakVzYyA9IHdlYml4LmV2ZW50KGRvY3VtZW50LmJvZHksXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcblx0XHRcdC8vIGVzY2FwZVxyXG5cdFx0XHRpZiAoZS5rZXlDb2RlID09IDI3KXtcclxuXHRcdFx0XHR0aGlzLl9za2lwKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0c3RlcHNfc2V0dGVyKGNvbmZpZykge1xyXG5cdFx0dmFyIG5ld0NvbmZpZyA9IFtdO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjb25maWcubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uZmlnW2ldLnBhZGRpbmcgPSBjb25maWdbaV0ucGFkZGluZyB8fCAwO1xyXG5cdFx0XHRjb25maWdbaV0udGV4dCA9IGNvbmZpZ1tpXS50ZXh0IHx8IFwiXCI7XHJcblx0XHRcdG5ld0NvbmZpZy5wdXNoKGNvbmZpZ1tpXSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbmV3Q29uZmlnO1xyXG5cdH0sXHJcblx0X2RyYXdPdmVyKHN0ZXBFbCkge1xyXG5cdFx0dGhpcy4kdmlldy5pbm5lckhUTUwgKz0gYDxzdmcgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgY2xhc3M9XCJ3ZWJpeF9oaW50X292ZXJsYXlcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiPlxyXG5cdFx0XHQ8ZGVmcz5cclxuXHRcdFx0XHQ8bWFzayBpZD1cImhvbGVcIj5cclxuXHRcdFx0XHRcdDxyZWN0IGNsYXNzPVwid2ViaXhfaGludF9vdmVybGF5X2hvbGVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cIndoaXRlXCIvPlxyXG5cdFx0XHRcdFx0PHJlY3QgY2xhc3M9XCJ3ZWJpeF9oaW50X292ZXJsYXlfaG9sZSB3ZWJpeF9oaW50X292ZXJsYXlfaG9sZV9lbFwiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjBcIiBoZWlnaHQ9XCIwXCIgZmlsbD1cIndoaXRlXCIvPlxyXG5cdFx0XHRcdDwvbWFzaz5cclxuXHRcdFx0PC9kZWZzPlxyXG5cdFx0XHQ8cmVjdCBjbGFzcz1cIndlYml4X2hpbnRfb3ZlcmxheV9ob2xlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIG1hc2s9XCJ1cmwoI2hvbGUpXCIgLz5cclxuXHRcdDwvc3ZnPmA7XHJcblx0XHR0aGlzLl9zZXRQcm9wZXJ0aWVzKHN0ZXBFbCk7XHJcblx0XHR0aGlzLmNhbGxFdmVudChcIm9uQWZ0ZXJTdGFydFwiLCBbXSk7XHJcblx0fSxcclxuXHRfZHJhd0hpbnQoKSB7XHJcblx0XHRsZXQgc2V0dGluZ3MgPSB0aGlzLmNvbmZpZztcclxuXHRcdHRoaXMuJHZpZXcuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwid2ViaXhfaGludFwiPlxyXG5cdFx0XHQ8c3BhbiBjbGFzcz0nd2ViaXhfaGludF90aXRsZSc+JHt0aGlzLl9zdGVwLnRpdGxlP3RoaXMuX3N0ZXAudGl0bGU6XCJcIn08L3NwYW4+XHJcblx0XHRcdDxwIGNsYXNzPVwid2ViaXhfaGludF9sYWJlbFwiPiR7dGhpcy5fc3RlcC50ZXh0fTwvcD5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIndlYml4X2hpbnRfcHJvZ3Jlc3NcIj5cclxuXHRcdFx0XHQke3RoaXMuX2krMX0vJHt0aGlzLmNvbmZpZy5zdGVwcy5sZW5ndGh9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwid2ViaXhfaGludF9idXR0b25zXCI+XHJcblx0XHRcdFx0JHtzZXR0aW5ncy5wcmV2QnV0dG9uIT09IGZhbHNlP2A8YnV0dG9uIGNsYXNzPVwid2ViaXhfaGludF9idXR0b24gd2ViaXhfaGludF9idXR0b25fcHJldiB3ZWJpeF9oaW50X2J1dHRvbl9oaWRkZW5cIj4ke3R5cGVvZiBzZXR0aW5ncy5wcmV2QnV0dG9uID09IFwic3RyaW5nXCI/c2V0dGluZ3MucHJldkJ1dHRvbjpgJHt3ZWJpeC5pMThuLmhpbnQucHJldn1gfTwvYnV0dG9uPmA6XCJcIn1cclxuXHRcdFx0XHQke3NldHRpbmdzLm5leHRCdXR0b24hPT0gZmFsc2U/YDxidXR0b24gY2xhc3M9XCJ3ZWJpeF9oaW50X2J1dHRvbiB3ZWJpeF9oaW50X2J1dHRvbl9uZXh0XCI+JHt0eXBlb2Ygc2V0dGluZ3MubmV4dEJ1dHRvbiA9PSBcInN0cmluZ1wiP3NldHRpbmdzLm5leHRCdXR0b246YCR7d2ViaXguaTE4bi5oaW50Lm5leHR9YH08L2J1dHRvbj5gOlwiXCJ9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwid2ViaXhfaGludF9idXR0b25fY2xvc2VcIiB0aXRsZT1cIkNsb3NlXCI+JiMxMDAwNTs8L2J1dHRvbj5cclxuXHRcdDwvZGl2PmA7XHJcblx0fSxcclxuXHRfc2V0UHJvcGVydGllcyhzdGVwRWwsIHJlZnJlc2gpIHtcclxuXHRcdGlmKCF3ZWJpeC5lbnYubW9iaWxlKSB7XHJcblx0XHRcdHN0ZXBFbC5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLl9zdGVwID0gdGhpcy5jb25maWcuc3RlcHNbdGhpcy5faV07XHJcblx0XHR0aGlzLl9yZURyYXcoc3RlcEVsLCByZWZyZXNoKTtcclxuXHRcdHRoaXMuX2hpbnQgPSB0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIud2ViaXhfaGludFwiKTtcclxuXHJcblx0XHRsZXQgcGFkZGluZyA9IDMwO1xyXG5cdFx0bGV0IGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblx0XHRsZXQgYm94ID0gc3RlcEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0bGV0IGVsTGVmdCA9IGJveC5sZWZ0ICsgdGhpcy5fc3RlcC5wYWRkaW5nO1xyXG5cdFx0bGV0IGhpZ2hsaWdodFdpZHRoID0gYm94LndpZHRoO1xyXG5cdFx0bGV0IGhpZ2hsaWdodEhlaWdodCA9IGJveC5oZWlnaHQ7XHJcblx0XHRsZXQgaGludExlZnQgPSBlbExlZnQgLSB0aGlzLl9zdGVwLnBhZGRpbmc7XHJcblx0XHRsZXQgaGludFdpZHRoID0gdGhpcy5faGludC5vZmZzZXRXaWR0aDtcclxuXHRcdGxldCBoaW50SGVpZ2h0ID0gdGhpcy5faGludC5vZmZzZXRIZWlnaHQ7XHJcblx0XHRsZXQgZWxUb3AgPSB3ZWJpeC5lbnYubW9iaWxlID8gYm94LnRvcCArIHRoaXMuX3N0ZXAucGFkZGluZyA6IGJveC50b3AgKyB0aGlzLl9zdGVwLnBhZGRpbmcgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblx0XHRsZXQgaGludFRvcCA9IGVsVG9wICsgaGlnaGxpZ2h0SGVpZ2h0ICsgdGhpcy5fc3RlcC5wYWRkaW5nICsgcGFkZGluZztcclxuXHRcdGxldCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICYmIGRvY0VsZW0uY2xpZW50V2lkdGggPyBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCwgZG9jRWxlbS5jbGllbnRXaWR0aCkgOiB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2NFbGVtLmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5jbGllbnRXaWR0aDtcclxuXHRcdGxldCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgZG9jRWxlbS5jbGllbnRIZWlnaHQgPyBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCwgZG9jRWxlbS5jbGllbnRIZWlnaHQpIDogd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY0VsZW0uY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5jbGllbnRIZWlnaHQ7XHJcblx0XHRcclxuXHRcdHN0ZXBFbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhbGxcIjtcclxuXHRcdHN0ZXBFbC5zdHlsZS51c2VyU2VsZWN0ID0gXCJpbml0aWFsXCI7XHJcblxyXG5cdFx0Ly8gc2V0IGhpbnQgcG9zaXRpb25cclxuXHRcdGlmKGVsTGVmdCAtIHdpbmRvd1dpZHRoID4gMCkge1xyXG5cdFx0XHRlbExlZnQgPSBlbExlZnQgLSB3aW5kb3dXaWR0aCArIGhpbnRXaWR0aCArIGhpZ2hsaWdodFdpZHRoO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmKHdpbmRvd0hlaWdodCAvMiA8IGVsVG9wKSB7IC8vIGJvdHRvbVxyXG5cdFx0XHRoaW50VG9wID0gZWxUb3AgLSBoaW50SGVpZ2h0IC0gcGFkZGluZyAtIHRoaXMuX3N0ZXAucGFkZGluZyoyO1xyXG5cdFx0fSBlbHNlIGlmKHdpbmRvd1dpZHRoIC8yIDwgZWxMZWZ0ICYmIGVsTGVmdCArIGhpbnRXaWR0aCA8IHdpbmRvd1dpZHRoICYmIGhpZ2hsaWdodFdpZHRoICsgaGludFdpZHRoIDwgd2luZG93V2lkdGgpIHsgLy8gcmlnaHRcclxuXHRcdFx0aGludFRvcCA9IGhpZ2hsaWdodEhlaWdodCAvIDIgKyBlbFRvcCAtIHRoaXMuX3N0ZXAucGFkZGluZztcclxuXHRcdFx0aGludExlZnQgPSBlbExlZnQgLSBoaW50V2lkdGggLSB0aGlzLl9zdGVwLnBhZGRpbmcgLSBwYWRkaW5nO1xyXG5cdFx0fSBlbHNlIGlmKHdpbmRvd1dpZHRoIC8yID4gZWxMZWZ0ICYmIGVsTGVmdCArIGhpbnRXaWR0aCArIGhpZ2hsaWdodFdpZHRoIDwgd2luZG93V2lkdGgpIHsgLy8gbGVmdFxyXG5cdFx0XHRoaW50TGVmdCA9IGhpZ2hsaWdodFdpZHRoICsgZWxMZWZ0ICsgcGFkZGluZztcclxuXHRcdFx0aGludFRvcCA9IGVsVG9wIC0gdGhpcy5fc3RlcC5wYWRkaW5nO1xyXG5cdFx0fSBlbHNlIGlmKGhpbnRUb3A+d2luZG93SGVpZ2h0ICYmIGhpbnRIZWlnaHQraGlnaGxpZ2h0SGVpZ2h0PHdpbmRvd0hlaWdodCkvL3RvcCwgYnV0IGhpbnQgZG9lcyBub3QgZml0XHJcblx0XHRcdGhpbnRUb3AgPSBlbFRvcCAtIGhpbnRIZWlnaHQgLSBwYWRkaW5nIC0gdGhpcy5fc3RlcC5wYWRkaW5nKjI7XHJcblx0XHRlbHNlIGlmKGhpbnRUb3A+d2luZG93SGVpZ2h0KXsgXHRcclxuXHRcdFx0aGludExlZnQgPSBlbExlZnQgLSBoaW50V2lkdGggLSB0aGlzLl9zdGVwLnBhZGRpbmcqMiAtIHBhZGRpbmc7XHJcblx0XHRcdGhpbnRUb3AgPSBlbFRvcCAtIHRoaXMuX3N0ZXAucGFkZGluZztcclxuXHRcdH1cclxuXHJcblx0XHRpZihoaW50TGVmdCArIGhpbnRXaWR0aCA+IHdpbmRvd1dpZHRoKSB7IC8vIGZvciBvdmVyZmxvd1xyXG5cdFx0XHRoaW50TGVmdCA9IHdpbmRvd1dpZHRoIC0gaGludFdpZHRoO1xyXG5cdFx0fSBlbHNlIGlmKGhpbnRUb3AgPCAwIHx8IGhpbnRUb3AgPndpbmRvd0hlaWdodCkge1xyXG5cdFx0XHRoaW50VG9wID0gcGFkZGluZztcclxuXHRcdH0gZWxzZSBpZih3aW5kb3dXaWR0aCA8IGhpZ2hsaWdodFdpZHRoIHx8IGhpbnRMZWZ0IDwgMCkge1xyXG5cdFx0XHRoaW50TGVmdCA9IHBhZGRpbmc7XHJcblx0XHR9XHJcblx0XHRpZih3ZWJpeC5lbnYubW9iaWxlKSB7XHJcblx0XHRcdHN0ZXBFbC5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLl9oaW50LnN0eWxlLmNzc1RleHQgPSBgdG9wOiR7aGludFRvcH1weDsgbGVmdDoke2hpbnRMZWZ0fXB4O2A7XHJcblx0XHR0aGlzLl9zZXRBdHRyaWJ1dGVzKHRoaXMuJHZpZXcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndlYml4X2hpbnRfb3ZlcmxheV9ob2xlX2VsXCIpWzBdLCB7XCJ4XCI6ZWxMZWZ0LXRoaXMuX3N0ZXAucGFkZGluZyoyLCBcInlcIjplbFRvcC10aGlzLl9zdGVwLnBhZGRpbmcqMiwgXCJ3aWR0aFwiOmhpZ2hsaWdodFdpZHRoK3RoaXMuX3N0ZXAucGFkZGluZyAqMiwgXCJoZWlnaHRcIjpoaWdobGlnaHRIZWlnaHQrdGhpcy5fc3RlcC5wYWRkaW5nKjJ9KTtcclxuXHRcdHdlYml4Lmh0bWwuYWRkQ3NzKHRoaXMuZ2V0Tm9kZSgpLCBcIndlYml4X2hpbnRfYW5pbWF0ZWRcIik7XHJcblx0fSxcclxuXHRfc2V0QXR0cmlidXRlcyhlbCwgYXR0cnMpIHtcclxuXHRcdGZvcih2YXIga2V5IGluIGF0dHJzKSB7XHJcblx0XHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0X3JlRHJhdyhzdGVwRWwsIHJlZnJlc2gpIHtcclxuXHRcdGxldCB0aXRsZSA9IHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcIi53ZWJpeF9oaW50X3RpdGxlXCIpO1xyXG5cdFx0bGV0IGVsO1xyXG5cclxuXHRcdHRoaXMuX3N0ZXAuZXZlbnRFbD9lbCA9IHRoaXMuX2dldEVsKHRoaXMuX3N0ZXAuZXZlbnRFbCk6ZWwgPSBzdGVwRWw7XHJcblx0XHRpZih0aGlzLl9pID4gMCAmJiAhcmVmcmVzaCkge1xyXG5cdFx0XHR3ZWJpeC5odG1sLnJlbW92ZUNzcyh0aGlzLmdldE5vZGUoKSwgXCJ3ZWJpeF9oaW50X2FuaW1hdGVkXCIpO1xyXG5cdFx0XHR0aXRsZS5pbm5lckhUTUwgPSB0aGlzLl9zdGVwLnRpdGxlIHx8IFwiXCI7XHJcblx0XHRcdHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcIi53ZWJpeF9oaW50X2xhYmVsXCIpLmlubmVySFRNTCA9IHRoaXMuX3N0ZXAudGV4dCB8fCBcIlwiO1xyXG5cdFx0XHR0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIud2ViaXhfaGludF9wcm9ncmVzc1wiKS5pbm5lckhUTUwgPSBgJHt0aGlzLl9pKzF9LyR7dGhpcy5jb25maWcuc3RlcHMubGVuZ3RofWA7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9kcmF3SGludCgpO1xyXG5cdFx0XHR0aGlzLl9zZXRFdmVudHNCdXR0b25zKGVsKTtcclxuXHRcdH1cclxuXHRcdGlmKCF0aGlzLl9zdGVwLnRpdGxlICYmIHRpdGxlKSB7XHJcblx0XHRcdHRpdGxlLnN0eWxlLm1hcmdpbiA9IFwiMFwiO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fc2V0RWxFdmVudHMoZWwpO1xyXG5cclxuXHRcdGlmKHRoaXMuX2kgPiAwKSB7IC8vIHByZXZpb3VzIGJ1dHRvbiBzaG93XHJcblx0XHRcdHdlYml4Lmh0bWwucmVtb3ZlQ3NzKHRoaXMuX3ByZXZCdXR0b24sIFwid2ViaXhfaGludF9idXR0b25faGlkZGVuXCIpO1xyXG5cdFx0fSBlbHNlIGlmKHRoaXMuX3ByZXZCdXR0b24gJiYgIXRoaXMuX3ByZXZCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwid2ViaXhfaGludF9idXR0b25faGlkZGVuXCIpKSB7XHJcblx0XHRcdHdlYml4Lmh0bWwuYWRkQ3NzKHRoaXMuX3ByZXZCdXR0b24sIFwid2ViaXhfaGludF9idXR0b25faGlkZGVuXCIpO1xyXG5cdFx0fVxyXG5cdFx0aWYodGhpcy5faSA9PT0gdGhpcy5jb25maWcuc3RlcHMubGVuZ3RoIC0xKSB7IC8vIG5leHQgYnV0dG9uIHRleHRcclxuXHRcdFx0dGhpcy5fbmV4dEJ1dHRvbi5pbm5lckhUTUwgPSBgJHt0eXBlb2YgdGhpcy5jb25maWcubmV4dEJ1dHRvbiA9PSBcInN0cmluZ1wiP3RoaXMuY29uZmlnLm5leHRCdXR0b246YCR7d2ViaXguaTE4bi5oaW50Lmxhc3R9YH1gO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0X3NldEJvZHlDbGFzcygpIHtcclxuXHRcdGxldCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuXHRcdGlmKGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwid2ViaXhfaGludF9vdmVyZmxvd1wiKSkge1xyXG5cdFx0XHR3ZWJpeC5odG1sLnJlbW92ZUNzcyhib2R5LCBcIndlYml4X2hpbnRfb3ZlcmZsb3dcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR3ZWJpeC5odG1sLmFkZENzcyhib2R5LCBcIndlYml4X2hpbnRfb3ZlcmZsb3dcIik7XHJcblx0XHR9XHJcblx0fSxcclxuXHRfZ2V0RWwoZWwpIHtcclxuXHRcdGlmKCQkKGVsKSkge1xyXG5cdFx0XHRyZXR1cm4gJCQoZWwpLmdldE5vZGUoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdF9kcmF3U3RlcHMocmVmcmVzaCkge1xyXG5cdFx0aWYodGhpcy5jb25maWcuc3RlcHNbdGhpcy5faV0pIHtcclxuXHRcdFx0bGV0IGVsID0gdGhpcy5fZ2V0RWwodGhpcy5jb25maWcuc3RlcHNbdGhpcy5faV0uZWwpO1xyXG5cdFx0XHRpZih0aGlzLl9pID09PSAwICYmICFyZWZyZXNoKSB7XHJcblx0XHRcdFx0dGhpcy5jYWxsRXZlbnQoXCJvbkJlZm9yZVN0YXJ0XCIsIFtdKTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHsgLy8gZm9yIGZpcnN0IGluaXRcclxuXHRcdFx0XHRcdHRoaXMuX2RyYXdPdmVyKGVsKTtcclxuXHRcdFx0XHR9LCAxMDApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuX3NldFByb3BlcnRpZXMoZWwsIHJlZnJlc2gpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9za2lwKCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRfc2V0RXZlbnRzQnV0dG9ucygpIHtcclxuXHRcdHRoaXMuX3ByZXZCdXR0b24gPSB0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud2ViaXhfaGludF9idXR0b25fcHJldlwiKVswXTtcclxuXHRcdHRoaXMuX25leHRCdXR0b24gPSB0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud2ViaXhfaGludF9idXR0b25fbmV4dFwiKVswXTtcclxuXHRcdGxldCBlbDtcclxuXHRcdGlmKHRoaXMuX25leHRCdXR0b24pIHtcclxuXHRcdFx0d2ViaXguZXZlbnQodGhpcy5fbmV4dEJ1dHRvbiwgXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5fbmV4dChlbCwgXCJuZXh0XCIpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGlmKHRoaXMuX3ByZXZCdXR0b24pIHtcclxuXHRcdFx0d2ViaXguZXZlbnQodGhpcy5fcHJldkJ1dHRvbiwgXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRcdFx0d2ViaXguaHRtbC5yZW1vdmVDc3ModGhpcy5nZXROb2RlKCksIFwid2ViaXhfaGludF9hbmltYXRlZFwiKTtcclxuXHRcdFx0XHR0aGlzLl9oaW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5faGludCk7XHJcblx0XHRcdFx0dGhpcy5faSAtPSAyO1xyXG5cdFx0XHRcdHRoaXMuX25leHQoZWwsIFwicHJldmlvdXNcIik7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0d2ViaXguZXZlbnQodGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwiLndlYml4X2hpbnRfYnV0dG9uX2Nsb3NlXCIpLCBcImNsaWNrXCIsICgpID0+IHsgdGhpcy5fc2tpcCgpOyB9KTtcclxuXHR9LFxyXG5cdF9zZXRFbEV2ZW50cyhzdGVwRWwpIHtcclxuXHRcdGxldCBldmVudFN0ZXAgPSB0aGlzLl9zdGVwLmV2ZW50O1xyXG5cdFx0c3RlcEVsLmZvY3VzKCk7XHJcblx0XHRpZihldmVudFN0ZXApIHtcclxuXHRcdFx0aWYoZXZlbnRTdGVwID09PSBcImVudGVyXCIpIHtcclxuXHRcdFx0XHRldmVudFN0ZXAgPSBcImtleWRvd25cIjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZih0aGlzLl9ldmVudE9iaikge1xyXG5cdFx0XHRcdHdlYml4LmV2ZW50UmVtb3ZlKHRoaXMuX2V2ZW50T2JqKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLl9ldmVudE9iaiA9IHdlYml4LmV2ZW50KHN0ZXBFbCwgZXZlbnRTdGVwLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGlmKGV2ZW50U3RlcCA9PSBlLnR5cGUpIHtcclxuXHRcdFx0XHRcdGlmKGUudHlwZSA9PT0gXCJrZXlkb3duXCIgJiYgZS5rZXlDb2RlICE9PSAxMykgcmV0dXJuO1xyXG5cdFx0XHRcdFx0c3RlcEVsLmZvY3VzKCk7XHJcblx0XHRcdFx0XHR0aGlzLl9uZXh0KHN0ZXBFbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHR9LFxyXG5cdF9uZXh0KHN0ZXBFbCwgYWN0aW9uKSB7XHJcblx0XHRhY3Rpb24gPSBhY3Rpb24gfHwgXCJuZXh0XCI7XHJcblx0XHRpZiAodGhpcy5fc3RlcC5uZXh0ICYmIGFjdGlvbiA9PT0gXCJuZXh0XCIgfHwgdGhpcy5fc3RlcC5wcmV2aW91cyAmJiBhY3Rpb24gPT09IFwicHJldmlvdXNcIikge1xyXG5cdFx0XHRsZXQgcHJvbWlzZSA9IHRoaXMuX3N0ZXBbYWN0aW9uXSgpO1xyXG5cdFx0XHRpZiAocHJvbWlzZS50aGVuKXtcclxuXHRcdFx0XHRyZXR1cm4gcHJvbWlzZS50aGVuKCAoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLl9uZXh0U3RlcChzdGVwRWwsIGFjdGlvbik7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLl9uZXh0U3RlcChzdGVwRWwsIGFjdGlvbik7XHJcblx0fSxcclxuXHRfbmV4dFN0ZXAoc3RlcEVsLCBhY3Rpb24pIHtcclxuXHRcdGxldCBlbCA9IHRoaXMuX2dldEVsKHRoaXMuX3N0ZXAuZWwpO1xyXG5cdFx0ZWwuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiXCI7XHJcblx0XHRlbC5zdHlsZS51c2VyU2VsZWN0ID0gXCJcIjtcclxuXHRcdGVsLmJsdXIoKTtcclxuXHRcdHRoaXMuX2krKztcclxuXHRcdGlmKGFjdGlvbiAhPT0gXCJwcmV2aW91c1wiKSB7XHJcblx0XHRcdHRoaXMuX2RyYXdTdGVwcygpO1xyXG5cdFx0XHR0aGlzLmNhbGxFdmVudChcIm9uTmV4dFwiLCBbdGhpcy5faSsxXSk7XHJcblx0XHR9XHJcblx0XHRpZihhY3Rpb24gPT09IFwicHJldmlvdXNcIikge1xyXG5cdFx0XHR0aGlzLl9kcmF3U3RlcHMoXCJwcmV2aW91c1wiKTtcclxuXHRcdFx0dGhpcy5jYWxsRXZlbnQoXCJvblByZXZpb3VzXCIsIFt0aGlzLl9pKzFdKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdF9za2lwKCkge1xyXG5cdFx0aWYgKHRoaXMuX2kgPT09IC0xKSByZXR1cm47XHJcblxyXG5cdFx0dGhpcy5jYWxsRXZlbnQoXCJvblNraXBcIiwgW3RoaXMuX2krMV0pO1xyXG5cdFx0dGhpcy5oaWRlKCk7XHJcblx0XHR0aGlzLl9zZXRCb2R5Q2xhc3MoKTtcclxuXHRcdGlmKHRoaXMuX2kgPT09IHRoaXMuY29uZmlnLnN0ZXBzLmxlbmd0aCkge1xyXG5cdFx0XHR0aGlzLmNhbGxFdmVudChcIm9uRW5kXCIsIFt0aGlzLl9pKzFdKTtcclxuXHRcdFx0dGhpcy5faSA9IC0xO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0c3RhcnQ6ZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuX3JlZnJlc2goMCwgdHJ1ZSk7XHJcblx0fSxcclxuXHRlbmQ6ZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuX3NraXAoKTtcclxuXHR9LFxyXG5cdF9yZWZyZXNoKGksIGZpcnN0RHJhdykge1xyXG5cdFx0dGhpcy5faSA9IGk7XHJcblx0XHR0aGlzLl9zZXRCb2R5Q2xhc3MoKTtcclxuXHRcdGlmKHRoaXMuX2hpbnQpIHtcclxuXHRcdFx0aWYodGhpcy5faGludC5wYXJlbnROb2RlKVxyXG5cdFx0XHRcdHRoaXMuX2hpbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9oaW50KTtcclxuXHRcdFx0d2ViaXguaHRtbC5yZW1vdmVDc3ModGhpcy5nZXROb2RlKCksIFwid2ViaXhfaGludF9hbmltYXRlZFwiKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuc2hvdygpO1xyXG5cdFx0aWYoZmlyc3REcmF3KSB7XHJcblx0XHRcdGxldCBzdmcgPSB0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIik7XHJcblx0XHRcdGlmIChzdmcpXHJcblx0XHRcdFx0c3ZnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3ZnKTtcclxuXHRcdFx0dGhpcy5fZHJhd1N0ZXBzKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9kcmF3U3RlcHMoXCJyZWZyZXNoXCIpO1xyXG5cdFx0XHR0aGlzLl9zZXRCb2R5Q2xhc3MoKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdGdldEN1cnJlbnRTdGVwKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2k7XHJcblx0fSxcclxuXHRyZXN1bWUoc3RlcE51bWJlcikge1xyXG5cdFx0aWYodGhpcy5faGludCl7XHJcblx0XHRcdHN0ZXBOdW1iZXIgPSBzdGVwTnVtYmVyIHx8ICh0aGlzLl9pKzEpO1xyXG5cdFx0XHR0aGlzLl9yZWZyZXNoKHN0ZXBOdW1iZXIpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0Z2V0U3RlcHMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25maWcuc3RlcHM7XHJcblx0fSxcclxuXHRzZXRTdGVwcyh2YWx1ZSkge1xyXG5cdFx0dGhpcy5kZWZpbmUoXCJzdGVwc1wiLCB2YWx1ZSk7XHJcblx0fVxyXG59LCB3ZWJpeC51aS52aWV3LCB3ZWJpeC5FdmVudFN5c3RlbSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9oaW50LmpzIiwiZXhwb3J0IGxldCBiZSA9IHdlYml4LmkxOG4ubG9jYWxlc1tcImJlLUJZXCJdID0ge1xyXG5cdGhpbnQ6e1xyXG5cdFx0bmV4dDogXCLQndCw0YHRgtGD0L/QvdGLXCIsXHJcblx0XHRwcmV2OiBcItCf0LDQv9GP0YDRjdC00L3RllwiLFxyXG5cdFx0bGFzdDogXCLQmtCw0L3QtdGGINCi0YPRgNCwXCJcclxuXHR9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2JlLmpzIiwiLypHZXJtYW4gKEdlcm1hbnkpIGxvY2FsZSovXHJcbmV4cG9ydCBsZXQgZGUgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJkZS1ERVwiXSA9IHtcclxuXHRoaW50OntcclxuXHRcdG5leHQ6IFwiTsOkY2hzdGVyXCIsXHJcblx0XHRwcmV2OiBcIkJpc2hlcmlnZVwiLFxyXG5cdFx0bGFzdDogXCJFbmRlIFRvdXJcIlxyXG5cdH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2RlLmpzIiwiZXhwb3J0IGxldCBlbiA9IHdlYml4LmkxOG4ubG9jYWxlc1tcImVuLVVTXCJdPXtcclxuXHRoaW50OntcclxuXHRcdG5leHQ6IFwiTmV4dFwiLFxyXG5cdFx0cHJldjogXCJQcmV2aW91c1wiLFxyXG5cdFx0bGFzdDogXCJFbmQgVG91clwiXHJcblx0fVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9lbi5qcyIsIi8qU3BhbmlzaCAoU3BhaW4sIEludGVybmF0aW9uYWwgU29ydCkgbG9jYWxlKi9cclxuZXhwb3J0IGxldCBlcyA9IHdlYml4LmkxOG4ubG9jYWxlc1tcImVzLUVTXCJdID0ge1xyXG5cdGhpbnQ6e1xyXG5cdFx0bmV4dDogXCJTaWd1aWVudGVcIixcclxuXHRcdHByZXY6IFwiQW50ZXJpb3JcIixcclxuXHRcdGxhc3Q6IFwiRmluIGRlIFZpYWplXCJcclxuXHR9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9lcy5qcyIsImV4cG9ydCBsZXQgZnIgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJmci1GUlwiXT17XHJcblx0aGludDp7XHJcblx0XHRuZXh0OiBcIlByb2NoYWluXCIsXHJcblx0XHRwcmV2OiBcIlByw6ljw6lkZW50XCIsXHJcblx0XHRsYXN0OiBcIkVuZCBUb3VyXCJcclxuXHR9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2ZyLmpzIiwiLypJdGFsaWFuIChJdGFseSkgbG9jYWxlKi9cclxuZXhwb3J0IGxldCBpdCA9IHdlYml4LmkxOG4ubG9jYWxlc1tcIml0LUlUXCJdID0ge1xyXG5cdGhpbnQ6e1xyXG5cdFx0bmV4dDogXCJTZWd1ZW50ZVwiLFxyXG5cdFx0cHJldjogXCJQcmVjZWRlbnRlXCIsXHJcblx0XHRsYXN0OiBcIkVuZCBUb3VyXCJcclxuXHR9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9pdC5qcyIsImV4cG9ydCBsZXQgamEgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJqYS1KUFwiXT17XHJcblx0aGludDp7XHJcblx0XHRuZXh0OiBcIuasoVwiLFxyXG5cdFx0cHJldjogXCLliY1cIixcclxuXHRcdGxhc3Q6IFwi57WC5LqG44OE44Ki44O8XCJcclxuXHR9XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2phLmpzIiwiZXhwb3J0IGxldCBwdCA9IHdlYml4LmkxOG4ubG9jYWxlc1tcInB0LUJSXCJdID0ge1xyXG5cdGhpbnQ6e1xyXG5cdFx0bmV4dDogXCJQcsOzeGltb1wiLFxyXG5cdFx0cHJldjogXCJBbnRlcmlvclwiLFxyXG5cdFx0bGFzdDogXCJFbmQgVG91clwiXHJcblx0fVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vcHQuanMiLCJleHBvcnQgbGV0IHJ1ID0gd2ViaXguaTE4bi5sb2NhbGVzW1wicnUtUlVcIl09e1xyXG5cdGhpbnQ6e1xyXG5cdFx0bmV4dDogXCLQodC70LXQtNGD0Y7RidC40LlcIixcclxuXHRcdHByZXY6IFwi0J/RgNC10LTRi9C00YPRidC40LlcIixcclxuXHRcdGxhc3Q6IFwi0JrQvtC90LXRhiDQotGD0YDQsFwiXHJcblx0fVxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9ydS5qcyIsIi8qQ2hpbmVzZSAoU2ltcGxpZmllZCwgUFJDKSBsb2NhbGUqL1xyXG5leHBvcnQgbGV0IHpoID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiemgtQ05cIl0gPSB7XHJcblx0aGludDp7XHJcblx0XHRuZXh0OiBcIuS4i+S4gOS4qlwiLFxyXG5cdFx0cHJldjogXCLku6XliY1cIixcclxuXHRcdGxhc3Q6IFwi57uT5p2f5beh6KeGXCJcclxuXHR9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi96aC5qcyJdLCJzb3VyY2VSb290IjoiIn0=