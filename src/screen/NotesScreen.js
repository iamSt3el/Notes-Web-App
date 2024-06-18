import React from "react";
import IndexList from "../components/IndexList";
import NoteBlock from "../components/NoteBlock";

const NotesScreen = () => {
    return (
        <div className="notes-page">
            <IndexList/>
            <NoteBlock/>
        </div>
    )
}

export default NotesScreen;