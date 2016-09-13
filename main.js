(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var langs = [{ "value": "no-val", "text": "Select Language" }, { "value": "en", "text": "English" }, { "value": "es", "text": "Español" }, { "value": "fr", "text": "Français" }];

var Option = function (_React$Component) {
	_inherits(Option, _React$Component);

	function Option() {
		_classCallCheck(this, Option);

		return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
	}

	_createClass(Option, [{
		key: "render",
		value: function render() {

			return React.createElement(
				"option",
				{ value: this.props.value },
				this.props.text
			);
		}
	}]);

	return Option;
}(React.Component);

;

var MainComp = function (_React$Component2) {
	_inherits(MainComp, _React$Component2);

	function MainComp(props) {
		_classCallCheck(this, MainComp);

		var _this2 = _possibleConstructorReturn(this, (MainComp.__proto__ || Object.getPrototypeOf(MainComp)).call(this, props));

		_this2.state = { lang: _this2.props.langData[3] };

		_this2.changeHandler = _this2.changeHandler.bind(_this2);
		_this2.renderOption = _this2.renderOption.bind(_this2);

		return _this2;
	}

	_createClass(MainComp, [{
		key: "renderOption",
		value: function renderOption(e, i) {

			return React.createElement(Option, { key: i, value: e.value, text: e.text });
		}
	}, {
		key: "changeHandler",
		value: function changeHandler(e) {

			var selection = e.target.value;
			var languages = this.props.langData;

			for (var i = 0; i < languages.length; i++) {

				if (selection === languages[i].value) {
					this.setState({ lang: languages[i] });
					break;
				} // if end
			} // loop end
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			console.log(this.props.langData[0]);
		}
	}, {
		key: "render",
		value: function render() {

			return React.createElement(
				"label",
				null,
				"Multiple Select Menu",
				React.createElement(
					"select",
					{ onChange: this.changeHandler, defaultValue: this.state.lang.value },
					this.props.langData.map(this.renderOption)
				)
			);
		}
	}]);

	return MainComp;
}(React.Component);

;

ReactDOM.render(React.createElement(MainComp, { langData: langs }), document.getElementById('main'));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwic3JjXFxNYWluLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7QUNBQSxJQUFJLFFBQVEsQ0FDWCxFQUFDLFNBQVEsUUFBVCxFQUFtQixRQUFPLGlCQUExQixFQURXLEVBRVgsRUFBQyxTQUFRLElBQVQsRUFBZSxRQUFPLFNBQXRCLEVBRlcsRUFHWCxFQUFDLFNBQVEsSUFBVCxFQUFlLFFBQU8sU0FBdEIsRUFIVyxFQUlYLEVBQUMsU0FBUSxJQUFULEVBQWUsUUFBTyxVQUF0QixFQUpXLENBQVo7O0lBUU0sTTs7Ozs7Ozs7Ozs7MkJBRUc7O0FBRVAsVUFDQztBQUFBO0FBQUEsTUFBUSxPQUFPLEtBQUssS0FBTCxDQUFXLEtBQTFCO0FBQWtDLFNBQUssS0FBTCxDQUFXO0FBQTdDLElBREQ7QUFJQTs7OztFQVJtQixNQUFNLFM7O0FBVTFCOztJQUdLLFE7OztBQUVMLG1CQUFZLEtBQVosRUFBa0I7QUFBQTs7QUFBQSxtSEFFWCxLQUZXOztBQUlqQixTQUFLLEtBQUwsR0FBYSxFQUFDLE1BQUssT0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixDQUFwQixDQUFOLEVBQWI7O0FBRUEsU0FBSyxhQUFMLEdBQXFCLE9BQUssYUFBTCxDQUFtQixJQUFuQixRQUFyQjtBQUNBLFNBQUssWUFBTCxHQUFvQixPQUFLLFlBQUwsQ0FBa0IsSUFBbEIsUUFBcEI7O0FBUGlCO0FBU2pCOzs7OytCQUVZLEMsRUFBRSxDLEVBQUU7O0FBRWhCLFVBQU8sb0JBQUMsTUFBRCxJQUFRLEtBQUssQ0FBYixFQUFnQixPQUFPLEVBQUUsS0FBekIsRUFBZ0MsTUFBTSxFQUFFLElBQXhDLEdBQVA7QUFFQTs7O2dDQUVhLEMsRUFBRTs7QUFFZixPQUFJLFlBQVksRUFBRSxNQUFGLENBQVMsS0FBekI7QUFDQSxPQUFJLFlBQVksS0FBSyxLQUFMLENBQVcsUUFBM0I7O0FBRUEsUUFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFVBQVUsTUFBOUIsRUFBc0MsR0FBdEMsRUFBMkM7O0FBRTFDLFFBQUksY0FBYyxVQUFVLENBQVYsRUFBYSxLQUEvQixFQUF1QztBQUN0QyxVQUFLLFFBQUwsQ0FBYyxFQUFDLE1BQUssVUFBVSxDQUFWLENBQU4sRUFBZDtBQUNBO0FBQ0EsS0FMeUMsQ0FLekM7QUFFRCxJQVpjLENBWWQ7QUFFRDs7O3VDQUVtQjtBQUNuQixXQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQUwsQ0FBVyxRQUF2QjtBQUNBOzs7MkJBRU87O0FBRVAsVUFDQztBQUFBO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQSxPQUFRLFVBQVUsS0FBSyxhQUF2QixFQUFzQyxjQUFjLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsS0FBcEU7QUFDRSxVQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLEdBQXBCLENBQXdCLEtBQUssWUFBN0I7QUFERjtBQURELElBREQ7QUFRQTs7OztFQWpEcUIsTUFBTSxTOztBQW1ENUI7O0FBR0QsU0FBUyxNQUFULENBQ0Msb0JBQUMsUUFBRCxJQUFVLFVBQVUsS0FBcEIsR0FERCxFQUNnQyxTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsQ0FEaEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGV0IGxhbmdzID0gW1xyXG5cdHtcInZhbHVlXCI6XCJuby12YWxcIiwgXCJ0ZXh0XCI6XCJTZWxlY3QgTGFuZ3VhZ2VcIn0sXHJcblx0e1widmFsdWVcIjpcImVuXCIsIFwidGV4dFwiOlwiRW5nbGlzaFwifSxcclxuXHR7XCJ2YWx1ZVwiOlwiZXNcIiwgXCJ0ZXh0XCI6XCJFc3Bhw7FvbFwifSxcclxuXHR7XCJ2YWx1ZVwiOlwiZnJcIiwgXCJ0ZXh0XCI6XCJGcmFuw6dhaXNcIn1cclxuXTtcclxuXHJcblxyXG5jbGFzcyBPcHRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG5cdHJlbmRlcigpe1xyXG5cclxuXHRcdHJldHVybihcclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX0+e3RoaXMucHJvcHMudGV4dH08L29wdGlvbj5cclxuXHRcdCk7XHJcblxyXG5cdH1cclxuXHJcbn07XHJcblxyXG5cclxuY2xhc3MgTWFpbkNvbXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtsYW5nOnRoaXMucHJvcHMubGFuZ0RhdGFbM119O1xyXG5cclxuXHRcdHRoaXMuY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5yZW5kZXJPcHRpb24gPSB0aGlzLnJlbmRlck9wdGlvbi5iaW5kKHRoaXMpO1xyXG5cclxuXHR9XHJcblxyXG5cdHJlbmRlck9wdGlvbihlLGkpe1xyXG5cclxuXHRcdHJldHVybiA8T3B0aW9uIGtleT17aX0gdmFsdWU9e2UudmFsdWV9IHRleHQ9e2UudGV4dH0gLz47XHJcblxyXG5cdH1cclxuXHJcblx0Y2hhbmdlSGFuZGxlcihlKXtcclxuXHJcblx0XHRsZXQgc2VsZWN0aW9uID0gZS50YXJnZXQudmFsdWU7XHJcblx0XHRsZXQgbGFuZ3VhZ2VzID0gdGhpcy5wcm9wcy5sYW5nRGF0YTtcclxuXHJcblx0XHRmb3IoIHZhciBpID0gMDsgaSA8IGxhbmd1YWdlcy5sZW5ndGg7IGkrKyApe1xyXG5cclxuXHRcdFx0aWYoIHNlbGVjdGlvbiA9PT0gbGFuZ3VhZ2VzW2ldLnZhbHVlICkge1xyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe2xhbmc6bGFuZ3VhZ2VzW2ldfSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH0vLyBpZiBlbmRcclxuXHJcblx0XHR9Ly8gbG9vcCBlbmRcclxuXHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRVcGRhdGUoKXtcclxuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMubGFuZ0RhdGEpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCl7XHJcblxyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8bGFiZWw+TXVsdGlwbGUgU2VsZWN0IE1lbnVcclxuXHRcdFx0XHQ8c2VsZWN0IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUhhbmRsZXJ9IGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5sYW5nLnZhbHVlfT5cclxuXHRcdFx0XHRcdHt0aGlzLnByb3BzLmxhbmdEYXRhLm1hcCh0aGlzLnJlbmRlck9wdGlvbil9XHJcblx0XHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdDwvbGFiZWw+XHJcblx0XHQpO1xyXG5cclxuXHR9XHJcblxyXG59O1xyXG5cclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuXHQ8TWFpbkNvbXAgbGFuZ0RhdGE9e2xhbmdzfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKVxyXG4pO1xyXG4iXX0=
