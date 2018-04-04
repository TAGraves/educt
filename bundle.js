'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var flatten = _interopDefault(require('lodash/flatten'));

function p() {
  flatten([1, 2, [3, 4]]);
}

module.exports = p;
