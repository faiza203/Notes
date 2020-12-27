let fs = require('fs');

const fetchNotes = () => {
    try{
        const alreadyStringNotes = fs.readFileSync('notes.json')
        return  JSON.parse(alreadyStringNotes);
    }
    catch(e){
        return [];
    }
}

const saveNote = (notes) => {
    fs.writeFileSync('notes.json' , JSON.stringify(notes));
}
const addNote = (title , body) => {
    if(!title)console.log("Please add title");
    else if(!body)console.log("Please add body");
    else {
        let notes = fetchNotes();
        const note = {
            title, body
        }
        const filteredNote = notes.filter((note) => {return note.title === title})
        if(filteredNote.length === 0){
            notes.push(note);
            saveNote(notes);
            return note
        }
    }
}

const readNote = (title) => {
    if(!title)console.log("Please add title");
    else {
        const notes = fetchNotes();
        const filteredNote = notes.filter((note) => note.title === title ? note : undefined)
        return filteredNote[0]
       }

}

const listNotes = () => {
    const notes = fetchNotes();
    return notes;
}

const removeNote = (title) => {
    if(!title)console.log("Please add title");
    else {
        const notes = fetchNotes();
        const filteredNote = notes.filter((note ) => note.title !== title);
        saveNote(filteredNote);
        let message = filteredNote.length !== notes.length ? "Note is removed" : "Note not found";
        return message
    }
}

const logNote = (note) => {
    console.log("-----");
    console.log(`Title : ${note.title}`)
   console.log(`Body : ${note.body}`)
   console.log("-----");
}
module.exports = {
    addNote,
    readNote,
    listNotes,
    removeNote,
    logNote
}