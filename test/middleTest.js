const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

describe("#middle", () => {
  it('should equal array of 7 when given 1,7,3', () => {
    assert.deepEqual(middle([1, 7, 3]), [7]);

  });
});
