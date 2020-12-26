const addNote = (title , body) => {
    if(!title)console.log("Please add title");
    else if(!body)console.log("Please add body");
    else {
        console.log("Adding Note" , title , body);
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

module.exports = {
    addNote,
    readNote,
    listNotes
}