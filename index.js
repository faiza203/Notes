const addNote = (title , body) => {
    if(!title)console.log("Please add title");
    else if(!body)console.log("Please add body");
    else {
        console.log("Adding Note" , title , body);
    }
}

module.exports = {
    addNote
}