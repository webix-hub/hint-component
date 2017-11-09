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
			if (_this.getCurrentStep()) {
				_this._refresh(_this.getCurrentStep(), false, true);
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
		if (webix.env.mobile) {
			stepEl.scrollIntoView(false);
		}
		setTimeout(function () {
			_this2._hint.style.cssText = "top:" + hintTop + "px; left:" + hintLeft + "px;";
			_this2._setAttributes(_this2.$view.getElementsByClassName("webix_hint_overlay_hole_el")[0], { "x": elLeft - _this2._step.padding * 2, "y": elTop - _this2._step.padding * 2, "width": highlightWidth + _this2._step.padding * 2, "height": highlightHeight + _this2._step.padding * 2 });
			webix.html.addCss(_this2.getNode(), "webix_hint_animated");
		}, 500);
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
		var _this3 = this;

		if (this.config.steps[this._i]) {
			var el = this._getEl(this.config.steps[this._i].el);
			if (this._i === 0 && !refresh) {
				this.callEvent("onBeforeStart", []);
				setTimeout(function () {
					// for first init
					_this3._drawOver(el);
				}, 100);
			} else {
				this._setProperties(el, refresh);
			}
		} else {
			this._skip();
		}
	},
	_setEventsButtons: function _setEventsButtons() {
		var _this4 = this;

		this._prevButton = this.$view.querySelectorAll(".webix_hint_button_prev")[0];
		this._nextButton = this.$view.querySelectorAll(".webix_hint_button_next")[0];
		var el = void 0;
		if (this._nextButton) {
			webix.event(this._nextButton, "click", function () {
				_this4._next(el, "next");
			});
		}
		if (this._prevButton) {
			webix.event(this._prevButton, "click", function () {
				webix.html.removeCss(_this4.getNode(), "webix_hint_animated");
				_this4._hint.parentNode.removeChild(_this4._hint);
				_this4._i -= 2;
				_this4._next(el, "previous");
			});
		}
		webix.event(this.$view.querySelector(".webix_hint_button_close"), "click", function () {
			_this4._skip();
		});
	},
	_setElEvents: function _setElEvents(stepEl) {
		var _this5 = this;

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
					_this5._next(stepEl);
				}
			});
		} else {
			return;
		}
	},
	_next: function _next(stepEl, action) {
		var _this6 = this;

		action = action || "next";
		if (this._step.next && action === "next" || this._step.previous && action === "previous") {
			var promise = this._step[action]();
			if (promise) {
				promise.resolve().then(function () {
					_this6._nextStep(stepEl, action);
				});
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
		}
	},
	_refresh: function _refresh(i, firstDraw) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDcxMzJlZTBhZDI3YWRmYzYwYjUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9sb2NhbGVzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5sZXNzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vYmUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL2RlLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9lbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL2ZyLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9pdC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vamEuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL3B0LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9ydS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vemguanMiXSwibmFtZXMiOlsibG9jYWxlIiwiaGludCIsIm5leHQiLCJwcmV2IiwibGFzdCIsIndlYml4IiwiaTE4biIsImV4dGVuZCIsInByb3RvVUkiLCJuYW1lIiwiZGVmYXVsdHMiLCJzdGVwcyIsImJvcmRlcmxlc3MiLCJuZXh0QnV0dG9uIiwicHJldkJ1dHRvbiIsIiRpbml0IiwiJHZpZXciLCJjbGFzc05hbWUiLCJfaSIsImF0dGFjaEV2ZW50IiwiX3NldEJvZHlDbGFzcyIsIl9ldmVudE9iakVzYyIsImV2ZW50UmVtb3ZlIiwiX2V2ZW50UmVzaXplIiwiZGV0YWNoRXZlbnQiLCJldmVudCIsImRvY3VtZW50IiwiYm9keSIsImUiLCJrZXlDb2RlIiwiX3NraXAiLCJnZXRDdXJyZW50U3RlcCIsIl9yZWZyZXNoIiwic3RlcHNfc2V0dGVyIiwiY29uZmlnIiwibmV3Q29uZmlnIiwiaSIsImxlbmd0aCIsInBhZGRpbmciLCJ0ZXh0IiwicHVzaCIsIl9kcmF3T3ZlciIsInN0ZXBFbCIsImlubmVySFRNTCIsIl9zZXRQcm9wZXJ0aWVzIiwiY2FsbEV2ZW50IiwiX2RyYXdIaW50Iiwic2V0dGluZ3MiLCJfc3RlcCIsInRpdGxlIiwicmVmcmVzaCIsImVudiIsIm1vYmlsZSIsInNjcm9sbEludG9WaWV3IiwiX3JlRHJhdyIsIl9oaW50IiwicXVlcnlTZWxlY3RvciIsImRvY0VsZW0iLCJkb2N1bWVudEVsZW1lbnQiLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbExlZnQiLCJsZWZ0IiwiaGlnaGxpZ2h0V2lkdGgiLCJ3aWR0aCIsImhpZ2hsaWdodEhlaWdodCIsImhlaWdodCIsImhpbnRMZWZ0IiwiaGludFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJoaW50SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZWxUb3AiLCJ0b3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImhpbnRUb3AiLCJ3aW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsIk1hdGgiLCJtaW4iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwidXNlclNlbGVjdCIsInNldFRpbWVvdXQiLCJjc3NUZXh0IiwiX3NldEF0dHJpYnV0ZXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaHRtbCIsImFkZENzcyIsImdldE5vZGUiLCJlbCIsImF0dHJzIiwia2V5Iiwic2V0QXR0cmlidXRlIiwiZXZlbnRFbCIsIl9nZXRFbCIsInJlbW92ZUNzcyIsIl9zZXRFdmVudHNCdXR0b25zIiwibWFyZ2luIiwiX3NldEVsRXZlbnRzIiwiX3ByZXZCdXR0b24iLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIl9uZXh0QnV0dG9uIiwiJCQiLCJfZHJhd1N0ZXBzIiwicXVlcnlTZWxlY3RvckFsbCIsIl9uZXh0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZXZlbnRTdGVwIiwiZm9jdXMiLCJfZXZlbnRPYmoiLCJ0eXBlIiwiYWN0aW9uIiwicHJldmlvdXMiLCJwcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfbmV4dFN0ZXAiLCJibHVyIiwiaGlkZSIsImZpcnN0RHJhdyIsInNob3ciLCJzdmciLCJzdGFydCIsImVuZCIsInJlc3VtZSIsInN0ZXBOdW1iZXIiLCJnZXRTdGVwcyIsInNldFN0ZXBzIiwidmFsdWUiLCJkZWZpbmUiLCJ1aSIsInZpZXciLCJFdmVudFN5c3RlbSIsImJlIiwibG9jYWxlcyIsImRlIiwiZW4iLCJlcyIsImZyIiwiaXQiLCJqYSIsInB0IiwicnUiLCJ6aCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRU8sSUFBSUEsMEJBQVM7QUFDbkJDLE9BQU07QUFDTEMsUUFBTSxNQUREO0FBRUxDLFFBQU0sVUFGRDtBQUdMQyxRQUFNO0FBSEQ7QUFEYSxDQUFiLEM7Ozs7OztBQ1hQLHlDOzs7Ozs7Ozs7QUNBQTs7QUFDQTs7QUFFQUMsTUFBTUMsSUFBTixDQUFXTCxJQUFYLEdBQWtCSSxNQUFNRSxNQUFOLENBQWFGLE1BQU1DLElBQW5CLG1CQUFpQ0wsSUFBbkQ7O0FBRUFJLE1BQU1HLE9BQU4sQ0FBYztBQUNiQyxPQUFNLE1BRE87QUFFYkMsV0FBVTtBQUNUQyxTQUFPLEVBREU7QUFFVEMsY0FBWSxJQUZIO0FBR1RDLGNBQVksSUFISDtBQUlUQyxjQUFZO0FBSkgsRUFGRztBQVFiQyxNQVJhLG1CQVFMO0FBQUE7O0FBQ1AsT0FBS0MsS0FBTCxDQUFXQyxTQUFYLElBQXdCLGtCQUF4QjtBQUNBLE9BQUtDLEVBQUwsR0FBVSxDQUFDLENBQVg7QUFDQSxPQUFLQyxXQUFMLENBQWlCLFlBQWpCLEVBQStCLFlBQU07QUFDcEMsU0FBS0MsYUFBTDtBQUNBLE9BQUcsTUFBS0MsWUFBUixFQUFzQjtBQUNyQmhCLFVBQU1pQixXQUFOLENBQWtCLE1BQUtELFlBQXZCO0FBQ0E7QUFDRCxPQUFHLE1BQUtFLFlBQVIsRUFBc0I7QUFDckJsQixVQUFNbUIsV0FBTixDQUFrQixNQUFLRCxZQUF2QjtBQUNBO0FBQ0QsR0FSRDtBQVNBLE9BQUtGLFlBQUwsR0FBb0JoQixNQUFNb0IsS0FBTixDQUFZQyxTQUFTQyxJQUFyQixFQUEwQixTQUExQixFQUFxQyxVQUFDQyxDQUFELEVBQU87QUFDL0Q7QUFDQSxPQUFJQSxFQUFFQyxPQUFGLElBQWEsRUFBakIsRUFBb0I7QUFDbkIsVUFBS0MsS0FBTDtBQUNBO0FBQ0QsR0FMbUIsQ0FBcEI7O0FBT0EsT0FBS1AsWUFBTCxHQUFvQmxCLE1BQU1jLFdBQU4sQ0FBa0IsVUFBbEIsRUFBOEIsWUFBTTtBQUN2RCxPQUFHLE1BQUtZLGNBQUwsRUFBSCxFQUEwQjtBQUN6QixVQUFLQyxRQUFMLENBQWMsTUFBS0QsY0FBTCxFQUFkLEVBQXFDLEtBQXJDLEVBQTRDLElBQTVDO0FBQ0E7QUFDRCxHQUptQixDQUFwQjtBQUtBLEVBaENZO0FBaUNiRSxhQWpDYSx3QkFpQ0FDLE1BakNBLEVBaUNRO0FBQ3BCLE1BQUlDLFlBQVksRUFBaEI7QUFDQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsT0FBT0csTUFBM0IsRUFBbUNELEdBQW5DLEVBQXdDO0FBQ3ZDRixVQUFPRSxDQUFQLEVBQVVFLE9BQVYsR0FBb0JKLE9BQU9FLENBQVAsRUFBVUUsT0FBVixJQUFxQixDQUF6QztBQUNBSixVQUFPRSxDQUFQLEVBQVVHLElBQVYsR0FBaUJMLE9BQU9FLENBQVAsRUFBVUcsSUFBVixJQUFrQixFQUFuQztBQUNBSixhQUFVSyxJQUFWLENBQWVOLE9BQU9FLENBQVAsQ0FBZjtBQUNBO0FBQ0QsU0FBT0QsU0FBUDtBQUNBLEVBekNZO0FBMENiTSxVQTFDYSxxQkEwQ0hDLE1BMUNHLEVBMENLO0FBQ2pCLE9BQUsxQixLQUFMLENBQVcyQixTQUFYO0FBU0EsT0FBS0MsY0FBTCxDQUFvQkYsTUFBcEI7QUFDQSxPQUFLRyxTQUFMLENBQWUsY0FBZixFQUErQixFQUEvQjtBQUNBLEVBdERZO0FBdURiQyxVQXZEYSx1QkF1REQ7QUFDWCxNQUFJQyxXQUFXLEtBQUtiLE1BQXBCO0FBQ0EsT0FBS2xCLEtBQUwsQ0FBVzJCLFNBQVgsMkVBQ2tDLEtBQUtLLEtBQUwsQ0FBV0MsS0FBWCxHQUFpQixLQUFLRCxLQUFMLENBQVdDLEtBQTVCLEdBQWtDLEVBRHBFLHNEQUUrQixLQUFLRCxLQUFMLENBQVdULElBRjFDLGtFQUlJLEtBQUtyQixFQUFMLEdBQVEsQ0FKWixVQUlpQixLQUFLZ0IsTUFBTCxDQUFZdkIsS0FBWixDQUFrQjBCLE1BSm5DLDJFQU9JVSxTQUFTakMsVUFBVCxLQUF1QixLQUF2Qiw2RkFBa0gsT0FBT2lDLFNBQVNqQyxVQUFoQixJQUE4QixRQUE5QixHQUF1Q2lDLFNBQVNqQyxVQUFoRCxRQUE4RFQsTUFBTUMsSUFBTixDQUFXTCxJQUFYLENBQWdCRSxJQUFoTSxrQkFBa04sRUFQdE4sb0JBUUk0QyxTQUFTbEMsVUFBVCxLQUF1QixLQUF2QixvRUFBeUYsT0FBT2tDLFNBQVNsQyxVQUFoQixJQUE4QixRQUE5QixHQUF1Q2tDLFNBQVNsQyxVQUFoRCxRQUE4RFIsTUFBTUMsSUFBTixDQUFXTCxJQUFYLENBQWdCQyxJQUF2SyxrQkFBeUwsRUFSN0w7QUFZQSxFQXJFWTtBQXNFYjBDLGVBdEVhLDBCQXNFRUYsTUF0RUYsRUFzRVVRLE9BdEVWLEVBc0VtQjtBQUFBOztBQUMvQixNQUFHLENBQUNSLE1BQUosRUFBWTtBQUNYO0FBQ0E7O0FBRUQsTUFBRyxDQUFDckMsTUFBTThDLEdBQU4sQ0FBVUMsTUFBZCxFQUFzQjtBQUNyQlYsVUFBT1csY0FBUCxDQUFzQixLQUF0QjtBQUNBO0FBQ0QsT0FBS0wsS0FBTCxHQUFhLEtBQUtkLE1BQUwsQ0FBWXZCLEtBQVosQ0FBa0IsS0FBS08sRUFBdkIsQ0FBYjtBQUNBLE9BQUtvQyxPQUFMLENBQWFaLE1BQWIsRUFBcUJRLE9BQXJCO0FBQ0EsT0FBS0ssS0FBTCxHQUFhLEtBQUt2QyxLQUFMLENBQVd3QyxhQUFYLENBQXlCLGFBQXpCLENBQWI7O0FBRUEsTUFBSWxCLFVBQVUsRUFBZDtBQUNBLE1BQUltQixVQUFVL0IsU0FBU2dDLGVBQXZCO0FBQ0EsTUFBSUMsTUFBTWpCLE9BQU9rQixxQkFBUCxFQUFWO0FBQ0EsTUFBSUMsU0FBU0YsSUFBSUcsSUFBSixHQUFXLEtBQUtkLEtBQUwsQ0FBV1YsT0FBbkM7QUFDQSxNQUFJeUIsaUJBQWlCSixJQUFJSyxLQUF6QjtBQUNBLE1BQUlDLGtCQUFrQk4sSUFBSU8sTUFBMUI7QUFDQSxNQUFJQyxXQUFXTixTQUFTLEtBQUtiLEtBQUwsQ0FBV1YsT0FBbkM7QUFDQSxNQUFJOEIsWUFBWSxLQUFLYixLQUFMLENBQVdjLFdBQTNCO0FBQ0EsTUFBSUMsYUFBYSxLQUFLZixLQUFMLENBQVdnQixZQUE1QjtBQUNBLE1BQUlDLFFBQVFuRSxNQUFNOEMsR0FBTixDQUFVQyxNQUFWLEdBQW1CTyxJQUFJYyxHQUFKLEdBQVUsS0FBS3pCLEtBQUwsQ0FBV1YsT0FBeEMsR0FBa0RxQixJQUFJYyxHQUFKLEdBQVUsS0FBS3pCLEtBQUwsQ0FBV1YsT0FBckIsR0FBK0JvQyxPQUFPQyxXQUFwRztBQUNBLE1BQUlDLFVBQVVKLFFBQVFQLGVBQVIsR0FBMEIsS0FBS2pCLEtBQUwsQ0FBV1YsT0FBckMsR0FBK0NBLE9BQTdEO0FBQ0EsTUFBSXVDLGNBQWNILE9BQU9JLFVBQVAsSUFBcUJyQixRQUFRc0IsV0FBN0IsR0FBMkNDLEtBQUtDLEdBQUwsQ0FBU1AsT0FBT0ksVUFBaEIsRUFBNEJyQixRQUFRc0IsV0FBcEMsQ0FBM0MsR0FBOEZMLE9BQU9JLFVBQVAsSUFBcUJyQixRQUFRc0IsV0FBN0IsSUFBNENyRCxTQUFTd0Qsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsRUFBeUNILFdBQXJNO0FBQ0EsTUFBSUksZUFBZVQsT0FBT1UsV0FBUCxJQUFzQjNCLFFBQVE0QixZQUE5QixHQUE2Q0wsS0FBS0MsR0FBTCxDQUFTUCxPQUFPVSxXQUFoQixFQUE2QjNCLFFBQVE0QixZQUFyQyxDQUE3QyxHQUFrR1gsT0FBT1UsV0FBUCxJQUFzQjNCLFFBQVE0QixZQUE5QixJQUE4QzNELFNBQVN3RCxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxFQUF5Q0csWUFBNU07O0FBRUEzQyxTQUFPNEMsS0FBUCxDQUFhQyxhQUFiLEdBQTZCLEtBQTdCO0FBQ0E3QyxTQUFPNEMsS0FBUCxDQUFhRSxVQUFiLEdBQTBCLFNBQTFCOztBQUVBO0FBQ0EsTUFBRzNCLFNBQVNnQixXQUFULEdBQXVCLENBQTFCLEVBQTZCO0FBQzVCaEIsWUFBU0EsU0FBU2dCLFdBQVQsR0FBdUJULFNBQXZCLEdBQW1DTCxjQUE1QztBQUNBOztBQUVELE1BQUdvQixlQUFjLENBQWQsR0FBa0JYLEtBQXJCLEVBQTRCO0FBQUU7QUFDN0JJLGFBQVVKLFFBQVFGLFVBQVIsR0FBcUJoQyxPQUFyQixHQUErQixLQUFLVSxLQUFMLENBQVdWLE9BQVgsR0FBbUIsQ0FBNUQ7QUFDQSxHQUZELE1BRU8sSUFBR3VDLGNBQWEsQ0FBYixHQUFpQmhCLE1BQWpCLElBQTJCQSxTQUFTTyxTQUFULEdBQXFCUyxXQUFoRCxJQUErRGQsaUJBQWlCSyxTQUFqQixHQUE2QlMsV0FBL0YsRUFBNEc7QUFBRTtBQUNwSEQsYUFBVVgsa0JBQWtCLENBQWxCLEdBQXNCTyxLQUF0QixHQUE4QixLQUFLeEIsS0FBTCxDQUFXVixPQUFuRDtBQUNBNkIsY0FBV04sU0FBU08sU0FBVCxHQUFxQixLQUFLcEIsS0FBTCxDQUFXVixPQUFoQyxHQUEwQ0EsT0FBckQ7QUFDQSxHQUhNLE1BR0EsSUFBR3VDLGNBQWEsQ0FBYixHQUFpQmhCLE1BQWpCLElBQTJCQSxTQUFTTyxTQUFULEdBQXFCTCxjQUFyQixHQUFzQ2MsV0FBcEUsRUFBaUY7QUFBRTtBQUN6RlYsY0FBV0osaUJBQWlCRixNQUFqQixHQUEwQnZCLE9BQXJDO0FBQ0FzQyxhQUFVSixRQUFRLEtBQUt4QixLQUFMLENBQVdWLE9BQTdCO0FBQ0EsR0FITSxNQUdBLElBQUdzQyxVQUFRTyxZQUFSLElBQXdCYixhQUFXTCxlQUFYLEdBQTJCa0IsWUFBdEQsRUFBbUU7QUFBQztBQUMxRVAsYUFBVUosUUFBUUYsVUFBUixHQUFxQmhDLE9BQXJCLEdBQStCLEtBQUtVLEtBQUwsQ0FBV1YsT0FBWCxHQUFtQixDQUE1RDtBQUNBLEdBRk0sTUFFQSxJQUFHc0MsVUFBU08sWUFBVCxJQUF5QlAsVUFBUU4sVUFBUixHQUFtQmEsWUFBL0MsRUFBNEQ7QUFDbEVoQixjQUFXTixTQUFTTyxTQUFULEdBQXFCLEtBQUtwQixLQUFMLENBQVdWLE9BQVgsR0FBbUIsQ0FBeEMsR0FBNENBLE9BQXZEO0FBQ0FzQyxhQUFVSixRQUFRLEtBQUt4QixLQUFMLENBQVdWLE9BQTdCO0FBQ0E7O0FBRUQsTUFBRzZCLFdBQVdDLFNBQVgsR0FBdUJTLFdBQTFCLEVBQXVDO0FBQUU7QUFDeENWLGNBQVdVLGNBQWNULFNBQXpCO0FBQ0EsR0FGRCxNQUVPLElBQUdRLFVBQVUsQ0FBVixJQUFlQSxVQUFVTyxZQUE1QixFQUEwQztBQUNoRFAsYUFBVXRDLE9BQVY7QUFDQSxHQUZNLE1BRUEsSUFBR3VDLGNBQWNkLGNBQWQsSUFBZ0NJLFdBQVcsQ0FBOUMsRUFBaUQ7QUFDdkRBLGNBQVc3QixPQUFYO0FBQ0E7QUFDRCxNQUFHakMsTUFBTThDLEdBQU4sQ0FBVUMsTUFBYixFQUFxQjtBQUNwQlYsVUFBT1csY0FBUCxDQUFzQixLQUF0QjtBQUNBO0FBQ0RvQyxhQUFXLFlBQU07QUFDaEIsVUFBS2xDLEtBQUwsQ0FBVytCLEtBQVgsQ0FBaUJJLE9BQWpCLFlBQWtDZCxPQUFsQyxpQkFBcURULFFBQXJEO0FBQ0EsVUFBS3dCLGNBQUwsQ0FBb0IsT0FBSzNFLEtBQUwsQ0FBVzRFLHNCQUFYLENBQWtDLDRCQUFsQyxFQUFnRSxDQUFoRSxDQUFwQixFQUF3RixFQUFDLEtBQUkvQixTQUFPLE9BQUtiLEtBQUwsQ0FBV1YsT0FBWCxHQUFtQixDQUEvQixFQUFrQyxLQUFJa0MsUUFBTSxPQUFLeEIsS0FBTCxDQUFXVixPQUFYLEdBQW1CLENBQS9ELEVBQWtFLFNBQVF5QixpQkFBZSxPQUFLZixLQUFMLENBQVdWLE9BQVgsR0FBb0IsQ0FBN0csRUFBZ0gsVUFBUzJCLGtCQUFnQixPQUFLakIsS0FBTCxDQUFXVixPQUFYLEdBQW1CLENBQTVKLEVBQXhGO0FBQ0FqQyxTQUFNd0YsSUFBTixDQUFXQyxNQUFYLENBQWtCLE9BQUtDLE9BQUwsRUFBbEIsRUFBa0MscUJBQWxDO0FBQ0EsR0FKRCxFQUlHLEdBSkg7QUFLQSxFQXRJWTtBQXVJYkosZUF2SWEsMEJBdUlFSyxFQXZJRixFQXVJTUMsS0F2SU4sRUF1SWE7QUFDekIsT0FBSSxJQUFJQyxHQUFSLElBQWVELEtBQWYsRUFBc0I7QUFDckJELE1BQUdHLFlBQUgsQ0FBZ0JELEdBQWhCLEVBQXFCRCxNQUFNQyxHQUFOLENBQXJCO0FBQ0E7QUFDRCxFQTNJWTtBQTRJYjVDLFFBNUlhLG1CQTRJTFosTUE1SUssRUE0SUdRLE9BNUlILEVBNElZO0FBQ3hCLE1BQUlELFFBQVEsS0FBS2pDLEtBQUwsQ0FBV3dDLGFBQVgsQ0FBeUIsbUJBQXpCLENBQVo7QUFDQSxNQUFJd0MsV0FBSjs7QUFFQSxPQUFLaEQsS0FBTCxDQUFXb0QsT0FBWCxHQUFtQkosS0FBSyxLQUFLSyxNQUFMLENBQVksS0FBS3JELEtBQUwsQ0FBV29ELE9BQXZCLENBQXhCLEdBQXdESixLQUFLdEQsTUFBN0Q7QUFDQSxNQUFHLEtBQUt4QixFQUFMLEdBQVUsQ0FBVixJQUFlLENBQUNnQyxPQUFuQixFQUE0QjtBQUMzQjdDLFNBQU13RixJQUFOLENBQVdTLFNBQVgsQ0FBcUIsS0FBS1AsT0FBTCxFQUFyQixFQUFxQyxxQkFBckM7QUFDQTlDLFNBQU1OLFNBQU4sR0FBa0IsS0FBS0ssS0FBTCxDQUFXQyxLQUFYLElBQW9CLEVBQXRDO0FBQ0EsUUFBS2pDLEtBQUwsQ0FBV3dDLGFBQVgsQ0FBeUIsbUJBQXpCLEVBQThDYixTQUE5QyxHQUEwRCxLQUFLSyxLQUFMLENBQVdULElBQVgsSUFBbUIsRUFBN0U7QUFDQSxRQUFLdkIsS0FBTCxDQUFXd0MsYUFBWCxDQUF5QixzQkFBekIsRUFBaURiLFNBQWpELEdBQWdFLEtBQUt6QixFQUFMLEdBQVEsQ0FBeEUsU0FBNkUsS0FBS2dCLE1BQUwsQ0FBWXZCLEtBQVosQ0FBa0IwQixNQUEvRjtBQUNBLEdBTEQsTUFLTztBQUNOLFFBQUtTLFNBQUw7QUFDQSxRQUFLeUQsaUJBQUwsQ0FBdUJQLEVBQXZCO0FBQ0E7QUFDRCxNQUFHLENBQUMsS0FBS2hELEtBQUwsQ0FBV0MsS0FBWixJQUFxQkEsS0FBeEIsRUFBK0I7QUFDOUJBLFNBQU1xQyxLQUFOLENBQVlrQixNQUFaLEdBQXFCLEdBQXJCO0FBQ0E7QUFDRCxPQUFLQyxZQUFMLENBQWtCVCxFQUFsQjs7QUFFQSxNQUFHLEtBQUtVLFdBQVIsRUFBcUI7QUFDcEIsT0FBRyxLQUFLeEYsRUFBTCxHQUFVLENBQWIsRUFBZ0I7QUFBRTtBQUNqQmIsVUFBTXdGLElBQU4sQ0FBV1MsU0FBWCxDQUFxQixLQUFLSSxXQUExQixFQUF1QywwQkFBdkM7QUFDQSxJQUZELE1BRU8sSUFBRyxLQUFLQSxXQUFMLElBQW9CLENBQUMsS0FBS0EsV0FBTCxDQUFpQkMsU0FBakIsQ0FBMkJDLFFBQTNCLENBQW9DLDBCQUFwQyxDQUF4QixFQUF5RjtBQUMvRnZHLFVBQU13RixJQUFOLENBQVdDLE1BQVgsQ0FBa0IsS0FBS1ksV0FBdkIsRUFBb0MsMEJBQXBDO0FBQ0E7QUFDRDs7QUFFRCxNQUFHLEtBQUt4RixFQUFMLEtBQVksS0FBS2dCLE1BQUwsQ0FBWXZCLEtBQVosQ0FBa0IwQixNQUFsQixHQUEwQixDQUF0QyxJQUEyQyxLQUFLd0UsV0FBbkQsRUFBZ0U7QUFBRTtBQUNqRSxRQUFLQSxXQUFMLENBQWlCbEUsU0FBakIsU0FBZ0MsT0FBTyxLQUFLVCxNQUFMLENBQVlyQixVQUFuQixJQUFpQyxRQUFqQyxHQUEwQyxLQUFLcUIsTUFBTCxDQUFZckIsVUFBdEQsUUFBb0VSLE1BQU1DLElBQU4sQ0FBV0wsSUFBWCxDQUFnQkcsSUFBcEg7QUFDQTtBQUNELEVBMUtZO0FBMktiZ0IsY0EzS2EsMkJBMktHO0FBQ2YsTUFBSU8sT0FBT0QsU0FBU0MsSUFBcEI7QUFDQSxNQUFHQSxLQUFLZ0YsU0FBTCxDQUFlQyxRQUFmLENBQXdCLHFCQUF4QixDQUFILEVBQW1EO0FBQ2xEdkcsU0FBTXdGLElBQU4sQ0FBV1MsU0FBWCxDQUFxQjNFLElBQXJCLEVBQTJCLHFCQUEzQjtBQUNBLEdBRkQsTUFFTztBQUNOdEIsU0FBTXdGLElBQU4sQ0FBV0MsTUFBWCxDQUFrQm5FLElBQWxCLEVBQXdCLHFCQUF4QjtBQUNBO0FBQ0QsRUFsTFk7QUFtTGIwRSxPQW5MYSxrQkFtTE5MLEVBbkxNLEVBbUxGO0FBQ1YsTUFBR2MsR0FBR2QsRUFBSCxDQUFILEVBQVc7QUFDVixVQUFPYyxHQUFHZCxFQUFILEVBQU9ELE9BQVAsRUFBUDtBQUNBLEdBRkQsTUFFTztBQUNOLFVBQU9yRSxTQUFTOEIsYUFBVCxDQUF1QndDLEVBQXZCLENBQVA7QUFDQTtBQUNELEVBekxZO0FBMExiZSxXQTFMYSxzQkEwTEY3RCxPQTFMRSxFQTBMTztBQUFBOztBQUNuQixNQUFHLEtBQUtoQixNQUFMLENBQVl2QixLQUFaLENBQWtCLEtBQUtPLEVBQXZCLENBQUgsRUFBK0I7QUFDOUIsT0FBSThFLEtBQUssS0FBS0ssTUFBTCxDQUFZLEtBQUtuRSxNQUFMLENBQVl2QixLQUFaLENBQWtCLEtBQUtPLEVBQXZCLEVBQTJCOEUsRUFBdkMsQ0FBVDtBQUNBLE9BQUcsS0FBSzlFLEVBQUwsS0FBWSxDQUFaLElBQWlCLENBQUNnQyxPQUFyQixFQUE4QjtBQUM3QixTQUFLTCxTQUFMLENBQWUsZUFBZixFQUFnQyxFQUFoQztBQUNBNEMsZUFBVyxZQUFNO0FBQUU7QUFDbEIsWUFBS2hELFNBQUwsQ0FBZXVELEVBQWY7QUFDQSxLQUZELEVBRUcsR0FGSDtBQUdBLElBTEQsTUFLTztBQUNOLFNBQUtwRCxjQUFMLENBQW9Cb0QsRUFBcEIsRUFBd0I5QyxPQUF4QjtBQUNBO0FBQ0QsR0FWRCxNQVVPO0FBQ04sUUFBS3BCLEtBQUw7QUFDQTtBQUNELEVBeE1ZO0FBeU1ieUUsa0JBek1hLCtCQXlNTztBQUFBOztBQUNuQixPQUFLRyxXQUFMLEdBQW1CLEtBQUsxRixLQUFMLENBQVdnRyxnQkFBWCxDQUE0Qix5QkFBNUIsRUFBdUQsQ0FBdkQsQ0FBbkI7QUFDQSxPQUFLSCxXQUFMLEdBQW1CLEtBQUs3RixLQUFMLENBQVdnRyxnQkFBWCxDQUE0Qix5QkFBNUIsRUFBdUQsQ0FBdkQsQ0FBbkI7QUFDQSxNQUFJaEIsV0FBSjtBQUNBLE1BQUcsS0FBS2EsV0FBUixFQUFxQjtBQUNwQnhHLFNBQU1vQixLQUFOLENBQVksS0FBS29GLFdBQWpCLEVBQThCLE9BQTlCLEVBQXVDLFlBQU07QUFDNUMsV0FBS0ksS0FBTCxDQUFXakIsRUFBWCxFQUFlLE1BQWY7QUFDQSxJQUZEO0FBR0E7QUFDRCxNQUFHLEtBQUtVLFdBQVIsRUFBcUI7QUFDcEJyRyxTQUFNb0IsS0FBTixDQUFZLEtBQUtpRixXQUFqQixFQUE4QixPQUE5QixFQUF1QyxZQUFNO0FBQzVDckcsVUFBTXdGLElBQU4sQ0FBV1MsU0FBWCxDQUFxQixPQUFLUCxPQUFMLEVBQXJCLEVBQXFDLHFCQUFyQztBQUNBLFdBQUt4QyxLQUFMLENBQVcyRCxVQUFYLENBQXNCQyxXQUF0QixDQUFrQyxPQUFLNUQsS0FBdkM7QUFDQSxXQUFLckMsRUFBTCxJQUFXLENBQVg7QUFDQSxXQUFLK0YsS0FBTCxDQUFXakIsRUFBWCxFQUFlLFVBQWY7QUFDQSxJQUxEO0FBTUE7QUFDRDNGLFFBQU1vQixLQUFOLENBQVksS0FBS1QsS0FBTCxDQUFXd0MsYUFBWCxDQUF5QiwwQkFBekIsQ0FBWixFQUFrRSxPQUFsRSxFQUEyRSxZQUFNO0FBQUUsVUFBSzFCLEtBQUw7QUFBZSxHQUFsRztBQUNBLEVBM05ZO0FBNE5iMkUsYUE1TmEsd0JBNE5BL0QsTUE1TkEsRUE0TlE7QUFBQTs7QUFDcEIsTUFBSTBFLFlBQVksS0FBS3BFLEtBQUwsQ0FBV3ZCLEtBQTNCO0FBQ0FpQixTQUFPMkUsS0FBUDtBQUNBLE1BQUdELFNBQUgsRUFBYztBQUNiLE9BQUdBLGNBQWMsT0FBakIsRUFBMEI7QUFDekJBLGdCQUFZLFNBQVo7QUFDQTtBQUNELE9BQUcsS0FBS0UsU0FBUixFQUFtQjtBQUNsQmpILFVBQU1pQixXQUFOLENBQWtCLEtBQUtnRyxTQUF2QjtBQUNBO0FBQ0QsUUFBS0EsU0FBTCxHQUFpQmpILE1BQU1vQixLQUFOLENBQVlpQixNQUFaLEVBQW9CMEUsU0FBcEIsRUFBK0IsVUFBQ3hGLENBQUQsRUFBTztBQUN0RCxRQUFHd0YsYUFBYXhGLEVBQUUyRixJQUFsQixFQUF3QjtBQUN2QixTQUFHM0YsRUFBRTJGLElBQUYsS0FBVyxTQUFYLElBQXdCM0YsRUFBRUMsT0FBRixLQUFjLEVBQXpDLEVBQTZDO0FBQzdDYSxZQUFPMkUsS0FBUDtBQUNBLFlBQUtKLEtBQUwsQ0FBV3ZFLE1BQVg7QUFDQTtBQUNELElBTmdCLENBQWpCO0FBT0EsR0FkRCxNQWNPO0FBQ047QUFDQTtBQUNELEVBaFBZO0FBaVBidUUsTUFqUGEsaUJBaVBQdkUsTUFqUE8sRUFpUEM4RSxNQWpQRCxFQWlQUztBQUFBOztBQUNyQkEsV0FBU0EsVUFBVSxNQUFuQjtBQUNBLE1BQUksS0FBS3hFLEtBQUwsQ0FBVzlDLElBQVgsSUFBbUJzSCxXQUFXLE1BQTlCLElBQXdDLEtBQUt4RSxLQUFMLENBQVd5RSxRQUFYLElBQXVCRCxXQUFXLFVBQTlFLEVBQTBGO0FBQ3pGLE9BQUlFLFVBQVUsS0FBSzFFLEtBQUwsQ0FBV3dFLE1BQVgsR0FBZDtBQUNBLE9BQUlFLE9BQUosRUFBWTtBQUNYQSxZQUFRQyxPQUFSLEdBQWtCQyxJQUFsQixDQUF1QixZQUFNO0FBQzVCLFlBQUtDLFNBQUwsQ0FBZW5GLE1BQWYsRUFBdUI4RSxNQUF2QjtBQUNBLEtBRkQ7QUFHQTtBQUNELEdBUEQsTUFPTztBQUNOLFFBQUtLLFNBQUwsQ0FBZW5GLE1BQWYsRUFBdUI4RSxNQUF2QjtBQUNBO0FBQ0QsRUE3UFk7QUE4UGJLLFVBOVBhLHFCQThQSG5GLE1BOVBHLEVBOFBLOEUsTUE5UEwsRUE4UGE7QUFDekIsTUFBSXhCLEtBQUssS0FBS0ssTUFBTCxDQUFZLEtBQUtyRCxLQUFMLENBQVdnRCxFQUF2QixDQUFUO0FBQ0FBLEtBQUdWLEtBQUgsQ0FBU0MsYUFBVCxHQUF5QixFQUF6QjtBQUNBUyxLQUFHVixLQUFILENBQVNFLFVBQVQsR0FBc0IsRUFBdEI7QUFDQVEsS0FBRzhCLElBQUg7QUFDQSxPQUFLNUcsRUFBTDtBQUNBLE1BQUdzRyxXQUFXLFVBQWQsRUFBMEI7QUFDekIsUUFBS1QsVUFBTDtBQUNBLFFBQUtsRSxTQUFMLENBQWUsUUFBZixFQUF5QixDQUFDLEtBQUszQixFQUFMLEdBQVEsQ0FBVCxDQUF6QjtBQUNBO0FBQ0QsTUFBR3NHLFdBQVcsVUFBZCxFQUEwQjtBQUN6QixRQUFLVCxVQUFMLENBQWdCLFVBQWhCO0FBQ0EsUUFBS2xFLFNBQUwsQ0FBZSxZQUFmLEVBQTZCLENBQUMsS0FBSzNCLEVBQUwsR0FBUSxDQUFULENBQTdCO0FBQ0E7QUFDRCxFQTVRWTtBQTZRYlksTUE3UWEsbUJBNlFMO0FBQ1AsTUFBSSxLQUFLWixFQUFMLEtBQVksQ0FBQyxDQUFqQixFQUFvQjs7QUFFcEIsT0FBSzJCLFNBQUwsQ0FBZSxRQUFmLEVBQXlCLENBQUMsS0FBSzNCLEVBQUwsR0FBUSxDQUFULENBQXpCO0FBQ0EsT0FBSzZHLElBQUw7QUFDQSxPQUFLM0csYUFBTDtBQUNBLE1BQUcsS0FBS0YsRUFBTCxLQUFZLEtBQUtnQixNQUFMLENBQVl2QixLQUFaLENBQWtCMEIsTUFBakMsRUFBeUM7QUFDeEMsUUFBS1EsU0FBTCxDQUFlLE9BQWYsRUFBd0IsQ0FBQyxLQUFLM0IsRUFBTCxHQUFRLENBQVQsQ0FBeEI7QUFDQTtBQUNELEVBdFJZO0FBdVJiYyxTQXZSYSxvQkF1UkpJLENBdlJJLEVBdVJENEYsU0F2UkMsRUF1UlU7QUFDdEIsT0FBSzlHLEVBQUwsR0FBVWtCLElBQUUsQ0FBWjtBQUNBLE9BQUtoQixhQUFMO0FBQ0EsTUFBRyxLQUFLbUMsS0FBUixFQUFlO0FBQ2QsT0FBRyxLQUFLQSxLQUFMLENBQVcyRCxVQUFkLEVBQ0MsS0FBSzNELEtBQUwsQ0FBVzJELFVBQVgsQ0FBc0JDLFdBQXRCLENBQWtDLEtBQUs1RCxLQUF2QztBQUNEbEQsU0FBTXdGLElBQU4sQ0FBV1MsU0FBWCxDQUFxQixLQUFLUCxPQUFMLEVBQXJCLEVBQXFDLHFCQUFyQztBQUNBO0FBQ0QsT0FBS2tDLElBQUw7QUFDQSxNQUFHRCxTQUFILEVBQWM7QUFDYixPQUFJRSxNQUFNLEtBQUtsSCxLQUFMLENBQVd3QyxhQUFYLENBQXlCLEtBQXpCLENBQVY7QUFDQSxPQUFJMEUsR0FBSixFQUNDQSxJQUFJaEIsVUFBSixDQUFlQyxXQUFmLENBQTJCZSxHQUEzQjtBQUNELFFBQUtuQixVQUFMO0FBQ0EsR0FMRCxNQUtPO0FBQ04sUUFBS0EsVUFBTCxDQUFnQixTQUFoQjtBQUNBLFFBQUszRixhQUFMO0FBQ0E7QUFDRCxFQXpTWTtBQTBTYitHLE1BMVNhLG1CQTBTTDtBQUNQLE9BQUtuRyxRQUFMLENBQWMsQ0FBZCxFQUFpQixJQUFqQjtBQUNBLEVBNVNZO0FBNlNib0csSUE3U2EsaUJBNlNQO0FBQ0wsT0FBS3RHLEtBQUw7QUFDQSxFQS9TWTtBQWdUYkMsZUFoVGEsNEJBZ1RJO0FBQ2hCLFNBQU8sS0FBS2IsRUFBTCxHQUFRLENBQWY7QUFDQSxFQWxUWTtBQW1UYm1ILE9BblRhLGtCQW1UTkMsVUFuVE0sRUFtVE07QUFDbEIsTUFBRyxLQUFLL0UsS0FBUixFQUFjO0FBQ2IrRSxnQkFBYUEsY0FBYyxDQUEzQjtBQUNBLFFBQUt0RyxRQUFMLENBQWNzRyxVQUFkO0FBQ0E7QUFDRCxFQXhUWTtBQXlUYkMsU0F6VGEsc0JBeVRGO0FBQ1YsU0FBTyxLQUFLckcsTUFBTCxDQUFZdkIsS0FBbkI7QUFDQSxFQTNUWTtBQTRUYjZILFNBNVRhLG9CQTRUSkMsS0E1VEksRUE0VEc7QUFDZixPQUFLQyxNQUFMLENBQVksT0FBWixFQUFxQkQsS0FBckI7QUFDQTtBQTlUWSxDQUFkLEVBK1RHcEksTUFBTXNJLEVBQU4sQ0FBU0MsSUEvVFosRUErVGtCdkksTUFBTXdJLFdBL1R4QixFOzs7Ozs7Ozs7Ozs7QUNMTyxJQUFJQyxrQkFBS3pJLE1BQU1DLElBQU4sQ0FBV3lJLE9BQVgsQ0FBbUIsT0FBbkIsSUFBOEI7QUFDN0M5SSxPQUFLO0FBQ0pDLFFBQU0sVUFERjtBQUVKQyxRQUFNLFdBRkY7QUFHSkMsUUFBTTtBQUhGO0FBRHdDLENBQXZDLEM7Ozs7Ozs7Ozs7OztBQ0FQO0FBQ08sSUFBSTRJLGtCQUFLM0ksTUFBTUMsSUFBTixDQUFXeUksT0FBWCxDQUFtQixPQUFuQixJQUE4QjtBQUM3QzlJLE9BQUs7QUFDSkMsUUFBTSxVQURGO0FBRUpDLFFBQU0sV0FGRjtBQUdKQyxRQUFNO0FBSEY7QUFEd0MsQ0FBdkMsQzs7Ozs7Ozs7Ozs7O0FDREEsSUFBSTZJLGtCQUFLNUksTUFBTUMsSUFBTixDQUFXeUksT0FBWCxDQUFtQixPQUFuQixJQUE0QjtBQUMzQzlJLE9BQUs7QUFDSkMsUUFBTSxNQURGO0FBRUpDLFFBQU0sVUFGRjtBQUdKQyxRQUFNO0FBSEY7QUFEc0MsQ0FBckMsQzs7Ozs7Ozs7Ozs7O0FDQVA7QUFDTyxJQUFJOEksa0JBQUs3SSxNQUFNQyxJQUFOLENBQVd5SSxPQUFYLENBQW1CLE9BQW5CLElBQThCO0FBQzdDOUksT0FBSztBQUNKQyxRQUFNLFdBREY7QUFFSkMsUUFBTSxVQUZGO0FBR0pDLFFBQU07QUFIRjtBQUR3QyxDQUF2QyxDOzs7Ozs7Ozs7Ozs7QUNEQSxJQUFJK0ksa0JBQUs5SSxNQUFNQyxJQUFOLENBQVd5SSxPQUFYLENBQW1CLE9BQW5CLElBQTRCO0FBQzNDOUksT0FBSztBQUNKQyxRQUFNLFVBREY7QUFFSkMsUUFBTSxXQUZGO0FBR0pDLFFBQU07QUFIRjtBQURzQyxDQUFyQyxDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUNPLElBQUlnSixrQkFBSy9JLE1BQU1DLElBQU4sQ0FBV3lJLE9BQVgsQ0FBbUIsT0FBbkIsSUFBOEI7QUFDN0M5SSxPQUFLO0FBQ0pDLFFBQU0sVUFERjtBQUVKQyxRQUFNLFlBRkY7QUFHSkMsUUFBTTtBQUhGO0FBRHdDLENBQXZDLEM7Ozs7Ozs7Ozs7OztBQ0RBLElBQUlpSixrQkFBS2hKLE1BQU1DLElBQU4sQ0FBV3lJLE9BQVgsQ0FBbUIsT0FBbkIsSUFBNEI7QUFDM0M5SSxPQUFLO0FBQ0pDLFFBQU0sR0FERjtBQUVKQyxRQUFNLEdBRkY7QUFHSkMsUUFBTTtBQUhGO0FBRHNDLENBQXJDLEM7Ozs7Ozs7Ozs7OztBQ0FBLElBQUlrSixrQkFBS2pKLE1BQU1DLElBQU4sQ0FBV3lJLE9BQVgsQ0FBbUIsT0FBbkIsSUFBOEI7QUFDN0M5SSxPQUFLO0FBQ0pDLFFBQU0sU0FERjtBQUVKQyxRQUFNLFVBRkY7QUFHSkMsUUFBTTtBQUhGO0FBRHdDLENBQXZDLEM7Ozs7Ozs7Ozs7OztBQ0FBLElBQUltSixrQkFBS2xKLE1BQU1DLElBQU4sQ0FBV3lJLE9BQVgsQ0FBbUIsT0FBbkIsSUFBNEI7QUFDM0M5SSxPQUFLO0FBQ0pDLFFBQU0sV0FERjtBQUVKQyxRQUFNLFlBRkY7QUFHSkMsUUFBTTtBQUhGO0FBRHNDLENBQXJDLEM7Ozs7Ozs7Ozs7OztBQ0FQO0FBQ08sSUFBSW9KLGtCQUFLbkosTUFBTUMsSUFBTixDQUFXeUksT0FBWCxDQUFtQixPQUFuQixJQUE4QjtBQUM3QzlJLE9BQUs7QUFDSkMsUUFBTSxLQURGO0FBRUpDLFFBQU0sSUFGRjtBQUdKQyxRQUFNO0FBSEY7QUFEd0MsQ0FBdkMsQyIsImZpbGUiOiJoaW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvY29kZWJhc2UvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDcxMzJlZTBhZDI3YWRmYzYwYjUiLCJpbXBvcnQgXCIuL2kxOG4vZW5cIjtcbmltcG9ydCBcIi4vaTE4bi9mclwiO1xuaW1wb3J0IFwiLi9pMThuL2JlXCI7XG5pbXBvcnQgXCIuL2kxOG4vZGVcIjtcbmltcG9ydCBcIi4vaTE4bi9lc1wiO1xuaW1wb3J0IFwiLi9pMThuL2l0XCI7XG5pbXBvcnQgXCIuL2kxOG4vamFcIjtcbmltcG9ydCBcIi4vaTE4bi9wdFwiO1xuaW1wb3J0IFwiLi9pMThuL3J1XCI7XG5pbXBvcnQgXCIuL2kxOG4vemhcIjtcblxuZXhwb3J0IGxldCBsb2NhbGUgPSB7XG5cdGhpbnQ6IHtcblx0XHRuZXh0OiBcIk5leHRcIixcblx0XHRwcmV2OiBcIlByZXZpb3VzXCIsXG5cdFx0bGFzdDogXCJFbmQgVG91clwiXG5cdH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9sb2NhbGVzLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvaGludC5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBcIi4vaGludC5sZXNzXCI7XG5pbXBvcnQgeyBsb2NhbGUgfSBmcm9tIFwiLi9sb2NhbGVzXCI7XG5cbndlYml4LmkxOG4uaGludCA9IHdlYml4LmV4dGVuZCh3ZWJpeC5pMThuLCBsb2NhbGUpLmhpbnQ7XG5cbndlYml4LnByb3RvVUkoe1xuXHRuYW1lOiBcImhpbnRcIixcblx0ZGVmYXVsdHM6IHtcblx0XHRzdGVwczogW10sXG5cdFx0Ym9yZGVybGVzczogdHJ1ZSxcblx0XHRuZXh0QnV0dG9uOiB0cnVlLFxuXHRcdHByZXZCdXR0b246IHRydWVcblx0fSxcblx0JGluaXQoKSB7XG5cdFx0dGhpcy4kdmlldy5jbGFzc05hbWUgKz0gXCIgd2ViaXhfaGludF92aWV3XCI7XG5cdFx0dGhpcy5faSA9IC0xO1xuXHRcdHRoaXMuYXR0YWNoRXZlbnQoXCJvbkRlc3RydWN0XCIsICgpID0+IHtcblx0XHRcdHRoaXMuX3NldEJvZHlDbGFzcygpO1xuXHRcdFx0aWYodGhpcy5fZXZlbnRPYmpFc2MpIHtcblx0XHRcdFx0d2ViaXguZXZlbnRSZW1vdmUodGhpcy5fZXZlbnRPYmpFc2MpO1xuXHRcdFx0fVxuXHRcdFx0aWYodGhpcy5fZXZlbnRSZXNpemUpIHtcblx0XHRcdFx0d2ViaXguZGV0YWNoRXZlbnQodGhpcy5fZXZlbnRSZXNpemUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuX2V2ZW50T2JqRXNjID0gd2ViaXguZXZlbnQoZG9jdW1lbnQuYm9keSxcImtleWRvd25cIiwgKGUpID0+IHtcblx0XHRcdC8vIGVzY2FwZVxuXHRcdFx0aWYgKGUua2V5Q29kZSA9PSAyNyl7XG5cdFx0XHRcdHRoaXMuX3NraXAoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMuX2V2ZW50UmVzaXplID0gd2ViaXguYXR0YWNoRXZlbnQoXCJvblJlc2l6ZVwiLCAoKSA9PiB7XG5cdFx0XHRpZih0aGlzLmdldEN1cnJlbnRTdGVwKCkpIHtcblx0XHRcdFx0dGhpcy5fcmVmcmVzaCh0aGlzLmdldEN1cnJlbnRTdGVwKCksIGZhbHNlLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblx0c3RlcHNfc2V0dGVyKGNvbmZpZykge1xuXHRcdGxldCBuZXdDb25maWcgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNvbmZpZy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uZmlnW2ldLnBhZGRpbmcgPSBjb25maWdbaV0ucGFkZGluZyB8fCAwO1xuXHRcdFx0Y29uZmlnW2ldLnRleHQgPSBjb25maWdbaV0udGV4dCB8fCBcIlwiO1xuXHRcdFx0bmV3Q29uZmlnLnB1c2goY29uZmlnW2ldKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ld0NvbmZpZztcblx0fSxcblx0X2RyYXdPdmVyKHN0ZXBFbCkge1xuXHRcdHRoaXMuJHZpZXcuaW5uZXJIVE1MICs9IGA8c3ZnIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGNsYXNzPVwid2ViaXhfaGludF9vdmVybGF5XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIj5cblx0XHRcdDxkZWZzPlxuXHRcdFx0XHQ8bWFzayBpZD1cImhvbGVcIj5cblx0XHRcdFx0XHQ8cmVjdCBjbGFzcz1cIndlYml4X2hpbnRfb3ZlcmxheV9ob2xlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbGw9XCJ3aGl0ZVwiLz5cblx0XHRcdFx0XHQ8cmVjdCBjbGFzcz1cIndlYml4X2hpbnRfb3ZlcmxheV9ob2xlIHdlYml4X2hpbnRfb3ZlcmxheV9ob2xlX2VsXCIgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMFwiIGhlaWdodD1cIjBcIiBmaWxsPVwid2hpdGVcIi8+XG5cdFx0XHRcdDwvbWFzaz5cblx0XHRcdDwvZGVmcz5cblx0XHRcdDxyZWN0IGNsYXNzPVwid2ViaXhfaGludF9vdmVybGF5X2hvbGVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgbWFzaz1cInVybCgjaG9sZSlcIiAvPlxuXHRcdDwvc3ZnPmA7XG5cdFx0dGhpcy5fc2V0UHJvcGVydGllcyhzdGVwRWwpO1xuXHRcdHRoaXMuY2FsbEV2ZW50KFwib25BZnRlclN0YXJ0XCIsIFtdKTtcblx0fSxcblx0X2RyYXdIaW50KCkge1xuXHRcdGxldCBzZXR0aW5ncyA9IHRoaXMuY29uZmlnO1xuXHRcdHRoaXMuJHZpZXcuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwid2ViaXhfaGludFwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9J3dlYml4X2hpbnRfdGl0bGUnPiR7dGhpcy5fc3RlcC50aXRsZT90aGlzLl9zdGVwLnRpdGxlOlwiXCJ9PC9zcGFuPlxuXHRcdFx0PHAgY2xhc3M9XCJ3ZWJpeF9oaW50X2xhYmVsXCI+JHt0aGlzLl9zdGVwLnRleHR9PC9wPlxuXHRcdFx0PGRpdiBjbGFzcz1cIndlYml4X2hpbnRfcHJvZ3Jlc3NcIj5cblx0XHRcdFx0JHt0aGlzLl9pKzF9LyR7dGhpcy5jb25maWcuc3RlcHMubGVuZ3RofVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwid2ViaXhfaGludF9idXR0b25zXCI+XG5cdFx0XHRcdCR7c2V0dGluZ3MucHJldkJ1dHRvbiE9PSBmYWxzZT9gPGJ1dHRvbiBjbGFzcz1cIndlYml4X2hpbnRfYnV0dG9uIHdlYml4X2hpbnRfYnV0dG9uX3ByZXYgd2ViaXhfaGludF9idXR0b25faGlkZGVuXCI+JHt0eXBlb2Ygc2V0dGluZ3MucHJldkJ1dHRvbiA9PSBcInN0cmluZ1wiP3NldHRpbmdzLnByZXZCdXR0b246YCR7d2ViaXguaTE4bi5oaW50LnByZXZ9YH08L2J1dHRvbj5gOlwiXCJ9XG5cdFx0XHRcdCR7c2V0dGluZ3MubmV4dEJ1dHRvbiE9PSBmYWxzZT9gPGJ1dHRvbiBjbGFzcz1cIndlYml4X2hpbnRfYnV0dG9uIHdlYml4X2hpbnRfYnV0dG9uX25leHRcIj4ke3R5cGVvZiBzZXR0aW5ncy5uZXh0QnV0dG9uID09IFwic3RyaW5nXCI/c2V0dGluZ3MubmV4dEJ1dHRvbjpgJHt3ZWJpeC5pMThuLmhpbnQubmV4dH1gfTwvYnV0dG9uPmA6XCJcIn1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cIndlYml4X2hpbnRfYnV0dG9uX2Nsb3NlXCIgdGl0bGU9XCJDbG9zZVwiPiYjMTAwMDU7PC9idXR0b24+XG5cdFx0PC9kaXY+YDtcblx0fSxcblx0X3NldFByb3BlcnRpZXMoc3RlcEVsLCByZWZyZXNoKSB7XG5cdFx0aWYoIXN0ZXBFbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKCF3ZWJpeC5lbnYubW9iaWxlKSB7XG5cdFx0XHRzdGVwRWwuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xuXHRcdH1cblx0XHR0aGlzLl9zdGVwID0gdGhpcy5jb25maWcuc3RlcHNbdGhpcy5faV07XG5cdFx0dGhpcy5fcmVEcmF3KHN0ZXBFbCwgcmVmcmVzaCk7XG5cdFx0dGhpcy5faGludCA9IHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcIi53ZWJpeF9oaW50XCIpO1xuXG5cdFx0bGV0IHBhZGRpbmcgPSAzMDtcblx0XHRsZXQgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0XHRsZXQgYm94ID0gc3RlcEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGxldCBlbExlZnQgPSBib3gubGVmdCArIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHRsZXQgaGlnaGxpZ2h0V2lkdGggPSBib3gud2lkdGg7XG5cdFx0bGV0IGhpZ2hsaWdodEhlaWdodCA9IGJveC5oZWlnaHQ7XG5cdFx0bGV0IGhpbnRMZWZ0ID0gZWxMZWZ0IC0gdGhpcy5fc3RlcC5wYWRkaW5nO1xuXHRcdGxldCBoaW50V2lkdGggPSB0aGlzLl9oaW50Lm9mZnNldFdpZHRoO1xuXHRcdGxldCBoaW50SGVpZ2h0ID0gdGhpcy5faGludC5vZmZzZXRIZWlnaHQ7XG5cdFx0bGV0IGVsVG9wID0gd2ViaXguZW52Lm1vYmlsZSA/IGJveC50b3AgKyB0aGlzLl9zdGVwLnBhZGRpbmcgOiBib3gudG9wICsgdGhpcy5fc3RlcC5wYWRkaW5nICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xuXHRcdGxldCBoaW50VG9wID0gZWxUb3AgKyBoaWdobGlnaHRIZWlnaHQgKyB0aGlzLl9zdGVwLnBhZGRpbmcgKyBwYWRkaW5nO1xuXHRcdGxldCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICYmIGRvY0VsZW0uY2xpZW50V2lkdGggPyBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCwgZG9jRWxlbS5jbGllbnRXaWR0aCkgOiB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2NFbGVtLmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5jbGllbnRXaWR0aDtcblx0XHRsZXQgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICYmIGRvY0VsZW0uY2xpZW50SGVpZ2h0ID8gTWF0aC5taW4od2luZG93LmlubmVySGVpZ2h0LCBkb2NFbGVtLmNsaWVudEhlaWdodCkgOiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jRWxlbS5jbGllbnRIZWlnaHQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmNsaWVudEhlaWdodDtcblx0XHRcblx0XHRzdGVwRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYWxsXCI7XG5cdFx0c3RlcEVsLnN0eWxlLnVzZXJTZWxlY3QgPSBcImluaXRpYWxcIjtcblxuXHRcdC8vIHNldCBoaW50IHBvc2l0aW9uXG5cdFx0aWYoZWxMZWZ0IC0gd2luZG93V2lkdGggPiAwKSB7XG5cdFx0XHRlbExlZnQgPSBlbExlZnQgLSB3aW5kb3dXaWR0aCArIGhpbnRXaWR0aCArIGhpZ2hsaWdodFdpZHRoO1xuXHRcdH1cblxuXHRcdGlmKHdpbmRvd0hlaWdodCAvMiA8IGVsVG9wKSB7IC8vIGJvdHRvbVxuXHRcdFx0aGludFRvcCA9IGVsVG9wIC0gaGludEhlaWdodCAtIHBhZGRpbmcgLSB0aGlzLl9zdGVwLnBhZGRpbmcqMjtcblx0XHR9IGVsc2UgaWYod2luZG93V2lkdGggLzIgPCBlbExlZnQgJiYgZWxMZWZ0ICsgaGludFdpZHRoIDwgd2luZG93V2lkdGggJiYgaGlnaGxpZ2h0V2lkdGggKyBoaW50V2lkdGggPCB3aW5kb3dXaWR0aCkgeyAvLyByaWdodFxuXHRcdFx0aGludFRvcCA9IGhpZ2hsaWdodEhlaWdodCAvIDIgKyBlbFRvcCAtIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHRcdGhpbnRMZWZ0ID0gZWxMZWZ0IC0gaGludFdpZHRoIC0gdGhpcy5fc3RlcC5wYWRkaW5nIC0gcGFkZGluZztcblx0XHR9IGVsc2UgaWYod2luZG93V2lkdGggLzIgPiBlbExlZnQgJiYgZWxMZWZ0ICsgaGludFdpZHRoICsgaGlnaGxpZ2h0V2lkdGggPCB3aW5kb3dXaWR0aCkgeyAvLyBsZWZ0XG5cdFx0XHRoaW50TGVmdCA9IGhpZ2hsaWdodFdpZHRoICsgZWxMZWZ0ICsgcGFkZGluZztcblx0XHRcdGhpbnRUb3AgPSBlbFRvcCAtIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHR9IGVsc2UgaWYoaGludFRvcD53aW5kb3dIZWlnaHQgJiYgaGludEhlaWdodCtoaWdobGlnaHRIZWlnaHQ8d2luZG93SGVpZ2h0KXsvL3RvcCwgYnV0IGhpbnQgZG9lcyBub3QgZml0XG5cdFx0XHRoaW50VG9wID0gZWxUb3AgLSBoaW50SGVpZ2h0IC0gcGFkZGluZyAtIHRoaXMuX3N0ZXAucGFkZGluZyoyO1xuXHRcdH0gZWxzZSBpZihoaW50VG9wID53aW5kb3dIZWlnaHQgfHwgaGludFRvcCtoaW50SGVpZ2h0PndpbmRvd0hlaWdodCl7XG5cdFx0XHRoaW50TGVmdCA9IGVsTGVmdCAtIGhpbnRXaWR0aCAtIHRoaXMuX3N0ZXAucGFkZGluZyoyIC0gcGFkZGluZztcblx0XHRcdGhpbnRUb3AgPSBlbFRvcCAtIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHR9XG5cblx0XHRpZihoaW50TGVmdCArIGhpbnRXaWR0aCA+IHdpbmRvd1dpZHRoKSB7IC8vIGZvciBvdmVyZmxvd1xuXHRcdFx0aGludExlZnQgPSB3aW5kb3dXaWR0aCAtIGhpbnRXaWR0aDtcblx0XHR9IGVsc2UgaWYoaGludFRvcCA8IDAgfHwgaGludFRvcCA+IHdpbmRvd0hlaWdodCkge1xuXHRcdFx0aGludFRvcCA9IHBhZGRpbmc7XG5cdFx0fSBlbHNlIGlmKHdpbmRvd1dpZHRoIDwgaGlnaGxpZ2h0V2lkdGggfHwgaGludExlZnQgPCAwKSB7XG5cdFx0XHRoaW50TGVmdCA9IHBhZGRpbmc7XG5cdFx0fVxuXHRcdGlmKHdlYml4LmVudi5tb2JpbGUpIHtcblx0XHRcdHN0ZXBFbC5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XG5cdFx0fVxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5faGludC5zdHlsZS5jc3NUZXh0ID0gYHRvcDoke2hpbnRUb3B9cHg7IGxlZnQ6JHtoaW50TGVmdH1weDtgO1xuXHRcdFx0dGhpcy5fc2V0QXR0cmlidXRlcyh0aGlzLiR2aWV3LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ3ZWJpeF9oaW50X292ZXJsYXlfaG9sZV9lbFwiKVswXSwge1wieFwiOmVsTGVmdC10aGlzLl9zdGVwLnBhZGRpbmcqMiwgXCJ5XCI6ZWxUb3AtdGhpcy5fc3RlcC5wYWRkaW5nKjIsIFwid2lkdGhcIjpoaWdobGlnaHRXaWR0aCt0aGlzLl9zdGVwLnBhZGRpbmcgKjIsIFwiaGVpZ2h0XCI6aGlnaGxpZ2h0SGVpZ2h0K3RoaXMuX3N0ZXAucGFkZGluZyoyfSk7XG5cdFx0XHR3ZWJpeC5odG1sLmFkZENzcyh0aGlzLmdldE5vZGUoKSwgXCJ3ZWJpeF9oaW50X2FuaW1hdGVkXCIpO1xuXHRcdH0sIDUwMCk7XG5cdH0sXG5cdF9zZXRBdHRyaWJ1dGVzKGVsLCBhdHRycykge1xuXHRcdGZvcih2YXIga2V5IGluIGF0dHJzKSB7XG5cdFx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0XHR9XG5cdH0sXG5cdF9yZURyYXcoc3RlcEVsLCByZWZyZXNoKSB7XG5cdFx0bGV0IHRpdGxlID0gdGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwiLndlYml4X2hpbnRfdGl0bGVcIik7XG5cdFx0bGV0IGVsO1xuXG5cdFx0dGhpcy5fc3RlcC5ldmVudEVsP2VsID0gdGhpcy5fZ2V0RWwodGhpcy5fc3RlcC5ldmVudEVsKTplbCA9IHN0ZXBFbDtcblx0XHRpZih0aGlzLl9pID4gMCAmJiAhcmVmcmVzaCkge1xuXHRcdFx0d2ViaXguaHRtbC5yZW1vdmVDc3ModGhpcy5nZXROb2RlKCksIFwid2ViaXhfaGludF9hbmltYXRlZFwiKTtcblx0XHRcdHRpdGxlLmlubmVySFRNTCA9IHRoaXMuX3N0ZXAudGl0bGUgfHwgXCJcIjtcblx0XHRcdHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcIi53ZWJpeF9oaW50X2xhYmVsXCIpLmlubmVySFRNTCA9IHRoaXMuX3N0ZXAudGV4dCB8fCBcIlwiO1xuXHRcdFx0dGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwiLndlYml4X2hpbnRfcHJvZ3Jlc3NcIikuaW5uZXJIVE1MID0gYCR7dGhpcy5faSsxfS8ke3RoaXMuY29uZmlnLnN0ZXBzLmxlbmd0aH1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9kcmF3SGludCgpO1xuXHRcdFx0dGhpcy5fc2V0RXZlbnRzQnV0dG9ucyhlbCk7XG5cdFx0fVxuXHRcdGlmKCF0aGlzLl9zdGVwLnRpdGxlICYmIHRpdGxlKSB7XG5cdFx0XHR0aXRsZS5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcblx0XHR9XG5cdFx0dGhpcy5fc2V0RWxFdmVudHMoZWwpO1xuXG5cdFx0aWYodGhpcy5fcHJldkJ1dHRvbikge1xuXHRcdFx0aWYodGhpcy5faSA+IDApIHsgLy8gcHJldmlvdXMgYnV0dG9uIHNob3dcblx0XHRcdFx0d2ViaXguaHRtbC5yZW1vdmVDc3ModGhpcy5fcHJldkJ1dHRvbiwgXCJ3ZWJpeF9oaW50X2J1dHRvbl9oaWRkZW5cIik7XG5cdFx0XHR9IGVsc2UgaWYodGhpcy5fcHJldkJ1dHRvbiAmJiAhdGhpcy5fcHJldkJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJ3ZWJpeF9oaW50X2J1dHRvbl9oaWRkZW5cIikpIHtcblx0XHRcdFx0d2ViaXguaHRtbC5hZGRDc3ModGhpcy5fcHJldkJ1dHRvbiwgXCJ3ZWJpeF9oaW50X2J1dHRvbl9oaWRkZW5cIik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGlmKHRoaXMuX2kgPT09IHRoaXMuY29uZmlnLnN0ZXBzLmxlbmd0aCAtMSAmJiB0aGlzLl9uZXh0QnV0dG9uKSB7IC8vIG5leHQgYnV0dG9uIHRleHRcblx0XHRcdHRoaXMuX25leHRCdXR0b24uaW5uZXJIVE1MID0gYCR7dHlwZW9mIHRoaXMuY29uZmlnLm5leHRCdXR0b24gPT0gXCJzdHJpbmdcIj90aGlzLmNvbmZpZy5uZXh0QnV0dG9uOmAke3dlYml4LmkxOG4uaGludC5sYXN0fWB9YDtcblx0XHR9XG5cdH0sXG5cdF9zZXRCb2R5Q2xhc3MoKSB7XG5cdFx0bGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXHRcdGlmKGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwid2ViaXhfaGludF9vdmVyZmxvd1wiKSkge1xuXHRcdFx0d2ViaXguaHRtbC5yZW1vdmVDc3MoYm9keSwgXCJ3ZWJpeF9oaW50X292ZXJmbG93XCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3ZWJpeC5odG1sLmFkZENzcyhib2R5LCBcIndlYml4X2hpbnRfb3ZlcmZsb3dcIik7XG5cdFx0fVxuXHR9LFxuXHRfZ2V0RWwoZWwpIHtcblx0XHRpZigkJChlbCkpIHtcblx0XHRcdHJldHVybiAkJChlbCkuZ2V0Tm9kZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG5cdFx0fVxuXHR9LFxuXHRfZHJhd1N0ZXBzKHJlZnJlc2gpIHtcblx0XHRpZih0aGlzLmNvbmZpZy5zdGVwc1t0aGlzLl9pXSkge1xuXHRcdFx0bGV0IGVsID0gdGhpcy5fZ2V0RWwodGhpcy5jb25maWcuc3RlcHNbdGhpcy5faV0uZWwpO1xuXHRcdFx0aWYodGhpcy5faSA9PT0gMCAmJiAhcmVmcmVzaCkge1xuXHRcdFx0XHR0aGlzLmNhbGxFdmVudChcIm9uQmVmb3JlU3RhcnRcIiwgW10pO1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHsgLy8gZm9yIGZpcnN0IGluaXRcblx0XHRcdFx0XHR0aGlzLl9kcmF3T3ZlcihlbCk7XG5cdFx0XHRcdH0sIDEwMCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9zZXRQcm9wZXJ0aWVzKGVsLCByZWZyZXNoKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fc2tpcCgpO1xuXHRcdH1cblx0fSxcblx0X3NldEV2ZW50c0J1dHRvbnMoKSB7XG5cdFx0dGhpcy5fcHJldkJ1dHRvbiA9IHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvckFsbChcIi53ZWJpeF9oaW50X2J1dHRvbl9wcmV2XCIpWzBdO1xuXHRcdHRoaXMuX25leHRCdXR0b24gPSB0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud2ViaXhfaGludF9idXR0b25fbmV4dFwiKVswXTtcblx0XHRsZXQgZWw7XG5cdFx0aWYodGhpcy5fbmV4dEJ1dHRvbikge1xuXHRcdFx0d2ViaXguZXZlbnQodGhpcy5fbmV4dEJ1dHRvbiwgXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuX25leHQoZWwsIFwibmV4dFwiKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZih0aGlzLl9wcmV2QnV0dG9uKSB7XG5cdFx0XHR3ZWJpeC5ldmVudCh0aGlzLl9wcmV2QnV0dG9uLCBcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdFx0d2ViaXguaHRtbC5yZW1vdmVDc3ModGhpcy5nZXROb2RlKCksIFwid2ViaXhfaGludF9hbmltYXRlZFwiKTtcblx0XHRcdFx0dGhpcy5faGludC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX2hpbnQpO1xuXHRcdFx0XHR0aGlzLl9pIC09IDI7XG5cdFx0XHRcdHRoaXMuX25leHQoZWwsIFwicHJldmlvdXNcIik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0d2ViaXguZXZlbnQodGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwiLndlYml4X2hpbnRfYnV0dG9uX2Nsb3NlXCIpLCBcImNsaWNrXCIsICgpID0+IHsgdGhpcy5fc2tpcCgpOyB9KTtcblx0fSxcblx0X3NldEVsRXZlbnRzKHN0ZXBFbCkge1xuXHRcdGxldCBldmVudFN0ZXAgPSB0aGlzLl9zdGVwLmV2ZW50O1xuXHRcdHN0ZXBFbC5mb2N1cygpO1xuXHRcdGlmKGV2ZW50U3RlcCkge1xuXHRcdFx0aWYoZXZlbnRTdGVwID09PSBcImVudGVyXCIpIHtcblx0XHRcdFx0ZXZlbnRTdGVwID0gXCJrZXlkb3duXCI7XG5cdFx0XHR9XG5cdFx0XHRpZih0aGlzLl9ldmVudE9iaikge1xuXHRcdFx0XHR3ZWJpeC5ldmVudFJlbW92ZSh0aGlzLl9ldmVudE9iaik7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9ldmVudE9iaiA9IHdlYml4LmV2ZW50KHN0ZXBFbCwgZXZlbnRTdGVwLCAoZSkgPT4ge1xuXHRcdFx0XHRpZihldmVudFN0ZXAgPT0gZS50eXBlKSB7XG5cdFx0XHRcdFx0aWYoZS50eXBlID09PSBcImtleWRvd25cIiAmJiBlLmtleUNvZGUgIT09IDEzKSByZXR1cm47XG5cdFx0XHRcdFx0c3RlcEVsLmZvY3VzKCk7XG5cdFx0XHRcdFx0dGhpcy5fbmV4dChzdGVwRWwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fSxcblx0X25leHQoc3RlcEVsLCBhY3Rpb24pIHtcblx0XHRhY3Rpb24gPSBhY3Rpb24gfHwgXCJuZXh0XCI7XG5cdFx0aWYgKHRoaXMuX3N0ZXAubmV4dCAmJiBhY3Rpb24gPT09IFwibmV4dFwiIHx8IHRoaXMuX3N0ZXAucHJldmlvdXMgJiYgYWN0aW9uID09PSBcInByZXZpb3VzXCIpIHtcblx0XHRcdGxldCBwcm9taXNlID0gdGhpcy5fc3RlcFthY3Rpb25dKCk7XG5cdFx0XHRpZiAocHJvbWlzZSl7XG5cdFx0XHRcdHByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuX25leHRTdGVwKHN0ZXBFbCwgYWN0aW9uKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX25leHRTdGVwKHN0ZXBFbCwgYWN0aW9uKTtcblx0XHR9XG5cdH0sXG5cdF9uZXh0U3RlcChzdGVwRWwsIGFjdGlvbikge1xuXHRcdGxldCBlbCA9IHRoaXMuX2dldEVsKHRoaXMuX3N0ZXAuZWwpO1xuXHRcdGVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIlwiO1xuXHRcdGVsLnN0eWxlLnVzZXJTZWxlY3QgPSBcIlwiO1xuXHRcdGVsLmJsdXIoKTtcblx0XHR0aGlzLl9pKys7XG5cdFx0aWYoYWN0aW9uICE9PSBcInByZXZpb3VzXCIpIHtcblx0XHRcdHRoaXMuX2RyYXdTdGVwcygpO1xuXHRcdFx0dGhpcy5jYWxsRXZlbnQoXCJvbk5leHRcIiwgW3RoaXMuX2krMV0pO1xuXHRcdH1cblx0XHRpZihhY3Rpb24gPT09IFwicHJldmlvdXNcIikge1xuXHRcdFx0dGhpcy5fZHJhd1N0ZXBzKFwicHJldmlvdXNcIik7XG5cdFx0XHR0aGlzLmNhbGxFdmVudChcIm9uUHJldmlvdXNcIiwgW3RoaXMuX2krMV0pO1xuXHRcdH1cblx0fSxcblx0X3NraXAoKSB7XG5cdFx0aWYgKHRoaXMuX2kgPT09IC0xKSByZXR1cm47XG5cblx0XHR0aGlzLmNhbGxFdmVudChcIm9uU2tpcFwiLCBbdGhpcy5faSsxXSk7XG5cdFx0dGhpcy5oaWRlKCk7XG5cdFx0dGhpcy5fc2V0Qm9keUNsYXNzKCk7XG5cdFx0aWYodGhpcy5faSA9PT0gdGhpcy5jb25maWcuc3RlcHMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLmNhbGxFdmVudChcIm9uRW5kXCIsIFt0aGlzLl9pKzFdKTtcblx0XHR9XG5cdH0sXG5cdF9yZWZyZXNoKGksIGZpcnN0RHJhdykge1xuXHRcdHRoaXMuX2kgPSBpLTE7XG5cdFx0dGhpcy5fc2V0Qm9keUNsYXNzKCk7XG5cdFx0aWYodGhpcy5faGludCkge1xuXHRcdFx0aWYodGhpcy5faGludC5wYXJlbnROb2RlKVxuXHRcdFx0XHR0aGlzLl9oaW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5faGludCk7XG5cdFx0XHR3ZWJpeC5odG1sLnJlbW92ZUNzcyh0aGlzLmdldE5vZGUoKSwgXCJ3ZWJpeF9oaW50X2FuaW1hdGVkXCIpO1xuXHRcdH1cblx0XHR0aGlzLnNob3coKTtcblx0XHRpZihmaXJzdERyYXcpIHtcblx0XHRcdGxldCBzdmcgPSB0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIik7XG5cdFx0XHRpZiAoc3ZnKVxuXHRcdFx0XHRzdmcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdmcpO1xuXHRcdFx0dGhpcy5fZHJhd1N0ZXBzKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2RyYXdTdGVwcyhcInJlZnJlc2hcIik7XG5cdFx0XHR0aGlzLl9zZXRCb2R5Q2xhc3MoKTtcblx0XHR9XG5cdH0sXG5cdHN0YXJ0KCkge1xuXHRcdHRoaXMuX3JlZnJlc2goMSwgdHJ1ZSk7XG5cdH0sXG5cdGVuZCgpIHtcblx0XHR0aGlzLl9za2lwKCk7XG5cdH0sXG5cdGdldEN1cnJlbnRTdGVwKCkge1xuXHRcdHJldHVybiB0aGlzLl9pKzE7XG5cdH0sXG5cdHJlc3VtZShzdGVwTnVtYmVyKSB7XG5cdFx0aWYodGhpcy5faGludCl7XG5cdFx0XHRzdGVwTnVtYmVyID0gc3RlcE51bWJlciB8fCAxO1xuXHRcdFx0dGhpcy5fcmVmcmVzaChzdGVwTnVtYmVyKTtcblx0XHR9XG5cdH0sXG5cdGdldFN0ZXBzKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5zdGVwcztcblx0fSxcblx0c2V0U3RlcHModmFsdWUpIHtcblx0XHR0aGlzLmRlZmluZShcInN0ZXBzXCIsIHZhbHVlKTtcblx0fVxufSwgd2ViaXgudWkudmlldywgd2ViaXguRXZlbnRTeXN0ZW0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaGludC5qcyIsImV4cG9ydCBsZXQgYmUgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJiZS1CWVwiXSA9IHtcblx0aGludDp7XG5cdFx0bmV4dDogXCLQndCw0YHRgtGD0L/QvdGLXCIsXG5cdFx0cHJldjogXCLQn9Cw0L/Rj9GA0Y3QtNC90ZZcIixcblx0XHRsYXN0OiBcItCa0LDQvdC10YYg0KLRg9GA0LBcIlxuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9iZS5qcyIsIi8qR2VybWFuIChHZXJtYW55KSBsb2NhbGUqL1xuZXhwb3J0IGxldCBkZSA9IHdlYml4LmkxOG4ubG9jYWxlc1tcImRlLURFXCJdID0ge1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIk7DpGNoc3RlclwiLFxuXHRcdHByZXY6IFwiQmlzaGVyaWdlXCIsXG5cdFx0bGFzdDogXCJFbmRlIFRvdXJcIlxuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2RlLmpzIiwiZXhwb3J0IGxldCBlbiA9IHdlYml4LmkxOG4ubG9jYWxlc1tcImVuLVVTXCJdPXtcblx0aGludDp7XG5cdFx0bmV4dDogXCJOZXh0XCIsXG5cdFx0cHJldjogXCJQcmV2aW91c1wiLFxuXHRcdGxhc3Q6IFwiRW5kIFRvdXJcIlxuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9lbi5qcyIsIi8qU3BhbmlzaCAoU3BhaW4sIEludGVybmF0aW9uYWwgU29ydCkgbG9jYWxlKi9cbmV4cG9ydCBsZXQgZXMgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJlcy1FU1wiXSA9IHtcblx0aGludDp7XG5cdFx0bmV4dDogXCJTaWd1aWVudGVcIixcblx0XHRwcmV2OiBcIkFudGVyaW9yXCIsXG5cdFx0bGFzdDogXCJGaW4gZGUgVmlhamVcIlxuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2VzLmpzIiwiZXhwb3J0IGxldCBmciA9IHdlYml4LmkxOG4ubG9jYWxlc1tcImZyLUZSXCJdPXtcblx0aGludDp7XG5cdFx0bmV4dDogXCJQcm9jaGFpblwiLFxuXHRcdHByZXY6IFwiUHLDqWPDqWRlbnRcIixcblx0XHRsYXN0OiBcIkVuZCBUb3VyXCJcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vZnIuanMiLCIvKkl0YWxpYW4gKEl0YWx5KSBsb2NhbGUqL1xuZXhwb3J0IGxldCBpdCA9IHdlYml4LmkxOG4ubG9jYWxlc1tcIml0LUlUXCJdID0ge1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIlNlZ3VlbnRlXCIsXG5cdFx0cHJldjogXCJQcmVjZWRlbnRlXCIsXG5cdFx0bGFzdDogXCJFbmQgVG91clwiXG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vaXQuanMiLCJleHBvcnQgbGV0IGphID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiamEtSlBcIl09e1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIuasoVwiLFxuXHRcdHByZXY6IFwi5YmNXCIsXG5cdFx0bGFzdDogXCLntYLkuobjg4TjgqLjg7xcIlxuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9qYS5qcyIsImV4cG9ydCBsZXQgcHQgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJwdC1CUlwiXSA9IHtcblx0aGludDp7XG5cdFx0bmV4dDogXCJQcsOzeGltb1wiLFxuXHRcdHByZXY6IFwiQW50ZXJpb3JcIixcblx0XHRsYXN0OiBcIkVuZCBUb3VyXCJcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9wdC5qcyIsImV4cG9ydCBsZXQgcnUgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJydS1SVVwiXT17XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwi0KHQu9C10LTRg9GO0YnQuNC5XCIsXG5cdFx0cHJldjogXCLQn9GA0LXQtNGL0LTRg9GJ0LjQuVwiLFxuXHRcdGxhc3Q6IFwi0JrQvtC90LXRhiDQotGD0YDQsFwiXG5cdH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL3J1LmpzIiwiLypDaGluZXNlIChTaW1wbGlmaWVkLCBQUkMpIGxvY2FsZSovXG5leHBvcnQgbGV0IHpoID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiemgtQ05cIl0gPSB7XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwi5LiL5LiA5LiqXCIsXG5cdFx0cHJldjogXCLku6XliY1cIixcblx0XHRsYXN0OiBcIue7k+adn+W3oeinhlwiXG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vemguanMiXSwic291cmNlUm9vdCI6IiJ9