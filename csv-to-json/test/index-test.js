var chai = require('chai');
var expect = chai.expect;
var csv = require('../lib/csv');

describe('csv parse test', function (){
    var fs = {
        readFileSync: function () {
            return; // should return a string
        }
    };
    // mock fs
    csv.setfs(fs);

    it('should be able to parse csv', function (done) {
        var json = csv.parse({
            filename: ''
        }, function (json) {
            expect(json).to.be.an('object');
            done();
        });
    });
});

describe('csv write test', function (){
    var fs = {
        writeFile: function () {

        }
    };
    it('should be able to write csv', function (done) {
        csv.write({
            json: json,
            filename: '',
            opts: {

            }
        }, function () {
            done();
        });
    });
});
        