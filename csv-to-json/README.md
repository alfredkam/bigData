##csv-to-json
[![NPM Version](https://img.shields.io/npm/v/csv-to-json.svg)](https://npmjs.org/package/csv-to-json)
[![Downloads](https://img.shields.io/npm/dm/csv-to-json.svg)](https://npmjs.org/package/csv-to-json)
[![Dependencies](https://david-dm.org/alfredkam/bigData.svg)](https://david-dm.org/alfredkam/bigData)
[![Build Status](https://img.shields.io/travis/alfredkam/bigData.svg?branch=master)](https://travis-ci.org/alfredkam/bigData)
[![Coverage Status](https://coveralls.io/repos/alfredkam/bigData/badge.svg?branch=master)](https://coveralls.io/r/alfredkam/yakojs?branch=master)

Converts your csv into json structure

##Usage
```javascript
var csv = require('csv-to-json');
```
###.parse(obj, callback);
Parses the csv and returns it in JSON format
Expected parameters of
```javascript
var obj = {
    filename: PATH_TO_FILE
};
var callback = function(err, json) {
    // Do something
};
```

###.writeJsonToFile(obj, callback)
Writes JSON to file
```javascript
var obj = {
    filename: PATH_TO_FILE,
    json: JSON_OBJECT
};

var callback = function(err) {
    // Do something
};
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

###Test
```npm test```
