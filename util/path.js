const path = require("path");

//get the root directory
// module.exports = path.dirname(process.mainModule.filename);
module.exports = path.dirname(require.main.filename);
