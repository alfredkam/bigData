var fs = require('fs');

exports.parse = function(filename) {
	var csv = fs.readFileSync(filename).toString().split("\n");
	var json = [];

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

	console.log("Parsed Items: "+json.length);
	this.json = json;
	return json;
}

exports.write = function(filename) {
	var json = this.json;
	fs.writeFile(filename, JSON.stringify(json), function(err) {
		if(err)
			console.log(err)
		else
			console.log("File saved");
	});
}

//console.log(json);


