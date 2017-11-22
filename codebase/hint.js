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
			console.log("refresh");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWNjYjlhZjgwN2I3MDlmMGM0NzYiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9sb2NhbGVzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5sZXNzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vYmUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL2RlLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9lbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL2ZyLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9pdC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vamEuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL3B0LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9ydS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vemguanMiXSwibmFtZXMiOlsibG9jYWxlIiwiaGludCIsIm5leHQiLCJwcmV2IiwibGFzdCIsIndlYml4IiwiaTE4biIsImV4dGVuZCIsInByb3RvVUkiLCJuYW1lIiwiZGVmYXVsdHMiLCJzdGVwcyIsImJvcmRlcmxlc3MiLCJuZXh0QnV0dG9uIiwicHJldkJ1dHRvbiIsIiRpbml0IiwiJHZpZXciLCJjbGFzc05hbWUiLCJfaSIsImF0dGFjaEV2ZW50IiwiX3NldEJvZHlDbGFzcyIsIl9ldmVudE9iaiIsImV2ZW50UmVtb3ZlIiwiX2V2ZW50T2JqRXNjIiwiX2V2ZW50UmVzaXplIiwiZGV0YWNoRXZlbnQiLCJldmVudCIsImRvY3VtZW50IiwiYm9keSIsImUiLCJrZXlDb2RlIiwiX3NraXAiLCJfc2V0UmVzaXplIiwic3RlcHNfc2V0dGVyIiwiY29uZmlnIiwibmV3Q29uZmlnIiwiaSIsImxlbmd0aCIsInBhZGRpbmciLCJ0ZXh0IiwicHVzaCIsIl9kcmF3T3ZlciIsInN0ZXBFbCIsImlubmVySFRNTCIsIl9zZXRQcm9wZXJ0aWVzIiwiY2FsbEV2ZW50IiwiX2RyYXdIaW50Iiwic2V0dGluZ3MiLCJfc3RlcCIsInRpdGxlIiwicmVmcmVzaCIsImVudiIsIm1vYmlsZSIsInNjcm9sbEludG9WaWV3IiwiX3JlRHJhdyIsIl9oaW50IiwicXVlcnlTZWxlY3RvciIsImRvY0VsZW0iLCJkb2N1bWVudEVsZW1lbnQiLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbExlZnQiLCJsZWZ0IiwiaGlnaGxpZ2h0V2lkdGgiLCJ3aWR0aCIsImhpZ2hsaWdodEhlaWdodCIsImhlaWdodCIsImhpbnRMZWZ0IiwiaGludFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJoaW50SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZWxUb3AiLCJ0b3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImhpbnRUb3AiLCJ3aW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsIk1hdGgiLCJtaW4iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwidXNlclNlbGVjdCIsIl90aW1lciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJjc3NUZXh0IiwiX3NldEF0dHJpYnV0ZXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaHRtbCIsImFkZENzcyIsImdldE5vZGUiLCJnZXRDdXJyZW50U3RlcCIsIl9yZWZyZXNoIiwiZWwiLCJhdHRycyIsImtleSIsInNldEF0dHJpYnV0ZSIsImV2ZW50RWwiLCJfZ2V0RWwiLCJyZW1vdmVDc3MiLCJfc2V0RXZlbnRzQnV0dG9ucyIsIm1hcmdpbiIsIl9zZXRFbEV2ZW50cyIsIl9wcmV2QnV0dG9uIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJfbmV4dEJ1dHRvbiIsInJlbW92ZSIsIiQkIiwiX2RyYXdTdGVwcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfbmV4dCIsImV2ZW50U3RlcCIsImZvY3VzIiwidHlwZSIsImFjdGlvbiIsInByZXZpb3VzIiwicHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX25leHRTdGVwIiwiYmx1ciIsImhpZGUiLCJmaXJzdERyYXciLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJzaG93Iiwic3ZnIiwiY29uc29sZSIsImxvZyIsInN0YXJ0IiwiZW5kIiwicmVzdW1lIiwic3RlcE51bWJlciIsImdldFN0ZXBzIiwic2V0U3RlcHMiLCJ2YWx1ZSIsImRlZmluZSIsInVpIiwidmlldyIsIkV2ZW50U3lzdGVtIiwiYmUiLCJsb2NhbGVzIiwiZGUiLCJlbiIsImVzIiwiZnIiLCJpdCIsImphIiwicHQiLCJydSIsInpoIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFTyxJQUFJQSwwQkFBUztBQUNuQkMsT0FBTTtBQUNMQyxRQUFNLE1BREQ7QUFFTEMsUUFBTSxVQUZEO0FBR0xDLFFBQU07QUFIRDtBQURhLENBQWIsQzs7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O0FBRHdDLENBQXZDLEM7Ozs7Ozs7Ozs7OztBQ0RBLElBQUl1SixrQkFBS3RKLE1BQU1DLElBQU4sQ0FBVytJLE9BQVgsQ0FBbUIsT0FBbkIsSUFBNEI7QUFDM0NwSixPQUFLO0FBQ0pDLFFBQU0sR0FERjtBQUVKQyxRQUFNLEdBRkY7QUFHSkMsUUFBTTtBQUhGO0FBRHNDLENBQXJDLEM7Ozs7Ozs7Ozs7OztBQ0FBLElBQUl3SixrQkFBS3ZKLE1BQU1DLElBQU4sQ0FBVytJLE9BQVgsQ0FBbUIsT0FBbkIsSUFBOEI7QUFDN0NwSixPQUFLO0FBQ0pDLFFBQU0sU0FERjtBQUVKQyxRQUFNLFVBRkY7QUFHSkMsUUFBTTtBQUhGO0FBRHdDLENBQXZDLEM7Ozs7Ozs7Ozs7OztBQ0FBLElBQUl5SixrQkFBS3hKLE1BQU1DLElBQU4sQ0FBVytJLE9BQVgsQ0FBbUIsT0FBbkIsSUFBNEI7QUFDM0NwSixPQUFLO0FBQ0pDLFFBQU0sV0FERjtBQUVKQyxRQUFNLFlBRkY7QUFHSkMsUUFBTTtBQUhGO0FBRHNDLENBQXJDLEM7Ozs7Ozs7Ozs7OztBQ0FQO0FBQ08sSUFBSTBKLGtCQUFLekosTUFBTUMsSUFBTixDQUFXK0ksT0FBWCxDQUFtQixPQUFuQixJQUE4QjtBQUM3Q3BKLE9BQUs7QUFDSkMsUUFBTSxLQURGO0FBRUpDLFFBQU0sSUFGRjtBQUdKQyxRQUFNO0FBSEY7QUFEd0MsQ0FBdkMsQyIsImZpbGUiOiJoaW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvY29kZWJhc2UvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYWNjYjlhZjgwN2I3MDlmMGM0NzYiLCJpbXBvcnQgXCIuL2kxOG4vZW5cIjtcbmltcG9ydCBcIi4vaTE4bi9mclwiO1xuaW1wb3J0IFwiLi9pMThuL2JlXCI7XG5pbXBvcnQgXCIuL2kxOG4vZGVcIjtcbmltcG9ydCBcIi4vaTE4bi9lc1wiO1xuaW1wb3J0IFwiLi9pMThuL2l0XCI7XG5pbXBvcnQgXCIuL2kxOG4vamFcIjtcbmltcG9ydCBcIi4vaTE4bi9wdFwiO1xuaW1wb3J0IFwiLi9pMThuL3J1XCI7XG5pbXBvcnQgXCIuL2kxOG4vemhcIjtcblxuZXhwb3J0IGxldCBsb2NhbGUgPSB7XG5cdGhpbnQ6IHtcblx0XHRuZXh0OiBcIk5leHRcIixcblx0XHRwcmV2OiBcIlByZXZpb3VzXCIsXG5cdFx0bGFzdDogXCJFbmQgVG91clwiXG5cdH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9sb2NhbGVzLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvaGludC5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBcIi4vaGludC5sZXNzXCI7XG5pbXBvcnQgeyBsb2NhbGUgfSBmcm9tIFwiLi9sb2NhbGVzXCI7XG5cbndlYml4LmkxOG4uaGludCA9IHdlYml4LmV4dGVuZCh3ZWJpeC5pMThuLCBsb2NhbGUpLmhpbnQ7XG5cbndlYml4LnByb3RvVUkoe1xuXHRuYW1lOiBcImhpbnRcIixcblx0ZGVmYXVsdHM6IHtcblx0XHRzdGVwczogW10sXG5cdFx0Ym9yZGVybGVzczogdHJ1ZSxcblx0XHRuZXh0QnV0dG9uOiB0cnVlLFxuXHRcdHByZXZCdXR0b246IHRydWVcblx0fSxcblx0JGluaXQoKSB7XG5cdFx0dGhpcy4kdmlldy5jbGFzc05hbWUgKz0gXCIgd2ViaXhfaGludF92aWV3XCI7XG5cdFx0dGhpcy5faSA9IC0xO1xuXHRcdHRoaXMuYXR0YWNoRXZlbnQoXCJvbkRlc3RydWN0XCIsICgpID0+IHtcblx0XHRcdHRoaXMuX3NldEJvZHlDbGFzcyhcInJlbW92ZVwiKTtcblx0XHRcdGlmKHRoaXMuX2V2ZW50T2JqKSB7XG5cdFx0XHRcdHdlYml4LmV2ZW50UmVtb3ZlKHRoaXMuX2V2ZW50T2JqKTtcblx0XHRcdH1cblx0XHRcdGlmKHRoaXMuX2V2ZW50T2JqRXNjKSB7XG5cdFx0XHRcdHdlYml4LmV2ZW50UmVtb3ZlKHRoaXMuX2V2ZW50T2JqRXNjKTtcblx0XHRcdH1cblx0XHRcdGlmKHRoaXMuX2V2ZW50UmVzaXplKSB7XG5cdFx0XHRcdHdlYml4LmRldGFjaEV2ZW50KHRoaXMuX2V2ZW50UmVzaXplKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLl9ldmVudE9iakVzYyA9IHdlYml4LmV2ZW50KGRvY3VtZW50LmJvZHksXCJrZXlkb3duXCIsIChlKSA9PiB7XG5cdFx0XHQvLyBlc2NhcGVcblx0XHRcdGlmIChlLmtleUNvZGUgPT0gMjcpe1xuXHRcdFx0XHR0aGlzLl9za2lwKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5fc2V0UmVzaXplKCk7XG5cdH0sXG5cdHN0ZXBzX3NldHRlcihjb25maWcpIHtcblx0XHRsZXQgbmV3Q29uZmlnID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjb25maWcubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbmZpZ1tpXS5wYWRkaW5nID0gY29uZmlnW2ldLnBhZGRpbmcgfHwgMDtcblx0XHRcdGNvbmZpZ1tpXS50ZXh0ID0gY29uZmlnW2ldLnRleHQgfHwgXCJcIjtcblx0XHRcdG5ld0NvbmZpZy5wdXNoKGNvbmZpZ1tpXSk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXdDb25maWc7XG5cdH0sXG5cdF9kcmF3T3ZlcihzdGVwRWwpIHtcblx0XHR0aGlzLiR2aWV3LmlubmVySFRNTCArPSBgPHN2ZyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBjbGFzcz1cIndlYml4X2hpbnRfb3ZlcmxheVwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCI+XG5cdFx0XHQ8ZGVmcz5cblx0XHRcdFx0PG1hc2sgaWQ9XCJob2xlXCI+XG5cdFx0XHRcdFx0PHJlY3QgY2xhc3M9XCJ3ZWJpeF9oaW50X292ZXJsYXlfaG9sZVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBmaWxsPVwid2hpdGVcIi8+XG5cdFx0XHRcdFx0PHJlY3QgY2xhc3M9XCJ3ZWJpeF9oaW50X292ZXJsYXlfaG9sZSB3ZWJpeF9oaW50X292ZXJsYXlfaG9sZV9lbFwiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjBcIiBoZWlnaHQ9XCIwXCIgZmlsbD1cIndoaXRlXCIvPlxuXHRcdFx0XHQ8L21hc2s+XG5cdFx0XHQ8L2RlZnM+XG5cdFx0XHQ8cmVjdCBjbGFzcz1cIndlYml4X2hpbnRfb3ZlcmxheV9ob2xlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIG1hc2s9XCJ1cmwoI2hvbGUpXCIgLz5cblx0XHQ8L3N2Zz5gO1xuXHRcdHRoaXMuX3NldFByb3BlcnRpZXMoc3RlcEVsKTtcblx0XHR0aGlzLmNhbGxFdmVudChcIm9uQWZ0ZXJTdGFydFwiLCBbXSk7XG5cdH0sXG5cdF9kcmF3SGludCgpIHtcblx0XHRsZXQgc2V0dGluZ3MgPSB0aGlzLmNvbmZpZztcblx0XHR0aGlzLiR2aWV3LmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cIndlYml4X2hpbnRcIj5cblx0XHRcdDxzcGFuIGNsYXNzPSd3ZWJpeF9oaW50X3RpdGxlJz4ke3RoaXMuX3N0ZXAudGl0bGU/dGhpcy5fc3RlcC50aXRsZTpcIlwifTwvc3Bhbj5cblx0XHRcdDxwIGNsYXNzPVwid2ViaXhfaGludF9sYWJlbFwiPiR7dGhpcy5fc3RlcC50ZXh0fTwvcD5cblx0XHRcdDxkaXYgY2xhc3M9XCJ3ZWJpeF9oaW50X3Byb2dyZXNzXCI+XG5cdFx0XHRcdCR7dGhpcy5faSsxfS8ke3RoaXMuY29uZmlnLnN0ZXBzLmxlbmd0aH1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cIndlYml4X2hpbnRfYnV0dG9uc1wiPlxuXHRcdFx0XHQke3NldHRpbmdzLnByZXZCdXR0b24hPT0gZmFsc2U/YDxidXR0b24gY2xhc3M9XCJ3ZWJpeF9oaW50X2J1dHRvbiB3ZWJpeF9oaW50X2J1dHRvbl9wcmV2IHdlYml4X2hpbnRfYnV0dG9uX2hpZGRlblwiPiR7dHlwZW9mIHNldHRpbmdzLnByZXZCdXR0b24gPT0gXCJzdHJpbmdcIj9zZXR0aW5ncy5wcmV2QnV0dG9uOmAke3dlYml4LmkxOG4uaGludC5wcmV2fWB9PC9idXR0b24+YDpcIlwifVxuXHRcdFx0XHQke3NldHRpbmdzLm5leHRCdXR0b24hPT0gZmFsc2U/YDxidXR0b24gY2xhc3M9XCJ3ZWJpeF9oaW50X2J1dHRvbiB3ZWJpeF9oaW50X2J1dHRvbl9uZXh0XCI+JHt0eXBlb2Ygc2V0dGluZ3MubmV4dEJ1dHRvbiA9PSBcInN0cmluZ1wiP3NldHRpbmdzLm5leHRCdXR0b246YCR7d2ViaXguaTE4bi5oaW50Lm5leHR9YH08L2J1dHRvbj5gOlwiXCJ9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxidXR0b24gY2xhc3M9XCJ3ZWJpeF9oaW50X2J1dHRvbl9jbG9zZVwiIHRpdGxlPVwiQ2xvc2VcIj4mIzEwMDA1OzwvYnV0dG9uPlxuXHRcdDwvZGl2PmA7XG5cdH0sXG5cdF9zZXRQcm9wZXJ0aWVzKHN0ZXBFbCwgcmVmcmVzaCkge1xuXHRcdGlmKCFzdGVwRWwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZighd2ViaXguZW52Lm1vYmlsZSkge1xuXHRcdFx0c3RlcEVsLnNjcm9sbEludG9WaWV3KGZhbHNlKTtcblx0XHR9XG5cdFx0dGhpcy5fc3RlcCA9IHRoaXMuY29uZmlnLnN0ZXBzW3RoaXMuX2ldO1xuXHRcdHRoaXMuX3JlRHJhdyhzdGVwRWwsIHJlZnJlc2gpO1xuXHRcdHRoaXMuX2hpbnQgPSB0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIud2ViaXhfaGludFwiKTtcblxuXHRcdGxldCBwYWRkaW5nID0gMzA7XG5cdFx0bGV0IGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdFx0bGV0IGJveCA9IHN0ZXBFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRsZXQgZWxMZWZ0ID0gYm94LmxlZnQgKyB0aGlzLl9zdGVwLnBhZGRpbmc7XG5cdFx0bGV0IGhpZ2hsaWdodFdpZHRoID0gYm94LndpZHRoO1xuXHRcdGxldCBoaWdobGlnaHRIZWlnaHQgPSBib3guaGVpZ2h0O1xuXHRcdGxldCBoaW50TGVmdCA9IGVsTGVmdCAtIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHRsZXQgaGludFdpZHRoID0gdGhpcy5faGludC5vZmZzZXRXaWR0aDtcblx0XHRsZXQgaGludEhlaWdodCA9IHRoaXMuX2hpbnQub2Zmc2V0SGVpZ2h0O1xuXHRcdGxldCBlbFRvcCA9IHdlYml4LmVudi5tb2JpbGUgPyBib3gudG9wICsgdGhpcy5fc3RlcC5wYWRkaW5nIDogYm94LnRvcCArIHRoaXMuX3N0ZXAucGFkZGluZyArIHdpbmRvdy5wYWdlWU9mZnNldDtcblx0XHRsZXQgaGludFRvcCA9IGVsVG9wICsgaGlnaGxpZ2h0SGVpZ2h0ICsgdGhpcy5fc3RlcC5wYWRkaW5nICsgcGFkZGluZztcblx0XHRsZXQgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAmJiBkb2NFbGVtLmNsaWVudFdpZHRoID8gTWF0aC5taW4od2luZG93LmlubmVyV2lkdGgsIGRvY0VsZW0uY2xpZW50V2lkdGgpIDogd2luZG93LmlubmVyV2lkdGggfHwgZG9jRWxlbS5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uY2xpZW50V2lkdGg7XG5cdFx0bGV0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAmJiBkb2NFbGVtLmNsaWVudEhlaWdodCA/IE1hdGgubWluKHdpbmRvdy5pbm5lckhlaWdodCwgZG9jRWxlbS5jbGllbnRIZWlnaHQpIDogd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY0VsZW0uY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5jbGllbnRIZWlnaHQ7XG5cdFx0XG5cdFx0c3RlcEVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImFsbFwiO1xuXHRcdHN0ZXBFbC5zdHlsZS51c2VyU2VsZWN0ID0gXCJpbml0aWFsXCI7XG5cblx0XHQvLyBzZXQgaGludCBwb3NpdGlvblxuXHRcdGlmKGVsTGVmdCAtIHdpbmRvd1dpZHRoID4gMCkge1xuXHRcdFx0ZWxMZWZ0ID0gZWxMZWZ0IC0gd2luZG93V2lkdGggKyBoaW50V2lkdGggKyBoaWdobGlnaHRXaWR0aDtcblx0XHR9XG5cblx0XHRpZih3aW5kb3dIZWlnaHQgLzIgPCBlbFRvcCkgeyAvLyBib3R0b21cblx0XHRcdGhpbnRUb3AgPSBlbFRvcCAtIGhpbnRIZWlnaHQgLSBwYWRkaW5nIC0gdGhpcy5fc3RlcC5wYWRkaW5nKjI7XG5cdFx0fSBlbHNlIGlmKHdpbmRvd1dpZHRoIC8yIDwgZWxMZWZ0ICYmIGVsTGVmdCArIGhpbnRXaWR0aCA8IHdpbmRvd1dpZHRoICYmIGhpZ2hsaWdodFdpZHRoICsgaGludFdpZHRoIDwgd2luZG93V2lkdGgpIHsgLy8gcmlnaHRcblx0XHRcdGhpbnRUb3AgPSBoaWdobGlnaHRIZWlnaHQgLyAyICsgZWxUb3AgLSB0aGlzLl9zdGVwLnBhZGRpbmc7XG5cdFx0XHRoaW50TGVmdCA9IGVsTGVmdCAtIGhpbnRXaWR0aCAtIHRoaXMuX3N0ZXAucGFkZGluZyAtIHBhZGRpbmc7XG5cdFx0fSBlbHNlIGlmKHdpbmRvd1dpZHRoIC8yID4gZWxMZWZ0ICYmIGVsTGVmdCArIGhpbnRXaWR0aCArIGhpZ2hsaWdodFdpZHRoIDwgd2luZG93V2lkdGgpIHsgLy8gbGVmdFxuXHRcdFx0aGludExlZnQgPSBoaWdobGlnaHRXaWR0aCArIGVsTGVmdCArIHBhZGRpbmc7XG5cdFx0XHRoaW50VG9wID0gZWxUb3AgLSB0aGlzLl9zdGVwLnBhZGRpbmc7XG5cdFx0fSBlbHNlIGlmKGhpbnRUb3A+d2luZG93SGVpZ2h0ICYmIGhpbnRIZWlnaHQraGlnaGxpZ2h0SGVpZ2h0PHdpbmRvd0hlaWdodCl7Ly90b3AsIGJ1dCBoaW50IGRvZXMgbm90IGZpdFxuXHRcdFx0aGludFRvcCA9IGVsVG9wIC0gaGludEhlaWdodCAtIHBhZGRpbmcgLSB0aGlzLl9zdGVwLnBhZGRpbmcqMjtcblx0XHR9IGVsc2UgaWYoaGludFRvcCA+d2luZG93SGVpZ2h0IHx8IGhpbnRUb3AraGludEhlaWdodD53aW5kb3dIZWlnaHQpe1xuXHRcdFx0aGludExlZnQgPSBlbExlZnQgLSBoaW50V2lkdGggLSB0aGlzLl9zdGVwLnBhZGRpbmcqMiAtIHBhZGRpbmc7XG5cdFx0XHRoaW50VG9wID0gZWxUb3AgLSB0aGlzLl9zdGVwLnBhZGRpbmc7XG5cdFx0fVxuXG5cdFx0aWYoaGludExlZnQgKyBoaW50V2lkdGggPiB3aW5kb3dXaWR0aCkgeyAvLyBmb3Igb3ZlcmZsb3dcblx0XHRcdGhpbnRMZWZ0ID0gd2luZG93V2lkdGggLSBoaW50V2lkdGg7XG5cdFx0fSBlbHNlIGlmKGhpbnRUb3AgPCAwIHx8IGhpbnRUb3AgPiB3aW5kb3dIZWlnaHQpIHtcblx0XHRcdGhpbnRUb3AgPSBwYWRkaW5nO1xuXHRcdH0gZWxzZSBpZih3aW5kb3dXaWR0aCA8IGhpZ2hsaWdodFdpZHRoIHx8IGhpbnRMZWZ0IDwgMCkge1xuXHRcdFx0aGludExlZnQgPSBwYWRkaW5nO1xuXHRcdH1cblx0XHRpZih3ZWJpeC5lbnYubW9iaWxlKSB7XG5cdFx0XHRzdGVwRWwuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xuXHRcdH1cblx0XHRpZih0aGlzLl90aW1lcikge2NsZWFyVGltZW91dCh0aGlzLl90aW1lcik7fVxuXHRcdHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLl9oaW50LnN0eWxlLmNzc1RleHQgPSBgdG9wOiR7aGludFRvcH1weDsgbGVmdDoke2hpbnRMZWZ0fXB4O2A7XG5cdFx0XHR0aGlzLl9zZXRBdHRyaWJ1dGVzKHRoaXMuJHZpZXcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndlYml4X2hpbnRfb3ZlcmxheV9ob2xlX2VsXCIpWzBdLCB7XCJ4XCI6ZWxMZWZ0LXRoaXMuX3N0ZXAucGFkZGluZyoyLCBcInlcIjplbFRvcC10aGlzLl9zdGVwLnBhZGRpbmcqMiwgXCJ3aWR0aFwiOmhpZ2hsaWdodFdpZHRoK3RoaXMuX3N0ZXAucGFkZGluZyAqMiwgXCJoZWlnaHRcIjpoaWdobGlnaHRIZWlnaHQrdGhpcy5fc3RlcC5wYWRkaW5nKjJ9KTtcblx0XHRcdHdlYml4Lmh0bWwuYWRkQ3NzKHRoaXMuZ2V0Tm9kZSgpLCBcIndlYml4X2hpbnRfYW5pbWF0ZWRcIik7XG5cdFx0fSwgNTAwKTtcblx0fSxcblx0X3NldFJlc2l6ZSgpIHtcblx0XHR0aGlzLl9ldmVudFJlc2l6ZSA9IHdlYml4LmF0dGFjaEV2ZW50KFwib25SZXNpemVcIiwgKCkgPT4ge1xuXHRcdFx0aWYodGhpcy5nZXRDdXJyZW50U3RlcCgpICYmIHRoaXMuX2kgIT09IHRoaXMuY29uZmlnLnN0ZXBzLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLl9yZWZyZXNoKHRoaXMuZ2V0Q3VycmVudFN0ZXAoKSwgZmFsc2UsIHRydWUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXHRfc2V0QXR0cmlidXRlcyhlbCwgYXR0cnMpIHtcblx0XHRmb3IodmFyIGtleSBpbiBhdHRycykge1xuXHRcdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdFx0fVxuXHR9LFxuXHRfcmVEcmF3KHN0ZXBFbCwgcmVmcmVzaCkge1xuXHRcdGxldCB0aXRsZSA9IHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcIi53ZWJpeF9oaW50X3RpdGxlXCIpO1xuXHRcdGxldCBlbDtcblxuXHRcdHRoaXMuX3N0ZXAuZXZlbnRFbD9lbCA9IHRoaXMuX2dldEVsKHRoaXMuX3N0ZXAuZXZlbnRFbCk6ZWwgPSBzdGVwRWw7XG5cdFx0aWYodGhpcy5faSA+IDAgJiYgIXJlZnJlc2gpIHtcblx0XHRcdHdlYml4Lmh0bWwucmVtb3ZlQ3NzKHRoaXMuZ2V0Tm9kZSgpLCBcIndlYml4X2hpbnRfYW5pbWF0ZWRcIik7XG5cdFx0XHR0aXRsZS5pbm5lckhUTUwgPSB0aGlzLl9zdGVwLnRpdGxlIHx8IFwiXCI7XG5cdFx0XHR0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIud2ViaXhfaGludF9sYWJlbFwiKS5pbm5lckhUTUwgPSB0aGlzLl9zdGVwLnRleHQgfHwgXCJcIjtcblx0XHRcdHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcIi53ZWJpeF9oaW50X3Byb2dyZXNzXCIpLmlubmVySFRNTCA9IGAke3RoaXMuX2krMX0vJHt0aGlzLmNvbmZpZy5zdGVwcy5sZW5ndGh9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fZHJhd0hpbnQoKTtcblx0XHRcdHRoaXMuX3NldEV2ZW50c0J1dHRvbnMoZWwpO1xuXHRcdH1cblx0XHRpZighdGhpcy5fc3RlcC50aXRsZSAmJiB0aXRsZSkge1xuXHRcdFx0dGl0bGUuc3R5bGUubWFyZ2luID0gXCIwXCI7XG5cdFx0fVxuXHRcdHRoaXMuX3NldEVsRXZlbnRzKGVsKTtcblxuXHRcdGlmKHRoaXMuX3ByZXZCdXR0b24pIHtcblx0XHRcdGlmKHRoaXMuX2kgPiAwKSB7IC8vIHByZXZpb3VzIGJ1dHRvbiBzaG93XG5cdFx0XHRcdHdlYml4Lmh0bWwucmVtb3ZlQ3NzKHRoaXMuX3ByZXZCdXR0b24sIFwid2ViaXhfaGludF9idXR0b25faGlkZGVuXCIpO1xuXHRcdFx0fSBlbHNlIGlmKHRoaXMuX3ByZXZCdXR0b24gJiYgIXRoaXMuX3ByZXZCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwid2ViaXhfaGludF9idXR0b25faGlkZGVuXCIpKSB7XG5cdFx0XHRcdHdlYml4Lmh0bWwuYWRkQ3NzKHRoaXMuX3ByZXZCdXR0b24sIFwid2ViaXhfaGludF9idXR0b25faGlkZGVuXCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRpZih0aGlzLl9pID09PSB0aGlzLmNvbmZpZy5zdGVwcy5sZW5ndGggLTEgJiYgdGhpcy5fbmV4dEJ1dHRvbikgeyAvLyBuZXh0IGJ1dHRvbiB0ZXh0XG5cdFx0XHR0aGlzLl9uZXh0QnV0dG9uLmlubmVySFRNTCA9IGAke3R5cGVvZiB0aGlzLmNvbmZpZy5uZXh0QnV0dG9uID09IFwic3RyaW5nXCI/dGhpcy5jb25maWcubmV4dEJ1dHRvbjpgJHt3ZWJpeC5pMThuLmhpbnQubGFzdH1gfWA7XG5cdFx0fVxuXHR9LFxuXHRfc2V0Qm9keUNsYXNzKHJlbW92ZSkge1xuXHRcdGxldCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblx0XHRpZihyZW1vdmUpIHtcblx0XHRcdHdlYml4Lmh0bWwucmVtb3ZlQ3NzKGJvZHksIFwid2ViaXhfaGludF9vdmVyZmxvd1wiKTtcblx0XHR9IGVsc2UgaWYoIWJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwid2ViaXhfaGludF9vdmVyZmxvd1wiKSkge1xuXHRcdFx0d2ViaXguaHRtbC5hZGRDc3MoYm9keSwgXCJ3ZWJpeF9oaW50X292ZXJmbG93XCIpO1xuXHRcdH1cblx0fSxcblx0X2dldEVsKGVsKSB7XG5cdFx0aWYoJCQoZWwpKSB7XG5cdFx0XHRyZXR1cm4gJCQoZWwpLmdldE5vZGUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpO1xuXHRcdH1cblx0fSxcblx0X2RyYXdTdGVwcyhyZWZyZXNoKSB7XG5cdFx0aWYodGhpcy5jb25maWcuc3RlcHNbdGhpcy5faV0pIHtcblx0XHRcdGxldCBlbCA9IHRoaXMuX2dldEVsKHRoaXMuY29uZmlnLnN0ZXBzW3RoaXMuX2ldLmVsKTtcblx0XHRcdGlmKHRoaXMuX2kgPT09IDAgJiYgIXJlZnJlc2gpIHtcblx0XHRcdFx0dGhpcy5jYWxsRXZlbnQoXCJvbkJlZm9yZVN0YXJ0XCIsIFtdKTtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7IC8vIGZvciBmaXJzdCBpbml0XG5cdFx0XHRcdFx0dGhpcy5fZHJhd092ZXIoZWwpO1xuXHRcdFx0XHR9LCAxMDApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fc2V0UHJvcGVydGllcyhlbCwgcmVmcmVzaCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3NraXAoKTtcblx0XHR9XG5cdH0sXG5cdF9zZXRFdmVudHNCdXR0b25zKCkge1xuXHRcdHRoaXMuX3ByZXZCdXR0b24gPSB0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud2ViaXhfaGludF9idXR0b25fcHJldlwiKVswXTtcblx0XHR0aGlzLl9uZXh0QnV0dG9uID0gdGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yQWxsKFwiLndlYml4X2hpbnRfYnV0dG9uX25leHRcIilbMF07XG5cdFx0bGV0IGVsO1xuXHRcdGlmKHRoaXMuX25leHRCdXR0b24pIHtcblx0XHRcdHdlYml4LmV2ZW50KHRoaXMuX25leHRCdXR0b24sIFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl9uZXh0KGVsLCBcIm5leHRcIik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYodGhpcy5fcHJldkJ1dHRvbikge1xuXHRcdFx0d2ViaXguZXZlbnQodGhpcy5fcHJldkJ1dHRvbiwgXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMuX25leHQoZWwsIFwicHJldmlvdXNcIik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0d2ViaXguZXZlbnQodGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwiLndlYml4X2hpbnRfYnV0dG9uX2Nsb3NlXCIpLCBcImNsaWNrXCIsICgpID0+IHsgdGhpcy5fc2tpcCgpOyB9KTtcblx0fSxcblx0X3NldEVsRXZlbnRzKHN0ZXBFbCkge1xuXHRcdGxldCBldmVudFN0ZXAgPSB0aGlzLl9zdGVwLmV2ZW50O1xuXHRcdHN0ZXBFbC5mb2N1cygpO1xuXHRcdGlmKGV2ZW50U3RlcCkge1xuXHRcdFx0aWYoZXZlbnRTdGVwID09PSBcImVudGVyXCIpIHtcblx0XHRcdFx0ZXZlbnRTdGVwID0gXCJrZXlkb3duXCI7XG5cdFx0XHR9XG5cdFx0XHRpZih0aGlzLl9ldmVudE9iaikge1xuXHRcdFx0XHR3ZWJpeC5ldmVudFJlbW92ZSh0aGlzLl9ldmVudE9iaik7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9ldmVudE9iaiA9IHdlYml4LmV2ZW50KHN0ZXBFbCwgZXZlbnRTdGVwLCAoZSkgPT4ge1xuXHRcdFx0XHRpZihldmVudFN0ZXAgPT0gZS50eXBlKSB7XG5cdFx0XHRcdFx0aWYoZS50eXBlID09PSBcImtleWRvd25cIiAmJiBlLmtleUNvZGUgIT09IDEzKSByZXR1cm47XG5cdFx0XHRcdFx0c3RlcEVsLmZvY3VzKCk7XG5cdFx0XHRcdFx0dGhpcy5fbmV4dChzdGVwRWwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fSxcblx0X25leHQoc3RlcEVsLCBhY3Rpb24pIHtcblx0XHRhY3Rpb24gPSBhY3Rpb24gfHwgXCJuZXh0XCI7XG5cdFx0aWYgKHRoaXMuX3N0ZXAubmV4dCAmJiBhY3Rpb24gPT09IFwibmV4dFwiIHx8IHRoaXMuX3N0ZXAucHJldmlvdXMgJiYgYWN0aW9uID09PSBcInByZXZpb3VzXCIpIHtcblx0XHRcdGxldCBwcm9taXNlID0gdGhpcy5fc3RlcFthY3Rpb25dKCk7XG5cdFx0XHRpZiAocHJvbWlzZSl7XG5cdFx0XHRcdHByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuX25leHRTdGVwKHN0ZXBFbCwgYWN0aW9uKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9uZXh0U3RlcChzdGVwRWwsIGFjdGlvbik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX25leHRTdGVwKHN0ZXBFbCwgYWN0aW9uKTtcblx0XHR9XG5cdH0sXG5cdF9uZXh0U3RlcChzdGVwRWwsIGFjdGlvbikge1xuXHRcdGxldCBlbCA9IHRoaXMuX2dldEVsKHRoaXMuX3N0ZXAuZWwpO1xuXHRcdGVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIlwiO1xuXHRcdGVsLnN0eWxlLnVzZXJTZWxlY3QgPSBcIlwiO1xuXHRcdGVsLmJsdXIoKTtcblx0XHRpZihhY3Rpb24gIT09IFwicHJldmlvdXNcIikge1xuXHRcdFx0dGhpcy5faSsrO1xuXHRcdFx0dGhpcy5fZHJhd1N0ZXBzKCk7XG5cdFx0XHR0aGlzLmNhbGxFdmVudChcIm9uTmV4dFwiLCBbdGhpcy5faSsxXSk7XG5cdFx0fVxuXHRcdGlmKGFjdGlvbiA9PT0gXCJwcmV2aW91c1wiKSB7XG5cdFx0XHR0aGlzLmNhbGxFdmVudChcIm9uUHJldmlvdXNcIiwgW3RoaXMuX2ldKTtcblx0XHRcdHRoaXMuX3JlZnJlc2godGhpcy5faS0tLCBmYWxzZSk7XG5cdFx0fVxuXHR9LFxuXHRfc2tpcCgpIHtcblx0XHRpZiAodGhpcy5faSA9PT0gLTEpIHJldHVybjtcblx0XHRpZih0aGlzLl9ldmVudE9iaikge1xuXHRcdFx0d2ViaXguZXZlbnRSZW1vdmUodGhpcy5fZXZlbnRPYmopO1xuXHRcdFx0ZGVsZXRlIHRoaXMuX2V2ZW50T2JqO1xuXHRcdH1cblx0XHRpZih0aGlzLl9ldmVudFJlc2l6ZSkge1xuXHRcdFx0d2ViaXguZGV0YWNoRXZlbnQodGhpcy5fZXZlbnRSZXNpemUpO1xuXHRcdFx0ZGVsZXRlIHRoaXMuX2V2ZW50UmVzaXplO1xuXHRcdH1cblx0XHR0aGlzLmNhbGxFdmVudChcIm9uU2tpcFwiLCBbdGhpcy5faSsxXSk7XG5cdFx0dGhpcy5oaWRlKCk7XG5cdFx0dGhpcy5fc2V0Qm9keUNsYXNzKFwicmVtb3ZlXCIpO1xuXHRcdGlmKHRoaXMuX2kgPT09IHRoaXMuY29uZmlnLnN0ZXBzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5jYWxsRXZlbnQoXCJvbkVuZFwiLCBbdGhpcy5faSsxXSk7XG5cdFx0fVxuXHR9LFxuXHRfcmVmcmVzaChpLCBmaXJzdERyYXcpIHtcblx0XHRpZighdGhpcy5fZXZlbnRSZXNpemUpIHtcblx0XHRcdHRoaXMuX3NldFJlc2l6ZSgpO1xuXHRcdH1cblx0XHR0aGlzLl9pID0gaS0xO1xuXHRcdHRoaXMuX3NldEJvZHlDbGFzcygpO1xuXHRcdGlmKHRoaXMuX2hpbnQpIHtcblx0XHRcdGlmKHRoaXMuX2hpbnQucGFyZW50Tm9kZSlcblx0XHRcdFx0dGhpcy5faGludC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX2hpbnQpO1xuXHRcdFx0d2ViaXguaHRtbC5yZW1vdmVDc3ModGhpcy5nZXROb2RlKCksIFwid2ViaXhfaGludF9hbmltYXRlZFwiKTtcblx0XHR9XG5cdFx0dGhpcy5zaG93KCk7XG5cdFx0aWYoZmlyc3REcmF3KSB7XG5cdFx0XHRsZXQgc3ZnID0gdGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpO1xuXHRcdFx0aWYgKHN2Zylcblx0XHRcdFx0c3ZnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3ZnKTtcblx0XHRcdHRoaXMuX2RyYXdTdGVwcygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9kcmF3U3RlcHMoXCJyZWZyZXNoXCIpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJyZWZyZXNoXCIpO1xuXHRcdH1cblx0fSxcblx0c3RhcnQoKSB7XG5cdFx0dGhpcy5fcmVmcmVzaCgxLCB0cnVlKTtcblx0fSxcblx0ZW5kKCkge1xuXHRcdHRoaXMuX3NraXAoKTtcblx0fSxcblx0Z2V0Q3VycmVudFN0ZXAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2krMTtcblx0fSxcblx0cmVzdW1lKHN0ZXBOdW1iZXIpIHtcblx0XHRpZih0aGlzLl9oaW50KXtcblx0XHRcdHN0ZXBOdW1iZXIgPSBzdGVwTnVtYmVyIHx8IDE7XG5cdFx0XHR0aGlzLl9yZWZyZXNoKHN0ZXBOdW1iZXIpO1xuXHRcdH1cblx0fSxcblx0Z2V0U3RlcHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnLnN0ZXBzO1xuXHR9LFxuXHRzZXRTdGVwcyh2YWx1ZSkge1xuXHRcdHRoaXMuZGVmaW5lKFwic3RlcHNcIiwgdmFsdWUpO1xuXHR9XG59LCB3ZWJpeC51aS52aWV3LCB3ZWJpeC5FdmVudFN5c3RlbSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9oaW50LmpzIiwiZXhwb3J0IGxldCBiZSA9IHdlYml4LmkxOG4ubG9jYWxlc1tcImJlLUJZXCJdID0ge1xuXHRoaW50Ontcblx0XHRuZXh0OiBcItCd0LDRgdGC0YPQv9C90YtcIixcblx0XHRwcmV2OiBcItCf0LDQv9GP0YDRjdC00L3RllwiLFxuXHRcdGxhc3Q6IFwi0JrQsNC90LXRhiDQotGD0YDQsFwiXG5cdH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2JlLmpzIiwiLypHZXJtYW4gKEdlcm1hbnkpIGxvY2FsZSovXG5leHBvcnQgbGV0IGRlID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiZGUtREVcIl0gPSB7XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwiTsOkY2hzdGVyXCIsXG5cdFx0cHJldjogXCJCaXNoZXJpZ2VcIixcblx0XHRsYXN0OiBcIkVuZGUgVG91clwiXG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vZGUuanMiLCJleHBvcnQgbGV0IGVuID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiZW4tVVNcIl09e1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIk5leHRcIixcblx0XHRwcmV2OiBcIlByZXZpb3VzXCIsXG5cdFx0bGFzdDogXCJFbmQgVG91clwiXG5cdH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2VuLmpzIiwiLypTcGFuaXNoIChTcGFpbiwgSW50ZXJuYXRpb25hbCBTb3J0KSBsb2NhbGUqL1xuZXhwb3J0IGxldCBlcyA9IHdlYml4LmkxOG4ubG9jYWxlc1tcImVzLUVTXCJdID0ge1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIlNpZ3VpZW50ZVwiLFxuXHRcdHByZXY6IFwiQW50ZXJpb3JcIixcblx0XHRsYXN0OiBcIkZpbiBkZSBWaWFqZVwiXG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vZXMuanMiLCJleHBvcnQgbGV0IGZyID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiZnItRlJcIl09e1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIlByb2NoYWluXCIsXG5cdFx0cHJldjogXCJQcsOpY8OpZGVudFwiLFxuXHRcdGxhc3Q6IFwiRW5kIFRvdXJcIlxuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9mci5qcyIsIi8qSXRhbGlhbiAoSXRhbHkpIGxvY2FsZSovXG5leHBvcnQgbGV0IGl0ID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiaXQtSVRcIl0gPSB7XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwiU2VndWVudGVcIixcblx0XHRwcmV2OiBcIlByZWNlZGVudGVcIixcblx0XHRsYXN0OiBcIkVuZCBUb3VyXCJcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9pdC5qcyIsImV4cG9ydCBsZXQgamEgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJqYS1KUFwiXT17XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwi5qyhXCIsXG5cdFx0cHJldjogXCLliY1cIixcblx0XHRsYXN0OiBcIue1guS6huODhOOCouODvFwiXG5cdH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2phLmpzIiwiZXhwb3J0IGxldCBwdCA9IHdlYml4LmkxOG4ubG9jYWxlc1tcInB0LUJSXCJdID0ge1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIlByw7N4aW1vXCIsXG5cdFx0cHJldjogXCJBbnRlcmlvclwiLFxuXHRcdGxhc3Q6IFwiRW5kIFRvdXJcIlxuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL3B0LmpzIiwiZXhwb3J0IGxldCBydSA9IHdlYml4LmkxOG4ubG9jYWxlc1tcInJ1LVJVXCJdPXtcblx0aGludDp7XG5cdFx0bmV4dDogXCLQodC70LXQtNGD0Y7RidC40LlcIixcblx0XHRwcmV2OiBcItCf0YDQtdC00YvQtNGD0YnQuNC5XCIsXG5cdFx0bGFzdDogXCLQmtC+0L3QtdGGINCi0YPRgNCwXCJcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vcnUuanMiLCIvKkNoaW5lc2UgKFNpbXBsaWZpZWQsIFBSQykgbG9jYWxlKi9cbmV4cG9ydCBsZXQgemggPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJ6aC1DTlwiXSA9IHtcblx0aGludDp7XG5cdFx0bmV4dDogXCLkuIvkuIDkuKpcIixcblx0XHRwcmV2OiBcIuS7peWJjVwiLFxuXHRcdGxhc3Q6IFwi57uT5p2f5beh6KeGXCJcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi96aC5qcyJdLCJzb3VyY2VSb290IjoiIn0=