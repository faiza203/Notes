const yargs = require("yargs");

const argv = yargs.argv;

const command = argv._.length > 0 ? yargs.argv._[0] : undefined;
console.log(command);
