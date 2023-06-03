const containsDuplicate = require('../duplicates.js');
const expect = require('chai').expect;

describe('Testing the Duplicates Algorithm', function () {
    it('It can handle an empty array', function(done){
        expect(containsDuplicate([])).to.equal(false);
        done();
    })
})