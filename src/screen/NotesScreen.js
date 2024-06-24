import React, { useState, useEffect } from "react";
import NoteBlock from "../components/NoteBlock";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";

const NotesScreen = () => {
  const [isPressed, setIsPressed] = useState(true);
  const [markdownContent, setMarkdownContent] = useState("");

  const location = useLocation();
  const repoData = location.state?.data;

  /*useEffect(() => {
    if () {
      setMarkdownContent(repoData);
    }
  }, [repoData]);
*/
  const toggleSidebar = () => {
    if (isPressed == true) {
      document.querySelector(".toggle span").classList.add("toggle");
      document.getElementById("sidebar").classList.add("sidebarshow");
      setIsPressed(false);
    } else if (isPressed == false) {
      document.querySelector(".toggle span").classList.remove("toggle");
      document.getElementById("sidebar").classList.remove("sidebarshow");
      setIsPressed(true);
    }
  };
  return (
    <div className="container">
      <div className="nav-bar">
        <div className="nav-button">
          <button
            onClick={toggleSidebar}
            type="button"
            className="toggle"
            id="toggle"
          >
            <span></span>
          </button>
        </div>
      </div>
      <div className="notes-page">
        {/*<IndexList/>*/}
        <Sidebar setMarkdownContent={setMarkdownContent} />
        <NoteBlock markdownContent={markdownContent} />
      </div>
    </div>
  );
};

export default NotesScreen;
