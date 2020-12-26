const yargs = require("yargs");

const argv = yargs.argv;

const command = argv._.length > 0 ? yargs.argv._[0].toUpperCase() : undefined;

if(command){
    if(command === "ADD") console.log("Note is added")
    else if(command === "READ") console.log("Your note is here") 
    else if(command === "LIST") console.log("Notes are following") 
    else if(command === "REMOVE")console.log("Note is removed") 
    else console.log(`Your command ${yargs.argv._[0]} not recognize`) 
}