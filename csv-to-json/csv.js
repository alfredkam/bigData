var fs = require('fs');

exports.parse = function(filename, config) {
	var csv = fs.readFileSync(filename).toString().split("\n");
	var json = [];
	config.console = typeof(config.console) !== 'undefined' ? config.console : true;

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

	if (config.console) {
		console.log("Parsed Items: "+json.length);
	}

	this.json = json;
	return json;
}

exports.write = function(filename, config) {
	var json = this.json;
	config.console = typeof(config.console) !== 'undefined' ? config.console : true;

	fs.writeFile(filename, JSON.stringify(json), function(err) {
		if (err) {
			console.log(err);
		} else if (config.console) {
			console.log("File saved");
		}
	});
}

//console.log(json);


