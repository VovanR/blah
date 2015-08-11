var assert = require('chai').assert;
var sinon = require('sinon');
var blah = require('../src/index');

describe('#foo', function () {
    it('should fire `_bar`', function () {
        var spy = sinon.spy(blah, '_bar');

        blah.foo(3);
        assert.equal(spy.callCount, 3);

        spy.restore();
    });
});
