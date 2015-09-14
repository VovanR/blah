/*
 * blah.js
 * Copyright(c) 2015 Vladimir Rodkin <mail@vovanr.com>
 * MIT Licensed
 */

/* global define */

(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.Blah = factory();
	}
})(this, function () {
	'use strict';

	return {
		/**
		 * @param {Number} count
		 * @return {String}
		 * @public
		 */
		foo: function (count) {
			var result = '';

			while (count-- > 0) {
				result += this._bar();
			}

			return result;
		},

		/**
		 * @return {String}
		 * @private
		 */
		_bar: function () {
			return 'bar';
		}
	};
});
