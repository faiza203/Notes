let fs = require('fs');
const addNote = (title , body) => {
    if(!title)console.log("Please add title");
    else if(!body)console.log("Please add body");
    else {
        let notes = [];
        const note = {
            title, body
        }
        try{
            const alreadyStringNotes = fs.readFileSync('notes.json')
            const alreadyNotes = JSON.parse(alreadyStringNotes);
            notes = alreadyNotes;
        }
        catch(e){}
        const filteredNote = notes.filter((note) => {return note.title === title})
        if(filteredNote.length === 0){
            notes.push(note);
            fs.writeFileSync('notes.json' , JSON.stringify(notes));
        }
    }
}

const readNote = (title) => {
    if(!title)console.log("Please add title");
    else {
        console.log("Your Note is Here");
    }
}

const listNotes = () => {
    console.log("Your Notes is Here");
}

const removeNote = (title) => {
    if(!title)console.log("Please add title");
    else  console.log("Your note" , title , "is removed");
}

module.exports = {
    addNote,
    readNote,
    listNotes,
    removeNote
}