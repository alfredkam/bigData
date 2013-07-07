csv-to-json
=======

Converts your csv into json structure

Dependencies
====
fs

Usage
=====
var csv = require("./csv.js");

//parses file into json and returns a json object<br>
var json = csv.parse(/*filename to parse from*/);

//writes the parsed file to a file<br>
csv.write(/*filename to be written to */);

