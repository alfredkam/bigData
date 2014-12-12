var fs = require('fs');

exports.parse = function(filename, reportToConsole) {
	var csv = fs.readFileSync(filename).toString().split("\n");
	var json = [];
	reportToConsole = typeof(reportToConsole) !== 'undefined' ? reportToConsole : true;

	var tokens = csv[0].split(",");

	for(var i=1;i < csv.length;i++) {
		var content = csv[i].split(",");
		var tmp = {};
		for(var j=0;j < tokens.length; j++) {
			try {
				tmp[tokens[j]] = content[j];
			} catch(err) {
				tmp[tokens[j]] = "";
			}
		}
		json.push(tmp);
	}

	if (reportToConsole) {
		console.log("Parsed Items: "+json.length);
	}

	this.json = json;
	return json;
}

exports.write = function(filename, reportToConsole) {
	var json = this.json;
	reportToConsole = typeof(reportToConsole) !== 'undefined' ? reportToConsole : true;

	fs.writeFile(filename, JSON.stringify(json), function(err) {
		if (err) {
			console.log(err);
		} else if (reportToConsole) {
			console.log("File saved");
		}
	});
}

//console.log(json);


