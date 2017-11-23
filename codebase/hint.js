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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzMxNTQyYTEzMmY3OTk5OTYyNTMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9sb2NhbGVzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5sZXNzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vYmUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL2RlLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9lbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL2ZyLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9pdC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vamEuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL3B0LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9ydS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vemguanMiXSwibmFtZXMiOlsibG9jYWxlIiwiaGludCIsIm5leHQiLCJwcmV2IiwibGFzdCIsIndlYml4IiwiaTE4biIsImV4dGVuZCIsInByb3RvVUkiLCJuYW1lIiwiZGVmYXVsdHMiLCJzdGVwcyIsImJvcmRlcmxlc3MiLCJuZXh0QnV0dG9uIiwicHJldkJ1dHRvbiIsIiRpbml0IiwiJHZpZXciLCJjbGFzc05hbWUiLCJfaSIsImF0dGFjaEV2ZW50IiwiX3NldEJvZHlDbGFzcyIsIl9ldmVudE9iaiIsImV2ZW50UmVtb3ZlIiwiX2V2ZW50T2JqRXNjIiwiX2V2ZW50UmVzaXplIiwiZGV0YWNoRXZlbnQiLCJldmVudCIsImRvY3VtZW50IiwiYm9keSIsImUiLCJrZXlDb2RlIiwiX3NraXAiLCJfc2V0UmVzaXplIiwic3RlcHNfc2V0dGVyIiwiY29uZmlnIiwibmV3Q29uZmlnIiwiaSIsImxlbmd0aCIsInBhZGRpbmciLCJ0ZXh0IiwicHVzaCIsIl9kcmF3T3ZlciIsInN0ZXBFbCIsImlubmVySFRNTCIsIl9zZXRQcm9wZXJ0aWVzIiwiY2FsbEV2ZW50IiwiX2RyYXdIaW50Iiwic2V0dGluZ3MiLCJfc3RlcCIsInRpdGxlIiwicmVmcmVzaCIsImVudiIsIm1vYmlsZSIsInNjcm9sbEludG9WaWV3IiwiX3JlRHJhdyIsIl9oaW50IiwicXVlcnlTZWxlY3RvciIsImRvY0VsZW0iLCJkb2N1bWVudEVsZW1lbnQiLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbExlZnQiLCJsZWZ0IiwiaGlnaGxpZ2h0V2lkdGgiLCJ3aWR0aCIsImhpZ2hsaWdodEhlaWdodCIsImhlaWdodCIsImhpbnRMZWZ0IiwiaGludFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJoaW50SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZWxUb3AiLCJ0b3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImhpbnRUb3AiLCJ3aW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsIk1hdGgiLCJtaW4iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwidXNlclNlbGVjdCIsIl90aW1lciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJjc3NUZXh0IiwiX3NldEF0dHJpYnV0ZXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaHRtbCIsImFkZENzcyIsImdldE5vZGUiLCJnZXRDdXJyZW50U3RlcCIsIl9yZWZyZXNoIiwiZWwiLCJhdHRycyIsImtleSIsInNldEF0dHJpYnV0ZSIsImV2ZW50RWwiLCJfZ2V0RWwiLCJyZW1vdmVDc3MiLCJfc2V0RXZlbnRzQnV0dG9ucyIsIm1hcmdpbiIsIl9zZXRFbEV2ZW50cyIsIl9wcmV2QnV0dG9uIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJfbmV4dEJ1dHRvbiIsInJlbW92ZSIsIiQkIiwiX2RyYXdTdGVwcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfbmV4dCIsImV2ZW50U3RlcCIsImZvY3VzIiwidHlwZSIsImFjdGlvbiIsInByZXZpb3VzIiwicHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX25leHRTdGVwIiwiYmx1ciIsImhpZGUiLCJmaXJzdERyYXciLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJzaG93Iiwic3ZnIiwic3RhcnQiLCJlbmQiLCJyZXN1bWUiLCJzdGVwTnVtYmVyIiwiZ2V0U3RlcHMiLCJzZXRTdGVwcyIsInZhbHVlIiwiZGVmaW5lIiwidWkiLCJ2aWV3IiwiRXZlbnRTeXN0ZW0iLCJiZSIsImxvY2FsZXMiLCJkZSIsImVuIiwiZXMiLCJmciIsIml0IiwiamEiLCJwdCIsInJ1IiwiemgiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVPLElBQUlBLDBCQUFTO0FBQ25CQyxPQUFNO0FBQ0xDLFFBQU0sTUFERDtBQUVMQyxRQUFNLFVBRkQ7QUFHTEMsUUFBTTtBQUhEO0FBRGEsQ0FBYixDOzs7Ozs7QUNYUCx5Qzs7Ozs7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cEosTUFBTUMsSUFBTixDQUFXNkksT0FBWCxDQUFtQixPQUFuQixJQUE0QjtBQUMzQ2xKLE9BQUs7QUFDSkMsUUFBTSxHQURGO0FBRUpDLFFBQU0sR0FGRjtBQUdKQyxRQUFNO0FBSEY7QUFEc0MsQ0FBckMsQzs7Ozs7Ozs7Ozs7O0FDQUEsSUFBSXNKLGtCQUFLckosTUFBTUMsSUFBTixDQUFXNkksT0FBWCxDQUFtQixPQUFuQixJQUE4QjtBQUM3Q2xKLE9BQUs7QUFDSkMsUUFBTSxTQURGO0FBRUpDLFFBQU0sVUFGRjtBQUdKQyxRQUFNO0FBSEY7QUFEd0MsQ0FBdkMsQzs7Ozs7Ozs7Ozs7O0FDQUEsSUFBSXVKLGtCQUFLdEosTUFBTUMsSUFBTixDQUFXNkksT0FBWCxDQUFtQixPQUFuQixJQUE0QjtBQUMzQ2xKLE9BQUs7QUFDSkMsUUFBTSxXQURGO0FBRUpDLFFBQU0sWUFGRjtBQUdKQyxRQUFNO0FBSEY7QUFEc0MsQ0FBckMsQzs7Ozs7Ozs7Ozs7O0FDQVA7QUFDTyxJQUFJd0osa0JBQUt2SixNQUFNQyxJQUFOLENBQVc2SSxPQUFYLENBQW1CLE9BQW5CLElBQThCO0FBQzdDbEosT0FBSztBQUNKQyxRQUFNLEtBREY7QUFFSkMsUUFBTSxJQUZGO0FBR0pDLFFBQU07QUFIRjtBQUR3QyxDQUF2QyxDIiwiZmlsZSI6ImhpbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jb2RlYmFzZS9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3MzE1NDJhMTMyZjc5OTk5NjI1MyIsImltcG9ydCBcIi4vaTE4bi9lblwiO1xuaW1wb3J0IFwiLi9pMThuL2ZyXCI7XG5pbXBvcnQgXCIuL2kxOG4vYmVcIjtcbmltcG9ydCBcIi4vaTE4bi9kZVwiO1xuaW1wb3J0IFwiLi9pMThuL2VzXCI7XG5pbXBvcnQgXCIuL2kxOG4vaXRcIjtcbmltcG9ydCBcIi4vaTE4bi9qYVwiO1xuaW1wb3J0IFwiLi9pMThuL3B0XCI7XG5pbXBvcnQgXCIuL2kxOG4vcnVcIjtcbmltcG9ydCBcIi4vaTE4bi96aFwiO1xuXG5leHBvcnQgbGV0IGxvY2FsZSA9IHtcblx0aGludDoge1xuXHRcdG5leHQ6IFwiTmV4dFwiLFxuXHRcdHByZXY6IFwiUHJldmlvdXNcIixcblx0XHRsYXN0OiBcIkVuZCBUb3VyXCJcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2xvY2FsZXMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy9oaW50Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFwiLi9oaW50Lmxlc3NcIjtcbmltcG9ydCB7IGxvY2FsZSB9IGZyb20gXCIuL2xvY2FsZXNcIjtcblxud2ViaXguaTE4bi5oaW50ID0gd2ViaXguZXh0ZW5kKHdlYml4LmkxOG4sIGxvY2FsZSkuaGludDtcblxud2ViaXgucHJvdG9VSSh7XG5cdG5hbWU6IFwiaGludFwiLFxuXHRkZWZhdWx0czoge1xuXHRcdHN0ZXBzOiBbXSxcblx0XHRib3JkZXJsZXNzOiB0cnVlLFxuXHRcdG5leHRCdXR0b246IHRydWUsXG5cdFx0cHJldkJ1dHRvbjogdHJ1ZVxuXHR9LFxuXHQkaW5pdCgpIHtcblx0XHR0aGlzLiR2aWV3LmNsYXNzTmFtZSArPSBcIiB3ZWJpeF9oaW50X3ZpZXdcIjtcblx0XHR0aGlzLl9pID0gLTE7XG5cdFx0dGhpcy5hdHRhY2hFdmVudChcIm9uRGVzdHJ1Y3RcIiwgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc2V0Qm9keUNsYXNzKFwicmVtb3ZlXCIpO1xuXHRcdFx0aWYodGhpcy5fZXZlbnRPYmopIHtcblx0XHRcdFx0d2ViaXguZXZlbnRSZW1vdmUodGhpcy5fZXZlbnRPYmopO1xuXHRcdFx0fVxuXHRcdFx0aWYodGhpcy5fZXZlbnRPYmpFc2MpIHtcblx0XHRcdFx0d2ViaXguZXZlbnRSZW1vdmUodGhpcy5fZXZlbnRPYmpFc2MpO1xuXHRcdFx0fVxuXHRcdFx0aWYodGhpcy5fZXZlbnRSZXNpemUpIHtcblx0XHRcdFx0d2ViaXguZGV0YWNoRXZlbnQodGhpcy5fZXZlbnRSZXNpemUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuX2V2ZW50T2JqRXNjID0gd2ViaXguZXZlbnQoZG9jdW1lbnQuYm9keSxcImtleWRvd25cIiwgKGUpID0+IHtcblx0XHRcdC8vIGVzY2FwZVxuXHRcdFx0aWYgKGUua2V5Q29kZSA9PSAyNyl7XG5cdFx0XHRcdHRoaXMuX3NraXAoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLl9zZXRSZXNpemUoKTtcblx0fSxcblx0c3RlcHNfc2V0dGVyKGNvbmZpZykge1xuXHRcdGxldCBuZXdDb25maWcgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNvbmZpZy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uZmlnW2ldLnBhZGRpbmcgPSBjb25maWdbaV0ucGFkZGluZyB8fCAwO1xuXHRcdFx0Y29uZmlnW2ldLnRleHQgPSBjb25maWdbaV0udGV4dCB8fCBcIlwiO1xuXHRcdFx0bmV3Q29uZmlnLnB1c2goY29uZmlnW2ldKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ld0NvbmZpZztcblx0fSxcblx0X2RyYXdPdmVyKHN0ZXBFbCkge1xuXHRcdHRoaXMuJHZpZXcuaW5uZXJIVE1MICs9IGA8c3ZnIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGNsYXNzPVwid2ViaXhfaGludF9vdmVybGF5XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIj5cblx0XHRcdDxkZWZzPlxuXHRcdFx0XHQ8bWFzayBpZD1cImhvbGVcIj5cblx0XHRcdFx0XHQ8cmVjdCBjbGFzcz1cIndlYml4X2hpbnRfb3ZlcmxheV9ob2xlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbGw9XCJ3aGl0ZVwiLz5cblx0XHRcdFx0XHQ8cmVjdCBjbGFzcz1cIndlYml4X2hpbnRfb3ZlcmxheV9ob2xlIHdlYml4X2hpbnRfb3ZlcmxheV9ob2xlX2VsXCIgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMFwiIGhlaWdodD1cIjBcIiBmaWxsPVwid2hpdGVcIi8+XG5cdFx0XHRcdDwvbWFzaz5cblx0XHRcdDwvZGVmcz5cblx0XHRcdDxyZWN0IGNsYXNzPVwid2ViaXhfaGludF9vdmVybGF5X2hvbGVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgbWFzaz1cInVybCgjaG9sZSlcIiAvPlxuXHRcdDwvc3ZnPmA7XG5cdFx0dGhpcy5fc2V0UHJvcGVydGllcyhzdGVwRWwpO1xuXHRcdHRoaXMuY2FsbEV2ZW50KFwib25BZnRlclN0YXJ0XCIsIFtdKTtcblx0fSxcblx0X2RyYXdIaW50KCkge1xuXHRcdGxldCBzZXR0aW5ncyA9IHRoaXMuY29uZmlnO1xuXHRcdHRoaXMuJHZpZXcuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwid2ViaXhfaGludFwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9J3dlYml4X2hpbnRfdGl0bGUnPiR7dGhpcy5fc3RlcC50aXRsZT90aGlzLl9zdGVwLnRpdGxlOlwiXCJ9PC9zcGFuPlxuXHRcdFx0PHAgY2xhc3M9XCJ3ZWJpeF9oaW50X2xhYmVsXCI+JHt0aGlzLl9zdGVwLnRleHR9PC9wPlxuXHRcdFx0PGRpdiBjbGFzcz1cIndlYml4X2hpbnRfcHJvZ3Jlc3NcIj5cblx0XHRcdFx0JHt0aGlzLl9pKzF9LyR7dGhpcy5jb25maWcuc3RlcHMubGVuZ3RofVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwid2ViaXhfaGludF9idXR0b25zXCI+XG5cdFx0XHRcdCR7c2V0dGluZ3MucHJldkJ1dHRvbiE9PSBmYWxzZT9gPGJ1dHRvbiBjbGFzcz1cIndlYml4X2hpbnRfYnV0dG9uIHdlYml4X2hpbnRfYnV0dG9uX3ByZXYgd2ViaXhfaGludF9idXR0b25faGlkZGVuXCI+JHt0eXBlb2Ygc2V0dGluZ3MucHJldkJ1dHRvbiA9PSBcInN0cmluZ1wiP3NldHRpbmdzLnByZXZCdXR0b246YCR7d2ViaXguaTE4bi5oaW50LnByZXZ9YH08L2J1dHRvbj5gOlwiXCJ9XG5cdFx0XHRcdCR7c2V0dGluZ3MubmV4dEJ1dHRvbiE9PSBmYWxzZT9gPGJ1dHRvbiBjbGFzcz1cIndlYml4X2hpbnRfYnV0dG9uIHdlYml4X2hpbnRfYnV0dG9uX25leHRcIj4ke3R5cGVvZiBzZXR0aW5ncy5uZXh0QnV0dG9uID09IFwic3RyaW5nXCI/c2V0dGluZ3MubmV4dEJ1dHRvbjpgJHt3ZWJpeC5pMThuLmhpbnQubmV4dH1gfTwvYnV0dG9uPmA6XCJcIn1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cIndlYml4X2hpbnRfYnV0dG9uX2Nsb3NlXCIgdGl0bGU9XCJDbG9zZVwiPiYjMTAwMDU7PC9idXR0b24+XG5cdFx0PC9kaXY+YDtcblx0fSxcblx0X3NldFByb3BlcnRpZXMoc3RlcEVsLCByZWZyZXNoKSB7XG5cdFx0aWYoIXN0ZXBFbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKCF3ZWJpeC5lbnYubW9iaWxlKSB7XG5cdFx0XHRzdGVwRWwuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xuXHRcdH1cblx0XHR0aGlzLl9zdGVwID0gdGhpcy5jb25maWcuc3RlcHNbdGhpcy5faV07XG5cdFx0dGhpcy5fcmVEcmF3KHN0ZXBFbCwgcmVmcmVzaCk7XG5cdFx0dGhpcy5faGludCA9IHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcIi53ZWJpeF9oaW50XCIpO1xuXG5cdFx0bGV0IHBhZGRpbmcgPSAzMDtcblx0XHRsZXQgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0XHRsZXQgYm94ID0gc3RlcEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGxldCBlbExlZnQgPSBib3gubGVmdCArIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHRsZXQgaGlnaGxpZ2h0V2lkdGggPSBib3gud2lkdGg7XG5cdFx0bGV0IGhpZ2hsaWdodEhlaWdodCA9IGJveC5oZWlnaHQ7XG5cdFx0bGV0IGhpbnRMZWZ0ID0gZWxMZWZ0IC0gdGhpcy5fc3RlcC5wYWRkaW5nO1xuXHRcdGxldCBoaW50V2lkdGggPSB0aGlzLl9oaW50Lm9mZnNldFdpZHRoO1xuXHRcdGxldCBoaW50SGVpZ2h0ID0gdGhpcy5faGludC5vZmZzZXRIZWlnaHQ7XG5cdFx0bGV0IGVsVG9wID0gd2ViaXguZW52Lm1vYmlsZSA/IGJveC50b3AgKyB0aGlzLl9zdGVwLnBhZGRpbmcgOiBib3gudG9wICsgdGhpcy5fc3RlcC5wYWRkaW5nICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xuXHRcdGxldCBoaW50VG9wID0gZWxUb3AgKyBoaWdobGlnaHRIZWlnaHQgKyB0aGlzLl9zdGVwLnBhZGRpbmcgKyBwYWRkaW5nO1xuXHRcdGxldCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICYmIGRvY0VsZW0uY2xpZW50V2lkdGggPyBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCwgZG9jRWxlbS5jbGllbnRXaWR0aCkgOiB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2NFbGVtLmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5jbGllbnRXaWR0aDtcblx0XHRsZXQgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICYmIGRvY0VsZW0uY2xpZW50SGVpZ2h0ID8gTWF0aC5taW4od2luZG93LmlubmVySGVpZ2h0LCBkb2NFbGVtLmNsaWVudEhlaWdodCkgOiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jRWxlbS5jbGllbnRIZWlnaHQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmNsaWVudEhlaWdodDtcblx0XHRcblx0XHRzdGVwRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYWxsXCI7XG5cdFx0c3RlcEVsLnN0eWxlLnVzZXJTZWxlY3QgPSBcImluaXRpYWxcIjtcblxuXHRcdC8vIHNldCBoaW50IHBvc2l0aW9uXG5cdFx0aWYoZWxMZWZ0IC0gd2luZG93V2lkdGggPiAwKSB7XG5cdFx0XHRlbExlZnQgPSBlbExlZnQgLSB3aW5kb3dXaWR0aCArIGhpbnRXaWR0aCArIGhpZ2hsaWdodFdpZHRoO1xuXHRcdH1cblxuXHRcdGlmKHdpbmRvd0hlaWdodCAvMiA8IGVsVG9wKSB7IC8vIGJvdHRvbVxuXHRcdFx0aGludFRvcCA9IGVsVG9wIC0gaGludEhlaWdodCAtIHBhZGRpbmcgLSB0aGlzLl9zdGVwLnBhZGRpbmcqMjtcblx0XHR9IGVsc2UgaWYod2luZG93V2lkdGggLzIgPCBlbExlZnQgJiYgZWxMZWZ0ICsgaGludFdpZHRoIDwgd2luZG93V2lkdGggJiYgaGlnaGxpZ2h0V2lkdGggKyBoaW50V2lkdGggPCB3aW5kb3dXaWR0aCkgeyAvLyByaWdodFxuXHRcdFx0aGludFRvcCA9IGhpZ2hsaWdodEhlaWdodCAvIDIgKyBlbFRvcCAtIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHRcdGhpbnRMZWZ0ID0gZWxMZWZ0IC0gaGludFdpZHRoIC0gdGhpcy5fc3RlcC5wYWRkaW5nIC0gcGFkZGluZztcblx0XHR9IGVsc2UgaWYod2luZG93V2lkdGggLzIgPiBlbExlZnQgJiYgZWxMZWZ0ICsgaGludFdpZHRoICsgaGlnaGxpZ2h0V2lkdGggPCB3aW5kb3dXaWR0aCkgeyAvLyBsZWZ0XG5cdFx0XHRoaW50TGVmdCA9IGhpZ2hsaWdodFdpZHRoICsgZWxMZWZ0ICsgcGFkZGluZztcblx0XHRcdGhpbnRUb3AgPSBlbFRvcCAtIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHR9IGVsc2UgaWYoaGludFRvcD53aW5kb3dIZWlnaHQgJiYgaGludEhlaWdodCtoaWdobGlnaHRIZWlnaHQ8d2luZG93SGVpZ2h0KXsvL3RvcCwgYnV0IGhpbnQgZG9lcyBub3QgZml0XG5cdFx0XHRoaW50VG9wID0gZWxUb3AgLSBoaW50SGVpZ2h0IC0gcGFkZGluZyAtIHRoaXMuX3N0ZXAucGFkZGluZyoyO1xuXHRcdH0gZWxzZSBpZihoaW50VG9wID53aW5kb3dIZWlnaHQgfHwgaGludFRvcCtoaW50SGVpZ2h0PndpbmRvd0hlaWdodCl7XG5cdFx0XHRoaW50TGVmdCA9IGVsTGVmdCAtIGhpbnRXaWR0aCAtIHRoaXMuX3N0ZXAucGFkZGluZyoyIC0gcGFkZGluZztcblx0XHRcdGhpbnRUb3AgPSBlbFRvcCAtIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHR9XG5cblx0XHRpZihoaW50TGVmdCArIGhpbnRXaWR0aCA+IHdpbmRvd1dpZHRoKSB7IC8vIGZvciBvdmVyZmxvd1xuXHRcdFx0aGludExlZnQgPSB3aW5kb3dXaWR0aCAtIGhpbnRXaWR0aDtcblx0XHR9IGVsc2UgaWYoaGludFRvcCA8IDAgfHwgaGludFRvcCA+IHdpbmRvd0hlaWdodCkge1xuXHRcdFx0aGludFRvcCA9IHBhZGRpbmc7XG5cdFx0fSBlbHNlIGlmKHdpbmRvd1dpZHRoIDwgaGlnaGxpZ2h0V2lkdGggfHwgaGludExlZnQgPCAwKSB7XG5cdFx0XHRoaW50TGVmdCA9IHBhZGRpbmc7XG5cdFx0fVxuXHRcdGlmKHdlYml4LmVudi5tb2JpbGUpIHtcblx0XHRcdHN0ZXBFbC5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XG5cdFx0fVxuXHRcdGlmKHRoaXMuX3RpbWVyKSB7Y2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKTt9XG5cdFx0dGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuX2hpbnQuc3R5bGUuY3NzVGV4dCA9IGB0b3A6JHtoaW50VG9wfXB4OyBsZWZ0OiR7aGludExlZnR9cHg7YDtcblx0XHRcdHRoaXMuX3NldEF0dHJpYnV0ZXModGhpcy4kdmlldy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2ViaXhfaGludF9vdmVybGF5X2hvbGVfZWxcIilbMF0sIHtcInhcIjplbExlZnQtdGhpcy5fc3RlcC5wYWRkaW5nKjIsIFwieVwiOmVsVG9wLXRoaXMuX3N0ZXAucGFkZGluZyoyLCBcIndpZHRoXCI6aGlnaGxpZ2h0V2lkdGgrdGhpcy5fc3RlcC5wYWRkaW5nICoyLCBcImhlaWdodFwiOmhpZ2hsaWdodEhlaWdodCt0aGlzLl9zdGVwLnBhZGRpbmcqMn0pO1xuXHRcdFx0d2ViaXguaHRtbC5hZGRDc3ModGhpcy5nZXROb2RlKCksIFwid2ViaXhfaGludF9hbmltYXRlZFwiKTtcblx0XHR9LCA1MDApO1xuXHR9LFxuXHRfc2V0UmVzaXplKCkge1xuXHRcdHRoaXMuX2V2ZW50UmVzaXplID0gd2ViaXguYXR0YWNoRXZlbnQoXCJvblJlc2l6ZVwiLCAoKSA9PiB7XG5cdFx0XHRpZih0aGlzLmdldEN1cnJlbnRTdGVwKCkgJiYgdGhpcy5faSAhPT0gdGhpcy5jb25maWcuc3RlcHMubGVuZ3RoKSB7XG5cdFx0XHRcdHRoaXMuX3JlZnJlc2godGhpcy5nZXRDdXJyZW50U3RlcCgpLCBmYWxzZSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cdF9zZXRBdHRyaWJ1dGVzKGVsLCBhdHRycykge1xuXHRcdGZvcih2YXIga2V5IGluIGF0dHJzKSB7XG5cdFx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0XHR9XG5cdH0sXG5cdF9yZURyYXcoc3RlcEVsLCByZWZyZXNoKSB7XG5cdFx0bGV0IHRpdGxlID0gdGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwiLndlYml4X2hpbnRfdGl0bGVcIik7XG5cdFx0bGV0IGVsO1xuXG5cdFx0dGhpcy5fc3RlcC5ldmVudEVsP2VsID0gdGhpcy5fZ2V0RWwodGhpcy5fc3RlcC5ldmVudEVsKTplbCA9IHN0ZXBFbDtcblx0XHRpZih0aGlzLl9pID4gMCAmJiAhcmVmcmVzaCkge1xuXHRcdFx0d2ViaXguaHRtbC5yZW1vdmVDc3ModGhpcy5nZXROb2RlKCksIFwid2ViaXhfaGludF9hbmltYXRlZFwiKTtcblx0XHRcdHRpdGxlLmlubmVySFRNTCA9IHRoaXMuX3N0ZXAudGl0bGUgfHwgXCJcIjtcblx0XHRcdHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcIi53ZWJpeF9oaW50X2xhYmVsXCIpLmlubmVySFRNTCA9IHRoaXMuX3N0ZXAudGV4dCB8fCBcIlwiO1xuXHRcdFx0dGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwiLndlYml4X2hpbnRfcHJvZ3Jlc3NcIikuaW5uZXJIVE1MID0gYCR7dGhpcy5faSsxfS8ke3RoaXMuY29uZmlnLnN0ZXBzLmxlbmd0aH1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9kcmF3SGludCgpO1xuXHRcdFx0dGhpcy5fc2V0RXZlbnRzQnV0dG9ucyhlbCk7XG5cdFx0fVxuXHRcdGlmKCF0aGlzLl9zdGVwLnRpdGxlICYmIHRpdGxlKSB7XG5cdFx0XHR0aXRsZS5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcblx0XHR9XG5cdFx0dGhpcy5fc2V0RWxFdmVudHMoZWwpO1xuXG5cdFx0aWYodGhpcy5fcHJldkJ1dHRvbikge1xuXHRcdFx0aWYodGhpcy5faSA+IDApIHsgLy8gcHJldmlvdXMgYnV0dG9uIHNob3dcblx0XHRcdFx0d2ViaXguaHRtbC5yZW1vdmVDc3ModGhpcy5fcHJldkJ1dHRvbiwgXCJ3ZWJpeF9oaW50X2J1dHRvbl9oaWRkZW5cIik7XG5cdFx0XHR9IGVsc2UgaWYodGhpcy5fcHJldkJ1dHRvbiAmJiAhdGhpcy5fcHJldkJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJ3ZWJpeF9oaW50X2J1dHRvbl9oaWRkZW5cIikpIHtcblx0XHRcdFx0d2ViaXguaHRtbC5hZGRDc3ModGhpcy5fcHJldkJ1dHRvbiwgXCJ3ZWJpeF9oaW50X2J1dHRvbl9oaWRkZW5cIik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGlmKHRoaXMuX2kgPT09IHRoaXMuY29uZmlnLnN0ZXBzLmxlbmd0aCAtMSAmJiB0aGlzLl9uZXh0QnV0dG9uKSB7IC8vIG5leHQgYnV0dG9uIHRleHRcblx0XHRcdHRoaXMuX25leHRCdXR0b24uaW5uZXJIVE1MID0gYCR7dHlwZW9mIHRoaXMuY29uZmlnLm5leHRCdXR0b24gPT0gXCJzdHJpbmdcIj90aGlzLmNvbmZpZy5uZXh0QnV0dG9uOmAke3dlYml4LmkxOG4uaGludC5sYXN0fWB9YDtcblx0XHR9XG5cdH0sXG5cdF9zZXRCb2R5Q2xhc3MocmVtb3ZlKSB7XG5cdFx0bGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXHRcdGlmKHJlbW92ZSkge1xuXHRcdFx0d2ViaXguaHRtbC5yZW1vdmVDc3MoYm9keSwgXCJ3ZWJpeF9oaW50X292ZXJmbG93XCIpO1xuXHRcdH0gZWxzZSBpZighYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJ3ZWJpeF9oaW50X292ZXJmbG93XCIpKSB7XG5cdFx0XHR3ZWJpeC5odG1sLmFkZENzcyhib2R5LCBcIndlYml4X2hpbnRfb3ZlcmZsb3dcIik7XG5cdFx0fVxuXHR9LFxuXHRfZ2V0RWwoZWwpIHtcblx0XHRpZigkJChlbCkpIHtcblx0XHRcdHJldHVybiAkJChlbCkuZ2V0Tm9kZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG5cdFx0fVxuXHR9LFxuXHRfZHJhd1N0ZXBzKHJlZnJlc2gpIHtcblx0XHRpZih0aGlzLmNvbmZpZy5zdGVwc1t0aGlzLl9pXSkge1xuXHRcdFx0bGV0IGVsID0gdGhpcy5fZ2V0RWwodGhpcy5jb25maWcuc3RlcHNbdGhpcy5faV0uZWwpO1xuXHRcdFx0aWYodGhpcy5faSA9PT0gMCAmJiAhcmVmcmVzaCkge1xuXHRcdFx0XHR0aGlzLmNhbGxFdmVudChcIm9uQmVmb3JlU3RhcnRcIiwgW10pO1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHsgLy8gZm9yIGZpcnN0IGluaXRcblx0XHRcdFx0XHR0aGlzLl9kcmF3T3ZlcihlbCk7XG5cdFx0XHRcdH0sIDEwMCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9zZXRQcm9wZXJ0aWVzKGVsLCByZWZyZXNoKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fc2tpcCgpO1xuXHRcdH1cblx0fSxcblx0X3NldEV2ZW50c0J1dHRvbnMoKSB7XG5cdFx0dGhpcy5fcHJldkJ1dHRvbiA9IHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvckFsbChcIi53ZWJpeF9oaW50X2J1dHRvbl9wcmV2XCIpWzBdO1xuXHRcdHRoaXMuX25leHRCdXR0b24gPSB0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud2ViaXhfaGludF9idXR0b25fbmV4dFwiKVswXTtcblx0XHRsZXQgZWw7XG5cdFx0aWYodGhpcy5fbmV4dEJ1dHRvbikge1xuXHRcdFx0d2ViaXguZXZlbnQodGhpcy5fbmV4dEJ1dHRvbiwgXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuX25leHQoZWwsIFwibmV4dFwiKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZih0aGlzLl9wcmV2QnV0dG9uKSB7XG5cdFx0XHR3ZWJpeC5ldmVudCh0aGlzLl9wcmV2QnV0dG9uLCBcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdFx0dGhpcy5fbmV4dChlbCwgXCJwcmV2aW91c1wiKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHR3ZWJpeC5ldmVudCh0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIud2ViaXhfaGludF9idXR0b25fY2xvc2VcIiksIFwiY2xpY2tcIiwgKCkgPT4geyB0aGlzLl9za2lwKCk7IH0pO1xuXHR9LFxuXHRfc2V0RWxFdmVudHMoc3RlcEVsKSB7XG5cdFx0bGV0IGV2ZW50U3RlcCA9IHRoaXMuX3N0ZXAuZXZlbnQ7XG5cdFx0c3RlcEVsLmZvY3VzKCk7XG5cdFx0aWYoZXZlbnRTdGVwKSB7XG5cdFx0XHRpZihldmVudFN0ZXAgPT09IFwiZW50ZXJcIikge1xuXHRcdFx0XHRldmVudFN0ZXAgPSBcImtleWRvd25cIjtcblx0XHRcdH1cblx0XHRcdGlmKHRoaXMuX2V2ZW50T2JqKSB7XG5cdFx0XHRcdHdlYml4LmV2ZW50UmVtb3ZlKHRoaXMuX2V2ZW50T2JqKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2V2ZW50T2JqID0gd2ViaXguZXZlbnQoc3RlcEVsLCBldmVudFN0ZXAsIChlKSA9PiB7XG5cdFx0XHRcdGlmKGV2ZW50U3RlcCA9PSBlLnR5cGUpIHtcblx0XHRcdFx0XHRpZihlLnR5cGUgPT09IFwia2V5ZG93blwiICYmIGUua2V5Q29kZSAhPT0gMTMpIHJldHVybjtcblx0XHRcdFx0XHRzdGVwRWwuZm9jdXMoKTtcblx0XHRcdFx0XHR0aGlzLl9uZXh0KHN0ZXBFbCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9LFxuXHRfbmV4dChzdGVwRWwsIGFjdGlvbikge1xuXHRcdGFjdGlvbiA9IGFjdGlvbiB8fCBcIm5leHRcIjtcblx0XHRpZiAodGhpcy5fc3RlcC5uZXh0ICYmIGFjdGlvbiA9PT0gXCJuZXh0XCIgfHwgdGhpcy5fc3RlcC5wcmV2aW91cyAmJiBhY3Rpb24gPT09IFwicHJldmlvdXNcIikge1xuXHRcdFx0bGV0IHByb21pc2UgPSB0aGlzLl9zdGVwW2FjdGlvbl0oKTtcblx0XHRcdGlmIChwcm9taXNlKXtcblx0XHRcdFx0cHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5fbmV4dFN0ZXAoc3RlcEVsLCBhY3Rpb24pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX25leHRTdGVwKHN0ZXBFbCwgYWN0aW9uKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fbmV4dFN0ZXAoc3RlcEVsLCBhY3Rpb24pO1xuXHRcdH1cblx0fSxcblx0X25leHRTdGVwKHN0ZXBFbCwgYWN0aW9uKSB7XG5cdFx0bGV0IGVsID0gdGhpcy5fZ2V0RWwodGhpcy5fc3RlcC5lbCk7XG5cdFx0ZWwuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiXCI7XG5cdFx0ZWwuc3R5bGUudXNlclNlbGVjdCA9IFwiXCI7XG5cdFx0ZWwuYmx1cigpO1xuXHRcdGlmKGFjdGlvbiAhPT0gXCJwcmV2aW91c1wiKSB7XG5cdFx0XHR0aGlzLl9pKys7XG5cdFx0XHR0aGlzLl9kcmF3U3RlcHMoKTtcblx0XHRcdHRoaXMuY2FsbEV2ZW50KFwib25OZXh0XCIsIFt0aGlzLl9pKzFdKTtcblx0XHR9XG5cdFx0aWYoYWN0aW9uID09PSBcInByZXZpb3VzXCIpIHtcblx0XHRcdHRoaXMuY2FsbEV2ZW50KFwib25QcmV2aW91c1wiLCBbdGhpcy5faV0pO1xuXHRcdFx0dGhpcy5fcmVmcmVzaCh0aGlzLl9pLS0sIGZhbHNlKTtcblx0XHR9XG5cdH0sXG5cdF9za2lwKCkge1xuXHRcdGlmICh0aGlzLl9pID09PSAtMSkgcmV0dXJuO1xuXHRcdGlmKHRoaXMuX2V2ZW50T2JqKSB7XG5cdFx0XHR3ZWJpeC5ldmVudFJlbW92ZSh0aGlzLl9ldmVudE9iaik7XG5cdFx0XHRkZWxldGUgdGhpcy5fZXZlbnRPYmo7XG5cdFx0fVxuXHRcdGlmKHRoaXMuX2V2ZW50UmVzaXplKSB7XG5cdFx0XHR3ZWJpeC5kZXRhY2hFdmVudCh0aGlzLl9ldmVudFJlc2l6ZSk7XG5cdFx0XHRkZWxldGUgdGhpcy5fZXZlbnRSZXNpemU7XG5cdFx0fVxuXHRcdHRoaXMuY2FsbEV2ZW50KFwib25Ta2lwXCIsIFt0aGlzLl9pKzFdKTtcblx0XHR0aGlzLmhpZGUoKTtcblx0XHR0aGlzLl9zZXRCb2R5Q2xhc3MoXCJyZW1vdmVcIik7XG5cdFx0aWYodGhpcy5faSA9PT0gdGhpcy5jb25maWcuc3RlcHMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLmNhbGxFdmVudChcIm9uRW5kXCIsIFt0aGlzLl9pKzFdKTtcblx0XHR9XG5cdH0sXG5cdF9yZWZyZXNoKGksIGZpcnN0RHJhdykge1xuXHRcdGlmKCF0aGlzLl9ldmVudFJlc2l6ZSkge1xuXHRcdFx0dGhpcy5fc2V0UmVzaXplKCk7XG5cdFx0fVxuXHRcdHRoaXMuX2kgPSBpLTE7XG5cdFx0dGhpcy5fc2V0Qm9keUNsYXNzKCk7XG5cdFx0aWYodGhpcy5faGludCkge1xuXHRcdFx0aWYodGhpcy5faGludC5wYXJlbnROb2RlKVxuXHRcdFx0XHR0aGlzLl9oaW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5faGludCk7XG5cdFx0XHR3ZWJpeC5odG1sLnJlbW92ZUNzcyh0aGlzLmdldE5vZGUoKSwgXCJ3ZWJpeF9oaW50X2FuaW1hdGVkXCIpO1xuXHRcdH1cblx0XHR0aGlzLnNob3coKTtcblx0XHRpZihmaXJzdERyYXcpIHtcblx0XHRcdGxldCBzdmcgPSB0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIik7XG5cdFx0XHRpZiAoc3ZnKVxuXHRcdFx0XHRzdmcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdmcpO1xuXHRcdFx0dGhpcy5fZHJhd1N0ZXBzKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2RyYXdTdGVwcyhcInJlZnJlc2hcIik7XG5cdFx0fVxuXHR9LFxuXHRzdGFydCgpIHtcblx0XHR0aGlzLl9yZWZyZXNoKDEsIHRydWUpO1xuXHR9LFxuXHRlbmQoKSB7XG5cdFx0dGhpcy5fc2tpcCgpO1xuXHR9LFxuXHRnZXRDdXJyZW50U3RlcCgpIHtcblx0XHRyZXR1cm4gdGhpcy5faSsxO1xuXHR9LFxuXHRyZXN1bWUoc3RlcE51bWJlcikge1xuXHRcdGlmKHRoaXMuX2hpbnQpe1xuXHRcdFx0c3RlcE51bWJlciA9IHN0ZXBOdW1iZXIgfHwgMTtcblx0XHRcdHRoaXMuX3JlZnJlc2goc3RlcE51bWJlcik7XG5cdFx0fVxuXHR9LFxuXHRnZXRTdGVwcygpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25maWcuc3RlcHM7XG5cdH0sXG5cdHNldFN0ZXBzKHZhbHVlKSB7XG5cdFx0dGhpcy5kZWZpbmUoXCJzdGVwc1wiLCB2YWx1ZSk7XG5cdH1cbn0sIHdlYml4LnVpLnZpZXcsIHdlYml4LkV2ZW50U3lzdGVtKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2hpbnQuanMiLCJleHBvcnQgbGV0IGJlID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiYmUtQllcIl0gPSB7XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwi0J3QsNGB0YLRg9C/0L3Ri1wiLFxuXHRcdHByZXY6IFwi0J/QsNC/0Y/RgNGN0LTQvdGWXCIsXG5cdFx0bGFzdDogXCLQmtCw0L3QtdGGINCi0YPRgNCwXCJcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vYmUuanMiLCIvKkdlcm1hbiAoR2VybWFueSkgbG9jYWxlKi9cbmV4cG9ydCBsZXQgZGUgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJkZS1ERVwiXSA9IHtcblx0aGludDp7XG5cdFx0bmV4dDogXCJOw6RjaHN0ZXJcIixcblx0XHRwcmV2OiBcIkJpc2hlcmlnZVwiLFxuXHRcdGxhc3Q6IFwiRW5kZSBUb3VyXCJcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9kZS5qcyIsImV4cG9ydCBsZXQgZW4gPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJlbi1VU1wiXT17XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwiTmV4dFwiLFxuXHRcdHByZXY6IFwiUHJldmlvdXNcIixcblx0XHRsYXN0OiBcIkVuZCBUb3VyXCJcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vZW4uanMiLCIvKlNwYW5pc2ggKFNwYWluLCBJbnRlcm5hdGlvbmFsIFNvcnQpIGxvY2FsZSovXG5leHBvcnQgbGV0IGVzID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiZXMtRVNcIl0gPSB7XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwiU2lndWllbnRlXCIsXG5cdFx0cHJldjogXCJBbnRlcmlvclwiLFxuXHRcdGxhc3Q6IFwiRmluIGRlIFZpYWplXCJcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9lcy5qcyIsImV4cG9ydCBsZXQgZnIgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJmci1GUlwiXT17XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwiUHJvY2hhaW5cIixcblx0XHRwcmV2OiBcIlByw6ljw6lkZW50XCIsXG5cdFx0bGFzdDogXCJFbmQgVG91clwiXG5cdH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2ZyLmpzIiwiLypJdGFsaWFuIChJdGFseSkgbG9jYWxlKi9cbmV4cG9ydCBsZXQgaXQgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJpdC1JVFwiXSA9IHtcblx0aGludDp7XG5cdFx0bmV4dDogXCJTZWd1ZW50ZVwiLFxuXHRcdHByZXY6IFwiUHJlY2VkZW50ZVwiLFxuXHRcdGxhc3Q6IFwiRW5kIFRvdXJcIlxuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2l0LmpzIiwiZXhwb3J0IGxldCBqYSA9IHdlYml4LmkxOG4ubG9jYWxlc1tcImphLUpQXCJdPXtcblx0aGludDp7XG5cdFx0bmV4dDogXCLmrKFcIixcblx0XHRwcmV2OiBcIuWJjVwiLFxuXHRcdGxhc3Q6IFwi57WC5LqG44OE44Ki44O8XCJcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vamEuanMiLCJleHBvcnQgbGV0IHB0ID0gd2ViaXguaTE4bi5sb2NhbGVzW1wicHQtQlJcIl0gPSB7XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwiUHLDs3hpbW9cIixcblx0XHRwcmV2OiBcIkFudGVyaW9yXCIsXG5cdFx0bGFzdDogXCJFbmQgVG91clwiXG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vcHQuanMiLCJleHBvcnQgbGV0IHJ1ID0gd2ViaXguaTE4bi5sb2NhbGVzW1wicnUtUlVcIl09e1xuXHRoaW50Ontcblx0XHRuZXh0OiBcItCh0LvQtdC00YPRjtGJ0LjQuVwiLFxuXHRcdHByZXY6IFwi0J/RgNC10LTRi9C00YPRidC40LlcIixcblx0XHRsYXN0OiBcItCa0L7QvdC10YYg0KLRg9GA0LBcIlxuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9ydS5qcyIsIi8qQ2hpbmVzZSAoU2ltcGxpZmllZCwgUFJDKSBsb2NhbGUqL1xuZXhwb3J0IGxldCB6aCA9IHdlYml4LmkxOG4ubG9jYWxlc1tcInpoLUNOXCJdID0ge1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIuS4i+S4gOS4qlwiLFxuXHRcdHByZXY6IFwi5Lul5YmNXCIsXG5cdFx0bGFzdDogXCLnu5PmnZ/lt6Hop4ZcIlxuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL3poLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==