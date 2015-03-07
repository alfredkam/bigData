##csv-to-json
[![NPM Version](https://img.shields.io/npm/v/csv-to-json.svg)](https://npmjs.org/package/csv-to-json)
[![Downloads](https://img.shields.io/npm/dm/csv-to-json.svg)](https://npmjs.org/package/csv-to-json)
[![Dependencies](https://david-dm.org/alfredkam/bigData.svg)](https://david-dm.org/alfredkam/bigData)
[![Build Status](https://img.shields.io/travis/alfredkam/bigData.svg?branch=master)](https://travis-ci.org/alfredkam/bigData)
[![Coverage Status](https://coveralls.io/repos/alfredkam/bigData/badge.svg?branch=master)](https://coveralls.io/r/alfredkam/yakojs?branch=master)

Converts your csv into json structure

Usage
=====
Parse a csv file like this:
```javascript
var csv = require("./csv.js");
var json = csv.parse('path/to/file'); // Console reads “Parsed Items: #”
```

Writes the parsed file to a file like this:
```javascript
csv.write('path/to/file'); // Console reads “Parsed Items: #”
```

---

By default, a report is sent to the console (“Parsed Items: #” for `.parse()`; “File saved” for `.write()`). You can pass an config object as a second argument with `console: false` to bypass this behavior. Like so:
```javascript
var config = {
    console: false
}
var json = csv.parse('path/to/file', config);
csv.write('path/to/file', config);
```
