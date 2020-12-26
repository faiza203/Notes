const yargs = require("yargs");

const argv = yargs.argv;
const command = argv._.length > 0 ? yargs.argv._[0].toUpperCase() : undefined;
let index = require('./index');

if(command){

    if(command === "ADD") {
 let  note = index.addNote(yargs.argv.title , yargs.argv.body)
 if(note){ 
     console.log("Note is Added")
     console.log(`Title :  ${note.title}`)
    console.log(`Body : ${note.body}`)
}else {
    console.log("You have already note of this title")
}}

 else if(command === "READ") {
 let note = index.readNote(yargs.argv.title)
 if(note){ 
    console.log("Your Note is here")
    console.log(`Title :  ${note.title}`)
   console.log(`Body : ${note.body}`)
}else {
    console.log("I cant find Note of this title")
}}

 else if(command === "LIST"){
     let notes =  index.listNotes()
     console.log(`Printing  ${notes.length} Notes : `);
     notes.forEach(note => {
        console.log(`Title :  ${note.title} and  Body : ${note.body}`)
          });
    }
 else if(command === "REMOVE") {
 let note = index.removeNote(yargs.argv.title);
 console.log('Title' , yargs.argv.title);
 console.log(note);
 } 
 else console.log(`Your command ${yargs.argv._[0]} not recognize`) 
}