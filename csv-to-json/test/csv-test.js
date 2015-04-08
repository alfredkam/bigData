var chai = require('chai');
var expect = chai.expect;
var csv = require('../lib/csv');
var sampleCSV = require('./sampleCSV');
var sampleJson = require('./sampleJson');

describe('csv parse test', function (){
    var fs = {
        readFile: function () {
            var next = arguments[arguments.length-1];
            next(null, sampleCSV); 
        }
    };
    // mock fs
    beforeEach(function () {
        csv.setfs(fs);
    });

    it('should be able to parse csv', function (done) {
        var json = csv.parse({
            filename: 'Sample Filename'
        }, function (err, data) {
            expect(data).to.be.an('array');
            expect(data).to.have.length('3');
            expect(data).to.eql(sampleJson);
            done();
        });
        return;
    });
});

describe('csv write json test', function (){
    var fs = {
        writeFile: function () {
            var next = arguments[arguments.length - 1];
            next(null);
            return;
        }
    };
    beforeEach(function () {
        csv.setfs(fs);
    });
    it('should be able to write csv', function (done) {
        csv.writeJsonToFile({
            json: sampleJson,
            filename: ''
        }, function () {
            done();
        });
        return;
    });
});
        