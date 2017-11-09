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

		this._eventResize = webix.attachEvent("onResize", function () {
			if (_this.getCurrentStep() && _this._i !== _this.config.steps.length) {
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
		this._setBodyClass("remove");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDgyMjAyNTUwZmRjMDUxY2ExODgiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9sb2NhbGVzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5sZXNzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vYmUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL2RlLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9lbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL2ZyLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9pdC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vamEuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL3B0LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9ydS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vemguanMiXSwibmFtZXMiOlsibG9jYWxlIiwiaGludCIsIm5leHQiLCJwcmV2IiwibGFzdCIsIndlYml4IiwiaTE4biIsImV4dGVuZCIsInByb3RvVUkiLCJuYW1lIiwiZGVmYXVsdHMiLCJzdGVwcyIsImJvcmRlcmxlc3MiLCJuZXh0QnV0dG9uIiwicHJldkJ1dHRvbiIsIiRpbml0IiwiJHZpZXciLCJjbGFzc05hbWUiLCJfaSIsImF0dGFjaEV2ZW50IiwiX3NldEJvZHlDbGFzcyIsIl9ldmVudE9iaiIsImV2ZW50UmVtb3ZlIiwiX2V2ZW50T2JqRXNjIiwiX2V2ZW50UmVzaXplIiwiZGV0YWNoRXZlbnQiLCJldmVudCIsImRvY3VtZW50IiwiYm9keSIsImUiLCJrZXlDb2RlIiwiX3NraXAiLCJnZXRDdXJyZW50U3RlcCIsImNvbmZpZyIsImxlbmd0aCIsIl9yZWZyZXNoIiwic3RlcHNfc2V0dGVyIiwibmV3Q29uZmlnIiwiaSIsInBhZGRpbmciLCJ0ZXh0IiwicHVzaCIsIl9kcmF3T3ZlciIsInN0ZXBFbCIsImlubmVySFRNTCIsIl9zZXRQcm9wZXJ0aWVzIiwiY2FsbEV2ZW50IiwiX2RyYXdIaW50Iiwic2V0dGluZ3MiLCJfc3RlcCIsInRpdGxlIiwicmVmcmVzaCIsImVudiIsIm1vYmlsZSIsInNjcm9sbEludG9WaWV3IiwiX3JlRHJhdyIsIl9oaW50IiwicXVlcnlTZWxlY3RvciIsImRvY0VsZW0iLCJkb2N1bWVudEVsZW1lbnQiLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbExlZnQiLCJsZWZ0IiwiaGlnaGxpZ2h0V2lkdGgiLCJ3aWR0aCIsImhpZ2hsaWdodEhlaWdodCIsImhlaWdodCIsImhpbnRMZWZ0IiwiaGludFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJoaW50SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZWxUb3AiLCJ0b3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImhpbnRUb3AiLCJ3aW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsIk1hdGgiLCJtaW4iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwidXNlclNlbGVjdCIsInNldFRpbWVvdXQiLCJjc3NUZXh0IiwiX3NldEF0dHJpYnV0ZXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaHRtbCIsImFkZENzcyIsImdldE5vZGUiLCJlbCIsImF0dHJzIiwia2V5Iiwic2V0QXR0cmlidXRlIiwiZXZlbnRFbCIsIl9nZXRFbCIsInJlbW92ZUNzcyIsIl9zZXRFdmVudHNCdXR0b25zIiwibWFyZ2luIiwiX3NldEVsRXZlbnRzIiwiX3ByZXZCdXR0b24iLCJjbGFzc0xpc3QiLCJjb250YWlucyIsIl9uZXh0QnV0dG9uIiwicmVtb3ZlIiwiJCQiLCJfZHJhd1N0ZXBzIiwicXVlcnlTZWxlY3RvckFsbCIsIl9uZXh0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZXZlbnRTdGVwIiwiZm9jdXMiLCJ0eXBlIiwiYWN0aW9uIiwicHJldmlvdXMiLCJwcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfbmV4dFN0ZXAiLCJibHVyIiwiaGlkZSIsImZpcnN0RHJhdyIsInNob3ciLCJzdmciLCJzdGFydCIsImVuZCIsInJlc3VtZSIsInN0ZXBOdW1iZXIiLCJnZXRTdGVwcyIsInNldFN0ZXBzIiwidmFsdWUiLCJkZWZpbmUiLCJ1aSIsInZpZXciLCJFdmVudFN5c3RlbSIsImJlIiwibG9jYWxlcyIsImRlIiwiZW4iLCJlcyIsImZyIiwiaXQiLCJqYSIsInB0IiwicnUiLCJ6aCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRU8sSUFBSUEsMEJBQVM7QUFDbkJDLE9BQU07QUFDTEMsUUFBTSxNQUREO0FBRUxDLFFBQU0sVUFGRDtBQUdMQyxRQUFNO0FBSEQ7QUFEYSxDQUFiLEM7Ozs7OztBQ1hQLHlDOzs7Ozs7Ozs7QUNBQTs7QUFDQTs7QUFFQUMsTUFBTUMsSUFBTixDQUFX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QW5CLElBQTRCO0FBQzNDL0ksT0FBSztBQUNKQyxRQUFNLFdBREY7QUFFSkMsUUFBTSxZQUZGO0FBR0pDLFFBQU07QUFIRjtBQURzQyxDQUFyQyxDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUNPLElBQUlxSixrQkFBS3BKLE1BQU1DLElBQU4sQ0FBVzBJLE9BQVgsQ0FBbUIsT0FBbkIsSUFBOEI7QUFDN0MvSSxPQUFLO0FBQ0pDLFFBQU0sS0FERjtBQUVKQyxRQUFNLElBRkY7QUFHSkMsUUFBTTtBQUhGO0FBRHdDLENBQXZDLEMiLCJmaWxlIjoiaGludC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2NvZGViYXNlL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA4MjIwMjU1MGZkYzA1MWNhMTg4IiwiaW1wb3J0IFwiLi9pMThuL2VuXCI7XG5pbXBvcnQgXCIuL2kxOG4vZnJcIjtcbmltcG9ydCBcIi4vaTE4bi9iZVwiO1xuaW1wb3J0IFwiLi9pMThuL2RlXCI7XG5pbXBvcnQgXCIuL2kxOG4vZXNcIjtcbmltcG9ydCBcIi4vaTE4bi9pdFwiO1xuaW1wb3J0IFwiLi9pMThuL2phXCI7XG5pbXBvcnQgXCIuL2kxOG4vcHRcIjtcbmltcG9ydCBcIi4vaTE4bi9ydVwiO1xuaW1wb3J0IFwiLi9pMThuL3poXCI7XG5cbmV4cG9ydCBsZXQgbG9jYWxlID0ge1xuXHRoaW50OiB7XG5cdFx0bmV4dDogXCJOZXh0XCIsXG5cdFx0cHJldjogXCJQcmV2aW91c1wiLFxuXHRcdGxhc3Q6IFwiRW5kIFRvdXJcIlxuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvbG9jYWxlcy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2VzL2hpbnQubGVzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgXCIuL2hpbnQubGVzc1wiO1xuaW1wb3J0IHsgbG9jYWxlIH0gZnJvbSBcIi4vbG9jYWxlc1wiO1xuXG53ZWJpeC5pMThuLmhpbnQgPSB3ZWJpeC5leHRlbmQod2ViaXguaTE4biwgbG9jYWxlKS5oaW50O1xuXG53ZWJpeC5wcm90b1VJKHtcblx0bmFtZTogXCJoaW50XCIsXG5cdGRlZmF1bHRzOiB7XG5cdFx0c3RlcHM6IFtdLFxuXHRcdGJvcmRlcmxlc3M6IHRydWUsXG5cdFx0bmV4dEJ1dHRvbjogdHJ1ZSxcblx0XHRwcmV2QnV0dG9uOiB0cnVlXG5cdH0sXG5cdCRpbml0KCkge1xuXHRcdHRoaXMuJHZpZXcuY2xhc3NOYW1lICs9IFwiIHdlYml4X2hpbnRfdmlld1wiO1xuXHRcdHRoaXMuX2kgPSAtMTtcblx0XHR0aGlzLmF0dGFjaEV2ZW50KFwib25EZXN0cnVjdFwiLCAoKSA9PiB7XG5cdFx0XHR0aGlzLl9zZXRCb2R5Q2xhc3MoXCJyZW1vdmVcIik7XG5cdFx0XHRpZih0aGlzLl9ldmVudE9iaikge1xuXHRcdFx0XHR3ZWJpeC5ldmVudFJlbW92ZSh0aGlzLl9ldmVudE9iaik7XG5cdFx0XHR9XG5cdFx0XHRpZih0aGlzLl9ldmVudE9iakVzYykge1xuXHRcdFx0XHR3ZWJpeC5ldmVudFJlbW92ZSh0aGlzLl9ldmVudE9iakVzYyk7XG5cdFx0XHR9XG5cdFx0XHRpZih0aGlzLl9ldmVudFJlc2l6ZSkge1xuXHRcdFx0XHR3ZWJpeC5kZXRhY2hFdmVudCh0aGlzLl9ldmVudFJlc2l6ZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5fZXZlbnRPYmpFc2MgPSB3ZWJpeC5ldmVudChkb2N1bWVudC5ib2R5LFwia2V5ZG93blwiLCAoZSkgPT4ge1xuXHRcdFx0Ly8gZXNjYXBlXG5cdFx0XHRpZiAoZS5rZXlDb2RlID09IDI3KXtcblx0XHRcdFx0dGhpcy5fc2tpcCgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0dGhpcy5fZXZlbnRSZXNpemUgPSB3ZWJpeC5hdHRhY2hFdmVudChcIm9uUmVzaXplXCIsICgpID0+IHtcblx0XHRcdGlmKHRoaXMuZ2V0Q3VycmVudFN0ZXAoKSAmJiB0aGlzLl9pICE9PSB0aGlzLmNvbmZpZy5zdGVwcy5sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy5fcmVmcmVzaCh0aGlzLmdldEN1cnJlbnRTdGVwKCksIGZhbHNlLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblx0c3RlcHNfc2V0dGVyKGNvbmZpZykge1xuXHRcdGxldCBuZXdDb25maWcgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNvbmZpZy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uZmlnW2ldLnBhZGRpbmcgPSBjb25maWdbaV0ucGFkZGluZyB8fCAwO1xuXHRcdFx0Y29uZmlnW2ldLnRleHQgPSBjb25maWdbaV0udGV4dCB8fCBcIlwiO1xuXHRcdFx0bmV3Q29uZmlnLnB1c2goY29uZmlnW2ldKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ld0NvbmZpZztcblx0fSxcblx0X2RyYXdPdmVyKHN0ZXBFbCkge1xuXHRcdHRoaXMuJHZpZXcuaW5uZXJIVE1MICs9IGA8c3ZnIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGNsYXNzPVwid2ViaXhfaGludF9vdmVybGF5XCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIj5cblx0XHRcdDxkZWZzPlxuXHRcdFx0XHQ8bWFzayBpZD1cImhvbGVcIj5cblx0XHRcdFx0XHQ8cmVjdCBjbGFzcz1cIndlYml4X2hpbnRfb3ZlcmxheV9ob2xlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbGw9XCJ3aGl0ZVwiLz5cblx0XHRcdFx0XHQ8cmVjdCBjbGFzcz1cIndlYml4X2hpbnRfb3ZlcmxheV9ob2xlIHdlYml4X2hpbnRfb3ZlcmxheV9ob2xlX2VsXCIgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMFwiIGhlaWdodD1cIjBcIiBmaWxsPVwid2hpdGVcIi8+XG5cdFx0XHRcdDwvbWFzaz5cblx0XHRcdDwvZGVmcz5cblx0XHRcdDxyZWN0IGNsYXNzPVwid2ViaXhfaGludF9vdmVybGF5X2hvbGVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgbWFzaz1cInVybCgjaG9sZSlcIiAvPlxuXHRcdDwvc3ZnPmA7XG5cdFx0dGhpcy5fc2V0UHJvcGVydGllcyhzdGVwRWwpO1xuXHRcdHRoaXMuY2FsbEV2ZW50KFwib25BZnRlclN0YXJ0XCIsIFtdKTtcblx0fSxcblx0X2RyYXdIaW50KCkge1xuXHRcdGxldCBzZXR0aW5ncyA9IHRoaXMuY29uZmlnO1xuXHRcdHRoaXMuJHZpZXcuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwid2ViaXhfaGludFwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9J3dlYml4X2hpbnRfdGl0bGUnPiR7dGhpcy5fc3RlcC50aXRsZT90aGlzLl9zdGVwLnRpdGxlOlwiXCJ9PC9zcGFuPlxuXHRcdFx0PHAgY2xhc3M9XCJ3ZWJpeF9oaW50X2xhYmVsXCI+JHt0aGlzLl9zdGVwLnRleHR9PC9wPlxuXHRcdFx0PGRpdiBjbGFzcz1cIndlYml4X2hpbnRfcHJvZ3Jlc3NcIj5cblx0XHRcdFx0JHt0aGlzLl9pKzF9LyR7dGhpcy5jb25maWcuc3RlcHMubGVuZ3RofVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwid2ViaXhfaGludF9idXR0b25zXCI+XG5cdFx0XHRcdCR7c2V0dGluZ3MucHJldkJ1dHRvbiE9PSBmYWxzZT9gPGJ1dHRvbiBjbGFzcz1cIndlYml4X2hpbnRfYnV0dG9uIHdlYml4X2hpbnRfYnV0dG9uX3ByZXYgd2ViaXhfaGludF9idXR0b25faGlkZGVuXCI+JHt0eXBlb2Ygc2V0dGluZ3MucHJldkJ1dHRvbiA9PSBcInN0cmluZ1wiP3NldHRpbmdzLnByZXZCdXR0b246YCR7d2ViaXguaTE4bi5oaW50LnByZXZ9YH08L2J1dHRvbj5gOlwiXCJ9XG5cdFx0XHRcdCR7c2V0dGluZ3MubmV4dEJ1dHRvbiE9PSBmYWxzZT9gPGJ1dHRvbiBjbGFzcz1cIndlYml4X2hpbnRfYnV0dG9uIHdlYml4X2hpbnRfYnV0dG9uX25leHRcIj4ke3R5cGVvZiBzZXR0aW5ncy5uZXh0QnV0dG9uID09IFwic3RyaW5nXCI/c2V0dGluZ3MubmV4dEJ1dHRvbjpgJHt3ZWJpeC5pMThuLmhpbnQubmV4dH1gfTwvYnV0dG9uPmA6XCJcIn1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGJ1dHRvbiBjbGFzcz1cIndlYml4X2hpbnRfYnV0dG9uX2Nsb3NlXCIgdGl0bGU9XCJDbG9zZVwiPiYjMTAwMDU7PC9idXR0b24+XG5cdFx0PC9kaXY+YDtcblx0fSxcblx0X3NldFByb3BlcnRpZXMoc3RlcEVsLCByZWZyZXNoKSB7XG5cdFx0aWYoIXN0ZXBFbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKCF3ZWJpeC5lbnYubW9iaWxlKSB7XG5cdFx0XHRzdGVwRWwuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xuXHRcdH1cblx0XHR0aGlzLl9zdGVwID0gdGhpcy5jb25maWcuc3RlcHNbdGhpcy5faV07XG5cdFx0dGhpcy5fcmVEcmF3KHN0ZXBFbCwgcmVmcmVzaCk7XG5cdFx0dGhpcy5faGludCA9IHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcIi53ZWJpeF9oaW50XCIpO1xuXG5cdFx0bGV0IHBhZGRpbmcgPSAzMDtcblx0XHRsZXQgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0XHRsZXQgYm94ID0gc3RlcEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGxldCBlbExlZnQgPSBib3gubGVmdCArIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHRsZXQgaGlnaGxpZ2h0V2lkdGggPSBib3gud2lkdGg7XG5cdFx0bGV0IGhpZ2hsaWdodEhlaWdodCA9IGJveC5oZWlnaHQ7XG5cdFx0bGV0IGhpbnRMZWZ0ID0gZWxMZWZ0IC0gdGhpcy5fc3RlcC5wYWRkaW5nO1xuXHRcdGxldCBoaW50V2lkdGggPSB0aGlzLl9oaW50Lm9mZnNldFdpZHRoO1xuXHRcdGxldCBoaW50SGVpZ2h0ID0gdGhpcy5faGludC5vZmZzZXRIZWlnaHQ7XG5cdFx0bGV0IGVsVG9wID0gd2ViaXguZW52Lm1vYmlsZSA/IGJveC50b3AgKyB0aGlzLl9zdGVwLnBhZGRpbmcgOiBib3gudG9wICsgdGhpcy5fc3RlcC5wYWRkaW5nICsgd2luZG93LnBhZ2VZT2Zmc2V0O1xuXHRcdGxldCBoaW50VG9wID0gZWxUb3AgKyBoaWdobGlnaHRIZWlnaHQgKyB0aGlzLl9zdGVwLnBhZGRpbmcgKyBwYWRkaW5nO1xuXHRcdGxldCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICYmIGRvY0VsZW0uY2xpZW50V2lkdGggPyBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCwgZG9jRWxlbS5jbGllbnRXaWR0aCkgOiB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2NFbGVtLmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5jbGllbnRXaWR0aDtcblx0XHRsZXQgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICYmIGRvY0VsZW0uY2xpZW50SGVpZ2h0ID8gTWF0aC5taW4od2luZG93LmlubmVySGVpZ2h0LCBkb2NFbGVtLmNsaWVudEhlaWdodCkgOiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jRWxlbS5jbGllbnRIZWlnaHQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmNsaWVudEhlaWdodDtcblx0XHRcblx0XHRzdGVwRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYWxsXCI7XG5cdFx0c3RlcEVsLnN0eWxlLnVzZXJTZWxlY3QgPSBcImluaXRpYWxcIjtcblxuXHRcdC8vIHNldCBoaW50IHBvc2l0aW9uXG5cdFx0aWYoZWxMZWZ0IC0gd2luZG93V2lkdGggPiAwKSB7XG5cdFx0XHRlbExlZnQgPSBlbExlZnQgLSB3aW5kb3dXaWR0aCArIGhpbnRXaWR0aCArIGhpZ2hsaWdodFdpZHRoO1xuXHRcdH1cblxuXHRcdGlmKHdpbmRvd0hlaWdodCAvMiA8IGVsVG9wKSB7IC8vIGJvdHRvbVxuXHRcdFx0aGludFRvcCA9IGVsVG9wIC0gaGludEhlaWdodCAtIHBhZGRpbmcgLSB0aGlzLl9zdGVwLnBhZGRpbmcqMjtcblx0XHR9IGVsc2UgaWYod2luZG93V2lkdGggLzIgPCBlbExlZnQgJiYgZWxMZWZ0ICsgaGludFdpZHRoIDwgd2luZG93V2lkdGggJiYgaGlnaGxpZ2h0V2lkdGggKyBoaW50V2lkdGggPCB3aW5kb3dXaWR0aCkgeyAvLyByaWdodFxuXHRcdFx0aGludFRvcCA9IGhpZ2hsaWdodEhlaWdodCAvIDIgKyBlbFRvcCAtIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHRcdGhpbnRMZWZ0ID0gZWxMZWZ0IC0gaGludFdpZHRoIC0gdGhpcy5fc3RlcC5wYWRkaW5nIC0gcGFkZGluZztcblx0XHR9IGVsc2UgaWYod2luZG93V2lkdGggLzIgPiBlbExlZnQgJiYgZWxMZWZ0ICsgaGludFdpZHRoICsgaGlnaGxpZ2h0V2lkdGggPCB3aW5kb3dXaWR0aCkgeyAvLyBsZWZ0XG5cdFx0XHRoaW50TGVmdCA9IGhpZ2hsaWdodFdpZHRoICsgZWxMZWZ0ICsgcGFkZGluZztcblx0XHRcdGhpbnRUb3AgPSBlbFRvcCAtIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHR9IGVsc2UgaWYoaGludFRvcD53aW5kb3dIZWlnaHQgJiYgaGludEhlaWdodCtoaWdobGlnaHRIZWlnaHQ8d2luZG93SGVpZ2h0KXsvL3RvcCwgYnV0IGhpbnQgZG9lcyBub3QgZml0XG5cdFx0XHRoaW50VG9wID0gZWxUb3AgLSBoaW50SGVpZ2h0IC0gcGFkZGluZyAtIHRoaXMuX3N0ZXAucGFkZGluZyoyO1xuXHRcdH0gZWxzZSBpZihoaW50VG9wID53aW5kb3dIZWlnaHQgfHwgaGludFRvcCtoaW50SGVpZ2h0PndpbmRvd0hlaWdodCl7XG5cdFx0XHRoaW50TGVmdCA9IGVsTGVmdCAtIGhpbnRXaWR0aCAtIHRoaXMuX3N0ZXAucGFkZGluZyoyIC0gcGFkZGluZztcblx0XHRcdGhpbnRUb3AgPSBlbFRvcCAtIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHR9XG5cblx0XHRpZihoaW50TGVmdCArIGhpbnRXaWR0aCA+IHdpbmRvd1dpZHRoKSB7IC8vIGZvciBvdmVyZmxvd1xuXHRcdFx0aGludExlZnQgPSB3aW5kb3dXaWR0aCAtIGhpbnRXaWR0aDtcblx0XHR9IGVsc2UgaWYoaGludFRvcCA8IDAgfHwgaGludFRvcCA+IHdpbmRvd0hlaWdodCkge1xuXHRcdFx0aGludFRvcCA9IHBhZGRpbmc7XG5cdFx0fSBlbHNlIGlmKHdpbmRvd1dpZHRoIDwgaGlnaGxpZ2h0V2lkdGggfHwgaGludExlZnQgPCAwKSB7XG5cdFx0XHRoaW50TGVmdCA9IHBhZGRpbmc7XG5cdFx0fVxuXHRcdGlmKHdlYml4LmVudi5tb2JpbGUpIHtcblx0XHRcdHN0ZXBFbC5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XG5cdFx0fVxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5faGludC5zdHlsZS5jc3NUZXh0ID0gYHRvcDoke2hpbnRUb3B9cHg7IGxlZnQ6JHtoaW50TGVmdH1weDtgO1xuXHRcdFx0dGhpcy5fc2V0QXR0cmlidXRlcyh0aGlzLiR2aWV3LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ3ZWJpeF9oaW50X292ZXJsYXlfaG9sZV9lbFwiKVswXSwge1wieFwiOmVsTGVmdC10aGlzLl9zdGVwLnBhZGRpbmcqMiwgXCJ5XCI6ZWxUb3AtdGhpcy5fc3RlcC5wYWRkaW5nKjIsIFwid2lkdGhcIjpoaWdobGlnaHRXaWR0aCt0aGlzLl9zdGVwLnBhZGRpbmcgKjIsIFwiaGVpZ2h0XCI6aGlnaGxpZ2h0SGVpZ2h0K3RoaXMuX3N0ZXAucGFkZGluZyoyfSk7XG5cdFx0XHR3ZWJpeC5odG1sLmFkZENzcyh0aGlzLmdldE5vZGUoKSwgXCJ3ZWJpeF9oaW50X2FuaW1hdGVkXCIpO1xuXHRcdH0sIDUwMCk7XG5cdH0sXG5cdF9zZXRBdHRyaWJ1dGVzKGVsLCBhdHRycykge1xuXHRcdGZvcih2YXIga2V5IGluIGF0dHJzKSB7XG5cdFx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0XHR9XG5cdH0sXG5cdF9yZURyYXcoc3RlcEVsLCByZWZyZXNoKSB7XG5cdFx0bGV0IHRpdGxlID0gdGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwiLndlYml4X2hpbnRfdGl0bGVcIik7XG5cdFx0bGV0IGVsO1xuXG5cdFx0dGhpcy5fc3RlcC5ldmVudEVsP2VsID0gdGhpcy5fZ2V0RWwodGhpcy5fc3RlcC5ldmVudEVsKTplbCA9IHN0ZXBFbDtcblx0XHRpZih0aGlzLl9pID4gMCAmJiAhcmVmcmVzaCkge1xuXHRcdFx0d2ViaXguaHRtbC5yZW1vdmVDc3ModGhpcy5nZXROb2RlKCksIFwid2ViaXhfaGludF9hbmltYXRlZFwiKTtcblx0XHRcdHRpdGxlLmlubmVySFRNTCA9IHRoaXMuX3N0ZXAudGl0bGUgfHwgXCJcIjtcblx0XHRcdHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcIi53ZWJpeF9oaW50X2xhYmVsXCIpLmlubmVySFRNTCA9IHRoaXMuX3N0ZXAudGV4dCB8fCBcIlwiO1xuXHRcdFx0dGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwiLndlYml4X2hpbnRfcHJvZ3Jlc3NcIikuaW5uZXJIVE1MID0gYCR7dGhpcy5faSsxfS8ke3RoaXMuY29uZmlnLnN0ZXBzLmxlbmd0aH1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9kcmF3SGludCgpO1xuXHRcdFx0dGhpcy5fc2V0RXZlbnRzQnV0dG9ucyhlbCk7XG5cdFx0fVxuXHRcdGlmKCF0aGlzLl9zdGVwLnRpdGxlICYmIHRpdGxlKSB7XG5cdFx0XHR0aXRsZS5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcblx0XHR9XG5cdFx0dGhpcy5fc2V0RWxFdmVudHMoZWwpO1xuXG5cdFx0aWYodGhpcy5fcHJldkJ1dHRvbikge1xuXHRcdFx0aWYodGhpcy5faSA+IDApIHsgLy8gcHJldmlvdXMgYnV0dG9uIHNob3dcblx0XHRcdFx0d2ViaXguaHRtbC5yZW1vdmVDc3ModGhpcy5fcHJldkJ1dHRvbiwgXCJ3ZWJpeF9oaW50X2J1dHRvbl9oaWRkZW5cIik7XG5cdFx0XHR9IGVsc2UgaWYodGhpcy5fcHJldkJ1dHRvbiAmJiAhdGhpcy5fcHJldkJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJ3ZWJpeF9oaW50X2J1dHRvbl9oaWRkZW5cIikpIHtcblx0XHRcdFx0d2ViaXguaHRtbC5hZGRDc3ModGhpcy5fcHJldkJ1dHRvbiwgXCJ3ZWJpeF9oaW50X2J1dHRvbl9oaWRkZW5cIik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdGlmKHRoaXMuX2kgPT09IHRoaXMuY29uZmlnLnN0ZXBzLmxlbmd0aCAtMSAmJiB0aGlzLl9uZXh0QnV0dG9uKSB7IC8vIG5leHQgYnV0dG9uIHRleHRcblx0XHRcdHRoaXMuX25leHRCdXR0b24uaW5uZXJIVE1MID0gYCR7dHlwZW9mIHRoaXMuY29uZmlnLm5leHRCdXR0b24gPT0gXCJzdHJpbmdcIj90aGlzLmNvbmZpZy5uZXh0QnV0dG9uOmAke3dlYml4LmkxOG4uaGludC5sYXN0fWB9YDtcblx0XHR9XG5cdH0sXG5cdF9zZXRCb2R5Q2xhc3MocmVtb3ZlKSB7XG5cdFx0bGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXHRcdGlmKGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwid2ViaXhfaGludF9vdmVyZmxvd1wiKSB8fCByZW1vdmUpIHtcblx0XHRcdHdlYml4Lmh0bWwucmVtb3ZlQ3NzKGJvZHksIFwid2ViaXhfaGludF9vdmVyZmxvd1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2ViaXguaHRtbC5hZGRDc3MoYm9keSwgXCJ3ZWJpeF9oaW50X292ZXJmbG93XCIpO1xuXHRcdH1cblx0fSxcblx0X2dldEVsKGVsKSB7XG5cdFx0aWYoJCQoZWwpKSB7XG5cdFx0XHRyZXR1cm4gJCQoZWwpLmdldE5vZGUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpO1xuXHRcdH1cblx0fSxcblx0X2RyYXdTdGVwcyhyZWZyZXNoKSB7XG5cdFx0aWYodGhpcy5jb25maWcuc3RlcHNbdGhpcy5faV0pIHtcblx0XHRcdGxldCBlbCA9IHRoaXMuX2dldEVsKHRoaXMuY29uZmlnLnN0ZXBzW3RoaXMuX2ldLmVsKTtcblx0XHRcdGlmKHRoaXMuX2kgPT09IDAgJiYgIXJlZnJlc2gpIHtcblx0XHRcdFx0dGhpcy5jYWxsRXZlbnQoXCJvbkJlZm9yZVN0YXJ0XCIsIFtdKTtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7IC8vIGZvciBmaXJzdCBpbml0XG5cdFx0XHRcdFx0dGhpcy5fZHJhd092ZXIoZWwpO1xuXHRcdFx0XHR9LCAxMDApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fc2V0UHJvcGVydGllcyhlbCwgcmVmcmVzaCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3NraXAoKTtcblx0XHR9XG5cdH0sXG5cdF9zZXRFdmVudHNCdXR0b25zKCkge1xuXHRcdHRoaXMuX3ByZXZCdXR0b24gPSB0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud2ViaXhfaGludF9idXR0b25fcHJldlwiKVswXTtcblx0XHR0aGlzLl9uZXh0QnV0dG9uID0gdGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yQWxsKFwiLndlYml4X2hpbnRfYnV0dG9uX25leHRcIilbMF07XG5cdFx0bGV0IGVsO1xuXHRcdGlmKHRoaXMuX25leHRCdXR0b24pIHtcblx0XHRcdHdlYml4LmV2ZW50KHRoaXMuX25leHRCdXR0b24sIFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl9uZXh0KGVsLCBcIm5leHRcIik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYodGhpcy5fcHJldkJ1dHRvbikge1xuXHRcdFx0d2ViaXguZXZlbnQodGhpcy5fcHJldkJ1dHRvbiwgXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdHdlYml4Lmh0bWwucmVtb3ZlQ3NzKHRoaXMuZ2V0Tm9kZSgpLCBcIndlYml4X2hpbnRfYW5pbWF0ZWRcIik7XG5cdFx0XHRcdHRoaXMuX2hpbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9oaW50KTtcblx0XHRcdFx0dGhpcy5faSAtPSAyO1xuXHRcdFx0XHR0aGlzLl9uZXh0KGVsLCBcInByZXZpb3VzXCIpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHdlYml4LmV2ZW50KHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcIi53ZWJpeF9oaW50X2J1dHRvbl9jbG9zZVwiKSwgXCJjbGlja1wiLCAoKSA9PiB7IHRoaXMuX3NraXAoKTsgfSk7XG5cdH0sXG5cdF9zZXRFbEV2ZW50cyhzdGVwRWwpIHtcblx0XHRsZXQgZXZlbnRTdGVwID0gdGhpcy5fc3RlcC5ldmVudDtcblx0XHRzdGVwRWwuZm9jdXMoKTtcblx0XHRpZihldmVudFN0ZXApIHtcblx0XHRcdGlmKGV2ZW50U3RlcCA9PT0gXCJlbnRlclwiKSB7XG5cdFx0XHRcdGV2ZW50U3RlcCA9IFwia2V5ZG93blwiO1xuXHRcdFx0fVxuXHRcdFx0aWYodGhpcy5fZXZlbnRPYmopIHtcblx0XHRcdFx0d2ViaXguZXZlbnRSZW1vdmUodGhpcy5fZXZlbnRPYmopO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fZXZlbnRPYmogPSB3ZWJpeC5ldmVudChzdGVwRWwsIGV2ZW50U3RlcCwgKGUpID0+IHtcblx0XHRcdFx0aWYoZXZlbnRTdGVwID09IGUudHlwZSkge1xuXHRcdFx0XHRcdGlmKGUudHlwZSA9PT0gXCJrZXlkb3duXCIgJiYgZS5rZXlDb2RlICE9PSAxMykgcmV0dXJuO1xuXHRcdFx0XHRcdHN0ZXBFbC5mb2N1cygpO1xuXHRcdFx0XHRcdHRoaXMuX25leHQoc3RlcEVsKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH0sXG5cdF9uZXh0KHN0ZXBFbCwgYWN0aW9uKSB7XG5cdFx0YWN0aW9uID0gYWN0aW9uIHx8IFwibmV4dFwiO1xuXHRcdGlmICh0aGlzLl9zdGVwLm5leHQgJiYgYWN0aW9uID09PSBcIm5leHRcIiB8fCB0aGlzLl9zdGVwLnByZXZpb3VzICYmIGFjdGlvbiA9PT0gXCJwcmV2aW91c1wiKSB7XG5cdFx0XHRsZXQgcHJvbWlzZSA9IHRoaXMuX3N0ZXBbYWN0aW9uXSgpO1xuXHRcdFx0aWYgKHByb21pc2Upe1xuXHRcdFx0XHRwcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLl9uZXh0U3RlcChzdGVwRWwsIGFjdGlvbik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9uZXh0U3RlcChzdGVwRWwsIGFjdGlvbik7XG5cdFx0fVxuXHR9LFxuXHRfbmV4dFN0ZXAoc3RlcEVsLCBhY3Rpb24pIHtcblx0XHRsZXQgZWwgPSB0aGlzLl9nZXRFbCh0aGlzLl9zdGVwLmVsKTtcblx0XHRlbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJcIjtcblx0XHRlbC5zdHlsZS51c2VyU2VsZWN0ID0gXCJcIjtcblx0XHRlbC5ibHVyKCk7XG5cdFx0dGhpcy5faSsrO1xuXHRcdGlmKGFjdGlvbiAhPT0gXCJwcmV2aW91c1wiKSB7XG5cdFx0XHR0aGlzLl9kcmF3U3RlcHMoKTtcblx0XHRcdHRoaXMuY2FsbEV2ZW50KFwib25OZXh0XCIsIFt0aGlzLl9pKzFdKTtcblx0XHR9XG5cdFx0aWYoYWN0aW9uID09PSBcInByZXZpb3VzXCIpIHtcblx0XHRcdHRoaXMuX2RyYXdTdGVwcyhcInByZXZpb3VzXCIpO1xuXHRcdFx0dGhpcy5jYWxsRXZlbnQoXCJvblByZXZpb3VzXCIsIFt0aGlzLl9pKzFdKTtcblx0XHR9XG5cdH0sXG5cdF9za2lwKCkge1xuXHRcdGlmICh0aGlzLl9pID09PSAtMSkgcmV0dXJuO1xuXHRcdHRoaXMuY2FsbEV2ZW50KFwib25Ta2lwXCIsIFt0aGlzLl9pKzFdKTtcblx0XHR0aGlzLmhpZGUoKTtcblx0XHR0aGlzLl9zZXRCb2R5Q2xhc3MoXCJyZW1vdmVcIik7XG5cdFx0aWYodGhpcy5faSA9PT0gdGhpcy5jb25maWcuc3RlcHMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLmNhbGxFdmVudChcIm9uRW5kXCIsIFt0aGlzLl9pKzFdKTtcblx0XHR9XG5cdH0sXG5cdF9yZWZyZXNoKGksIGZpcnN0RHJhdykge1xuXHRcdHRoaXMuX2kgPSBpLTE7XG5cdFx0dGhpcy5fc2V0Qm9keUNsYXNzKCk7XG5cdFx0aWYodGhpcy5faGludCkge1xuXHRcdFx0aWYodGhpcy5faGludC5wYXJlbnROb2RlKVxuXHRcdFx0XHR0aGlzLl9oaW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5faGludCk7XG5cdFx0XHR3ZWJpeC5odG1sLnJlbW92ZUNzcyh0aGlzLmdldE5vZGUoKSwgXCJ3ZWJpeF9oaW50X2FuaW1hdGVkXCIpO1xuXHRcdH1cblx0XHR0aGlzLnNob3coKTtcblx0XHRpZihmaXJzdERyYXcpIHtcblx0XHRcdGxldCBzdmcgPSB0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIik7XG5cdFx0XHRpZiAoc3ZnKVxuXHRcdFx0XHRzdmcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdmcpO1xuXHRcdFx0dGhpcy5fZHJhd1N0ZXBzKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2RyYXdTdGVwcyhcInJlZnJlc2hcIik7XG5cdFx0XHR0aGlzLl9zZXRCb2R5Q2xhc3MoKTtcblx0XHR9XG5cdH0sXG5cdHN0YXJ0KCkge1xuXHRcdHRoaXMuX3JlZnJlc2goMSwgdHJ1ZSk7XG5cdH0sXG5cdGVuZCgpIHtcblx0XHR0aGlzLl9za2lwKCk7XG5cdH0sXG5cdGdldEN1cnJlbnRTdGVwKCkge1xuXHRcdHJldHVybiB0aGlzLl9pKzE7XG5cdH0sXG5cdHJlc3VtZShzdGVwTnVtYmVyKSB7XG5cdFx0aWYodGhpcy5faGludCl7XG5cdFx0XHRzdGVwTnVtYmVyID0gc3RlcE51bWJlciB8fCAxO1xuXHRcdFx0dGhpcy5fcmVmcmVzaChzdGVwTnVtYmVyKTtcblx0XHR9XG5cdH0sXG5cdGdldFN0ZXBzKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5zdGVwcztcblx0fSxcblx0c2V0U3RlcHModmFsdWUpIHtcblx0XHR0aGlzLmRlZmluZShcInN0ZXBzXCIsIHZhbHVlKTtcblx0fVxufSwgd2ViaXgudWkudmlldywgd2ViaXguRXZlbnRTeXN0ZW0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaGludC5qcyIsImV4cG9ydCBsZXQgYmUgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJiZS1CWVwiXSA9IHtcblx0aGludDp7XG5cdFx0bmV4dDogXCLQndCw0YHRgtGD0L/QvdGLXCIsXG5cdFx0cHJldjogXCLQn9Cw0L/Rj9GA0Y3QtNC90ZZcIixcblx0XHRsYXN0OiBcItCa0LDQvdC10YYg0KLRg9GA0LBcIlxuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9iZS5qcyIsIi8qR2VybWFuIChHZXJtYW55KSBsb2NhbGUqL1xuZXhwb3J0IGxldCBkZSA9IHdlYml4LmkxOG4ubG9jYWxlc1tcImRlLURFXCJdID0ge1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIk7DpGNoc3RlclwiLFxuXHRcdHByZXY6IFwiQmlzaGVyaWdlXCIsXG5cdFx0bGFzdDogXCJFbmRlIFRvdXJcIlxuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2RlLmpzIiwiZXhwb3J0IGxldCBlbiA9IHdlYml4LmkxOG4ubG9jYWxlc1tcImVuLVVTXCJdPXtcblx0aGludDp7XG5cdFx0bmV4dDogXCJOZXh0XCIsXG5cdFx0cHJldjogXCJQcmV2aW91c1wiLFxuXHRcdGxhc3Q6IFwiRW5kIFRvdXJcIlxuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9lbi5qcyIsIi8qU3BhbmlzaCAoU3BhaW4sIEludGVybmF0aW9uYWwgU29ydCkgbG9jYWxlKi9cbmV4cG9ydCBsZXQgZXMgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJlcy1FU1wiXSA9IHtcblx0aGludDp7XG5cdFx0bmV4dDogXCJTaWd1aWVudGVcIixcblx0XHRwcmV2OiBcIkFudGVyaW9yXCIsXG5cdFx0bGFzdDogXCJGaW4gZGUgVmlhamVcIlxuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2VzLmpzIiwiZXhwb3J0IGxldCBmciA9IHdlYml4LmkxOG4ubG9jYWxlc1tcImZyLUZSXCJdPXtcblx0aGludDp7XG5cdFx0bmV4dDogXCJQcm9jaGFpblwiLFxuXHRcdHByZXY6IFwiUHLDqWPDqWRlbnRcIixcblx0XHRsYXN0OiBcIkVuZCBUb3VyXCJcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vZnIuanMiLCIvKkl0YWxpYW4gKEl0YWx5KSBsb2NhbGUqL1xuZXhwb3J0IGxldCBpdCA9IHdlYml4LmkxOG4ubG9jYWxlc1tcIml0LUlUXCJdID0ge1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIlNlZ3VlbnRlXCIsXG5cdFx0cHJldjogXCJQcmVjZWRlbnRlXCIsXG5cdFx0bGFzdDogXCJFbmQgVG91clwiXG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vaXQuanMiLCJleHBvcnQgbGV0IGphID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiamEtSlBcIl09e1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIuasoVwiLFxuXHRcdHByZXY6IFwi5YmNXCIsXG5cdFx0bGFzdDogXCLntYLkuobjg4TjgqLjg7xcIlxuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9qYS5qcyIsImV4cG9ydCBsZXQgcHQgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJwdC1CUlwiXSA9IHtcblx0aGludDp7XG5cdFx0bmV4dDogXCJQcsOzeGltb1wiLFxuXHRcdHByZXY6IFwiQW50ZXJpb3JcIixcblx0XHRsYXN0OiBcIkVuZCBUb3VyXCJcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9wdC5qcyIsImV4cG9ydCBsZXQgcnUgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJydS1SVVwiXT17XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwi0KHQu9C10LTRg9GO0YnQuNC5XCIsXG5cdFx0cHJldjogXCLQn9GA0LXQtNGL0LTRg9GJ0LjQuVwiLFxuXHRcdGxhc3Q6IFwi0JrQvtC90LXRhiDQotGD0YDQsFwiXG5cdH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL3J1LmpzIiwiLypDaGluZXNlIChTaW1wbGlmaWVkLCBQUkMpIGxvY2FsZSovXG5leHBvcnQgbGV0IHpoID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiemgtQ05cIl0gPSB7XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwi5LiL5LiA5LiqXCIsXG5cdFx0cHJldjogXCLku6XliY1cIixcblx0XHRsYXN0OiBcIue7k+adn+W3oeinhlwiXG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vemguanMiXSwic291cmNlUm9vdCI6IiJ9