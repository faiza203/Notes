const yargs = require("yargs");

const titleOptions = {
    describe: "Show title",
    demand: true,
    alias: "t",
}

const bodyOption = {
    describe: "Show body",
    demand: true,
    alias: "b",
}

const argv = yargs
    .command("add", "Add a new Note", {
        title: titleOptions,
        body: bodyOption
    })

.command("list", "List all the notes")

.command("read", "Read any note", {
    title: titleOptions
})

.command("remove", "Remove any note", {
        title: titleOptions
    }, )
    .help()
    .argv;

const command = yargs.argv._[0];
let index = require('./index');

if (command) {
    if (command === "add") {
        let note = index.addNote(argv.title, argv.body)
        if (note) {
            console.log("Note is Added")
            index.logNote(note)
        } else {
            console.log("You have already note of this title")
        }
    } else if (command === "read") {
        let note = index.readNote(argv.title)
        if (note) {
            console.log("Your Note is here")
            index.logNote(note)
        } else {
            console.log("I cant find Note of this title")
        }
    } else if (command === "list") {
        let notes = index.listNotes()
        console.log(`Printing ${notes.length} Notes : `);
        notes.forEach(note => {
            index.logNote(note)
        });
    } else if (command === "remove") {
        const notes = index.removeNote(argv.title);
        console.log(notes);
    } else console.log(`Your command ${command._[0]} not recognize`)
}