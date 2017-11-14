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
		setTimeout(function () {
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
		if (body.classList.contains("webix_hint_overflow") || remove) {
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
				webix.html.removeCss(_this5.getNode(), "webix_hint_animated");
				_this5._hint.parentNode.removeChild(_this5._hint);
				_this5._i -= 2;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjU1MTY0Mjk0ZWM2ZGQwODAwYzMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9sb2NhbGVzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5sZXNzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vYmUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL2RlLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9lbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL2ZyLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9pdC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vamEuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL3B0LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9ydS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vemguanMiXSwibmFtZXMiOlsibG9jYWxlIiwiaGludCIsIm5leHQiLCJwcmV2IiwibGFzdCIsIndlYml4IiwiaTE4biIsImV4dGVuZCIsInByb3RvVUkiLCJuYW1lIiwiZGVmYXVsdHMiLCJzdGVwcyIsImJvcmRlcmxlc3MiLCJuZXh0QnV0dG9uIiwicHJldkJ1dHRvbiIsIiRpbml0IiwiJHZpZXciLCJjbGFzc05hbWUiLCJfaSIsImF0dGFjaEV2ZW50IiwiX3NldEJvZHlDbGFzcyIsIl9ldmVudE9iaiIsImV2ZW50UmVtb3ZlIiwiX2V2ZW50T2JqRXNjIiwiX2V2ZW50UmVzaXplIiwiZGV0YWNoRXZlbnQiLCJldmVudCIsImRvY3VtZW50IiwiYm9keSIsImUiLCJrZXlDb2RlIiwiX3NraXAiLCJfc2V0UmVzaXplIiwic3RlcHNfc2V0dGVyIiwiY29uZmlnIiwibmV3Q29uZmlnIiwiaSIsImxlbmd0aCIsInBhZGRpbmciLCJ0ZXh0IiwicHVzaCIsIl9kcmF3T3ZlciIsInN0ZXBFbCIsImlubmVySFRNTCIsIl9zZXRQcm9wZXJ0aWVzIiwiY2FsbEV2ZW50IiwiX2RyYXdIaW50Iiwic2V0dGluZ3MiLCJfc3RlcCIsInRpdGxlIiwicmVmcmVzaCIsImVudiIsIm1vYmlsZSIsInNjcm9sbEludG9WaWV3IiwiX3JlRHJhdyIsIl9oaW50IiwicXVlcnlTZWxlY3RvciIsImRvY0VsZW0iLCJkb2N1bWVudEVsZW1lbnQiLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbExlZnQiLCJsZWZ0IiwiaGlnaGxpZ2h0V2lkdGgiLCJ3aWR0aCIsImhpZ2hsaWdodEhlaWdodCIsImhlaWdodCIsImhpbnRMZWZ0IiwiaGludFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJoaW50SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZWxUb3AiLCJ0b3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImhpbnRUb3AiLCJ3aW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsIk1hdGgiLCJtaW4iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwidXNlclNlbGVjdCIsInNldFRpbWVvdXQiLCJjc3NUZXh0IiwiX3NldEF0dHJpYnV0ZXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaHRtbCIsImFkZENzcyIsImdldE5vZGUiLCJnZXRDdXJyZW50U3RlcCIsIl9yZWZyZXNoIiwiZWwiLCJhdHRycyIsImtleSIsInNldEF0dHJpYnV0ZSIsImV2ZW50RWwiLCJfZ2V0RWwiLCJyZW1vdmVDc3MiLCJfc2V0RXZlbnRzQnV0dG9ucyIsIm1hcmdpbiIsIl9zZXRFbEV2ZW50cyIsIl9wcmV2QnV0dG9uIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJfbmV4dEJ1dHRvbiIsInJlbW92ZSIsIiQkIiwiX2RyYXdTdGVwcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfbmV4dCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImV2ZW50U3RlcCIsImZvY3VzIiwidHlwZSIsImFjdGlvbiIsInByZXZpb3VzIiwicHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX25leHRTdGVwIiwiYmx1ciIsImhpZGUiLCJmaXJzdERyYXciLCJzaG93Iiwic3ZnIiwic3RhcnQiLCJlbmQiLCJyZXN1bWUiLCJzdGVwTnVtYmVyIiwiZ2V0U3RlcHMiLCJzZXRTdGVwcyIsInZhbHVlIiwiZGVmaW5lIiwidWkiLCJ2aWV3IiwiRXZlbnRTeXN0ZW0iLCJiZSIsImxvY2FsZXMiLCJkZSIsImVuIiwiZXMiLCJmciIsIml0IiwiamEiLCJwdCIsInJ1IiwiemgiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVPLElBQUlBLDBCQUFTO0FBQ25CQyxPQUFNO0FBQ0xDLFFBQU0sTUFERDtBQUVMQyxRQUFNLFVBRkQ7QUFHTEMsUUFBTTtBQUhEO0FBRGEsQ0FBYixDOzs7Ozs7QUNYUCx5Qzs7Ozs7Ozs7O0FDQUE7O0FBQ0E7O0FBRUFDLE1BQU1DLElBQU4sQ0FBV0wsSUFBWCxHQUFrQkksTUFBTUUsTUFBTixDQUFhRixNQUFNQyxJQUFuQixtQkFBaUNMLElBQW5EOztBQUVBSSxNQUFNRyxPQUFOLENBQWM7QUFDYkMsT0FBTSxNQURPO0FBRWJDLFdBQVU7QUFDVEMsU0FBTyxFQURFO0FBRVRDLGNBQVksSUFGSDtBQUdUQyxjQUFZLElBSEg7QUFJVEMsY0FBWTtBQUpILEVBRkc7QUFRYkMsTUFSYSxtQkFRTDtBQUFBOztBQUNQLE9BQUtDLEtBQUwsQ0FBV0MsU0FBWCxJQUF3QixrQkFBeEI7QUFDQSxPQUFLQyxFQUFMLEdBQVUsQ0FBQyxDQUFYO0FBQ0EsT0FBS0MsV0FBTCxDQUFpQixZQUFqQixFQUErQixZQUFNO0FBQ3BDLFNBQUtDLGFBQUwsQ0FBbUIsUUFBbkI7QUFDQSxPQUFHLE1BQUtDLFNBQVIsRUFBbUI7QUFDbEJoQixVQUFNaUIsV0FBTixDQUFrQixNQUFLRCxTQUF2QjtBQUNBO0FBQ0QsT0FBRyxNQUFLRSxZQUFSLEVBQXNCO0FBQ3JCbEIsVUFBTWlCLFdBQU4sQ0FBa0IsTUFBS0MsWUFBdkI7QUFDQTtBQUNELE9BQUcsTUFBS0MsWUFBUixFQUFzQjtBQUNyQm5CLFVBQU1vQixXQUFOLENBQWtCLE1BQUtELFlBQXZCO0FBQ0E7QUFDRCxHQVhEO0FBWUEsT0FBS0QsWUFBTCxHQUFvQmxCLE1BQU1xQixLQUFOLENBQVlDLFNBQVNDLElBQXJCLEVBQTBCLFNBQTFCLEVBQXFDLFVBQUNDLENBQUQsRUFBTztBQUMvRDtBQUNBLE9BQUlBLEVBQUVDLE9BQUYsSUFBYSxFQUFqQixFQUFvQjtBQUNuQixVQUFLQyxLQUFMO0FBQ0E7QUFDRCxHQUxtQixDQUFwQjtBQU1BLE9BQUtDLFVBQUw7QUFDQSxFQTlCWTtBQStCYkMsYUEvQmEsd0JBK0JBQyxNQS9CQSxFQStCUTtBQUNwQixNQUFJQyxZQUFZLEVBQWhCO0FBQ0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLE9BQU9HLE1BQTNCLEVBQW1DRCxHQUFuQyxFQUF3QztBQUN2Q0YsVUFBT0UsQ0FBUCxFQUFVRSxPQUFWLEdBQW9CSixPQUFPRSxDQUFQLEVBQVVFLE9BQVYsSUFBcUIsQ0FBekM7QUFDQUosVUFBT0UsQ0FBUCxFQUFVRyxJQUFWLEdBQWlCTCxPQUFPRSxDQUFQLEVBQVVHLElBQVYsSUFBa0IsRUFBbkM7QUFDQUosYUFBVUssSUFBVixDQUFlTixPQUFPRSxDQUFQLENBQWY7QUFDQTtBQUNELFNBQU9ELFNBQVA7QUFDQSxFQXZDWTtBQXdDYk0sVUF4Q2EscUJBd0NIQyxNQXhDRyxFQXdDSztBQUNqQixPQUFLMUIsS0FBTCxDQUFXMkIsU0FBWDtBQVNBLE9BQUtDLGNBQUwsQ0FBb0JGLE1BQXBCO0FBQ0EsT0FBS0csU0FBTCxDQUFlLGNBQWYsRUFBK0IsRUFBL0I7QUFDQSxFQXBEWTtBQXFEYkMsVUFyRGEsdUJBcUREO0FBQ1gsTUFBSUMsV0FBVyxLQUFLYixNQUFwQjtBQUNBLE9BQUtsQixLQUFMLENBQVcyQixTQUFYLDJFQUNrQyxLQUFLSyxLQUFMLENBQVdDLEtBQVgsR0FBaUIsS0FBS0QsS0FBTCxDQUFXQyxLQUE1QixHQUFrQyxFQURwRSxzREFFK0IsS0FBS0QsS0FBTCxDQUFXVCxJQUYxQyxrRUFJSSxLQUFLckIsRUFBTCxHQUFRLENBSlosVUFJaUIsS0FBS2dCLE1BQUwsQ0FBWXZCLEtBQVosQ0FBa0IwQixNQUpuQywyRUFPSVUsU0FBU2pDLFVBQVQsS0FBdUIsS0FBdkIsNkZBQWtILE9BQU9pQyxTQUFTakMsVUFBaEIsSUFBOEIsUUFBOUIsR0FBdUNpQyxTQUFTakMsVUFBaEQsUUFBOERULE1BQU1DLElBQU4sQ0FBV0wsSUFBWCxDQUFnQkUsSUFBaE0sa0JBQWtOLEVBUHROLG9CQVFJNEMsU0FBU2xDLFVBQVQsS0FBdUIsS0FBdkIsb0VBQXlGLE9BQU9rQyxTQUFTbEMsVUFBaEIsSUFBOEIsUUFBOUIsR0FBdUNrQyxTQUFTbEMsVUFBaEQsUUFBOERSLE1BQU1DLElBQU4sQ0FBV0wsSUFBWCxDQUFnQkMsSUFBdkssa0JBQXlMLEVBUjdMO0FBWUEsRUFuRVk7QUFvRWIwQyxlQXBFYSwwQkFvRUVGLE1BcEVGLEVBb0VVUSxPQXBFVixFQW9FbUI7QUFBQTs7QUFDL0IsTUFBRyxDQUFDUixNQUFKLEVBQVk7QUFDWDtBQUNBOztBQUVELE1BQUcsQ0FBQ3JDLE1BQU04QyxHQUFOLENBQVVDLE1BQWQsRUFBc0I7QUFDckJWLFVBQU9XLGNBQVAsQ0FBc0IsS0FBdEI7QUFDQTtBQUNELE9BQUtMLEtBQUwsR0FBYSxLQUFLZCxNQUFMLENBQVl2QixLQUFaLENBQWtCLEtBQUtPLEVBQXZCLENBQWI7QUFDQSxPQUFLb0MsT0FBTCxDQUFhWixNQUFiLEVBQXFCUSxPQUFyQjtBQUNBLE9BQUtLLEtBQUwsR0FBYSxLQUFLdkMsS0FBTCxDQUFXd0MsYUFBWCxDQUF5QixhQUF6QixDQUFiOztBQUVBLE1BQUlsQixVQUFVLEVBQWQ7QUFDQSxNQUFJbUIsVUFBVTlCLFNBQVMrQixlQUF2QjtBQUNBLE1BQUlDLE1BQU1qQixPQUFPa0IscUJBQVAsRUFBVjtBQUNBLE1BQUlDLFNBQVNGLElBQUlHLElBQUosR0FBVyxLQUFLZCxLQUFMLENBQVdWLE9BQW5DO0FBQ0EsTUFBSXlCLGlCQUFpQkosSUFBSUssS0FBekI7QUFDQSxNQUFJQyxrQkFBa0JOLElBQUlPLE1BQTFCO0FBQ0EsTUFBSUMsV0FBV04sU0FBUyxLQUFLYixLQUFMLENBQVdWLE9BQW5DO0FBQ0EsTUFBSThCLFlBQVksS0FBS2IsS0FBTCxDQUFXYyxXQUEzQjtBQUNBLE1BQUlDLGFBQWEsS0FBS2YsS0FBTCxDQUFXZ0IsWUFBNUI7QUFDQSxNQUFJQyxRQUFRbkUsTUFBTThDLEdBQU4sQ0FBVUMsTUFBVixHQUFtQk8sSUFBSWMsR0FBSixHQUFVLEtBQUt6QixLQUFMLENBQVdWLE9BQXhDLEdBQWtEcUIsSUFBSWMsR0FBSixHQUFVLEtBQUt6QixLQUFMLENBQVdWLE9BQXJCLEdBQStCb0MsT0FBT0MsV0FBcEc7QUFDQSxNQUFJQyxVQUFVSixRQUFRUCxlQUFSLEdBQTBCLEtBQUtqQixLQUFMLENBQVdWLE9BQXJDLEdBQStDQSxPQUE3RDtBQUNBLE1BQUl1QyxjQUFjSCxPQUFPSSxVQUFQLElBQXFCckIsUUFBUXNCLFdBQTdCLEdBQTJDQyxLQUFLQyxHQUFMLENBQVNQLE9BQU9JLFVBQWhCLEVBQTRCckIsUUFBUXNCLFdBQXBDLENBQTNDLEdBQThGTCxPQUFPSSxVQUFQLElBQXFCckIsUUFBUXNCLFdBQTdCLElBQTRDcEQsU0FBU3VELG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLEVBQXlDSCxXQUFyTTtBQUNBLE1BQUlJLGVBQWVULE9BQU9VLFdBQVAsSUFBc0IzQixRQUFRNEIsWUFBOUIsR0FBNkNMLEtBQUtDLEdBQUwsQ0FBU1AsT0FBT1UsV0FBaEIsRUFBNkIzQixRQUFRNEIsWUFBckMsQ0FBN0MsR0FBa0dYLE9BQU9VLFdBQVAsSUFBc0IzQixRQUFRNEIsWUFBOUIsSUFBOEMxRCxTQUFTdUQsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsRUFBeUNHLFlBQTVNOztBQUVBM0MsU0FBTzRDLEtBQVAsQ0FBYUMsYUFBYixHQUE2QixLQUE3QjtBQUNBN0MsU0FBTzRDLEtBQVAsQ0FBYUUsVUFBYixHQUEwQixTQUExQjs7QUFFQTtBQUNBLE1BQUczQixTQUFTZ0IsV0FBVCxHQUF1QixDQUExQixFQUE2QjtBQUM1QmhCLFlBQVNBLFNBQVNnQixXQUFULEdBQXVCVCxTQUF2QixHQUFtQ0wsY0FBNUM7QUFDQTs7QUFFRCxNQUFHb0IsZUFBYyxDQUFkLEdBQWtCWCxLQUFyQixFQUE0QjtBQUFFO0FBQzdCSSxhQUFVSixRQUFRRixVQUFSLEdBQXFCaEMsT0FBckIsR0FBK0IsS0FBS1UsS0FBTCxDQUFXVixPQUFYLEdBQW1CLENBQTVEO0FBQ0EsR0FGRCxNQUVPLElBQUd1QyxjQUFhLENBQWIsR0FBaUJoQixNQUFqQixJQUEyQkEsU0FBU08sU0FBVCxHQUFxQlMsV0FBaEQsSUFBK0RkLGlCQUFpQkssU0FBakIsR0FBNkJTLFdBQS9GLEVBQTRHO0FBQUU7QUFDcEhELGFBQVVYLGtCQUFrQixDQUFsQixHQUFzQk8sS0FBdEIsR0FBOEIsS0FBS3hCLEtBQUwsQ0FBV1YsT0FBbkQ7QUFDQTZCLGNBQVdOLFNBQVNPLFNBQVQsR0FBcUIsS0FBS3BCLEtBQUwsQ0FBV1YsT0FBaEMsR0FBMENBLE9BQXJEO0FBQ0EsR0FITSxNQUdBLElBQUd1QyxjQUFhLENBQWIsR0FBaUJoQixNQUFqQixJQUEyQkEsU0FBU08sU0FBVCxHQUFxQkwsY0FBckIsR0FBc0NjLFdBQXBFLEVBQWlGO0FBQUU7QUFDekZWLGNBQVdKLGlCQUFpQkYsTUFBakIsR0FBMEJ2QixPQUFyQztBQUNBc0MsYUFBVUosUUFBUSxLQUFLeEIsS0FBTCxDQUFXVixPQUE3QjtBQUNBLEdBSE0sTUFHQSxJQUFHc0MsVUFBUU8sWUFBUixJQUF3QmIsYUFBV0wsZUFBWCxHQUEyQmtCLFlBQXRELEVBQW1FO0FBQUM7QUFDMUVQLGFBQVVKLFFBQVFGLFVBQVIsR0FBcUJoQyxPQUFyQixHQUErQixLQUFLVSxLQUFMLENBQVdWLE9BQVgsR0FBbUIsQ0FBNUQ7QUFDQSxHQUZNLE1BRUEsSUFBR3NDLFVBQVNPLFlBQVQsSUFBeUJQLFVBQVFOLFVBQVIsR0FBbUJhLFlBQS9DLEVBQTREO0FBQ2xFaEIsY0FBV04sU0FBU08sU0FBVCxHQUFxQixLQUFLcEIsS0FBTCxDQUFXVixPQUFYLEdBQW1CLENBQXhDLEdBQTRDQSxPQUF2RDtBQUNBc0MsYUFBVUosUUFBUSxLQUFLeEIsS0FBTCxDQUFXVixPQUE3QjtBQUNBOztBQUVELE1BQUc2QixXQUFXQyxTQUFYLEdBQXVCUyxXQUExQixFQUF1QztBQUFFO0FBQ3hDVixjQUFXVSxjQUFjVCxTQUF6QjtBQUNBLEdBRkQsTUFFTyxJQUFHUSxVQUFVLENBQVYsSUFBZUEsVUFBVU8sWUFBNUIsRUFBMEM7QUFDaERQLGFBQVV0QyxPQUFWO0FBQ0EsR0FGTSxNQUVBLElBQUd1QyxjQUFjZCxjQUFkLElBQWdDSSxXQUFXLENBQTlDLEVBQWlEO0FBQ3ZEQSxjQUFXN0IsT0FBWDtBQUNBO0FBQ0QsTUFBR2pDLE1BQU04QyxHQUFOLENBQVVDLE1BQWIsRUFBcUI7QUFDcEJWLFVBQU9XLGNBQVAsQ0FBc0IsS0FBdEI7QUFDQTtBQUNEb0MsYUFBVyxZQUFNO0FBQ2hCLFVBQUtsQyxLQUFMLENBQVcrQixLQUFYLENBQWlCSSxPQUFqQixZQUFrQ2QsT0FBbEMsaUJBQXFEVCxRQUFyRDtBQUNBLFVBQUt3QixjQUFMLENBQW9CLE9BQUszRSxLQUFMLENBQVc0RSxzQkFBWCxDQUFrQyw0QkFBbEMsRUFBZ0UsQ0FBaEUsQ0FBcEIsRUFBd0YsRUFBQyxLQUFJL0IsU0FBTyxPQUFLYixLQUFMLENBQVdWLE9BQVgsR0FBbUIsQ0FBL0IsRUFBa0MsS0FBSWtDLFFBQU0sT0FBS3hCLEtBQUwsQ0FBV1YsT0FBWCxHQUFtQixDQUEvRCxFQUFrRSxTQUFReUIsaUJBQWUsT0FBS2YsS0FBTCxDQUFXVixPQUFYLEdBQW9CLENBQTdHLEVBQWdILFVBQVMyQixrQkFBZ0IsT0FBS2pCLEtBQUwsQ0FBV1YsT0FBWCxHQUFtQixDQUE1SixFQUF4RjtBQUNBakMsU0FBTXdGLElBQU4sQ0FBV0MsTUFBWCxDQUFrQixPQUFLQyxPQUFMLEVBQWxCLEVBQWtDLHFCQUFsQztBQUNBLEdBSkQsRUFJRyxHQUpIO0FBS0EsRUFwSVk7QUFxSWIvRCxXQXJJYSx3QkFxSUE7QUFBQTs7QUFDWixPQUFLUixZQUFMLEdBQW9CbkIsTUFBTWMsV0FBTixDQUFrQixVQUFsQixFQUE4QixZQUFNO0FBQ3ZELE9BQUcsT0FBSzZFLGNBQUwsTUFBeUIsT0FBSzlFLEVBQUwsS0FBWSxPQUFLZ0IsTUFBTCxDQUFZdkIsS0FBWixDQUFrQjBCLE1BQTFELEVBQWtFO0FBQ2pFLFdBQUs0RCxRQUFMLENBQWMsT0FBS0QsY0FBTCxFQUFkLEVBQXFDLEtBQXJDLEVBQTRDLElBQTVDO0FBQ0E7QUFDRCxHQUptQixDQUFwQjtBQUtBLEVBM0lZO0FBNEliTCxlQTVJYSwwQkE0SUVPLEVBNUlGLEVBNElNQyxLQTVJTixFQTRJYTtBQUN6QixPQUFJLElBQUlDLEdBQVIsSUFBZUQsS0FBZixFQUFzQjtBQUNyQkQsTUFBR0csWUFBSCxDQUFnQkQsR0FBaEIsRUFBcUJELE1BQU1DLEdBQU4sQ0FBckI7QUFDQTtBQUNELEVBaEpZO0FBaUpiOUMsUUFqSmEsbUJBaUpMWixNQWpKSyxFQWlKR1EsT0FqSkgsRUFpSlk7QUFDeEIsTUFBSUQsUUFBUSxLQUFLakMsS0FBTCxDQUFXd0MsYUFBWCxDQUF5QixtQkFBekIsQ0FBWjtBQUNBLE1BQUkwQyxXQUFKOztBQUVBLE9BQUtsRCxLQUFMLENBQVdzRCxPQUFYLEdBQW1CSixLQUFLLEtBQUtLLE1BQUwsQ0FBWSxLQUFLdkQsS0FBTCxDQUFXc0QsT0FBdkIsQ0FBeEIsR0FBd0RKLEtBQUt4RCxNQUE3RDtBQUNBLE1BQUcsS0FBS3hCLEVBQUwsR0FBVSxDQUFWLElBQWUsQ0FBQ2dDLE9BQW5CLEVBQTRCO0FBQzNCN0MsU0FBTXdGLElBQU4sQ0FBV1csU0FBWCxDQUFxQixLQUFLVCxPQUFMLEVBQXJCLEVBQXFDLHFCQUFyQztBQUNBOUMsU0FBTU4sU0FBTixHQUFrQixLQUFLSyxLQUFMLENBQVdDLEtBQVgsSUFBb0IsRUFBdEM7QUFDQSxRQUFLakMsS0FBTCxDQUFXd0MsYUFBWCxDQUF5QixtQkFBekIsRUFBOENiLFNBQTlDLEdBQTBELEtBQUtLLEtBQUwsQ0FBV1QsSUFBWCxJQUFtQixFQUE3RTtBQUNBLFFBQUt2QixLQUFMLENBQVd3QyxhQUFYLENBQXlCLHNCQUF6QixFQUFpRGIsU0FBakQsR0FBZ0UsS0FBS3pCLEVBQUwsR0FBUSxDQUF4RSxTQUE2RSxLQUFLZ0IsTUFBTCxDQUFZdkIsS0FBWixDQUFrQjBCLE1BQS9GO0FBQ0EsR0FMRCxNQUtPO0FBQ04sUUFBS1MsU0FBTDtBQUNBLFFBQUsyRCxpQkFBTCxDQUF1QlAsRUFBdkI7QUFDQTtBQUNELE1BQUcsQ0FBQyxLQUFLbEQsS0FBTCxDQUFXQyxLQUFaLElBQXFCQSxLQUF4QixFQUErQjtBQUM5QkEsU0FBTXFDLEtBQU4sQ0FBWW9CLE1BQVosR0FBcUIsR0FBckI7QUFDQTtBQUNELE9BQUtDLFlBQUwsQ0FBa0JULEVBQWxCOztBQUVBLE1BQUcsS0FBS1UsV0FBUixFQUFxQjtBQUNwQixPQUFHLEtBQUsxRixFQUFMLEdBQVUsQ0FBYixFQUFnQjtBQUFFO0FBQ2pCYixVQUFNd0YsSUFBTixDQUFXVyxTQUFYLENBQXFCLEtBQUtJLFdBQTFCLEVBQXVDLDBCQUF2QztBQUNBLElBRkQsTUFFTyxJQUFHLEtBQUtBLFdBQUwsSUFBb0IsQ0FBQyxLQUFLQSxXQUFMLENBQWlCQyxTQUFqQixDQUEyQkMsUUFBM0IsQ0FBb0MsMEJBQXBDLENBQXhCLEVBQXlGO0FBQy9GekcsVUFBTXdGLElBQU4sQ0FBV0MsTUFBWCxDQUFrQixLQUFLYyxXQUF2QixFQUFvQywwQkFBcEM7QUFDQTtBQUNEOztBQUVELE1BQUcsS0FBSzFGLEVBQUwsS0FBWSxLQUFLZ0IsTUFBTCxDQUFZdkIsS0FBWixDQUFrQjBCLE1BQWxCLEdBQTBCLENBQXRDLElBQTJDLEtBQUswRSxXQUFuRCxFQUFnRTtBQUFFO0FBQ2pFLFFBQUtBLFdBQUwsQ0FBaUJwRSxTQUFqQixTQUFnQyxPQUFPLEtBQUtULE1BQUwsQ0FBWXJCLFVBQW5CLElBQWlDLFFBQWpDLEdBQTBDLEtBQUtxQixNQUFMLENBQVlyQixVQUF0RCxRQUFvRVIsTUFBTUMsSUFBTixDQUFXTCxJQUFYLENBQWdCRyxJQUFwSDtBQUNBO0FBQ0QsRUEvS1k7QUFnTGJnQixjQWhMYSx5QkFnTEM0RixNQWhMRCxFQWdMUztBQUNyQixNQUFJcEYsT0FBT0QsU0FBU0MsSUFBcEI7QUFDQSxNQUFHQSxLQUFLaUYsU0FBTCxDQUFlQyxRQUFmLENBQXdCLHFCQUF4QixLQUFrREUsTUFBckQsRUFBNkQ7QUFDNUQzRyxTQUFNd0YsSUFBTixDQUFXVyxTQUFYLENBQXFCNUUsSUFBckIsRUFBMkIscUJBQTNCO0FBQ0EsR0FGRCxNQUVPO0FBQ052QixTQUFNd0YsSUFBTixDQUFXQyxNQUFYLENBQWtCbEUsSUFBbEIsRUFBd0IscUJBQXhCO0FBQ0E7QUFDRCxFQXZMWTtBQXdMYjJFLE9BeExhLGtCQXdMTkwsRUF4TE0sRUF3TEY7QUFDVixNQUFHZSxHQUFHZixFQUFILENBQUgsRUFBVztBQUNWLFVBQU9lLEdBQUdmLEVBQUgsRUFBT0gsT0FBUCxFQUFQO0FBQ0EsR0FGRCxNQUVPO0FBQ04sVUFBT3BFLFNBQVM2QixhQUFULENBQXVCMEMsRUFBdkIsQ0FBUDtBQUNBO0FBQ0QsRUE5TFk7QUErTGJnQixXQS9MYSxzQkErTEZoRSxPQS9MRSxFQStMTztBQUFBOztBQUNuQixNQUFHLEtBQUtoQixNQUFMLENBQVl2QixLQUFaLENBQWtCLEtBQUtPLEVBQXZCLENBQUgsRUFBK0I7QUFDOUIsT0FBSWdGLEtBQUssS0FBS0ssTUFBTCxDQUFZLEtBQUtyRSxNQUFMLENBQVl2QixLQUFaLENBQWtCLEtBQUtPLEVBQXZCLEVBQTJCZ0YsRUFBdkMsQ0FBVDtBQUNBLE9BQUcsS0FBS2hGLEVBQUwsS0FBWSxDQUFaLElBQWlCLENBQUNnQyxPQUFyQixFQUE4QjtBQUM3QixTQUFLTCxTQUFMLENBQWUsZUFBZixFQUFnQyxFQUFoQztBQUNBNEMsZUFBVyxZQUFNO0FBQUU7QUFDbEIsWUFBS2hELFNBQUwsQ0FBZXlELEVBQWY7QUFDQSxLQUZELEVBRUcsR0FGSDtBQUdBLElBTEQsTUFLTztBQUNOLFNBQUt0RCxjQUFMLENBQW9Cc0QsRUFBcEIsRUFBd0JoRCxPQUF4QjtBQUNBO0FBQ0QsR0FWRCxNQVVPO0FBQ04sUUFBS25CLEtBQUw7QUFDQTtBQUNELEVBN01ZO0FBOE1iMEUsa0JBOU1hLCtCQThNTztBQUFBOztBQUNuQixPQUFLRyxXQUFMLEdBQW1CLEtBQUs1RixLQUFMLENBQVdtRyxnQkFBWCxDQUE0Qix5QkFBNUIsRUFBdUQsQ0FBdkQsQ0FBbkI7QUFDQSxPQUFLSixXQUFMLEdBQW1CLEtBQUsvRixLQUFMLENBQVdtRyxnQkFBWCxDQUE0Qix5QkFBNUIsRUFBdUQsQ0FBdkQsQ0FBbkI7QUFDQSxNQUFJakIsV0FBSjtBQUNBLE1BQUcsS0FBS2EsV0FBUixFQUFxQjtBQUNwQjFHLFNBQU1xQixLQUFOLENBQVksS0FBS3FGLFdBQWpCLEVBQThCLE9BQTlCLEVBQXVDLFlBQU07QUFDNUMsV0FBS0ssS0FBTCxDQUFXbEIsRUFBWCxFQUFlLE1BQWY7QUFDQSxJQUZEO0FBR0E7QUFDRCxNQUFHLEtBQUtVLFdBQVIsRUFBcUI7QUFDcEJ2RyxTQUFNcUIsS0FBTixDQUFZLEtBQUtrRixXQUFqQixFQUE4QixPQUE5QixFQUF1QyxZQUFNO0FBQzVDdkcsVUFBTXdGLElBQU4sQ0FBV1csU0FBWCxDQUFxQixPQUFLVCxPQUFMLEVBQXJCLEVBQXFDLHFCQUFyQztBQUNBLFdBQUt4QyxLQUFMLENBQVc4RCxVQUFYLENBQXNCQyxXQUF0QixDQUFrQyxPQUFLL0QsS0FBdkM7QUFDQSxXQUFLckMsRUFBTCxJQUFXLENBQVg7QUFDQSxXQUFLa0csS0FBTCxDQUFXbEIsRUFBWCxFQUFlLFVBQWY7QUFDQSxJQUxEO0FBTUE7QUFDRDdGLFFBQU1xQixLQUFOLENBQVksS0FBS1YsS0FBTCxDQUFXd0MsYUFBWCxDQUF5QiwwQkFBekIsQ0FBWixFQUFrRSxPQUFsRSxFQUEyRSxZQUFNO0FBQUUsVUFBS3pCLEtBQUw7QUFBZSxHQUFsRztBQUNBLEVBaE9ZO0FBaU9iNEUsYUFqT2Esd0JBaU9BakUsTUFqT0EsRUFpT1E7QUFBQTs7QUFDcEIsTUFBSTZFLFlBQVksS0FBS3ZFLEtBQUwsQ0FBV3RCLEtBQTNCO0FBQ0FnQixTQUFPOEUsS0FBUDtBQUNBLE1BQUdELFNBQUgsRUFBYztBQUNiLE9BQUdBLGNBQWMsT0FBakIsRUFBMEI7QUFDekJBLGdCQUFZLFNBQVo7QUFDQTtBQUNELE9BQUcsS0FBS2xHLFNBQVIsRUFBbUI7QUFDbEJoQixVQUFNaUIsV0FBTixDQUFrQixLQUFLRCxTQUF2QjtBQUNBO0FBQ0QsUUFBS0EsU0FBTCxHQUFpQmhCLE1BQU1xQixLQUFOLENBQVlnQixNQUFaLEVBQW9CNkUsU0FBcEIsRUFBK0IsVUFBQzFGLENBQUQsRUFBTztBQUN0RCxRQUFHMEYsYUFBYTFGLEVBQUU0RixJQUFsQixFQUF3QjtBQUN2QixTQUFHNUYsRUFBRTRGLElBQUYsS0FBVyxTQUFYLElBQXdCNUYsRUFBRUMsT0FBRixLQUFjLEVBQXpDLEVBQTZDO0FBQzdDWSxZQUFPOEUsS0FBUDtBQUNBLFlBQUtKLEtBQUwsQ0FBVzFFLE1BQVg7QUFDQTtBQUNELElBTmdCLENBQWpCO0FBT0EsR0FkRCxNQWNPO0FBQ047QUFDQTtBQUNELEVBclBZO0FBc1BiMEUsTUF0UGEsaUJBc1BQMUUsTUF0UE8sRUFzUENnRixNQXRQRCxFQXNQUztBQUFBOztBQUNyQkEsV0FBU0EsVUFBVSxNQUFuQjtBQUNBLE1BQUksS0FBSzFFLEtBQUwsQ0FBVzlDLElBQVgsSUFBbUJ3SCxXQUFXLE1BQTlCLElBQXdDLEtBQUsxRSxLQUFMLENBQVcyRSxRQUFYLElBQXVCRCxXQUFXLFVBQTlFLEVBQTBGO0FBQ3pGLE9BQUlFLFVBQVUsS0FBSzVFLEtBQUwsQ0FBVzBFLE1BQVgsR0FBZDtBQUNBLE9BQUlFLE9BQUosRUFBWTtBQUNYQSxZQUFRQyxPQUFSLEdBQWtCQyxJQUFsQixDQUF1QixZQUFNO0FBQzVCLFlBQUtDLFNBQUwsQ0FBZXJGLE1BQWYsRUFBdUJnRixNQUF2QjtBQUNBLEtBRkQ7QUFHQTtBQUNELEdBUEQsTUFPTztBQUNOLFFBQUtLLFNBQUwsQ0FBZXJGLE1BQWYsRUFBdUJnRixNQUF2QjtBQUNBO0FBQ0QsRUFsUVk7QUFtUWJLLFVBblFhLHFCQW1RSHJGLE1BblFHLEVBbVFLZ0YsTUFuUUwsRUFtUWE7QUFDekIsTUFBSXhCLEtBQUssS0FBS0ssTUFBTCxDQUFZLEtBQUt2RCxLQUFMLENBQVdrRCxFQUF2QixDQUFUO0FBQ0FBLEtBQUdaLEtBQUgsQ0FBU0MsYUFBVCxHQUF5QixFQUF6QjtBQUNBVyxLQUFHWixLQUFILENBQVNFLFVBQVQsR0FBc0IsRUFBdEI7QUFDQVUsS0FBRzhCLElBQUg7QUFDQSxPQUFLOUcsRUFBTDtBQUNBLE1BQUd3RyxXQUFXLFVBQWQsRUFBMEI7QUFDekIsUUFBS1IsVUFBTDtBQUNBLFFBQUtyRSxTQUFMLENBQWUsUUFBZixFQUF5QixDQUFDLEtBQUszQixFQUFMLEdBQVEsQ0FBVCxDQUF6QjtBQUNBO0FBQ0QsTUFBR3dHLFdBQVcsVUFBZCxFQUEwQjtBQUN6QixRQUFLUixVQUFMLENBQWdCLFVBQWhCO0FBQ0EsUUFBS3JFLFNBQUwsQ0FBZSxZQUFmLEVBQTZCLENBQUMsS0FBSzNCLEVBQUwsR0FBUSxDQUFULENBQTdCO0FBQ0E7QUFDRCxFQWpSWTtBQWtSYmEsTUFsUmEsbUJBa1JMO0FBQ1AsTUFBSSxLQUFLYixFQUFMLEtBQVksQ0FBQyxDQUFqQixFQUFvQjtBQUNwQixNQUFHLEtBQUtHLFNBQVIsRUFBbUI7QUFDbEJoQixTQUFNaUIsV0FBTixDQUFrQixLQUFLRCxTQUF2QjtBQUNBLFVBQU8sS0FBS0EsU0FBWjtBQUNBO0FBQ0QsTUFBRyxLQUFLRyxZQUFSLEVBQXNCO0FBQ3JCbkIsU0FBTW9CLFdBQU4sQ0FBa0IsS0FBS0QsWUFBdkI7QUFDQSxVQUFPLEtBQUtBLFlBQVo7QUFDQTtBQUNELE9BQUtxQixTQUFMLENBQWUsUUFBZixFQUF5QixDQUFDLEtBQUszQixFQUFMLEdBQVEsQ0FBVCxDQUF6QjtBQUNBLE9BQUsrRyxJQUFMO0FBQ0EsT0FBSzdHLGFBQUwsQ0FBbUIsUUFBbkI7QUFDQSxNQUFHLEtBQUtGLEVBQUwsS0FBWSxLQUFLZ0IsTUFBTCxDQUFZdkIsS0FBWixDQUFrQjBCLE1BQWpDLEVBQXlDO0FBQ3hDLFFBQUtRLFNBQUwsQ0FBZSxPQUFmLEVBQXdCLENBQUMsS0FBSzNCLEVBQUwsR0FBUSxDQUFULENBQXhCO0FBQ0E7QUFDRCxFQWxTWTtBQW1TYitFLFNBblNhLG9CQW1TSjdELENBblNJLEVBbVNEOEYsU0FuU0MsRUFtU1U7QUFDdEIsTUFBRyxDQUFDLEtBQUsxRyxZQUFULEVBQXVCO0FBQ3RCLFFBQUtRLFVBQUw7QUFDQTtBQUNELE9BQUtkLEVBQUwsR0FBVWtCLElBQUUsQ0FBWjtBQUNBLE9BQUtoQixhQUFMO0FBQ0EsTUFBRyxLQUFLbUMsS0FBUixFQUFlO0FBQ2QsT0FBRyxLQUFLQSxLQUFMLENBQVc4RCxVQUFkLEVBQ0MsS0FBSzlELEtBQUwsQ0FBVzhELFVBQVgsQ0FBc0JDLFdBQXRCLENBQWtDLEtBQUsvRCxLQUF2QztBQUNEbEQsU0FBTXdGLElBQU4sQ0FBV1csU0FBWCxDQUFxQixLQUFLVCxPQUFMLEVBQXJCLEVBQXFDLHFCQUFyQztBQUNBO0FBQ0QsT0FBS29DLElBQUw7QUFDQSxNQUFHRCxTQUFILEVBQWM7QUFDYixPQUFJRSxNQUFNLEtBQUtwSCxLQUFMLENBQVd3QyxhQUFYLENBQXlCLEtBQXpCLENBQVY7QUFDQSxPQUFJNEUsR0FBSixFQUNDQSxJQUFJZixVQUFKLENBQWVDLFdBQWYsQ0FBMkJjLEdBQTNCO0FBQ0QsUUFBS2xCLFVBQUw7QUFDQSxHQUxELE1BS087QUFDTixRQUFLQSxVQUFMLENBQWdCLFNBQWhCO0FBQ0EsUUFBSzlGLGFBQUw7QUFDQTtBQUNELEVBeFRZO0FBeVRiaUgsTUF6VGEsbUJBeVRMO0FBQ1AsT0FBS3BDLFFBQUwsQ0FBYyxDQUFkLEVBQWlCLElBQWpCO0FBQ0EsRUEzVFk7QUE0VGJxQyxJQTVUYSxpQkE0VFA7QUFDTCxPQUFLdkcsS0FBTDtBQUNBLEVBOVRZO0FBK1RiaUUsZUEvVGEsNEJBK1RJO0FBQ2hCLFNBQU8sS0FBSzlFLEVBQUwsR0FBUSxDQUFmO0FBQ0EsRUFqVVk7QUFrVWJxSCxPQWxVYSxrQkFrVU5DLFVBbFVNLEVBa1VNO0FBQ2xCLE1BQUcsS0FBS2pGLEtBQVIsRUFBYztBQUNiaUYsZ0JBQWFBLGNBQWMsQ0FBM0I7QUFDQSxRQUFLdkMsUUFBTCxDQUFjdUMsVUFBZDtBQUNBO0FBQ0QsRUF2VVk7QUF3VWJDLFNBeFVhLHNCQXdVRjtBQUNWLFNBQU8sS0FBS3ZHLE1BQUwsQ0FBWXZCLEtBQW5CO0FBQ0EsRUExVVk7QUEyVWIrSCxTQTNVYSxvQkEyVUpDLEtBM1VJLEVBMlVHO0FBQ2YsT0FBS0MsTUFBTCxDQUFZLE9BQVosRUFBcUJELEtBQXJCO0FBQ0E7QUE3VVksQ0FBZCxFQThVR3RJLE1BQU13SSxFQUFOLENBQVNDLElBOVVaLEVBOFVrQnpJLE1BQU0wSSxXQTlVeEIsRTs7Ozs7Ozs7Ozs7O0FDTE8sSUFBSUMsa0JBQUszSSxNQUFNQyxJQUFOLENBQVcySSxPQUFYLENBQW1CLE9BQW5CLElBQThCO0FBQzdDaEosT0FBSztBQUNKQyxRQUFNLFVBREY7QUFFSkMsUUFBTSxXQUZGO0FBR0pDLFFBQU07QUFIRjtBQUR3QyxDQUF2QyxDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUNPLElBQUk4SSxrQkFBSzdJLE1BQU1DLElBQU4sQ0FBVzJJLE9BQVgsQ0FBbUIsT0FBbkIsSUFBOEI7QUFDN0NoSixPQUFLO0FBQ0pDLFFBQU0sVUFERjtBQUVKQyxRQUFNLFdBRkY7QUFHSkMsUUFBTTtBQUhGO0FBRHdDLENBQXZDLEM7Ozs7Ozs7Ozs7OztBQ0RBLElBQUkrSSxrQkFBSzlJLE1BQU1DLElBQU4sQ0FBVzJJLE9BQVgsQ0FBbUIsT0FBbkIsSUFBNEI7QUFDM0NoSixPQUFLO0FBQ0pDLFFBQU0sTUFERjtBQUVKQyxRQUFNLFVBRkY7QUFHSkMsUUFBTTtBQUhGO0FBRHNDLENBQXJDLEM7Ozs7Ozs7Ozs7OztBQ0FQO0FBQ08sSUFBSWdKLGtCQUFLL0ksTUFBTUMsSUFBTixDQUFXMkksT0FBWCxDQUFtQixPQUFuQixJQUE4QjtBQUM3Q2hKLE9BQUs7QUFDSkMsUUFBTSxXQURGO0FBRUpDLFFBQU0sVUFGRjtBQUdKQyxRQUFNO0FBSEY7QUFEd0MsQ0FBdkMsQzs7Ozs7Ozs7Ozs7O0FDREEsSUFBSWlKLGtCQUFLaEosTUFBTUMsSUFBTixDQUFXMkksT0FBWCxDQUFtQixPQUFuQixJQUE0QjtBQUMzQ2hKLE9BQUs7QUFDSkMsUUFBTSxVQURGO0FBRUpDLFFBQU0sV0FGRjtBQUdKQyxRQUFNO0FBSEY7QUFEc0MsQ0FBckMsQzs7Ozs7Ozs7Ozs7O0FDQVA7QUFDTyxJQUFJa0osa0JBQUtqSixNQUFNQyxJQUFOLENBQVcySSxPQUFYLENBQW1CLE9BQW5CLElBQThCO0FBQzdDaEosT0FBSztBQUNKQyxRQUFNLFVBREY7QUFFSkMsUUFBTSxZQUZGO0FBR0pDLFFBQU07QUFIRjtBQUR3QyxDQUF2QyxDOzs7Ozs7Ozs7Ozs7QUNEQSxJQUFJbUosa0JBQUtsSixNQUFNQyxJQUFOLENBQVcySSxPQUFYLENBQW1CLE9BQW5CLElBQTRCO0FBQzNDaEosT0FBSztBQUNKQyxRQUFNLEdBREY7QUFFSkMsUUFBTSxHQUZGO0FBR0pDLFFBQU07QUFIRjtBQURzQyxDQUFyQyxDOzs7Ozs7Ozs7Ozs7QUNBQSxJQUFJb0osa0JBQUtuSixNQUFNQyxJQUFOLENBQVcySSxPQUFYLENBQW1CLE9BQW5CLElBQThCO0FBQzdDaEosT0FBSztBQUNKQyxRQUFNLFNBREY7QUFFSkMsUUFBTSxVQUZGO0FBR0pDLFFBQU07QUFIRjtBQUR3QyxDQUF2QyxDOzs7Ozs7Ozs7Ozs7QUNBQSxJQUFJcUosa0JBQUtwSixNQUFNQyxJQUFOLENBQVcySSxPQUFYLENBQW1CLE9BQW5CLElBQTRCO0FBQzNDaEosT0FBSztBQUNKQyxRQUFNLFdBREY7QUFFSkMsUUFBTSxZQUZGO0FBR0pDLFFBQU07QUFIRjtBQURzQyxDQUFyQyxDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUNPLElBQUlzSixrQkFBS3JKLE1BQU1DLElBQU4sQ0FBVzJJLE9BQVgsQ0FBbUIsT0FBbkIsSUFBOEI7QUFDN0NoSixPQUFLO0FBQ0pDLFFBQU0sS0FERjtBQUVKQyxRQUFNLElBRkY7QUFHSkMsUUFBTTtBQUhGO0FBRHdDLENBQXZDLEMiLCJmaWxlIjoiaGludC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2NvZGViYXNlL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDY1NTE2NDI5NGVjNmRkMDgwMGMzIiwiaW1wb3J0IFwiLi9pMThuL2VuXCI7XG5pbXBvcnQgXCIuL2kxOG4vZnJcIjtcbmltcG9ydCBcIi4vaTE4bi9iZVwiO1xuaW1wb3J0IFwiLi9pMThuL2RlXCI7XG5pbXBvcnQgXCIuL2kxOG4vZXNcIjtcbmltcG9ydCBcIi4vaTE4bi9pdFwiO1xuaW1wb3J0IFwiLi9pMThuL2phXCI7XG5pbXBvcnQgXCIuL2kxOG4vcHRcIjtcbmltcG9ydCBcIi4vaTE4bi9ydVwiO1xuaW1wb3J0IFwiLi9pMThuL3poXCI7XG5cbmV4cG9ydCBsZXQgbG9jYWxlID0ge1xuXHRoaW50OiB7XG5cdFx0bmV4dDogXCJOZXh0XCIsXG5cdFx0cHJldjogXCJQcmV2aW91c1wiLFxuXHRcdGxhc3Q6IFwiRW5kIFRvdXJcIlxuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvbG9jYWxlcy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL2hpbnQubGVzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgXCIuL2hpbnQubGVzc1wiO1xuaW1wb3J0IHsgbG9jYWxlIH0gZnJvbSBcIi4vbG9jYWxlc1wiO1xuXG53ZWJpeC5pMThuLmhpbnQgPSB3ZWJpeC5leHRlbmQod2ViaXguaTE4biwgbG9jYWxlKS5oaW50O1xuXG53ZWJpeC5wcm90b1VJKHtcblx0bmFtZTogXCJoaW50XCIsXG5cdGRlZmF1bHRzOiB7XG5cdFx0c3RlcHM6IFtdLFxuXHRcdGJvcmRlcmxlc3M6IHRydWUsXG5cdFx0bmV4dEJ1dHRvbjogdHJ1ZSxcblx0XHRwcmV2QnV0dG9uOiB0cnVlXG5cdH0sXG5cdCRpbml0KCkge1xuXHRcdHRoaXMuJHZpZXcuY2xhc3NOYW1lICs9IFwiIHdlYml4X2hpbnRfdmlld1wiO1xuXHRcdHRoaXMuX2kgPSAtMTtcblx0XHR0aGlzLmF0dGFjaEV2ZW50KFwib25EZXN0cnVjdFwiLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zZXRCb2R5Q2xhc3MoXCJyZW1vdmVcIik7XG5cdFx0XHRpZih0aGlzLl9ldmVudE9iaikge1xuXHRcdFx0XHR3ZWJpeC5ldmVudFJlbW92ZSh0aGlzLl9ldmVudE9iaik7XG5cdFx0XHR9XG5cdFx0XHRpZih0aGlzLl9ldmVudE9iakVzYykge1xuXHRcdFx0XHR3ZWJpeC5ldmVudFJlbW92ZSh0aGlzLl9ldmVudE9iakVzYyk7XG5cdFx0XHR9XG5cdFx0XHRpZih0aGlzLl9ldmVudFJlc2l6ZSkge1xuXHRcdFx0XHR3ZWJpeC5kZXRhY2hFdmVudCh0aGlzLl9ldmVudFJlc2l6ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5fZXZlbnRPYmpFc2MgPSB3ZWJpeC5ldmVudChkb2N1bWVudC5ib2R5LFwia2V5ZG93blwiLCAoZSkgPT4ge1xuXHRcdFx0Ly8gZXNjYXBlXG5cdFx0XHRpZiAoZS5rZXlDb2RlID09IDI3KXtcblx0XHRcdFx0dGhpcy5fc2tpcCgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuX3NldFJlc2l6ZSgpO1xuXHR9LFxuXHRzdGVwc19zZXR0ZXIoY29uZmlnKSB7XG5cdFx0bGV0IG5ld0NvbmZpZyA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY29uZmlnLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25maWdbaV0ucGFkZGluZyA9IGNvbmZpZ1tpXS5wYWRkaW5nIHx8IDA7XG5cdFx0XHRjb25maWdbaV0udGV4dCA9IGNvbmZpZ1tpXS50ZXh0IHx8IFwiXCI7XG5cdFx0XHRuZXdDb25maWcucHVzaChjb25maWdbaV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3Q29uZmlnO1xuXHR9LFxuXHRfZHJhd092ZXIoc3RlcEVsKSB7XG5cdFx0dGhpcy4kdmlldy5pbm5lckhUTUwgKz0gYDxzdmcgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgY2xhc3M9XCJ3ZWJpeF9oaW50X292ZXJsYXlcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiPlxuXHRcdFx0PGRlZnM+XG5cdFx0XHRcdDxtYXNrIGlkPVwiaG9sZVwiPlxuXHRcdFx0XHRcdDxyZWN0IGNsYXNzPVwid2ViaXhfaGludF9vdmVybGF5X2hvbGVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cIndoaXRlXCIvPlxuXHRcdFx0XHRcdDxyZWN0IGNsYXNzPVwid2ViaXhfaGludF9vdmVybGF5X2hvbGUgd2ViaXhfaGludF9vdmVybGF5X2hvbGVfZWxcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIwXCIgaGVpZ2h0PVwiMFwiIGZpbGw9XCJ3aGl0ZVwiLz5cblx0XHRcdFx0PC9tYXNrPlxuXHRcdFx0PC9kZWZzPlxuXHRcdFx0PHJlY3QgY2xhc3M9XCJ3ZWJpeF9oaW50X292ZXJsYXlfaG9sZVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBtYXNrPVwidXJsKCNob2xlKVwiIC8+XG5cdFx0PC9zdmc+YDtcblx0XHR0aGlzLl9zZXRQcm9wZXJ0aWVzKHN0ZXBFbCk7XG5cdFx0dGhpcy5jYWxsRXZlbnQoXCJvbkFmdGVyU3RhcnRcIiwgW10pO1xuXHR9LFxuXHRfZHJhd0hpbnQoKSB7XG5cdFx0bGV0IHNldHRpbmdzID0gdGhpcy5jb25maWc7XG5cdFx0dGhpcy4kdmlldy5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJ3ZWJpeF9oaW50XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz0nd2ViaXhfaGludF90aXRsZSc+JHt0aGlzLl9zdGVwLnRpdGxlP3RoaXMuX3N0ZXAudGl0bGU6XCJcIn08L3NwYW4+XG5cdFx0XHQ8cCBjbGFzcz1cIndlYml4X2hpbnRfbGFiZWxcIj4ke3RoaXMuX3N0ZXAudGV4dH08L3A+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwid2ViaXhfaGludF9wcm9ncmVzc1wiPlxuXHRcdFx0XHQke3RoaXMuX2krMX0vJHt0aGlzLmNvbmZpZy5zdGVwcy5sZW5ndGh9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ3ZWJpeF9oaW50X2J1dHRvbnNcIj5cblx0XHRcdFx0JHtzZXR0aW5ncy5wcmV2QnV0dG9uIT09IGZhbHNlP2A8YnV0dG9uIGNsYXNzPVwid2ViaXhfaGludF9idXR0b24gd2ViaXhfaGludF9idXR0b25fcHJldiB3ZWJpeF9oaW50X2J1dHRvbl9oaWRkZW5cIj4ke3R5cGVvZiBzZXR0aW5ncy5wcmV2QnV0dG9uID09IFwic3RyaW5nXCI/c2V0dGluZ3MucHJldkJ1dHRvbjpgJHt3ZWJpeC5pMThuLmhpbnQucHJldn1gfTwvYnV0dG9uPmA6XCJcIn1cblx0XHRcdFx0JHtzZXR0aW5ncy5uZXh0QnV0dG9uIT09IGZhbHNlP2A8YnV0dG9uIGNsYXNzPVwid2ViaXhfaGludF9idXR0b24gd2ViaXhfaGludF9idXR0b25fbmV4dFwiPiR7dHlwZW9mIHNldHRpbmdzLm5leHRCdXR0b24gPT0gXCJzdHJpbmdcIj9zZXR0aW5ncy5uZXh0QnV0dG9uOmAke3dlYml4LmkxOG4uaGludC5uZXh0fWB9PC9idXR0b24+YDpcIlwifVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwid2ViaXhfaGludF9idXR0b25fY2xvc2VcIiB0aXRsZT1cIkNsb3NlXCI+JiMxMDAwNTs8L2J1dHRvbj5cblx0XHQ8L2Rpdj5gO1xuXHR9LFxuXHRfc2V0UHJvcGVydGllcyhzdGVwRWwsIHJlZnJlc2gpIHtcblx0XHRpZighc3RlcEVsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoIXdlYml4LmVudi5tb2JpbGUpIHtcblx0XHRcdHN0ZXBFbC5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XG5cdFx0fVxuXHRcdHRoaXMuX3N0ZXAgPSB0aGlzLmNvbmZpZy5zdGVwc1t0aGlzLl9pXTtcblx0XHR0aGlzLl9yZURyYXcoc3RlcEVsLCByZWZyZXNoKTtcblx0XHR0aGlzLl9oaW50ID0gdGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwiLndlYml4X2hpbnRcIik7XG5cblx0XHRsZXQgcGFkZGluZyA9IDMwO1xuXHRcdGxldCBkb2NFbGVtID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRcdGxldCBib3ggPSBzdGVwRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0bGV0IGVsTGVmdCA9IGJveC5sZWZ0ICsgdGhpcy5fc3RlcC5wYWRkaW5nO1xuXHRcdGxldCBoaWdobGlnaHRXaWR0aCA9IGJveC53aWR0aDtcblx0XHRsZXQgaGlnaGxpZ2h0SGVpZ2h0ID0gYm94LmhlaWdodDtcblx0XHRsZXQgaGludExlZnQgPSBlbExlZnQgLSB0aGlzLl9zdGVwLnBhZGRpbmc7XG5cdFx0bGV0IGhpbnRXaWR0aCA9IHRoaXMuX2hpbnQub2Zmc2V0V2lkdGg7XG5cdFx0bGV0IGhpbnRIZWlnaHQgPSB0aGlzLl9oaW50Lm9mZnNldEhlaWdodDtcblx0XHRsZXQgZWxUb3AgPSB3ZWJpeC5lbnYubW9iaWxlID8gYm94LnRvcCArIHRoaXMuX3N0ZXAucGFkZGluZyA6IGJveC50b3AgKyB0aGlzLl9zdGVwLnBhZGRpbmcgKyB3aW5kb3cucGFnZVlPZmZzZXQ7XG5cdFx0bGV0IGhpbnRUb3AgPSBlbFRvcCArIGhpZ2hsaWdodEhlaWdodCArIHRoaXMuX3N0ZXAucGFkZGluZyArIHBhZGRpbmc7XG5cdFx0bGV0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggJiYgZG9jRWxlbS5jbGllbnRXaWR0aCA/IE1hdGgubWluKHdpbmRvdy5pbm5lcldpZHRoLCBkb2NFbGVtLmNsaWVudFdpZHRoKSA6IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY0VsZW0uY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmNsaWVudFdpZHRoO1xuXHRcdGxldCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgJiYgZG9jRWxlbS5jbGllbnRIZWlnaHQgPyBNYXRoLm1pbih3aW5kb3cuaW5uZXJIZWlnaHQsIGRvY0VsZW0uY2xpZW50SGVpZ2h0KSA6IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2NFbGVtLmNsaWVudEhlaWdodCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uY2xpZW50SGVpZ2h0O1xuXHRcdFxuXHRcdHN0ZXBFbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhbGxcIjtcblx0XHRzdGVwRWwuc3R5bGUudXNlclNlbGVjdCA9IFwiaW5pdGlhbFwiO1xuXG5cdFx0Ly8gc2V0IGhpbnQgcG9zaXRpb25cblx0XHRpZihlbExlZnQgLSB3aW5kb3dXaWR0aCA+IDApIHtcblx0XHRcdGVsTGVmdCA9IGVsTGVmdCAtIHdpbmRvd1dpZHRoICsgaGludFdpZHRoICsgaGlnaGxpZ2h0V2lkdGg7XG5cdFx0fVxuXG5cdFx0aWYod2luZG93SGVpZ2h0IC8yIDwgZWxUb3ApIHsgLy8gYm90dG9tXG5cdFx0XHRoaW50VG9wID0gZWxUb3AgLSBoaW50SGVpZ2h0IC0gcGFkZGluZyAtIHRoaXMuX3N0ZXAucGFkZGluZyoyO1xuXHRcdH0gZWxzZSBpZih3aW5kb3dXaWR0aCAvMiA8IGVsTGVmdCAmJiBlbExlZnQgKyBoaW50V2lkdGggPCB3aW5kb3dXaWR0aCAmJiBoaWdobGlnaHRXaWR0aCArIGhpbnRXaWR0aCA8IHdpbmRvd1dpZHRoKSB7IC8vIHJpZ2h0XG5cdFx0XHRoaW50VG9wID0gaGlnaGxpZ2h0SGVpZ2h0IC8gMiArIGVsVG9wIC0gdGhpcy5fc3RlcC5wYWRkaW5nO1xuXHRcdFx0aGludExlZnQgPSBlbExlZnQgLSBoaW50V2lkdGggLSB0aGlzLl9zdGVwLnBhZGRpbmcgLSBwYWRkaW5nO1xuXHRcdH0gZWxzZSBpZih3aW5kb3dXaWR0aCAvMiA+IGVsTGVmdCAmJiBlbExlZnQgKyBoaW50V2lkdGggKyBoaWdobGlnaHRXaWR0aCA8IHdpbmRvd1dpZHRoKSB7IC8vIGxlZnRcblx0XHRcdGhpbnRMZWZ0ID0gaGlnaGxpZ2h0V2lkdGggKyBlbExlZnQgKyBwYWRkaW5nO1xuXHRcdFx0aGludFRvcCA9IGVsVG9wIC0gdGhpcy5fc3RlcC5wYWRkaW5nO1xuXHRcdH0gZWxzZSBpZihoaW50VG9wPndpbmRvd0hlaWdodCAmJiBoaW50SGVpZ2h0K2hpZ2hsaWdodEhlaWdodDx3aW5kb3dIZWlnaHQpey8vdG9wLCBidXQgaGludCBkb2VzIG5vdCBmaXRcblx0XHRcdGhpbnRUb3AgPSBlbFRvcCAtIGhpbnRIZWlnaHQgLSBwYWRkaW5nIC0gdGhpcy5fc3RlcC5wYWRkaW5nKjI7XG5cdFx0fSBlbHNlIGlmKGhpbnRUb3AgPndpbmRvd0hlaWdodCB8fCBoaW50VG9wK2hpbnRIZWlnaHQ+d2luZG93SGVpZ2h0KXtcblx0XHRcdGhpbnRMZWZ0ID0gZWxMZWZ0IC0gaGludFdpZHRoIC0gdGhpcy5fc3RlcC5wYWRkaW5nKjIgLSBwYWRkaW5nO1xuXHRcdFx0aGludFRvcCA9IGVsVG9wIC0gdGhpcy5fc3RlcC5wYWRkaW5nO1xuXHRcdH1cblxuXHRcdGlmKGhpbnRMZWZ0ICsgaGludFdpZHRoID4gd2luZG93V2lkdGgpIHsgLy8gZm9yIG92ZXJmbG93XG5cdFx0XHRoaW50TGVmdCA9IHdpbmRvd1dpZHRoIC0gaGludFdpZHRoO1xuXHRcdH0gZWxzZSBpZihoaW50VG9wIDwgMCB8fCBoaW50VG9wID4gd2luZG93SGVpZ2h0KSB7XG5cdFx0XHRoaW50VG9wID0gcGFkZGluZztcblx0XHR9IGVsc2UgaWYod2luZG93V2lkdGggPCBoaWdobGlnaHRXaWR0aCB8fCBoaW50TGVmdCA8IDApIHtcblx0XHRcdGhpbnRMZWZ0ID0gcGFkZGluZztcblx0XHR9XG5cdFx0aWYod2ViaXguZW52Lm1vYmlsZSkge1xuXHRcdFx0c3RlcEVsLnNjcm9sbEludG9WaWV3KGZhbHNlKTtcblx0XHR9XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLl9oaW50LnN0eWxlLmNzc1RleHQgPSBgdG9wOiR7aGludFRvcH1weDsgbGVmdDoke2hpbnRMZWZ0fXB4O2A7XG5cdFx0XHR0aGlzLl9zZXRBdHRyaWJ1dGVzKHRoaXMuJHZpZXcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIndlYml4X2hpbnRfb3ZlcmxheV9ob2xlX2VsXCIpWzBdLCB7XCJ4XCI6ZWxMZWZ0LXRoaXMuX3N0ZXAucGFkZGluZyoyLCBcInlcIjplbFRvcC10aGlzLl9zdGVwLnBhZGRpbmcqMiwgXCJ3aWR0aFwiOmhpZ2hsaWdodFdpZHRoK3RoaXMuX3N0ZXAucGFkZGluZyAqMiwgXCJoZWlnaHRcIjpoaWdobGlnaHRIZWlnaHQrdGhpcy5fc3RlcC5wYWRkaW5nKjJ9KTtcblx0XHRcdHdlYml4Lmh0bWwuYWRkQ3NzKHRoaXMuZ2V0Tm9kZSgpLCBcIndlYml4X2hpbnRfYW5pbWF0ZWRcIik7XG5cdFx0fSwgNTAwKTtcblx0fSxcblx0X3NldFJlc2l6ZSgpIHtcblx0XHR0aGlzLl9ldmVudFJlc2l6ZSA9IHdlYml4LmF0dGFjaEV2ZW50KFwib25SZXNpemVcIiwgKCkgPT4ge1xuXHRcdFx0aWYodGhpcy5nZXRDdXJyZW50U3RlcCgpICYmIHRoaXMuX2kgIT09IHRoaXMuY29uZmlnLnN0ZXBzLmxlbmd0aCkge1xuXHRcdFx0XHR0aGlzLl9yZWZyZXNoKHRoaXMuZ2V0Q3VycmVudFN0ZXAoKSwgZmFsc2UsIHRydWUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXHRfc2V0QXR0cmlidXRlcyhlbCwgYXR0cnMpIHtcblx0XHRmb3IodmFyIGtleSBpbiBhdHRycykge1xuXHRcdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdFx0fVxuXHR9LFxuXHRfcmVEcmF3KHN0ZXBFbCwgcmVmcmVzaCkge1xuXHRcdGxldCB0aXRsZSA9IHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcIi53ZWJpeF9oaW50X3RpdGxlXCIpO1xuXHRcdGxldCBlbDtcblxuXHRcdHRoaXMuX3N0ZXAuZXZlbnRFbD9lbCA9IHRoaXMuX2dldEVsKHRoaXMuX3N0ZXAuZXZlbnRFbCk6ZWwgPSBzdGVwRWw7XG5cdFx0aWYodGhpcy5faSA+IDAgJiYgIXJlZnJlc2gpIHtcblx0XHRcdHdlYml4Lmh0bWwucmVtb3ZlQ3NzKHRoaXMuZ2V0Tm9kZSgpLCBcIndlYml4X2hpbnRfYW5pbWF0ZWRcIik7XG5cdFx0XHR0aXRsZS5pbm5lckhUTUwgPSB0aGlzLl9zdGVwLnRpdGxlIHx8IFwiXCI7XG5cdFx0XHR0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIud2ViaXhfaGludF9sYWJlbFwiKS5pbm5lckhUTUwgPSB0aGlzLl9zdGVwLnRleHQgfHwgXCJcIjtcblx0XHRcdHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcIi53ZWJpeF9oaW50X3Byb2dyZXNzXCIpLmlubmVySFRNTCA9IGAke3RoaXMuX2krMX0vJHt0aGlzLmNvbmZpZy5zdGVwcy5sZW5ndGh9YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fZHJhd0hpbnQoKTtcblx0XHRcdHRoaXMuX3NldEV2ZW50c0J1dHRvbnMoZWwpO1xuXHRcdH1cblx0XHRpZighdGhpcy5fc3RlcC50aXRsZSAmJiB0aXRsZSkge1xuXHRcdFx0dGl0bGUuc3R5bGUubWFyZ2luID0gXCIwXCI7XG5cdFx0fVxuXHRcdHRoaXMuX3NldEVsRXZlbnRzKGVsKTtcblxuXHRcdGlmKHRoaXMuX3ByZXZCdXR0b24pIHtcblx0XHRcdGlmKHRoaXMuX2kgPiAwKSB7IC8vIHByZXZpb3VzIGJ1dHRvbiBzaG93XG5cdFx0XHRcdHdlYml4Lmh0bWwucmVtb3ZlQ3NzKHRoaXMuX3ByZXZCdXR0b24sIFwid2ViaXhfaGludF9idXR0b25faGlkZGVuXCIpO1xuXHRcdFx0fSBlbHNlIGlmKHRoaXMuX3ByZXZCdXR0b24gJiYgIXRoaXMuX3ByZXZCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwid2ViaXhfaGludF9idXR0b25faGlkZGVuXCIpKSB7XG5cdFx0XHRcdHdlYml4Lmh0bWwuYWRkQ3NzKHRoaXMuX3ByZXZCdXR0b24sIFwid2ViaXhfaGludF9idXR0b25faGlkZGVuXCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRpZih0aGlzLl9pID09PSB0aGlzLmNvbmZpZy5zdGVwcy5sZW5ndGggLTEgJiYgdGhpcy5fbmV4dEJ1dHRvbikgeyAvLyBuZXh0IGJ1dHRvbiB0ZXh0XG5cdFx0XHR0aGlzLl9uZXh0QnV0dG9uLmlubmVySFRNTCA9IGAke3R5cGVvZiB0aGlzLmNvbmZpZy5uZXh0QnV0dG9uID09IFwic3RyaW5nXCI/dGhpcy5jb25maWcubmV4dEJ1dHRvbjpgJHt3ZWJpeC5pMThuLmhpbnQubGFzdH1gfWA7XG5cdFx0fVxuXHR9LFxuXHRfc2V0Qm9keUNsYXNzKHJlbW92ZSkge1xuXHRcdGxldCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblx0XHRpZihib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIndlYml4X2hpbnRfb3ZlcmZsb3dcIikgfHwgcmVtb3ZlKSB7XG5cdFx0XHR3ZWJpeC5odG1sLnJlbW92ZUNzcyhib2R5LCBcIndlYml4X2hpbnRfb3ZlcmZsb3dcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdlYml4Lmh0bWwuYWRkQ3NzKGJvZHksIFwid2ViaXhfaGludF9vdmVyZmxvd1wiKTtcblx0XHR9XG5cdH0sXG5cdF9nZXRFbChlbCkge1xuXHRcdGlmKCQkKGVsKSkge1xuXHRcdFx0cmV0dXJuICQkKGVsKS5nZXROb2RlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKTtcblx0XHR9XG5cdH0sXG5cdF9kcmF3U3RlcHMocmVmcmVzaCkge1xuXHRcdGlmKHRoaXMuY29uZmlnLnN0ZXBzW3RoaXMuX2ldKSB7XG5cdFx0XHRsZXQgZWwgPSB0aGlzLl9nZXRFbCh0aGlzLmNvbmZpZy5zdGVwc1t0aGlzLl9pXS5lbCk7XG5cdFx0XHRpZih0aGlzLl9pID09PSAwICYmICFyZWZyZXNoKSB7XG5cdFx0XHRcdHRoaXMuY2FsbEV2ZW50KFwib25CZWZvcmVTdGFydFwiLCBbXSk7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4geyAvLyBmb3IgZmlyc3QgaW5pdFxuXHRcdFx0XHRcdHRoaXMuX2RyYXdPdmVyKGVsKTtcblx0XHRcdFx0fSwgMTAwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX3NldFByb3BlcnRpZXMoZWwsIHJlZnJlc2gpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9za2lwKCk7XG5cdFx0fVxuXHR9LFxuXHRfc2V0RXZlbnRzQnV0dG9ucygpIHtcblx0XHR0aGlzLl9wcmV2QnV0dG9uID0gdGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yQWxsKFwiLndlYml4X2hpbnRfYnV0dG9uX3ByZXZcIilbMF07XG5cdFx0dGhpcy5fbmV4dEJ1dHRvbiA9IHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvckFsbChcIi53ZWJpeF9oaW50X2J1dHRvbl9uZXh0XCIpWzBdO1xuXHRcdGxldCBlbDtcblx0XHRpZih0aGlzLl9uZXh0QnV0dG9uKSB7XG5cdFx0XHR3ZWJpeC5ldmVudCh0aGlzLl9uZXh0QnV0dG9uLCBcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdFx0dGhpcy5fbmV4dChlbCwgXCJuZXh0XCIpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGlmKHRoaXMuX3ByZXZCdXR0b24pIHtcblx0XHRcdHdlYml4LmV2ZW50KHRoaXMuX3ByZXZCdXR0b24sIFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0XHR3ZWJpeC5odG1sLnJlbW92ZUNzcyh0aGlzLmdldE5vZGUoKSwgXCJ3ZWJpeF9oaW50X2FuaW1hdGVkXCIpO1xuXHRcdFx0XHR0aGlzLl9oaW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5faGludCk7XG5cdFx0XHRcdHRoaXMuX2kgLT0gMjtcblx0XHRcdFx0dGhpcy5fbmV4dChlbCwgXCJwcmV2aW91c1wiKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHR3ZWJpeC5ldmVudCh0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIud2ViaXhfaGludF9idXR0b25fY2xvc2VcIiksIFwiY2xpY2tcIiwgKCkgPT4geyB0aGlzLl9za2lwKCk7IH0pO1xuXHR9LFxuXHRfc2V0RWxFdmVudHMoc3RlcEVsKSB7XG5cdFx0bGV0IGV2ZW50U3RlcCA9IHRoaXMuX3N0ZXAuZXZlbnQ7XG5cdFx0c3RlcEVsLmZvY3VzKCk7XG5cdFx0aWYoZXZlbnRTdGVwKSB7XG5cdFx0XHRpZihldmVudFN0ZXAgPT09IFwiZW50ZXJcIikge1xuXHRcdFx0XHRldmVudFN0ZXAgPSBcImtleWRvd25cIjtcblx0XHRcdH1cblx0XHRcdGlmKHRoaXMuX2V2ZW50T2JqKSB7XG5cdFx0XHRcdHdlYml4LmV2ZW50UmVtb3ZlKHRoaXMuX2V2ZW50T2JqKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2V2ZW50T2JqID0gd2ViaXguZXZlbnQoc3RlcEVsLCBldmVudFN0ZXAsIChlKSA9PiB7XG5cdFx0XHRcdGlmKGV2ZW50U3RlcCA9PSBlLnR5cGUpIHtcblx0XHRcdFx0XHRpZihlLnR5cGUgPT09IFwia2V5ZG93blwiICYmIGUua2V5Q29kZSAhPT0gMTMpIHJldHVybjtcblx0XHRcdFx0XHRzdGVwRWwuZm9jdXMoKTtcblx0XHRcdFx0XHR0aGlzLl9uZXh0KHN0ZXBFbCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9LFxuXHRfbmV4dChzdGVwRWwsIGFjdGlvbikge1xuXHRcdGFjdGlvbiA9IGFjdGlvbiB8fCBcIm5leHRcIjtcblx0XHRpZiAodGhpcy5fc3RlcC5uZXh0ICYmIGFjdGlvbiA9PT0gXCJuZXh0XCIgfHwgdGhpcy5fc3RlcC5wcmV2aW91cyAmJiBhY3Rpb24gPT09IFwicHJldmlvdXNcIikge1xuXHRcdFx0bGV0IHByb21pc2UgPSB0aGlzLl9zdGVwW2FjdGlvbl0oKTtcblx0XHRcdGlmIChwcm9taXNlKXtcblx0XHRcdFx0cHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5fbmV4dFN0ZXAoc3RlcEVsLCBhY3Rpb24pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fbmV4dFN0ZXAoc3RlcEVsLCBhY3Rpb24pO1xuXHRcdH1cblx0fSxcblx0X25leHRTdGVwKHN0ZXBFbCwgYWN0aW9uKSB7XG5cdFx0bGV0IGVsID0gdGhpcy5fZ2V0RWwodGhpcy5fc3RlcC5lbCk7XG5cdFx0ZWwuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiXCI7XG5cdFx0ZWwuc3R5bGUudXNlclNlbGVjdCA9IFwiXCI7XG5cdFx0ZWwuYmx1cigpO1xuXHRcdHRoaXMuX2krKztcblx0XHRpZihhY3Rpb24gIT09IFwicHJldmlvdXNcIikge1xuXHRcdFx0dGhpcy5fZHJhd1N0ZXBzKCk7XG5cdFx0XHR0aGlzLmNhbGxFdmVudChcIm9uTmV4dFwiLCBbdGhpcy5faSsxXSk7XG5cdFx0fVxuXHRcdGlmKGFjdGlvbiA9PT0gXCJwcmV2aW91c1wiKSB7XG5cdFx0XHR0aGlzLl9kcmF3U3RlcHMoXCJwcmV2aW91c1wiKTtcblx0XHRcdHRoaXMuY2FsbEV2ZW50KFwib25QcmV2aW91c1wiLCBbdGhpcy5faSsxXSk7XG5cdFx0fVxuXHR9LFxuXHRfc2tpcCgpIHtcblx0XHRpZiAodGhpcy5faSA9PT0gLTEpIHJldHVybjtcblx0XHRpZih0aGlzLl9ldmVudE9iaikge1xuXHRcdFx0d2ViaXguZXZlbnRSZW1vdmUodGhpcy5fZXZlbnRPYmopO1xuXHRcdFx0ZGVsZXRlIHRoaXMuX2V2ZW50T2JqO1xuXHRcdH1cblx0XHRpZih0aGlzLl9ldmVudFJlc2l6ZSkge1xuXHRcdFx0d2ViaXguZGV0YWNoRXZlbnQodGhpcy5fZXZlbnRSZXNpemUpO1xuXHRcdFx0ZGVsZXRlIHRoaXMuX2V2ZW50UmVzaXplO1xuXHRcdH1cblx0XHR0aGlzLmNhbGxFdmVudChcIm9uU2tpcFwiLCBbdGhpcy5faSsxXSk7XG5cdFx0dGhpcy5oaWRlKCk7XG5cdFx0dGhpcy5fc2V0Qm9keUNsYXNzKFwicmVtb3ZlXCIpO1xuXHRcdGlmKHRoaXMuX2kgPT09IHRoaXMuY29uZmlnLnN0ZXBzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5jYWxsRXZlbnQoXCJvbkVuZFwiLCBbdGhpcy5faSsxXSk7XG5cdFx0fVxuXHR9LFxuXHRfcmVmcmVzaChpLCBmaXJzdERyYXcpIHtcblx0XHRpZighdGhpcy5fZXZlbnRSZXNpemUpIHtcblx0XHRcdHRoaXMuX3NldFJlc2l6ZSgpO1xuXHRcdH1cblx0XHR0aGlzLl9pID0gaS0xO1xuXHRcdHRoaXMuX3NldEJvZHlDbGFzcygpO1xuXHRcdGlmKHRoaXMuX2hpbnQpIHtcblx0XHRcdGlmKHRoaXMuX2hpbnQucGFyZW50Tm9kZSlcblx0XHRcdFx0dGhpcy5faGludC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX2hpbnQpO1xuXHRcdFx0d2ViaXguaHRtbC5yZW1vdmVDc3ModGhpcy5nZXROb2RlKCksIFwid2ViaXhfaGludF9hbmltYXRlZFwiKTtcblx0XHR9XG5cdFx0dGhpcy5zaG93KCk7XG5cdFx0aWYoZmlyc3REcmF3KSB7XG5cdFx0XHRsZXQgc3ZnID0gdGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpO1xuXHRcdFx0aWYgKHN2Zylcblx0XHRcdFx0c3ZnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3ZnKTtcblx0XHRcdHRoaXMuX2RyYXdTdGVwcygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9kcmF3U3RlcHMoXCJyZWZyZXNoXCIpO1xuXHRcdFx0dGhpcy5fc2V0Qm9keUNsYXNzKCk7XG5cdFx0fVxuXHR9LFxuXHRzdGFydCgpIHtcblx0XHR0aGlzLl9yZWZyZXNoKDEsIHRydWUpO1xuXHR9LFxuXHRlbmQoKSB7XG5cdFx0dGhpcy5fc2tpcCgpO1xuXHR9LFxuXHRnZXRDdXJyZW50U3RlcCgpIHtcblx0XHRyZXR1cm4gdGhpcy5faSsxO1xuXHR9LFxuXHRyZXN1bWUoc3RlcE51bWJlcikge1xuXHRcdGlmKHRoaXMuX2hpbnQpe1xuXHRcdFx0c3RlcE51bWJlciA9IHN0ZXBOdW1iZXIgfHwgMTtcblx0XHRcdHRoaXMuX3JlZnJlc2goc3RlcE51bWJlcik7XG5cdFx0fVxuXHR9LFxuXHRnZXRTdGVwcygpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25maWcuc3RlcHM7XG5cdH0sXG5cdHNldFN0ZXBzKHZhbHVlKSB7XG5cdFx0dGhpcy5kZWZpbmUoXCJzdGVwc1wiLCB2YWx1ZSk7XG5cdH1cbn0sIHdlYml4LnVpLnZpZXcsIHdlYml4LkV2ZW50U3lzdGVtKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2hpbnQuanMiLCJleHBvcnQgbGV0IGJlID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiYmUtQllcIl0gPSB7XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwi0J3QsNGB0YLRg9C/0L3Ri1wiLFxuXHRcdHByZXY6IFwi0J/QsNC/0Y/RgNGN0LTQvdGWXCIsXG5cdFx0bGFzdDogXCLQmtCw0L3QtdGGINCi0YPRgNCwXCJcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vYmUuanMiLCIvKkdlcm1hbiAoR2VybWFueSkgbG9jYWxlKi9cbmV4cG9ydCBsZXQgZGUgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJkZS1ERVwiXSA9IHtcblx0aGludDp7XG5cdFx0bmV4dDogXCJOw6RjaHN0ZXJcIixcblx0XHRwcmV2OiBcIkJpc2hlcmlnZVwiLFxuXHRcdGxhc3Q6IFwiRW5kZSBUb3VyXCJcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9kZS5qcyIsImV4cG9ydCBsZXQgZW4gPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJlbi1VU1wiXT17XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwiTmV4dFwiLFxuXHRcdHByZXY6IFwiUHJldmlvdXNcIixcblx0XHRsYXN0OiBcIkVuZCBUb3VyXCJcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vZW4uanMiLCIvKlNwYW5pc2ggKFNwYWluLCBJbnRlcm5hdGlvbmFsIFNvcnQpIGxvY2FsZSovXG5leHBvcnQgbGV0IGVzID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiZXMtRVNcIl0gPSB7XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwiU2lndWllbnRlXCIsXG5cdFx0cHJldjogXCJBbnRlcmlvclwiLFxuXHRcdGxhc3Q6IFwiRmluIGRlIFZpYWplXCJcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9lcy5qcyIsImV4cG9ydCBsZXQgZnIgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJmci1GUlwiXT17XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwiUHJvY2hhaW5cIixcblx0XHRwcmV2OiBcIlByw6ljw6lkZW50XCIsXG5cdFx0bGFzdDogXCJFbmQgVG91clwiXG5cdH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2ZyLmpzIiwiLypJdGFsaWFuIChJdGFseSkgbG9jYWxlKi9cbmV4cG9ydCBsZXQgaXQgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJpdC1JVFwiXSA9IHtcblx0aGludDp7XG5cdFx0bmV4dDogXCJTZWd1ZW50ZVwiLFxuXHRcdHByZXY6IFwiUHJlY2VkZW50ZVwiLFxuXHRcdGxhc3Q6IFwiRW5kIFRvdXJcIlxuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2l0LmpzIiwiZXhwb3J0IGxldCBqYSA9IHdlYml4LmkxOG4ubG9jYWxlc1tcImphLUpQXCJdPXtcblx0aGludDp7XG5cdFx0bmV4dDogXCLmrKFcIixcblx0XHRwcmV2OiBcIuWJjVwiLFxuXHRcdGxhc3Q6IFwi57WC5LqG44OE44Ki44O8XCJcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vamEuanMiLCJleHBvcnQgbGV0IHB0ID0gd2ViaXguaTE4bi5sb2NhbGVzW1wicHQtQlJcIl0gPSB7XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwiUHLDs3hpbW9cIixcblx0XHRwcmV2OiBcIkFudGVyaW9yXCIsXG5cdFx0bGFzdDogXCJFbmQgVG91clwiXG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vcHQuanMiLCJleHBvcnQgbGV0IHJ1ID0gd2ViaXguaTE4bi5sb2NhbGVzW1wicnUtUlVcIl09e1xuXHRoaW50Ontcblx0XHRuZXh0OiBcItCh0LvQtdC00YPRjtGJ0LjQuVwiLFxuXHRcdHByZXY6IFwi0J/RgNC10LTRi9C00YPRidC40LlcIixcblx0XHRsYXN0OiBcItCa0L7QvdC10YYg0KLRg9GA0LBcIlxuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9ydS5qcyIsIi8qQ2hpbmVzZSAoU2ltcGxpZmllZCwgUFJDKSBsb2NhbGUqL1xuZXhwb3J0IGxldCB6aCA9IHdlYml4LmkxOG4ubG9jYWxlc1tcInpoLUNOXCJdID0ge1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIuS4i+S4gOS4qlwiLFxuXHRcdHByZXY6IFwi5Lul5YmNXCIsXG5cdFx0bGFzdDogXCLnu5PmnZ/lt6Hop4ZcIlxuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL3poLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==