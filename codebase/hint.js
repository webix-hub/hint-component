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

		this._eventResize = webix.attachEvent("onResize", function () {
			_this._refresh(_this.getCurrentStep(), false, true);
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
	_refresh: function _refresh(i, firstDraw, resize) {
		this._i = i - 1;
		this._setBodyClass();
		if (this._hint) {
			if (this._hint.parentNode) this._hint.parentNode.removeChild(this._hint);
			if (!resize) {
				webix.html.removeCss(this.getNode(), "webix_hint_animated");
			}
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
			stepNumber = stepNumber || this._i + 1 || 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWMzMGMzNGJmZjA3NTA1YjZiYWYiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9sb2NhbGVzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5sZXNzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vYmUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL2RlLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9lbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL2ZyLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9pdC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vamEuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL3B0LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9ydS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vemguanMiXSwibmFtZXMiOlsibG9jYWxlIiwiaGludCIsIm5leHQiLCJwcmV2IiwibGFzdCIsIndlYml4IiwiaTE4biIsImV4dGVuZCIsInByb3RvVUkiLCJuYW1lIiwiZGVmYXVsdHMiLCJzdGVwcyIsImJvcmRlcmxlc3MiLCJuZXh0QnV0dG9uIiwicHJldkJ1dHRvbiIsIiRpbml0IiwiJHZpZXciLCJjbGFzc05hbWUiLCJfaSIsImF0dGFjaEV2ZW50IiwiX3NldEJvZHlDbGFzcyIsIl9ldmVudE9iakVzYyIsImV2ZW50UmVtb3ZlIiwiX2V2ZW50UmVzaXplIiwiZGV0YWNoRXZlbnQiLCJldmVudCIsImRvY3VtZW50IiwiYm9keSIsImUiLCJrZXlDb2RlIiwiX3NraXAiLCJfcmVmcmVzaCIsImdldEN1cnJlbnRTdGVwIiwic3RlcHNfc2V0dGVyIiwiY29uZmlnIiwibmV3Q29uZmlnIiwiaSIsImxlbmd0aCIsInBhZGRpbmciLCJ0ZXh0IiwicHVzaCIsIl9kcmF3T3ZlciIsInN0ZXBFbCIsImlubmVySFRNTCIsIl9zZXRQcm9wZXJ0aWVzIiwiY2FsbEV2ZW50IiwiX2RyYXdIaW50Iiwic2V0dGluZ3MiLCJfc3RlcCIsInRpdGxlIiwicmVmcmVzaCIsImVudiIsIm1vYmlsZSIsInNjcm9sbEludG9WaWV3IiwiX3JlRHJhdyIsIl9oaW50IiwicXVlcnlTZWxlY3RvciIsImRvY0VsZW0iLCJkb2N1bWVudEVsZW1lbnQiLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbExlZnQiLCJsZWZ0IiwiaGlnaGxpZ2h0V2lkdGgiLCJ3aWR0aCIsImhpZ2hsaWdodEhlaWdodCIsImhlaWdodCIsImhpbnRMZWZ0IiwiaGludFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJoaW50SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZWxUb3AiLCJ0b3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImhpbnRUb3AiLCJ3aW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsIk1hdGgiLCJtaW4iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwidXNlclNlbGVjdCIsImNzc1RleHQiLCJfc2V0QXR0cmlidXRlcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJodG1sIiwiYWRkQ3NzIiwiZ2V0Tm9kZSIsImVsIiwiYXR0cnMiLCJrZXkiLCJzZXRBdHRyaWJ1dGUiLCJldmVudEVsIiwiX2dldEVsIiwicmVtb3ZlQ3NzIiwiX3NldEV2ZW50c0J1dHRvbnMiLCJtYXJnaW4iLCJfc2V0RWxFdmVudHMiLCJfcHJldkJ1dHRvbiIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiX25leHRCdXR0b24iLCIkJCIsIl9kcmF3U3RlcHMiLCJzZXRUaW1lb3V0IiwicXVlcnlTZWxlY3RvckFsbCIsIl9uZXh0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZXZlbnRTdGVwIiwiZm9jdXMiLCJfZXZlbnRPYmoiLCJ0eXBlIiwiYWN0aW9uIiwicHJldmlvdXMiLCJwcm9taXNlIiwidGhlbiIsIl9uZXh0U3RlcCIsImJsdXIiLCJoaWRlIiwiZmlyc3REcmF3IiwicmVzaXplIiwic2hvdyIsInN2ZyIsInN0YXJ0IiwiZW5kIiwicmVzdW1lIiwic3RlcE51bWJlciIsImdldFN0ZXBzIiwic2V0U3RlcHMiLCJ2YWx1ZSIsImRlZmluZSIsInVpIiwidmlldyIsIkV2ZW50U3lzdGVtIiwiYmUiLCJsb2NhbGVzIiwiZGUiLCJlbiIsImVzIiwiZnIiLCJpdCIsImphIiwicHQiLCJydSIsInpoIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFTyxJQUFJQSwwQkFBUztBQUNuQkMsT0FBTTtBQUNMQyxRQUFNLE1BREQ7QUFFTEMsUUFBTSxVQUZEO0FBR0xDLFFBQU07QUFIRDtBQURhLENBQWIsQzs7Ozs7O0FDWFAseUM7Ozs7Ozs7OztBQ0FBOztBQUNBOztBQUVBQyxNQUFNQyxJQUFOLENBQVdMLElBQVgsR0FB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OUksT0FBSztBQUNKQyxRQUFNLEtBREY7QUFFSkMsUUFBTSxJQUZGO0FBR0pDLFFBQU07QUFIRjtBQUR3QyxDQUF2QyxDIiwiZmlsZSI6ImhpbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jb2RlYmFzZS9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxYzMwYzM0YmZmMDc1MDViNmJhZiIsImltcG9ydCBcIi4vaTE4bi9lblwiO1xuaW1wb3J0IFwiLi9pMThuL2ZyXCI7XG5pbXBvcnQgXCIuL2kxOG4vYmVcIjtcbmltcG9ydCBcIi4vaTE4bi9kZVwiO1xuaW1wb3J0IFwiLi9pMThuL2VzXCI7XG5pbXBvcnQgXCIuL2kxOG4vaXRcIjtcbmltcG9ydCBcIi4vaTE4bi9qYVwiO1xuaW1wb3J0IFwiLi9pMThuL3B0XCI7XG5pbXBvcnQgXCIuL2kxOG4vcnVcIjtcbmltcG9ydCBcIi4vaTE4bi96aFwiO1xuXG5leHBvcnQgbGV0IGxvY2FsZSA9IHtcblx0aGludDoge1xuXHRcdG5leHQ6IFwiTmV4dFwiLFxuXHRcdHByZXY6IFwiUHJldmlvdXNcIixcblx0XHRsYXN0OiBcIkVuZCBUb3VyXCJcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2xvY2FsZXMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy9oaW50Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFwiLi9oaW50Lmxlc3NcIjtcbmltcG9ydCB7IGxvY2FsZSB9IGZyb20gXCIuL2xvY2FsZXNcIjtcblxud2ViaXguaTE4bi5oaW50ID0gd2ViaXguZXh0ZW5kKHdlYml4LmkxOG4sIGxvY2FsZSkuaGludDtcblxud2ViaXgucHJvdG9VSSh7XG5cdG5hbWU6IFwiaGludFwiLFxuXHRkZWZhdWx0czoge1xuXHRcdHN0ZXBzOiBbXSxcblx0XHRib3JkZXJsZXNzOiB0cnVlLFxuXHRcdG5leHRCdXR0b246IHRydWUsXG5cdFx0cHJldkJ1dHRvbjogdHJ1ZVxuXHR9LFxuXHQkaW5pdCgpIHtcblx0XHR0aGlzLiR2aWV3LmNsYXNzTmFtZSArPSBcIiB3ZWJpeF9oaW50X3ZpZXdcIjtcblx0XHR0aGlzLl9pID0gLTE7XG5cdFx0dGhpcy5hdHRhY2hFdmVudChcIm9uRGVzdHJ1Y3RcIiwgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc2V0Qm9keUNsYXNzKCk7XG5cdFx0XHRpZih0aGlzLl9ldmVudE9iakVzYykge1xuXHRcdFx0XHR3ZWJpeC5ldmVudFJlbW92ZSh0aGlzLl9ldmVudE9iakVzYyk7XG5cdFx0XHR9XG5cdFx0XHRpZih0aGlzLl9ldmVudFJlc2l6ZSkge1xuXHRcdFx0XHR3ZWJpeC5kZXRhY2hFdmVudCh0aGlzLl9ldmVudFJlc2l6ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5fZXZlbnRPYmpFc2MgPSB3ZWJpeC5ldmVudChkb2N1bWVudC5ib2R5LFwia2V5ZG93blwiLCAoZSkgPT4ge1xuXHRcdFx0Ly8gZXNjYXBlXG5cdFx0XHRpZiAoZS5rZXlDb2RlID09IDI3KXtcblx0XHRcdFx0dGhpcy5fc2tpcCgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5fZXZlbnRSZXNpemUgPSB3ZWJpeC5hdHRhY2hFdmVudChcIm9uUmVzaXplXCIsICgpID0+IHtcblx0XHRcdHRoaXMuX3JlZnJlc2godGhpcy5nZXRDdXJyZW50U3RlcCgpLCBmYWxzZSwgdHJ1ZSk7XG5cdFx0fSk7XG5cdH0sXG5cdHN0ZXBzX3NldHRlcihjb25maWcpIHtcblx0XHRsZXQgbmV3Q29uZmlnID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjb25maWcubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbmZpZ1tpXS5wYWRkaW5nID0gY29uZmlnW2ldLnBhZGRpbmcgfHwgMDtcblx0XHRcdGNvbmZpZ1tpXS50ZXh0ID0gY29uZmlnW2ldLnRleHQgfHwgXCJcIjtcblx0XHRcdG5ld0NvbmZpZy5wdXNoKGNvbmZpZ1tpXSk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXdDb25maWc7XG5cdH0sXG5cdF9kcmF3T3ZlcihzdGVwRWwpIHtcblx0XHR0aGlzLiR2aWV3LmlubmVySFRNTCArPSBgPHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBjbGFzcz1cIndlYml4X2hpbnRfb3ZlcmxheVwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCI+XG5cdFx0XHQ8ZGVmcz5cblx0XHRcdFx0PG1hc2sgaWQ9XCJob2xlXCI+XG5cdFx0XHRcdFx0PHJlY3QgY2xhc3M9XCJ3ZWJpeF9oaW50X292ZXJsYXlfaG9sZVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBmaWxsPVwid2hpdGVcIi8+XG5cdFx0XHRcdFx0PHJlY3QgY2xhc3M9XCJ3ZWJpeF9oaW50X292ZXJsYXlfaG9sZSB3ZWJpeF9oaW50X292ZXJsYXlfaG9sZV9lbFwiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjBcIiBoZWlnaHQ9XCIwXCIgZmlsbD1cIndoaXRlXCIvPlxuXHRcdFx0XHQ8L21hc2s+XG5cdFx0XHQ8L2RlZnM+XG5cdFx0XHQ8cmVjdCBjbGFzcz1cIndlYml4X2hpbnRfb3ZlcmxheV9ob2xlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIG1hc2s9XCJ1cmwoI2hvbGUpXCIgLz5cblx0XHQ8L3N2Zz5gO1xuXHRcdHRoaXMuX3NldFByb3BlcnRpZXMoc3RlcEVsKTtcblx0XHR0aGlzLmNhbGxFdmVudChcIm9uQWZ0ZXJTdGFydFwiLCBbXSk7XG5cdH0sXG5cdF9kcmF3SGludCgpIHtcblx0XHRsZXQgc2V0dGluZ3MgPSB0aGlzLmNvbmZpZztcblx0XHR0aGlzLiR2aWV3LmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cIndlYml4X2hpbnRcIj5cblx0XHRcdDxzcGFuIGNsYXNzPSd3ZWJpeF9oaW50X3RpdGxlJz4ke3RoaXMuX3N0ZXAudGl0bGU/dGhpcy5fc3RlcC50aXRsZTpcIlwifTwvc3Bhbj5cblx0XHRcdDxwIGNsYXNzPVwid2ViaXhfaGludF9sYWJlbFwiPiR7dGhpcy5fc3RlcC50ZXh0fTwvcD5cblx0XHRcdDxkaXYgY2xhc3M9XCJ3ZWJpeF9oaW50X3Byb2dyZXNzXCI+XG5cdFx0XHRcdCR7dGhpcy5faSsxfS8ke3RoaXMuY29uZmlnLnN0ZXBzLmxlbmd0aH1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cIndlYml4X2hpbnRfYnV0dG9uc1wiPlxuXHRcdFx0XHQke3NldHRpbmdzLnByZXZCdXR0b24hPT0gZmFsc2U/YDxidXR0b24gY2xhc3M9XCJ3ZWJpeF9oaW50X2J1dHRvbiB3ZWJpeF9oaW50X2J1dHRvbl9wcmV2IHdlYml4X2hpbnRfYnV0dG9uX2hpZGRlblwiPiR7dHlwZW9mIHNldHRpbmdzLnByZXZCdXR0b24gPT0gXCJzdHJpbmdcIj9zZXR0aW5ncy5wcmV2QnV0dG9uOmAke3dlYml4LmkxOG4uaGludC5wcmV2fWB9PC9idXR0b24+YDpcIlwifVxuXHRcdFx0XHQke3NldHRpbmdzLm5leHRCdXR0b24hPT0gZmFsc2U/YDxidXR0b24gY2xhc3M9XCJ3ZWJpeF9oaW50X2J1dHRvbiB3ZWJpeF9oaW50X2J1dHRvbl9uZXh0XCI+JHt0eXBlb2Ygc2V0dGluZ3MubmV4dEJ1dHRvbiA9PSBcInN0cmluZ1wiP3NldHRpbmdzLm5leHRCdXR0b246YCR7d2ViaXguaTE4bi5oaW50Lm5leHR9YH08L2J1dHRvbj5gOlwiXCJ9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxidXR0b24gY2xhc3M9XCJ3ZWJpeF9oaW50X2J1dHRvbl9jbG9zZVwiIHRpdGxlPVwiQ2xvc2VcIj4mIzEwMDA1OzwvYnV0dG9uPlxuXHRcdDwvZGl2PmA7XG5cdH0sXG5cdF9zZXRQcm9wZXJ0aWVzKHN0ZXBFbCwgcmVmcmVzaCkge1xuXHRcdGlmKCFzdGVwRWwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZighd2ViaXguZW52Lm1vYmlsZSkge1xuXHRcdFx0c3RlcEVsLnNjcm9sbEludG9WaWV3KGZhbHNlKTtcblx0XHR9XG5cdFx0dGhpcy5fc3RlcCA9IHRoaXMuY29uZmlnLnN0ZXBzW3RoaXMuX2ldO1xuXHRcdHRoaXMuX3JlRHJhdyhzdGVwRWwsIHJlZnJlc2gpO1xuXHRcdHRoaXMuX2hpbnQgPSB0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIud2ViaXhfaGludFwiKTtcblxuXHRcdGxldCBwYWRkaW5nID0gMzA7XG5cdFx0bGV0IGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdFx0bGV0IGJveCA9IHN0ZXBFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRsZXQgZWxMZWZ0ID0gYm94LmxlZnQgKyB0aGlzLl9zdGVwLnBhZGRpbmc7XG5cdFx0bGV0IGhpZ2hsaWdodFdpZHRoID0gYm94LndpZHRoO1xuXHRcdGxldCBoaWdobGlnaHRIZWlnaHQgPSBib3guaGVpZ2h0O1xuXHRcdGxldCBoaW50TGVmdCA9IGVsTGVmdCAtIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHRsZXQgaGludFdpZHRoID0gdGhpcy5faGludC5vZmZzZXRXaWR0aDtcblx0XHRsZXQgaGludEhlaWdodCA9IHRoaXMuX2hpbnQub2Zmc2V0SGVpZ2h0O1xuXHRcdGxldCBlbFRvcCA9IHdlYml4LmVudi5tb2JpbGUgPyBib3gudG9wICsgdGhpcy5fc3RlcC5wYWRkaW5nIDogYm94LnRvcCArIHRoaXMuX3N0ZXAucGFkZGluZyArIHdpbmRvdy5wYWdlWU9mZnNldDtcblx0XHRsZXQgaGludFRvcCA9IGVsVG9wICsgaGlnaGxpZ2h0SGVpZ2h0ICsgdGhpcy5fc3RlcC5wYWRkaW5nICsgcGFkZGluZztcblx0XHRsZXQgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAmJiBkb2NFbGVtLmNsaWVudFdpZHRoID8gTWF0aC5taW4od2luZG93LmlubmVyV2lkdGgsIGRvY0VsZW0uY2xpZW50V2lkdGgpIDogd2luZG93LmlubmVyV2lkdGggfHwgZG9jRWxlbS5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uY2xpZW50V2lkdGg7XG5cdFx0bGV0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAmJiBkb2NFbGVtLmNsaWVudEhlaWdodCA/IE1hdGgubWluKHdpbmRvdy5pbm5lckhlaWdodCwgZG9jRWxlbS5jbGllbnRIZWlnaHQpIDogd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY0VsZW0uY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5jbGllbnRIZWlnaHQ7XG5cdFx0XG5cdFx0c3RlcEVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImFsbFwiO1xuXHRcdHN0ZXBFbC5zdHlsZS51c2VyU2VsZWN0ID0gXCJpbml0aWFsXCI7XG5cblx0XHQvLyBzZXQgaGludCBwb3NpdGlvblxuXHRcdGlmKGVsTGVmdCAtIHdpbmRvd1dpZHRoID4gMCkge1xuXHRcdFx0ZWxMZWZ0ID0gZWxMZWZ0IC0gd2luZG93V2lkdGggKyBoaW50V2lkdGggKyBoaWdobGlnaHRXaWR0aDtcblx0XHR9XG5cblx0XHRpZih3aW5kb3dIZWlnaHQgLzIgPCBlbFRvcCkgeyAvLyBib3R0b21cblx0XHRcdGhpbnRUb3AgPSBlbFRvcCAtIGhpbnRIZWlnaHQgLSBwYWRkaW5nIC0gdGhpcy5fc3RlcC5wYWRkaW5nKjI7XG5cdFx0fSBlbHNlIGlmKHdpbmRvd1dpZHRoIC8yIDwgZWxMZWZ0ICYmIGVsTGVmdCArIGhpbnRXaWR0aCA8IHdpbmRvd1dpZHRoICYmIGhpZ2hsaWdodFdpZHRoICsgaGludFdpZHRoIDwgd2luZG93V2lkdGgpIHsgLy8gcmlnaHRcblx0XHRcdGhpbnRUb3AgPSBoaWdobGlnaHRIZWlnaHQgLyAyICsgZWxUb3AgLSB0aGlzLl9zdGVwLnBhZGRpbmc7XG5cdFx0XHRoaW50TGVmdCA9IGVsTGVmdCAtIGhpbnRXaWR0aCAtIHRoaXMuX3N0ZXAucGFkZGluZyAtIHBhZGRpbmc7XG5cdFx0fSBlbHNlIGlmKHdpbmRvd1dpZHRoIC8yID4gZWxMZWZ0ICYmIGVsTGVmdCArIGhpbnRXaWR0aCArIGhpZ2hsaWdodFdpZHRoIDwgd2luZG93V2lkdGgpIHsgLy8gbGVmdFxuXHRcdFx0aGludExlZnQgPSBoaWdobGlnaHRXaWR0aCArIGVsTGVmdCArIHBhZGRpbmc7XG5cdFx0XHRoaW50VG9wID0gZWxUb3AgLSB0aGlzLl9zdGVwLnBhZGRpbmc7XG5cdFx0fSBlbHNlIGlmKGhpbnRUb3A+d2luZG93SGVpZ2h0ICYmIGhpbnRIZWlnaHQraGlnaGxpZ2h0SGVpZ2h0PHdpbmRvd0hlaWdodCl7Ly90b3AsIGJ1dCBoaW50IGRvZXMgbm90IGZpdFxuXHRcdFx0aGludFRvcCA9IGVsVG9wIC0gaGludEhlaWdodCAtIHBhZGRpbmcgLSB0aGlzLl9zdGVwLnBhZGRpbmcqMjtcblx0XHR9IGVsc2UgaWYoaGludFRvcCA+d2luZG93SGVpZ2h0IHx8IGhpbnRUb3AraGludEhlaWdodD53aW5kb3dIZWlnaHQpe1xuXHRcdFx0aGludExlZnQgPSBlbExlZnQgLSBoaW50V2lkdGggLSB0aGlzLl9zdGVwLnBhZGRpbmcqMiAtIHBhZGRpbmc7XG5cdFx0XHRoaW50VG9wID0gZWxUb3AgLSB0aGlzLl9zdGVwLnBhZGRpbmc7XG5cdFx0fVxuXG5cdFx0aWYoaGludExlZnQgKyBoaW50V2lkdGggPiB3aW5kb3dXaWR0aCkgeyAvLyBmb3Igb3ZlcmZsb3dcblx0XHRcdGhpbnRMZWZ0ID0gd2luZG93V2lkdGggLSBoaW50V2lkdGg7XG5cdFx0fSBlbHNlIGlmKGhpbnRUb3AgPCAwIHx8IGhpbnRUb3AgPiB3aW5kb3dIZWlnaHQpIHtcblx0XHRcdGhpbnRUb3AgPSBwYWRkaW5nO1xuXHRcdH0gZWxzZSBpZih3aW5kb3dXaWR0aCA8IGhpZ2hsaWdodFdpZHRoIHx8IGhpbnRMZWZ0IDwgMCkge1xuXHRcdFx0aGludExlZnQgPSBwYWRkaW5nO1xuXHRcdH1cblx0XHRpZih3ZWJpeC5lbnYubW9iaWxlKSB7XG5cdFx0XHRzdGVwRWwuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xuXHRcdH1cblx0XHR0aGlzLl9oaW50LnN0eWxlLmNzc1RleHQgPSBgdG9wOiR7aGludFRvcH1weDsgbGVmdDoke2hpbnRMZWZ0fXB4O2A7XG5cdFx0dGhpcy5fc2V0QXR0cmlidXRlcyh0aGlzLiR2aWV3LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ3ZWJpeF9oaW50X292ZXJsYXlfaG9sZV9lbFwiKVswXSwge1wieFwiOmVsTGVmdC10aGlzLl9zdGVwLnBhZGRpbmcqMiwgXCJ5XCI6ZWxUb3AtdGhpcy5fc3RlcC5wYWRkaW5nKjIsIFwid2lkdGhcIjpoaWdobGlnaHRXaWR0aCt0aGlzLl9zdGVwLnBhZGRpbmcgKjIsIFwiaGVpZ2h0XCI6aGlnaGxpZ2h0SGVpZ2h0K3RoaXMuX3N0ZXAucGFkZGluZyoyfSk7XG5cdFx0d2ViaXguaHRtbC5hZGRDc3ModGhpcy5nZXROb2RlKCksIFwid2ViaXhfaGludF9hbmltYXRlZFwiKTtcblx0fSxcblx0X3NldEF0dHJpYnV0ZXMoZWwsIGF0dHJzKSB7XG5cdFx0Zm9yKHZhciBrZXkgaW4gYXR0cnMpIHtcblx0XHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHRcdH1cblx0fSxcblx0X3JlRHJhdyhzdGVwRWwsIHJlZnJlc2gpIHtcblx0XHRsZXQgdGl0bGUgPSB0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIud2ViaXhfaGludF90aXRsZVwiKTtcblx0XHRsZXQgZWw7XG5cblx0XHR0aGlzLl9zdGVwLmV2ZW50RWw/ZWwgPSB0aGlzLl9nZXRFbCh0aGlzLl9zdGVwLmV2ZW50RWwpOmVsID0gc3RlcEVsO1xuXHRcdGlmKHRoaXMuX2kgPiAwICYmICFyZWZyZXNoKSB7XG5cdFx0XHR3ZWJpeC5odG1sLnJlbW92ZUNzcyh0aGlzLmdldE5vZGUoKSwgXCJ3ZWJpeF9oaW50X2FuaW1hdGVkXCIpO1xuXHRcdFx0dGl0bGUuaW5uZXJIVE1MID0gdGhpcy5fc3RlcC50aXRsZSB8fCBcIlwiO1xuXHRcdFx0dGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwiLndlYml4X2hpbnRfbGFiZWxcIikuaW5uZXJIVE1MID0gdGhpcy5fc3RlcC50ZXh0IHx8IFwiXCI7XG5cdFx0XHR0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIud2ViaXhfaGludF9wcm9ncmVzc1wiKS5pbm5lckhUTUwgPSBgJHt0aGlzLl9pKzF9LyR7dGhpcy5jb25maWcuc3RlcHMubGVuZ3RofWA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2RyYXdIaW50KCk7XG5cdFx0XHR0aGlzLl9zZXRFdmVudHNCdXR0b25zKGVsKTtcblx0XHR9XG5cdFx0aWYoIXRoaXMuX3N0ZXAudGl0bGUgJiYgdGl0bGUpIHtcblx0XHRcdHRpdGxlLnN0eWxlLm1hcmdpbiA9IFwiMFwiO1xuXHRcdH1cblx0XHR0aGlzLl9zZXRFbEV2ZW50cyhlbCk7XG5cblx0XHRpZih0aGlzLl9wcmV2QnV0dG9uKSB7XG5cdFx0XHRpZih0aGlzLl9pID4gMCkgeyAvLyBwcmV2aW91cyBidXR0b24gc2hvd1xuXHRcdFx0XHR3ZWJpeC5odG1sLnJlbW92ZUNzcyh0aGlzLl9wcmV2QnV0dG9uLCBcIndlYml4X2hpbnRfYnV0dG9uX2hpZGRlblwiKTtcblx0XHRcdH0gZWxzZSBpZih0aGlzLl9wcmV2QnV0dG9uICYmICF0aGlzLl9wcmV2QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcIndlYml4X2hpbnRfYnV0dG9uX2hpZGRlblwiKSkge1xuXHRcdFx0XHR3ZWJpeC5odG1sLmFkZENzcyh0aGlzLl9wcmV2QnV0dG9uLCBcIndlYml4X2hpbnRfYnV0dG9uX2hpZGRlblwiKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0aWYodGhpcy5faSA9PT0gdGhpcy5jb25maWcuc3RlcHMubGVuZ3RoIC0xICYmIHRoaXMuX25leHRCdXR0b24pIHsgLy8gbmV4dCBidXR0b24gdGV4dFxuXHRcdFx0dGhpcy5fbmV4dEJ1dHRvbi5pbm5lckhUTUwgPSBgJHt0eXBlb2YgdGhpcy5jb25maWcubmV4dEJ1dHRvbiA9PSBcInN0cmluZ1wiP3RoaXMuY29uZmlnLm5leHRCdXR0b246YCR7d2ViaXguaTE4bi5oaW50Lmxhc3R9YH1gO1xuXHRcdH1cblx0fSxcblx0X3NldEJvZHlDbGFzcygpIHtcblx0XHRsZXQgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cdFx0aWYoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJ3ZWJpeF9oaW50X292ZXJmbG93XCIpKSB7XG5cdFx0XHR3ZWJpeC5odG1sLnJlbW92ZUNzcyhib2R5LCBcIndlYml4X2hpbnRfb3ZlcmZsb3dcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdlYml4Lmh0bWwuYWRkQ3NzKGJvZHksIFwid2ViaXhfaGludF9vdmVyZmxvd1wiKTtcblx0XHR9XG5cdH0sXG5cdF9nZXRFbChlbCkge1xuXHRcdGlmKCQkKGVsKSkge1xuXHRcdFx0cmV0dXJuICQkKGVsKS5nZXROb2RlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKTtcblx0XHR9XG5cdH0sXG5cdF9kcmF3U3RlcHMocmVmcmVzaCkge1xuXHRcdGlmKHRoaXMuY29uZmlnLnN0ZXBzW3RoaXMuX2ldKSB7XG5cdFx0XHRsZXQgZWwgPSB0aGlzLl9nZXRFbCh0aGlzLmNvbmZpZy5zdGVwc1t0aGlzLl9pXS5lbCk7XG5cdFx0XHRpZih0aGlzLl9pID09PSAwICYmICFyZWZyZXNoKSB7XG5cdFx0XHRcdHRoaXMuY2FsbEV2ZW50KFwib25CZWZvcmVTdGFydFwiLCBbXSk7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4geyAvLyBmb3IgZmlyc3QgaW5pdFxuXHRcdFx0XHRcdHRoaXMuX2RyYXdPdmVyKGVsKTtcblx0XHRcdFx0fSwgMTAwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX3NldFByb3BlcnRpZXMoZWwsIHJlZnJlc2gpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9za2lwKCk7XG5cdFx0fVxuXHR9LFxuXHRfc2V0RXZlbnRzQnV0dG9ucygpIHtcblx0XHR0aGlzLl9wcmV2QnV0dG9uID0gdGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yQWxsKFwiLndlYml4X2hpbnRfYnV0dG9uX3ByZXZcIilbMF07XG5cdFx0dGhpcy5fbmV4dEJ1dHRvbiA9IHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvckFsbChcIi53ZWJpeF9oaW50X2J1dHRvbl9uZXh0XCIpWzBdO1xuXHRcdGxldCBlbDtcblx0XHRpZih0aGlzLl9uZXh0QnV0dG9uKSB7XG5cdFx0XHR3ZWJpeC5ldmVudCh0aGlzLl9uZXh0QnV0dG9uLCBcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdFx0dGhpcy5fbmV4dChlbCwgXCJuZXh0XCIpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGlmKHRoaXMuX3ByZXZCdXR0b24pIHtcblx0XHRcdHdlYml4LmV2ZW50KHRoaXMuX3ByZXZCdXR0b24sIFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0XHR3ZWJpeC5odG1sLnJlbW92ZUNzcyh0aGlzLmdldE5vZGUoKSwgXCJ3ZWJpeF9oaW50X2FuaW1hdGVkXCIpO1xuXHRcdFx0XHR0aGlzLl9oaW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5faGludCk7XG5cdFx0XHRcdHRoaXMuX2kgLT0gMjtcblx0XHRcdFx0dGhpcy5fbmV4dChlbCwgXCJwcmV2aW91c1wiKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHR3ZWJpeC5ldmVudCh0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIud2ViaXhfaGludF9idXR0b25fY2xvc2VcIiksIFwiY2xpY2tcIiwgKCkgPT4geyB0aGlzLl9za2lwKCk7IH0pO1xuXHR9LFxuXHRfc2V0RWxFdmVudHMoc3RlcEVsKSB7XG5cdFx0bGV0IGV2ZW50U3RlcCA9IHRoaXMuX3N0ZXAuZXZlbnQ7XG5cdFx0c3RlcEVsLmZvY3VzKCk7XG5cdFx0aWYoZXZlbnRTdGVwKSB7XG5cdFx0XHRpZihldmVudFN0ZXAgPT09IFwiZW50ZXJcIikge1xuXHRcdFx0XHRldmVudFN0ZXAgPSBcImtleWRvd25cIjtcblx0XHRcdH1cblx0XHRcdGlmKHRoaXMuX2V2ZW50T2JqKSB7XG5cdFx0XHRcdHdlYml4LmV2ZW50UmVtb3ZlKHRoaXMuX2V2ZW50T2JqKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2V2ZW50T2JqID0gd2ViaXguZXZlbnQoc3RlcEVsLCBldmVudFN0ZXAsIChlKSA9PiB7XG5cdFx0XHRcdGlmKGV2ZW50U3RlcCA9PSBlLnR5cGUpIHtcblx0XHRcdFx0XHRpZihlLnR5cGUgPT09IFwia2V5ZG93blwiICYmIGUua2V5Q29kZSAhPT0gMTMpIHJldHVybjtcblx0XHRcdFx0XHRzdGVwRWwuZm9jdXMoKTtcblx0XHRcdFx0XHR0aGlzLl9uZXh0KHN0ZXBFbCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9LFxuXHRfbmV4dChzdGVwRWwsIGFjdGlvbikge1xuXHRcdGFjdGlvbiA9IGFjdGlvbiB8fCBcIm5leHRcIjtcblx0XHRpZiAodGhpcy5fc3RlcC5uZXh0ICYmIGFjdGlvbiA9PT0gXCJuZXh0XCIgfHwgdGhpcy5fc3RlcC5wcmV2aW91cyAmJiBhY3Rpb24gPT09IFwicHJldmlvdXNcIikge1xuXHRcdFx0bGV0IHByb21pc2UgPSB0aGlzLl9zdGVwW2FjdGlvbl0oKTtcblx0XHRcdGlmIChwcm9taXNlLnRoZW4pe1xuXHRcdFx0XHRyZXR1cm4gcHJvbWlzZS50aGVuKCAoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5fbmV4dFN0ZXAoc3RlcEVsLCBhY3Rpb24pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLl9uZXh0U3RlcChzdGVwRWwsIGFjdGlvbik7XG5cdH0sXG5cdF9uZXh0U3RlcChzdGVwRWwsIGFjdGlvbikge1xuXHRcdGxldCBlbCA9IHRoaXMuX2dldEVsKHRoaXMuX3N0ZXAuZWwpO1xuXHRcdGVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIlwiO1xuXHRcdGVsLnN0eWxlLnVzZXJTZWxlY3QgPSBcIlwiO1xuXHRcdGVsLmJsdXIoKTtcblx0XHR0aGlzLl9pKys7XG5cdFx0aWYoYWN0aW9uICE9PSBcInByZXZpb3VzXCIpIHtcblx0XHRcdHRoaXMuX2RyYXdTdGVwcygpO1xuXHRcdFx0dGhpcy5jYWxsRXZlbnQoXCJvbk5leHRcIiwgW3RoaXMuX2krMV0pO1xuXHRcdH1cblx0XHRpZihhY3Rpb24gPT09IFwicHJldmlvdXNcIikge1xuXHRcdFx0dGhpcy5fZHJhd1N0ZXBzKFwicHJldmlvdXNcIik7XG5cdFx0XHR0aGlzLmNhbGxFdmVudChcIm9uUHJldmlvdXNcIiwgW3RoaXMuX2krMV0pO1xuXHRcdH1cblx0fSxcblx0X3NraXAoKSB7XG5cdFx0aWYgKHRoaXMuX2kgPT09IC0xKSByZXR1cm47XG5cblx0XHR0aGlzLmNhbGxFdmVudChcIm9uU2tpcFwiLCBbdGhpcy5faSsxXSk7XG5cdFx0dGhpcy5oaWRlKCk7XG5cdFx0dGhpcy5fc2V0Qm9keUNsYXNzKCk7XG5cdFx0aWYodGhpcy5faSA9PT0gdGhpcy5jb25maWcuc3RlcHMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLmNhbGxFdmVudChcIm9uRW5kXCIsIFt0aGlzLl9pKzFdKTtcblx0XHRcdHRoaXMuX2kgPSAtMTtcblx0XHR9XG5cdH0sXG5cdF9yZWZyZXNoKGksIGZpcnN0RHJhdywgcmVzaXplKSB7XG5cdFx0dGhpcy5faSA9IGktMTtcblx0XHR0aGlzLl9zZXRCb2R5Q2xhc3MoKTtcblx0XHRpZih0aGlzLl9oaW50KSB7XG5cdFx0XHRpZih0aGlzLl9oaW50LnBhcmVudE5vZGUpXG5cdFx0XHRcdHRoaXMuX2hpbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9oaW50KTtcblx0XHRcdGlmKCFyZXNpemUpIHtcblx0XHRcdFx0d2ViaXguaHRtbC5yZW1vdmVDc3ModGhpcy5nZXROb2RlKCksIFwid2ViaXhfaGludF9hbmltYXRlZFwiKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy5zaG93KCk7XG5cdFx0aWYoZmlyc3REcmF3KSB7XG5cdFx0XHRsZXQgc3ZnID0gdGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpO1xuXHRcdFx0aWYgKHN2Zylcblx0XHRcdFx0c3ZnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3ZnKTtcblx0XHRcdHRoaXMuX2RyYXdTdGVwcygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9kcmF3U3RlcHMoXCJyZWZyZXNoXCIpO1xuXHRcdFx0dGhpcy5fc2V0Qm9keUNsYXNzKCk7XG5cdFx0fVxuXHR9LFxuXHRzdGFydCgpIHtcblx0XHR0aGlzLl9yZWZyZXNoKDEsIHRydWUpO1xuXHR9LFxuXHRlbmQoKSB7XG5cdFx0dGhpcy5fc2tpcCgpO1xuXHR9LFxuXHRnZXRDdXJyZW50U3RlcCgpIHtcblx0XHRyZXR1cm4gdGhpcy5faSsxO1xuXHR9LFxuXHRyZXN1bWUoc3RlcE51bWJlcikge1xuXHRcdGlmKHRoaXMuX2hpbnQpe1xuXHRcdFx0c3RlcE51bWJlciA9IHN0ZXBOdW1iZXIgfHwgKHRoaXMuX2krMSkgfHwgMTtcblx0XHRcdHRoaXMuX3JlZnJlc2goc3RlcE51bWJlcik7XG5cdFx0fVxuXHR9LFxuXHRnZXRTdGVwcygpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25maWcuc3RlcHM7XG5cdH0sXG5cdHNldFN0ZXBzKHZhbHVlKSB7XG5cdFx0dGhpcy5kZWZpbmUoXCJzdGVwc1wiLCB2YWx1ZSk7XG5cdH1cbn0sIHdlYml4LnVpLnZpZXcsIHdlYml4LkV2ZW50U3lzdGVtKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2hpbnQuanMiLCJleHBvcnQgbGV0IGJlID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiYmUtQllcIl0gPSB7XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwi0J3QsNGB0YLRg9C/0L3Ri1wiLFxuXHRcdHByZXY6IFwi0J/QsNC/0Y/RgNGN0LTQvdGWXCIsXG5cdFx0bGFzdDogXCLQmtCw0L3QtdGGINCi0YPRgNCwXCJcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vYmUuanMiLCIvKkdlcm1hbiAoR2VybWFueSkgbG9jYWxlKi9cbmV4cG9ydCBsZXQgZGUgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJkZS1ERVwiXSA9IHtcblx0aGludDp7XG5cdFx0bmV4dDogXCJOw6RjaHN0ZXJcIixcblx0XHRwcmV2OiBcIkJpc2hlcmlnZVwiLFxuXHRcdGxhc3Q6IFwiRW5kZSBUb3VyXCJcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9kZS5qcyIsImV4cG9ydCBsZXQgZW4gPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJlbi1VU1wiXT17XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwiTmV4dFwiLFxuXHRcdHByZXY6IFwiUHJldmlvdXNcIixcblx0XHRsYXN0OiBcIkVuZCBUb3VyXCJcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vZW4uanMiLCIvKlNwYW5pc2ggKFNwYWluLCBJbnRlcm5hdGlvbmFsIFNvcnQpIGxvY2FsZSovXG5leHBvcnQgbGV0IGVzID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiZXMtRVNcIl0gPSB7XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwiU2lndWllbnRlXCIsXG5cdFx0cHJldjogXCJBbnRlcmlvclwiLFxuXHRcdGxhc3Q6IFwiRmluIGRlIFZpYWplXCJcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9lcy5qcyIsImV4cG9ydCBsZXQgZnIgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJmci1GUlwiXT17XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwiUHJvY2hhaW5cIixcblx0XHRwcmV2OiBcIlByw6ljw6lkZW50XCIsXG5cdFx0bGFzdDogXCJFbmQgVG91clwiXG5cdH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2ZyLmpzIiwiLypJdGFsaWFuIChJdGFseSkgbG9jYWxlKi9cbmV4cG9ydCBsZXQgaXQgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJpdC1JVFwiXSA9IHtcblx0aGludDp7XG5cdFx0bmV4dDogXCJTZWd1ZW50ZVwiLFxuXHRcdHByZXY6IFwiUHJlY2VkZW50ZVwiLFxuXHRcdGxhc3Q6IFwiRW5kIFRvdXJcIlxuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2l0LmpzIiwiZXhwb3J0IGxldCBqYSA9IHdlYml4LmkxOG4ubG9jYWxlc1tcImphLUpQXCJdPXtcblx0aGludDp7XG5cdFx0bmV4dDogXCLmrKFcIixcblx0XHRwcmV2OiBcIuWJjVwiLFxuXHRcdGxhc3Q6IFwi57WC5LqG44OE44Ki44O8XCJcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vamEuanMiLCJleHBvcnQgbGV0IHB0ID0gd2ViaXguaTE4bi5sb2NhbGVzW1wicHQtQlJcIl0gPSB7XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwiUHLDs3hpbW9cIixcblx0XHRwcmV2OiBcIkFudGVyaW9yXCIsXG5cdFx0bGFzdDogXCJFbmQgVG91clwiXG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vcHQuanMiLCJleHBvcnQgbGV0IHJ1ID0gd2ViaXguaTE4bi5sb2NhbGVzW1wicnUtUlVcIl09e1xuXHRoaW50Ontcblx0XHRuZXh0OiBcItCh0LvQtdC00YPRjtGJ0LjQuVwiLFxuXHRcdHByZXY6IFwi0J/RgNC10LTRi9C00YPRidC40LlcIixcblx0XHRsYXN0OiBcItCa0L7QvdC10YYg0KLRg9GA0LBcIlxuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9ydS5qcyIsIi8qQ2hpbmVzZSAoU2ltcGxpZmllZCwgUFJDKSBsb2NhbGUqL1xuZXhwb3J0IGxldCB6aCA9IHdlYml4LmkxOG4ubG9jYWxlc1tcInpoLUNOXCJdID0ge1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIuS4i+S4gOS4qlwiLFxuXHRcdHByZXY6IFwi5Lul5YmNXCIsXG5cdFx0bGFzdDogXCLnu5PmnZ/lt6Hop4ZcIlxuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL3poLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==