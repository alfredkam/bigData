var fs = require('fs');

module.exports = {
    setfs: function (fsModule) {
        fs = fsModule;
    },
    parse: function (config, next) {
        var filename = config.filename;
        var opts = config.opts || {};   // options to enable configurations
        var json = [];

        if (!filename) {
            next('Missing filename');
        }

        var csv = fs.readFileSync(filename).toString().split("\n");
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
        next(null, json);
        return;
    },
    write: function (config, next) {
        fs.writeFile(filename, JSON.stringify(json), function(err) {
            if (err) {
                next(err);
                return;
            }
            next(null, "File saved");
            return;
        });
    }
};
