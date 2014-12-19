csv-to-json
=======

Converts your csv into json structure

Dependencies
====
fs

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
