const assert = require('chai').assert;
const tail = require('../tail');
const assertEqual = require('../assertEqual');

describe("#tail", () => {
  it("return ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs' ]);
  });
  
  
});


