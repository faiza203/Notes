const yargs = require("yargs");

const argv = yargs.argv;
const command = argv._.length > 0 ? yargs.argv._[0].toUpperCase() : undefined;
let index = require('./index');

if(command){
    if(command === "ADD") {
        note = index.addNote(yargs.argv.title , yargs.argv.body)
           console.log(note);
     }
    else if(command === "READ") index.readNote(yargs.argv.title)
    else if(command === "LIST") index.listNotes()
    else if(command === "REMOVE") {
        let note = index.removeNote(yargs.argv.title);
        console.log(note);
    } 
    else console.log(`Your command ${yargs.argv._[0]} not recognize`) 
}