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
		var settings = this._settings;
		this.$view.innerHTML += "<div class=\"webix_hint\">\n\t\t\t<span class='webix_hint_title'>" + (this._step.title ? this._step.title : "") + "</span>\n\t\t\t<p class=\"webix_hint_label\">" + this._step.text + "</p>\n\t\t\t<div class=\"webix_hint_progress\">\n\t\t\t\t" + (this._i + 1) + "/" + this.config.steps.length + "\n\t\t\t</div>\n\t\t\t<div class=\"webix_hint_buttons\">\n\t\t\t\t" + (settings.prevButton !== false ? "<button class=\"webix_hint_button webix_hint_button_prev webix_hint_button_hidden\">" + (typeof settings.prevButton == "string" ? settings.prevButton : "" + _locales.locale.prev) + "</button>" : "") + "\n\t\t\t\t" + (settings.nextButton !== false ? "<button class=\"webix_hint_button webix_hint_button_next\">" + (typeof settings.nextButton == "string" ? settings.nextButton : "" + _locales.locale.next) + "</button>" : "") + "\n\t\t\t</div>\n\t\t\t<button class=\"webix_hint_button_close\" title=\"Close\">&#10005;</button>\n\t\t</div>";
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
			this._nextButton.innerHTML = "" + (typeof this._settings.nextButton == "string" ? this._settings.nextButton : "" + _locales.locale.last);
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

		if (this._settings.steps[this._i]) {
			var el = this._getEl(this._settings.steps[this._i].el);
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWY3NWY3MGYzYWE2NDVjZDEyOWQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9sb2NhbGVzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5sZXNzIiwid2VicGFjazovLy8uL3NvdXJjZXMvaGludC5qcyJdLCJuYW1lcyI6WyJsb2NhbGUiLCJuZXh0IiwicHJldiIsImxhc3QiLCJ3ZWJpeCIsInByb3RvVUkiLCJuYW1lIiwiZGVmYXVsdHMiLCJzdGVwcyIsImJvcmRlcmxlc3MiLCJuZXh0QnV0dG9uIiwicHJldkJ1dHRvbiIsIiRpbml0IiwiJHZpZXciLCJjbGFzc05hbWUiLCJfaSIsIl9zZXRCb2R5Q2xhc3MiLCJhdHRhY2hFdmVudCIsIl9ldmVudE9iakVzYyIsImV2ZW50UmVtb3ZlIiwiX2V2ZW50T2JqQ2xvc2UiLCJldmVudCIsImRvY3VtZW50IiwiYm9keSIsImUiLCJrZXlDb2RlIiwiX3NraXAiLCJkb2N1bWVudEVsZW1lbnQiLCJ0YXJnZXQiLCJzdGVwc19zZXR0ZXIiLCJjb25maWciLCJuZXdDb25maWciLCJpIiwibGVuZ3RoIiwicGFkZGluZyIsInRleHQiLCJwdXNoIiwiX2RyYXdPdmVyIiwic3RlcEVsIiwiaW5uZXJIVE1MIiwiX3NldFByb3BlcnRpZXMiLCJjYWxsRXZlbnQiLCJfZHJhd0hpbnQiLCJzZXR0aW5ncyIsIl9zZXR0aW5ncyIsIl9zdGVwIiwidGl0bGUiLCJyZWZyZXNoIiwiZW52IiwibW9iaWxlIiwic2Nyb2xsSW50b1ZpZXciLCJfcmVEcmF3IiwiX2hpbnQiLCJxdWVyeVNlbGVjdG9yIiwiZG9jRWxlbSIsImJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImVsTGVmdCIsImxlZnQiLCJoaWdobGlnaHRXaWR0aCIsIndpZHRoIiwiaGlnaGxpZ2h0SGVpZ2h0IiwiaGVpZ2h0IiwiaGludExlZnQiLCJoaW50V2lkdGgiLCJvZmZzZXRXaWR0aCIsImhpbnRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJlbFRvcCIsInRvcCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiaGludFRvcCIsIndpbmRvd1dpZHRoIiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwiTWF0aCIsIm1pbiIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJ1c2VyU2VsZWN0IiwiY3NzVGV4dCIsIl9zZXRBdHRyaWJ1dGVzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImh0bWwiLCJhZGRDc3MiLCJnZXROb2RlIiwiZWwiLCJhdHRycyIsImtleSIsInNldEF0dHJpYnV0ZSIsImV2ZW50RWwiLCJfZ2V0RWwiLCJyZW1vdmVDc3MiLCJfc2V0RXZlbnRzQnV0dG9ucyIsIm1hcmdpbiIsIl9zZXRFbEV2ZW50cyIsIl9wcmV2QnV0dG9uIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJfbmV4dEJ1dHRvbiIsIiQkIiwiX2RyYXdTdGVwcyIsInNldFRpbWVvdXQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX25leHQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJldmVudFN0ZXAiLCJmb2N1cyIsIl9ldmVudE9iaiIsInR5cGUiLCJhY3Rpb24iLCJwcmV2aW91cyIsInByb21pc2UiLCJ0aGVuIiwiX25leHRTdGVwIiwiYmx1ciIsImhpZGUiLCJzdGFydCIsIl9yZWZyZXNoIiwiZW5kIiwiZmlyc3REcmF3Iiwic2hvdyIsInN2ZyIsImdldEN1cnJlbnRTdGVwIiwicmVzdW1lIiwic3RlcE51bWJlciIsImdldFN0ZXBzIiwic2V0U3RlcHMiLCJ2YWx1ZSIsImRlZmluZSIsInVpIiwidmlldyIsIkV2ZW50U3lzdGVtIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FB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SkMsS0E1U0ksRUE0U0c7QUFDZixPQUFLQyxNQUFMLENBQVksT0FBWixFQUFxQkQsS0FBckI7QUFDQTtBQTlTWSxDQUFkLEVBK1NHbEksTUFBTW9JLEVBQU4sQ0FBU0MsSUEvU1osRUErU2tCckksTUFBTXNJLFdBL1N4QixFIiwiZmlsZSI6ImhpbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jb2RlYmFzZS9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhZjc1ZjcwZjNhYTY0NWNkMTI5ZCIsImV4cG9ydCBsZXQgbG9jYWxlID0ge1xuXHRuZXh0OiBcIk5leHRcIixcblx0cHJldjogXCJQcmV2aW91c1wiLFxuXHRsYXN0OiBcIkVuZCBUb3VyXCJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc291cmNlcy9sb2NhbGVzLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NvdXJjZXMvaGludC5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBcIi4vaGludC5sZXNzXCI7XG5pbXBvcnQgeyBsb2NhbGUgfSBmcm9tIFwiLi9sb2NhbGVzXCI7XG5cbndlYml4LnByb3RvVUkoe1xuXHRuYW1lOiBcImhpbnRcIixcblx0ZGVmYXVsdHM6IHtcblx0XHRzdGVwczogW10sXG5cdFx0Ym9yZGVybGVzczogdHJ1ZSxcblx0XHRuZXh0QnV0dG9uOiB0cnVlLFxuXHRcdHByZXZCdXR0b246IHRydWVcblx0fSxcblx0JGluaXQoKSB7XG5cdFx0dGhpcy4kdmlldy5jbGFzc05hbWUgKz0gXCIgd2ViaXhfaGludF92aWV3XCI7XG5cdFx0dGhpcy5faSA9IC0xO1xuXHRcdHRoaXMuX3NldEJvZHlDbGFzcygpO1xuXHRcdHRoaXMuYXR0YWNoRXZlbnQoXCJvbkRlc3RydWN0XCIsICgpID0+IHtcblx0XHRcdHRoaXMuX3NldEJvZHlDbGFzcygpO1xuXHRcdFx0aWYodGhpcy5fZXZlbnRPYmpFc2MpIHtcblx0XHRcdFx0d2ViaXguZXZlbnRSZW1vdmUodGhpcy5fZXZlbnRPYmpFc2MpO1xuXHRcdFx0fVxuXHRcdFx0aWYodGhpcy5fZXZlbnRPYmpDbG9zZSkge1xuXHRcdFx0XHR3ZWJpeC5ldmVudFJlbW92ZSh0aGlzLl9ldmVudE9iakNsb3NlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLl9ldmVudE9iakVzYyA9IHdlYml4LmV2ZW50KGRvY3VtZW50LmJvZHksXCJrZXlkb3duXCIsIChlKSA9PiB7XG5cdFx0XHQvLyBlc2NhcGVcblx0XHRcdGlmIChlLmtleUNvZGUgPT0gMjcpe1xuXHRcdFx0XHR0aGlzLl9za2lwKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5fZXZlbnRPYmpDbG9zZSA9IHdlYml4LmV2ZW50KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0XHRpZihlLnRhcmdldCA9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcblx0XHRcdFx0dGhpcy5fc2tpcCgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXHRzdGVwc19zZXR0ZXIoY29uZmlnKSB7XG5cdFx0dmFyIG5ld0NvbmZpZyA9IFtdO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY29uZmlnLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25maWdbaV0ucGFkZGluZyA9IGNvbmZpZ1tpXS5wYWRkaW5nIHx8IDA7XG5cdFx0XHRjb25maWdbaV0udGV4dCA9IGNvbmZpZ1tpXS50ZXh0IHx8IFwiXCI7XG5cdFx0XHRuZXdDb25maWcucHVzaChjb25maWdbaV0pO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3Q29uZmlnO1xuXHR9LFxuXHRfZHJhd092ZXIoc3RlcEVsKSB7XG5cdFx0dGhpcy4kdmlldy5pbm5lckhUTUwgKz0gYDxzdmcgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgY2xhc3M9XCJ3ZWJpeF9oaW50X292ZXJsYXlcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiPlxuXHRcdFx0PGRlZnM+XG5cdFx0XHRcdDxtYXNrIGlkPVwiaG9sZVwiPlxuXHRcdFx0XHRcdDxyZWN0IGNsYXNzPVwid2ViaXhfaGludF9vdmVybGF5X2hvbGVcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cIndoaXRlXCIvPlxuXHRcdFx0XHRcdDxyZWN0IGNsYXNzPVwid2ViaXhfaGludF9vdmVybGF5X2hvbGUgd2ViaXhfaGludF9vdmVybGF5X2hvbGVfZWxcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIwXCIgaGVpZ2h0PVwiMFwiIGZpbGw9XCJ3aGl0ZVwiLz5cblx0XHRcdFx0PC9tYXNrPlxuXHRcdFx0PC9kZWZzPlxuXHRcdFx0PHJlY3QgY2xhc3M9XCJ3ZWJpeF9oaW50X292ZXJsYXlfaG9sZVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBtYXNrPVwidXJsKCNob2xlKVwiIC8+XG5cdFx0PC9zdmc+YDtcblx0XHR0aGlzLl9zZXRQcm9wZXJ0aWVzKHN0ZXBFbCk7XG5cdFx0dGhpcy5jYWxsRXZlbnQoXCJvbkFmdGVyU3RhcnRcIiwgW10pO1xuXHR9LFxuXHRfZHJhd0hpbnQoKSB7XG5cdFx0bGV0IHNldHRpbmdzID0gdGhpcy5fc2V0dGluZ3M7XG5cdFx0dGhpcy4kdmlldy5pbm5lckhUTUwgKz0gYDxkaXYgY2xhc3M9XCJ3ZWJpeF9oaW50XCI+XG5cdFx0XHQ8c3BhbiBjbGFzcz0nd2ViaXhfaGludF90aXRsZSc+JHt0aGlzLl9zdGVwLnRpdGxlP3RoaXMuX3N0ZXAudGl0bGU6XCJcIn08L3NwYW4+XG5cdFx0XHQ8cCBjbGFzcz1cIndlYml4X2hpbnRfbGFiZWxcIj4ke3RoaXMuX3N0ZXAudGV4dH08L3A+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwid2ViaXhfaGludF9wcm9ncmVzc1wiPlxuXHRcdFx0XHQke3RoaXMuX2krMX0vJHt0aGlzLmNvbmZpZy5zdGVwcy5sZW5ndGh9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ3ZWJpeF9oaW50X2J1dHRvbnNcIj5cblx0XHRcdFx0JHtzZXR0aW5ncy5wcmV2QnV0dG9uIT09IGZhbHNlP2A8YnV0dG9uIGNsYXNzPVwid2ViaXhfaGludF9idXR0b24gd2ViaXhfaGludF9idXR0b25fcHJldiB3ZWJpeF9oaW50X2J1dHRvbl9oaWRkZW5cIj4ke3R5cGVvZiBzZXR0aW5ncy5wcmV2QnV0dG9uID09IFwic3RyaW5nXCI/c2V0dGluZ3MucHJldkJ1dHRvbjpgJHtsb2NhbGUucHJldn1gfTwvYnV0dG9uPmA6XCJcIn1cblx0XHRcdFx0JHtzZXR0aW5ncy5uZXh0QnV0dG9uIT09IGZhbHNlP2A8YnV0dG9uIGNsYXNzPVwid2ViaXhfaGludF9idXR0b24gd2ViaXhfaGludF9idXR0b25fbmV4dFwiPiR7dHlwZW9mIHNldHRpbmdzLm5leHRCdXR0b24gPT0gXCJzdHJpbmdcIj9zZXR0aW5ncy5uZXh0QnV0dG9uOmAke2xvY2FsZS5uZXh0fWB9PC9idXR0b24+YDpcIlwifVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwid2ViaXhfaGludF9idXR0b25fY2xvc2VcIiB0aXRsZT1cIkNsb3NlXCI+JiMxMDAwNTs8L2J1dHRvbj5cblx0XHQ8L2Rpdj5gO1xuXHR9LFxuXHRfc2V0UHJvcGVydGllcyhzdGVwRWwsIHJlZnJlc2gpIHtcblx0XHRpZighd2ViaXguZW52Lm1vYmlsZSkge1xuXHRcdFx0c3RlcEVsLnNjcm9sbEludG9WaWV3KGZhbHNlKTtcblx0XHR9XG5cdFx0dGhpcy5fc3RlcCA9IHRoaXMuY29uZmlnLnN0ZXBzW3RoaXMuX2ldO1xuXHRcdHRoaXMuX3JlRHJhdyhzdGVwRWwsIHJlZnJlc2gpO1xuXHRcdHRoaXMuX2hpbnQgPSB0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIud2ViaXhfaGludFwiKTtcblxuXHRcdGxldCBwYWRkaW5nID0gMzA7XG5cdFx0bGV0IGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdFx0bGV0IGJveCA9IHN0ZXBFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRsZXQgZWxMZWZ0ID0gYm94LmxlZnQgKyB0aGlzLl9zdGVwLnBhZGRpbmc7XG5cdFx0bGV0IGhpZ2hsaWdodFdpZHRoID0gc3RlcEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuXHRcdGxldCBoaWdobGlnaHRIZWlnaHQgPSBzdGVwRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXHRcdGxldCBoaW50TGVmdCA9IGVsTGVmdCAtIHRoaXMuX3N0ZXAucGFkZGluZztcblx0XHRsZXQgaGludFdpZHRoID0gdGhpcy5faGludC5vZmZzZXRXaWR0aDtcblx0XHRsZXQgaGludEhlaWdodCA9IHRoaXMuX2hpbnQub2Zmc2V0SGVpZ2h0O1xuXHRcdGxldCBlbFRvcCA9IHdlYml4LmVudi5tb2JpbGUgPyBib3gudG9wICsgdGhpcy5fc3RlcC5wYWRkaW5nIDogYm94LnRvcCArIHRoaXMuX3N0ZXAucGFkZGluZyArIHdpbmRvdy5wYWdlWU9mZnNldDtcblx0XHRsZXQgaGludFRvcCA9IGVsVG9wICsgaGlnaGxpZ2h0SGVpZ2h0ICsgdGhpcy5fc3RlcC5wYWRkaW5nICsgcGFkZGluZztcblx0XHRsZXQgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAmJiBkb2NFbGVtLmNsaWVudFdpZHRoID8gTWF0aC5taW4od2luZG93LmlubmVyV2lkdGgsIGRvY0VsZW0uY2xpZW50V2lkdGgpIDogd2luZG93LmlubmVyV2lkdGggfHwgZG9jRWxlbS5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uY2xpZW50V2lkdGg7XG5cdFx0bGV0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAmJiBkb2NFbGVtLmNsaWVudEhlaWdodCA/IE1hdGgubWluKHdpbmRvdy5pbm5lcldpZHRoLCBkb2NFbGVtLmNsaWVudEhlaWdodCkgOiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jRWxlbS5jbGllbnRIZWlnaHQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmNsaWVudEhlaWdodDtcblx0XHRcblx0XHRzdGVwRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYWxsXCI7XG5cdFx0c3RlcEVsLnN0eWxlLnVzZXJTZWxlY3QgPSBcImluaXRpYWxcIjtcblxuXHRcdC8vIHNldCBoaW50IHBvc2l0aW9uXG5cdFx0aWYoZWxMZWZ0IC0gd2luZG93V2lkdGggPiAwKSB7XG5cdFx0XHRlbExlZnQgPSBlbExlZnQgLSB3aW5kb3dXaWR0aCArIGhpbnRXaWR0aCArIGhpZ2hsaWdodFdpZHRoO1xuXHRcdH1cblx0XHRpZih3aW5kb3dIZWlnaHQgLzIgPCBlbFRvcCkgeyAvLyBib3R0b21cblx0XHRcdGhpbnRUb3AgPSBlbFRvcCAtIGhpbnRIZWlnaHQgLSBwYWRkaW5nIC0gdGhpcy5fc3RlcC5wYWRkaW5nO1xuXHRcdH0gZWxzZSBpZih3aW5kb3dXaWR0aCAvMiA8IGVsTGVmdCAmJiBlbExlZnQgKyBoaW50V2lkdGggPCB3aW5kb3dXaWR0aCAmJiBoaWdobGlnaHRXaWR0aCArIGhpbnRXaWR0aCA8IHdpbmRvd1dpZHRoKSB7IC8vIHJpZ2h0XG5cdFx0XHRoaW50VG9wID0gaGlnaGxpZ2h0SGVpZ2h0IC8gMiArIGVsVG9wIC0gdGhpcy5fc3RlcC5wYWRkaW5nO1xuXHRcdFx0aGludExlZnQgPSBlbExlZnQgLSBoaW50V2lkdGggLSB0aGlzLl9zdGVwLnBhZGRpbmcgLSBwYWRkaW5nO1xuXHRcdH0gZWxzZSBpZih3aW5kb3dXaWR0aCAvMiA+IGVsTGVmdCAmJiBlbExlZnQgKyBoaW50V2lkdGggKyBoaWdobGlnaHRXaWR0aCA8IHdpbmRvd1dpZHRoKSB7IC8vIGxlZnRcblx0XHRcdGhpbnRMZWZ0ID0gaGlnaGxpZ2h0V2lkdGggKyBlbExlZnQgKyBwYWRkaW5nICsgdGhpcy5fc3RlcC5wYWRkaW5nO1xuXHRcdFx0aGludFRvcCA9IGVsVG9wIC0gdGhpcy5fc3RlcC5wYWRkaW5nO1xuXHRcdH1cblxuXHRcdGlmKGhpbnRMZWZ0ICsgaGludFdpZHRoID4gd2luZG93V2lkdGgpIHsgLy8gZm9yIG92ZXJmbG93XG5cdFx0XHRoaW50TGVmdCA9IHdpbmRvd1dpZHRoIC0gaGludFdpZHRoO1xuXHRcdH0gZWxzZSBpZihoaW50VG9wIDwgMCkge1xuXHRcdFx0aGludFRvcCA9IDA7XG5cdFx0fSBlbHNlIGlmKHdpbmRvd1dpZHRoIDwgaGlnaGxpZ2h0V2lkdGgpIHtcblx0XHRcdGhpbnRMZWZ0ID0gMDtcblx0XHR9XG5cdFx0aWYod2ViaXguZW52Lm1vYmlsZSkge1xuXHRcdFx0c3RlcEVsLnNjcm9sbEludG9WaWV3KGZhbHNlKTtcblx0XHR9XG5cdFx0dGhpcy5faGludC5zdHlsZS5jc3NUZXh0ID0gYHRvcDoke2hpbnRUb3B9cHg7IGxlZnQ6JHtoaW50TGVmdH1weDtgO1xuXHRcdHRoaXMuX3NldEF0dHJpYnV0ZXModGhpcy4kdmlldy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwid2ViaXhfaGludF9vdmVybGF5X2hvbGVfZWxcIilbMF0sIHtcInhcIjplbExlZnQtdGhpcy5fc3RlcC5wYWRkaW5nKjIsIFwieVwiOmVsVG9wLXRoaXMuX3N0ZXAucGFkZGluZyoyLCBcIndpZHRoXCI6aGlnaGxpZ2h0V2lkdGgrdGhpcy5fc3RlcC5wYWRkaW5nICoyLCBcImhlaWdodFwiOmhpZ2hsaWdodEhlaWdodCt0aGlzLl9zdGVwLnBhZGRpbmcqMn0pO1xuXHRcdHdlYml4Lmh0bWwuYWRkQ3NzKHRoaXMuZ2V0Tm9kZSgpLCBcIndlYml4X2hpbnRfYW5pbWF0ZWRcIik7XG5cdH0sXG5cdF9zZXRBdHRyaWJ1dGVzKGVsLCBhdHRycykge1xuXHRcdGZvcih2YXIga2V5IGluIGF0dHJzKSB7XG5cdFx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0XHR9XG5cdH0sXG5cdF9yZURyYXcoc3RlcEVsLCByZWZyZXNoKSB7XG5cdFx0bGV0IHRpdGxlID0gdGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwiLndlYml4X2hpbnRfdGl0bGVcIik7XG5cdFx0bGV0IGVsO1xuXG5cdFx0dGhpcy5fc3RlcC5ldmVudEVsP2VsID0gdGhpcy5fZ2V0RWwodGhpcy5fc3RlcC5ldmVudEVsKTplbCA9IHN0ZXBFbDtcblx0XHRpZih0aGlzLl9pID4gMCAmJiAhcmVmcmVzaCkge1xuXHRcdFx0d2ViaXguaHRtbC5yZW1vdmVDc3ModGhpcy5nZXROb2RlKCksIFwid2ViaXhfaGludF9hbmltYXRlZFwiKTtcblx0XHRcdHRpdGxlLmlubmVySFRNTCA9IHRoaXMuX3N0ZXAudGl0bGUgfHwgXCJcIjtcblx0XHRcdHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcIi53ZWJpeF9oaW50X2xhYmVsXCIpLmlubmVySFRNTCA9IHRoaXMuX3N0ZXAudGV4dCB8fCBcIlwiO1xuXHRcdFx0dGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwiLndlYml4X2hpbnRfcHJvZ3Jlc3NcIikuaW5uZXJIVE1MID0gYCR7dGhpcy5faSsxfS8ke3RoaXMuY29uZmlnLnN0ZXBzLmxlbmd0aH1gO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9kcmF3SGludCgpO1xuXHRcdFx0dGhpcy5fc2V0RXZlbnRzQnV0dG9ucyhlbCk7XG5cdFx0fVxuXHRcdGlmKCF0aGlzLl9zdGVwLnRpdGxlICYmIHRpdGxlKSB7XG5cdFx0XHR0aXRsZS5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcblx0XHR9XG5cdFx0dGhpcy5fc2V0RWxFdmVudHMoZWwpO1xuXG5cdFx0aWYodGhpcy5faSA+IDApIHsgLy8gcHJldmlvdXMgYnV0dG9uIHNob3dcblx0XHRcdHdlYml4Lmh0bWwucmVtb3ZlQ3NzKHRoaXMuX3ByZXZCdXR0b24sIFwid2ViaXhfaGludF9idXR0b25faGlkZGVuXCIpO1xuXHRcdH0gZWxzZSBpZih0aGlzLl9wcmV2QnV0dG9uICYmICF0aGlzLl9wcmV2QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcIndlYml4X2hpbnRfYnV0dG9uX2hpZGRlblwiKSkge1xuXHRcdFx0d2ViaXguaHRtbC5hZGRDc3ModGhpcy5fcHJldkJ1dHRvbiwgXCJ3ZWJpeF9oaW50X2J1dHRvbl9oaWRkZW5cIik7XG5cdFx0fVxuXHRcdGlmKHRoaXMuX2kgPT09IHRoaXMuY29uZmlnLnN0ZXBzLmxlbmd0aCAtMSkgeyAvLyBuZXh0IGJ1dHRvbiB0ZXh0XG5cdFx0XHR0aGlzLl9uZXh0QnV0dG9uLmlubmVySFRNTCA9IGAke3R5cGVvZiB0aGlzLl9zZXR0aW5ncy5uZXh0QnV0dG9uID09IFwic3RyaW5nXCI/dGhpcy5fc2V0dGluZ3MubmV4dEJ1dHRvbjpgJHtsb2NhbGUubGFzdH1gfWA7XG5cdFx0fVxuXHR9LFxuXHRfc2V0Qm9keUNsYXNzKCkge1xuXHRcdGxldCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblx0XHRpZihib2R5LmNsYXNzTGlzdC5jb250YWlucyhcIndlYml4X2hpbnRfb3ZlcmZsb3dcIikpIHtcblx0XHRcdHdlYml4Lmh0bWwucmVtb3ZlQ3NzKGJvZHksIFwid2ViaXhfaGludF9vdmVyZmxvd1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2ViaXguaHRtbC5hZGRDc3MoYm9keSwgXCJ3ZWJpeF9oaW50X292ZXJmbG93XCIpO1xuXHRcdH1cblx0fSxcblx0X2dldEVsKGVsKSB7XG5cdFx0aWYoJCQoZWwpKSB7XG5cdFx0XHRyZXR1cm4gJCQoZWwpLmdldE5vZGUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpO1xuXHRcdH1cblx0fSxcblx0X2RyYXdTdGVwcyhyZWZyZXNoKSB7XG5cdFx0aWYodGhpcy5fc2V0dGluZ3Muc3RlcHNbdGhpcy5faV0pIHtcblx0XHRcdGxldCBlbCA9IHRoaXMuX2dldEVsKHRoaXMuX3NldHRpbmdzLnN0ZXBzW3RoaXMuX2ldLmVsKTtcblx0XHRcdGlmKHRoaXMuX2kgPT09IDAgJiYgIXJlZnJlc2gpIHtcblx0XHRcdFx0dGhpcy5jYWxsRXZlbnQoXCJvbkJlZm9yZVN0YXJ0XCIsIFtdKTtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7IC8vIGZvciBmaXJzdCBpbml0XG5cdFx0XHRcdFx0dGhpcy5fZHJhd092ZXIoZWwpO1xuXHRcdFx0XHR9LCAxMDApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fc2V0UHJvcGVydGllcyhlbCwgcmVmcmVzaCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX3NraXAoKTtcblx0XHR9XG5cdH0sXG5cdF9zZXRFdmVudHNCdXR0b25zKCkge1xuXHRcdHRoaXMuX3ByZXZCdXR0b24gPSB0aGlzLiR2aWV3LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud2ViaXhfaGludF9idXR0b25fcHJldlwiKVswXTtcblx0XHR0aGlzLl9uZXh0QnV0dG9uID0gdGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yQWxsKFwiLndlYml4X2hpbnRfYnV0dG9uX25leHRcIilbMF07XG5cdFx0bGV0IGVsO1xuXHRcdGlmKHRoaXMuX25leHRCdXR0b24pIHtcblx0XHRcdHdlYml4LmV2ZW50KHRoaXMuX25leHRCdXR0b24sIFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl9uZXh0KGVsLCBcIm5leHRcIik7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYodGhpcy5fcHJldkJ1dHRvbikge1xuXHRcdFx0d2ViaXguZXZlbnQodGhpcy5fcHJldkJ1dHRvbiwgXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdHdlYml4Lmh0bWwucmVtb3ZlQ3NzKHRoaXMuZ2V0Tm9kZSgpLCBcIndlYml4X2hpbnRfYW5pbWF0ZWRcIik7XG5cdFx0XHRcdHRoaXMuX2hpbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9oaW50KTtcblx0XHRcdFx0dGhpcy5faSAtPSAyO1xuXHRcdFx0XHR0aGlzLl9uZXh0KGVsLCBcInByZXZpb3VzXCIpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHdlYml4LmV2ZW50KHRoaXMuJHZpZXcucXVlcnlTZWxlY3RvcihcIi53ZWJpeF9oaW50X2J1dHRvbl9jbG9zZVwiKSwgXCJjbGlja1wiLCAoKSA9PiB7IHRoaXMuX3NraXAoKTsgfSk7XG5cdH0sXG5cdF9zZXRFbEV2ZW50cyhzdGVwRWwpIHtcblx0XHRsZXQgZXZlbnRTdGVwID0gdGhpcy5fc3RlcC5ldmVudDtcblx0XHRzdGVwRWwuZm9jdXMoKTtcblx0XHRpZihldmVudFN0ZXApIHtcblx0XHRcdGlmKGV2ZW50U3RlcCA9PT0gXCJlbnRlclwiKSB7XG5cdFx0XHRcdGV2ZW50U3RlcCA9IFwia2V5ZG93blwiO1xuXHRcdFx0fVxuXHRcdFx0aWYodGhpcy5fZXZlbnRPYmopIHtcblx0XHRcdFx0d2ViaXguZXZlbnRSZW1vdmUodGhpcy5fZXZlbnRPYmopO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fZXZlbnRPYmogPSB3ZWJpeC5ldmVudChzdGVwRWwsIGV2ZW50U3RlcCwgKGUpID0+IHtcblx0XHRcdFx0aWYoZXZlbnRTdGVwID09IGUudHlwZSkge1xuXHRcdFx0XHRcdGlmKGUudHlwZSA9PT0gXCJrZXlkb3duXCIgJiYgZS5rZXlDb2RlICE9PSAxMykgcmV0dXJuO1xuXHRcdFx0XHRcdHN0ZXBFbC5mb2N1cygpO1xuXHRcdFx0XHRcdHRoaXMuX25leHQoc3RlcEVsKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH0sXG5cdF9uZXh0KHN0ZXBFbCwgYWN0aW9uKSB7XG5cdFx0YWN0aW9uID0gYWN0aW9uIHx8IFwibmV4dFwiO1xuXHRcdGlmICh0aGlzLl9zdGVwLm5leHQgJiYgYWN0aW9uID09PSBcIm5leHRcIiB8fCB0aGlzLl9zdGVwLnByZXZpb3VzICYmIGFjdGlvbiA9PT0gXCJwcmV2aW91c1wiKSB7XG5cdFx0XHRsZXQgcHJvbWlzZSA9IHRoaXMuX3N0ZXBbYWN0aW9uXSgpO1xuXHRcdFx0aWYgKHByb21pc2UudGhlbil7XG5cdFx0XHRcdHJldHVybiBwcm9taXNlLnRoZW4oICgpID0+IHtcblx0XHRcdFx0XHR0aGlzLl9uZXh0U3RlcChzdGVwRWwsIGFjdGlvbik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuX25leHRTdGVwKHN0ZXBFbCwgYWN0aW9uKTtcblx0fSxcblx0X25leHRTdGVwKHN0ZXBFbCwgYWN0aW9uKSB7XG5cdFx0bGV0IGVsID0gdGhpcy5fZ2V0RWwodGhpcy5fc3RlcC5lbCk7XG5cdFx0ZWwuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiXCI7XG5cdFx0ZWwuc3R5bGUudXNlclNlbGVjdCA9IFwiXCI7XG5cdFx0ZWwuYmx1cigpO1xuXHRcdHRoaXMuX2krKztcblx0XHRpZihhY3Rpb24gIT09IFwicHJldmlvdXNcIikge1xuXHRcdFx0dGhpcy5fZHJhd1N0ZXBzKCk7XG5cdFx0XHR0aGlzLmNhbGxFdmVudChcIm9uTmV4dFwiLCBbdGhpcy5faSsxXSk7XG5cdFx0fVxuXHRcdGlmKGFjdGlvbiA9PT0gXCJwcmV2aW91c1wiKSB7XG5cdFx0XHR0aGlzLl9kcmF3U3RlcHMoXCJwcmV2aW91c1wiKTtcblx0XHRcdHRoaXMuY2FsbEV2ZW50KFwib25QcmV2aW91c1wiLCBbdGhpcy5faSsxXSk7XG5cdFx0fVxuXHR9LFxuXHRfc2tpcCgpIHtcblx0XHRpZiAodGhpcy5faSA9PT0gLTEpIHJldHVybjtcblxuXHRcdHRoaXMuY2FsbEV2ZW50KFwib25Ta2lwXCIsIFt0aGlzLl9pKzFdKTtcblx0XHR0aGlzLmhpZGUoKTtcblx0XHR0aGlzLl9zZXRCb2R5Q2xhc3MoKTtcblx0XHRpZih0aGlzLl9pID09PSB0aGlzLmNvbmZpZy5zdGVwcy5sZW5ndGgpIHtcblx0XHRcdHRoaXMuY2FsbEV2ZW50KFwib25FbmRcIiwgW3RoaXMuX2krMV0pO1xuXHRcdFx0dGhpcy5faSA9IC0xO1xuXHRcdH1cblx0fSxcblx0c3RhcnQ6ZnVuY3Rpb24oKXtcblx0XHR0aGlzLl9yZWZyZXNoKDAsIHRydWUpO1xuXHR9LFxuXHRlbmQ6ZnVuY3Rpb24oKXtcblx0XHR0aGlzLl9za2lwKCk7XG5cdH0sXG5cdF9yZWZyZXNoKGksIGZpcnN0RHJhdykge1xuXHRcdHRoaXMuX2kgPSBpO1xuXHRcdGlmKCF0aGlzLl9oaW50KSB7XG5cdFx0XHR0aGlzLl9zZXRCb2R5Q2xhc3MoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5faGludC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX2hpbnQpO1xuXHRcdFx0d2ViaXguaHRtbC5yZW1vdmVDc3ModGhpcy5nZXROb2RlKCksIFwid2ViaXhfaGludF9hbmltYXRlZFwiKTtcblx0XHR9XG5cdFx0dGhpcy5zaG93KCk7XG5cdFx0aWYoZmlyc3REcmF3KSB7XG5cdFx0XHRsZXQgc3ZnID0gdGhpcy4kdmlldy5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpO1xuXHRcdFx0aWYgKHN2Zylcblx0XHRcdFx0c3ZnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3ZnKTtcblx0XHRcdHRoaXMuX2RyYXdTdGVwcygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9kcmF3U3RlcHMoXCJyZWZyZXNoXCIpO1xuXHRcdFx0dGhpcy5fc2V0Qm9keUNsYXNzKCk7XG5cdFx0fVxuXHR9LFxuXHRnZXRDdXJyZW50U3RlcCgpIHtcblx0XHRyZXR1cm4gdGhpcy5faTtcblx0fSxcblx0cmVzdW1lKHN0ZXBOdW1iZXIpIHtcblx0XHRzdGVwTnVtYmVyID0gc3RlcE51bWJlciB8fCAodGhpcy5faSsxKTtcblx0XHR0aGlzLl9yZWZyZXNoKHN0ZXBOdW1iZXIpO1xuXHR9LFxuXHRnZXRTdGVwcygpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25maWcuc3RlcHM7XG5cdH0sXG5cdHNldFN0ZXBzKHZhbHVlKSB7XG5cdFx0dGhpcy5kZWZpbmUoXCJzdGVwc1wiLCB2YWx1ZSk7XG5cdH1cbn0sIHdlYml4LnVpLnZpZXcsIHdlYml4LkV2ZW50U3lzdGVtKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2VzL2hpbnQuanMiXSwic291cmNlUm9vdCI6IiJ9