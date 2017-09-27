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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _en = __webpack_require__(6);

var _fr = __webpack_require__(8);

var _be = __webpack_require__(4);

var _de = __webpack_require__(5);

var _es = __webpack_require__(7);

var _it = __webpack_require__(9);

var _ja = __webpack_require__(10);

var _pt = __webpack_require__(11);

var _ru = __webpack_require__(12);

var _zh = __webpack_require__(13);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var locale = exports.locale = {
	next: "Next",
	prev: "Previous",
	last: "End Tour"
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var _locales = __webpack_require__(1);

__webpack_require__(0);

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
		this._setBodyClass();
		this.attachEvent("onDestruct", function () {
			_this._setBodyClass();
			if (_this._eventObjEsc) {
				webix.eventRemove(_this._eventObjEsc);
			}
			if (_this._eventObjClose) {
				webix.eventRemove(_this._eventObjClose);
			}
		});
		this._eventObjEsc = webix.event(document.body, "keydown", function (e) {
			// escape
			if (e.keyCode == 27) {
				_this._skip();
			}
		});
		this._eventObjClose = webix.event(document.documentElement, "click", function (e) {
			if (e.target == document.documentElement) {
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
		var highlightWidth = stepEl.getBoundingClientRect().width;
		var highlightHeight = stepEl.getBoundingClientRect().height;
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
			hintTop = elTop - hintHeight - padding - this._step.padding;
		} else if (windowWidth / 2 < elLeft && elLeft + hintWidth < windowWidth && highlightWidth + hintWidth < windowWidth) {
			// right
			hintTop = highlightHeight / 2 + elTop - this._step.padding;
			hintLeft = elLeft - hintWidth - this._step.padding - padding;
		} else if (windowWidth / 2 > elLeft && elLeft + hintWidth + highlightWidth < windowWidth) {
			// left
			hintLeft = highlightWidth + elLeft + padding + this._step.padding;
			hintTop = elTop - this._step.padding;
		}

		if (hintLeft + hintWidth > windowWidth) {
			// for overflow
			hintLeft = windowWidth - hintWidth;
		} else if (hintTop < 0) {
			hintTop = 0;
		} else if (windowWidth < highlightWidth) {
			hintLeft = 0;
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
		if (!this._hint) {
			this._setBodyClass();
		} else {
			this._hint.parentNode.removeChild(this._hint);
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
		stepNumber = stepNumber || this._i + 1;
		this._refresh(stepNumber);
	},
	getSteps: function getSteps() {
		return this.config.steps;
	},
	setSteps: function setSteps(value) {
		this.define("steps", value);
	}
}, webix.ui.view, webix.EventSystem);

/***/ }),
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmU1NjhlZWY2M2ExMWZjNWEyMTAiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL2xvY2FsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9sb2NhbGVzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5sZXNzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vYmUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL2RlLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9lbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL2ZyLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9pdC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vamEuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL3B0LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9ydS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vemguanMiXSwibmFtZXMiOlsibG9jYWxlIiwibmV4dCIsInByZXYiLCJsYXN0Iiwid2ViaXgiLCJpMThuIiwiaGludCIsImV4dGVuZCIsInByb3RvVUkiLCJuYW1lIiwiZGVmYXVsdHMiLCJzdGVwcyIsImJvcmRlcmxlc3MiLCJuZXh0QnV0dG9uIiwicHJldkJ1dHRvbiIsIiRpbml0IiwiJHZpZXciLCJjbGFzc05hbWUiLCJfaSIsIl9zZXRCb2R5Q2xhc3MiLCJhdHRhY2hFdmVudCIsIl9ldmVudE9iakVzYyIsImV2ZW50UmVtb3ZlIiwiX2V2ZW50T2JqQ2xvc2UiLCJldmVudCIsImRvY3VtZW50IiwiYm9keSIsImUiLCJrZXlDb2RlIiwiX3NraXAiLCJkb2N1bWVudEVsZW1lbnQiLCJ0YXJnZXQiLCJzdGVwc19zZXR0ZXIiLCJjb25maWciLCJuZXdDb25maWciLCJpIiwibGVuZ3RoIiwicGFkZGluZyIsInRleHQiLCJwdXNoIiwiX2RyYXdPdmVyIiwic3RlcEVsIiwiaW5uZXJIVE1MIiwiX3NldFByb3BlcnRpZXMiLCJjYWxsRXZlbnQiLCJfZHJhd0hpbnQiLCJzZXR0aW5ncyIsIl9zdGVwIiwidGl0bGUiLCJyZWZyZXNoIiwiZW52IiwibW9iaWxlIiwic2Nyb2xsSW50b1ZpZXciLCJfcmVEcmF3IiwiX2hpbnQiLCJxdWVyeVNlbGVjdG9yIiwiZG9jRWxlbSIsImJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImVsTGVmdCIsImxlZnQiLCJoaWdobGlnaHRXaWR0aCIsIndpZHRoIiwiaGlnaGxpZ2h0SGVpZ2h0IiwiaGVpZ2h0IiwiaGludExlZnQiLCJoaW50V2lkdGgiLCJvZmZzZXRXaWR0aCIsImhpbnRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJlbFRvcCIsInRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiaGludFRvcCIsIndpbmRvd1dpZHRoIiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwiTWF0aCIsIm1pbiIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJ1c2VyU2VsZWN0IiwiY3NzVGV4dCIsIl9zZXRBdHRyaWJ1dGVzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImh0bWwiLCJhZGRDc3MiLCJnZXROb2RlIiwiZWwiLCJhdHRycyIsImtleSIsInNldEF0dHJpYnV0ZSIsImV2ZW50RWwiLCJfZ2V0RWwiLCJyZW1vdmVDc3MiLCJfc2V0RXZlbnRzQnV0dG9ucyIsIm1hcmdpbiIsIl9zZXRFbEV2ZW50cyIsIl9wcmV2QnV0dG9uIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJfbmV4dEJ1dHRvbiIsIiQkIiwiX2RyYXdTdGVwcyIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX25leHQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJldmVudFN0ZXAiLCJmb2N1cyIsIl9ldmVudE9iaiIsInR5cGUiLCJhY3Rpb24iLCJwcmV2aW91cyIsInByb21pc2UiLCJ0aGVuIiwiX25leHRTdGVwIiwiYmx1ciIsImhpZGUiLCJzdGFydCIsIl9yZWZyZXNoIiwiZW5kIiwiZmlyc3REcmF3Iiwic2hvdyIsInN2ZyIsImdldEN1cnJlbnRTdGVwIiwicmVzdW1lIiwic3RlcE51bWJlciIsImdldFN0ZXBzIiwic2V0U3RlcHMiLCJ2YWx1ZSIsImRlZmluZSIsInVpIiwidmlldyIsIkV2ZW50U3lzdGVtIiwiYmUiLCJsb2NhbGVzIiwiZGUiLCJlbiIsImVzIiwiZnIiLCJpdCIsImphIiwicHQiLCJydSIsInpoIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNoRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0Esa0M7Ozs7Ozs7Ozs7OztBQ1RPLElBQUlBLDBCQUFTO0FBQ25CQyxPQUFNLE1BRGE7QUFFbkJDLE9BQU0sVUFGYTtBQUduQkMsT0FBTTtBQUhhLENBQWIsQzs7Ozs7O0FDQVAseUM7Ozs7Ozs7OztBQ0FBOztBQUNBOztBQUNBOztBQUVB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RUpDLFFBQU0sR0FGRjtBQUdKQyxRQUFNO0FBSEY7QUFEc0MsQ0FBckMsQzs7Ozs7Ozs7Ozs7O0FDQUEsSUFBSWtKLGtCQUFLakosTUFBTUMsSUFBTixDQUFXeUksT0FBWCxDQUFtQixPQUFuQixJQUE4QjtBQUM3Q3hJLE9BQUs7QUFDSkwsUUFBTSxTQURGO0FBRUpDLFFBQU0sVUFGRjtBQUdKQyxRQUFNO0FBSEY7QUFEd0MsQ0FBdkMsQzs7Ozs7Ozs7Ozs7O0FDQUEsSUFBSW1KLGtCQUFLbEosTUFBTUMsSUFBTixDQUFXeUksT0FBWCxDQUFtQixPQUFuQixJQUE0QjtBQUMzQ3hJLE9BQUs7QUFDSkwsUUFBTSxXQURGO0FBRUpDLFFBQU0sWUFGRjtBQUdKQyxRQUFNO0FBSEY7QUFEc0MsQ0FBckMsQzs7Ozs7Ozs7Ozs7O0FDQVA7QUFDTyxJQUFJb0osa0JBQUtuSixNQUFNQyxJQUFOLENBQVd5SSxPQUFYLENBQW1CLE9BQW5CLElBQThCO0FBQzdDeEksT0FBSztBQUNKTCxRQUFNLEtBREY7QUFFSkMsUUFBTSxJQUZGO0FBR0pDLFFBQU07QUFIRjtBQUR3QyxDQUF2QyxDIiwiZmlsZSI6ImhpbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jb2RlYmFzZS9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyZTU2OGVlZjYzYTExZmM1YTIxMCIsImltcG9ydCB7ZW59IGZyb20gJy4vZW4nO1xyXG5pbXBvcnQge2ZyfSBmcm9tICcuL2ZyJztcclxuaW1wb3J0IHtiZX0gZnJvbSAnLi9iZSc7XHJcbmltcG9ydCB7ZGV9IGZyb20gJy4vZGUnO1xyXG5pbXBvcnQge2VzfSBmcm9tICcuL2VzJztcclxuaW1wb3J0IHtpdH0gZnJvbSAnLi9pdCc7XHJcbmltcG9ydCB7amF9IGZyb20gJy4vamEnO1xyXG5pbXBvcnQge3B0fSBmcm9tICcuL3B0JztcclxuaW1wb3J0IHtydX0gZnJvbSAnLi9ydSc7XHJcbmltcG9ydCB7emh9IGZyb20gJy4vemgnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9sb2NhbGVzLmpzIiwiZXhwb3J0IGxldCBsb2NhbGUgPSB7XG5cdG5leHQ6IFwiTmV4dFwiLFxuXHRwcmV2OiBcIlByZXZpb3VzXCIsXG5cdGxhc3Q6IFwiRW5kIFRvdXJcIlxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2xvY2FsZXMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy9oaW50Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFwiLi9oaW50Lmxlc3NcIjtcbmltcG9ydCB7IGxvY2FsZSB9IGZyb20gXCIuL2xvY2FsZXNcIjtcbmltcG9ydCBcIi4vaTE4bi9sb2NhbGVzXCI7XG5cbndlYml4LmkxOG4uaGludCA9IHdlYml4LmV4dGVuZCh3ZWJpeC5pMThuLCBsb2NhbGUpO1xuXG53ZWJpeC5wcm90b1VJKHtcblx0bmFtZTogXCJoaW50XCIsXG5cdGRlZmF1bHRzOiB7XG5cdFx0c3RlcHM6IFtdLFxuXHRcdGJvcmRlcmxlc3M6IHRydWUsXG5cdFx0bmV4dEJ1dHRvbjogdHJ1ZSxcblx0XHRwcmV2QnV0dG9uOiB0cnVlXG5cdH0sXG5cdCRpbml0KCkge1xuXHRcdHRoaXMuJHZpZXcuY2xhc3NOYW1lICs9IFwiIHdlYml4X2hpbnRfdmlld1wiO1xuXHRcdHRoaXMuX2kgPSAtMTtcblx0XHR0aGlzLl9zZXRCb2R5Q2xhc3MoKTtcblx0XHR0aGlzLmF0dGFjaEV2ZW50KFwib25EZXN0cnVjdFwiLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zZXRCb2R5Q2xhc3MoKTtcblx0XHRcdGlmKHRoaXMuX2V2ZW50T2JqRXNjKSB7XG5cdFx0XHRcdHdlYml4LmV2ZW50UmVtb3ZlKHRoaXMuX2V2ZW50T2JqRXNjKTtcblx0XHRcdH1cblx0XHRcdGlmKHRoaXMuX2V2ZW50T2JqQ2xvc2UpIHtcblx0XHRcdFx0d2ViaXguZXZlbnRSZW1vdmUodGhpcy5fZXZlbnRPYmpDbG9zZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5fZXZlbnRPYmpFc2MgPSB3ZWJpeC5ldmVudChkb2N1bWVudC5ib2R5LFwia2V5ZG93blwiLCAoZSkgPT4ge1xuXHRcdFx0Ly8gZXNjYXBlXG5cdFx0XHRpZiAoZS5rZXlDb2RlID09IDI3KXtcblx0XHRcdFx0dGhpcy5fc2tpcCgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuX2V2ZW50T2JqQ2xvc2UgPSB3ZWJpeC5ldmVudChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRcdFx0aWYoZS50YXJnZXQgPT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG5cdFx0XHRcdHRoaXMuX3NraXAoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblx0c3RlcHNfc2V0dGVyKGNvbmZpZykge1xuXHRcdHZhciBuZXdDb25maWcgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNvbmZpZy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uZmlnW2ldLnBhZGRpbmcgPSBjb25maWdbaV0ucGFkZGluZyB8fCAwO1xuXHRcdFx0Y29uZmlnW2ldLnRleHQgPSBjb25maWdbaV0udGV4dCB8fCBcIlwiO1xuXHRcdFx0bmV3Q29uZmlnLnB1c2goY29uZmlnW2ldKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ld0NvbmZpZztcblx0fSxcblx0X2RyYXdPdmVyKHN0ZXBFbCkge1xuXHRcdHRoaXMuJHZpZXcuaW5uZXJIVE1MICs9IGA8c3ZnIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGNsYXNzPVwid2ViaXhfaGludF9vdmVybGF5XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIj5cblx0XHRcdDxkZWZzPlxuXHRcdFx0XHQ8bWFzayBpZD1cImhvbGVcIj5cblx0XHRcdFx0XHQ8cmVjdCBjbGFzcz1cIndlYml4X2hpbnRfb3ZlcmxheV9ob2xlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbGw9XCJ3aGl0ZVwiLz5cblx0XHRcdFx0XHQ8cmVjdCBjbGFzcz1cIndlYml4X2hpbnRfb3ZlcmxheV9ob2xlIHdlYml4X2hpbnRfb3ZlcmxheV9ob2xlX2VsXCIgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMFwiIGhlaWdodD1cIjBcIiBmaWxsPVwid2hpdGVcIi8+XG5cdFx0XHRcdDwvbWFzaz5cblx0XHRcdDwvZGVmcz5cblx0XHRcdDxyZWN0IGNsYXNzPVwid2ViaXhfaGludF9vdmVybGF5X2hvbGVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgbWFzaz1cInVybCgjaG9sZSlcIiAvPlxuXHRcdDwvc3ZnPmA7XG5cdFx0dGhpcy5fc2V0UHJvcGVydGllcyhzdGVwRWwpO1xuXHRcdHRoaXMuY2FsbEV2ZW50KFwib25BZnRlclN0YXJ0XCIsIFtdKTtcblx0fSxcblx0X2RyYXdIaW50KCkge1xuXHRcdGxldCBzZXR0aW5ncyA9IHRoaXMuY29uZmlnO1xuXHRcdHRoaXMuJHZpZXcuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwid2ViaXhfaGludFwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9J3dlYml4X2hpbnRfdGl0bGUnPiR7dGhpcy5fc3RlcC50aXRsZT90aGlzLl9zdGVwLnRpdGxlOlwiXCJ9PC9zcGFuPlxuXHRcdFx0PHAgY2xhc3M9XCJ3ZWJpeF9oaW50X2xhYmVsXCI+JHt0aGlzLl9zdGVwLnRleHR9PC9wPlxuXHRcdFx0PGRpdiBjbGFzcz1cIndlYml4X2hpbnRfcHJvZ3Jlc3NcIj5cblx0XHRcdFx0JHt0aGlzLl9pKzF9LyR7dGhpcy5jb25maWcuc3RlcHMubGVuZ3RofVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwid2ViaXhfaGludF9idXR0b25zXCI+XG5cdFx0XHRcdCR7c2V0dGluZ3MucHJldkJ1dHRvbiE9PSBmYWxzZT9gPGJ1dHRvbiBjbGFzcz1cIndlYml4X2hpbnRfYnV0dG9uIHdlYml4X2hpbnRfYnV0dG9uX3ByZXYgd2ViaXhfaGludF9idXR0b25faGlkZGVuXCI+JHt0eXBlb2Ygc2V0dGluZ3MucHJldkJ1dHRvbiA9PSBcInN0cmluZ1wiP3NldHRpbmdzLnByZXZCdXR0b246YCR7d2ViaXguaTE4bi5oaW50LnByZXZ9YH08L2J1dHRvbj5gOlwiXCJ9XG5cdFx0XHRcdCR7c2V0dGluZ3MubmV4dEJ1dHRvbiE9PSBmYWxzZT9gPGJ1dHRvbiBjbGFzcz1cIndlYml4X2hpbnRfYnV0dG9uIHdlYml4X2hpbnRfYnV0dG9uX25leHRcIj4ke3R5cGVvZiBzZXR0aW5ncy5uZXh0QnV0dG9uID09IFwic3RyaW5nXCI/c2V0dGluZ3MubmV4dEJ1dHRvbjpgJHt3ZWJpeC5pMThuLmhpbnQubmV4dH1gfTwvYnV0dG9uPmA6XCJcIn1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cIndlYml4X2hpbnRfYnV0dG9uX2Nsb3NlXCIgdGl0bGU9XCJDbG9zZVwiPiYjMTAwMDU7PC9idXR0b24+XG5cdFx0PC9kaXY+YDtcblx0fSxcblx0X3NldFByb3BlcnRpZXMoc3RlcEVsLCByZWZyZXNoKSB7XG5cdFx0aWYoIXdlYml4LmVudi5tb2JpbGUpIHtcblx0XHRcdHN0ZXBFbC5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XG5cdFx0fVxuXHRcdHRoaXMuX3N0ZXAgPSB0aGlzLmNvbmZpZy5zdGVwc1t0aGlzLl9pXTtcblx0XHR0aGlzLl9yZURyYXcoc3RlcEVsLCByZWZyZXNoKTtcblx0XHR0aGlzLl9oaW50ID0gdGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwiLndlYml4X2hpbnRcIik7XG5cblx0XHRsZXQgcGFkZGluZyA9IDMwO1xuXHRcdGxldCBkb2NFbGVtID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRcdGxldCBib3ggPSBzdGVwRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0bGV0IGVsTGVmdCA9IGJveC5sZWZ0ICsgdGhpcy5fc3RlcC5wYWRkaW5nO1xuXHRcdGxldCBoaWdobGlnaHRXaWR0aCA9IHN0ZXBFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcblx0XHRsZXQgaGlnaGxpZ2h0SGVpZ2h0ID0gc3RlcEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblx0XHRsZXQgaGludExlZnQgPSBlbExlZnQgLSB0aGlzLl9zdGVwLnBhZGRpbmc7XG5cdFx0bGV0IGhpbnRXaWR0aCA9IHRoaXMuX2hpbnQub2Zmc2V0V2lkdGg7XG5cdFx0bGV0IGhpbnRIZWlnaHQgPSB0aGlzLl9oaW50Lm9mZnNldEhlaWdodDtcblx0XHRsZXQgZWxUb3AgPSB3ZWJpeC5lbnYubW9iaWxlID8gYm94LnRvcCArIHRoaXMuX3N0ZXAucGFkZGluZyA6IGJveC50b3AgKyB0aGlzLl9zdGVwLnBhZGRpbmcgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cdFx0bGV0IGhpbnRUb3AgPSBlbFRvcCArIGhpZ2hsaWdodEhlaWdodCArIHRoaXMuX3N0ZXAucGFkZGluZyArIHBhZGRpbmc7XG5cdFx0bGV0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggJiYgZG9jRWxlbS5jbGllbnRXaWR0aCA/IE1hdGgubWluKHdpbmRvdy5pbm5lcldpZHRoLCBkb2NFbGVtLmNsaWVudFdpZHRoKSA6IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY0VsZW0uY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmNsaWVudFdpZHRoO1xuXHRcdGxldCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgZG9jRWxlbS5jbGllbnRIZWlnaHQgPyBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCwgZG9jRWxlbS5jbGllbnRIZWlnaHQpIDogd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY0VsZW0uY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5jbGllbnRIZWlnaHQ7XG5cdFx0XG5cdFx0c3RlcEVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImFsbFwiO1xuXHRcdHN0ZXBFbC5zdHlsZS51c2VyU2VsZWN0ID0gXCJpbml0aWFsXCI7XG5cblx0XHQvLyBzZXQgaGludCBwb3NpdGlvblxuXHRcdGlmKGVsTGVmdCAtIHdpbmRvd1dpZHRoID4gMCkge1xuXHRcdFx0ZWxMZWZ0ID0gZWxMZWZ0IC0gd2luZG93V2lkdGggKyBoaW50V2lkdGggKyBoaWdobGlnaHRXaWR0aDtcblx0XHR9XG5cdFx0aWYod2luZG93SGVpZ2h0IC8yIDwgZWxUb3ApIHsgLy8gYm90dG9tXG5cdFx0XHRoaW50VG9wID0gZWxUb3AgLSBoaW50SGVpZ2h0IC0gcGFkZGluZyAtIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHR9IGVsc2UgaWYod2luZG93V2lkdGggLzIgPCBlbExlZnQgJiYgZWxMZWZ0ICsgaGludFdpZHRoIDwgd2luZG93V2lkdGggJiYgaGlnaGxpZ2h0V2lkdGggKyBoaW50V2lkdGggPCB3aW5kb3dXaWR0aCkgeyAvLyByaWdodFxuXHRcdFx0aGludFRvcCA9IGhpZ2hsaWdodEhlaWdodCAvIDIgKyBlbFRvcCAtIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHRcdGhpbnRMZWZ0ID0gZWxMZWZ0IC0gaGludFdpZHRoIC0gdGhpcy5fc3RlcC5wYWRkaW5nIC0gcGFkZGluZztcblx0XHR9IGVsc2UgaWYod2luZG93V2lkdGggLzIgPiBlbExlZnQgJiYgZWxMZWZ0ICsgaGludFdpZHRoICsgaGlnaGxpZ2h0V2lkdGggPCB3aW5kb3dXaWR0aCkgeyAvLyBsZWZ0XG5cdFx0XHRoaW50TGVmdCA9IGhpZ2hsaWdodFdpZHRoICsgZWxMZWZ0ICsgcGFkZGluZyArIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHRcdGhpbnRUb3AgPSBlbFRvcCAtIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHR9XG5cblx0XHRpZihoaW50TGVmdCArIGhpbnRXaWR0aCA+IHdpbmRvd1dpZHRoKSB7IC8vIGZvciBvdmVyZmxvd1xuXHRcdFx0aGludExlZnQgPSB3aW5kb3dXaWR0aCAtIGhpbnRXaWR0aDtcblx0XHR9IGVsc2UgaWYoaGludFRvcCA8IDApIHtcblx0XHRcdGhpbnRUb3AgPSAwO1xuXHRcdH0gZWxzZSBpZih3aW5kb3dXaWR0aCA8IGhpZ2hsaWdodFdpZHRoKSB7XG5cdFx0XHRoaW50TGVmdCA9IDA7XG5cdFx0fVxuXHRcdGlmKHdlYml4LmVudi5tb2JpbGUpIHtcblx0XHRcdHN0ZXBFbC5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XG5cdFx0fVxuXHRcdHRoaXMuX2hpbnQuc3R5bGUuY3NzVGV4dCA9IGB0b3A6JHtoaW50VG9wfXB4OyBsZWZ0OiR7aGludExlZnR9cHg7YDtcblx0XHR0aGlzLl9zZXRBdHRyaWJ1dGVzKHRoaXMuJHZpZXcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndlYml4X2hpbnRfb3ZlcmxheV9ob2xlX2VsXCIpWzBdLCB7XCJ4XCI6ZWxMZWZ0LXRoaXMuX3N0ZXAucGFkZGluZyoyLCBcInlcIjplbFRvcC10aGlzLl9zdGVwLnBhZGRpbmcqMiwgXCJ3aWR0aFwiOmhpZ2hsaWdodFdpZHRoK3RoaXMuX3N0ZXAucGFkZGluZyAqMiwgXCJoZWlnaHRcIjpoaWdobGlnaHRIZWlnaHQrdGhpcy5fc3RlcC5wYWRkaW5nKjJ9KTtcblx0XHR3ZWJpeC5odG1sLmFkZENzcyh0aGlzLmdldE5vZGUoKSwgXCJ3ZWJpeF9oaW50X2FuaW1hdGVkXCIpO1xuXHR9LFxuXHRfc2V0QXR0cmlidXRlcyhlbCwgYXR0cnMpIHtcblx0XHRmb3IodmFyIGtleSBpbiBhdHRycykge1xuXHRcdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdFx0fVxuXHR9LFxuXHRfcmVEcmF3KHN0ZXBFbCwgcmVmcmVzaCkge1xuXHRcdGxldCB0aXRsZSA9IHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcIi53ZWJpeF9oaW50X3RpdGxlXCIpO1xuXHRcdGxldCBlbDtcblxuXHRcdHRoaXMuX3N0ZXAuZXZlbnRFbD9lbCA9IHRoaXMuX2dldEVsKHRoaXMuX3N0ZXAuZXZlbnRFbCk6ZWwgPSBzdGVwRWw7XG5cdFx0aWYodGhpcy5faSA+IDAgJiYgIXJlZnJlc2gpIHtcblx0XHRcdHdlYml4Lmh0bWwucmVtb3ZlQ3NzKHRoaXMuZ2V0Tm9kZSgpLCBcIndlYml4X2hpbnRfYW5pbWF0ZWRcIik7XG5cdFx0XHR0aXRsZS5pbm5lckhUTUwgPSB0aGlzLl9zdGVwLnRpdGxlIHx8IFwiXCI7XG5cdFx0XHR0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIud2ViaXhfaGludF9sYWJlbFwiKS5pbm5lckhUTUwgPSB0aGlzLl9zdGVwLnRleHQgfHwgXCJcIjtcblx0XHRcdHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcIi53ZWJpeF9oaW50X3Byb2dyZXNzXCIpLmlubmVySFRNTCA9IGAke3RoaXMuX2krMX0vJHt0aGlzLmNvbmZpZy5zdGVwcy5sZW5ndGh9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fZHJhd0hpbnQoKTtcblx0XHRcdHRoaXMuX3NldEV2ZW50c0J1dHRvbnMoZWwpO1xuXHRcdH1cblx0XHRpZighdGhpcy5fc3RlcC50aXRsZSAmJiB0aXRsZSkge1xuXHRcdFx0dGl0bGUuc3R5bGUubWFyZ2luID0gXCIwXCI7XG5cdFx0fVxuXHRcdHRoaXMuX3NldEVsRXZlbnRzKGVsKTtcblxuXHRcdGlmKHRoaXMuX2kgPiAwKSB7IC8vIHByZXZpb3VzIGJ1dHRvbiBzaG93XG5cdFx0XHR3ZWJpeC5odG1sLnJlbW92ZUNzcyh0aGlzLl9wcmV2QnV0dG9uLCBcIndlYml4X2hpbnRfYnV0dG9uX2hpZGRlblwiKTtcblx0XHR9IGVsc2UgaWYodGhpcy5fcHJldkJ1dHRvbiAmJiAhdGhpcy5fcHJldkJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJ3ZWJpeF9oaW50X2J1dHRvbl9oaWRkZW5cIikpIHtcblx0XHRcdHdlYml4Lmh0bWwuYWRkQ3NzKHRoaXMuX3ByZXZCdXR0b24sIFwid2ViaXhfaGludF9idXR0b25faGlkZGVuXCIpO1xuXHRcdH1cblx0XHRpZih0aGlzLl9pID09PSB0aGlzLmNvbmZpZy5zdGVwcy5sZW5ndGggLTEpIHsgLy8gbmV4dCBidXR0b24gdGV4dFxuXHRcdFx0dGhpcy5fbmV4dEJ1dHRvbi5pbm5lckhUTUwgPSBgJHt0eXBlb2YgdGhpcy5jb25maWcubmV4dEJ1dHRvbiA9PSBcInN0cmluZ1wiP3RoaXMuY29uZmlnLm5leHRCdXR0b246YCR7d2ViaXguaTE4bi5oaW50Lmxhc3R9YH1gO1xuXHRcdH1cblx0fSxcblx0X3NldEJvZHlDbGFzcygpIHtcblx0XHRsZXQgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cdFx0aWYoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJ3ZWJpeF9oaW50X292ZXJmbG93XCIpKSB7XG5cdFx0XHR3ZWJpeC5odG1sLnJlbW92ZUNzcyhib2R5LCBcIndlYml4X2hpbnRfb3ZlcmZsb3dcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdlYml4Lmh0bWwuYWRkQ3NzKGJvZHksIFwid2ViaXhfaGludF9vdmVyZmxvd1wiKTtcblx0XHR9XG5cdH0sXG5cdF9nZXRFbChlbCkge1xuXHRcdGlmKCQkKGVsKSkge1xuXHRcdFx0cmV0dXJuICQkKGVsKS5nZXROb2RlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKTtcblx0XHR9XG5cdH0sXG5cdF9kcmF3U3RlcHMocmVmcmVzaCkge1xuXHRcdGlmKHRoaXMuY29uZmlnLnN0ZXBzW3RoaXMuX2ldKSB7XG5cdFx0XHRsZXQgZWwgPSB0aGlzLl9nZXRFbCh0aGlzLmNvbmZpZy5zdGVwc1t0aGlzLl9pXS5lbCk7XG5cdFx0XHRpZih0aGlzLl9pID09PSAwICYmICFyZWZyZXNoKSB7XG5cdFx0XHRcdHRoaXMuY2FsbEV2ZW50KFwib25CZWZvcmVTdGFydFwiLCBbXSk7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4geyAvLyBmb3IgZmlyc3QgaW5pdFxuXHRcdFx0XHRcdHRoaXMuX2RyYXdPdmVyKGVsKTtcblx0XHRcdFx0fSwgMTAwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX3NldFByb3BlcnRpZXMoZWwsIHJlZnJlc2gpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9za2lwKCk7XG5cdFx0fVxuXHR9LFxuXHRfc2V0RXZlbnRzQnV0dG9ucygpIHtcblx0XHR0aGlzLl9wcmV2QnV0dG9uID0gdGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yQWxsKFwiLndlYml4X2hpbnRfYnV0dG9uX3ByZXZcIilbMF07XG5cdFx0dGhpcy5fbmV4dEJ1dHRvbiA9IHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvckFsbChcIi53ZWJpeF9oaW50X2J1dHRvbl9uZXh0XCIpWzBdO1xuXHRcdGxldCBlbDtcblx0XHRpZih0aGlzLl9uZXh0QnV0dG9uKSB7XG5cdFx0XHR3ZWJpeC5ldmVudCh0aGlzLl9uZXh0QnV0dG9uLCBcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdFx0dGhpcy5fbmV4dChlbCwgXCJuZXh0XCIpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGlmKHRoaXMuX3ByZXZCdXR0b24pIHtcblx0XHRcdHdlYml4LmV2ZW50KHRoaXMuX3ByZXZCdXR0b24sIFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0XHR3ZWJpeC5odG1sLnJlbW92ZUNzcyh0aGlzLmdldE5vZGUoKSwgXCJ3ZWJpeF9oaW50X2FuaW1hdGVkXCIpO1xuXHRcdFx0XHR0aGlzLl9oaW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5faGludCk7XG5cdFx0XHRcdHRoaXMuX2kgLT0gMjtcblx0XHRcdFx0dGhpcy5fbmV4dChlbCwgXCJwcmV2aW91c1wiKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHR3ZWJpeC5ldmVudCh0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIud2ViaXhfaGludF9idXR0b25fY2xvc2VcIiksIFwiY2xpY2tcIiwgKCkgPT4geyB0aGlzLl9za2lwKCk7IH0pO1xuXHR9LFxuXHRfc2V0RWxFdmVudHMoc3RlcEVsKSB7XG5cdFx0bGV0IGV2ZW50U3RlcCA9IHRoaXMuX3N0ZXAuZXZlbnQ7XG5cdFx0c3RlcEVsLmZvY3VzKCk7XG5cdFx0aWYoZXZlbnRTdGVwKSB7XG5cdFx0XHRpZihldmVudFN0ZXAgPT09IFwiZW50ZXJcIikge1xuXHRcdFx0XHRldmVudFN0ZXAgPSBcImtleWRvd25cIjtcblx0XHRcdH1cblx0XHRcdGlmKHRoaXMuX2V2ZW50T2JqKSB7XG5cdFx0XHRcdHdlYml4LmV2ZW50UmVtb3ZlKHRoaXMuX2V2ZW50T2JqKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2V2ZW50T2JqID0gd2ViaXguZXZlbnQoc3RlcEVsLCBldmVudFN0ZXAsIChlKSA9PiB7XG5cdFx0XHRcdGlmKGV2ZW50U3RlcCA9PSBlLnR5cGUpIHtcblx0XHRcdFx0XHRpZihlLnR5cGUgPT09IFwia2V5ZG93blwiICYmIGUua2V5Q29kZSAhPT0gMTMpIHJldHVybjtcblx0XHRcdFx0XHRzdGVwRWwuZm9jdXMoKTtcblx0XHRcdFx0XHR0aGlzLl9uZXh0KHN0ZXBFbCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9LFxuXHRfbmV4dChzdGVwRWwsIGFjdGlvbikge1xuXHRcdGFjdGlvbiA9IGFjdGlvbiB8fCBcIm5leHRcIjtcblx0XHRpZiAodGhpcy5fc3RlcC5uZXh0ICYmIGFjdGlvbiA9PT0gXCJuZXh0XCIgfHwgdGhpcy5fc3RlcC5wcmV2aW91cyAmJiBhY3Rpb24gPT09IFwicHJldmlvdXNcIikge1xuXHRcdFx0bGV0IHByb21pc2UgPSB0aGlzLl9zdGVwW2FjdGlvbl0oKTtcblx0XHRcdGlmIChwcm9taXNlLnRoZW4pe1xuXHRcdFx0XHRyZXR1cm4gcHJvbWlzZS50aGVuKCAoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5fbmV4dFN0ZXAoc3RlcEVsLCBhY3Rpb24pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLl9uZXh0U3RlcChzdGVwRWwsIGFjdGlvbik7XG5cdH0sXG5cdF9uZXh0U3RlcChzdGVwRWwsIGFjdGlvbikge1xuXHRcdGxldCBlbCA9IHRoaXMuX2dldEVsKHRoaXMuX3N0ZXAuZWwpO1xuXHRcdGVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIlwiO1xuXHRcdGVsLnN0eWxlLnVzZXJTZWxlY3QgPSBcIlwiO1xuXHRcdGVsLmJsdXIoKTtcblx0XHR0aGlzLl9pKys7XG5cdFx0aWYoYWN0aW9uICE9PSBcInByZXZpb3VzXCIpIHtcblx0XHRcdHRoaXMuX2RyYXdTdGVwcygpO1xuXHRcdFx0dGhpcy5jYWxsRXZlbnQoXCJvbk5leHRcIiwgW3RoaXMuX2krMV0pO1xuXHRcdH1cblx0XHRpZihhY3Rpb24gPT09IFwicHJldmlvdXNcIikge1xuXHRcdFx0dGhpcy5fZHJhd1N0ZXBzKFwicHJldmlvdXNcIik7XG5cdFx0XHR0aGlzLmNhbGxFdmVudChcIm9uUHJldmlvdXNcIiwgW3RoaXMuX2krMV0pO1xuXHRcdH1cblx0fSxcblx0X3NraXAoKSB7XG5cdFx0aWYgKHRoaXMuX2kgPT09IC0xKSByZXR1cm47XG5cblx0XHR0aGlzLmNhbGxFdmVudChcIm9uU2tpcFwiLCBbdGhpcy5faSsxXSk7XG5cdFx0dGhpcy5oaWRlKCk7XG5cdFx0dGhpcy5fc2V0Qm9keUNsYXNzKCk7XG5cdFx0aWYodGhpcy5faSA9PT0gdGhpcy5jb25maWcuc3RlcHMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLmNhbGxFdmVudChcIm9uRW5kXCIsIFt0aGlzLl9pKzFdKTtcblx0XHRcdHRoaXMuX2kgPSAtMTtcblx0XHR9XG5cdH0sXG5cdHN0YXJ0OmZ1bmN0aW9uKCl7XG5cdFx0dGhpcy5fcmVmcmVzaCgwLCB0cnVlKTtcblx0fSxcblx0ZW5kOmZ1bmN0aW9uKCl7XG5cdFx0dGhpcy5fc2tpcCgpO1xuXHR9LFxuXHRfcmVmcmVzaChpLCBmaXJzdERyYXcpIHtcblx0XHR0aGlzLl9pID0gaTtcblx0XHRpZighdGhpcy5faGludCkge1xuXHRcdFx0dGhpcy5fc2V0Qm9keUNsYXNzKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2hpbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9oaW50KTtcblx0XHRcdHdlYml4Lmh0bWwucmVtb3ZlQ3NzKHRoaXMuZ2V0Tm9kZSgpLCBcIndlYml4X2hpbnRfYW5pbWF0ZWRcIik7XG5cdFx0fVxuXHRcdHRoaXMuc2hvdygpO1xuXHRcdGlmKGZpcnN0RHJhdykge1xuXHRcdFx0bGV0IHN2ZyA9IHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcInN2Z1wiKTtcblx0XHRcdGlmIChzdmcpXG5cdFx0XHRcdHN2Zy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN2Zyk7XG5cdFx0XHR0aGlzLl9kcmF3U3RlcHMoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fZHJhd1N0ZXBzKFwicmVmcmVzaFwiKTtcblx0XHRcdHRoaXMuX3NldEJvZHlDbGFzcygpO1xuXHRcdH1cblx0fSxcblx0Z2V0Q3VycmVudFN0ZXAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2k7XG5cdH0sXG5cdHJlc3VtZShzdGVwTnVtYmVyKSB7XG5cdFx0c3RlcE51bWJlciA9IHN0ZXBOdW1iZXIgfHwgKHRoaXMuX2krMSk7XG5cdFx0dGhpcy5fcmVmcmVzaChzdGVwTnVtYmVyKTtcblx0fSxcblx0Z2V0U3RlcHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnLnN0ZXBzO1xuXHR9LFxuXHRzZXRTdGVwcyh2YWx1ZSkge1xuXHRcdHRoaXMuZGVmaW5lKFwic3RlcHNcIiwgdmFsdWUpO1xuXHR9XG59LCB3ZWJpeC51aS52aWV3LCB3ZWJpeC5FdmVudFN5c3RlbSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9oaW50LmpzIiwiZXhwb3J0IGxldCBiZSA9IHdlYml4LmkxOG4ubG9jYWxlc1tcImJlLUJZXCJdID0ge1xuXHRoaW50Ontcblx0XHRuZXh0OiBcItCd0LDRgdGC0YPQv9C90YtcIixcblx0XHRwcmV2OiBcItCf0LDQv9GP0YDRjdC00L3RllwiLFxuXHRcdGxhc3Q6IFwi0JrQsNC90LXRhiDQotGD0YDQsFwiXG5cdH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2JlLmpzIiwiLypHZXJtYW4gKEdlcm1hbnkpIGxvY2FsZSovXG5leHBvcnQgbGV0IGRlID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiZGUtREVcIl0gPSB7XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwiTsOkY2hzdGVyXCIsXG5cdFx0cHJldjogXCJCaXNoZXJpZ2VcIixcblx0XHRsYXN0OiBcIkVuZGUgVG91clwiXG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vZGUuanMiLCJleHBvcnQgbGV0IGVuID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiZW4tVVNcIl09e1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIk5leHRcIixcblx0XHRwcmV2OiBcIlByZXZpb3VzXCIsXG5cdFx0bGFzdDogXCJFbmQgVG91clwiXG5cdH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2VuLmpzIiwiLypTcGFuaXNoIChTcGFpbiwgSW50ZXJuYXRpb25hbCBTb3J0KSBsb2NhbGUqL1xuZXhwb3J0IGxldCBlcyA9IHdlYml4LmkxOG4ubG9jYWxlc1tcImVzLUVTXCJdID0ge1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIlNpZ3VpZW50ZVwiLFxuXHRcdHByZXY6IFwiQW50ZXJpb3JcIixcblx0XHRsYXN0OiBcIkZpbiBkZSBWaWFqZVwiXG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vZXMuanMiLCJleHBvcnQgbGV0IGZyID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiZnItRlJcIl09e1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIlByb2NoYWluXCIsXG5cdFx0cHJldjogXCJQcsOpY8OpZGVudFwiLFxuXHRcdGxhc3Q6IFwiRW5kIFRvdXJcIlxuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9mci5qcyIsIi8qSXRhbGlhbiAoSXRhbHkpIGxvY2FsZSovXG5leHBvcnQgbGV0IGl0ID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiaXQtSVRcIl0gPSB7XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwiU2VndWVudGVcIixcblx0XHRwcmV2OiBcIlByZWNlZGVudGVcIixcblx0XHRsYXN0OiBcIkVuZCBUb3VyXCJcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9pdC5qcyIsImV4cG9ydCBsZXQgamEgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJqYS1KUFwiXT17XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwi5qyhXCIsXG5cdFx0cHJldjogXCLliY1cIixcblx0XHRsYXN0OiBcIue1guS6huODhOOCouODvFwiXG5cdH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2phLmpzIiwiZXhwb3J0IGxldCBwdCA9IHdlYml4LmkxOG4ubG9jYWxlc1tcInB0LUJSXCJdID0ge1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIlByw7N4aW1vXCIsXG5cdFx0cHJldjogXCJBbnRlcmlvclwiLFxuXHRcdGxhc3Q6IFwiRW5kIFRvdXJcIlxuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL3B0LmpzIiwiZXhwb3J0IGxldCBydSA9IHdlYml4LmkxOG4ubG9jYWxlc1tcInJ1LVJVXCJdPXtcblx0aGludDp7XG5cdFx0bmV4dDogXCLQodC70LXQtNGD0Y7RidC40LlcIixcblx0XHRwcmV2OiBcItCf0YDQtdC00YvQtNGD0YnQuNC5XCIsXG5cdFx0bGFzdDogXCLQmtC+0L3QtdGGINCi0YPRgNCwXCJcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vcnUuanMiLCIvKkNoaW5lc2UgKFNpbXBsaWZpZWQsIFBSQykgbG9jYWxlKi9cbmV4cG9ydCBsZXQgemggPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJ6aC1DTlwiXSA9IHtcblx0aGludDp7XG5cdFx0bmV4dDogXCLkuIvkuIDkuKpcIixcblx0XHRwcmV2OiBcIuS7peWJjVwiLFxuXHRcdGxhc3Q6IFwi57uT5p2f5beh6KeGXCJcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi96aC5qcyJdLCJzb3VyY2VSb290IjoiIn0=