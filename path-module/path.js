const path = require("path");

var pathSeparator = path.sep;
console.log(pathSeparator);
// Returns the Platform used Separator like '/' in Linux or '\' for windows

var filePath = path.join("/test-path.join", "readMe.txt");
console.log(filePath);
// Returns the full directory from specified folders and files

var baseName = path.basename(filePath);
console.log(baseName);
// Returns the last file name specified in the directory

var absolutePath = path.resolve(__dirname, "test-path", "readMe.txt");
console.log(absolutePath);
// Returns the Absolute path from the partition to the basename
