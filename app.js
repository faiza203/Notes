const yargs = require("yargs");
const argv = yargs.command('add' , "Add a new Note", {
    title : 
    { 
       describe : "Show title",
       demand :true,
       alias: "t",
    },
    body : 
    { 
       describe : "Show body",
       demand :true,
       alias: "b",
    }
})
.help()
.argv;
const command = argv._.length > 0 ? argv._[0].toUpperCase() : undefined;
let index = require('./index');
if(command){
    if(command === "ADD") {
 let  note = index.addNote(argv.title , argv.body)
 if(note){ 
     console.log("Note is Added")
     index.logNote(note)
}else {
    console.log("You have already note of this title")
}}

 else if(command === "READ") {
 let note = index.readNote(argv.title)
 if(note){ 
    console.log("Your Note is here")
    index.logNote(note)
}else {
    console.log("I cant find Note of this title")
}}

 else if(command === "LIST"){
     let notes =  index.listNotes()
     console.log(`Printing  ${notes.length} Notes : `);
     notes.forEach(note => {
              index.logNote(note)
    });
    }
 else if(command === "REMOVE") {
index.removeNote(argv.title);
 console.log('Note' , argv.title , "is removing");
 } 
 else console.log(`Your command ${command._[0]} not recognize`) 
}
