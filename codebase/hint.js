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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzFhMTY5ODk4MTA4ZDc0ZDdjMTkiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9sb2NhbGVzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5sZXNzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vYmUuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL2RlLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9lbi5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL2ZyLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9pdC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vamEuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9pMThuL3B0LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaTE4bi9ydS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL2kxOG4vemguanMiXSwibmFtZXMiOlsibG9jYWxlIiwiaGludCIsIm5leHQiLCJwcmV2IiwibGFzdCIsIndlYml4IiwiaTE4biIsImV4dGVuZCIsInByb3RvVUkiLCJuYW1lIiwiZGVmYXVsdHMiLCJzdGVwcyIsImJvcmRlcmxlc3MiLCJuZXh0QnV0dG9uIiwicHJldkJ1dHRvbiIsIiRpbml0IiwiJHZpZXciLCJjbGFzc05hbWUiLCJfaSIsImF0dGFjaEV2ZW50IiwiX3NldEJvZHlDbGFzcyIsIl9ldmVudE9iakVzYyIsImV2ZW50UmVtb3ZlIiwiZXZlbnQiLCJkb2N1bWVudCIsImJvZHkiLCJlIiwia2V5Q29kZSIsIl9za2lwIiwic3RlcHNfc2V0dGVyIiwiY29uZmlnIiwibmV3Q29uZmlnIiwiaSIsImxlbmd0aCIsInBhZGRpbmciLCJ0ZXh0IiwicHVzaCIsIl9kcmF3T3ZlciIsInN0ZXBFbCIsImlubmVySFRNTCIsIl9zZXRQcm9wZXJ0aWVzIiwiY2FsbEV2ZW50IiwiX2RyYXdIaW50Iiwic2V0dGluZ3MiLCJfc3RlcCIsInRpdGxlIiwicmVmcmVzaCIsImVudiIsIm1vYmlsZSIsInNjcm9sbEludG9WaWV3IiwiX3JlRHJhdyIsIl9oaW50IiwicXVlcnlTZWxlY3RvciIsImRvY0VsZW0iLCJkb2N1bWVudEVsZW1lbnQiLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJlbExlZnQiLCJsZWZ0IiwiaGlnaGxpZ2h0V2lkdGgiLCJ3aWR0aCIsImhpZ2hsaWdodEhlaWdodCIsImhlaWdodCIsImhpbnRMZWZ0IiwiaGludFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJoaW50SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwiZWxUb3AiLCJ0b3AiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImhpbnRUb3AiLCJ3aW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsIk1hdGgiLCJtaW4iLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwidXNlclNlbGVjdCIsImNzc1RleHQiLCJfc2V0QXR0cmlidXRlcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJodG1sIiwiYWRkQ3NzIiwiZ2V0Tm9kZSIsImVsIiwiYXR0cnMiLCJrZXkiLCJzZXRBdHRyaWJ1dGUiLCJldmVudEVsIiwiX2dldEVsIiwicmVtb3ZlQ3NzIiwiX3NldEV2ZW50c0J1dHRvbnMiLCJtYXJnaW4iLCJfc2V0RWxFdmVudHMiLCJfcHJldkJ1dHRvbiIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiX25leHRCdXR0b24iLCIkJCIsIl9kcmF3U3RlcHMiLCJzZXRUaW1lb3V0IiwicXVlcnlTZWxlY3RvckFsbCIsIl9uZXh0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZXZlbnRTdGVwIiwiZm9jdXMiLCJfZXZlbnRPYmoiLCJ0eXBlIiwiYWN0aW9uIiwicHJldmlvdXMiLCJwcm9taXNlIiwidGhlbiIsIl9uZXh0U3RlcCIsImJsdXIiLCJoaWRlIiwiX3JlZnJlc2giLCJmaXJzdERyYXciLCJzaG93Iiwic3ZnIiwic3RhcnQiLCJlbmQiLCJnZXRDdXJyZW50U3RlcCIsInJlc3VtZSIsInN0ZXBOdW1iZXIiLCJnZXRTdGVwcyIsInNldFN0ZXBzIiwidmFsdWUiLCJkZWZpbmUiLCJ1aSIsInZpZXciLCJFdmVudFN5c3RlbSIsImJlIiwibG9jYWxlcyIsImRlIiwiZW4iLCJlcyIsImZyIiwiaXQiLCJqYSIsInB0IiwicnUiLCJ6aCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRU8sSUFBSUEsMEJBQVM7QUFDbkJDLE9BQU07QUFDTEMsUUFBTSxNQUREO0FBRUxDLFFBQU0sVUFGRDtBQUdMQyxRQUFNO0FBSEQ7QUFEYSxDQUFiLEM7Ozs7OztBQ1hQLHlDOzs7Ozs7Ozs7QUNBQTs7QUFDQTs7QUFFQUMsTUFBTUMsSUFBTixDQUFXTCxJQUFYLEdBQWtCSSxNQUFNRSxNQUFOLENBQWFGLE1BQU1DLElBQW5CLG1CQUFp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QixJQUE0QjtBQUMzQzNJLE9BQUs7QUFDSkMsUUFBTSxHQURGO0FBRUpDLFFBQU0sR0FGRjtBQUdKQyxRQUFNO0FBSEY7QUFEc0MsQ0FBckMsQzs7Ozs7Ozs7Ozs7O0FDQUEsSUFBSStJLGtCQUFLOUksTUFBTUMsSUFBTixDQUFXc0ksT0FBWCxDQUFtQixPQUFuQixJQUE4QjtBQUM3QzNJLE9BQUs7QUFDSkMsUUFBTSxTQURGO0FBRUpDLFFBQU0sVUFGRjtBQUdKQyxRQUFNO0FBSEY7QUFEd0MsQ0FBdkMsQzs7Ozs7Ozs7Ozs7O0FDQUEsSUFBSWdKLGtCQUFLL0ksTUFBTUMsSUFBTixDQUFXc0ksT0FBWCxDQUFtQixPQUFuQixJQUE0QjtBQUMzQzNJLE9BQUs7QUFDSkMsUUFBTSxXQURGO0FBRUpDLFFBQU0sWUFGRjtBQUdKQyxRQUFNO0FBSEY7QUFEc0MsQ0FBckMsQzs7Ozs7Ozs7Ozs7O0FDQVA7QUFDTyxJQUFJaUosa0JBQUtoSixNQUFNQyxJQUFOLENBQVdzSSxPQUFYLENBQW1CLE9BQW5CLElBQThCO0FBQzdDM0ksT0FBSztBQUNKQyxRQUFNLEtBREY7QUFFSkMsUUFBTSxJQUZGO0FBR0pDLFFBQU07QUFIRjtBQUR3QyxDQUF2QyxDIiwiZmlsZSI6ImhpbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jb2RlYmFzZS9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjMWExNjk4OTgxMDhkNzRkN2MxOSIsImltcG9ydCBcIi4vaTE4bi9lblwiO1xuaW1wb3J0IFwiLi9pMThuL2ZyXCI7XG5pbXBvcnQgXCIuL2kxOG4vYmVcIjtcbmltcG9ydCBcIi4vaTE4bi9kZVwiO1xuaW1wb3J0IFwiLi9pMThuL2VzXCI7XG5pbXBvcnQgXCIuL2kxOG4vaXRcIjtcbmltcG9ydCBcIi4vaTE4bi9qYVwiO1xuaW1wb3J0IFwiLi9pMThuL3B0XCI7XG5pbXBvcnQgXCIuL2kxOG4vcnVcIjtcbmltcG9ydCBcIi4vaTE4bi96aFwiO1xuXG5leHBvcnQgbGV0IGxvY2FsZSA9IHtcblx0aGludDoge1xuXHRcdG5leHQ6IFwiTmV4dFwiLFxuXHRcdHByZXY6IFwiUHJldmlvdXNcIixcblx0XHRsYXN0OiBcIkVuZCBUb3VyXCJcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2xvY2FsZXMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlcy9oaW50Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFwiLi9oaW50Lmxlc3NcIjtcbmltcG9ydCB7IGxvY2FsZSB9IGZyb20gXCIuL2xvY2FsZXNcIjtcblxud2ViaXguaTE4bi5oaW50ID0gd2ViaXguZXh0ZW5kKHdlYml4LmkxOG4sIGxvY2FsZSkuaGludDtcblxud2ViaXgucHJvdG9VSSh7XG5cdG5hbWU6IFwiaGludFwiLFxuXHRkZWZhdWx0czoge1xuXHRcdHN0ZXBzOiBbXSxcblx0XHRib3JkZXJsZXNzOiB0cnVlLFxuXHRcdG5leHRCdXR0b246IHRydWUsXG5cdFx0cHJldkJ1dHRvbjogdHJ1ZVxuXHR9LFxuXHQkaW5pdCgpIHtcblx0XHR0aGlzLiR2aWV3LmNsYXNzTmFtZSArPSBcIiB3ZWJpeF9oaW50X3ZpZXdcIjtcblx0XHR0aGlzLl9pID0gLTE7XG5cdFx0dGhpcy5hdHRhY2hFdmVudChcIm9uRGVzdHJ1Y3RcIiwgKCkgPT4ge1xuXHRcdFx0dGhpcy5fc2V0Qm9keUNsYXNzKCk7XG5cdFx0XHRpZih0aGlzLl9ldmVudE9iakVzYykge1xuXHRcdFx0XHR3ZWJpeC5ldmVudFJlbW92ZSh0aGlzLl9ldmVudE9iakVzYyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5fZXZlbnRPYmpFc2MgPSB3ZWJpeC5ldmVudChkb2N1bWVudC5ib2R5LFwia2V5ZG93blwiLCAoZSkgPT4ge1xuXHRcdFx0Ly8gZXNjYXBlXG5cdFx0XHRpZiAoZS5rZXlDb2RlID09IDI3KXtcblx0XHRcdFx0dGhpcy5fc2tpcCgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXHRzdGVwc19zZXR0ZXIoY29uZmlnKSB7XG5cdFx0dmFyIG5ld0NvbmZpZyA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY29uZmlnLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25maWdbaV0ucGFkZGluZyA9IGNvbmZpZ1tpXS5wYWRkaW5nIHx8IDA7XG5cdFx0XHRjb25maWdbaV0udGV4dCA9IGNvbmZpZ1tpXS50ZXh0IHx8IFwiXCI7XG5cdFx0XHRuZXdDb25maWcucHVzaChjb25maWdbaV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3Q29uZmlnO1xuXHR9LFxuXHRfZHJhd092ZXIoc3RlcEVsKSB7XG5cdFx0dGhpcy4kdmlldy5pbm5lckhUTUwgKz0gYDxzdmcgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgY2xhc3M9XCJ3ZWJpeF9oaW50X292ZXJsYXlcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiPlxuXHRcdFx0PGRlZnM+XG5cdFx0XHRcdDxtYXNrIGlkPVwiaG9sZVwiPlxuXHRcdFx0XHRcdDxyZWN0IGNsYXNzPVwid2ViaXhfaGludF9vdmVybGF5X2hvbGVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cIndoaXRlXCIvPlxuXHRcdFx0XHRcdDxyZWN0IGNsYXNzPVwid2ViaXhfaGludF9vdmVybGF5X2hvbGUgd2ViaXhfaGludF9vdmVybGF5X2hvbGVfZWxcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIwXCIgaGVpZ2h0PVwiMFwiIGZpbGw9XCJ3aGl0ZVwiLz5cblx0XHRcdFx0PC9tYXNrPlxuXHRcdFx0PC9kZWZzPlxuXHRcdFx0PHJlY3QgY2xhc3M9XCJ3ZWJpeF9oaW50X292ZXJsYXlfaG9sZVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBtYXNrPVwidXJsKCNob2xlKVwiIC8+XG5cdFx0PC9zdmc+YDtcblx0XHR0aGlzLl9zZXRQcm9wZXJ0aWVzKHN0ZXBFbCk7XG5cdFx0dGhpcy5jYWxsRXZlbnQoXCJvbkFmdGVyU3RhcnRcIiwgW10pO1xuXHR9LFxuXHRfZHJhd0hpbnQoKSB7XG5cdFx0bGV0IHNldHRpbmdzID0gdGhpcy5jb25maWc7XG5cdFx0dGhpcy4kdmlldy5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJ3ZWJpeF9oaW50XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz0nd2ViaXhfaGludF90aXRsZSc+JHt0aGlzLl9zdGVwLnRpdGxlP3RoaXMuX3N0ZXAudGl0bGU6XCJcIn08L3NwYW4+XG5cdFx0XHQ8cCBjbGFzcz1cIndlYml4X2hpbnRfbGFiZWxcIj4ke3RoaXMuX3N0ZXAudGV4dH08L3A+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwid2ViaXhfaGludF9wcm9ncmVzc1wiPlxuXHRcdFx0XHQke3RoaXMuX2krMX0vJHt0aGlzLmNvbmZpZy5zdGVwcy5sZW5ndGh9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ3ZWJpeF9oaW50X2J1dHRvbnNcIj5cblx0XHRcdFx0JHtzZXR0aW5ncy5wcmV2QnV0dG9uIT09IGZhbHNlP2A8YnV0dG9uIGNsYXNzPVwid2ViaXhfaGludF9idXR0b24gd2ViaXhfaGludF9idXR0b25fcHJldiB3ZWJpeF9oaW50X2J1dHRvbl9oaWRkZW5cIj4ke3R5cGVvZiBzZXR0aW5ncy5wcmV2QnV0dG9uID09IFwic3RyaW5nXCI/c2V0dGluZ3MucHJldkJ1dHRvbjpgJHt3ZWJpeC5pMThuLmhpbnQucHJldn1gfTwvYnV0dG9uPmA6XCJcIn1cblx0XHRcdFx0JHtzZXR0aW5ncy5uZXh0QnV0dG9uIT09IGZhbHNlP2A8YnV0dG9uIGNsYXNzPVwid2ViaXhfaGludF9idXR0b24gd2ViaXhfaGludF9idXR0b25fbmV4dFwiPiR7dHlwZW9mIHNldHRpbmdzLm5leHRCdXR0b24gPT0gXCJzdHJpbmdcIj9zZXR0aW5ncy5uZXh0QnV0dG9uOmAke3dlYml4LmkxOG4uaGludC5uZXh0fWB9PC9idXR0b24+YDpcIlwifVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwid2ViaXhfaGludF9idXR0b25fY2xvc2VcIiB0aXRsZT1cIkNsb3NlXCI+JiMxMDAwNTs8L2J1dHRvbj5cblx0XHQ8L2Rpdj5gO1xuXHR9LFxuXHRfc2V0UHJvcGVydGllcyhzdGVwRWwsIHJlZnJlc2gpIHtcblx0XHRpZighd2ViaXguZW52Lm1vYmlsZSkge1xuXHRcdFx0c3RlcEVsLnNjcm9sbEludG9WaWV3KGZhbHNlKTtcblx0XHR9XG5cdFx0dGhpcy5fc3RlcCA9IHRoaXMuY29uZmlnLnN0ZXBzW3RoaXMuX2ldO1xuXHRcdHRoaXMuX3JlRHJhdyhzdGVwRWwsIHJlZnJlc2gpO1xuXHRcdHRoaXMuX2hpbnQgPSB0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIud2ViaXhfaGludFwiKTtcblxuXHRcdGxldCBwYWRkaW5nID0gMzA7XG5cdFx0bGV0IGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdFx0bGV0IGJveCA9IHN0ZXBFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRsZXQgZWxMZWZ0ID0gYm94LmxlZnQgKyB0aGlzLl9zdGVwLnBhZGRpbmc7XG5cdFx0bGV0IGhpZ2hsaWdodFdpZHRoID0gYm94LndpZHRoO1xuXHRcdGxldCBoaWdobGlnaHRIZWlnaHQgPSBib3guaGVpZ2h0O1xuXHRcdGxldCBoaW50TGVmdCA9IGVsTGVmdCAtIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHRsZXQgaGludFdpZHRoID0gdGhpcy5faGludC5vZmZzZXRXaWR0aDtcblx0XHRsZXQgaGludEhlaWdodCA9IHRoaXMuX2hpbnQub2Zmc2V0SGVpZ2h0O1xuXHRcdGxldCBlbFRvcCA9IHdlYml4LmVudi5tb2JpbGUgPyBib3gudG9wICsgdGhpcy5fc3RlcC5wYWRkaW5nIDogYm94LnRvcCArIHRoaXMuX3N0ZXAucGFkZGluZyArIHdpbmRvdy5wYWdlWU9mZnNldDtcblx0XHRsZXQgaGludFRvcCA9IGVsVG9wICsgaGlnaGxpZ2h0SGVpZ2h0ICsgdGhpcy5fc3RlcC5wYWRkaW5nICsgcGFkZGluZztcblx0XHRsZXQgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAmJiBkb2NFbGVtLmNsaWVudFdpZHRoID8gTWF0aC5taW4od2luZG93LmlubmVyV2lkdGgsIGRvY0VsZW0uY2xpZW50V2lkdGgpIDogd2luZG93LmlubmVyV2lkdGggfHwgZG9jRWxlbS5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uY2xpZW50V2lkdGg7XG5cdFx0bGV0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAmJiBkb2NFbGVtLmNsaWVudEhlaWdodCA/IE1hdGgubWluKHdpbmRvdy5pbm5lcldpZHRoLCBkb2NFbGVtLmNsaWVudEhlaWdodCkgOiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jRWxlbS5jbGllbnRIZWlnaHQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmNsaWVudEhlaWdodDtcblx0XHRcblx0XHRzdGVwRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYWxsXCI7XG5cdFx0c3RlcEVsLnN0eWxlLnVzZXJTZWxlY3QgPSBcImluaXRpYWxcIjtcblxuXHRcdC8vIHNldCBoaW50IHBvc2l0aW9uXG5cdFx0aWYoZWxMZWZ0IC0gd2luZG93V2lkdGggPiAwKSB7XG5cdFx0XHRlbExlZnQgPSBlbExlZnQgLSB3aW5kb3dXaWR0aCArIGhpbnRXaWR0aCArIGhpZ2hsaWdodFdpZHRoO1xuXHRcdH1cblxuXHRcdGlmKHdpbmRvd0hlaWdodCAvMiA8IGVsVG9wKSB7IC8vIGJvdHRvbVxuXHRcdFx0aGludFRvcCA9IGVsVG9wIC0gaGludEhlaWdodCAtIHBhZGRpbmcgLSB0aGlzLl9zdGVwLnBhZGRpbmcqMjtcblx0XHR9IGVsc2UgaWYod2luZG93V2lkdGggLzIgPCBlbExlZnQgJiYgZWxMZWZ0ICsgaGludFdpZHRoIDwgd2luZG93V2lkdGggJiYgaGlnaGxpZ2h0V2lkdGggKyBoaW50V2lkdGggPCB3aW5kb3dXaWR0aCkgeyAvLyByaWdodFxuXHRcdFx0aGludFRvcCA9IGhpZ2hsaWdodEhlaWdodCAvIDIgKyBlbFRvcCAtIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHRcdGhpbnRMZWZ0ID0gZWxMZWZ0IC0gaGludFdpZHRoIC0gdGhpcy5fc3RlcC5wYWRkaW5nIC0gcGFkZGluZztcblx0XHR9IGVsc2UgaWYod2luZG93V2lkdGggLzIgPiBlbExlZnQgJiYgZWxMZWZ0ICsgaGludFdpZHRoICsgaGlnaGxpZ2h0V2lkdGggPCB3aW5kb3dXaWR0aCkgeyAvLyBsZWZ0XG5cdFx0XHRoaW50TGVmdCA9IGhpZ2hsaWdodFdpZHRoICsgZWxMZWZ0ICsgcGFkZGluZztcblx0XHRcdGhpbnRUb3AgPSBlbFRvcCAtIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHR9IGVsc2UgaWYoaGludFRvcD53aW5kb3dIZWlnaHQgJiYgaGludEhlaWdodCtoaWdobGlnaHRIZWlnaHQ8d2luZG93SGVpZ2h0KS8vdG9wLCBidXQgaGludCBkb2VzIG5vdCBmaXRcblx0XHRcdGhpbnRUb3AgPSBlbFRvcCAtIGhpbnRIZWlnaHQgLSBwYWRkaW5nIC0gdGhpcy5fc3RlcC5wYWRkaW5nKjI7XG5cdFx0ZWxzZSBpZihoaW50VG9wPndpbmRvd0hlaWdodCl7IFx0XG5cdFx0XHRoaW50TGVmdCA9IGVsTGVmdCAtIGhpbnRXaWR0aCAtIHRoaXMuX3N0ZXAucGFkZGluZyoyIC0gcGFkZGluZztcblx0XHRcdGhpbnRUb3AgPSBlbFRvcCAtIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHR9XG5cblx0XHRpZihoaW50TGVmdCArIGhpbnRXaWR0aCA+IHdpbmRvd1dpZHRoKSB7IC8vIGZvciBvdmVyZmxvd1xuXHRcdFx0aGludExlZnQgPSB3aW5kb3dXaWR0aCAtIGhpbnRXaWR0aDtcblx0XHR9IGVsc2UgaWYoaGludFRvcCA8IDAgfHwgaGludFRvcCA+d2luZG93SGVpZ2h0KSB7XG5cdFx0XHRoaW50VG9wID0gcGFkZGluZztcblx0XHR9IGVsc2UgaWYod2luZG93V2lkdGggPCBoaWdobGlnaHRXaWR0aCB8fCBoaW50TGVmdCA8IDApIHtcblx0XHRcdGhpbnRMZWZ0ID0gcGFkZGluZztcblx0XHR9XG5cdFx0aWYod2ViaXguZW52Lm1vYmlsZSkge1xuXHRcdFx0c3RlcEVsLnNjcm9sbEludG9WaWV3KGZhbHNlKTtcblx0XHR9XG5cdFx0dGhpcy5faGludC5zdHlsZS5jc3NUZXh0ID0gYHRvcDoke2hpbnRUb3B9cHg7IGxlZnQ6JHtoaW50TGVmdH1weDtgO1xuXHRcdHRoaXMuX3NldEF0dHJpYnV0ZXModGhpcy4kdmlldy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2ViaXhfaGludF9vdmVybGF5X2hvbGVfZWxcIilbMF0sIHtcInhcIjplbExlZnQtdGhpcy5fc3RlcC5wYWRkaW5nKjIsIFwieVwiOmVsVG9wLXRoaXMuX3N0ZXAucGFkZGluZyoyLCBcIndpZHRoXCI6aGlnaGxpZ2h0V2lkdGgrdGhpcy5fc3RlcC5wYWRkaW5nICoyLCBcImhlaWdodFwiOmhpZ2hsaWdodEhlaWdodCt0aGlzLl9zdGVwLnBhZGRpbmcqMn0pO1xuXHRcdHdlYml4Lmh0bWwuYWRkQ3NzKHRoaXMuZ2V0Tm9kZSgpLCBcIndlYml4X2hpbnRfYW5pbWF0ZWRcIik7XG5cdH0sXG5cdF9zZXRBdHRyaWJ1dGVzKGVsLCBhdHRycykge1xuXHRcdGZvcih2YXIga2V5IGluIGF0dHJzKSB7XG5cdFx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0XHR9XG5cdH0sXG5cdF9yZURyYXcoc3RlcEVsLCByZWZyZXNoKSB7XG5cdFx0bGV0IHRpdGxlID0gdGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwiLndlYml4X2hpbnRfdGl0bGVcIik7XG5cdFx0bGV0IGVsO1xuXG5cdFx0dGhpcy5fc3RlcC5ldmVudEVsP2VsID0gdGhpcy5fZ2V0RWwodGhpcy5fc3RlcC5ldmVudEVsKTplbCA9IHN0ZXBFbDtcblx0XHRpZih0aGlzLl9pID4gMCAmJiAhcmVmcmVzaCkge1xuXHRcdFx0d2ViaXguaHRtbC5yZW1vdmVDc3ModGhpcy5nZXROb2RlKCksIFwid2ViaXhfaGludF9hbmltYXRlZFwiKTtcblx0XHRcdHRpdGxlLmlubmVySFRNTCA9IHRoaXMuX3N0ZXAudGl0bGUgfHwgXCJcIjtcblx0XHRcdHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcIi53ZWJpeF9oaW50X2xhYmVsXCIpLmlubmVySFRNTCA9IHRoaXMuX3N0ZXAudGV4dCB8fCBcIlwiO1xuXHRcdFx0dGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwiLndlYml4X2hpbnRfcHJvZ3Jlc3NcIikuaW5uZXJIVE1MID0gYCR7dGhpcy5faSsxfS8ke3RoaXMuY29uZmlnLnN0ZXBzLmxlbmd0aH1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9kcmF3SGludCgpO1xuXHRcdFx0dGhpcy5fc2V0RXZlbnRzQnV0dG9ucyhlbCk7XG5cdFx0fVxuXHRcdGlmKCF0aGlzLl9zdGVwLnRpdGxlICYmIHRpdGxlKSB7XG5cdFx0XHR0aXRsZS5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcblx0XHR9XG5cdFx0dGhpcy5fc2V0RWxFdmVudHMoZWwpO1xuXG5cdFx0aWYodGhpcy5faSA+IDApIHsgLy8gcHJldmlvdXMgYnV0dG9uIHNob3dcblx0XHRcdHdlYml4Lmh0bWwucmVtb3ZlQ3NzKHRoaXMuX3ByZXZCdXR0b24sIFwid2ViaXhfaGludF9idXR0b25faGlkZGVuXCIpO1xuXHRcdH0gZWxzZSBpZih0aGlzLl9wcmV2QnV0dG9uICYmICF0aGlzLl9wcmV2QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcIndlYml4X2hpbnRfYnV0dG9uX2hpZGRlblwiKSkge1xuXHRcdFx0d2ViaXguaHRtbC5hZGRDc3ModGhpcy5fcHJldkJ1dHRvbiwgXCJ3ZWJpeF9oaW50X2J1dHRvbl9oaWRkZW5cIik7XG5cdFx0fVxuXHRcdGlmKHRoaXMuX2kgPT09IHRoaXMuY29uZmlnLnN0ZXBzLmxlbmd0aCAtMSkgeyAvLyBuZXh0IGJ1dHRvbiB0ZXh0XG5cdFx0XHR0aGlzLl9uZXh0QnV0dG9uLmlubmVySFRNTCA9IGAke3R5cGVvZiB0aGlzLmNvbmZpZy5uZXh0QnV0dG9uID09IFwic3RyaW5nXCI/dGhpcy5jb25maWcubmV4dEJ1dHRvbjpgJHt3ZWJpeC5pMThuLmhpbnQubGFzdH1gfWA7XG5cdFx0fVxuXHR9LFxuXHRfc2V0Qm9keUNsYXNzKCkge1xuXHRcdGxldCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblx0XHRpZihib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIndlYml4X2hpbnRfb3ZlcmZsb3dcIikpIHtcblx0XHRcdHdlYml4Lmh0bWwucmVtb3ZlQ3NzKGJvZHksIFwid2ViaXhfaGludF9vdmVyZmxvd1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2ViaXguaHRtbC5hZGRDc3MoYm9keSwgXCJ3ZWJpeF9oaW50X292ZXJmbG93XCIpO1xuXHRcdH1cblx0fSxcblx0X2dldEVsKGVsKSB7XG5cdFx0aWYoJCQoZWwpKSB7XG5cdFx0XHRyZXR1cm4gJCQoZWwpLmdldE5vZGUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpO1xuXHRcdH1cblx0fSxcblx0X2RyYXdTdGVwcyhyZWZyZXNoKSB7XG5cdFx0aWYodGhpcy5jb25maWcuc3RlcHNbdGhpcy5faV0pIHtcblx0XHRcdGxldCBlbCA9IHRoaXMuX2dldEVsKHRoaXMuY29uZmlnLnN0ZXBzW3RoaXMuX2ldLmVsKTtcblx0XHRcdGlmKHRoaXMuX2kgPT09IDAgJiYgIXJlZnJlc2gpIHtcblx0XHRcdFx0dGhpcy5jYWxsRXZlbnQoXCJvbkJlZm9yZVN0YXJ0XCIsIFtdKTtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7IC8vIGZvciBmaXJzdCBpbml0XG5cdFx0XHRcdFx0dGhpcy5fZHJhd092ZXIoZWwpO1xuXHRcdFx0XHR9LCAxMDApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fc2V0UHJvcGVydGllcyhlbCwgcmVmcmVzaCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3NraXAoKTtcblx0XHR9XG5cdH0sXG5cdF9zZXRFdmVudHNCdXR0b25zKCkge1xuXHRcdHRoaXMuX3ByZXZCdXR0b24gPSB0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud2ViaXhfaGludF9idXR0b25fcHJldlwiKVswXTtcblx0XHR0aGlzLl9uZXh0QnV0dG9uID0gdGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yQWxsKFwiLndlYml4X2hpbnRfYnV0dG9uX25leHRcIilbMF07XG5cdFx0bGV0IGVsO1xuXHRcdGlmKHRoaXMuX25leHRCdXR0b24pIHtcblx0XHRcdHdlYml4LmV2ZW50KHRoaXMuX25leHRCdXR0b24sIFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl9uZXh0KGVsLCBcIm5leHRcIik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYodGhpcy5fcHJldkJ1dHRvbikge1xuXHRcdFx0d2ViaXguZXZlbnQodGhpcy5fcHJldkJ1dHRvbiwgXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdHdlYml4Lmh0bWwucmVtb3ZlQ3NzKHRoaXMuZ2V0Tm9kZSgpLCBcIndlYml4X2hpbnRfYW5pbWF0ZWRcIik7XG5cdFx0XHRcdHRoaXMuX2hpbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9oaW50KTtcblx0XHRcdFx0dGhpcy5faSAtPSAyO1xuXHRcdFx0XHR0aGlzLl9uZXh0KGVsLCBcInByZXZpb3VzXCIpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHdlYml4LmV2ZW50KHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcIi53ZWJpeF9oaW50X2J1dHRvbl9jbG9zZVwiKSwgXCJjbGlja1wiLCAoKSA9PiB7IHRoaXMuX3NraXAoKTsgfSk7XG5cdH0sXG5cdF9zZXRFbEV2ZW50cyhzdGVwRWwpIHtcblx0XHRsZXQgZXZlbnRTdGVwID0gdGhpcy5fc3RlcC5ldmVudDtcblx0XHRzdGVwRWwuZm9jdXMoKTtcblx0XHRpZihldmVudFN0ZXApIHtcblx0XHRcdGlmKGV2ZW50U3RlcCA9PT0gXCJlbnRlclwiKSB7XG5cdFx0XHRcdGV2ZW50U3RlcCA9IFwia2V5ZG93blwiO1xuXHRcdFx0fVxuXHRcdFx0aWYodGhpcy5fZXZlbnRPYmopIHtcblx0XHRcdFx0d2ViaXguZXZlbnRSZW1vdmUodGhpcy5fZXZlbnRPYmopO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fZXZlbnRPYmogPSB3ZWJpeC5ldmVudChzdGVwRWwsIGV2ZW50U3RlcCwgKGUpID0+IHtcblx0XHRcdFx0aWYoZXZlbnRTdGVwID09IGUudHlwZSkge1xuXHRcdFx0XHRcdGlmKGUudHlwZSA9PT0gXCJrZXlkb3duXCIgJiYgZS5rZXlDb2RlICE9PSAxMykgcmV0dXJuO1xuXHRcdFx0XHRcdHN0ZXBFbC5mb2N1cygpO1xuXHRcdFx0XHRcdHRoaXMuX25leHQoc3RlcEVsKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH0sXG5cdF9uZXh0KHN0ZXBFbCwgYWN0aW9uKSB7XG5cdFx0YWN0aW9uID0gYWN0aW9uIHx8IFwibmV4dFwiO1xuXHRcdGlmICh0aGlzLl9zdGVwLm5leHQgJiYgYWN0aW9uID09PSBcIm5leHRcIiB8fCB0aGlzLl9zdGVwLnByZXZpb3VzICYmIGFjdGlvbiA9PT0gXCJwcmV2aW91c1wiKSB7XG5cdFx0XHRsZXQgcHJvbWlzZSA9IHRoaXMuX3N0ZXBbYWN0aW9uXSgpO1xuXHRcdFx0aWYgKHByb21pc2UudGhlbil7XG5cdFx0XHRcdHJldHVybiBwcm9taXNlLnRoZW4oICgpID0+IHtcblx0XHRcdFx0XHR0aGlzLl9uZXh0U3RlcChzdGVwRWwsIGFjdGlvbik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuX25leHRTdGVwKHN0ZXBFbCwgYWN0aW9uKTtcblx0fSxcblx0X25leHRTdGVwKHN0ZXBFbCwgYWN0aW9uKSB7XG5cdFx0bGV0IGVsID0gdGhpcy5fZ2V0RWwodGhpcy5fc3RlcC5lbCk7XG5cdFx0ZWwuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiXCI7XG5cdFx0ZWwuc3R5bGUudXNlclNlbGVjdCA9IFwiXCI7XG5cdFx0ZWwuYmx1cigpO1xuXHRcdHRoaXMuX2krKztcblx0XHRpZihhY3Rpb24gIT09IFwicHJldmlvdXNcIikge1xuXHRcdFx0dGhpcy5fZHJhd1N0ZXBzKCk7XG5cdFx0XHR0aGlzLmNhbGxFdmVudChcIm9uTmV4dFwiLCBbdGhpcy5faSsxXSk7XG5cdFx0fVxuXHRcdGlmKGFjdGlvbiA9PT0gXCJwcmV2aW91c1wiKSB7XG5cdFx0XHR0aGlzLl9kcmF3U3RlcHMoXCJwcmV2aW91c1wiKTtcblx0XHRcdHRoaXMuY2FsbEV2ZW50KFwib25QcmV2aW91c1wiLCBbdGhpcy5faSsxXSk7XG5cdFx0fVxuXHR9LFxuXHRfc2tpcCgpIHtcblx0XHRpZiAodGhpcy5faSA9PT0gLTEpIHJldHVybjtcblxuXHRcdHRoaXMuY2FsbEV2ZW50KFwib25Ta2lwXCIsIFt0aGlzLl9pKzFdKTtcblx0XHR0aGlzLmhpZGUoKTtcblx0XHR0aGlzLl9zZXRCb2R5Q2xhc3MoKTtcblx0XHRpZih0aGlzLl9pID09PSB0aGlzLmNvbmZpZy5zdGVwcy5sZW5ndGgpIHtcblx0XHRcdHRoaXMuY2FsbEV2ZW50KFwib25FbmRcIiwgW3RoaXMuX2krMV0pO1xuXHRcdFx0dGhpcy5faSA9IC0xO1xuXHRcdH1cblx0fSxcblx0X3JlZnJlc2goaSwgZmlyc3REcmF3KSB7XG5cdFx0dGhpcy5faSA9IGktMTtcblx0XHR0aGlzLl9zZXRCb2R5Q2xhc3MoKTtcblx0XHRpZih0aGlzLl9oaW50KSB7XG5cdFx0XHRpZih0aGlzLl9oaW50LnBhcmVudE5vZGUpXG5cdFx0XHRcdHRoaXMuX2hpbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9oaW50KTtcblx0XHRcdHdlYml4Lmh0bWwucmVtb3ZlQ3NzKHRoaXMuZ2V0Tm9kZSgpLCBcIndlYml4X2hpbnRfYW5pbWF0ZWRcIik7XG5cdFx0fVxuXHRcdHRoaXMuc2hvdygpO1xuXHRcdGlmKGZpcnN0RHJhdykge1xuXHRcdFx0bGV0IHN2ZyA9IHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcInN2Z1wiKTtcblx0XHRcdGlmIChzdmcpXG5cdFx0XHRcdHN2Zy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN2Zyk7XG5cdFx0XHR0aGlzLl9kcmF3U3RlcHMoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fZHJhd1N0ZXBzKFwicmVmcmVzaFwiKTtcblx0XHRcdHRoaXMuX3NldEJvZHlDbGFzcygpO1xuXHRcdH1cblx0fSxcblx0c3RhcnQoKSB7XG5cdFx0dGhpcy5fcmVmcmVzaCgxLCB0cnVlKTtcblx0fSxcblx0ZW5kKCkge1xuXHRcdHRoaXMuX3NraXAoKTtcblx0fSxcblx0Z2V0Q3VycmVudFN0ZXAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2krMTtcblx0fSxcblx0cmVzdW1lKHN0ZXBOdW1iZXIpIHtcblx0XHRpZih0aGlzLl9oaW50KXtcblx0XHRcdHN0ZXBOdW1iZXIgPSBzdGVwTnVtYmVyIHx8ICh0aGlzLl9pKzEpO1xuXHRcdFx0dGhpcy5fcmVmcmVzaChzdGVwTnVtYmVyKTtcblx0XHR9XG5cdH0sXG5cdGdldFN0ZXBzKCkge1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZy5zdGVwcztcblx0fSxcblx0c2V0U3RlcHModmFsdWUpIHtcblx0XHR0aGlzLmRlZmluZShcInN0ZXBzXCIsIHZhbHVlKTtcblx0fVxufSwgd2ViaXgudWkudmlldywgd2ViaXguRXZlbnRTeXN0ZW0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaGludC5qcyIsImV4cG9ydCBsZXQgYmUgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJiZS1CWVwiXSA9IHtcblx0aGludDp7XG5cdFx0bmV4dDogXCLQndCw0YHRgtGD0L/QvdGLXCIsXG5cdFx0cHJldjogXCLQn9Cw0L/Rj9GA0Y3QtNC90ZZcIixcblx0XHRsYXN0OiBcItCa0LDQvdC10YYg0KLRg9GA0LBcIlxuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9iZS5qcyIsIi8qR2VybWFuIChHZXJtYW55KSBsb2NhbGUqL1xuZXhwb3J0IGxldCBkZSA9IHdlYml4LmkxOG4ubG9jYWxlc1tcImRlLURFXCJdID0ge1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIk7DpGNoc3RlclwiLFxuXHRcdHByZXY6IFwiQmlzaGVyaWdlXCIsXG5cdFx0bGFzdDogXCJFbmRlIFRvdXJcIlxuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2RlLmpzIiwiZXhwb3J0IGxldCBlbiA9IHdlYml4LmkxOG4ubG9jYWxlc1tcImVuLVVTXCJdPXtcblx0aGludDp7XG5cdFx0bmV4dDogXCJOZXh0XCIsXG5cdFx0cHJldjogXCJQcmV2aW91c1wiLFxuXHRcdGxhc3Q6IFwiRW5kIFRvdXJcIlxuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9lbi5qcyIsIi8qU3BhbmlzaCAoU3BhaW4sIEludGVybmF0aW9uYWwgU29ydCkgbG9jYWxlKi9cbmV4cG9ydCBsZXQgZXMgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJlcy1FU1wiXSA9IHtcblx0aGludDp7XG5cdFx0bmV4dDogXCJTaWd1aWVudGVcIixcblx0XHRwcmV2OiBcIkFudGVyaW9yXCIsXG5cdFx0bGFzdDogXCJGaW4gZGUgVmlhamVcIlxuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL2VzLmpzIiwiZXhwb3J0IGxldCBmciA9IHdlYml4LmkxOG4ubG9jYWxlc1tcImZyLUZSXCJdPXtcblx0aGludDp7XG5cdFx0bmV4dDogXCJQcm9jaGFpblwiLFxuXHRcdHByZXY6IFwiUHLDqWPDqWRlbnRcIixcblx0XHRsYXN0OiBcIkVuZCBUb3VyXCJcblx0fVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vZnIuanMiLCIvKkl0YWxpYW4gKEl0YWx5KSBsb2NhbGUqL1xuZXhwb3J0IGxldCBpdCA9IHdlYml4LmkxOG4ubG9jYWxlc1tcIml0LUlUXCJdID0ge1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIlNlZ3VlbnRlXCIsXG5cdFx0cHJldjogXCJQcmVjZWRlbnRlXCIsXG5cdFx0bGFzdDogXCJFbmQgVG91clwiXG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vaXQuanMiLCJleHBvcnQgbGV0IGphID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiamEtSlBcIl09e1xuXHRoaW50Ontcblx0XHRuZXh0OiBcIuasoVwiLFxuXHRcdHByZXY6IFwi5YmNXCIsXG5cdFx0bGFzdDogXCLntYLkuobjg4TjgqLjg7xcIlxuXHR9XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9qYS5qcyIsImV4cG9ydCBsZXQgcHQgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJwdC1CUlwiXSA9IHtcblx0aGludDp7XG5cdFx0bmV4dDogXCJQcsOzeGltb1wiLFxuXHRcdHByZXY6IFwiQW50ZXJpb3JcIixcblx0XHRsYXN0OiBcIkVuZCBUb3VyXCJcblx0fVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NvdXJjZXMvaTE4bi9wdC5qcyIsImV4cG9ydCBsZXQgcnUgPSB3ZWJpeC5pMThuLmxvY2FsZXNbXCJydS1SVVwiXT17XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwi0KHQu9C10LTRg9GO0YnQuNC5XCIsXG5cdFx0cHJldjogXCLQn9GA0LXQtNGL0LTRg9GJ0LjQuVwiLFxuXHRcdGxhc3Q6IFwi0JrQvtC90LXRhiDQotGD0YDQsFwiXG5cdH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9pMThuL3J1LmpzIiwiLypDaGluZXNlIChTaW1wbGlmaWVkLCBQUkMpIGxvY2FsZSovXG5leHBvcnQgbGV0IHpoID0gd2ViaXguaTE4bi5sb2NhbGVzW1wiemgtQ05cIl0gPSB7XG5cdGhpbnQ6e1xuXHRcdG5leHQ6IFwi5LiL5LiA5LiqXCIsXG5cdFx0cHJldjogXCLku6XliY1cIixcblx0XHRsYXN0OiBcIue7k+adn+W3oeinhlwiXG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2kxOG4vemguanMiXSwic291cmNlUm9vdCI6IiJ9