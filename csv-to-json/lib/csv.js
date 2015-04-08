var fs = require('fs');

module.exports = {
    setfs: function (fsModule) {
        fs = fsModule;
    },
    parse: function (config, next) {
        var filename = config.filename;
        var opts = config.opts || {};   // options to enable configurations
        var json = [];

        fs.readFile(filename, function (err, data) {
            if (err) {
                return next(err);
            }
            var csv = data.toString().split(/\r\n|\n|\r/);
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
        });
        
        return;
    },
    writeJsonToFile: function (config, next) {
        fs.writeFile(config.filename, JSON.stringify(config.json), function(err) {
            if (err) {
                return next(err);
            }
            next(null);
            return;
        });
    }
};
